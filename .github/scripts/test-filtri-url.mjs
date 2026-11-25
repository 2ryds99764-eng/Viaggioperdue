// Test dello stato dei filtri nell'indirizzo di guida.html e hotel.html
// (q/regione/provincia/simbolo: lettura all'avvio, scrittura con
// history.replaceState ritardata). Usa Playwright su un server locale, quindi
// richiede: node .github/scripts/server-gzip.mjs . <porta>
// Uso: node .github/scripts/test-filtri-url.mjs [http://localhost:<porta>]
// Node, ES module.

import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:8198";
let ok = 0, falliti = 0;
function verifica(descrizione, condizione, dettaglio) {
  if (condizione) { ok++; console.log("OK  " + descrizione); }
  else { falliti++; console.log("FAIL " + descrizione + (dettaglio ? " | " + dettaglio : "")); }
}

async function avviaBrowser() {
  try { return await chromium.launch(); } catch (e) { return await chromium.launch({ channel: "chrome" }); }
}

async function nuovoContesto(browser) {
  const contesto = await browser.newContext({ viewport: { width: 412, height: 823 }, deviceScaleFactor: 1.75 });
  const pagina = await contesto.newPage();
  const erroriConsole = [];
  pagina.on("console", (msg) => {
    if (msg.type() !== "error") return;
    const t = msg.text();
    if (/cloudflareinsights\.com/.test(t)) return; // beacon CORS su localhost, pre-esistente, indipendente
    if (t === "Failed to load resource: net::ERR_FAILED") return; // stesso beacon, voce di rete separata
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

  // --- 1) guida.html?q=zurigo ---
  {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/guida.html?q=zurigo", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const valoreInput = await pagina.locator("#cerca-nome").inputValue();
    const numero = await pagina.locator("#guida-lista .rist").count();
    const conteggio = (await pagina.locator("#guida-conteggio").textContent()).trim();
    verifica('1) campo compilato con "zurigo"', valoreInput === "zurigo", "trovato: " + valoreInput);
    verifica("1) 2 risultati", numero === 2, "trovati: " + numero);
    verifica('1) conteggio corretto ("2 ristoranti trovati")', conteggio === "2 ristoranti trovati", "trovato: " + conteggio);
    verifica("1) nessun errore console", erroriConsole.length === 0, erroriConsole.join(" | "));
    await contesto.close();
  }

  // --- 2) guida.html?regione=Lombardia&q=osteria vs digitazione a mano ---
  {
    const { contesto, pagina } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/guida.html?regione=Lombardia&q=osteria", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const selRegione = await pagina.locator("#cerca-regione").inputValue();
    const numeroUrl = await pagina.locator("#guida-lista .rist").count();
    verifica('2) select regione impostato su "Lombardia"', selRegione === "Lombardia", "trovato: " + selRegione);
    await contesto.close();

    const { contesto: c2, pagina: p2 } = await nuovoContesto(browser);
    await p2.goto(BASE + "/guida.html", { waitUntil: "domcontentloaded" });
    await accettaCookie(p2);
    await p2.waitForTimeout(1000);
    await p2.locator("#cerca-regione").selectOption("Lombardia");
    await p2.locator("#cerca-nome").fill("osteria");
    await p2.waitForTimeout(500);
    const numeroManuale = await p2.locator("#guida-lista .rist").count();
    verifica("2) stesso conteggio di quando digitato a mano", numeroUrl === numeroManuale, "url=" + numeroUrl + " manuale=" + numeroManuale);
    await c2.close();
  }

  // --- 3) hotel.html?regione=Svizzera&provincia=GE&q=... poi provincia non valida ---
  {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/hotel.html?regione=Svizzera&provincia=GE&q=hotel", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const selRegione = await pagina.locator("#cerca-regione-h").inputValue();
    const selProvincia = await pagina.locator("#cerca-provincia-h").inputValue();
    const valoreQ = await pagina.locator("#cerca-nome-h").inputValue();
    verifica('3) regione="Svizzera" applicata', selRegione === "Svizzera", "trovato: " + selRegione);
    verifica('3) provincia="GE" applicata', selProvincia === "GE", "trovato: " + selProvincia);
    verifica('3) q="hotel" applicato', valoreQ === "hotel", "trovato: " + valoreQ);
    verifica("3) nessun errore console (parametri validi)", erroriConsole.length === 0, erroriConsole.join(" | "));
    await contesto.close();
  }
  {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/hotel.html?regione=Svizzera&provincia=ZZZ", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const selProvincia = await pagina.locator("#cerca-provincia-h").inputValue();
    verifica('3b) provincia non valida ("ZZZ") ignorata in silenzio', selProvincia === "", "trovato: " + JSON.stringify(selProvincia));
    verifica("3b) nessun errore console", erroriConsole.length === 0, erroriConsole.join(" | "));
    await contesto.close();
  }

  // --- 4) digitazione manuale -> indirizzo si aggiorna col debounce; cancellazione -> indirizzo pulito ---
  {
    const { contesto, pagina } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/guida.html", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    await pagina.locator("#cerca-nome").fill("svizzera");
    await pagina.waitForTimeout(500); // > 300ms di debounce
    const url1 = new URL(pagina.url());
    verifica("4) indirizzo contiene q=svizzera dopo il debounce", url1.searchParams.get("q") === "svizzera", "url: " + pagina.url());

    await pagina.locator("#cerca-nome").fill("");
    await pagina.waitForTimeout(500);
    const url2 = pagina.url();
    const senzaQuery = url2 === BASE + "/guida.html";
    verifica("4) cancellando il testo l'indirizzo torna pulito (senza ?)", senzaQuery, "url: " + url2);
    await contesto.close();
  }

  // --- 5) digito, navigo altrove, goBack ripristina campo e risultati ---
  {
    const { contesto, pagina } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/guida.html", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    await pagina.locator("#cerca-nome").fill("svizzera");
    await pagina.waitForTimeout(500);
    await pagina.goto(BASE + "/index.html", { waitUntil: "domcontentloaded" });
    await pagina.waitForTimeout(500);
    await pagina.goBack();
    await pagina.waitForTimeout(1000);
    const valoreDopo = await pagina.locator("#cerca-nome").inputValue();
    const numeroDopo = await pagina.locator("#guida-lista .rist").count();
    verifica('5) goBack ripristina il campo ("svizzera")', valoreDopo === "svizzera", "trovato: " + valoreDopo);
    verifica("5) goBack ripristina i risultati filtrati (>0 e coerenti)", numeroDopo > 0, "trovati: " + numeroDopo);
    await contesto.close();
  }

  // --- 6) history.length non cresce con la digitazione (replaceState) ---
  {
    const { contesto, pagina } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/guida.html", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const lunghezzaPrima = await pagina.evaluate(() => window.history.length);
    await pagina.locator("#cerca-nome").fill("s");
    await pagina.waitForTimeout(350);
    await pagina.locator("#cerca-nome").fill("sv");
    await pagina.waitForTimeout(350);
    await pagina.locator("#cerca-nome").fill("svi");
    await pagina.waitForTimeout(350);
    const lunghezzaDopo = await pagina.evaluate(() => window.history.length);
    verifica("6) history.length invariata (replaceState, non pushState)", lunghezzaDopo === lunghezzaPrima, "prima=" + lunghezzaPrima + " dopo=" + lunghezzaDopo);
    await contesto.close();
  }

  // --- 7) parametri malformati: nessun errore console, pagina non vuota ---
  {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/guida.html?q=%E0%A4%A", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const haContenuto = await pagina.locator("#guida-conteggio").textContent();
    verifica("7a) ?q=%E0%A4%A non causa errori console", erroriConsole.length === 0, erroriConsole.join(" | "));
    verifica("7a) pagina non vuota (il conteggio mostra qualcosa)", haContenuto.trim().length > 0, "trovato: " + JSON.stringify(haContenuto));
    await contesto.close();
  }
  {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/guida.html?regione%5B%5D=x", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const haContenuto = await pagina.locator("#guida-conteggio").textContent();
    const selRegione = await pagina.locator("#cerca-regione").inputValue();
    verifica("7b) ?regione[]=x non causa errori console", erroriConsole.length === 0, erroriConsole.join(" | "));
    verifica("7b) regione[] ignorato (select resta vuoto)", selRegione === "", "trovato: " + selRegione);
    verifica("7b) pagina non vuota", haContenuto.trim().length > 0, "trovato: " + JSON.stringify(haContenuto));
    await contesto.close();
  }

  // --- 8) link storico guida.html?regione=Toscana: stesso conteggio di prima della modifica (38, misurato sul pubblicato) ---
  {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser);
    await pagina.goto(BASE + "/guida.html?regione=Toscana", { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    const selRegione = await pagina.locator("#cerca-regione").inputValue();
    const numero = await pagina.locator("#guida-lista .rist").count();
    const conteggio = (await pagina.locator("#guida-conteggio").textContent()).trim();
    verifica('8) link storico: select regione="Toscana"', selRegione === "Toscana", "trovato: " + selRegione);
    verifica("8) link storico: 38 risultati (come sul pubblicato prima della modifica)", numero === 38, "trovati: " + numero);
    verifica('8) link storico: conteggio "38 ristoranti trovati"', conteggio === "38 ristoranti trovati", "trovato: " + conteggio);
    verifica("8) link storico: nessun errore console", erroriConsole.length === 0, erroriConsole.join(" | "));
    await contesto.close();
  }

  // --- 9 generale: nessun errore console su tutte le pagine base ---
  for (const pagina_ of ["/guida.html", "/hotel.html"]) {
    const { contesto, pagina, erroriConsole } = await nuovoContesto(browser);
    await pagina.goto(BASE + pagina_, { waitUntil: "domcontentloaded" });
    await accettaCookie(pagina);
    await pagina.waitForTimeout(1000);
    verifica("9) nessun errore console su " + pagina_ + " (senza parametri)", erroriConsole.length === 0, erroriConsole.join(" | "));
    await contesto.close();
  }

  await browser.close();
  console.log("");
  console.log("Asserzioni: " + ok + " superate, " + falliti + " fallite.");
  process.exit(falliti > 0 ? 1 : 0);
})();
