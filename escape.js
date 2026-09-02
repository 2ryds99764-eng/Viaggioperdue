/* T42 VIAGGIOPERDUE — ESCAPE (weekend fuori rotta, due o tre giorni)
   Schema: T42.escape["slug"] = { ... }
   Pagina di dettaglio: escape.html?e=<slug>
   Pagina elenco: escape-elenco.html */

T42.escape = Object.assign({}, T42.escape, {

  "strongoli": {
    occhiello: "Escape N.1 · Calabria Ionica",
    titolo: "Strongoli",
    sottotitolo: "due notti in vigna",
    intro: "Una tenuta del Seicento tra vigne e agrumeti, una stella Michelin in casa, il mare a due chilometri. E nessuna copertura telefonica.",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/1C8FD1D2-A27A-4A3E-9BD8-C16779BCD439_umbbim",
    finestra: {
      tipo: "tre-stati",
      mesi: ["chiuso","chiuso","chiuso","aperto","aperto","gozzo","gozzo","gozzo","gozzo","aperto","chiuso","chiuso"],
      legenda: [
        {stato:"aperto", label:"Ristorante aperto"},
        {stato:"gozzo", label:"Gozzo in mare"},
        {stato:"chiuso", label:"Chiuso"}
      ]
    },
    percheCiSiVa: [
      "Si va per stare fermi in un posto solo. L'azienda Ceraudo occupa un borgo del Seicento dentro sessanta ettari di vigneti, uliveti e agrumeti che scendono verso lo Ionio. Dentro ci sono la cantina, l'orto, una piscina all'ombra di ulivi secolari e il Dattilo, il ristorante stellato di Caterina Ceraudo, nato in un vecchio frantoio.",
      "Il cellulare non prende. È il primo dato da sapere e, per molti, la ragione principale per andarci."
    ],
    base: [
      {
        nome: "Azienda Ceraudo — Relais Dattilo",
        luogo: "Contrada Maremonti 4/6, Strongoli (KR)",
        dettaglio: "4 CAMERE + 2 APPARTAMENTI",
        testo: "Sei sistemazioni in tutto, ricavate nel borgo tra ulivi, pini marittimi, limoni e melograni. Chi decide all'ultimo momento non entra: per un weekend di alta stagione servono due o tre mesi di anticipo.",
        tel: "0962865613",
        mappaIndirizzo: "Contrada Maremonti 4/6, Strongoli, KR",
        sitoWeb: "https://www.dattilo.it",
        prenotaWhatsapp: "393423976594",
        nota: "Il numero è quello dell'ufficio dell'azienda. In tenuta il cellulare non prende: per il tavolo si usa WhatsApp o la mail.",
        testoExtra: "Il tavolo si prenota a parte, e conviene farlo prima ancora della camera."
      }
    ],
    giornate: [
      {
        titolo: "Arrivo e cantina", giorno: "VEN",
        paragrafi: ["Check-in nel pomeriggio, il tempo di girare il borgo e la piscina. Verso le sei, visita alla cantina e degustazione: tre o cinque calici con un assaggio salato. La sera, cena al Dattilo."]
      },
      {
        titolo: "Il bivio", giorno: "SAB",
        bivio: [
          { titolo: "Versione mare", periodo: "GIU – SET", testo: "Tre ore di gozzo lungo la costa, bagno nelle calette che da terra non si raggiungono, light lunch preparato dal ristorante con i vini della tenuta. Si rientra nel primo pomeriggio.", prezzo: "200 € in due · 360 € in quattro" },
          { titolo: "Versione terra", periodo: "APR – MAG, OTT", testo: "Cinquanta minuti nell'entroterra fino a Santa Severina: il castello domina il Marchesato ed è aperto tutti i giorni, mattina e pomeriggio. Rientro per il pomeriggio lento in tenuta.", prezzo: "Ingresso al castello" }
        ],
        notaFinale: "Le due versioni non si sommano. Tre ore di barca più il castello riempiono la giornata di tutto tranne che di riposo."
      },
      {
        titolo: "Capo Colonna e ritorno", giorno: "DOM",
        paragrafi: ["Quaranta minuti verso Crotone, fino al promontorio dove resta in piedi una sola colonna del tempio di Hera Lacinia. Accanto al parco c'è il museo. Chiudono entrambi il lunedì: è il motivo per cui questo Escape va da venerdì a domenica e non da sabato a lunedì."]
      }
    ],
    esperienze: [
      { titolo: "Tour in barca con il gozzo", dettaglio: "3 ORE · LIGHT LUNCH E VINI INCLUSI", prezzo: "200 € / 360 €" },
      { titolo: "Degustazione vini con visita alla cantina", dettaglio: "3 O 5 CALICI", prezzo: "da confermare" },
      { titolo: "Il nostro terroir, tra le vigne", dettaglio: "MEZZA GIORNATA", prezzo: "da confermare" },
      { titolo: "Un giorno con la chef", dettaglio: "GIORNATA INTERA", prezzo: "da confermare" }
    ],
    primaDiPartire: [
      { etichetta: "STAGIONE", testo: "Nell'ultima stagione il ristorante ha chiuso dal 3 novembre al 20 aprile." },
      { etichetta: "APERTURA", testo: "Nei mesi di spalla si cena da giovedì a domenica, pranzo solo su prenotazione. In piena estate quasi soltanto la sera." },
      { etichetta: "PRENOTARE", testo: "WhatsApp 342 397 6594 o prenotazioni@dattilo.it. Il fisso è 0962 865613, ma in tenuta il cellulare non prende." },
      { etichetta: "ARRIVARE", testo: "Aeroporto di Crotone a 45 minuti sulla SS106, Lamezia Terme a circa due ore. L'auto serve." },
      { etichetta: "CHIUSURE", testo: "Capo Colonna e il museo chiudono il lunedì. Santa Severina è aperta tutti i giorni." }
    ],
    notaVerifica: "Verificato il 29 agosto 2026. Stagione, giorni di apertura e prezzi vanno riconfermati prima di ogni pubblicazione: i dati sulla chiusura invernale si riferiscono alla stagione precedente."
  },

  "parcines": {
    occhiello: "Escape N.2 · Alto Adige",
    titolo: "Parcines",
    sottotitolo: "due notti tra rogge e frutteti",
    intro: "Un paese di frutteti alle porte di Merano, attraversato da rogge che portano ancora oggi l'acqua ai meli. Due alberghi di charme, uno stesso cognome nobiliare che lega un sentiero del Quattrocento a una delle due case, e un ristorante che è anche un museo di storia asburgica.",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/ACE672FF-9A6B-4B59-BC67-C5935A36D9D9_qjbheb",
    finestra: {
      tipo: "due-stati",
      mesi: ["chiuso","chiuso","chiuso","aperto","aperto","aperto","aperto","aperto","aperto","aperto","chiuso","chiuso"],
      legenda: [
        {stato:"aperto", label:"Onkel Taa aperto"},
        {stato:"chiuso", label:"Chiuso"}
      ]
    },
    percheCiSiVa: [
      "Parcines sta all'ingresso della Val Venosta, a un passo da Merano ma fuori dal suo passo turistico. Il paese vive di meleti e di rogge — i canali di irrigazione scavati lungo i pendii, che qui prendono il nome di Waalweg, sentieri dell'acqua prima ancora che percorsi escursionistici. Vista panoramica su Merano da una parte, l'eredità di un castello dall'altra: due alberghi, due modi diversi di raccontare la stessa valle.",
      "Il Waalweg di Parcines fu costruito nel Quattrocento per volontà dei conti von Stachelburg — lo stesso nome che oggi porta uno dei due alberghi di questo Escape, erede diretto di quel casato."
    ],
    base: [
      {
        nome: "Hotel Niedermair",
        luogo: "Vertigen 8, Parcines (BZ)",
        testo: "Architettura organica, legno locale, vista panoramica sulla città termale di Merano e sul Gruppo di Tessa. Gestione Famiglia Kuen.",
        tel: "0473967171",
        mappaIndirizzo: "Vertigen 8, Parcines, BZ",
        sitoWeb: "https://www.hotel-niedermair.com/it"
      },
      {
        nome: "Hotel das Stachelburg",
        luogo: "Via Cascata 7, Parcines (BZ)",
        testo: "Stile alpino contemporaneo, il nome del vicino castello trecentesco che oggi ospita una distilleria biologica. Gestione Famiglia Mazohl.",
        tel: "0473967310",
        mappaIndirizzo: "Via Cascata 7, Parcines, BZ",
        sitoWeb: "https://www.hotel-stachelburg.com/it/"
      }
    ],
    giornate: [
      {
        titolo: "Arrivo", giorno: "VEN",
        paragrafi: ["Si arriva nel pomeriggio e si sceglie — Niedermair o Stachelburg, vista aperta sulla valle o radici in un maniero. La sera si resta nel proprio albergo: entrambi hanno cucina propria, entrambi meritano la prima sera."]
      },
      {
        titolo: "Il sentiero della roggia e gli affreschi di Naturno", giorno: "SAB",
        paragrafi: ["Il Waalweg si segue per un paio d'ore, tra meleti e boschi di betulle, fino alla cascata di Parcines: novantasette metri d'acqua di ghiacciaio, tra le più imponenti delle Alpi. Nel pomeriggio, Naturno — dieci minuti d'auto — custodisce nella chiesa di San Procolo uno dei più antichi cicli di affreschi di tutta l'area di lingua tedesca, pittura carolingia dell'VIII-IX secolo, oggi affiancata da un piccolo museo sotterraneo."],
        note: ["Cena — Onkel Taa, dentro il museo K.u.K. di Bad Egart, Via Stazione 17, Tel/Parcines. Prenotazione consigliata."]
      },
      {
        titolo: "Congedo", giorno: "DOM",
        paragrafi: ["Prima di ripartire, chi dorme allo Stachelburg può fermarsi alla Distilleria Gaudenz, dentro le mura del castello stesso — degustazioni settimanali di vino e distillati altoatesini."]
      }
    ],
    esperienze: [
      { titolo: "Cena al ristorante-museo Onkel Taa", dettaglio: "MUSEO K.U.K. BAD EGART", prezzo: "da confermare" },
      { titolo: "Ingresso Museo di San Procolo", dettaglio: "AFFRESCHI CAROLINGI", prezzo: "da confermare" },
      { titolo: "Degustazione Distilleria Gaudenz", dettaglio: "CASTELLO STACHELBURG", prezzo: "da confermare" }
    ],
    primaDiPartire: [
      { etichetta: "STAGIONE", testo: "Il museo e ristorante Onkel Taa apre da fine marzo/inizio aprile a inizio novembre, chiuso in inverno." },
      { etichetta: "APERTURA", testo: "Onkel Taa: ristorante 12:00-15:00 e 18:30-23:00, chiuso la domenica sera e il lunedì." },
      { etichetta: "PRENOTARE", testo: "Onkel Taa: tel. 0473 967342 o restaurant@onkeltaa.com." },
      { etichetta: "ARRIVARE", testo: "Aeroporto di Bolzano a circa 40 minuti; stazione di Merano collegata da bus locale a Parcines." }
    ],
    notaVerifica: "Verificato il 2 settembre 2026. Stagione, giorni di apertura e prezzi vanno riconfermati prima di ogni pubblicazione."
  }

});
