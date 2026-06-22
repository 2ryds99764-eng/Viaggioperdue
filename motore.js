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
    '<div class="pie-link"><a href="chisiamo.html">Chi siamo</a> <span class="pie-sep">·</span> <a href="mailto:viaggioperdue@icloud.com">Scrivici</a></div>';
}

/* ----------- COSTRUZIONE DELLA PAGINA RACCONTO ----------- */
function costruisciRacconto() {
  const r = T42.racconto || { titolo: "", paragrafi: [] };
  document.title = (r.titolo || "Racconto") + " · " + T42.sito.nome;

  const intest = document.getElementById("racconto-intestazione");
  if (intest) {
    intest.innerHTML =
      '<a class="ritorno" href="index.html">Riprendi il viaggio</a>' +
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
      '<a class="ritorno" href="index.html">Riprendi il viaggio</a>' +
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
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(mappa);

  const bounds = [];
  punti.forEach(function (p) {
    const col = colori[p.cat] || "#1f4e8c";
    const icona = L.divIcon({
