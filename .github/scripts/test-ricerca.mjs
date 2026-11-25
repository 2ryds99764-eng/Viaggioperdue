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

const fabbrica = new Function(codiceRicerca + "\nreturn { normalizza, testoCombacia, ALIAS_LOCALITA, aliasLocalita };");
const { normalizza, testoCombacia, ALIAS_LOCALITA, aliasLocalita } = fabbrica();

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

// alias aggiunti nella PARTE 3: per ciascuno, la forma ASSENTE dai dati deve
// trovare un record la cui citta/luogo/regione contiene la forma PRESENTE
// (prova che l'alias collega davvero le due grafie, non solo una coincidenza)
const TUTTI = [...GUIDA, ...HOTEL];
function luogoTestoCompleto(r) {
  const luogoSenzaSigla = (r.luogo || "").replace(/\s*\([^)]*\)\s*/g, " ");
  return normalizza([r.citta, luogoSenzaSigla, r.regione].filter(Boolean).join(" "));
}
function verificaAlias(descrizione, query, formaAttesa) {
  const risultati = cerca(TUTTI, query);
  const formaNorm = normalizza(formaAttesa);
  const trovato = risultati.some(function (r) { return luogoTestoCompleto(r).indexOf(formaNorm) !== -1; });
  if (trovato) { ok++; console.log("OK  " + descrizione); }
  else { falliti++; console.log("FAIL " + descrizione); console.log("     query=" + JSON.stringify(query) + " | risultati=" + risultati.length); }
}

console.log("");
console.log("Alias aggiunti (PARTE 3): la forma assente dai dati trova la forma presente");
const ALIAS_DA_VERIFICARE = [
  ["berlino", "berlin"], ["monaco di baviera", "munchen"], ["francoforte", "frankfurt"],
  ["amburgo", "hamburg"], ["lisbona", "lisbon"], ["pechino", "beijing"], ["tokio", "tokyo"],
  ["antwerpen", "anversa"], ["athens", "atene"], ["marrakesh", "marrakech"],
  ["ostenda", "oostende"], ["san pietroburgo", "st petersburg"], ["luxembourg", "lussemburgo"],
  ["salzburg", "salisburgo"], ["brussels", "bruxelles"], ["donostia", "san sebastian"],
  ["sciangai", "shanghai"], ["lucerna", "luzern"], ["berna", "bern"], ["losanna", "lausanne"],
  ["olanda", "paesi bassi"], ["germany", "germania"], ["japan", "giappone"], ["china", "cina"],
  ["thailand", "tailandia"], ["greece", "grecia"], ["spain", "spagna"], ["france", "francia"],
  ["america", "stati uniti"],
];
ALIAS_DA_VERIFICARE.forEach(function (coppia) {
  verificaAlias("\"" + coppia[0] + "\" (alias) -> record con \"" + coppia[1] + "\"", coppia[0], coppia[1]);
});

// Tailandia/Thailandia/Thailand: le tre grafie devono trovare tutti i ristoranti
// di Bangkok in GUIDA e tutti gli alberghi di Bangkok in HOTEL
console.log("");
console.log("Tailandia/Thailandia/Thailand su Bangkok (conteggi):");
["tailandia", "thailandia", "thailand"].forEach(function (q) {
  const rGuida = cerca(GUIDA, q).filter(function (r) { return r.citta === "Bangkok"; });
  const rHotel = cerca(HOTEL, q).filter(function (r) { return r.citta === "Bangkok"; });
  console.log("  \"" + q + "\": GUIDA Bangkok=" + rGuida.length + " | HOTEL Bangkok=" + rHotel.length);
});
const bangkokGuidaTotale = GUIDA.filter(function (r) { return r.citta === "Bangkok"; }).length;
const bangkokHotelTotale = HOTEL.filter(function (r) { return r.citta === "Bangkok"; }).length;
["tailandia", "thailandia", "thailand"].forEach(function (q) {
  verificaVero(
    "\"" + q + "\" trova TUTTI i " + bangkokGuidaTotale + " ristoranti di Bangkok in GUIDA",
    cerca(GUIDA, q).filter(function (r) { return r.citta === "Bangkok"; }).length === bangkokGuidaTotale
  );
  verificaVero(
    "\"" + q + "\" trova TUTTI i " + bangkokHotelTotale + " alberghi di Bangkok in HOTEL",
    cerca(HOTEL, q).filter(function (r) { return r.citta === "Bangkok"; }).length === bangkokHotelTotale
  );
});

