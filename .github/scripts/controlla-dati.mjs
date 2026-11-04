// Controllo di coerenza dei dati del sito (hotel.js, guida.js, dati.js, itinerari.js).
// Node, ES module, nessuna dipendenza esterna.

import fs from "node:fs";
import vm from "node:vm";

// Schede già verificate a mano (su Apple Mappe) nonostante il controllo
// automatico le segnali: non devono più produrre gli avvisi sulle mappe
// (controllo 1 "stesso campo mappa" e controllo 4 "mappe a rischio").
const ECCEZIONI_VERIFICATE = {
  "Il Pellicano": "verificato su Apple Mappe il 3 novembre 2026",
  "Pardini's Hermitage": "verificato su Apple Mappe il 3 novembre 2026",
  "Kyrimai": "verificato su Apple Mappe il 3 novembre 2026",
  "Taverna Takis": "verificato su Apple Mappe il 3 novembre 2026",
  "Trattoria al Cacciatore — La Subida": "verificato su Apple Mappe il 3 novembre 2026",
  "Osteria La Preda — La Subida": "verificato su Apple Mappe il 3 novembre 2026",
  "Grand Hotel Quellenhof": "verificato su Apple Mappe il 3 novembre 2026",
  "Grand Hotel Hof Ragaz": "verificato su Apple Mappe il 3 novembre 2026",
  "La Grande Table Marocaine": "verificato su Apple Mappe il 3 novembre 2026",
  "Sesamo": "verificato su Apple Mappe il 3 novembre 2026",
  "Pirgos Mavromichali": "verificato su Apple Mappe il 3 novembre 2026",
  "Tarsia Homes & Suites": "verificato su Apple Mappe il 3 novembre 2026",
  "Castella Loutro": "verificato su Apple Mappe il 3 novembre 2026",
  "Spondi": "verificato su Apple Mappe il 3 novembre 2026",
  "Borgo Santo Pietro": "verificato su Apple Mappe il 4 novembre 2026",
  "Stella Maris": "verificato su Apple Mappe il 4 novembre 2026",
  "Casa Colonica": "verificato su Apple Mappe il 4 novembre 2026",
  "Oasi Val Pisani": "verificato su Apple Mappe il 4 novembre 2026",
  "La Rosa Bianca": "verificato su Apple Mappe il 4 novembre 2026",
};

const ERRORI = [];
const AVVISI = [];

function errore(scheda, motivo) {
  ERRORI.push(`ERRORE [${scheda}] ${motivo}`);
}
function avviso(scheda, motivo) {
  AVVISI.push(`AVVISO [${scheda}] ${motivo}`);
}

