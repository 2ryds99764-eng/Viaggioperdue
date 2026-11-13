// Test degli aiuti Cloudinary (cld, cldLarghezza, cldSrcset) definiti in motore.js.
// Node, ES module, nessuna dipendenza esterna.

import fs from "node:fs";

const RETE = process.argv.includes("--rete");

// ---------------------------------------------------------------------------
// Estrazione ed esecuzione del blocco CLD da motore.js
// ---------------------------------------------------------------------------

const motoreSrc = fs.readFileSync("motore.js", "utf8");
const inizio = motoreSrc.indexOf("/* CLD-INIZIO");
const fine = motoreSrc.indexOf("/* CLD-FINE */");
if (inizio === -1 || fine === -1) {
  console.error("Blocco CLD-INIZIO/CLD-FINE non trovato in motore.js");
  process.exit(1);
}
const codiceCLD = motoreSrc.slice(inizio, fine + "/* CLD-FINE */".length);

const fabbrica = new Function("window", codiceCLD + "\nreturn { cld, cldLarghezza, cldSrcset };");
const { cld, cldLarghezza, cldSrcset } = fabbrica({ devicePixelRatio: 2 });

// ---------------------------------------------------------------------------
// Asserzioni a-g
// ---------------------------------------------------------------------------

let ok = 0, falliti = 0;

function verifica(descrizione, attuale, atteso) {
  if (attuale === atteso) {
    ok++;
    console.log("OK  " + descrizione);
  } else {
    falliti++;
    console.log("FAIL " + descrizione);
    console.log("     atteso:  " + atteso);
    console.log("     trovato: " + attuale);
  }
}

const BASE = "https://res.cloudinary.com/dspgc41gt/image/upload/";

verifica(
  "a) IMG_8781_ouxnzu con w=1200",
  cld(BASE + "IMG_8781_ouxnzu", 1200),
  BASE + "c_limit,w_1200,q_auto,f_auto/IMG_8781_ouxnzu"
);

verifica(
  "b) a_-90,f_jpg/IMG_1788_mftxg6 con w=1200",
  cld(BASE + "a_-90,f_jpg/IMG_1788_mftxg6", 1200),
  BASE + "a_-90/c_limit,w_1200,q_auto,f_auto/IMG_1788_mftxg6"
);

verifica(
  "c) f_jpg/Hero.jpg_ffkmdy con w=1200",
  cld(BASE + "f_jpg/Hero.jpg_ffkmdy", 1200),
  BASE + "c_limit,w_1200,q_auto,f_auto/Hero.jpg_ffkmdy"
);

verifica(
  "d) La Soglina (w_1600,q_auto,f_auto) con w=1200 diventa c_limit,w_1200",
  cld(BASE + "w_1600,q_auto,f_auto/v1793774140/IMG_2146_t85mhu.jpg", 1200),
  BASE + "c_limit,w_1200,q_auto,f_auto/v1793774140/IMG_2146_t85mhu.jpg"
);

verifica(
  "d) La Soglina con w=1600 resta identica",
  cld(BASE + "w_1600,q_auto,f_auto/v1793774140/IMG_2146_t85mhu.jpg", 1600),
  BASE + "w_1600,q_auto,f_auto/v1793774140/IMG_2146_t85mhu.jpg"
);

verifica(
  "d) La Soglina con w=2400 resta identica",
  cld(BASE + "w_1600,q_auto,f_auto/v1793774140/IMG_2146_t85mhu.jpg", 2400),
  BASE + "w_1600,q_auto,f_auto/v1793774140/IMG_2146_t85mhu.jpg"
);

verifica(
  "d) Creta (w_2400,q_auto,f_auto) con w=800 diventa c_limit,w_800",
  cld(BASE + "w_2400,q_auto,f_auto/v1793177590/dimitris-kiriakakis-p_DnAQNczqY-unsplash_wrth7e.jpg", 800),
  BASE + "c_limit,w_800,q_auto,f_auto/v1793177590/dimitris-kiriakakis-p_DnAQNczqY-unsplash_wrth7e.jpg"
);

verifica(
  "d) Creta con w=2400 resta identica",
  cld(BASE + "w_2400,q_auto,f_auto/v1793177590/dimitris-kiriakakis-p_DnAQNczqY-unsplash_wrth7e.jpg", 2400),
  BASE + "w_2400,q_auto,f_auto/v1793177590/dimitris-kiriakakis-p_DnAQNczqY-unsplash_wrth7e.jpg"
);

verifica(
  "d) cld(cld(Creta,800),800) uguale a cld(Creta,800)",
  cld(cld(BASE + "w_2400,q_auto,f_auto/v1793177590/dimitris-kiriakakis-p_DnAQNczqY-unsplash_wrth7e.jpg", 800), 800),
  cld(BASE + "w_2400,q_auto,f_auto/v1793177590/dimitris-kiriakakis-p_DnAQNczqY-unsplash_wrth7e.jpg", 800)
);

verifica(
  "d) a_-90 insieme a w_/q_auto/f_auto non cambia",
  cld(BASE + "a_-90,w_1600,q_auto,f_auto/v123/IMG_X", 1200),
  BASE + "a_-90,w_1600,q_auto,f_auto/v123/IMG_X"
);

verifica(
  "e) v123/IMG_X con w=800",
  cld(BASE + "v123/IMG_X", 800),
  BASE + "c_limit,w_800,q_auto,f_auto/v123/IMG_X"
);

