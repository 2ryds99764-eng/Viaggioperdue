// Genera sitemap.xml nella radice del repository.
// Node, ES module, nessuna dipendenza esterna.

import fs from "node:fs";
import vm from "node:vm";

// ---------------------------------------------------------------------------
// Caricamento dati: stessa tecnica di controlla-dati.mjs (contesto vm
// condiviso, con window=globalThis del contesto; le "var" si attaccano da
// sole, la "const T42" di dati.js va recuperata con un'espressione finale).
// Qui serve solo T42 (dati.js, itinerari.js, escape.js): la sitemap non
// referenzia HOTEL né GUIDA.
// ---------------------------------------------------------------------------

const sandbox = {};
sandbox.window = sandbox;
const contesto = vm.createContext(sandbox);

function eseguiFile(file, espressioneFinale) {
  const codice = fs.readFileSync(file, "utf8");
  const script = new vm.Script(codice + "\n;\n(" + espressioneFinale + ");", { filename: file });
  return script.runInContext(contesto);
}

const T42 = eseguiFile("dati.js", "T42");
sandbox.T42 = T42;
eseguiFile("itinerari.js", "T42"); // muta T42.itinerari in place
eseguiFile("escape.js", "T42"); // muta T42.escape in place

const BASE_SITO = "https://www.viaggioperdue.com/";

const PAGINE_FISSE = [
  "", // la sola barra
  "guida.html",
  "hotel.html",
  "itinerari.html",
  "escape-elenco.html",
  "mappa.html",
  "chisiamo.html",
  "manifesto.html",
  "racconto.html",
];

const urlFinali = [];

PAGINE_FISSE.forEach((f) => urlFinali.push(BASE_SITO + f));

(T42.categorie || []).forEach((cat) => {
  urlFinali.push(BASE_SITO + "categoria.html?c=" + cat.id);
});

Object.keys(T42.storie || {}).forEach((chiave) => {
  urlFinali.push(BASE_SITO + "storia.html?s=" + chiave);
});

Object.keys(T42.itinerari || {}).forEach((chiave) => {
  urlFinali.push(BASE_SITO + "itinerario.html?i=" + chiave);
});

Object.keys(T42.escape || {}).forEach((chiave) => {
  urlFinali.push(BASE_SITO + "escape.html?e=" + chiave);
});

// ---------------------------------------------------------------------------
// Confronto con la sitemap attuale, prima di scrivere
// ---------------------------------------------------------------------------

const sitemapAttualeTesto = fs.existsSync("sitemap.xml") ? fs.readFileSync("sitemap.xml", "utf8") : "";
const locAttuali = new Set(
  (sitemapAttualeTesto.match(/<loc>([^<]*)<\/loc>/g) || []).map((l) => l.replace(/<\/?loc>/g, ""))
);
const locNuovi = new Set(urlFinali);

const spariscono = [...locAttuali].filter((u) => !locNuovi.has(u));
const compaiono = [...locNuovi].filter((u) => !locAttuali.has(u));

console.log(`Sitemap attuale: ${locAttuali.size} indirizzi. Nuova sitemap: ${locNuovi.size} indirizzi.`);
console.log("");
console.log(`Indirizzi che spariscono (${spariscono.length}):`);
spariscono.forEach((u) => console.log("  - " + u));
console.log("");
console.log(`Indirizzi che compaiono (${compaiono.length}):`);
compaiono.forEach((u) => console.log("  + " + u));
console.log("");

// ---------------------------------------------------------------------------
// Scrittura di sitemap.xml
// ---------------------------------------------------------------------------

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urlFinali.map((u) => "  <url>\n    <loc>" + u + "</loc>\n  </url>").join("\n") +
  "\n</urlset>\n";

fs.writeFileSync("sitemap.xml", xml);
console.log(`sitemap.xml scritta con ${urlFinali.length} indirizzi.`);

// ---------------------------------------------------------------------------
// robots.txt, solo se non esiste già
// ---------------------------------------------------------------------------

if (!fs.existsSync("robots.txt")) {
  const robots =
    "User-agent: *\n" +
    "Allow: /\n" +
    "Sitemap: https://www.viaggioperdue.com/sitemap.xml\n";
  fs.writeFileSync("robots.txt", robots);
  console.log("robots.txt creato.");
} else {
  console.log("robots.txt esiste già: non toccato.");
}