function normalizza(s) {
  return (s || "")
    .toString()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

// ---------------------------------------------------------------------------
// Caricamento dati: eseguiamo i file testo-per-testo in un contesto vm
// condiviso, con window=globalThis del contesto, così gli script che
// referenziano window.HOTEL ecc. (come itinerari.js fa con T42) funzionano
// come nel browser. Le dichiarazioni "var" si attaccano da sole al contesto;
// le "const" (T42 in dati.js) no, quindi le recuperiamo con un'espressione
// finale aggiunta in coda al testo e le assegniamo a mano al contesto.
// ---------------------------------------------------------------------------

const sandbox = {};
sandbox.window = sandbox;
// dati.js referenzia T42_LOGHI (da loghi.js, non richiesto da questo controllo): stub minimo.
sandbox.T42_LOGHI = { logo: "", logoBianco: "" };
const contesto = vm.createContext(sandbox);

function eseguiFile(file, espressioneFinale) {
  const codice = fs.readFileSync(file, "utf8");
  const script = new vm.Script(codice + "\n;\n(" + espressioneFinale + ");", { filename: file });
  return script.runInContext(contesto);
}

const T42 = eseguiFile("dati.js", "T42");
sandbox.T42 = T42;

const datiHotel = eseguiFile("hotel.js", "({HOTEL, HOTEL_PROVCITTA})");
sandbox.HOTEL = datiHotel.HOTEL;
sandbox.HOTEL_PROVCITTA = datiHotel.HOTEL_PROVCITTA;

const datiGuida = eseguiFile("guida.js", "({GUIDA, GUIDA_REGPROV})");
sandbox.GUIDA = datiGuida.GUIDA;
sandbox.GUIDA_REGPROV = datiGuida.GUIDA_REGPROV;

eseguiFile("itinerari.js", "T42"); // itinerari.js muta T42.itinerari in place
eseguiFile("escape.js", "T42"); // escape.js muta T42.escape in place (richiesto solo per il controllo 7 sulla sitemap)

const HOTEL = sandbox.HOTEL;
const GUIDA = sandbox.GUIDA;
const ITINERARI = sandbox.T42.itinerari || {};

console.log(
  `Dati caricati: HOTEL=${HOTEL.length} voci, GUIDA=${GUIDA.length} voci, itinerari=${Object.keys(ITINERARI).length}.`
);

// ---------------------------------------------------------------------------
// 1) Doppioni in HOTEL e in GUIDA
// ---------------------------------------------------------------------------

function controllaDoppioni(elenco, etichetta) {
  const perNomeCitta = new Map();
  const perMappa = new Map();

  elenco.forEach((r) => {
    const chiaveNomeCitta = normalizza(r.nome) + "|" + normalizza(r.citta);
    if (!perNomeCitta.has(chiaveNomeCitta)) perNomeCitta.set(chiaveNomeCitta, []);
    perNomeCitta.get(chiaveNomeCitta).push(r);

    if (r.mappa && !ECCEZIONI_VERIFICATE[r.nome]) {
      if (!perMappa.has(r.mappa)) perMappa.set(r.mappa, []);
      perMappa.get(r.mappa).push(r);
    }
  });

  for (const gruppo of perNomeCitta.values()) {
    if (gruppo.length > 1) {
      for (let i = 1; i < gruppo.length; i++) {
        errore(
          etichetta,
          `doppione: "${gruppo[0].nome}" e "${gruppo[i].nome}" hanno lo stesso nome e la stessa città (${gruppo[0].citta})`
        );
      }
    }
  }

  for (const [mappa, gruppo] of perMappa.entries()) {
    const nomiDistinti = [...new Set(gruppo.map((r) => normalizza(r.nome)))];
    if (nomiDistinti.length > 1) {
      const nomiOriginali = [...new Set(gruppo.map((r) => r.nome))];
      avviso(etichetta, `stesso campo mappa ("${mappa}") per nomi diversi: ${nomiOriginali.join(", ")}`);
    }
  }
}

controllaDoppioni(HOTEL, "HOTEL");
controllaDoppioni(GUIDA, "GUIDA");

// ---------------------------------------------------------------------------
// 2) Campi obbligatori e formati
// ---------------------------------------------------------------------------

function controllaCampi(elenco, etichetta) {
  elenco.forEach((r, i) => {
    const id = r.nome || `#${i}`;
    if (!r.nome) errore(etichetta, `${id}: campo "nome" mancante`);
    if (!r.regione) errore(etichetta, `${id}: campo "regione" mancante`);
    if (!r.mappa) errore(etichetta, `${id}: campo "mappa" mancante`);

    if (r.tel && !/^\+\d/.test(r.tel)) {
      avviso(etichetta, `${id}: tel "${r.tel}" non comincia con + e cifre`);
    }
    if (r.email && !r.email.includes("@")) {
      avviso(etichetta, `${id}: email "${r.email}" senza @`);
    }
    if (r.web && !/^https?:\/\//.test(r.web)) {
      avviso(etichetta, `${id}: web "${r.web}" non comincia con http`);
    }
  });
}

controllaCampi(HOTEL, "HOTEL");
controllaCampi(GUIDA, "GUIDA");

// ---------------------------------------------------------------------------
// 3) Itinerari: coerenza con HOTEL/GUIDA e formati
// ---------------------------------------------------------------------------

const hotelPerNome = new Set(HOTEL.map((h) => h.nome));
const guidaPerNome = new Set(GUIDA.map((g) => g.nome));
const reCoord = /^\s*-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?\s*$/;

for (const [chiave, it] of Object.entries(ITINERARI)) {
  const schedaIt = `itinerario:${chiave}`;

  if (!it.copertina || !/^https:\/\//.test(it.copertina)) {
    errore(schedaIt, `copertina mancante o non https: ${JSON.stringify(it.copertina)}`);
  }

  (it.taccuino?.dormire || []).forEach((zona) => {
    (zona.strutture || []).forEach((s) => {
      if (!hotelPerNome.has(s.nome)) {
        avviso(schedaIt, `taccuino.dormire (${zona.zona}): "${s.nome}" albergo senza scheda in hotel.js (il sito web non viene collegato)`);
      }
    });
  });

  (it.giorni || []).forEach((g) => {
    const etichettaGiorno = `${schedaIt} / ${g.label || "?"}`;

    (g.ristoranti || []).forEach((nomeRist) => {
      if (!guidaPerNome.has(nomeRist)) {
        errore(etichettaGiorno, `ristorante "${nomeRist}" non trovato in GUIDA`);
      }
    });

    (g.luoghi || []).forEach((l) => {
      if (typeof l === "string") {
        if (!hotelPerNome.has(l)) {
          errore(etichettaGiorno, `luogo (nome albergo) "${l}" non trovato in HOTEL`);
        }
      } else if (l && typeof l === "object") {
        if (!l.nome) errore(etichettaGiorno, `luogo oggetto senza "nome": ${JSON.stringify(l)}`);
        if (!l.mappa) errore(etichettaGiorno, `luogo "${l.nome || "?"}" senza "mappa"`);
        const haLat = typeof l.lat === "number";
        const haLng = typeof l.lng === "number";
        const latPresente = l.lat !== undefined;
        const lngPresente = l.lng !== undefined;
        if (latPresente !== lngPresente) {
          errore(etichettaGiorno, `luogo "${l.nome || "?"}": lat/lng presenti solo in parte`);
        } else if (latPresente && lngPresente && !(haLat && haLng)) {
          errore(etichettaGiorno, `luogo "${l.nome || "?"}": lat/lng presenti ma non numeri`);
        }
      } else {
        errore(etichettaGiorno, `voce "luoghi" non valida: ${JSON.stringify(l)}`);
      }
    });

    (g.tragitti || []).forEach((t) => {
      ["daMappa", "aMappa"].forEach((campo) => {
        if (t[campo] !== undefined && !reCoord.test(t[campo])) {
          errore(etichettaGiorno, `tragitto "${t.da} → ${t.a}": ${campo} "${t[campo]}" non ha forma "lat,lng"`);
        }
      });
    });
  });
}

// ---------------------------------------------------------------------------
// 4) Mappe a rischio (AVVISO)
// ---------------------------------------------------------------------------

const REGIONI_ITALIANE = new Set([
  "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna",
  "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche",
  "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana",
  "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto",
]);

const SIGLE_PROVINCIA_AMBIGUE = new Set([
  "AL", "AT", "BA", "BG", "BR", "CA", "CH", "CR", "CZ", "FR", "GE", "GR",
  "IM", "IS", "LI", "LT", "LU", "MC", "ME", "NA", "NO", "PE", "PL", "PT",
  "RO", "SA", "SI", "TO", "TR", "VA",
]);

const PAROLE_INDIRIZZO = /\b(Via|Viale|Piazza|Corso|Strada|Largo|Localit[aà]|Borgo|Contrada)\b/i;
const PAROLE_DESCRITTIVE_INIZIALI = /^(Sul|Sulla|Nel|Nella|Vicino|Dentro)\b/;

function controllaMappeARischio(elenco, etichetta) {
  elenco.forEach((r) => {
    if (!r.mappa || typeof r.mappa !== "string") return;
    if (ECCEZIONI_VERIFICATE[r.nome]) return;
    const id = r.nome || "?";
    const mappa = r.mappa;
    const pezzi = mappa.split(",").map((p) => p.trim());
    const ultimo = pezzi[pezzi.length - 1];
    const eItaliana = REGIONI_ITALIANE.has(r.regione);

    if (!eItaliana) {
      if (SIGLE_PROVINCIA_AMBIGUE.has(ultimo)) {
        avviso(
          etichetta,
          `${id}: mappa "${mappa}" (regione estera "${r.regione}") finisce con la sigla "${ultimo}", che è anche una sigla di provincia italiana: sigla estera ambigua`
        );
      }
    } else {
      const haCifre = /\d/.test(mappa);
      const haParolaIndirizzo = PAROLE_INDIRIZZO.test(mappa);
      if (!haCifre && !haParolaIndirizzo && SIGLE_PROVINCIA_AMBIGUE.has(ultimo)) {
        avviso(
          etichetta,
          `${id}: mappa "${mappa}" è "solo località" e finisce con la sigla ambigua "${ultimo}"`
        );
      }
    }

    // Controlli generali, su tutti i record (italiani ed esteri):
    if (PAROLE_DESCRITTIVE_INIZIALI.test(mappa)) {
      avviso(etichetta, `${id}: mappa "${mappa}" comincia con una frase descrittiva, non un indirizzo`);
    }
    if (/\bMani\b/.test(mappa)) {
      avviso(etichetta, `${id}: mappa "${mappa}" contiene la parola "Mani" (rischio di query ambigua)`);
    }
    if (mappa.length < 8) {
      avviso(etichetta, `${id}: mappa "${mappa}" è più corta di 8 caratteri`);
    }
  });
}

controllaMappeARischio(HOTEL, "HOTEL");
controllaMappeARischio(GUIDA, "GUIDA");

// ---------------------------------------------------------------------------
// 5) Simboli: ogni emoji nelle note deve avere un'etichetta in motore.js
// ---------------------------------------------------------------------------

const motoreSrc = fs.readFileSync("motore.js", "utf8");

const ETICHETTE_RISTORANTE = new Map();
{
  const m = motoreSrc.match(/const\s+ETICHETTE_SIMBOLO_RISTORANTE\s*=\s*\{([^;]*?)\};/s);
  if (m) {
    const reCoppia = /"([^"]+)"\s*:\s*"([^"]+)"/g;
    let mc;
    while ((mc = reCoppia.exec(m[1]))) {
      ETICHETTE_RISTORANTE.set(mc[1].replace(/️/g, ""), mc[2]);
    }
  }
}

const ETICHETTE_ALBERGO = new Map();
{
  const m = motoreSrc.match(/const\s+SIMBOLI_ALBERGO\s*=\s*\[([^\]]*?)\];/s);
  if (m) {
    const reCoppia = /\{\s*v:\s*"([^"]+)"\s*,\s*t:\s*"([^"]+)"\s*\}/g;
    let mc;
    while ((mc = reCoppia.exec(m[1]))) {
      ETICHETTE_ALBERGO.set(mc[1].replace(/️/g, ""), mc[2]);
    }
  }
}