// Regno Unito: due gruppi distinti che condividono "regno unito"/"gran bretagna",
// senza propagazione tra Inghilterra e Scozia
verificaAlias("\"regno unito\" -> trova anche record inglesi", "regno unito", "inghilterra");
verificaAlias("\"regno unito\" -> trova anche record scozzesi", "regno unito", "scozia");
verificaAlias("\"gran bretagna\" -> trova anche record inglesi", "gran bretagna", "inghilterra");
verificaAlias("\"gran bretagna\" -> trova anche record scozzesi", "gran bretagna", "scozia");
verificaVero(
  "\"inghilterra\" NON trova record scozzesi (nessuna propagazione tra gruppi)",
  !cerca(TUTTI, "inghilterra").some(function (r) { return r.regione === "Scozia"; })
);
verificaVero(
  "\"scozia\" NON trova record inglesi (nessuna propagazione tra gruppi)",
  !cerca(TUTTI, "scozia").some(function (r) { return r.regione === "Inghilterra"; })
);

// asserzione generale automatica, DI REGRESSIONE: per ogni record a cui la
// aliasLocalita() REALE (quella di motore.js) applica un gruppo, verifica in
// modo indipendente (parola-intera scritta qui, non copiata da motore.js) che
// una forma di quel gruppo compaia davvero come parola intera in citta/luogo-
// senza-parentesi/regione. Se aliasLocalita() tornasse a usare la sottostringa,
// questo test lo scopre.
function parolaInteraIndipendente(testoNormalizzato, forma) {
  const paroleTesto = testoNormalizzato.split(" ");
  const paroleForma = forma.split(" ");
  for (let i = 0; i + paroleForma.length <= paroleTesto.length; i++) {
    let uguale = true;
    for (let j = 0; j < paroleForma.length; j++) {
      if (paroleTesto[i + j] !== paroleForma[j]) { uguale = false; break; }
    }
    if (uguale) return true;
  }
  return false;
}
let falsiPositiviTotali = 0;
TUTTI.forEach(function (r) {
  const testo = luogoTestoCompleto(r);
  const extra = aliasLocalita(testo); // la funzione REALE di motore.js
  if (!extra) return;
  ALIAS_LOCALITA.forEach(function (gruppo) {
    const gruppoApplicato = extra.indexOf(gruppo.join(" ")) !== -1;
    if (!gruppoApplicato) return;
    const legittimo = gruppo.some(function (forma) { return parolaInteraIndipendente(testo, forma); });
    if (!legittimo) {
      falsiPositiviTotali++;
      console.log("  FALSO POSITIVO [" + gruppo.join(",") + "]: " + r.nome + " [" + r.citta + "/" + r.regione + "]");
    }
  });
});
verificaVero(
  "Zero falsi positivi su tutti i " + ALIAS_LOCALITA.length + " gruppi di alias (verifica indipendente a parola intera)",
  falsiPositiviTotali === 0,
  "falsi positivi totali: " + falsiPositiviTotali
);

// casi specifici segnalati
verificaVero(
  "\"china\" NON trova \"Ristopescheria da Mery\" (Cecina, non Cina)",
  !cerca(GUIDA, "china").some(function (r) { return r.nome === "Ristopescheria da Mery"; })
);
verificaVero(
  "\"france\" NON trova record con \"Franciacorta\" se la regione non e' Francia",
  !cerca(TUTTI, "france").some(function (r) {
    return (r.citta || "").toLowerCase().includes("franciacorta") && r.regione !== "Francia";
  })
);
verificaVero(
  "\"stati uniti\" NON trova record con \"Americano\" nel nome se non sono negli USA",
  !cerca(TUTTI, "stati uniti").some(function (r) {
    return (r.nome || "").toLowerCase().includes("americano") && r.regione !== "Stati Uniti";
  })
);
verificaVero(
  "\"berna\" NON trova \"Bernardi\"/\"Bernina\" per via dell'alias",
  !cerca(TUTTI, "berna").some(function (r) { return /bernardi|bernina/i.test(r.nome || ""); })
);
verificaVero(
  "\"zurigo\" NON trova un hotel con \"Zürich\" solo nel nome (es. a Basilea/Glattbrugg)",
  !cerca(TUTTI, "zurigo").some(function (r) { return /zurich|zürich/i.test(r.nome || "") && r.citta !== "Zurigo" && r.citta !== "Zurich" && r.citta !== "Zürich"; })
);

console.log("");
console.log("Conteggi di riferimento:");
console.log("  GUIDA totali: " + GUIDA.length + " | HOTEL totali: " + HOTEL.length);
console.log("  \"lombardia\" su GUIDA: " + cerca(GUIDA, "lombardia").length);
console.log("  \"svizzera\" su GUIDA: " + cerca(GUIDA, "svizzera").length);

console.log("");
console.log("Asserzioni: " + ok + " superate, " + falliti + " fallite.");
process.exit(falliti > 0 ? 1 : 0);
