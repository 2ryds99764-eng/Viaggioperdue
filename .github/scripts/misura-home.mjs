// Misura il peso e le prestazioni della home (hero, sezioni, tessere, banner d'estate).
// Node, ES module. Usa Playwright (già in devDependencies); se il browser di
// Playwright non è installato, prova il canale "chrome" (Google Chrome del Mac).

import { chromium, devices } from "playwright";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const INDIRIZZO = process.argv[2] || "http://localhost:8098/index.html";
const ETICHETTA = process.argv[3] || "misura";

const CARTELLA_SCREENSHOT = path.join(os.homedir(), "Desktop", "misure-home");
fs.mkdirSync(CARTELLA_SCREENSHOT, { recursive: true });

const USER_AGENT_IPHONE = devices["iPhone 13"].userAgent;

const PROFILI = [
  { nome: "desktop", viewport: { width: 1304, height: 799 }, deviceScaleFactor: 1, userAgent: null },
  { nome: "telefono", viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, userAgent: USER_AGENT_IPHONE },
];

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
      console.error("Non installo nulla: mi fermo qui.");
      process.exit(1);
    }
  }
}

function formattaMB(byte) {
  return (byte / (1024 * 1024)).toFixed(2);
}

function hostDi(url) {
  try {
    return new URL(url).host;
  } catch (e) {
    return "";
  }
}

function stampaTabellaFase(nomeFase, risposte, hostSito, perf, erroriConsole, richiesteFallite, risposteErrore) {
  const totaleByte = risposte.reduce((s, r) => s + r.byte, 0);
  const byteCloudinary = risposte.filter((r) => r.host === "res.cloudinary.com").reduce((s, r) => s + r.byte, 0);
  const byteSito = risposte.filter((r) => r.host === hostSito).reduce((s, r) => s + r.byte, 0);

  const immagini = risposte
    .filter((r) => (r.contentType || "").startsWith("image/"))
    .slice()
    .sort((a, b) => b.byte - a.byte)
    .slice(0, 8);

  console.log("");
  console.log(`--- Fase: ${nomeFase} ---`);
  console.log(`MB totali: ${formattaMB(totaleByte)}  |  richieste: ${risposte.length}`);
  console.log(`MB da res.cloudinary.com: ${formattaMB(byteCloudinary)}  |  MB dal sito (${hostSito}): ${formattaMB(byteSito)}`);
  console.log("Le 8 immagini più pesanti:");
  if (immagini.length === 0) {
    console.log("  (nessuna)");
  } else {
    immagini.forEach((img, i) => {
      console.log(`  ${i + 1}. ${formattaMB(img.byte)} MB | ${img.contentType || "?"} | ${img.url}`);
    });
  }
  console.log(`LCP: ${perf.lcp ? Math.round(perf.lcp) + " ms" : "non ancora rilevato"}  |  elemento: ${perf.lcpElement || "-"}`);
  console.log(`CLS: ${perf.cls != null ? perf.cls.toFixed(4) : "non disponibile"}`);
  console.log(`Errori console: ${erroriConsole.length}  |  richieste fallite in rete: ${richiesteFallite.length}  |  risposte con stato >= 400: ${risposteErrore.length}`);

  console.log("Errori console (elenco completo):");
  if (erroriConsole.length === 0) {
    console.log("  (nessuno)");
  } else {
    erroriConsole.forEach((e, i) => {
      console.log(`  ${i + 1}. [${e.tipo}] ${e.testo}`);
      console.log(`     sorgente: ${e.url || "-"}`);
    });
  }

  console.log("Richieste fallite in rete (elenco completo):");
  if (richiesteFallite.length === 0) {
    console.log("  (nessuna)");
  } else {
    richiesteFallite.forEach((f, i) => {
      console.log(`  ${i + 1}. ${f.url} — ${f.motivo}`);
    });
  }

  console.log("Risposte con stato >= 400 (elenco completo):");
  if (risposteErrore.length === 0) {
    console.log("  (nessuna)");
  } else {
    risposteErrore.forEach((r, i) => {
      console.log(`  ${i + 1}. ${r.url} -> ${r.status}`);
    });
  }
}