console.log(
  `\nEtichette simbolo trovate in motore.js: ETICHETTE_SIMBOLO_RISTORANTE=${ETICHETTE_RISTORANTE.size}, SIMBOLI_ALBERGO=${ETICHETTE_ALBERGO.size}.`
);

function pittogrammi(testo) {
  return (testo || "").toString().match(/\p{Extended_Pictographic}️?/gu) || [];
}

function controllaSimboli(elenco, etichetta, mappaEtichette) {
  elenco.forEach((r) => {
    const id = r.nome || "?";
    pittogrammi(r.note).forEach((s) => {
      const chiave = s.replace(/️/g, "");
      if (!mappaEtichette.has(chiave)) {
        avviso(etichetta, `${id}: simbolo "${s}" nelle note senza etichetta in motore.js`);
      }
    });
  });
}

controllaSimboli(GUIDA, "GUIDA", ETICHETTE_RISTORANTE);
controllaSimboli(HOTEL, "HOTEL", ETICHETTE_ALBERGO);

// ---------------------------------------------------------------------------
// 6) Crediti fotografici per le copertine Unsplash degli itinerari
// ---------------------------------------------------------------------------

for (const [chiave, it] of Object.entries(ITINERARI)) {
  if (it.copertina && /unsplash/i.test(it.copertina)) {
    if (!it.copertinaCredito) {
      avviso(`itinerario:${chiave}`, `copertina Unsplash senza "copertinaCredito"`);
    }
    if (!it.copertinaCreditoUrl) {
      avviso(`itinerario:${chiave}`, `copertina Unsplash senza "copertinaCreditoUrl"`);
    }
  }
}

