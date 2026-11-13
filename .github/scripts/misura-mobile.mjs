// Misura FCP/LCP/CLS e tempi di rete su un telefono, replicando le condizioni
// di PageSpeed Insights (Moto G Power, 4G lenta, CPU rallentata 4x).
// Node, ES module. Usa Playwright (channel "chrome" se il chromium incluso non c'è).
// Uso: node misura-mobile.mjs <indirizzo> [etichetta]

import { chromium } from "playwright";

const INDIRIZZO = process.argv[2];
const ETICHETTA = process.argv[3] || "misura";

if (!INDIRIZZO) {
  console.error("Uso: node misura-mobile.mjs <indirizzo> [etichetta]");
  process.exit(1);
}

const USER_AGENT_ANDROID =
  "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36";

async function avviaBrowser() {
  try {
    const b = await chromium.launch();
    console.log("Browser: chromium di Playwright.");
    return b;
  } catch (e1) {
    console.log("Chromium di Playwright non disponibile (" + e1.message.split("\n")[0] + "), provo channel \"chrome\"...");
    try {
      const b = await chromium.launch({ channel: "chrome" });
      console.log("Browser: Google Chrome del Mac (channel \"chrome\").");
      return b;
    } catch (e2) {
      console.error("Nemmeno Google Chrome del Mac è disponibile per Playwright.");
      console.error(e2.message);
      process.exit(1);
    }
  }
}

function mediana(valori) {
  const v = valori.filter((x) => x != null && !isNaN(x)).slice().sort((a, b) => a - b);
  if (!v.length) return null;
  const meta = Math.floor(v.length / 2);
  return v.length % 2 ? v[meta] : (v[meta - 1] + v[meta]) / 2;
}

