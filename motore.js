/* ===================================================================
   T42 · VIAGGIOPERDUE — MOTORE DEL SITO
   Costruisce le pagine leggendo i contenuti da dati.js.
   Non è necessario modificare questo file per aggiornare i contenuti.
=================================================================== */

/* piccola utilità: mette in sicurezza i testi */
function esc(t) {
  return String(t == null ? "" : t)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* come esc, ma rende "per" in corsivo in "Viaggioperdue" */
function escV(t) {
  return esc(t).replace(/Viaggioperdue/g, 'Viaggio<em>per</em>due');
}

/* numero romano leggero per le categorie in home (I, II, III...) */
function romano(n) {
  return ["I","II","III","IV","V","VI","VII","VIII","IX","X"][n] || (n + 1);
}

/* link mappa universale (Google Maps): funziona su iPhone, Android e PC.
   Usa le coordinate se presenti, altrimenti la query testuale.
   Su iPhone/iPad/Mac apre Apple Mappe; altrove Google Maps. */
function urlMappa(q, lat, lng) {
  const ua = navigator.userAgent || navigator.vendor || "";
  const isApple = /iPhone|iPad|iPod|Macintosh/.test(ua) && !window.MSStream;
  const haCoord = (typeof lat === "number" && typeof lng === "number");

  if (isApple) {
    /* Apple Mappe */
    if (haCoord) return "https://maps.apple.com/?ll=" + lat + "," + lng + "&q=" + encodeURIComponent(q || (lat + "," + lng));
    return "https://maps.apple.com/?q=" + encodeURIComponent(q || "");
  }
  /* Google Maps */
  if (haCoord) return "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q || "");
}

const ORDINE_SIMBOLI_RISTORANTE = ["🌅", "🌳", "♥️"];
const ETICHETTE_SIMBOLO_RISTORANTE = {
  "🌅": "Pied dans l'eau",
  "🌳": "Isolato",
  "♥️": "Charme",
  "🌄": "Splendida vista",
  "🥪": "Sandwich gourmet",
  "⛱️": "Spiaggia",
  "👑": "Stella Michelin"
};
/* scopre nelle note di window.GUIDA quali simboli sono davvero in uso,
   così eventuali nuovi simboli aggiunti ai dati compaiono da soli qui */
function elencoSimboliRistorante() {
  const trovati = new Set();
  (window.GUIDA || []).forEach(function (r) {
    const note = r.note || "";
    (note.match(/\p{Extended_Pictographic}️?/gu) || []).forEach(function (s) { trovati.add(s); });
  });
  const ordinati = ORDINE_SIMBOLI_RISTORANTE.filter(function (s) { return trovati.has(s); });
  Array.from(trovati).sort().forEach(function (s) {
    if (ordinati.indexOf(s) === -1) ordinati.push(s);
  });
  return [{ v: "", t: "Qualsiasi", icona: "✨" }].concat(
    ordinati.map(function (s) { return { v: s, t: ETICHETTE_SIMBOLO_RISTORANTE[s] || s }; })
  );
}

/* ----------- COSTRUZIONE DELLA HOME ----------- */
function costruisciHome() {
  const s = T42.sito;

  /* ---- HERO a tutto schermo ---- */
  const hero = document.getElementById("hero");
  if (hero) {
    const sfondo = (s.hero && s.hero.trim() !== "")
      ? ' style="background-image:url(\'' + esc(s.hero) + '\')"' : '';
    const marchio = (s.logoBianco && s.logoBianco.trim() !== "")
      ? '<img class="hero-logo" src="' + esc(s.logoBianco) + '" alt="' + esc(s.nome) + '">'
      : '<div class="hero-nome">' + esc(s.heroTitolo || s.nome) + '</div>';
    hero.innerHTML =
      '<div class="hero-img"' + sfondo + '></div>' +
      '<div class="hero-velo"></div>' +
      '<div class="hero-dentro">' +
        '<div class="hero-sigla anima d1">Viaggio<em>per</em>due</div>' +
        marchio +
        (s.heroSotto ? '<p class="hero-sotto anima d3">' + esc(s.heroSotto) + '</p>' : '') +
      '</div>' +
      '<a class="hero-scroll" href="#sezioni" aria-label="Scorri"><span>scorri</span><span class="hero-freccia">↓</span></a>';
  }

  /* ---- breve manifesto sotto l'hero ---- */
  const man = document.getElementById("manifesto");
  if (man) {
    man.innerHTML =
      '<p class="payoff anima d1">' + escV(s.payoff) + '</p>' +
      '<p class="intro anima d2">' + escV(s.introduzione).replace(/\n/g, '<br>') + '</p>' +
      '<a class="chisiamo-link anima d3" href="chisiamo.html">Chi siamo →</a>';
  }

  /* ---- sezioni a parola singola (Scopri · Vivi · Assapora) ---- */
  const sez = document.getElementById("sezioni");
  if (sez && Array.isArray(s.sezioni)) {
    sez.innerHTML = s.sezioni.map(function (b, i) {
      const sfondo = (b.immagine && b.immagine.trim() !== "")
        ? ' style="background-image:url(\'' + esc(b.immagine) + '\')"' : '';
      return '<div class="sezione' + (i % 2 ? ' sezione--destra' : '') + '">' +
        '<div class="sezione-foto"' + sfondo + '></div>' +
        '<div class="sezione-testo">' +
          '<div class="sezione-parola">' + esc(b.parola) + '</div>' +
          (b.testo ? '<p>' + escV(b.testo) + '</p>' : '') +
        '</div>' +
      '</div>';
    }).join("");
  }

  /* ---- categorie come grandi tessere fotografiche ---- */
  const grid = document.getElementById("categorie");
  if (grid) {
    grid.innerHTML =
      '<div class="cat-occhiello">Le cinque vie</div>' +
      '<div class="tessere">' +
      T42.categorie.map(function (c, i) {
        const sfondo = (c.tessera && c.tessera.trim() !== "")
          ? ' style="background-image:url(\'' + esc(c.tessera) + '\')"' : '';
        return '<a class="tessera" href="categoria.html?c=' + encodeURIComponent(c.id) + '">' +
          '<div class="tessera-foto"' + sfondo + '></div>' +
          '<div class="tessera-velo"></div>' +
          '<div class="tessera-dentro">' +
            '<span class="tessera-num">' + romano(i) + '</span>' +
            '<span class="tessera-titolo">' + esc(c.titolo) + '</span>' +
            '<span class="tessera-sub">' + esc(c.sottotitolo) + '</span>' +
          '</div>' +
        '</a>';
      }).join("") +
      '</div>';
  }

  /* invito a leggere il racconto */
  const inv = document.getElementById("invito-racconto");
  if (inv && T42.racconto) {
    inv.innerHTML =
      '<a class="racconto-invito anima d2" href="racconto.html">' +
        '<span class="ri-occhiello">' + esc(T42.racconto.occhiello || "Il racconto") + '</span>' +
        '<span class="ri-titolo">' + esc(T42.racconto.titolo) + '</span>' +
        '<span class="ri-azione">Leggi →</span>' +
      '</a>';
  }

  /* invito alla guida ai ristoranti */
  const invG = document.getElementById("invito-guida");
  if (invG) {
    invG.innerHTML =
      '<a class="racconto-invito invito-guida anima d2" href="guida.html">' +
        '<span class="ri-occhiello">La guida</span>' +
        '<span class="ri-titolo">Cerca tra i ristoranti per nome o regione</span>' +
        '<span class="ri-azione">Cerca →</span>' +
      '</a>';
  }

  /* invito alla directory hotel */
  const invH = document.getElementById("invito-hotel");
  if (invH) {
    invH.innerHTML =
      '<a class="racconto-invito invito-guida anima d3" href="hotel.html">' +
        '<span class="ri-occhiello">Gli alberghi</span>' +
        '<span class="ri-titolo">Cerca tra gli alberghi per nome o provincia</span>' +
        '<span class="ri-azione">Cerca →</span>' +
      '</a>';
  }

  const invI = document.getElementById("invito-itinerari");
  if (invI) {
    invI.innerHTML =
      '<a class="racconto-invito invito-guida anima d3" href="itinerari.html">' +
        '<span class="ri-occhiello">Gli itinerari</span>' +
        '<span class="ri-titolo">Percorsi di più giorni, in Italia e non solo</span>' +
        '<span class="ri-azione">Scopri →</span>' +
      '</a>';
  }

  /* invito alla mappa */
  const invM = document.getElementById("invito-mappa");
  if (invM) {
    invM.innerHTML =
      '<a class="racconto-invito invito-mappa anima d3" href="mappa.html">' +
        '<span class="ri-occhiello">La mappa</span>' +
        '<span class="ri-titolo">Tutte le località in un colpo d’occhio</span>' +
        '<span class="ri-azione">Esplora →</span>' +
      '</a>';
  }

  costruisciPie(s);
}

/* ----------- COSTRUZIONE DI UNA PAGINA CATEGORIA ----------- */
function costruisciCategoria() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("c") || "locande";
  const cat = T42.categorie.find(function (c) { return c.id === id; }) || T42.categorie[0];
  const schede = (T42.schede[cat.id] || []);

  document.title = cat.titolo + " · " + T42.sito.nome;

  const intest = document.getElementById("cat-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="index.html">Riprendi il viaggio</a>' +
      '<div class="occhiello anima d1">' + esc(T42.sito.sigla) + ' · Viaggioperdue</div>' +
      '<h1 class="anima d2">' + esc(cat.titolo) + '</h1>' +
      '<p class="anima d3">' + esc(cat.sottotitolo) + '</p>' +
      (cat.intro ? '<p class="cat-intro anima d3">' + escV(cat.intro) + '</p>' : '') +
      (cat.manifesto ? '<a class="cat-manifesto-link anima d3" href="manifesto.html?c=' + encodeURIComponent(cat.id) + '">' + esc(cat.manifesto.titolo) + ' →</a>' : '') +
      (cat.guidaLink ? '<a class="cat-manifesto-link anima d3" href="guida.html">Cerca nella nostra guida ai ristoranti →</a>' : '');
  }

  const elenco = document.getElementById("elenco");
  if (elenco) {
    if (!schede.length) {
      elenco.classList.remove("elenco");
      elenco.innerHTML = '<div class="vuoto">Presto nuovi suggerimenti.</div>';
    } else {
      elenco.innerHTML = schede.map(function (v, i) {
        return scheda(v, i, cat.id);
      }).join("");
    }
  }


  costruisciPie(T42.sito);
}

