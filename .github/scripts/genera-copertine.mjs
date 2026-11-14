// Genera, per storia.html, itinerario.html ed escape.html, un <script> inline
// nell'head che precarica (preload) la foto di copertina corrispondente alla
// chiave nell'indirizzo (?s=, ?i=, ?e=), usando la stessa logica e gli stessi
// aiuti Cloudinary (cld/cldSrcset) di motore.js.
// Node, ES module, nessuna dipendenza esterna.
// Uso: node genera-copertine.mjs           -> scrive le 3 pagine
//      node genera-copertine.mjs --controlla -> non scrive, exit 1 se non coincide

import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const QUI = path.dirname(fileURLToPath(import.meta.url));
const RADICE = path.resolve(QUI, "..", "..");
const FILE_MOTORE = path.join(RADICE, "motore.js");
const FILE_DATI = path.join(RADICE, "dati.js");
const FILE_ITINERARI = path.join(RADICE, "itinerari.js");
const FILE_ESCAPE = path.join(RADICE, "escape.js");

export const MARCATORE_INIZIO =
  "<!-- COP-INIZIO (generato da .github/scripts/genera-copertine.mjs da dati.js, itinerari.js, escape.js e motore.js: non modificare a mano) -->";
export const MARCATORE_FINE = "<!-- COP-FINE -->";

export const PAGINE = {
  storia: { file: path.join(RADICE, "storia.html"), param: "s" },
  itinerario: { file: path.join(RADICE, "itinerario.html"), param: "i" },
  escape: { file: path.join(RADICE, "escape.html"), param: "e" },
};

// estrae il blocco CLD da motore.js: solo le funzioni, senza le righe di
// commento "CLD-INIZIO" e "CLD-FINE"
export function estraiBloccoCld(fileMotore = FILE_MOTORE) {
  const testo = fs.readFileSync(fileMotore, "utf8");
  const inizio = testo.indexOf("/* CLD-INIZIO");
  const fine = testo.indexOf("/* CLD-FINE */");
  if (inizio === -1 || fine === -1) throw new Error("Blocco CLD-INIZIO/CLD-FINE non trovato in motore.js");
  const finePrimaRiga = testo.indexOf("\n", inizio) + 1;
  return testo.slice(finePrimaRiga, fine).trimEnd();
}

/* carica T42 (con storie, itinerari ed escape) in un contesto vm condiviso,
   come fanno gli altri script: dati.js crea T42, itinerari.js ed escape.js
   mutano T42.itinerari/T42.escape sullo stesso oggetto */
export function leggiDati() {
  const sandbox = {};
  sandbox.window = sandbox;
  const contesto = vm.createContext(sandbox);
  function eseguiFile(file, espressioneFinale) {
    const codice = fs.readFileSync(file, "utf8");
    const script = new vm.Script(codice + "\n;\n(" + espressioneFinale + ");", { filename: file });
    return script.runInContext(contesto);
  }
  const T42 = eseguiFile(FILE_DATI, "T42");
  sandbox.T42 = T42;
  eseguiFile(FILE_ITINERARI, "T42");
  eseguiFile(FILE_ESCAPE, "T42");
  return T42;
}

/* stessa regola di costruisciStoria/costruisciItinerario/costruisciEscape in
   motore.js: storia = copertinaGalleria[0] se non vuota, altrimenti copertina;
   itinerario ed escape = copertina; nessuna voce se non c'è copertina */
export function mappaCopertine(T42) {
  const mappe = { storia: {}, itinerario: {}, escape: {} };

  Object.keys(T42.storie || {}).sort().forEach(function (k) {
    const s = T42.storie[k];
    const u = (s.copertinaGalleria && s.copertinaGalleria.length) ? s.copertinaGalleria[0] : (s.copertina || null);
    if (u) mappe.storia[k] = u;
  });
  Object.keys(T42.itinerari || {}).sort().forEach(function (k) {
    const it = T42.itinerari[k];
    if (it.copertina) mappe.itinerario[k] = it.copertina;
  });
  Object.keys(T42.escape || {}).sort().forEach(function (k) {
    const es = T42.escape[k];
    if (es.copertina) mappe.escape[k] = es.copertina;
  });
  return mappe;
}