// ---------------------------------------------------------------------------
// 7) Sitemap: pagine attese che potrebbero mancare
// ---------------------------------------------------------------------------

const BASE_SITO = "https://www.viaggioperdue.com/";
const sitemapTxt = fs.readFileSync("sitemap.xml", "utf8");
const LOC_SITEMAP = new Set(
  (sitemapTxt.match(/<loc>([^<]*)<\/loc>/g) || []).map((l) => l.replace(/<\/?loc>/g, ""))
);

function controllaSitemap(url, descrizione) {
  if (!LOC_SITEMAP.has(url)) {
    avviso("sitemap", `manca ${descrizione}: ${url}`);
  }
}

// Queste pagine esistono solo come modello con un parametro: non ha senso
// controllarle "nude" (senza parametro), controlliamo invece le loro voci
// parametrizzate più sotto.
const PAGINE_SOLO_CON_PARAMETRO = new Set([
  "categoria.html", "storia.html", "itinerario.html", "escape.html",
]);

fs
  .readdirSync(".")
  .filter((f) => f.endsWith(".html") && f !== "coming-soon.html" && !PAGINE_SOLO_CON_PARAMETRO.has(f))
  .forEach((f) => {
    const url = f === "index.html" ? BASE_SITO : BASE_SITO + f;
    controllaSitemap(url, `pagina di primo livello "${f}"`);
  });

