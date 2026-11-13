// Genera il blocco statico dell'intestazione della home (tutto tranne le
// immagini della galleria, che restano inserite da motore.js) a partire da
// dati.js, e lo scrive in index.html tra i marcatori HERO-INIZIO/HERO-FINE.
// Node, ES module, nessuna dipendenza esterna.
// Uso: node genera-hero.mjs           -> scrive index.html
//      node genera-hero.mjs --controlla -> non scrive, exit 1 se non coincide

import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const QUI = path.dirname(fileURLToPath(import.meta.url));
const RADICE = path.resolve(QUI, "..", "..");
const FILE_DATI = path.join(RADICE, "dati.js");
const FILE_INDEX = path.join(RADICE, "index.html");

export const MARCATORE_INIZIO =
  "<!-- HERO-INIZIO (generato da .github/scripts/genera-hero.mjs da dati.js: non modificare a mano) -->";
export const MARCATORE_FINE = "<!-- HERO-FINE -->";

export function esc(t) {
  return String(t == null ? "" : t)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* carica T42.sito da dati.js in un contesto vm, come fanno gli altri script
   (controlla-dati.mjs, genera-sitemap.mjs): "const T42" non si attacca al
   contesto, quindi lo recuperiamo con un'espressione finale */
export function leggiSitoDaFile(fileDati = FILE_DATI) {
  const sandbox = {};
  sandbox.window = sandbox;
  const contesto = vm.createContext(sandbox);
  const codice = fs.readFileSync(fileDati, "utf8");
  const script = new vm.Script(codice + "\n;\n(T42);", { filename: fileDati });
  const T42 = script.runInContext(contesto);
  return T42.sito;
}

/* stesso markup che costruisciHome() produce oggi in motore.js, tranne le
   immagini della galleria (restano inserite da JS con insertAdjacentHTML) */
export function costruisciBloccoHero(s) {
  const marchio =
    s.logoBianco && s.logoBianco.trim() !== ""
      ? '<img class="hero-logo" width="1010" height="550" fetchpriority="high" src="' +
        esc(s.logoBianco) +
        '" alt="' +
        esc(s.nome) +
        '">'
      : '<div class="hero-nome">' + esc(s.heroTitolo || s.nome) + "</div>";

  return (
    MARCATORE_INIZIO +
    "\n" +
    '    <div class="hero-velo"></div>\n' +
    '    <div class="hero-dentro">\n' +
    '      <div class="hero-sigla anima d1">Viaggio<em>per</em>due</div>\n' +
    "      " +
    marchio +
    "\n" +
    (s.heroSotto ? '      <p class="hero-sotto anima d3">' + esc(s.heroSotto) + "</p>\n" : "") +
    "    </div>\n" +
    '    <a class="hero-scroll" href="#sezioni" aria-label="Scorri"><span>scorri</span><span class="hero-freccia">↓</span></a>\n' +
    "  " +
    MARCATORE_FINE
  );
}

/* estrae il blocco attuale tra i marcatori dal testo di index.html, o null
   se i marcatori non ci sono */
export function estraiBloccoAttuale(contenutoHtml) {
  const i = contenutoHtml.indexOf(MARCATORE_INIZIO);
  const f = contenutoHtml.indexOf(MARCATORE_FINE);
  if (i === -1 || f === -1 || f < i) return null;
  return contenutoHtml.slice(i, f + MARCATORE_FINE.length);
}

/* inserisce o sostituisce il blocco dentro <header class="hero" id="hero">...</header> */
export function applicaBlocco(contenutoHtml, bloccoNuovo) {
  const esistente = estraiBloccoAttuale(contenutoHtml);
  if (esistente !== null) {
    return contenutoHtml.replace(esistente, bloccoNuovo);
  }
  const re = /(<header class="hero" id="hero">)(\s*)(<\/header>)/;
  if (!re.test(contenutoHtml)) {
    throw new Error('Non trovo <header class="hero" id="hero"></header> in index.html');
  }
  return contenutoHtml.replace(re, "$1\n  " + bloccoNuovo + "\n$3");
}

function main() {
  const CONTROLLA = process.argv.includes("--controlla");
  const s = leggiSitoDaFile();
  const bloccoNuovo = costruisciBloccoHero(s);
  const contenutoAttuale = fs.readFileSync(FILE_INDEX, "utf8");
  const bloccoAttuale = estraiBloccoAttuale(contenutoAttuale);

  if (CONTROLLA) {
    if (bloccoAttuale === bloccoNuovo) {
      console.log("OK: l'intestazione di index.html coincide con dati.js.");
      process.exit(0);
    }
    console.log("ERRORE: l'intestazione di index.html NON coincide con dati.js.");
    console.log("Lancia: node .github/scripts/genera-hero.mjs");
    process.exit(1);
  }

  const contenutoNuovo = applicaBlocco(contenutoAttuale, bloccoNuovo);
  if (contenutoNuovo === contenutoAttuale) {
    console.log("index.html già allineato a dati.js: nessuna modifica.");
    process.exit(0);
  }
  fs.writeFileSync(FILE_INDEX, contenutoNuovo);
  console.log("index.html aggiornato con l'intestazione generata da dati.js.");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