verifica(
  "f) indirizzo non Cloudinary resta identico",
  cld("https://example.com/a.jpg", 1200),
  "https://example.com/a.jpg"
);

verifica("g) cldLarghezza(390) con dpr 2", cldLarghezza(390), 800);
verifica("g) cldLarghezza(1300)", cldLarghezza(1300), 2400);
verifica("g) cldLarghezza(1300, 1600)", cldLarghezza(1300, 1600), 1600);

console.log("");
console.log(`Asserzioni a-g: ${ok} superate, ${falliti} fallite.`);

// ---------------------------------------------------------------------------
// Verifica su tutti gli indirizzi Cloudinary distinti nei dati
// ---------------------------------------------------------------------------

const FILE_DATI = ["dati.js", "itinerari.js", "hotel.js", "guida.js", "escape.js", "index.html"];
const insiemeUrl = new Set();
const reUrl = /https:\/\/res\.cloudinary\.com\/[^"'\\]*/g;

FILE_DATI.forEach((f) => {
  const testo = fs.readFileSync(f, "utf8");
  let m;
  while ((m = reUrl.exec(testo))) {
    insiemeUrl.add(m[0]);
  }
});

const listaUrl = [...insiemeUrl].sort();
console.log("");
console.log(`Indirizzi Cloudinary distinti trovati nei dati: ${listaUrl.length}`);

let passano = 0;
const fallimenti = [];

listaUrl.forEach((url) => {
  const risultato = cld(url, 1200);
  const motivi = [];

  const giaOttimizzato = risultato === url;
  const contieneTrasformazione = risultato.includes("c_limit,w_1200,q_auto,f_auto");
  if (!giaOttimizzato && !contieneTrasformazione) {
    motivi.push('non è identico all\'originale e non contiene "c_limit,w_1200,q_auto,f_auto"');
  }

  if (risultato.includes("f_jpg")) {
    motivi.push('contiene ancora "f_jpg"');
  }

  const ultimoOriginale = url.split("/").pop();
  const ultimoRisultato = risultato.split("/").pop();
  if (ultimoRisultato !== ultimoOriginale) {
    motivi.push(`ultimo segmento diverso (originale "${ultimoOriginale}", risultato "${ultimoRisultato}")`);
  }

  const idempotente = cld(risultato, 1200) === risultato;
  if (!idempotente) {
    motivi.push("non idempotente: cld(cld(u,1200),1200) diverso da cld(u,1200)");
  }

  if (motivi.length === 0) {
    passano++;
  } else {
    fallimenti.push({ url, motivi });
  }
});

console.log(`Passano: ${passano} / ${listaUrl.length}`);
if (fallimenti.length) {
  console.log("Fallimenti:");
  fallimenti.forEach((f) => {
    console.log("  " + f.url);
    f.motivi.forEach((m) => console.log("    - " + m));
  });
}

// ---------------------------------------------------------------------------
// Controllo via rete, solo con --rete
// ---------------------------------------------------------------------------

async function controlloRete() {
  if (!RETE) {
    console.log("");
    console.log("Controllo via rete: saltato (lancia con --rete per eseguirlo).");
    return;
  }

  const IDENTIFICATIVI = [
    "IMG_2149_t5w2pl",
    "IMG_7370_c878u6",
    "IMG_2216_l8mzo0",
    "IMG_5236_h4rgus",
    "IMG_0912_upztqn",
    "IMG_0284_xez9zz",
    "IMG_8639_qxpwco",
    "IMG_6904_n0zj2j",
    "IMG_5181_pp5vga",
    "Palace_Hotel_do_Bussaco_tbyuim",
    "4_ywqkpr",
    "f_jpg/Hero.jpg_ffkmdy",
  ];

  const ACCEPT = "image/avif,image/webp,image/*";

  async function scarica(url) {
    const res = await fetch(url, { headers: { Accept: ACCEPT } });
    const buf = await res.arrayBuffer();
    return { status: res.status, contentType: res.headers.get("content-type"), byte: buf.byteLength };
  }

  console.log("");
  console.log("Controllo via rete (12 immagini, pausa 300 ms tra le richieste):");
  console.log("");

  const righe = [];
  for (const id of IDENTIFICATIVI) {
    const url = BASE + id;
    const url1200 = cld(url, 1200);
    const url2400 = cld(url, 2400);

    const originale = await scarica(url);
    await new Promise((r) => setTimeout(r, 300));
    const a1200 = await scarica(url1200);
    await new Promise((r) => setTimeout(r, 300));
    const a2400 = await scarica(url2400);
    await new Promise((r) => setTimeout(r, 300));

    righe.push({ id, originale, a1200, a2400 });
  }

  const intestazione = ["identificativo", "byte originale", "byte @1200", "byte @2400", "stato 1200/2400", "content-type 1200/2400"];
  console.log(intestazione.join(" | "));
  righe.forEach((r) => {
    console.log(
      [
        r.id,
        r.originale.byte,
        r.a1200.byte,
        r.a2400.byte,
        r.a1200.status + "/" + r.a2400.status,
        r.a1200.contentType + " / " + r.a2400.contentType,
      ].join(" | ")
    );
  });
}

await controlloRete();

process.exit(falliti > 0 || fallimenti.length > 0 ? 1 : 0);