Object.keys(ITINERARI).forEach((chiave) => {
  controllaSitemap(BASE_SITO + "itinerario.html?i=" + chiave, `itinerario "${chiave}"`);
});

Object.keys(sandbox.T42.storie || {}).forEach((chiave) => {
  controllaSitemap(BASE_SITO + "storia.html?s=" + chiave, `storia "${chiave}"`);
});

(sandbox.T42.categorie || []).forEach((cat) => {
  controllaSitemap(BASE_SITO + "categoria.html?c=" + cat.id, `categoria "${cat.id}"`);
});

Object.keys(sandbox.T42.escape || {}).forEach((chiave) => {
  controllaSitemap(BASE_SITO + "escape.html?e=" + chiave, `escape "${chiave}"`);
});

// ---------------------------------------------------------------------------
// 8) Immagini Cloudinary, solo con --rete
// ---------------------------------------------------------------------------

const CONTROLLA_RETE = process.argv.includes("--rete");
const MOSTRA_TUTTO = process.argv.includes("--tutto");

function raccogliCloudinary(valore, insieme, visti) {
  if (valore == null) return;
  if (typeof valore === "string") {
    if (/^https:\/\/res\.cloudinary\.com\//.test(valore)) insieme.add(valore);
    return;
  }
  if (typeof valore !== "object") return;
  if (visti.has(valore)) return;
  visti.add(valore);
  if (Array.isArray(valore)) {
    valore.forEach((v) => raccogliCloudinary(v, insieme, visti));
    return;
  }
  for (const k in valore) raccogliCloudinary(valore[k], insieme, visti);
}

async function controlloImmaginiCloudinary() {
  if (!CONTROLLA_RETE) {
    console.log("\n8) Immagini Cloudinary: saltato (lancia con --rete per eseguirlo).");
    return;
  }

  const insieme = new Set();
  const visti = new Set();
  raccogliCloudinary(sandbox.T42, insieme, visti);
  raccogliCloudinary(HOTEL, insieme, visti);
  raccogliCloudinary(GUIDA, insieme, visti);

  const lista = Array.from(insieme).sort();
  console.log(`\n8) Immagini Cloudinary: ${lista.length} URL distinti, controllo via rete...`);

  for (const url of lista) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.status !== 200) {
        avviso("immagini", `${url}: stato HTTP ${res.status}`);
      }
      const lunghezza = res.headers.get("content-length");
      if (lunghezza && Number(lunghezza) > 1.5 * 1024 * 1024) {
        avviso("immagini", `${url}: ${Number(lunghezza)} byte, supera 1,5 MB`);
      }
    } catch (e) {
      avviso("immagini", `${url}: richiesta HEAD fallita (${e.message})`);
    }
    if (!url.includes("f_auto")) {
      avviso("immagini", `${url}: manca f_auto nell'URL`);
    }
    await new Promise((r) => setTimeout(r, 200));
  }
}

