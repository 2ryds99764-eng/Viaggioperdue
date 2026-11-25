// Test della ricerca di guida.html e hotel.html: normalizza(), testoCombacia() e
// gli alias di localita, estratti ed eseguiti dal blocco RICERCA-INIZIO/RICERCA-FINE
// di motore.js (la logica REALE usata dalla pagina, non una copia).
// Carica anche guida.js e hotel.js per testare sui dati veri.
// Node, ES module, nessuna dipendenza esterna.

import fs from "node:fs";
import vm from "node:vm";

// ---------------------------------------------------------------------------
// Estrazione ed esecuzione del blocco RICERCA da motore.js
// ---------------------------------------------------------------------------

const motoreSrc = fs.readFileSync("motore.js", "utf8");
const inizio = motoreSrc.indexOf("/* RICERCA-INIZIO");
const fine = motoreSrc.indexOf("/* RICERCA-FINE */");
if (inizio === -1 || fine === -1) {
  console.error("Blocco RICERCA-INIZIO/RICERCA-FINE non trovato in motore.js");
  process.exit(1);
}
const codiceRicerca = motoreSrc.slice(inizio, fine + "/* RICERCA-FINE */".length);

const fabbrica = new Function(codiceRicerca + "\nreturn { normalizza, testoCombacia };");
const { normalizza, testoCombacia } = fabbrica();

function cerca(dati, queryGrezza) {
  const q = normalizza(queryGrezza);
  return dati.filter(function (r) { return testoCombacia(r, q); });
}

// ---------------------------------------------------------------------------
// Caricamento di GUIDA e HOTEL (dati veri)
// ---------------------------------------------------------------------------

function caricaArrayGlobale(file, nomeVar) {
  const sandbox = {};
  sandbox.window = sandbox;
  const ctx = vm.createContext(sandbox);
  new vm.Script(fs.readFileSync(file, "utf8"), { filename: file }).runInContext(ctx);
  return sandbox[nomeVar];
}

const GUIDA = caricaArrayGlobale("guida.js", "GUIDA");
const HOTEL = caricaArrayGlobale("hotel.js", "HOTEL");

// ---------------------------------------------------------------------------
// Asserzioni
// ---------------------------------------------------------------------------

let ok = 0, falliti = 0;

function verificaTrova(descrizione, dati, query, nomeAtteso) {
  const risultati = cerca(dati, query);
  const trovato = risultati.some(function (r) { return r.nome === nomeAtteso; });
  if (trovato) {
    ok++;
    console.log("OK  " + descrizione);
  } else {
    falliti++;
    console.log("FAIL " + descrizione);
    console.log("     query=" + JSON.stringify(query) + " atteso: trova \"" + nomeAtteso + "\" | risultati=" + risultati.length);
  }
}

function verificaConteggio(descrizione, attuale, atteso) {
  if (attuale === atteso) {
    ok++;
    console.log("OK  " + descrizione + " (" + attuale + ")");
  } else {
    falliti++;
    console.log("FAIL " + descrizione);
    console.log("     atteso: " + atteso + " | trovato: " + attuale);
  }
}

function verificaVero(descrizione, condizione, dettaglio) {
  if (condizione) {
    ok++;
    console.log("OK  " + descrizione);
  } else {
    falliti++;
    console.log("FAIL " + descrizione);
    if (dettaglio) console.log("     " + dettaglio);
  }
}

// 1-2) accento sul nome, nei due versi
verificaTrova("1) \"cafe\" (senza accento) -> \"Poliform Cafè\"", GUIDA, "cafe", "Poliform Cafè");
verificaTrova("2) \"cafè\" (con accento) -> \"Poliform Cafè\"", GUIDA, "cafè", "Poliform Cafè");

// 3) città con accento, cercata senza
verificaTrova("3) \"zurich\" -> un hotel a Zürich", HOTEL, "zurich", "Hotel St. Gotthard");

// 4) alias: grafia italiana "Zurigo" su HOTEL (dati in tedesco/inglese)
verificaTrova("4) \"zurigo\" su HOTEL (alias) -> \"Hotel St. Gotthard\"", HOTEL, "zurigo", "Hotel St. Gotthard");

// 5) maiuscole
verificaTrova("5) \"OSTERIA\" (maiuscolo) -> \"D’Amato Osteria\"", GUIDA, "OSTERIA", "D’Amato Osteria");

// 6) indirizzo: deve restare 0 per costruzione (indirizzo escluso dal testo cercabile)
verificaConteggio("6) per indirizzo \"Via Eugenio Villoresi\" (escluso per costruzione)", cerca(GUIDA, "Via Eugenio Villoresi").length, 0);

// 7) città
verificaTrova("7) per città \"Vittuone\" -> \"Dell’Angolo\"", GUIDA, "Vittuone", "Dell’Angolo");

// 8) regione, ora indicizzata
verificaVero("8) \"lombardia\" trova ristoranti lombardi", cerca(GUIDA, "lombardia").length > 0, "trovati: " + cerca(GUIDA, "lombardia").length);