async function misuraProfilo(browser, profilo) {
  console.log("");
  console.log("=======================================================");
  console.log(`Profilo: ${profilo.nome}  (${profilo.viewport.width}x${profilo.viewport.height}, dpr ${profilo.deviceScaleFactor})`);
  console.log("=======================================================");

  const contesto = await browser.newContext({
    viewport: profilo.viewport,
    deviceScaleFactor: profilo.deviceScaleFactor,
    userAgent: profilo.userAgent || undefined,
  });

  const pagina = await contesto.newPage();

  // cache disattivata (via CDP, come nei DevTools "Disable cache")
  const cdp = await contesto.newCDPSession(pagina);
  await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });

  await pagina.addInitScript(() => {
    window.__perf = { lcp: 0, lcpElement: "", cls: 0 };
    try {
      new PerformanceObserver(function (list) {
        const voci = list.getEntries();
        const ultima = voci[voci.length - 1];
        if (ultima) {
          window.__perf.lcp = ultima.renderTime || ultima.loadTime || ultima.startTime;
          window.__perf.lcpElement = ultima.element
            ? ultima.element.tagName + (ultima.element.className ? "." + String(ultima.element.className).split(" ").join(".") : "")
            : "";
        }
      }).observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {}
    try {
      new PerformanceObserver(function (list) {
        for (const voce of list.getEntries()) {
          if (!voce.hadRecentInput) window.__perf.cls += voce.value;
        }
      }).observe({ type: "layout-shift", buffered: true });
    } catch (e) {}
  });

  const risposte = [];
  const erroriConsole = [];
  const richiesteFallite = [];
  const risposteErrore = [];

  pagina.on("console", function (msg) {
    if (msg.type() === "error") {
      const loc = msg.location ? msg.location() : null;
      erroriConsole.push({ testo: msg.text(), tipo: msg.type(), url: loc ? loc.url : "" });
    }
  });

  pagina.on("requestfailed", function (req) {
    const f = req.failure();
    richiesteFallite.push({ url: req.url(), motivo: f ? f.errorText : "?" });
  });

  pagina.on("response", function (response) {
    if (response.status() >= 400) {
      risposteErrore.push({ url: response.url(), status: response.status() });
    }
    (async function () {
      try {
        const url = response.url();
        const headers = response.headers();
        const contentType = (headers["content-type"] || "").split(";")[0].trim();
        let byte = 0;
        const cl = headers["content-length"];
        if (cl && !isNaN(Number(cl))) {
          byte = Number(cl);
        } else {
          try {
            const corpo = await response.body();
            byte = corpo.length;
          } catch (e) {
            byte = 0;
          }
        }
        risposte.push({ url, host: hostDi(url), contentType, byte });
      } catch (e) {
        /* risposta non leggibile (es. redirect, opaco): ignorata */
      }
    })();
  });

  const hostSito = hostDi(INDIRIZZO);

  await pagina.goto(INDIRIZZO, { waitUntil: "load" });
  await pagina.waitForTimeout(3000);

  const perfApertura = await pagina.evaluate(() => window.__perf);
  stampaTabellaFase("all'apertura", risposte.slice(), hostSito, perfApertura, erroriConsole.slice(), richiesteFallite.slice(), risposteErrore.slice());

  async function contaHeroConSfondo() {
    return pagina.evaluate(() => {
      const tutte = Array.from(document.querySelectorAll(".hero-img"));
      const conSfondo = tutte.filter((el) => getComputedStyle(el).backgroundImage !== "none");
      return { totale: tutte.length, conSfondo: conSfondo.length };
    });
  }

  const heroA3s = await contaHeroConSfondo();
  console.log(`.hero-img con backgroundImage diverso da "none" a t=3s: ${heroA3s.conSfondo} / ${heroA3s.totale}`);

  // ---- galleria: 13 campioni, uno al secondo ----
  const campioniGalleria = [];
  for (let secondo = 0; secondo < 13; secondo++) {
    const stato = await pagina.evaluate(() => {
      const tutte = Array.from(document.querySelectorAll(".hero-img"));
      const attiva = document.querySelector(".hero-img.attiva");
      const indice = attiva ? tutte.indexOf(attiva) : -1;
      const bg = attiva ? getComputedStyle(attiva).backgroundImage : "none";
      return { indice, haSfondo: bg !== "none" };
    });
    campioniGalleria.push(Object.assign({ secondo }, stato));
    await pagina.waitForTimeout(1000);
  }

  const heroA13s = await contaHeroConSfondo();
  console.log(`.hero-img con backgroundImage diverso da "none" a t=13s: ${heroA13s.conSfondo} / ${heroA13s.totale}`);

  // ---- screenshot "in cima" ----
  await pagina.evaluate(() => window.scrollTo(0, 0));
  await pagina.waitForTimeout(300);
  await pagina.screenshot({ path: path.join(CARTELLA_SCREENSHOT, `${ETICHETTA}-${profilo.nome}-1.png`) });

  // ---- scorrimento a passi di 400px fino in fondo ----
  const altezzaPagina = await pagina.evaluate(() => document.body.scrollHeight);
  let posizione = 0;
  while (posizione < altezzaPagina) {
    posizione += 400;
    await pagina.evaluate((y) => window.scrollTo(0, y), posizione);
    await pagina.waitForTimeout(400);
  }
  await pagina.waitForTimeout(2000);

  const perfDopoScorrimento = await pagina.evaluate(() => window.__perf);
  stampaTabellaFase("dopo lo scorrimento", risposte.slice(), hostSito, perfDopoScorrimento, erroriConsole.slice(), richiesteFallite.slice(), risposteErrore.slice());

  // ---- screenshot "a metà pagina" e "in fondo" ----
  const altezzaFinale = await pagina.evaluate(() => document.body.scrollHeight);
  await pagina.evaluate((y) => window.scrollTo(0, y), Math.round(altezzaFinale / 2));
  await pagina.waitForTimeout(300);
  await pagina.screenshot({ path: path.join(CARTELLA_SCREENSHOT, `${ETICHETTA}-${profilo.nome}-2.png`) });

  await pagina.evaluate((y) => window.scrollTo(0, y), altezzaFinale);
  await pagina.waitForTimeout(300);
  await pagina.screenshot({ path: path.join(CARTELLA_SCREENSHOT, `${ETICHETTA}-${profilo.nome}-3.png`) });

  // ---- sfondi ancora "none" a fine pagina ----
  const sfondiMancanti = await pagina.evaluate(() => {
    const classi = ["sezione-foto", "tessera-foto", "banner-estate-img"];
    let totale = 0, mancanti = 0;
    classi.forEach(function (classe) {
      document.querySelectorAll("." + classe).forEach(function (el) {
        totale++;
        if (getComputedStyle(el).backgroundImage === "none") mancanti++;
      });
    });
    return { totale, mancanti };
  });

  console.log("");
  console.log(`Sfondi .sezione-foto/.tessera-foto/.banner-estate-img ancora "none" a fine pagina: ${sfondiMancanti.mancanti} su ${sfondiMancanti.totale}`);

  console.log("");
  console.log("Galleria dell'intestazione (13 campioni, uno al secondo):");
  campioniGalleria.forEach((c) => {
    console.log(`  t=${c.secondo}s  indice attiva=${c.indice}  sfondo impostato=${c.haSfondo}`);
  });

  await contesto.close();
}

(async function main() {
  console.log(`Indirizzo: ${INDIRIZZO}  |  Etichetta: ${ETICHETTA}`);
  const browser = await avviaBrowser();
  for (const profilo of PROFILI) {
    await misuraProfilo(browser, profilo);
  }
  await browser.close();
})();