/* ----------- UNA SINGOLA SCHEDA ----------- */
function etichettaTelefono(catId) {
  /* Ristoranti e Locande si prenotano; Vignaioli, Artigiani e Luoghi si chiamano */
  return (catId === "trattorie" || catId === "locande") ? "Prenota · Chiama" : "Chiama";
}

function scheda(v, i, catId) {
  /* foto */
  let foto;
  if (v.prestoOnline) {
    /* foto generica della categoria per i vignaioli in attesa */
    const cat = T42.categorie.find(function(c) { return c.id === catId; });
    const fotoGenerica = "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_6641_u04w0c";
    if (fotoGenerica) {
      foto = '<div class="scheda-foto"><img src="' + esc(fotoGenerica) +
             '" alt="' + esc(v.titolo) + '" loading="lazy" style="filter:brightness(.7) saturate(.6)"></div>';
    } else {
      foto = '<div class="scheda-foto vuota"></div>';
    }
  } else if (v.immagine && v.immagine.trim() !== "") {
    foto = '<div class="scheda-foto"><img src="' + esc(v.immagine) +
           '" alt="' + esc(v.titolo) + '" loading="lazy"></div>';
  } else {
    foto = '<div class="scheda-foto vuota"></div>';
  }

  /* pulsanti */
  let azioni = "";
  if (v.prestoOnline) {
    azioni = '<div class="azioni"><span class="presto-online">Presto online.</span></div>';
  } else {
    if (v.telefono && v.telefono.trim() !== "") {
      azioni += '<a class="btn btn--pieno" href="tel:' + esc(v.telefono.replace(/\s/g, "")) + '">' + etichettaTelefono(catId) + '</a>';
    }
    if (v.cellulare && v.cellulare.trim() !== "") {
      azioni += '<a class="btn" href="tel:' + esc(v.cellulare.replace(/\s/g, "")) + '">Cellulare</a>';
    }
    if (v.mappa && v.mappa.trim() !== "") {
      azioni += '<a class="btn" href="' + urlMappa(v.mappa, v.lat, v.lng) + '" target="_blank" rel="noopener">Apri la mappa</a>';
    }
    if (v.web && v.web.trim() !== "") {
      azioni += '<a class="btn" href="' + esc(v.web) + '" target="_blank" rel="noopener">Sito web</a>';
    }
    if (v.email && v.email.trim() !== "") {
      azioni += '<a class="btn" href="mailto:' + esc(v.email) + '">Scrivi</a>';
    }
    if (v.storia && v.storia.trim() !== "") {
      azioni += '<a class="btn btn--storia" href="storia.html?s=' + encodeURIComponent(v.storia) + '">Leggi la storia →</a>';
    }
    if (azioni) azioni = '<div class="azioni">' + azioni + '</div>';
  }

  const ritardo = "d" + Math.min(i + 1, 6);

  const testo =
    '<div class="scheda-testo">' +
      (v.luogo ? '<div class="luogo">' + esc(v.luogo) + '</div>' : '') +
      '<h2>' + esc(v.titolo) + '</h2>' +
      (v.prestoOnline
        ? '<p class="presto-online">Presto online.</p>'
        : (v.sommario ? '<p class="sommario">' + esc(v.sommario) + '</p>' : '') +
          (v.testo ? '<p class="corpo">' + escV(v.testo) + '</p>' : '') +
          azioni
      ) +
    '</div>';

  return '<article class="scheda anima ' + ritardo + '">' + foto + testo + '</article>';
}

/* ----------- PIÈ DI PAGINA (comune) ----------- */
function costruisciPie(s) {
  const pie = document.getElementById("pie");
  if (!pie) return;
  let ig = "";
  if (s.instagram && s.instagram.trim() !== "") {
    ig = '<a href="' + esc(s.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram" class="ig-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></a> · ';
  }
  const marchio = (s.logo && s.logo.trim() !== "")
    ? '<img class="logo-pie" src="' + esc(s.logo) + '" alt="' + esc(s.nome) + '">'
    : '<div class="marchio">' + esc(s.nome) + '</div>';
  pie.innerHTML =
    marchio +
    '<div class="righe">' + ig + 'Viaggio<em>per</em>due<br>' +
    'Destinazioni oltre i luoghi comuni.</div>' +
    '<div class="pie-link"><a href="chisiamo.html">Chi siamo</a> <span class="pie-sep">·</span> <a href="mailto:info@viaggioperdue.com">Scrivici</a></div>';
}

/* ----------- COSTRUZIONE DELLA PAGINA RACCONTO ----------- */
function costruisciRacconto() {
  const r = T42.racconto || { titolo: "", paragrafi: [] };
  document.title = (r.titolo || "Racconto") + " · " + T42.sito.nome;

  const intest = document.getElementById("racconto-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="index.html" aria-label="Home">' + '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="vertical-align:middle"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4A6FA5"/></svg>' + '</a>' +
      '<div class="occhiello anima d1">' + esc(r.occhiello || "Il racconto") + '</div>' +
      '<h1 class="anima d2">' + esc(r.titolo) + '</h1>';
  }

  const corpo = document.getElementById("racconto-corpo");
  if (corpo) {
    corpo.innerHTML = (r.paragrafi || []).map(function (p, i) {
      const cls = (i === 0) ? "rp rp-prima" : "rp";
      return '<p class="' + cls + '">' + escV(p) + '</p>';
    }).join("") +
    '<div class="rp-firma">— Viaggioperdue · T42</div>';
  }

  costruisciPie(T42.sito);
}

/* ----------- PAGINA MANIFESTO DI CATEGORIA («Chi sono…») ----------- */
function costruisciManifesto() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("c") || "vignaioli";
  const cat = T42.categorie.find(function (c) { return c.id === id; }) || T42.categorie[0];
  const m = cat.manifesto;
  if (!m) { document.title = cat.titolo + " · " + T42.sito.nome; }

  document.title = (m ? m.titolo : cat.titolo) + " · " + T42.sito.nome;

  const intest = document.getElementById("manifesto-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="categoria.html?c=' + encodeURIComponent(cat.id) + '">Torna a ' + esc(cat.titolo) + '</a>' +
      '<div class="occhiello anima d1">' + esc(T42.sito.sigla) + ' · Viaggioperdue</div>' +
      '<h1 class="anima d2">' + esc(m ? m.titolo : cat.titolo) + '</h1>' +
      (m && m.sottotitolo ? '<p class="racconto-sub anima d3">' + escV(m.sottotitolo) + '</p>' : '');
  }

  const corpo = document.getElementById("manifesto-corpo");
  if (corpo && m) {
    corpo.innerHTML = (m.paragrafi || []).map(function (p, i) {
      const cls = (i === 0) ? "rp rp-prima" : "rp";
      return '<p class="' + cls + '">' + escV(p) + '</p>';
    }).join("") +
    '<div class="rp-firma">— Viaggioperdue · T42</div>';
  }

  costruisciPie(T42.sito);
}