// 9) paese (vale il campo regione), ora indicizzato
verificaVero("9) \"svizzera\" trova record svizzeri", cerca(GUIDA, "svizzera").length > 0, "trovati: " + cerca(GUIDA, "svizzera").length);

// 10-11) apostrofo dritto vs tipografico
verificaTrova("10) apostrofo dritto \"dell'angolo\" -> \"Dell’Angolo\" (tipografico nel dato)", GUIDA, "dell'angolo", "Dell’Angolo");
verificaTrova("11) apostrofo tipografico \"dell’angolo\" -> \"Dell’Angolo\" (controllo)", GUIDA, "dell’angolo", "Dell’Angolo");

// 12-13) trattino/spazio, stessa città su pagine diverse
verificaVero("12) \"duino aurisina\" (spazio) su GUIDA, dato con trattino", cerca(GUIDA, "duino aurisina").length > 0, "trovati: " + cerca(GUIDA, "duino aurisina").length);
verificaVero("13) \"duino-aurisina\" (trattino) su HOTEL, dato con spazio", cerca(HOTEL, "duino-aurisina").length > 0, "trovati: " + cerca(HOTEL, "duino-aurisina").length);

// 14) doppio spazio
verificaTrova("14) doppio spazio \"Caffè  la Crepa\" -> \"Caffè la Crepa\"", GUIDA, "Caffè  la Crepa", "Caffè la Crepa");

// 15) solo spazi su HOTEL -> tutti
verificaConteggio("15) solo spazi \"   \" su HOTEL -> tutti", cerca(HOTEL, "   ").length, HOTEL.length);

// query compatta, senza apostrofo e senza spazio
verificaTrova("16) \"dellangolo\" (compatta) -> \"Dell’Angolo\"", GUIDA, "dellangolo", "Dell’Angolo");

// alias Canea/Chania
verificaTrova("17) \"canea\" (alias) -> record di Chania", HOTEL, "canea", "Casa Delfino");

// la sigla tra parentesi in "luogo" (es. "Lugano (TI)") non deve essere cercabile:
// nessun record deve comparire SOLO perché la query è contenuta in quella sigla
// (misura vera: ricostruisce il testo SENZA la parentesi e verifica che il record
// vi compaia comunque, per ogni risultato restituito dalla ricerca reale)
function contaSoloPerSiglaInLuogo(dati, query) {
  const qn = normalizza(query);
  const qnCompatta = qn.replace(/ /g, "");
  const risultati = dati.filter(function (r) { return testoCombacia(r, qn); });
  const soloPerSigla = risultati.filter(function (r) {
    // stesso confronto di testoCombacia (spaziata e compatta), ma con il luogo
    // senza la parte tra parentesi: se matcherebbe comunque, non è "colpa" della
    // sigla (puo' essere una giunzione fra due parole nella forma compatta, non
    // collegata alla sigla: es. "nottingham"+"inghilterra" contiene "mi")
    const luogoSenzaSigla = (r.luogo || "").replace(/\s*\([^)]*\)\s*/g, " ");
    const testoSenzaSigla = normalizza([r.nome, r.citta, luogoSenzaSigla, r.regione].filter(Boolean).join(" "));
    if (testoSenzaSigla.indexOf(qn) !== -1) return false;
    if (testoSenzaSigla.replace(/ /g, "").indexOf(qnCompatta) !== -1) return false;
    return true;
  });
  return { totale: risultati.length, soloPerSigla: soloPerSigla.length };
}

const QUERY_SIGLA = ["ti", "mi", "f", "gb", "zh"];
let n = 18;
console.log("");
console.log("Conteggi query-sigla (totale risultati | solo per la sigla tra parentesi, deve essere 0):");
QUERY_SIGLA.forEach(function (q) {
  [["GUIDA", GUIDA], ["HOTEL", HOTEL]].forEach(function (coppia) {
    const nomeDati = coppia[0], dati = coppia[1];
    const r = contaSoloPerSiglaInLuogo(dati, q);
    console.log("  " + nomeDati + " \"" + q + "\": totale=" + r.totale + " | solo-per-sigla=" + r.soloPerSigla);
    verificaVero(
      n++ + ") \"" + q + "\" su " + nomeDati + ": nessun record solo per la sigla tra parentesi in luogo",
      r.soloPerSigla === 0,
      "totale=" + r.totale + " | solo-per-sigla=" + r.soloPerSigla
    );
  });
});

console.log("");
console.log("Conteggi di riferimento:");
console.log("  GUIDA totali: " + GUIDA.length + " | HOTEL totali: " + HOTEL.length);
console.log("  \"lombardia\" su GUIDA: " + cerca(GUIDA, "lombardia").length);
console.log("  \"svizzera\" su GUIDA: " + cerca(GUIDA, "svizzera").length);

console.log("");
console.log("Asserzioni: " + ok + " superate, " + falliti + " fallite.");
process.exit(falliti > 0 ? 1 : 0);