export function costruisciBloccoCopertina(mappa, param, bloccoCld) {
  const vociMappa = Object.keys(mappa)
    .sort()
    .map(function (k) { return "      " + JSON.stringify(k) + ": " + JSON.stringify(mappa[k]); })
    .join(",\n");

  const cldIndentato = bloccoCld
    .split("\n")
    .map(function (r) { return "    " + r; })
    .join("\n");

  return (
    MARCATORE_INIZIO + "\n" +
    "  <script>\n" +
    "  (function () {\n" +
    '    "use strict";\n' +
    cldIndentato + "\n" +
    "    var M = {\n" + vociMappa + "\n    };\n" +
    "    try {\n" +
    '      var chiave = new URLSearchParams(location.search).get(' + JSON.stringify(param) + ');\n' +
    "      var u = chiave ? M[chiave] : null;\n" +
    "      if (u) {\n" +
    '        var l = document.createElement("link");\n' +
    '        l.rel = "preload";\n' +
    '        l.as = "image";\n' +
    "        l.href = cld(u, 800);\n" +
    '        l.setAttribute("imagesrcset", cldSrcset(u, [480, 800, 1200, 1600]));\n' +
    '        l.setAttribute("imagesizes", "(max-width: 760px) 100vw, 704px");\n' +
    '        l.setAttribute("fetchpriority", "high");\n' +
    "        document.head.appendChild(l);\n" +
    "      }\n" +
    "    } catch (e) {}\n" +
    "  })();\n" +
    "  </script>\n" +
    "  " + MARCATORE_FINE
  );
}

export function estraiBlocco(contenutoHtml) {
  const i = contenutoHtml.indexOf(MARCATORE_INIZIO);
  const f = contenutoHtml.indexOf(MARCATORE_FINE);
  if (i === -1 || f === -1 || f < i) return null;
  return contenutoHtml.slice(i, f + MARCATORE_FINE.length);
}

export function applicaBlocco(contenutoHtml, bloccoNuovo) {
  const esistente = estraiBlocco(contenutoHtml);
  if (esistente !== null) {
    return contenutoHtml.replace(esistente, bloccoNuovo);
  }
  const re = /(<meta name="viewport"[^>]*>)(\r?\n)/;
  if (!re.test(contenutoHtml)) {
    throw new Error('Non trovo <meta name="viewport"> nella pagina');
  }
  return contenutoHtml.replace(re, "$1$2" + bloccoNuovo + "$2");
}

function main() {
  const CONTROLLA = process.argv.includes("--controlla");
  const T42 = leggiDati();
  const mappe = mappaCopertine(T42);
  const bloccoCld = estraiBloccoCld();

  let tuttoOk = true;
  let qualcosaScritto = false;

  Object.keys(PAGINE).forEach(function (tipo) {
    const { file, param } = PAGINE[tipo];
    const bloccoNuovo = costruisciBloccoCopertina(mappe[tipo], param, bloccoCld);
    const contenutoAttuale = fs.readFileSync(file, "utf8");
    const bloccoAttuale = estraiBlocco(contenutoAttuale);
    const nomeFile = path.basename(file);

    if (CONTROLLA) {
      if (bloccoAttuale === bloccoNuovo) {
        console.log("OK: le copertine di " + nomeFile + " coincidono con i dati.");
      } else {
        console.log("ERRORE: le copertine di " + nomeFile + " NON coincidono con i dati.");
        tuttoOk = false;
      }
      return;
    }

    const contenutoNuovo = applicaBlocco(contenutoAttuale, bloccoNuovo);
    if (contenutoNuovo === contenutoAttuale) {
      console.log(nomeFile + " già allineato: nessuna modifica.");
    } else {
      fs.writeFileSync(file, contenutoNuovo);
      console.log(nomeFile + " aggiornato con le copertine generate dai dati.");
      qualcosaScritto = true;
    }
  });

  if (CONTROLLA) {
    if (!tuttoOk) {
      console.log("Lancia: node .github/scripts/genera-copertine.mjs");
      process.exit(1);
    }
    process.exit(0);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
