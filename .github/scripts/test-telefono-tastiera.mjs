// Test del campo di ricerca e dei filtri su telefono e con la tastiera, in
// guida.html e hotel.html (font-size a 16px sotto i 600px, Invio/Esc,
// aria-live sul conteggio, :focus-visible). Playwright su un server locale:
// node .github/scripts/server-gzip.mjs . <porta>
// Uso: node .github/scripts/test-telefono-tastiera.mjs [http://localhost:<porta>]
// Node, ES module.

import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:8198";
let ok = 0, falliti = 0;
function verifica(descrizione, condizione, dettaglio) {
  if (condizione) { ok++; console.log("OK  " + descrizione); }
  else { falliti++; console.log("FAIL " + descrizione + (dettaglio ? " | " + dettaglio : "")); }
}

function luminanza([r, g, b]) {
  const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  const [R, G, B] = [f(r), f(g), f(b)];
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
function contrasto(c1, c2) {
  const L1 = luminanza(c1), L2 = luminanza(c2);
  const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (hi + 0.05) / (lo + 0.05);
}
function parseRgb(s) {
  const m = (s || "").match(/\d+/g);
  return m ? m.slice(0, 3).map(Number) : null;
}

async function avviaBrowser() {
  try { return await chromium.launch(); } catch (e) { return await chromium.launch({ channel: "chrome" }); }
}

async function nuovoContesto(browser, viewport) {
  const contesto = await browser.newContext({ viewport, deviceScaleFactor: viewport.width <= 600 ? 3 : 1 });
  const pagina = await contesto.newPage();
  const erroriConsole = [];
  pagina.on("console", (msg) => {
    if (msg.type() !== "error") return;
    const t = msg.text();
    if (/cloudflareinsights\.com/.test(t)) return;
    if (t === "Failed to load resource: net::ERR_FAILED") return;
    erroriConsole.push(t);
  });
  pagina.on("pageerror", (err) => { erroriConsole.push("pageerror: " + err.message); });
  await contesto.addInitScript(() => { localStorage.setItem("vpd-benvenuto-visto", "1"); });
  return { contesto, pagina, erroriConsole };
}
async function accettaCookie(pagina) {
  try {
    const rifiuta = pagina.locator(".iubenda-cs-reject-btn, #iubFBbtnReject, button:has-text(\"Rifiuta tutto\")").first();
    await rifiuta.waitFor({ timeout: 4000 });
    await rifiuta.click();
  } catch (e) {}
}

(async function main() {
  console.log("Indirizzo base: " + BASE);
  const browser = await avviaBrowser();

  // --- 1) font-size a 390px = 16px, a 1280px invariato (15.2px, come in A) ---
  for (const pagina_ of [
    { url: "/guida.html", id: "cerca-nome" },
    { url: "/hotel.html", id: "cerca-nome-h" },
  ]) {
    const { contesto, pagina } = await nuovoContesto(browser, { width: 390, height: 844 });
    await pagina.goto(BASE + pagina_.url, { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const fontSize390 = await pagina.evaluate((id) => getComputedStyle(document.getElementById(id)).fontSize, pagina_.id);
    verifica("1) " + pagina_.url + " a 390px: font-size = 16px", fontSize390 === "16px", "trovato: " + fontSize390);
    await contesto.close();

    const { contesto: c2, pagina: p2 } = await nuovoContesto(browser, { width: 1280, height: 900 });
    await p2.goto(BASE + pagina_.url, { waitUntil: "domcontentloaded" });
    await accettaCookie(p2);
    await p2.waitForTimeout(1000);
    const fontSize1280 = await p2.evaluate((id) => getComputedStyle(document.getElementById(id)).fontSize, pagina_.id);
    verifica("1) " + pagina_.url + " a 1280px: font-size invariato (15,2px)", fontSize1280 === "15.2px", "trovato: " + fontSize1280);
    await c2.close();
  }

  // --- 2) tastiera: Tab, digitazione, Invio, Esc, focus-visible ---
  {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser, { width: 390, height: 844 });
    await pagina.goto(BASE + "/guida.html", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);

    // ordine Tab: campo -> select regione -> (provincia disabilitata, saltata) -> select simbolo -> pulsanti scheda
    await pagina.locator("#cerca-nome").focus();
    const ordineAtteso = ["cerca-nome"];
    for (let i = 0; i < 3; i++) {
      await pagina.keyboard.press("Tab");
      const id = await pagina.evaluate(() => document.activeElement.id);
      ordineAtteso.push(id);
    }
    verifica(
      "2) ordine Tab: campo -> regione -> (provincia saltata, disabilitata) -> simbolo",
      ordineAtteso[0] === "cerca-nome" && ordineAtteso[1] === "cerca-regione" && ordineAtteso[2] === "cerca-simbolo-g",
      JSON.stringify(ordineAtteso)
    );
    await pagina.keyboard.press("Tab");
    const dopoSimbolo = await pagina.evaluate(() => ({ tag: document.activeElement.tagName.toLowerCase(), cls: document.activeElement.className }));
    verifica("2) dopo il simbolo, Tab arriva a un pulsante/link di scheda (nessuna trappola)", dopoSimbolo.tag === "a", "trovato: " + JSON.stringify(dopoSimbolo));

    // digito e il conteggio cambia
    const conteggioPrima = (await pagina.locator("#guida-conteggio").textContent()).trim();
    await pagina.locator("#cerca-nome").fill("zurigo");
    await pagina.waitForTimeout(300);
    const conteggioDopo = (await pagina.locator("#guida-conteggio").textContent()).trim();
    verifica("2) digitando il conteggio cambia", conteggioPrima !== conteggioDopo, "prima=" + conteggioPrima + " dopo=" + conteggioDopo);

    // Invio toglie il focus
    await pagina.locator("#cerca-nome").press("Enter");
    await pagina.waitForTimeout(200);
    const attivoDopoInvio = await pagina.evaluate(() => document.activeElement.id);
    verifica("2) Invio toglie il focus dal campo", attivoDopoInvio !== "cerca-nome", "attivo: " + JSON.stringify(attivoDopoInvio));
    verifica("2) Invio non cambia l'indirizzo oltre a quanto gia' previsto", new URL(pagina.url()).pathname === "/guida.html", "url: " + pagina.url());

    // Esc svuota il campo e il filtro si aggiorna
    await pagina.locator("#cerca-nome").focus();
    await pagina.locator("#cerca-nome").press("Escape");
    await pagina.waitForTimeout(300);
    const valoreDopoEsc = await pagina.locator("#cerca-nome").inputValue();
    const conteggioDopoEsc = (await pagina.locator("#guida-conteggio").textContent()).trim();
    verifica("2) Esc svuota il campo", valoreDopoEsc === "", "trovato: " + JSON.stringify(valoreDopoEsc));
    verifica("2) dopo Esc il conteggio torna a tutti i risultati", conteggioDopoEsc === "531 ristoranti", "trovato: " + conteggioDopoEsc);

    // focus-visible: outline presente e a contrasto sufficiente
    await pagina.locator("#cerca-nome").focus();
    const infoFocus = await pagina.evaluate(() => {
      const el = document.activeElement;
      const cs = getComputedStyle(el);
      return { outlineStyle: cs.outlineStyle, outlineColor: cs.outlineColor, outlineWidth: cs.outlineWidth, bg: cs.backgroundColor };
    });
    verifica("2) :focus-visible mostra un outline (non \"none\")", infoFocus.outlineStyle !== "none", JSON.stringify(infoFocus));
    const outlineRgb = parseRgb(infoFocus.outlineColor);
    const bgRgb = parseRgb(infoFocus.bg);
    const rapportoContrasto = outlineRgb && bgRgb ? contrasto(outlineRgb, bgRgb) : null;
    verifica("2) outline di focus a contrasto >= 3:1", rapportoContrasto != null && rapportoContrasto >= 3, "contrasto: " + rapportoContrasto);

    verifica("2) nessun errore console", erroriConsole.length === 0, erroriConsole.join(" | "));
    await contesto.close();
  }

  // --- 3) aria-live: attributi attesi, una sola scrittura per aggiornamento ---
  for (const pagina_ of [
    { url: "/guida.html", input: "#cerca-nome" },
    { url: "/hotel.html", input: "#cerca-nome-h" },
  ]) {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser, { width: 390, height: 844 });
    await pagina.goto(BASE + pagina_.url, { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);

    const attributi = await pagina.evaluate(() => {
      const el = document.getElementById("guida-conteggio");
      return { ariaLive: el.getAttribute("aria-live"), ariaAtomic: el.getAttribute("aria-atomic") };
    });
    verifica("3) " + pagina_.url + ": aria-live=\"polite\"", attributi.ariaLive === "polite", JSON.stringify(attributi));
    verifica("3) " + pagina_.url + ": aria-atomic=\"true\"", attributi.ariaAtomic === "true", JSON.stringify(attributi));

    await pagina.evaluate(() => {
      window.__mutazioni = 0;
      const el = document.getElementById("guida-conteggio");
      window.__osservatore = new MutationObserver(() => { window.__mutazioni++; });
      window.__osservatore.observe(el, { characterData: true, childList: true, subtree: true });
    });
    await pagina.locator(pagina_.input).fill("a");
    await pagina.waitForTimeout(300);
    const mutazioni = await pagina.evaluate(() => window.__mutazioni);
    verifica("3) " + pagina_.url + ": il testo del conteggio cambia una sola volta per aggiornamento", mutazioni === 1, "mutazioni osservate: " + mutazioni);

    verifica("3) " + pagina_.url + ": nessun errore console", erroriConsole.length === 0, erroriConsole.join(" | "));
    await contesto.close();
  }

  await browser.close();
  console.log("");
  console.log("Asserzioni: " + ok + " superate, " + falliti + " fallite.");
  process.exit(falliti > 0 ? 1 : 0);
})();
