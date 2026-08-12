/* T42 VIAGGIOPERDUE — ITINERARI DI VIAGGIO
   Schema: T42.itinerari["chiave"] = { ... }
   Collegato a storia.html?s=<raccontoCollegato> per il rimando incrociato,
   e a GUIDA (guida.js) per nome, per riusare automaticamente i contatti
   dei ristoranti già presenti nella guida — senza duplicare i dati. */

T42.itinerari = Object.assign({}, T42.itinerari, {

  "costiera-amalfitana": {
    occhiello: "Un itinerario per due",
    titolo: "Da Vietri sul Mare a Positano",
    sottotitolo: "sette giorni sulla Divina Costiera, tra ceramiche, ville sospese e il Sole nel Piatto di Amalfi",
    regione: "Campania",
    copertina: "",
    tappe: ["Vietri sul Mare","Cetara","Maiori","Minori","Amalfi","Ravello","Tramonti","Conca dei Marini","Furore","Praiano","Positano"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "La chiamano la Divina Costiera da così tanto tempo che è facile dimenticare perché: cinquanta chilometri di strada che si arrampica e scende fra il mare e i Monti Lattari, con ogni curva che apre una vista diversa. Conviene percorrerla da ovest verso est, partendo da Vietri sul Mare, e lasciare che il paesaggio cambi registro un paese alla volta — dalle ceramiche colorate di Vietri alla pesca di Cetara, dal marmo bianco di Amalfi ai giardini sospesi di Ravello, fino ai colori più tranquilli di Praiano e Positano.",
      "Questo itinerario ha un cuore preciso: Amalfi, dove un piatto di pasta più antico di Roma e un dolce nato per errore raccontano insieme la stessa costa, con un filo — il sole — che li lega da decenni. Ma intorno a quel cuore ci sono sei giorni di borghi che meritano lo stesso tempo, non solo un passaggio in auto.",
      "Sette giorni sono la misura giusta per non ridurre la costiera a una serie di soste fotografiche: una notte a Vietri o Cetara, tre ad Amalfi — con Ravello e Tramonti raggiungibili in giornata — due fra Praiano e Positano, chiudendo il cerchio dove la Costiera si fa più mondana senza perdere, se si sa dove guardare, la sua parte più autentica.",
      "Quello che segue non è una classifica. È un percorso possibile, con dentro gli indirizzi di chi lavora bene e da tempo: trattorie di famiglia, un ristorante che ha aspettato ventun anni prima di rimettere in carta il suo piatto più premiato, botteghe di ceramica, cantine scavate nei terrazzamenti. Il resto — quanto fermarsi a ogni tappa, quale spiaggia scegliere — appartiene a chi viaggia."
    ],

    raccontoCollegato: "costiera-amalfitana",

    percorso: {
      intro: "Vietri e Cetara per una notte, Amalfi per tre, Praiano per due, con l'ultimo giorno dedicato a Tramonti e al congedo da Positano. Circa cinquanta chilometri di strada costiera in tutto, più le deviazioni verso l'interno.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Vietri sul Mare e Cetara", km: "", testo: "Arrivo, le botteghe di ceramica, il borgo dei pescatori e la colatura di alici." },
        { giorno: "Giorno secondo", titolo: "Maiori e Minori", km: "10 km", testo: "Le due Reghinne, la Villa Romana, le spiagge meno affollate della costa." },
        { giorno: "Giorno terzo", titolo: "Amalfi", km: "5 km", testo: "Il Duomo, il Museo della Carta, l'antica Repubblica Marinara." },
        { giorno: "Giorno quarto", titolo: "Ravello e Tramonti", km: "", testo: "Villa Rufolo e Villa Cimbrone in giornata, poi l'entroterra del vino." },
        { giorno: "Giorno quinto", titolo: "verso Praiano", km: "15 km", testo: "Conca dei Marini, la Grotta dello Smeraldo, il Fiordo di Furore." },
        { giorno: "Giorno sesto", titolo: "Praiano e Positano", km: "5 km", testo: "Il Sentiero degli Dei al mattino, Positano nel pomeriggio." },
        { giorno: "Giorno settimo", titolo: "Tramonti e congedo", km: "", testo: "L'entroterra del vino, il Provolone del Monaco, il ritorno." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Vietri sul Mare, la porta di ceramica",
        paragrafi: [
          "Vietri sul Mare è il primo paese che si incontra arrivando da Salerno, ed è già un manifesto di quello che verrà: cupole maiolicate, facciate rivestite di ceramica colorata, una Villa Comunale i cui parapetti — decorati dalla storica Fabbrica Solimene, progettata nel 1953 dall'architetto Paolo Soleri — ricordano per colore e forme il Parc Güell di Barcellona. Passeggiare fra le botteghe dei maestri ceramisti, alcune attive da generazioni, è il modo più naturale per cominciare il viaggio.",
          "A pochi minuti, Cetara resta invece un borgo di pescatori quasi intatto: le barche colorate rientrano ancora al porto con il pescato del giorno, e la Torre Vicereale cinquecentesca — oggi Museo Civico — sorveglia la spiaggia. È qui che nasce la colatura di alici, il condimento ambrato ottenuto dalla fermentazione delle alici sotto sale, oggi Presidio Slow Food: da assaggiare, tassativamente, su un piatto di spaghetti."
        ],
        note: ["Si dorme a Vietri sul Mare o Cetara."],
        ristoranti: ["Acqua Pazza", "Al Convento"]
      },
      {
        label: "Giorno secondo",
        titolo: "Le due Reghinne: Maiori e Minori",
        paragrafi: [
          "Maiori — l'antica Reghinna Major — ha il lungomare più lungo di tutta la costiera, delimitato dalla Torre Normanna e dal Castello di Miramare: nel dopoguerra fu l'ambientazione preferita di Roberto Rossellini, che qui trovò una costa meno scenografica e più vera. Minori, la Reghinna Minor, custodisce invece i resti di una villa marittima romana del I secolo, con un ninfeo affrescato e le fondamenta di un impianto termale — ed è considerata la culla della pasta artigianale della costiera.",
          "La giornata si presta a un ritmo lento: le spiagge di Maiori e Minori restano fra le meno affollate della costa, e vale la pena fermarsi per pranzo prima di risalire verso Amalfi nel tardo pomeriggio."
        ],
        note: ["Si dorme ad Amalfi (prima delle tre notti)."],
        ristoranti: []
      },
      {
        label: "Giorno terzo",
        titolo: "Amalfi, l'antica Repubblica Marinara",
        paragrafi: [
          "Amalfi fu una delle quattro Repubbliche Marinare, e la sua Cattedrale di Sant'Andrea — con la scalinata monumentale e il Chiostro del Paradiso, cimitero arabo-normanno costruito nel Duecento — racconta ancora quella stagione di potenza commerciale con il Mediterraneo orientale. Il Museo della Carta, ricavato in un'antica cartiera lungo la Valle dei Mulini, spiega invece un altro primato locale: Amalfi produce carta a mano fin dal Medioevo, fra le prime città d'Europa a farlo.",
          "Il pranzo è da Lido Azzurro, sul porticciolo di Amalfi: una terrazza a pochi centimetri dall'acqua e una cucina di mare che segue il pescato del giorno. La sera si torna in Piazza dei Dogi per La Caravella, dove il piatto di 'Ndunderi che nel 2003 vinse il Sole di Veronelli — poi ritirato per ventun anni in segno di rispetto verso il grande gastronomo — è tornato in carta nella sua forma più antica; e dove il soufflé al limone nato per errore nel 1959, lo stesso anno del Nobel di Salvatore Quasimodo, porta ancora il nome che il poeta gli regalò: il Sole nel Piatto."
        ],
        note: ["Si dorme di nuovo ad Amalfi."],
        ristoranti: ["Lido Azzurro", "La Caravella"]
      },
      {
        label: "Giorno quarto",
        titolo: "Ravello sospesa, Tramonti nascosta",
        paragrafi: [
          "Ravello sta a trecentocinquanta metri sul mare, su uno sperone che domina Maiori, Minori e l'intero golfo: Boccaccio la scelse per una delle novelle del Decamerone, Wagner vi immaginò i giardini di Klingsor nel Parsifal. Villa Rufolo, in stile arabo-normanno, ospita ogni estate il Ravello Festival; poco distante, il belvedere della Terrazza dell'Infinito di Villa Cimbrone — statue neoclassiche, un'apertura improvvisa sul Golfo di Salerno — è una delle vedute più fotografate d'Italia.",
          "Nel pomeriggio la strada scende verso l'interno, a Tramonti: una valle verde terrazzata a vite, ulivi e limoni, Patrimonio Unesco, dove si coltivano ancora viti secolari prefillossera. È la zona più prolifica della piccola DOC Costa d'Amalfi, e un pranzo o un aperitivo da Osteria Reale è il modo giusto per assaggiarne i vini insieme al Provolone del Monaco, il formaggio a pasta filata delle mandrie di razza agerolese che matura sui Monti Lattari.",
          "C'è anche una leggenda che è nata qui. Si narra che i naviganti amalfitani, fra i primi a usare la bussola in Occidente, chiamassero tramontana il vento che scendeva dai monti — perché per loro il nord coincideva con la direzione di Tramonti. L'etimologia più accreditata rimanda al latino trans montes, \"oltre i monti\", ma questa storia resta un piccolo dono che la Costiera si racconta da sola, da generazioni."
        ],
        note: ["Si torna a dormire ad Amalfi (terza notte)."],
        ristoranti: ["Osteria Reale"]
      },
      {
        label: "Giorno quinto",
        titolo: "La Grotta dello Smeraldo e il Fiordo di Furore",
        paragrafi: [
          "Conca dei Marini, il paese della sfogliatella, custodisce la Grotta dello Smeraldo: scoperta nel 1932 dal pescatore Luigi Buonocore, deve il suo colore a una fenditura sottomarina che filtra la luce del sole in un verde smeraldino, fra stalattiti e un presepe sommerso visitabile in barca a remi. A un chilometro, il Fiordo di Furore si apre come un taglio nella roccia scavato dal torrente Schiato — Fellini e Anna Magnani ne restarono incantati — e si raggiunge anche a piedi lungo il Sentiero dei Pipistrelli Impazziti.",
          "Furore è anche terra di vino: sui suoi terrazzamenti a strapiombo sul mare nascono i vini di Marisa Cuomo, fra cui il celebre Fiorduva, ottenuto da tre vitigni autoctoni — fenile, ginestra e ripoli — raccolti a mano su pareti che nessun trattore potrebbe mai raggiungere."
        ],
        note: ["Si dorme a Praiano (prima delle due notti)."],
        ristoranti: ["Alfonso a Mare"]
      },
      {
        label: "Giorno sesto",
        titolo: "Il Sentiero degli Dei e Positano",
        paragrafi: [
          "Il Sentiero degli Dei collega Praiano a Bomerano, in alto sopra Positano, con una vista sulla costa che giustifica il nome: conviene percorrerlo al mattino presto, prima che il sole diventi ingombrante, calcolando circa tre ore per il tratto più panoramico. Chi preferisce un ritmo più tranquillo può limitarsi al primo tratto e scendere poi verso Positano in auto o in battello.",
          "Positano, con le sue case rosa e ocra impilate sulla collina fino alla spiaggia della Marina Grande, è la cartolina più riconoscibile della costiera — ed è anche, nonostante la fama, un paese che si lascia ancora scoprire nei vicoli lontani dal corso principale."
        ],
        note: ["Si torna a dormire a Praiano (seconda notte), oppure si pernotta direttamente a Positano."],
        ristoranti: ["Taverna del Leone"]
      },
      {
        label: "Giorno settimo",
        titolo: "Il congedo, fra vigne e limoni",
        paragrafi: [
          "L'ultima mattina si può dedicare a Positano stessa — la Chiesa di Santa Maria Assunta con la sua cupola maiolicata, un'ultima passeggiata fino alla Marina Grande — prima di imboccare la strada di rientro verso Salerno, che tocca ancora una volta l'entroterra di Tramonti: un'ultima sosta fra i vigneti, magari in una delle cantine storiche della zona, per portarsi a casa una bottiglia di Costa d'Amalfi prima di lasciare la costiera."
        ],
        note: ["Congedo: da Positano, collegamenti via mare per Salerno, Sorrento e Napoli; l'aeroporto di Napoli Capodichino è a circa un'ora e mezza."],
        ristoranti: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Vietri sul Mare e Cetara", notti: "una notte",
          strutture: [
            { nome: "B&B Umberto", contatto: "Vietri sul Mare", testo: "Dimora storica nel centro antico di Vietri, camere spaziose con vista panoramica, a due passi dalle botteghe di ceramica." },
            { nome: "La Corte dei Naviganti", contatto: "Cetara, 170 m dalla spiaggia", testo: "B&B nel cuore del borgo dei pescatori, camere climatizzate, WiFi gratuito in tutte le aree." }
          ]
        },
        {
          zona: "Amalfi", notti: "tre notti",
          strutture: [
            { nome: "Borgo Santandrea", contatto: "Via Giovanni Augustariccio 33, Amalfi", testo: "Sospeso sulla scogliera fra Amalfi e Conca dei Marini, terrazze a picco sul mare e accesso privato alla spiaggia." }
          ]
        },
        {
          zona: "Praiano / Positano", notti: "due notti",
          strutture: [
            { nome: "Hotel Casa Angelina", contatto: "Via Capriglione 147, Praiano", testo: "Design essenziale bianco su bianco, terrazze panoramiche e accesso diretto al mare." },
            { nome: "San Pietro", contatto: "Via Laurito 2, Positano", testo: "Icona storica dell'ospitalità di Positano, giardini terrazzati e spiaggia privata — per chi vuole chiudere il viaggio in bellezza." }
          ]
        }
      ],

      tavola: {
        intro: "Gli indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso. Ogni voce, dove presente in Guida, mostra automaticamente indirizzo e telefono aggiornati.",
        voci: [
          { nome: "Acqua Pazza" },
          { nome: "Al Convento" },
          { nome: "Lido Azzurro" },
          { nome: "La Caravella", storia: "costiera-caravella" },
          { nome: "Osteria Reale" },
          { nome: "Alfonso a Mare" },
          { nome: "Taverna del Leone" }
        ]
      },

      approfondimenti: [
        {
          titolo: "Le ceramiche di Vietri e la colatura di Cetara",
          testo: "La ceramica di Vietri affonda le radici in tradizioni antichissime, ma è fra Ottocento e Novecento che la lavorazione a mano è diventata un marchio di qualità riconosciuto in tutto il mondo — oggi ogni pezzo autentico porta la firma del proprio ceramista, a differenza dei souvenir generici che si trovano nei negozi meno seri. A pochi minuti, Cetara custodisce un sapere diverso ma altrettanto identitario: la colatura di alici, il liquido ambrato che sgocciola dalla salagione delle alici in botti di legno, oggi Presidio Slow Food e Denominazione di Origine Protetta. Un cucchiaio su un piatto di spaghetti conditi solo con aglio, olio e prezzemolo racchiude in un assaggio l'intera cultura marinara di questo tratto di costa."
        },
        {
          titolo: "Il vino e il formaggio dell'entroterra",
          testo: "La Costa d'Amalfi DOC, riconosciuta dal 1995, nasce quasi interamente su terrazzamenti che l'uomo ha strappato a mano alla montagna — a Tramonti su viti secolari prefillossera, a Furore su pareti raggiungibili solo a piedi. I vitigni sono in gran parte autoctoni: aglianico, tintore e piedirosso per i rossi strutturati di Tramonti, fenile, ginestra e ripoli per i bianchi più aromatici di Furore. Ad accompagnarli, il Provolone del Monaco DOP: pasta filata a forma di pera, prodotta con il latte delle mucche di razza agerolese allevate sui Monti Lattari, che dopo nove mesi di stagionatura sviluppa un sapore dolce e insieme intensamente aromatico."
        }
      ],

      aTavola: {
        titolo: "Che cosa cambia, curva dopo curva",
        testo: "A Vietri e Cetara la tavola è marinara e diretta: alici, tonno, la colatura su ogni cosa. Ad Amalfi si aggiunge la tradizione degli 'Ndunderi, la pasta più antica del Mediterraneo, e degli scialatielli; a Minori si assaggia la vera pasta artigianale della costiera, essiccata lentamente come un tempo. Salendo a Ravello e Tramonti la cucina si fa di terra: i formaggi di montagna, i vini rossi strutturati, la selvaggina nelle stagioni giuste. A Praiano e Positano il registro torna al mare, ma con un tocco più internazionale — il limone di Sorrento IGP, che qui diventa delizia, sorbetto, limoncello, accompagna ogni tavola dall'inizio alla fine del viaggio."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Napoli Capodichino", testo: "Il più collegato, a circa un'ora e mezza da Amalfi. Salerno-Pontecagnano è più vicino ma con pochi voli." },
      { titolo: "L'AUTO E IL TRAGHETTO", sotto: "meglio alternarli", testo: "La SS163 Amalfitana è splendida ma stretta e trafficata in alta stagione: i traghetti Travelmar collegano Salerno, Vietri, Cetara, Maiori, Minori, Amalfi, Positano e Praiano, spesso più comodi dell'auto fra un paese e l'altro." },
      { titolo: "LE ZONE A TRAFFICO LIMITATO", sotto: "Amalfi, Positano, Ravello", testo: "Conviene lasciare l'auto nei parcheggi esterni e muoversi a piedi o con i bus locali SITA." },
      { titolo: "IL SENTIERO DEGLI DEI", sotto: "partire presto", testo: "In alta stagione si affolla rapidamente; le prime ore del mattino restano le più godibili, con temperature più fresche." },
      { titolo: "LA STAGIONE", sotto: "maggio-giugno, settembre-ottobre", testo: "Clima ideale, mare già caldo, meno folla che in piena estate. Ad agosto Positano e Amalfi diventano molto affollate: prenotare con largo anticipo." },
      { titolo: "SE I GIORNI DIVENTANO CINQUE", sotto: "cosa si toglie", testo: "Una sola notte fra Vietri e Cetara (Maiori e Minori diventano tappe di passaggio verso Amalfi) e una sola notte a Praiano, rinunciando alla giornata piena sul Sentiero degli Dei." },
      { titolo: "SE SI VUOLE ALLUNGARE", sotto: "Nerano, un giorno in più", testo: "Oltre Positano, verso la penisola sorrentina, Nerano resta uno degli angoli meno noti della costiera: mare più intimo, e gli spaghetti alle zucchine che hanno reso celebri le trattorie della baia di Marina del Cantone." }
    ],

    numeriUtili: [
      "Traghetti — Travelmar, collegamenti fra tutti i paesi della costiera, orari stagionali da verificare.",
      "Numeri di emergenza — 112 per qualunque emergenza; 1530 per il soccorso in mare."
    ]
  }

});