async function misuraUnaVolta(browser, indirizzo) {
  const contesto = await browser.newContext({
    viewport: { width: 412, height: 823 },
    deviceScaleFactor: 1.75,
    userAgent: USER_AGENT_ANDROID,
    isMobile: true,
    hasTouch: true,
  });
  const pagina = await contesto.newPage();

  const cdp = await contesto.newCDPSession(pagina);
  await cdp.send("Network.enable");
  await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
  await cdp.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 150,
    downloadThroughput: 209715,
    uploadThroughput: 96000,
  });
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await cdp.send("Performance.enable");

  let byteTotali = 0;
  cdp.on("Network.loadingFinished", (ev) => {
    byteTotali += ev.encodedDataLength || 0;
  });

  await pagina.addInitScript(() => {
    window.__m = {
      fcp: null,
      lcp: null,
      lcpElement: "",
      lcpUrl: "",
      cls: 0,
      heroLogoAt: null,
      heroImgAt: null,
      heroImgUrl: "",
    };
    try {
      new PerformanceObserver(function (list) {
        for (const voce of list.getEntries()) {
          if (voce.name === "first-contentful-paint") window.__m.fcp = voce.startTime;
        }
      }).observe({ type: "paint", buffered: true });
    } catch (e) {}
    try {
      new PerformanceObserver(function (list) {
        const voci = list.getEntries();
        const ultima = voci[voci.length - 1];
        if (ultima) {
          window.__m.lcp = ultima.renderTime || ultima.loadTime || ultima.startTime;
          window.__m.lcpElement = ultima.element
            ? ultima.element.tagName + (ultima.element.className ? "." + String(ultima.element.className).split(" ").join(".") : "")
            : "";
          window.__m.lcpUrl = ultima.url || "";
        }
      }).observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {}
    try {
      new PerformanceObserver(function (list) {
        for (const voce of list.getEntries()) {
          if (!voce.hadRecentInput) window.__m.cls += voce.value;
        }
      }).observe({ type: "layout-shift", buffered: true });
    } catch (e) {}

    const mo = new MutationObserver(function () {
      if (window.__m.heroLogoAt == null) {
        const el = document.querySelector("img.hero-logo");
        if (el) window.__m.heroLogoAt = performance.now();
      }
      if (window.__m.heroImgAt == null) {
        const el = document.querySelector(".hero-img");
        if (el) {
          window.__m.heroImgAt = performance.now();
          const bg = el.style.backgroundImage || "";
          const m = bg.match(/url\(["']?(.*?)["']?\)/);
          window.__m.heroImgUrl = m ? m[1] : "";
        }
      }
      if (window.__m.heroLogoAt != null && window.__m.heroImgAt != null) mo.disconnect();
    });
    mo.observe(document, { childList: true, subtree: true });
  });

  await pagina.goto(indirizzo, { waitUntil: "load", timeout: 60000 });
  await pagina.waitForTimeout(5000);

  const m = await pagina.evaluate(() => window.__m);

  const risorse = await pagina.evaluate((heroImgUrl) => {
    function cerca(regex) {
      const voce = performance.getEntriesByType("resource").find((e) => regex.test(e.name));
      if (!voce) return null;
      return { url: voce.name, inizio: Math.round(voce.startTime), fine: Math.round(voce.responseEnd) };
    }
    let primaFoto = null;
    if (heroImgUrl) {
      const voce = performance.getEntriesByType("resource").find((e) => e.name === heroImgUrl || e.name.indexOf(heroImgUrl) !== -1);
      if (voce) primaFoto = { url: voce.name, inizio: Math.round(voce.startTime), fine: Math.round(voce.responseEnd) };
    }
    return {
      dati: cerca(/\/dati\.js(\?|$)/),
      itinerari: cerca(/\/itinerari\.js(\?|$)/),
      motore: cerca(/\/motore\.js(\?|$)/),
      stile: cerca(/\/stile\.css(\?|$)/),
      primaFoto,
    };
  }, m.heroImgUrl);

  const metriche = await cdp.send("Performance.getMetrics");
  function trovaMetrica(nome) {
    const voce = metriche.metrics.find((x) => x.name === nome);
    return voce ? voce.value : null;
  }

  await contesto.close();

  return {
    fcp: m.fcp != null ? Math.round(m.fcp) : null,
    lcp: m.lcp != null ? Math.round(m.lcp) : null,
    lcpElement: m.lcpElement,
    lcpUrl: m.lcpUrl,
    cls: m.cls,
    heroLogoAt: m.heroLogoAt != null ? Math.round(m.heroLogoAt) : null,
    heroImgAt: m.heroImgAt != null ? Math.round(m.heroImgAt) : null,
    scriptDuration: trovaMetrica("ScriptDuration"),
    taskDuration: trovaMetrica("TaskDuration"),
    layoutDuration: trovaMetrica("LayoutDuration"),
    byteTotali,
    risorse,
  };
}

function stampaRisultato(etichettaMisura, r) {
  console.log("");
  console.log(`--- ${etichettaMisura} ---`);
  console.log(`FCP: ${r.fcp} ms`);
  console.log(`LCP: ${r.lcp} ms  |  elemento: ${r.lcpElement || "-"}  |  url: ${r.lcpUrl || "-"}`);
  console.log(`CLS: ${r.cls.toFixed(4)}`);
  console.log(`img.hero-logo compare a: ${r.heroLogoAt} ms`);
  console.log(`primo .hero-img compare a: ${r.heroImgAt} ms`);
  if (r.risorse.primaFoto) {
    console.log(`Prima foto galleria: ${r.risorse.primaFoto.inizio}–${r.risorse.primaFoto.fine} ms  (${r.risorse.primaFoto.url})`);
  } else {
    console.log("Prima foto galleria: non rilevata");
  }
  console.log(`ScriptDuration: ${r.scriptDuration != null ? r.scriptDuration.toFixed(3) + " s" : "-"}`);
  console.log(`TaskDuration: ${r.taskDuration != null ? r.taskDuration.toFixed(3) + " s" : "-"}`);
  console.log(`LayoutDuration: ${r.layoutDuration != null ? r.layoutDuration.toFixed(3) + " s" : "-"}`);
  console.log(`Byte totali trasferiti: ${r.byteTotali} (${(r.byteTotali / 1024).toFixed(1)} KB)`);
  console.log("Cronologia file:");
  ["dati", "itinerari", "motore", "stile"].forEach((k) => {
    const v = r.risorse[k];
    console.log(`  ${k}: ${v ? `${v.inizio}–${v.fine} ms` : "non trovato"}`);
  });
}

(async function main() {
  console.log(`Indirizzo: ${INDIRIZZO}  |  Etichetta: ${ETICHETTA}`);
  console.log("Profilo: 412x823, dpr 1.75, isMobile, latenza 150ms, 209715 B/s giù, 96000 B/s su, CPU x4");
  const browser = await avviaBrowser();

  const risultati = [];
  for (let i = 1; i <= 3; i++) {
    const r = await misuraUnaVolta(browser, INDIRIZZO);
    risultati.push(r);
    stampaRisultato(`Misura ${i}/3`, r);
  }

  await browser.close();

  console.log("");
  console.log("=== Mediane su 3 misure ===");
  console.log(`FCP: ${mediana(risultati.map((r) => r.fcp))} ms`);
  console.log(`LCP: ${mediana(risultati.map((r) => r.lcp))} ms`);
  console.log(`CLS: ${mediana(risultati.map((r) => r.cls))}`);
  console.log(`img.hero-logo compare a: ${mediana(risultati.map((r) => r.heroLogoAt))} ms`);
  console.log(`primo .hero-img compare a: ${mediana(risultati.map((r) => r.heroImgAt))} ms`);
  console.log(`ScriptDuration: ${mediana(risultati.map((r) => r.scriptDuration))} s`);
  console.log(`TaskDuration: ${mediana(risultati.map((r) => r.taskDuration))} s`);
  console.log(`LayoutDuration: ${mediana(risultati.map((r) => r.layoutDuration))} s`);
  console.log(`Byte totali trasferiti: ${mediana(risultati.map((r) => r.byteTotali))}`);
})();
