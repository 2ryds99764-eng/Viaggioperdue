/* T42 VIAGGIOPERDUE — ESCAPE (weekend fuori rotta, due o tre giorni)
   Schema: T42.escape["slug"] = { ... }
   Pagina di dettaglio: escape.html?e=<slug>
   Pagina elenco: escape-elenco.html */

T42.escape = Object.assign({}, T42.escape, {

  "strongoli": {
    occhiello: "Escape N.1 · Calabria Ionica",
    titolo: "Strongoli",
    regione: "Calabria",
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
    regione: "Trentino-Alto Adige",
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
        note: ["Cena — Onkel Taa, dentro il museo K.u.K. di Bad Egart, Via Stazione 17, Tel/Parcines. Prenotazione consigliata."],
        ristoranti: ["Onkel Taa"]
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
  },

  "alghero": {
    occhiello: "Escape N.3 · Sardegna",
    titolo: "Alghero",
    regione: "Sardegna",
    sottotitolo: "due notti tra corallo e bastioni catalani",
    intro: "Una città che parla ancora catalano dopo sette secoli, un museo dedicato al Piccolo Principe dentro una torre del Cinquecento, e uno dei sistemi di grotte marine più spettacolari del Mediterraneo. Tre motivi diversi per la stessa destinazione.",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/C79CFCC5-A13D-4DA4-92B8-A660F90F0EB7_dcuv2q",

    percheCiSiVa: [
      "Alghero è la Barceloneta di Sardegna: conquistata dalla Corona d'Aragona nel Trecento, ha conservato fino a oggi il dialetto catalano, l'architettura gotico-catalana e un centro storico chiuso da mura e bastioni che guardano il mare. Le vie del centro portano ancora i nomi in doppia lingua, e la sera i bastioni diventano la passeggiata di tutta la città.",
      "Ma Alghero non è solo storia: è anche la Riviera del Corallo, novanta chilometri di costa che hanno reso questa città un centro internazionale della lavorazione dell'oro rosso, e la porta d'accesso a uno dei promontori più spettacolari del Mediterraneo, Capo Caccia."
    ],

    base: [
      {
        nome: "Villa Las Tronas Hotel & Spa",
        luogo: "Lungomare Valencia 1, Alghero (SS)",
        testo: "Ex residenza estiva della Famiglia Reale d'Italia, su un promontorio privato con moli propri per la balneazione e una piscina di acqua di mare.",
        tel: "079981818",
        mappaIndirizzo: "Lungomare Valencia 1, Alghero, SS",
        sitoWeb: "https://www.hotelvillalastronas.it/it/"
      }
    ],

    giornate: [
      {
        titolo: "Arrivo e bastioni catalani", giorno: "VEN",
        paragrafi: [
          "Si arriva nel pomeriggio, con il tempo per un primo giro tra le vie del centro storico — via Carlo Alberto, via Roma, la Cattedrale gotico-catalana in Piazza Duomo. Verso sera, i Bastioni diventano il posto giusto per un aperitivo con vista sul golfo, mentre il sole tramonta dietro Capo Caccia.",
          "Alghero si lascia riconoscere nei dettagli: i cartelli delle strade in doppia lingua, il catalano ancora parlato nelle botteghe, la paella fatta con la fregola sarda al posto del riso."
        ],
        note: ["Cena — Al Refettorio, nel centro storico."],
        ristoranti: ["Al Refettorio"]
      },
      {
        titolo: "Capo Caccia, le Grotte e il Piccolo Principe", giorno: "SAB",
        paragrafi: [
          "L'Escala del Cabirol — 654 gradini scavati nella parete del promontorio, disegnata dall'architetto e poeta sardo Antoni Simon Mossa — scende fino alle Grotte di Nettuno: quattro chilometri di sale carsiche, un lago sotterraneo, una spiaggia di sabbia bianchissima sotto il livello del mare. Chi preferisce risparmiare fiato può arrivarci anche via barca, dal porto di Alghero.",
          "Poco distante, nella Baia di Porto Conte, la Torre Nuova del Cinquecento ospita il MASE: qui visse per due mesi, nella primavera-estate del 1944, Antoine de Saint-Exupéry — pilota di ricognizione per le forze alleate, e autore de Il Piccolo Principe. Scrisse in quella baia gran parte de La Cittadella e il suo ultimo testo, prima di trasferirsi in Corsica e scomparire nel suo ultimo volo, il 31 luglio dello stesso anno."
        ],
        note: ["Pranzo o cena — Rafel, sul Lido di Alghero."],
        ristoranti: ["Rafel"]
      },
      {
        titolo: "Il corallo e il congedo", giorno: "DOM",
        paragrafi: [
          "L'ultima mattina è per il Museo del Corallo, dentro Villa Costantino — una villa liberty del 1927 sul lungomare. Il corallium rubrum, pescato lungo la Riviera del Corallo, ha reso Alghero un centro internazionale di lavorazione: la Scuola del Corallo, fondata negli anni Cinquanta, è oggi una delle sole due in Italia, insieme a Torre del Greco.",
          "Prima di ripartire, un'ultima passeggiata tra le botteghe di corallo del centro storico — poi la strada verso l'aeroporto, lo stesso scalo di Fertilia dove atterrò Saint-Exupéry nel maggio del 1944."
        ],
        note: ["Pranzo — Al Tuguri, prima di ripartire."],
        ristoranti: ["Al Tuguri"]
      }
    ],

    esperienze: [
      { titolo: "Ingresso Grotte di Nettuno (via terra o mare)", dettaglio: "ESCALA DEL CABIROL O BARCA DA ALGHERO", prezzo: "da confermare" },
      { titolo: "Ingresso MASE — Museo Saint-Exupéry", dettaglio: "TORRE NUOVA, PORTO CONTE", prezzo: "da confermare" },
      { titolo: "Ingresso Museo del Corallo", dettaglio: "VILLA COSTANTINO", prezzo: "7 € intero / 5 € ridotto" }
    ],

    primaDiPartire: [
      { etichetta: "STAGIONE", testo: "Le Grotte di Nettuno sono accessibili solo con condizioni meteo-marine favorevoli. Il MASE ha orari variabili mese per mese: verificare prima di partire." },
      { etichetta: "APERTURA", testo: "Museo del Corallo aperto tutti i giorni, 10:30-13:00 e 17:30-20:00." },
      { etichetta: "PRENOTARE", testo: "MASE e Grotte di Nettuno: verificare tramite Alghero Experience. Museo del Corallo: tel. 079 4134690 o info@fondazionealghero.it." },
      { etichetta: "ARRIVARE", testo: "Aeroporto di Alghero-Fertilia, il più vicino — lo stesso scalo militare dove atterrò Saint-Exupéry nel 1944." }
    ],
    notaVerifica: "Verificato il 2 settembre 2026. Orari, condizioni di accesso alle grotte e prezzi vanno riconfermati prima di ogni pubblicazione."
  }

});