await controlloImmaginiCloudinary();

// ---------------------------------------------------------------------------
// 9) Telefoni con parentesi o che non cominciano con "+" (AVVISO)
// ---------------------------------------------------------------------------

function controllaTelefoniParentesi(elenco, etichetta) {
  elenco.forEach((r) => {
    const id = r.nome || "?";
    if (r.tel && (/[()]/.test(r.tel) || !r.tel.startsWith("+"))) {
      avviso(etichetta, `${id}: tel "${r.tel}" contiene parentesi o non comincia con +`);
    }
  });
}

controllaTelefoniParentesi(HOTEL, "HOTEL");
controllaTelefoniParentesi(GUIDA, "GUIDA");

// ---------------------------------------------------------------------------
// 10) Email non valide per forma (ERRORE)
// ---------------------------------------------------------------------------

const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function controllaFormaEmail(elenco, etichetta) {
  elenco.forEach((r) => {
    const id = r.nome || "?";
    if (r.email && !RE_EMAIL.test(r.email)) {
      errore(etichetta, `${id}: email "${r.email}" non valida per forma`);
    }
  });
}

controllaFormaEmail(HOTEL, "HOTEL");
controllaFormaEmail(GUIDA, "GUIDA");

// ---------------------------------------------------------------------------
// Riepilogo
// ---------------------------------------------------------------------------

console.log("");
console.log("--- ERRORI ---");
ERRORI.forEach((r) => console.log(r));
console.log("");
console.log("--- AVVISI ---");
const AVVISI_ALBERGO_SENZA_SCHEDA = AVVISI.filter((a) => a.includes("albergo senza scheda in hotel.js"));
const ALTRI_AVVISI = AVVISI.filter((a) => !a.includes("albergo senza scheda in hotel.js"));
ALTRI_AVVISI.forEach((a) => console.log(a));
if (AVVISI_ALBERGO_SENZA_SCHEDA.length) {
  if (MOSTRA_TUTTO) {
    AVVISI_ALBERGO_SENZA_SCHEDA.forEach((a) => console.log(a));
  } else {
    console.log(
      `AVVISO [itinerari] ${AVVISI_ALBERGO_SENZA_SCHEDA.length} alberghi senza scheda in hotel.js (lancia con --tutto per il dettaglio)`
    );
  }
}

console.log("");
console.log(`Totale ERRORI: ${ERRORI.length}`);
console.log(`Totale AVVISI: ${AVVISI.length}`);

process.exit(ERRORI.length > 0 ? 1 : 0);