/* ----------- COSTRUZIONE DELLA PAGINA MAPPA ----------- */
function costruisciMappa() {
  document.title = "Mappa · " + T42.sito.nome;

  const intest = document.getElementById("mappa-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="index.html" aria-label="Home">' + '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="vertical-align:middle"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4A6FA5"/></svg>' + '</a>' +
      '<div class="occhiello anima d1">' + esc(T42.sito.sigla) + ' · Viaggioperdue</div>' +
      '<h1 class="anima d2">La mappa</h1>' +
      '<p class="anima d3">I luoghi raccontati da Viaggioperdue, su una sola mappa.</p>';
  }

  /* colore per categoria */
  const colori = {
    locande:   "#1f4e8c",
    trattorie: "#b23a3a",
    luoghi:    "#2e7d6b",
    artigiani: "#9a6a2f",
    vignaioli: "#6a3d7a"
  };

  /* raccogli tutti i punti con coordinate valide */
  const punti = [];
  T42.categorie.forEach(function (c) {
    (T42.schede[c.id] || []).forEach(function (v) {
      if (typeof v.lat === "number" && typeof v.lng === "number") {
        punti.push({ cat: c.id, catTitolo: c.titolo, v: v });
      }
    });
  });

  /* legenda */
  const leg = document.getElementById("mappa-legenda");
  if (leg) {
    leg.innerHTML = T42.categorie.map(function (c) {
      return '<span class="leg-voce"><span class="leg-punto" style="background:' + (colori[c.id] || "#1f4e8c") + '"></span>' + esc(c.titolo) + '</span>';
    }).join("");
  }

  /* inizializza la mappa Leaflet */
  const mappa = L.map("mappa", { scrollWheelZoom: false }).setView([42.5, 12.5], 6);
  window.T42mappa = mappa;
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(mappa);

  const bounds = [];
  punti.forEach(function (p) {
    const col = colori[p.cat] || "#1f4e8c";
    const icona = L.divIcon({
      className: "t42-pin",
      html: '<span style="background:' + col + '"></span>',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    const m = L.marker([p.v.lat, p.v.lng], { icon: icona }).addTo(mappa);
    const dest = urlMappa(p.v.mappa || p.v.titolo, p.v.lat, p.v.lng);
    m.bindPopup(
      '<div class="pop-oc">' + esc(p.catTitolo) + '</div>' +
      '<div class="pop-tit">' + esc(p.v.titolo) + '</div>' +
      (p.v.luogo ? '<div class="pop-luogo">' + esc(p.v.luogo) + '</div>' : '') +
      '<a class="pop-btn" href="' + dest + '" target="_blank" rel="noopener">Apri la mappa</a>'
    );
    bounds.push([p.v.lat, p.v.lng]);
  });

  if (bounds.length > 1) {
    mappa.fitBounds(bounds, { padding: [40, 40] });
  } else if (bounds.length === 1) {
    mappa.setView(bounds[0], 9);
  }

  costruisciPie(T42.sito);
}

/* ----------- COSTRUZIONE DELLA PAGINA STORIA (luogo) ----------- */
function costruisciStoria() {
  const params = new URLSearchParams(window.location.search);
  const chiave = params.get("s") || "";
  const s = (T42.storie && T42.storie[chiave]) ? T42.storie[chiave] : null;

  /* trova la scheda collegata (per galleria e contatti) */
  let scheda = null, catId = null;
  T42.categorie.forEach(function (c) {
    (T42.schede[c.id] || []).forEach(function (v) {
      if (v.storia === chiave) { scheda = v; catId = c.id; }
    });
  });

  if (!s) {
    const corpo = document.getElementById("storia-corpo");
    if (corpo) corpo.innerHTML = '<div class="vuoto">Storia non trovata.</div>';
    costruisciPie(T42.sito);
    return;
  }

  /* se prestoOnline, mostra solo il messaggio */
  if (scheda && scheda.prestoOnline) {
    document.title = scheda.titolo + " · " + T42.sito.nome;
    const corpo = document.getElementById("storia-corpo");
    if (corpo) corpo.innerHTML =
      '<div class="presto-online-pagina">' +
        '<p class="presto-online-nome">' + esc(scheda.titolo) + '</p>' +
        '<p class="presto-online-msg">Presto online.</p>' +
      '</div>';
    costruisciPie(T42.sito);
    return;
  }

  document.title = s.titolo + " · " + T42.sito.nome;

  const intest = document.getElementById("storia-intestazione");
  if (intest) {
    const ritorno = catId
      ? '<a class="ritorno" href="categoria.html?c=' + catId + '">Torna a ' + esc(catId === "trattorie" ? "Ristoranti" : cap(catId)) + '</a>'
      : '<a class="ritorno" href="index.html" aria-label="Home">' + '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="vertical-align:middle"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4A6FA5"/></svg>' + '</a>';
    intest.innerHTML =
      ritorno +
      '<div class="occhiello anima d1">' + esc(s.occhiello || "") + '</div>' +
      '<h1 class="anima d2">' + esc(s.titolo) + '</h1>' +
      (s.sottotitolo ? '<p class="storia-sub anima d3">' + esc(s.sottotitolo) + '</p>' : '');
  }

  /* foto di copertina */
  const cop = document.getElementById("storia-copertina");
  if (cop) {
    if (s.copertina) {
      cop.innerHTML = '<img src="' + esc(s.copertina) + '" alt="' + esc(s.titolo) + '">';
    } else { cop.style.display = "none"; }
  }

  /* video YouTube opzionale dopo la copertina */
  const vid = document.getElementById("storia-video");
  if (vid) {
    if (s.video || s.vimeo) {
      const videoUrl = s.vimeo ? 'https://vimeo.com/' + esc(s.vimeo) : 'https://youtu.be/' + esc(s.video);
      vid.innerHTML = '<div class="storia-video-link">' +
        '<a class="btn btn--storia" href="' + videoUrl + '" target="_blank" rel="noopener">Guarda il video →</a>' +
        '</div>';
    } else { vid.style.display = "none"; }
  }

  /* corpo: i paragrafi che iniziano con § diventano sottotitoli */
  const corpo = document.getElementById("storia-corpo");
  if (corpo) {
    let html = "";
    /* epigrafe opzionale in apertura */
    if (s.epigrafe && s.epigrafe.testo) {
      html += '<blockquote class="epigrafe">' +
        '<p class="epigrafe-testo">' + esc(s.epigrafe.testo) + '</p>' +
        (s.epigrafe.fonte ? '<p class="epigrafe-fonte">' + esc(s.epigrafe.fonte) + '</p>' : '') +
        '</blockquote>';
    }
    let primaFatta = false;
    html += (s.paragrafi || []).map(function (p) {
      if (p.indexOf("§") === 0) {
        return '<h2 class="storia-h2">' + esc(p.replace(/^§\s*/, "")) + '</h2>';
      }
      const primo = !primaFatta;
      primaFatta = true;
      return '<p class="rp' + (primo ? ' rp-prima' : '') + '">' + escV(p) + '</p>';
    }).join("");
    if (s.itinerarioCollegato && T42.itinerari && T42.itinerari[s.itinerarioCollegato]) {
      html += '<p class="itin-rimando"><a href="itinerario.html?i=' + encodeURIComponent(s.itinerarioCollegato) + '">Leggi l\'itinerario completo, giorno per giorno →</a></p>';
    }
    corpo.innerHTML = html;
  }

  /* galleria dalla scheda collegata */
  const gal = document.getElementById("storia-galleria");
  if (gal && scheda && scheda.galleria && scheda.galleria.length) {
    gal.innerHTML =
      '<h2 class="storia-h2">Le immagini</h2><div class="storia-griglia">' +
      scheda.galleria.map(function (src) {
        return '<figure><img src="' + esc(src) + '" loading="lazy"></figure>';
      }).join("") + '</div>';
  }

  /* contatti in chiusura */
  const cont = document.getElementById("storia-contatti");
  if (cont && scheda) {
    let righe = [];
    if (scheda.luogo) righe.push(esc(scheda.luogo));
    let btn = [];
    if (scheda.telefono) btn.push('<a class="btn btn--pieno" href="tel:' + esc(scheda.telefono.replace(/\s/g,"")) + '">' + etichettaTelefono(catId) + '</a>');
    if (scheda.cellulare) btn.push('<a class="btn" href="tel:' + esc(scheda.cellulare.replace(/\s/g,"")) + '">Cellulare</a>');
    if (scheda.mappa) {
      btn.push('<a class="btn" href="' + urlMappa(scheda.mappa, scheda.lat, scheda.lng) + '" target="_blank" rel="noopener">Apri la mappa</a>');
    }
    if (scheda.web) btn.push('<a class="btn" href="' + esc(scheda.web) + '" target="_blank" rel="noopener">Sito web</a>');
    if (scheda.email) btn.push('<a class="btn" href="mailto:' + esc(scheda.email) + '">Scrivi</a>');
    cont.innerHTML =
      '<div class="storia-contatti-box">' +
        '<div class="scc-nome">' + esc(scheda.titolo) + '</div>' +
        (righe.length ? '<div class="scc-luogo">' + righe.join(" · ") + '</div>' : '') +
        '<div class="azioni" style="justify-content:center;">' + btn.join("") + '</div>' +
      '</div>';
  }  costruisciPie(T42.sito);
}

/* ----------- COSTRUZIONE DELLA PAGINA INDICE ITINERARI ----------- */
function costruisciItinerari() {
  document.title = "Gli itinerari · " + T42.sito.nome;

  const intest = document.getElementById("cat-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="index.html">Riprendi il viaggio</a>' +
      '<div class="occhiello anima d1">' + esc(T42.sito.sigla) + ' · Viaggioperdue</div>' +
      '<h1 class="anima d2">Gli itinerari</h1>' +
      '<p class="anima d3">Percorsi di più giorni, appunti di viaggio da seguire passo dopo passo.</p>';
  }

  const elenco = document.getElementById("elenco");
  if (elenco) {
    const chiavi = Object.keys(T42.itinerari || {});
    if (!chiavi.length) {
      elenco.classList.remove("elenco");
      elenco.innerHTML = '<div class="vuoto">Presto nuovi itinerari.</div>';
    } else {
      elenco.innerHTML = chiavi.map(function (k, i) {
        return schedaItinerario(T42.itinerari[k], k, i);
      }).join("");
    }
  }

  costruisciPie(T42.sito);
}

function schedaItinerario(it, chiave, i) {
  const foto = (it.copertina && it.copertina.trim() !== "")
    ? '<div class="scheda-foto"><img src="' + esc(it.copertina) + '" alt="' + esc(it.titolo) + '" loading="lazy"></div>'
    : '<div class="scheda-foto vuota"></div>';

  const ritardo = "d" + Math.min(i + 1, 6);

  const numGiorni = (it.percorso && it.percorso.giorni) ? it.percorso.giorni.length : (it.giorni ? it.giorni.length : null);
  const etichettaGiorni = numGiorni ? numGiorni + (numGiorni === 1 ? " giorno" : " giorni") : "";

  const testo =
    '<div class="scheda-testo">' +
      (it.regione ? '<div class="luogo">' + esc(it.regione) + (etichettaGiorni ? " · " + esc(etichettaGiorni) : "") + '</div>' : '') +
      '<h2>' + esc(it.titolo) + '</h2>' +
      (it.sottotitolo ? '<p class="sommario">' + esc(it.sottotitolo) + '</p>' : '') +
      '<div class="azioni"><a class="btn btn--pieno" href="itinerario.html?i=' + encodeURIComponent(chiave) + '">Parti →</a></div>' +
    '</div>';

  return '<article class="scheda anima ' + ritardo + '">' + foto + testo + '</article>';
}

/* ----------- COSTRUZIONE DELLA PAGINA ITINERARIO ----------- */
function costruisciItinerario() {
  const params = new URLSearchParams(window.location.search);
  const chiave = params.get("i") || "";
  const it = (T42.itinerari && T42.itinerari[chiave]) ? T42.itinerari[chiave] : null;

  if (!it) {
    const corpo = document.getElementById("itinerario-corpo");
    if (corpo) corpo.innerHTML = '<div class="vuoto">Itinerario non trovato.</div>';
    costruisciPie(T42.sito);
    return;
  }

  document.title = it.titolo + " · " + T42.sito.nome;

  /* ---- intestazione ---- */
  const intest = document.getElementById("itinerario-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="index.html" aria-label="Home">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="vertical-align:middle"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4A6FA5"/></svg>' +
      '</a>' +
      '<div class="occhiello anima d1">' + esc(it.occhiello || "Un itinerario per due") + '</div>' +
      '<h1 class="anima d2">' + esc(it.titolo) + '</h1>' +
      (it.sottotitolo ? '<p class="storia-sub anima d3">' + escV(it.sottotitolo) + '</p>' : '') +
      (it.tappe && it.tappe.length ? '<p class="itin-tappe anima d3">' + it.tappe.map(esc).join(' <span class="pie-sep">·</span> ') + '</p>' : '');
  }

  /* ---- copertina e video (stesso schema di storia) ---- */
  const cop = document.getElementById("itinerario-copertina");
  if (cop) {
    if (it.copertina) { cop.className = "storia-copertina"; cop.innerHTML = '<img src="' + esc(it.copertina) + '" alt="' + esc(it.titolo) + '">'; }
    else cop.style.display = "none";
  }
  const vid = document.getElementById("itinerario-video");
  if (vid) {
    if (it.video || it.vimeo) {
      const videoUrl = it.vimeo ? 'https://vimeo.com/' + esc(it.vimeo) : 'https://youtu.be/' + esc(it.video);
      vid.innerHTML = '<div class="storia-video-link"><a class="btn btn--storia" href="' + videoUrl + '" target="_blank" rel="noopener">Guarda il video →</a></div>';
    } else { vid.style.display = "none"; }
  }

  /* ---- apertura: epigrafe opzionale + paragrafi introduttivi ---- */
  const corpo = document.getElementById("itinerario-corpo");
  if (corpo) {
    let html = "";
    if (it.epigrafe && it.epigrafe.testo) {
      html += '<blockquote class="epigrafe">' +
        '<p class="epigrafe-testo">' + esc(it.epigrafe.testo) + '</p>' +
        (it.epigrafe.fonte ? '<p class="epigrafe-fonte">' + esc(it.epigrafe.fonte) + '</p>' : '') +
        '</blockquote>';
    }
    html += (it.apertura || []).map(function (p, i) {
      return '<p class="rp' + (i === 0 ? ' rp-prima' : '') + '">' + escV(p) + '</p>';
    }).join("");
    if (it.raccontoCollegato && T42.storie && T42.storie[it.raccontoCollegato]) {
      html += '<p class="itin-rimando"><a href="storia.html?s=' + encodeURIComponent(it.raccontoCollegato) + '">Leggi anche il racconto di viaggio →</a></p>';
    }
    corpo.innerHTML = html;
  }

  /* ---- il percorso: righe sintetiche, una per giorno ---- */
  const perc = document.getElementById("itinerario-percorso");
  if (perc && it.percorso) {
    perc.innerHTML =
      '<h2 class="storia-h2">Il percorso</h2>' +
      (it.percorso.intro ? '<p class="rp">' + escV(it.percorso.intro) + '</p>' : '') +
      '<div class="itin-percorso-lista">' +
      (it.percorso.giorni || []).map(function (g) {
        return '<div class="itin-percorso-riga">' +
          '<div class="itin-percorso-tappa">' +
            '<span class="itin-percorso-giorno">' + esc(g.giorno) + '</span>' +
            '<span class="itin-percorso-titolo">' + esc(g.titolo) + (g.km ? ", " + esc(g.km) : "") + '</span>' +
          '</div>' +
          '<div class="itin-percorso-testo">' + esc(g.testo) + '</div>' +
        '</div>';
      }).join("") +
      '</div>';
  }

  /* ---- i giorni, in sequenza ---- */
  const giorniEl = document.getElementById("itinerario-giorni");
  if (giorniEl) {
    giorniEl.innerHTML = '<h2 class="storia-h2">I giorni</h2>' + (it.giorni || []).map(function (g) {
      let html = '<div class="itin-giorno">';
      html += '<div class="itin-giorno-label">' + esc(g.label) + '</div>';
      html += '<h3 class="itin-giorno-titolo">' + esc(g.titolo) + '</h3>';
      html += (g.paragrafi || []).map(function (p) { return '<p class="rp">' + escV(p) + '</p>'; }).join("");
      if (g.note && g.note.length) {
        html += g.note.map(function (n) { return '<p class="itin-nota">' + escV(n) + '</p>'; }).join("");
      }
      /* collega i ristoranti citati, cercandoli per nome in GUIDA */
      if (g.ristoranti && g.ristoranti.length && window.GUIDA) {
        const trovati = g.ristoranti.map(function (nomeCerca) {
          return window.GUIDA.find(function (r) { return r.nome === nomeCerca; });
        }).filter(Boolean);
        if (trovati.length) {
          html += '<div class="itin-chip-riga">' + trovati.map(function (r) {
            return '<a class="chip-ristorante" href="' + urlMappa(r.mappa, r.lat, r.lng) + '" target="_blank" rel="noopener">📍 ' + esc(r.nome) + ' · ' + esc(r.luogo) + '</a>';
          }).join("") + '</div>';
        }
      }
      if (g.produttori && g.produttori.length) {
        html += '<div class="itin-chip-riga">' + g.produttori.map(function (p) {
          return '<a class="chip-ristorante" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.nome) + '</a>';
        }).join("") + '</div>';
      }
      if (g.tragitti && g.tragitti.length) {
        const qual = encodeURIComponent(", " + (it.areaGeografica || ""));
        html += '<div class="itin-tragitti">' + g.tragitti.map(function (t) {
          const da = encodeURIComponent(t.da), a = encodeURIComponent(t.a);
          const apple = "https://maps.apple.com/?saddr=" + da + qual + "&daddr=" + a + qual;
          const google = "https://www.google.com/maps/dir/" + da + qual + "/" + a + qual;
          return '<div class="itin-tragitto">' +
            '<span class="itin-tragitto-tratta">' + esc(t.da) + ' → ' + esc(t.a) + '</span>' +
            '<a class="itin-link-storia" href="' + apple + '" target="_blank" rel="noopener">📍 Apple Maps</a> ' +
            '<a class="itin-link-storia" href="' + google + '" target="_blank" rel="noopener">📍 Google Maps</a>' +
          '</div>';
        }).join("") + '</div>';
      }
      html += '</div>';
      return html;
    }).join("");
  }

  /* ---- taccuino: dove dormire ---- */
  const dormire = document.getElementById("itinerario-dormire");
  if (dormire && it.taccuino && it.taccuino.dormire) {
    dormire.innerHTML = '<h2 class="storia-h2">Il taccuino · dove dormire</h2>' +
      it.taccuino.dormire.map(function (zona) {
        return '<div class="itin-zona-titolo">' + esc(zona.zona) + ' — ' + esc(zona.notti) + '</div>' +
          (zona.strutture || []).map(function (s) {
            const hotelDati = window.HOTEL ? window.HOTEL.find(function (h) { return h.nome === s.nome; }) : null;
            const linkWeb = (hotelDati && hotelDati.web) ? '<div class="itin-tac-link"><a class="itin-link-storia" href="' + esc(hotelDati.web) + '" target="_blank" rel="noopener">Sito web →</a></div>' : '';
            return '<div class="itin-tac-voce">' +
              '<div class="itin-tac-nome">' + esc(s.nome) + '</div>' +
              (s.contatto ? '<div class="itin-tac-contatto">' + esc(s.contatto) + '</div>' : '') +
              '<div class="itin-tac-testo">' + esc(s.testo) + '</div>' +
              linkWeb +
            '</div>';
          }).join("");
      }).join("");
  }

  /* ---- taccuino: dove sedersi a tavola (per nome, da GUIDA) ---- */
  const tavola = document.getElementById("itinerario-tavola");
  if (tavola && it.taccuino && it.taccuino.tavola) {
    const voci = (it.taccuino.tavola.voci || []).map(function (v) {
      const r = window.GUIDA ? window.GUIDA.find(function (x) { return x.nome === v.nome; }) : null;
      return { nome: v.nome, storia: v.storia || null, dati: r };
    });
    tavola.innerHTML = '<h2 class="storia-h2">Dove sedersi a tavola</h2>' +
      (it.taccuino.tavola.intro ? '<p class="rp">' + escV(it.taccuino.tavola.intro) + '</p>' : '') +
      voci.map(function (v) {
        const contatto = v.dati ? (v.dati.luogo + (v.dati.telefono ? ' · tel. ' + v.dati.telefono : '')) : '';
        const linkStoria = v.storia ? '<a class="itin-link-storia" href="storia.html?s=' + encodeURIComponent(v.storia) + '">La storia completa →</a>' : '';
        const linkWeb = (v.dati && v.dati.web) ? '<a class="itin-link-storia" href="' + esc(v.dati.web) + '" target="_blank" rel="noopener">Sito web →</a>' : '';
        return '<div class="itin-tac-voce">' +
          '<div class="itin-tac-nome">' + esc(v.nome) + '</div>' +
          (contatto ? '<div class="itin-tac-contatto">' + esc(contatto) + '</div>' : '') +
          (v.dati && v.dati.note ? '<div class="itin-tac-testo">' + esc(v.dati.note) + '</div>' : '') +
          ((linkStoria || linkWeb) ? '<div class="itin-tac-link">' + linkStoria + ' ' + linkWeb + '</div>' : '') +
        '</div>';
      }).join("");
  }

  /* ---- approfondimenti tematici ---- */
  const approf = document.getElementById("itinerario-approfondimenti");
  if (approf && it.taccuino && it.taccuino.approfondimenti) {
    approf.innerHTML = it.taccuino.approfondimenti.map(function (a) {
      return '<h3 class="itin-giorno-titolo">' + esc(a.titolo) + '</h3><p class="rp">' + escV(a.testo) + '</p>';
    }).join("");
  }

  /* ---- a tavola: cosa cambia ---- */
  const aTavola = document.getElementById("itinerario-a-tavola");
  if (aTavola && it.taccuino && it.taccuino.aTavola) {
    aTavola.innerHTML = '<h2 class="storia-h2">A tavola</h2>' +
      '<h3 class="itin-giorno-titolo">' + esc(it.taccuino.aTavola.titolo) + '</h3>' +
      '<p class="rp">' + escV(it.taccuino.aTavola.testo) + '</p>';
  }

  /* ---- prima di chiudere: cose da sapere ---- */
  const chiudere = document.getElementById("itinerario-prima-di-chiudere");
  if (chiudere && it.primaDiChiudere) {
    chiudere.innerHTML = '<h2 class="storia-h2">Prima di chiudere</h2>' +
      '<div class="itin-percorso-lista">' +
      it.primaDiChiudere.map(function (r) {
        return '<div class="itin-percorso-riga">' +
          '<div class="itin-percorso-tappa">' +
            '<span class="itin-percorso-giorno">' + esc(r.titolo) + '</span>' +
            '<span class="itin-percorso-titolo">' + esc(r.sotto) + '</span>' +
          '</div>' +
          '<div class="itin-percorso-testo">' + esc(r.testo) + '</div>' +
        '</div>';
      }).join("") +
      '</div>' +
      (it.numeriUtili && it.numeriUtili.length
        ? '<div class="itin-zona-titolo">Numeri utili, in un colpo solo</div>' + it.numeriUtili.map(function (n) { return '<p class="rp">' + escV(n) + '</p>'; }).join("")
        : "");
  }

  costruisciPie(T42.sito);
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ----------- COSTRUZIONE DELLA PAGINA GUIDA (archivio ricercabile) ----------- */
function costruisciGuida() {
  document.title = "Guida ai ristoranti · " + T42.sito.nome;
  const dati = (window.GUIDA || []).slice();
  const regprov = window.GUIDA_REGPROV || {};

  const intest = document.getElementById("guida-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="index.html" aria-label="Home">' + '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="vertical-align:middle"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4A6FA5"/></svg>' + '</a>' +
      '<div class="occhiello anima d1">' + esc(T42.sito.sigla) + ' · Viaggioperdue</div>' +
      '<h1 class="anima d2">Guida ai ristoranti</h1>' +
      '<p class="guida-sub anima d3">' + dati.length + ' indirizzi, ricercabili per nome, regione o provincia.</p>';
  }

  const regioni = Object.keys(regprov).sort(function (a, b) { return a.localeCompare(b, "it"); });

  const barra = document.getElementById("guida-ricerca");
  if (barra) {
    barra.innerHTML =
      '<div class="cerca-campo cerca-campo--largo">' +
        '<input type="search" id="cerca-nome" placeholder="Cerca un ristorante per nome…" autocomplete="off">' +
      '</div>' +
      '<div class="cerca-campo">' +
        '<select id="cerca-regione">' +
          '<option value="">Tutte le regioni</option>' +
          regioni.map(function (r) { return '<option value="' + esc(r) + '">' + esc(r) + '</option>'; }).join("") +
        '</select>' +
      '</div>' +
      '<div class="cerca-campo">' +
        '<select id="cerca-provincia" disabled>' +
          '<option value="">Tutte le province</option>' +
        '</select>' +
      '</div>' +
      '<div class="cerca-campo">' +
        '<select id="cerca-simbolo-g">' +
          '<option value="">Tutti i simboli</option>' +
          '<option value="🌅">🌅 Pied dans l\'eau</option>' +
        '</select>' +
      '</div>';
  }

  const conteggio = document.getElementById("guida-conteggio");
  const lista = document.getElementById("guida-lista");

  /* legenda simboli */
  const legenda = document.getElementById("guida-legenda");
  if (legenda) {
    legenda.innerHTML = elencoSimboliRistorante()
      .filter(function (s) { return s.v !== ""; })
      .map(function (s) { return '<span class="lg-voce">' + s.v + ' ' + s.t + '</span>'; })
      .join("");
  }

  function disegna(items) {
    if (conteggio) {
      conteggio.textContent = items.length === dati.length
        ? (dati.length + " ristoranti")
        : (items.length + (items.length === 1 ? " ristorante" : " ristoranti") + " trovati");
    }
    if (!lista) return;
    if (!items.length) {
      lista.innerHTML = '<div class="guida-vuoto">Nessun ristorante corrisponde alla ricerca.</div>';
      return;
    }
    lista.innerHTML = items.map(function (r) {
      let btn = "";
      if (r.tel) btn += '<a class="btn btn--pieno" href="tel:' + esc(r.tel.replace(/\s/g, "")) + '">Chiama</a>';
      if (r.mappa) btn += '<a class="btn" href="' + urlMappa(r.mappa) + '" target="_blank" rel="noopener">Apri la mappa</a>';
      if (r.web) btn += '<a class="btn" href="' + esc(r.web) + '" target="_blank" rel="noopener">Sito</a>';
      const simboli = r.simboli ? '<span class="rist-simboli">' + r.simboli + '</span>' : "";
      return '<article class="rist">' +
        '<div class="rist-nome">' + esc(r.nome) + simboli + '</div>' +
        (r.luogo ? '<div class="rist-luogo">' + esc(r.luogo) + '</div>' : '<div class="rist-luogo rist-luogo--vuoto">zona non indicata</div>') +
        '<div class="azioni rist-azioni">' + btn + '</div>' +
      '</article>';
    }).join("");
  }

  function disegnaAlberghiZona(prov) {
    const box = document.getElementById("guida-alberghi-zona");
    if (!box) return;
    if (!prov) {
      box.innerHTML = "";
      return;
    }
    const hotel = (window.HOTEL || []).filter(function (h) { return h.prov === prov; }).slice(0, 3);
    if (!hotel.length) {
      box.innerHTML = "";
      return;
    }
    box.innerHTML =
      '<h2 class="guida-alberghi-titolo">Alberghi nella stessa zona</h2>' +
      '<div class="guida-lista">' +
      hotel.map(function (h) {
        let btn = "";
        if (h.tel) btn += '<a class="btn btn--pieno" href="tel:' + esc(h.tel.replace(/\s/g, "")) + '">Chiama</a>';
        if (h.mappa) btn += '<a class="btn" href="' + urlMappa(h.mappa) + '" target="_blank" rel="noopener">Mappa</a>';
        if (h.web) btn += '<a class="btn" href="' + esc(h.web) + '" target="_blank" rel="noopener">Sito</a>';
        return '<article class="rist">' +
          '<div class="rist-nome">' + esc(h.nome) + '</div>' +
          (h.citta ? '<div class="rist-luogo">' + esc(h.citta) + '</div>' : '') +
          (btn ? '<div class="azioni rist-azioni">' + btn + '</div>' : '') +
        '</article>';
      }).join("") +
      '</div>';
  }

  function normalizza(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function aggiornaProvince() {
    const selReg = document.getElementById("cerca-regione");
    const selProv = document.getElementById("cerca-provincia");
    if (!selReg || !selProv) return;
    const reg = selReg.value;
    const provs = reg && regprov[reg] ? regprov[reg] : [];
    if (provs.length) {
      selProv.innerHTML = '<option value="">Tutte le province</option>' +
        provs.map(function (p) { return '<option value="' + escV(p) + '">' + escV(p) + '</option>'; }).join("");
      selProv.disabled = false;
    } else {
      selProv.innerHTML = '<option value="">Tutte le province</option>';
      selProv.disabled = true;
    }
  }

  function filtra() {
    const q = normalizza((document.getElementById("cerca-nome") || {}).value ? document.getElementById("cerca-nome").value.trim() : "");
    const reg = (document.getElementById("cerca-regione") || {}).value || "";
    const prov = (document.getElementById("cerca-provincia") || {}).value || "";
    const simbolo = (document.getElementById("cerca-simbolo-g") || {}).value || "";
    let items = dati;
    if (reg) items = items.filter(function (r) { return r.regione === reg; });
    if (prov) items = items.filter(function (r) { return r.prov === prov; });
    if (simbolo) items = items.filter(function (r) { return (r.note || "").indexOf(simbolo) !== -1; });
    if (q) items = items.filter(function (r) {
      return normalizza(r.nome).indexOf(q) !== -1 || normalizza(r.luogo).indexOf(q) !== -1;
    });
    disegna(items);
    disegnaAlberghiZona(prov);
  }

  const inputNome = document.getElementById("cerca-nome");
  const selReg = document.getElementById("cerca-regione");
  const selProv = document.getElementById("cerca-provincia");
  const selSimbolo = document.getElementById("cerca-simbolo-g");
  if (inputNome) inputNome.addEventListener("input", filtra);
  if (inputNome) inputNome.addEventListener("keyup", filtra);
  if (selReg) { selReg.addEventListener("change", function () { aggiornaProvince(); filtra(); }); selReg.addEventListener("click", function () { aggiornaProvince(); filtra(); }); }
  if (selProv) selProv.addEventListener("change", filtra);
  if (selSimbolo) selSimbolo.addEventListener("change", filtra);

  /* regione preselezionata da URL, es. guida.html?regione=Liguria */
  const regioneUrl = new URLSearchParams(window.location.search).get("regione");
  if (regioneUrl && selReg && regioni.indexOf(regioneUrl) !== -1) {
    selReg.value = regioneUrl;
    aggiornaProvince();
    filtra();
  } else {
    disegna(dati);
  }
  costruisciPie(T42.sito);
}

/* ----------- AVVIO ----------- */
document.addEventListener("DOMContentLoaded", function () {
  if (document.body.dataset.pagina === "home") costruisciHome();
  if (document.body.dataset.pagina === "categoria") costruisciCategoria();
  if (document.body.dataset.pagina === "racconto") costruisciRacconto();
  if (document.body.dataset.pagina === "manifesto") costruisciManifesto();
  if (document.body.dataset.pagina === "mappa") costruisciMappa();
  if (document.body.dataset.pagina === "storia") costruisciStoria();
  if (document.body.dataset.pagina === "itinerario") costruisciItinerario();
  if (document.body.dataset.pagina === "itinerari") costruisciItinerari();
  if (document.body.dataset.pagina === "guida") costruisciGuida();
   if (document.body.dataset.pagina === "hotel") costruisciHotel();
  costruisciConcierge();
});
function costruisciHotel() {
  document.title = "Guida agli alberghi · " + T42.sito.nome;
  const dati = (window.HOTEL || []).slice();
  const regprov = window.HOTEL_PROVCITTA || {};
  const intest = document.getElementById("guida-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="index.html" aria-label="Home"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="vertical-align:middle"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4A6FA5"/></svg></a>' +
      '<div class="occhiello anima d1">' + esc(T42.sito.sigla) + ' · Viaggioperdue</div>' +
      '<h1 class="anima d2">Guida agli alberghi</h1>' +
      '<p class="guida-sub anima d3">' + dati.length + ' alberghi, ricercabili per nome, regione o provincia.</p>';
  }
  const regioni = Object.keys(regprov).sort(function (a, b) { return a.localeCompare(b, "it"); });
  const barra = document.getElementById("guida-ricerca");
  if (barra) {
    barra.innerHTML =
      '<div class="cerca-campo cerca-campo--largo"><input type="search" id="cerca-nome-h" placeholder="Cerca un albergo per nome…" autocomplete="off"></div>' +
      '<div class="cerca-campo"><select id="cerca-regione-h"><option value="">Tutte le regioni</option>' +
      regioni.map(function (r) { return '<option value="' + esc(r) + '">' + esc(r) + '</option>'; }).join("") +
      '</select></div>' +
      '<div class="cerca-campo"><select id="cerca-provincia-h" disabled><option value="">Tutte le province</option></select></div>' +
      '<div class="cerca-campo"><select id="cerca-simbolo-h"><option value="">Tutti i simboli</option>' +
      '<option value="🌅">🌅 Pied dans l\'eau</option>' +
      '<option value="🌄">🌄 Splendida vista</option>' +
      '<option value="🌳">🌳 Isolato</option>' +
      '<option value="♥️">♥️ Charme</option>' +
      '<option value="🏖️">🏖️ Spiaggia</option>' +
      '<option value="🏞️">🏞️ Montagna</option>' +
      '<option value="👑">👑 Tradizione</option>' +
      '<option value="⛰️">⛰️ Montagna/Alta quota</option>' +
      '</select></div>';
  }
  const conteggio = document.getElementById("guida-conteggio");
  const lista = document.getElementById("guida-lista");
  function disegna(items) {
    if (conteggio) {
      conteggio.textContent = items.length === dati.length
        ? (dati.length + " alberghi")
        : (items.length + " alberghi trovati");
    }
    if (!lista) return;
    lista.innerHTML = items.map(function (r) {
      let btn = "";
      if (r.tel) btn += '<a class="btn btn--pieno" href="tel:' + esc(r.tel.replace(/\s/g, "")) + '">Chiama</a>';
      else if (r.cellulare) btn += '<a class="btn btn--pieno" href="tel:' + esc(r.cellulare.replace(/\s/g, "")) + '">Chiama</a>';
      if (r.mappa) btn += '<a class="btn" href="' + urlMappa(r.mappa) + '" target="_blank" rel="noopener">Mappa</a>';
      if (r.web) btn += '<a class="btn" href="' + esc(r.web) + '" target="_blank" rel="noopener">Sito</a>';
      return '<article class="rist">' +
        '<div class="rist-nome">' + esc(r.nome) + '</div>' +
        (r.luogo ? '<div class="rist-luogo">' + esc(r.luogo) + '</div>' : '<div class="rist-luogo rist-luogo--vuoto">zona non indicata</div>') +
        '<div class="azioni rist-azioni">' + btn + '</div>' +
      '</article>';
    }).join("");
  }
  function disegnaRistorantiZona(prov, citta, simbolo) {
    const box = document.getElementById("guida-ristoranti-zona");
    if (!box) return;
    if (!prov && !citta) {
      box.innerHTML = "";
      return;
    }
    let ristoranti = citta ? (window.GUIDA || []).filter(function (r) { return r.citta === citta; }) : [];
    if (!ristoranti.length) {
      ristoranti = (window.GUIDA || []).filter(function (r) { return r.prov === prov; });
    }
    if (simbolo === "🌅") {
      ristoranti = ristoranti.filter(function (r) { return (r.note || "").indexOf("🌅") !== -1; });
    }
    ristoranti = ristoranti.slice(0, 3);
    if (!ristoranti.length) {
      box.innerHTML = "";
      return;
    }
    box.innerHTML =
      '<h2 class="guida-alberghi-titolo">Ristoranti nella stessa zona</h2>' +
      '<div class="guida-lista">' +
      ristoranti.map(function (r) {
        let btn = "";
        if (r.tel) btn += '<a class="btn btn--pieno" href="tel:' + esc(r.tel.replace(/\s/g, "")) + '">Chiama</a>';
        if (r.mappa) btn += '<a class="btn" href="' + urlMappa(r.mappa) + '" target="_blank" rel="noopener">Mappa</a>';
        if (r.web) btn += '<a class="btn" href="' + esc(r.web) + '" target="_blank" rel="noopener">Sito</a>';
        return '<article class="rist">' +
          '<div class="rist-nome">' + esc(r.nome) + '</div>' +
          (r.citta ? '<div class="rist-luogo">' + esc(r.citta) + '</div>' : '') +
          (btn ? '<div class="azioni rist-azioni">' + btn + '</div>' : '') +
        '</article>';
      }).join("") +
      '</div>';
  }

  function aggiornaProvince() {
    const selReg = document.getElementById("cerca-regione-h");
    const selProv = document.getElementById("cerca-provincia-h");
    if (!selReg || !selProv) return;
    const reg = selReg.value;
    const provs = reg && regprov[reg] ? regprov[reg] : [];
    if (provs.length) {
      selProv.innerHTML = '<option value="">Tutte le province</option>' +
        provs.map(function (p) { return '<option value="' + esc(p) + '">' + esc(p) + '</option>'; }).join("");
      selProv.disabled = false;
    } else {
      selProv.innerHTML = '<option value="">Tutte le province</option>';
      selProv.disabled = true;
    }
    filtra();
  }
  function filtra() {
    const q = ((document.getElementById("cerca-nome-h") || {}).value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const reg = (document.getElementById("cerca-regione-h") || {}).value || "";
    const prov = (document.getElementById("cerca-provincia-h") || {}).value || "";
    const simbolo = (document.getElementById("cerca-simbolo-h") || {}).value || "";
    let items = dati;
    if (reg) items = items.filter(function (r) { return r.regione === reg; });
    if (prov) items = items.filter(function (r) { return r.prov === prov; });
    if (simbolo) items = items.filter(function (r) {
      const note = r.note || "";
      if (simbolo === "⛰️") return note.indexOf("⛰️") !== -1 || note.indexOf("⛰") !== -1;
      return note.indexOf(simbolo) !== -1;
    });
    if (q) items = items.filter(function (r) {
      const nome = (r.nome || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const luogo = (r.luogo || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nome.indexOf(q) !== -1 || luogo.indexOf(q) !== -1;
    });
    disegna(items);
    disegnaRistorantiZona(items[0] ? items[0].prov : prov, items[0] ? items[0].citta : "", simbolo);
  }
  const inputNome = document.getElementById("cerca-nome-h");
  const selReg = document.getElementById("cerca-regione-h");
  const selProv = document.getElementById("cerca-provincia-h");
  const selSimbolo = document.getElementById("cerca-simbolo-h");
  if (inputNome) inputNome.addEventListener("input", filtra);
  if (inputNome) inputNome.addEventListener("keyup", filtra);
  if (selReg) selReg.addEventListener("change", function () { aggiornaProvince(); filtra(); });
  if (selProv) selProv.addEventListener("change", filtra);
  if (selSimbolo) selSimbolo.addEventListener("change", filtra);
  const legendaH = document.getElementById("guida-legenda");
  if (legendaH) { legendaH.innerHTML = "<span class=lg-voce>🌅 Pied dans l’eau</span>" + "<span class=lg-voce>🌄 Splendida vista</span>" + "<span class=lg-voce>🌳 Albergo isolato</span>" + "<span class=lg-voce>♥️ Albergo di charme</span>" + "<span class=lg-voce>🏖️ Spiaggia privata</span>" + "<span class=lg-voce>⛰️ Albergo di montagna</span>" + "<span class=lg-voce>👑 Grande tradizione</span>"; }
  disegna(dati);
  costruisciPie(T42.sito);
}

/* ----------- CONCIERGE (assistente flottante, presente su tutte le pagine) ----------- */
function costruisciConcierge() {
  function elencoSimboliAlbergo() {
    const trovati = new Set();
    (window.HOTEL || []).forEach(function (h) {
      const note = h.note || "";
      (note.match(/\p{Extended_Pictographic}️?/gu) || []).forEach(function (s) { trovati.add(s); });
    });
    const etichette = {};
    SIMBOLI_ALBERGO.forEach(function (s) { etichette[s.v] = s.t; });
    const ordinati = SIMBOLI_ALBERGO.map(function (s) { return s.v; }).filter(function (s) { return trovati.has(s); });
    Array.from(trovati).sort().forEach(function (s) {
      if (ordinati.indexOf(s) === -1) ordinati.push(s);
    });
    return [{ v: "", t: "Qualsiasi", icona: "✨" }].concat(
      ordinati.map(function (s) { return { v: s, t: etichette[s] || s }; })
    );
  }
  const SIMBOLI_ALBERGO = [
    { v: "🌅", t: "Pied dans l'eau" },
    { v: "🌳", t: "Isolato" },
    { v: "♥️", t: "Charme" },
    { v: "🏖️", t: "Spiaggia" },
    { v: "⛰️", t: "Montagna" },
    { v: "👑", t: "Tradizione" },
    { v: "🌄", t: "Splendida vista" }
  ];

  const host = document.createElement("div");
  host.innerHTML =
    '<button id="conc-bottone" class="conc-bottone" type="button" aria-haspopup="dialog" aria-label="Apri l\'assistente di viaggio">🛎️</button>' +
    '<div id="conc-overlay" class="conc-overlay" hidden>' +
      '<div class="conc-modale" role="dialog" aria-modal="true" aria-label="Assistente di viaggio">' +
        '<button id="conc-chiudi" class="conc-chiudi" type="button" aria-label="Chiudi">×</button>' +
        '<div id="conc-passi" class="conc-passi">' +
          '<span class="conc-passo" data-passo="1"></span>' +
          '<span class="conc-passo" data-passo="2"></span>' +
          '<span class="conc-passo" data-passo="3"></span>' +
        '</div>' +
        '<div id="conc-corpo" class="conc-corpo"></div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(host);

  const bottone = document.getElementById("conc-bottone");
  const overlay = document.getElementById("conc-overlay");
  const chiudiBtn = document.getElementById("conc-chiudi");
  const passiEl = document.getElementById("conc-passi");
  const corpo = document.getElementById("conc-corpo");

  let stato = { tipo: null, regione: null, simbolo: null, step: 1 };

  /* carica guida.js / hotel.js al volo se la pagina non li ha già inclusi
     (index.html e la maggior parte delle pagine non li caricano) */
  let promessaGuida = null;
  let promessaHotel = null;
  let promessaItinerari = null;

  function caricaScript(src) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[src="' + src + '"]')) {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error("Impossibile caricare " + src)); };
      document.body.appendChild(s);
    });
  }

  function assicuraDati(tipo) {
    if (tipo === "ristorante") {
      if (window.GUIDA_REGPROV) return Promise.resolve();
      if (!promessaGuida) promessaGuida = caricaScript("guida.js");
      return promessaGuida;
    }
    if (tipo === "itinerario") {
      if (T42.itinerari) return Promise.resolve();
      if (!promessaItinerari) promessaItinerari = caricaScript("itinerari.js");
      return promessaItinerari;
    }
    if (window.HOTEL_PROVCITTA) return Promise.resolve();
    if (!promessaHotel) promessaHotel = caricaScript("hotel.js");
    return promessaHotel;
  }

  function aggiornaPassi() {
    passiEl.style.visibility = stato.step > 3 ? "hidden" : "visible";
    passiEl.querySelectorAll(".conc-passo").forEach(function (el) {
      const n = Number(el.dataset.passo);
      el.classList.toggle("attivo", n === stato.step);
      el.classList.toggle("fatto", n < stato.step);
    });
  }

  function renderStep1() {
    corpo.innerHTML =
      '<div class="conc-titolo">Non sai dove andare? Il nostro concierge digitale ti offre un suggerimento.</div>' +
      '<div class="conc-opzioni">' +
        '<button class="conc-opzione" type="button" data-tipo="ristorante">🍽️<span>Ristorante</span></button>' +
        '<button class="conc-opzione" type="button" data-tipo="albergo">🛏️<span>Albergo</span></button>' +
        '<button class="conc-opzione" type="button" data-tipo="itinerario">🗺️<span>Itinerario</span></button>' +
      '</div>';
  }

  function renderStep2() {
    let regioni;
    if (stato.tipo === "itinerario") {
      const insieme = new Set();
      Object.values(T42.itinerari || {}).forEach(function (it) { if (it.regione) insieme.add(it.regione); });
      regioni = Array.from(insieme).sort(function (a, b) { return a.localeCompare(b, "it"); });
    } else {
      const regprov = stato.tipo === "ristorante" ? (window.GUIDA_REGPROV || {}) : (window.HOTEL_PROVCITTA || {});
      regioni = Object.keys(regprov).sort(function (a, b) { return a.localeCompare(b, "it"); });
    }
    corpo.innerHTML =
      '<div class="conc-titolo">Dove?</div>' +
      '<select id="conc-regione" class="conc-select">' +
        '<option value="">Scegli una regione…</option>' +
        regioni.map(function (r) {
          return '<option value="' + esc(r) + '"' + (r === stato.regione ? " selected" : "") + '>' + esc(r) + '</option>';
        }).join("") +
      '</select>' +
      '<div class="conc-azioni-step">' +
        '<button class="conc-indietro" type="button">← Indietro</button>' +
        '<button class="conc-avanti" id="conc-avanti-2" type="button"' + (stato.regione ? "" : " disabled") + '>Continua →</button>' +
      '</div>';
  }

  function renderStep3() {
    const simboli = stato.tipo === "ristorante" ? elencoSimboliRistorante() : elencoSimboliAlbergo();
    corpo.innerHTML =
      '<div class="conc-titolo">Che tipo?</div>' +
      '<div class="conc-opzioni conc-opzioni--simboli">' +
        simboli.map(function (s) {
          return '<button class="conc-opzione conc-opzione--simbolo" type="button" data-simbolo="' + esc(s.v) + '">' + esc(s.icona || s.v) + '<span>' + esc(s.t) + '</span></button>';
        }).join("") +
      '</div>' +
      '<div class="conc-azioni-step"><button class="conc-indietro" type="button">← Indietro</button></div>';
  }

  function suggerimenti() {
    let match;
    if (stato.tipo === "itinerario") {
      const tutti = Object.keys(T42.itinerari || {}).map(function (chiave) {
        return Object.assign({ chiave: chiave }, T42.itinerari[chiave]);
      });
      match = tutti.filter(function (it) { return it.regione === stato.regione; });
    } else {
      const dati = stato.tipo === "ristorante" ? (window.GUIDA || []) : (window.HOTEL || []);
      match = dati.filter(function (r) {
        return r.regione === stato.regione && (r.note || "").indexOf(stato.simbolo) !== -1;
      });
    }
    console.log("[Concierge] suggerimenti() → stato.tipo =", JSON.stringify(stato.tipo),
      "stato.regione =", JSON.stringify(stato.regione),
      "stato.simbolo =", JSON.stringify(stato.simbolo),
      "risultati trovati =", match.length);
    const mischiati = match.slice();
    for (let i = mischiati.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = mischiati[i]; mischiati[i] = mischiati[j]; mischiati[j] = tmp;
    }
    if (stato.simbolo === "") return mischiati;
    const quanti = Math.min(mischiati.length, 1 + Math.floor(Math.random() * 3));
    return mischiati.slice(0, quanti);
  }

  function renderRisultati() {
    const items = suggerimenti();
    const etichettaTipo = stato.tipo === "ristorante" ? "ristorante" : (stato.tipo === "albergo" ? "albergo" : "itinerario");
    let html = '<div class="conc-titolo">I miei suggerimenti</div>';
    if (!items.length) {
      html += '<div class="conc-vuoto">Nessun ' + etichettaTipo +
        ' con questo profilo in ' + esc(stato.regione) + '. Prova un\'altra combinazione.</div>';
    } else if (stato.tipo === "itinerario") {
      html += '<div class="conc-risultati">' + items.map(function (it) {
        return '<article class="conc-card">' +
          '<div class="conc-card-nome">' + esc(it.titolo) + '</div>' +
          (it.sottotitolo ? '<div class="conc-card-citta">' + esc(it.sottotitolo) + '</div>' : '') +
          '<div class="azioni rist-azioni"><a class="btn btn--pieno" href="itinerario.html?i=' + encodeURIComponent(it.chiave) + '">Vedi l\'itinerario →</a></div>' +
        '</article>';
      }).join("") + '</div>';
    } else {
      html += '<div class="conc-risultati">' + items.map(function (r) {
        const tel = r.tel || r.telefono;
        let btn = "";
        if (tel) btn += '<a class="btn btn--pieno" href="tel:' + esc(tel.replace(/\s/g, "")) + '">Chiama</a>';
        if (r.mappa) btn += '<a class="btn" href="' + urlMappa(r.mappa) + '" target="_blank" rel="noopener">Mappa</a>';
        if (r.web) btn += '<a class="btn" href="' + esc(r.web) + '" target="_blank" rel="noopener">Sito</a>';
        return '<article class="conc-card">' +
          '<div class="conc-card-nome">' + esc(r.nome) + '</div>' +
          (r.citta ? '<div class="conc-card-citta">' + esc(r.citta) + '</div>' : '') +
          (btn ? '<div class="azioni rist-azioni">' + btn + '</div>' : '') +
        '</article>';
      }).join("") + '</div>';
    }
    html += '<div class="conc-azioni-step"><button class="conc-rifai" type="button">↺ Nuova ricerca</button></div>';
    corpo.innerHTML = html;
  }

  function render() {
    aggiornaPassi();
    if (stato.step === 1) renderStep1();
    else if (stato.step === 2) renderStep2();
    else if (stato.step === 3) renderStep3();
    else renderRisultati();
  }

  function vaiA(step) {
    stato.step = step;
    render();
  }

  function apri() {
    stato = { tipo: null, regione: null, simbolo: null, step: 1 };
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    render();
  }

  function chiudi() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  bottone.addEventListener("click", apri);
  chiudiBtn.addEventListener("click", chiudi);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) chiudi(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !overlay.hidden) chiudi(); });

  corpo.addEventListener("click", function (e) {
    const opzione = e.target.closest(".conc-opzione");
    if (opzione) {
      if (stato.step === 1) {
        const tipo = opzione.dataset.tipo;
        stato.tipo = tipo;
        stato.regione = null;
        stato.simbolo = null;
        corpo.innerHTML = '<div class="conc-titolo">Un momento…</div>';
        assicuraDati(tipo).then(function () {
          if (stato.tipo === tipo) vaiA(2);
        }).catch(function (err) {
          console.error("[Concierge]", err);
          if (stato.tipo === tipo) {
            corpo.innerHTML = '<div class="conc-vuoto">Non riesco a caricare i dati. Riprova più tardi.</div>' +
              '<div class="conc-azioni-step"><button class="conc-indietro" type="button">← Indietro</button></div>';
          }
        });
      } else if (stato.step === 3) {
        stato.simbolo = opzione.dataset.simbolo;
        vaiA(4);
      }
      return;
    }
    if (e.target.closest(".conc-indietro")) { vaiA(Math.max(1, stato.step - 1)); return; }
    const avanti = e.target.closest(".conc-avanti");
    if (avanti) {
      const selRegione = document.getElementById("conc-regione");
      if (selRegione) stato.regione = selRegione.value;
      console.log("[Concierge] Avanti step 2 → stato.regione =", JSON.stringify(stato.regione));
      if (stato.regione) vaiA(stato.tipo === "itinerario" ? 4 : 3);
      return;
    }
    if (e.target.closest(".conc-rifai")) {
      stato.tipo = null; stato.regione = null; stato.simbolo = null;
      vaiA(1);
    }
  });

  corpo.addEventListener("change", function (e) {
    if (e.target.id === "conc-regione") {
      stato.regione = e.target.value;
      const avanti = document.getElementById("conc-avanti-2");
      if (avanti) avanti.disabled = !stato.regione;
    }
  });
}

