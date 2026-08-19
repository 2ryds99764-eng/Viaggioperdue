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

    raccontoCollegato: "costiera",

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
          "Il pranzo è da Lido Azzurro, sul porticciolo di Amalfi: una terrazza a pochi centimetri dall'acqua e una cucina di mare che segue il pescato del giorno. La sera si torna alla Caravella, nel palazzo dei Piccolomini del XII secolo, dove il piatto di 'Ndunderi che nel 2003 vinse il Sole di Veronelli — poi ritirato per ventun anni in segno di rispetto verso il grande gastronomo — è tornato in carta nella sua forma più antica; e dove il soufflé al limone nato per errore nel 1959, lo stesso anno del Nobel di Salvatore Quasimodo, porta ancora il nome che il poeta gli regalò: il Sole nel Piatto."
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
          { nome: "La Caravella", storia: "caravella" },
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
  },

  "cilento-alburni": {
    occhiello: "Un itinerario per due",
    titolo: "Da Paestum ad Aquara",
    sottotitolo: "otto giorni nel Cilento meno raccontato, dalla Baia degli Infreschi al cuore selvatico degli Alburni",
    regione: "Campania",
    copertina: "",
    tappe: ["Paestum","Agropoli","Castellabate","Acciaroli","Casal Velino","Palinuro","Scario","Sant'Angelo a Fasanella","Ottati","Roscigno Vecchia","Piaggine","Aquara","Controne","Caggiano"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "Il Cilento che si vede dai depliant è quello della costa: Acciaroli, Palinuro, le spiagge premiate ogni anno dalle bandiere blu. È un Cilento vero, ma è solo metà della storia. L'altra metà comincia dove la strada lascia il mare e sale verso l'interno, fino ai Monti Alburni — un massiccio calcareo che i cilentani chiamano \"le Dolomiti campane\", pieno di grotte, doline, gole e paesi che si contano sulle dita di due mani.",
      "Questo itinerario tiene insieme le due metà, con particolare attenzione a due luoghi che da soli meritano il viaggio: la Baia degli Infreschi, una delle spiagge più belle d'Italia secondo Legambiente, raggiungibile solo a piedi o in barca; e il territorio degli Alburni, dove un santuario scavato nella roccia, un borgo fantasma dichiarato Patrimonio UNESCO e un fagiolo bianco coltivato da secoli raccontano un Cilento che i più non vedono mai.",
      "C'è anche un terzo filo, meno visibile ma altrettanto presente: una manciata di produttori — un oleificio, una pasticceria agricola, un pizzaiolo di grani antichi, un vignaiolo, un'azienda di conserve, un coltivatore di fagioli — che si conoscono e si usano a vicenda, spesso senza che il visitatore se ne accorga. Lo stesso olio compare in tre tappe diverse del viaggio; lo stesso fagiolo attraversa l'intero itinerario prima di rivelarsi, l'ultimo giorno, nel campo dove nasce.",
      "Si comincia da Paestum, porta di accesso e sintesi perfetta di questa terra — i templi dorici meglio conservati al mondo, a due passi dal mare e dagli allevamenti che producono la mozzarella più celebre d'Italia. Si scende lungo la costa fino a Scario, dove si dedicano tre giorni alla Baia degli Infreschi e alle gole del Bussento. Si risale infine verso l'interno, attraverso Sant'Angelo a Fasanella e Roscigno Vecchia, fino al cuore degli Alburni: Aquara, dove chiude il viaggio.",
      "Otto giorni, sette notti, fra costa e montagna. Quello che segue non è una classifica. È un percorso possibile, con dentro gli indirizzi di chi lavora bene e da tempo — pescatori diventati ristoratori, un pasticcere di terza generazione, un vignaiolo che ha realizzato il sogno di suo padre. Il resto appartiene a chi viaggia."
    ],

    percorso: {
      intro: "Paestum per due notti, Scario per tre, Aquara per due, con l'ottavo giorno dedicato al congedo fra Controne e Caggiano. Circa centosessanta chilometri in tutto, con Paestum come unica base da cui ci si muove due volte senza cambiare hotel.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Paestum", km: "", testo: "Templi, Museo Archeologico, Tenuta Vannulo." },
        { giorno: "Giorno secondo", titolo: "Castellabate e Acciaroli", km: "andata e ritorno", testo: "San Marco, Punta Licosa, il paese di Hemingway." },
        { giorno: "Giorno terzo", titolo: "verso Scario", km: "60 km", testo: "Velia, L'Ammaccata, Palinuro." },
        { giorno: "Giorno quarto", titolo: "La Baia degli Infreschi", km: "", testo: "Escursione in barca da Scario." },
        { giorno: "Giorno quinto", titolo: "Le gole del Bussento", km: "", testo: "Morigerati, Torre Orsaia." },
        { giorno: "Giorno sesto", titolo: "verso gli Alburni", km: "70 km", testo: "Sant'Angelo a Fasanella, Pietre Levate a Ottati." },
        { giorno: "Giorno settimo", titolo: "Il cuore degli Alburni", km: "", testo: "Roscigno Vecchia, i dolci di Piaggine." },
        { giorno: "Giorno ottavo", titolo: "Aquara e congedo", km: "", testo: "Controne, Caggiano." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Paestum, dove la Magna Grecia è ancora in piedi",
        paragrafi: [
          "Paestum — Poseidonia per i greci che la fondarono nel VII secolo a.C. — custodisce i tre templi dorici meglio conservati al mondo: la Basilica dedicata a Hera, la più antica; il Tempio di Nettuno, il più imponente, costruito senza malta con blocchi incastrati fra loro; e il Tempio di Atena, isolato su un'altura all'estremità del sito. Le mura lunghe sette chilometri racchiudono ancora il foro romano e un anfiteatro solo parzialmente visibile. Il Museo Archeologico Nazionale, dall'altra parte della strada, custodisce la Tomba del Tuffatore: un uomo sospeso a mezz'aria fra due tavole di pietra dipinta, l'unico esempio di pittura funeraria greca arrivato fino a noi.",
          "Nel pomeriggio, a Contrada Vannulo, la famiglia Palmieri lavora a mano, ogni giorno, la mozzarella di bufala che dal 1988 ha reso celebre questo angolo di Cilento: un'azienda che affonda le radici nei primi del Novecento, quando il nonno dell'attuale titolare bonificò questa stessa terra per l'allevamento, e che dal 1996 è certificata biologica. La degustazione — su prenotazione — si accompagna alla visita del Museo della Civiltà Contadina e della Bottega della Pelle. Poco distante, sulle stesse colline che degradano verso gli scavi, altri due nomi meritano una sosta se il tempo lo consente: Antonino Mennella, che a Serre porta avanti dal 2003 l'oliveto secolare di Madonna dell'Olivo, e Francesco Vastola, che a Giungano conserva con Maida i sapori di stagione del Cilento — compresi, in vasetto, i fagioli di Controne che ritroveremo l'ultimo giorno."
        ],
        note: [
          "Si dorme a Paestum (prima delle due notti), alla Tenuta Duca Marigliano.",
          "Cena — Casa Coloni (il ristorante interno alla Tenuta) oppure La Pergola, Capaccio.",
          "Da prenotare — degustazione a Tenuta Vannulo, tel. 0828 727894."
        ],
        ristoranti: ["Tenuta Vannulo", "La Pergola"],
        produttori: [
          { nome: "Madonna dell'Olivo", url: "https://www.madonnaolivo.it" },
          { nome: "Maida", url: "https://www.maidaitaly.it" }
        ]
      },
      {
        label: "Giorno secondo",
        titolo: "Castellabate e il paese di Hemingway",
        paragrafi: [
          "San Marco di Castellabate ha prestato le sue vie ad alcune scene di Benvenuti al Sud: bandiera blu da anni, con la baia tutelata come area marina protetta. Da qui un sentiero costiero conduce in meno di due ore fino a Punta Licosa, dove la leggenda vuole che il nome derivi dalla sirena Leucosia. Ad Acciaroli, ultima tappa, si respira ancora l'atmosfera che negli anni Cinquanta ospitò Ernest Hemingway — oggi la zona è studiata dai ricercatori come una delle aree a più alta concentrazione di ultracentenari al mondo."
        ],
        note: [
          "Andata e ritorno da Paestum, senza cambiare hotel.",
          "Pranzo o cena a Castellabate o Acciaroli, a scelta."
        ],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Da Velia a Palinuro, verso Scario",
        paragrafi: [
          "Si lascia Paestum percorrendo la costa verso sud, fino a Casal Velino. Qui gli scavi di Velia — l'antica Elea greca — custodiscono la Porta Rosa e i resti della scuola filosofica che diede i natali a Parmenide e Zenone: il Cilento, prima di essere terra di mare, fu culla del pensiero occidentale. Si pranza da L'Ammaccata, dove Cristian Santomauro ha riportato in vita l'antica pizza cilentana con grani antichi macinati sul posto, condita con l'olio di Madonna dell'Olivo — lo stesso oliveto visitato il primo giorno.",
          "Nel pomeriggio si prosegue verso Palinuro: la Grotta Azzurra, raggiungibile solo in barca, e l'Arco Naturale, che si tuffa direttamente in mare. Si chiude la giornata a Scario, base per i prossimi tre giorni."
        ],
        note: [
          "Si dorme a Scario (prima delle tre notti), a La Francesca.",
          "Pranzo — L'Ammaccata, Via Quattroponti, Casal Velino, tel. 392 7938827."
        ],
        ristoranti: ["L'Ammaccata"],
        produttori: []
      },
      {
        label: "Giorno quarto",
        titolo: "La Baia degli Infreschi, in barca da Scario",
        paragrafi: [
          "Più volte eletta da Legambiente la spiaggia più bella d'Italia, la Baia degli Infreschi si raggiunge solo a piedi o in barca — nessuna strada arriva fin lì, ed è proprio questo ad averla preservata. Da Scario, Mega Tourist organizza l'uscita in barca direttamente dal porto, costeggiando grotte marine e insenature della costa della Masseta prima di fermarsi a fare il bagno nella baia. Chi preferisce camminare può comunque raggiungere il Sentiero degli Infreschi dal lato di Marina di Camerota, ma partendo da Scario la barca resta la soluzione più semplice."
        ],
        note: [
          "Si dorme di nuovo a Scario (seconda notte).",
          "Da prenotare — Mega Tourist, Piazzale Porto, Scario, tel. 334 2918553."
        ],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "Le gole del Bussento",
        paragrafi: [
          "Il fiume Bussento, nei pressi di Morigerati, scompare improvvisamente sottoterra per riemergere chilometri più avanti — un fenomeno carsico che l'Oasi WWF locale rende visitabile con un breve percorso guidato. A Torre Orsaia, poco distante, si pranza o si cena da Trattoria Da Addolorata, prima di risalire verso i primi contrafforti degli Alburni."
        ],
        note: [
          "Si dorme per l'ultima volta a Scario (terza notte).",
          "Pranzo o cena — Trattoria Da Addolorata, Via Pulsaria 16, Torre Orsaia, tel. 0974 985669."
        ],
        ristoranti: ["Trattoria Da Addolorata"],
        produttori: []
      },
      {
        label: "Giorno sesto",
        titolo: "Sant'Angelo a Fasanella e la cantina di Ottati",
        paragrafi: [
          "Sant'Angelo a Fasanella custodisce la Grotta dell'Angelo, dove intorno all'anno Mille si insediò una comunità benedettina, e l'Antece, un guerriero scolpito nella roccia forse nel V secolo a.C. — grotta e figura entrambe tutelate dall'UNESCO. A Ottati, pochi minuti più a valle, Nico Sudano ha realizzato il sogno di suo padre Pietro: Pietre Levate, la cantina che da poche piante di famiglia produce oggi vini in anfora fra le espressioni più originali dell'enologia cilentana."
        ],
        note: [
          "Si dorme ad Aquara (prima delle due notti)."
        ],
        ristoranti: [],
        produttori: [
          { nome: "Pietre Levate", url: "https://www.pietrelevate.it" }
        ]
      },
      {
        label: "Giorno settimo",
        titolo: "Roscigno Vecchia e i dolci di Piaggine",
        paragrafi: [
          "Roscigno Vecchia: un intero paese abbandonato dopo le frane di inizio Novecento e lasciato esattamente come i suoi ultimi abitanti lo lasciarono, soprannominato \"la Pompei del Novecento\". Chi ha tempo può allungare fino a Corleto Monforte o alle Gole del Calore; oppure, in direzione opposta, fino a Piaggine, dove da tre generazioni la famiglia Macellaro pratica quella che Pietro Macellaro chiama \"pasticceria agricola\" — panettoni, cioccolato e dolci da forno che raccontano il territorio quanto un piatto salato."
        ],
        note: [
          "Si dorme di nuovo ad Aquara.",
          "Pranzo — Carmine Nicoletti (Laurino) o La Piazzetta di Valle dell'Angelo."
        ],
        ristoranti: ["Carmine Nicoletti", "La Piazzetta di Valle dell'Angelo"],
        produttori: [
          { nome: "Pietro Macellaro", url: "https://www.pietromacellaro.it" }
        ]
      },
      {
        label: "Giorno ottavo",
        titolo: "Aquara, il cuore degli Alburni, e il congedo a Caggiano",
        paragrafi: [
          "Aquara chiude il viaggio dove il territorio degli Alburni si fa più intimo: un paese piccolo, affacciato sulla valle del Calore, dove Bianca Mucciolo porta avanti La Rosa Bianca. Prima di ripartire, una deviazione a Controne vale una sosta: qui, da oltre quarant'anni, Michele Ferrante coltiva il vero fagiolo di Controne, insieme a ceci, cicerchie e un peperoncino che porta il nome dello stesso paese — gli stessi ingredienti già incrociati, senza saperlo, nei vasetti di Maida il primo giorno. A Caggiano, ultima tappa, si pranza a Le Grotticelle, la pizzeria di Angelo Rumolo nello storico Castello: una delle sue pizze porta in cima proprio la buccia di limone essiccata di Ferrante — un'ultima eco dello stesso produttore incontrato lungo tutta la settimana."
        ],
        note: [
          "Congedo: da Aquara, Salerno e l'A2 sono a circa un'ora di auto.",
          "Pranzo — Le Grotticelle, Caggiano, tel. 0975 1966171."
        ],
        ristoranti: ["Le Grotticelle", "La Rosa Bianca"],
        produttori: [
          { nome: "Michele Ferrante", url: "https://www.micheleferrante.it" }
        ]
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Paestum", notti: "due notti",
          strutture: [
            { nome: "Tenuta Duca Marigliano", contatto: "Via Tavernelle 86, Paestum, tel. 0828 721297", testo: "Dimora nobiliare dell'Ottocento restaurata, di fronte alla Porta Aurea, con il ristorante interno Casa Coloni dello chef Luigi Coppola." },
            { nome: "Boutique Hotel Esplanade", contatto: "Via Poseidonia 291, tel. 0828 851005", testo: "Dal 1980, gestione Pagano, giardino e piscina tra la pineta." }
          ]
        },
        {
          zona: "Scario", notti: "tre notti",
          strutture: [
            { nome: "La Francesca", contatto: "Via Gloria Bortolotti De Poli 8, tel. 0974 986068", testo: "Ospitalità in vecchie case ristrutturate, a pochi passi dal porto." }
          ]
        },
        {
          zona: "Aquara e gli Alburni", notti: "due notti",
          strutture: [
            { nome: "Agriturismo Il Marchese", contatto: "Aquara, 3 km dal centro", testo: "Crocevia fra la Valle del Calore e gli Alburni, quattro camere confortevoli." },
            { nome: "Agriturismo Villa Vea", contatto: "Aquara", testo: "Circondato da giardini, vista sul Parco Nazionale del Cilento, piscina all'aperto." }
          ]
        }
      ],

      tavola: {
        intro: "Gli indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso.",
        voci: [
          { nome: "Tenuta Vannulo" },
          { nome: "La Pergola", storia: "lapergola" },
          { nome: "Il Rosso e il Mare" },
          { nome: "L'Ammaccata" },
          { nome: "Trattoria Da Addolorata" },
          { nome: "Carmine Nicoletti" },
          { nome: "La Piazzetta di Valle dell'Angelo" },
          { nome: "Le Grotticelle" },
          { nome: "La Rosa Bianca", storia: "rosabianca" }
        ]
      },

      approfondimenti: [
        {
          titolo: "Le grotte degli Alburni",
          testo: "Il massiccio degli Alburni è un altopiano calcareo lungo la Valle del Sele e la Valle del Tanagro, soprannominato \"le Dolomiti campane\" per le pareti bianchissime che si vedono dalla piana. La sua natura carsica ha scavato quasi duemila cavità: le più note si visitano a Castelcivita e a Pertosa-Auletta, quest'ultima l'unica grotta non marina d'Italia attraversata da un corso d'acqua navigabile. Chi preferisce un'esperienza più raccolta può scegliere la Grotta dell'Angelo di Sant'Angelo a Fasanella, o la piccola Grotta di Sant'Elia a Postiglione, il cui ingresso permette nei giorni più tersi di scorgere Capri."
        },
        {
          titolo: "Il fagiolo bianco di Controne",
          testo: "Controne è terra di ulivi e di fagioli, incastonata fra i campi e le pendici degli Alburni. Il suo fagiolo — piccolo, rotondo, bianco perla, senza macchie né occhio — ha una buccia così sottile da non aver bisogno di ammollo e da non spaccarsi in cottura: una rarità che gli è valsa il Presidio Slow Food. Da oltre quarant'anni, Michele Ferrante ne è uno dei custodi principali, insieme a ceci, cicerchie e a un peperoncino che porta il nome dello stesso paese: semina a luglio, raccoglie a novembre, quando in paese si tiene la sagra dedicata. Si mangia al tozzetto — in bianco, con una fresella — oppure con la scarola, o in una semplice pasta e fagioli."
        }
      ],

      aTavola: {
        titolo: "Che cosa cambia dalla costa alla montagna",
        testo: "Sulla costa la tavola segue il pescato: alici, totani, gamberi, la mozzarella di bufala di Vannulo che accompagna tutto il tratto da Paestum in giù. Salendo verso gli Alburni il registro cambia: i fagioli di Controne, i funghi e i tartufi dei boschi di faggio, i formaggi di malga. Il filo che tiene insieme le due cucine, dalla costa alla montagna, è l'olio di Madonna dell'Olivo — lo stesso che condisce la pizza di Casal Velino e i dolci di Piaggine — a dimostrazione che il Cilento, da nord a sud, resta prima di tutto terra di ulivi."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Napoli e Salerno Costa d'Amalfi", testo: "Napoli Capodichino è il più collegato, a circa un'ora e mezza da Paestum. L'aeroporto di Salerno-Pontecagnano è più vicino ma con meno voli." },
      { titolo: "L'AUTO", sotto: "indispensabile", testo: "Nessuna alternativa valida per raggiungere gli Alburni, Torre Orsaia o Scario fuori stagione; d'estate un servizio di battelli collega alcuni tratti della costa." },
      { titolo: "LA BAIA DEGLI INFRESCHI", sotto: "in barca da Scario", testo: "Con base a Scario, la soluzione più semplice è l'uscita in barca di Mega Tourist, direttamente dal porto. Il sentiero a piedi resta un'alternativa, ma parte dal lato opposto, verso Marina di Camerota." },
      { titolo: "LE CHIUSURE", sotto: "da verificare per telefono", testo: "Molte trattorie dell'entroterra chiudono un giorno infrasettimanale che cambia con la stagione; la Grotta dell'Angelo si visita meglio con una guida locale." },
      { titolo: "LA STAGIONE", sotto: "maggio-giugno, settembre", testo: "Il mare è già godibile a maggio e ancora caldo a settembre, con meno folla che in piena estate. Ad agosto la Baia degli Infreschi e Roscigno Vecchia sono molto frequentate: partire presto la mattina aiuta." },
      { titolo: "SE I GIORNI DIVENTANO SETTE", sotto: "cosa si toglie", testo: "Una notte in meno a Scario, unendo la giornata delle Gole del Bussento a quella dell'arrivo (Velia e Palinuro nella stessa giornata di Torre Orsaia): si perde un po' di respiro, ma nessuna tappa." }
    ],

    numeriUtili: [
      "Da prenotare — escursione in barca alla Baia degli Infreschi con Mega Tourist, Piazzale Porto, Scario, tel. 334 2918553; degustazione a Tenuta Vannulo, tel. 0828 727894.",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza; 1530 per il soccorso in mare."
    ]
  },

  "corsica": {
    occhiello: "Un itinerario per due",
    titolo: "Da Bastia a Bastia",
    sottotitolo: "dieci giorni intorno alla Corsica, tra cittadelle, scogliere e ovili trasformati in alberghi",
    regione: "Francia",
    areaGeografica: "Corse, France",
    copertina: "",
    tappe: ["Bastia","Corte","Ajaccio","Sartène","Filitosa","Campomoro","Roccapina","Bonifacio","Porto-Vecchio","Zonza","Aleria"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "La Corsica si lascia attraversare una volta sola, se si vuole farlo bene: un giro che parte e torna a Bastia, toccando l'entroterra montano, il sud arcaico del Golfo di Valinco, l'estremo sud fra Bonifacio e Porto-Vecchio, e il cuore selvaggio dell'Alta Rocca prima di richiudersi sulla costa. Dieci giorni, quattro basi, ognuna scelta fra gli indirizzi del Cercle des Grandes Maisons Corses — l'associazione che riunisce gli alberghi più particolari dell'isola, quelli che non assomigliano a nessun altro.",
      "Si comincia e si finisce a Bastia, città portuale che guarda l'Italia più di quanto guardi Parigi. Si sale poi all'unica cittadella dell'interno, Corte, capitale della breve indipendenza corsa. Si scende ad Ajaccio, città di Napoleone, prima di raggiungere il Golfo di Valinco e Sartène, \"la più corsa delle città corse\". Da lì, l'estremo sud: Bonifacio aggrappata alle sue scogliere bianche, e Porto-Vecchio con le spiagge più fotografate dell'isola. Si risale infine attraverso l'Alta Rocca, sotto le Aiguilles di Bavella, prima del ritorno lungo la costa orientale.",
      "Quello che segue non è una classifica. È un percorso possibile, con dentro gli indirizzi di chi lavora bene — ovili di pastori trasformati in ville di lusso, trattorie di famiglia sotto le mura di una cittadella, pasticcerie che aprono la stessa porta dal 1921. Il resto appartiene a chi viaggia."
    ],

    percorso: {
      intro: "Bastia per una notte, Corte per una, Sartène per due, Porto-Vecchio per due, Zonza per una, di nuovo Bastia per due prima del congedo. Nove notti in tutto, quattro alberghi diversi oltre a quello di partenza.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Bastia", km: "", testo: "Cittadella, Terra Vecchia, il Vieux Port." },
        { giorno: "Giorno secondo", titolo: "Corte", km: "", testo: "La cittadella dell'interno, le Gole della Restonica." },
        { giorno: "Giorno terzo", titolo: "Ajaccio e il Golfo di Valinco", km: "", testo: "La città di Napoleone, arrivo al Domaine de Murtoli." },
        { giorno: "Giorno quarto", titolo: "Sartène, Filitosa, le spiagge del Valinco", km: "", testo: "Filitosa, Campomoro, il Leone di Roccapina." },
        { giorno: "Giorno quinto", titolo: "Bonifacio", km: "", testo: "La Scala del Re d'Aragona, le scogliere." },
        { giorno: "Giorno sesto", titolo: "Porto-Vecchio", km: "", testo: "Il centro storico, Palombaggia, Santa Giulia." },
        { giorno: "Giorno settimo", titolo: "Il Col de Bavella", km: "", testo: "Le Aiguilles, verso l'Alta Rocca." },
        { giorno: "Giorno ottavo", titolo: "Il ritorno, costa orientale", km: "", testo: "Aleria, la piana, di nuovo Bastia." },
        { giorno: "Giorno nono", titolo: "Erbalunga e il congedo", km: "", testo: "Un'ultima uscita breve dal Capo Corso." },
        { giorno: "Giorno decimo", titolo: "Congedo", km: "", testo: "Partenza da Bastia." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Bastia, la porta d'ingresso",
        paragrafi: [
          "Bastia si divide in tre quartieri che si visitano in sequenza naturale: Place Saint-Nicolas, la piazza lunga trecento metri all'ombra delle palme; Terra Vecchia, il dedalo di vicoli intorno al Vieux Port, con la facciata barocca di Saint-Jean-Baptiste, la chiesa più grande di Corsica; e la Cittadella — Terra Nova — costruita dai genovesi fra Quattro e Seicento, raggiungibile a piedi dal Jardin Romieu. Il tramonto visto dai bastioni, con il Mediterraneo che si tinge di rosa, è il modo giusto per cominciare."
        ],
        note: [
          "Si dorme a Bastia, all'Hôtel des Gouverneurs, nella Cittadella.",
          "Cena — La Table de la Corniche, San-Martino-di-Lota, in alto sopra la città, chef Quentin Sanchez."
        ],
        ristoranti: ["La Table de la Corniche"],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "Corte, il cuore della Corsica",
        paragrafi: [
          "Si lascia la costa per l'unica cittadella interna dell'isola: Corte, capitale della breve indipendenza corsa sotto Pasquale Paoli nel Settecento, oggi sede dell'unica università dell'isola. La Cittadella, costruita nel 1419, domina il borgo dal \"Nido dell'Aquila\" e ospita il Museo della Corsica, con una delle collezioni etnografiche più ricche sulla cultura dell'isola. Da Piazza Gaffory — dedicata al leader della rivoluzione contro i genovesi, assassinato nel 1753, la cui casa porta ancora i fori dei proiettili — si sale al Belvedere per la vista sulle valli della Restonica e del Tavignano.",
          "Nel pomeriggio, le Gole della Restonica: sette chilometri di strada stretta che risalgono la valle fino ai laghi glaciali di Melo e Capitello, fra piscine naturali dove è possibile fare il bagno."
        ],
        note: [
          "Si dorme a Corte, al Dominique Colonna.",
          "Cena — U Museu, Rampe Ribanelle, ai piedi delle mura della cittadella."
        ],
        ristoranti: ["U Museu"],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Ajaccio e l'arrivo nel Golfo di Valinco",
        paragrafi: [
          "Ajaccio si visita sulle tracce del suo cittadino più celebre: la Maison Bonaparte, casa natale dell'imperatore nel 1769, oggi museo nazionale con gli arredi originali; la Cattedrale di Santa Maria Assunta, dove fu battezzato; Place Foch, con la statua di Napoleone Primo Console e la fontana dei Quattro Leoni. Il mercato coperto del Casone, aperto ogni mattina, resta il modo più diretto per assaggiare salumi, formaggi e miele della tradizione corsa prima di rimettersi in viaggio verso sud.",
          "Nel tardo pomeriggio si scende verso sud, fino al Domaine de Murtoli: duemilacinquecento ettari fra mare e macchia mediterranea, venti antichi ovili di pastori restaurati come alloggi indipendenti, tre ristoranti diversi — uno scavato in una grotta a terrazze — e una spiaggia privata. Probabilmente l'indirizzo più particolare di tutta la Corsica."
        ],
        note: [
          "Si dorme al Domaine de Murtoli, Sartène (prima delle due notti).",
          "Cena — La Table de la Ferme, il ristorante interno del Domaine."
        ],
        ristoranti: ["La Table de la Ferme"],
        produttori: []
      },
      {
        label: "Giorno quarto",
        titolo: "Sartène, Filitosa e le spiagge del Valinco",
        paragrafi: [
          "Sartène — \"la più corsa delle città corse\" — è una città medievale di granito grigio, costruita ad anfiteatro sul golfo. La Place de la Libération è il cuore della vita cittadina; il quartiere di Santa Anna custodisce il nucleo medievale, viuzze strette fra case alte. Ogni Venerdì Santo vi si svolge il Catenacciu, processione penitenziale che risale al Medioevo.",
          "Filitosa è il sito preistorico più importante di Corsica, Patrimonio UNESCO: statue-menhir antropomorfe dell'età del Bronzo, scoperte nel 1946 da un contadino che arava il campo. Campomoro, borgo di pescatori sul golfo, è dominato dalla torre genovese più alta di Corsica, quindici metri, del Cinquecento, con una spiaggia di sabbia bianca e acque turchesi. Roccapina chiude la giornata: il celebre Leone di Roccapina, una formazione rocciosa naturale che dalla costa sembra davvero un leone accovacciato, accanto a una spiaggia selvaggia fra le più fotografate del sud dell'isola."
        ],
        note: ["Si dorme di nuovo al Domaine de Murtoli."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "Bonifacio, la città delle scogliere",
        paragrafi: [
          "Bonifacio si raggiunge da Sartène in circa un'ora, e si annuncia da lontano: una città bianca aggrappata a una scogliera calcarea a strapiombo sul mare, visibile fin dalla Sardegna nei giorni tersi. La Cittadella medievale, protetta dal Bastione dello Stendardo, custodisce vicoli e piazzette dove il tempo sembra essersi fermato; ma l'esperienza che nessuno dimentica è la discesa della Scala del Re d'Aragona, centottantasette gradini scavati nella roccia fino quasi al livello del mare — una leggenda vuole scavata in una notte sola dalle truppe aragonesi, la storia più probabilmente opera dei monaci francescani per raggiungere una sorgente d'acqua dolce.",
          "Nel centro storico, la Pasticceria Sorba porta avanti dal 1921, di padre in figlio, le specialità dolciarie bonifaciane — una sosta da non saltare. Da non perdere anche una gita in barca sotto le scogliere, l'unico modo per apprezzare davvero la scala vista dal basso."
        ],
        note: [
          "Si dorme al Grand Hôtel de Cala Rossa, Lecci (prima delle due notti).",
          "Pranzo o cena — La Loggia, accanto alla chiesa di Sainte-Marie-Majeure, nella cittadella di Bonifacio."
        ],
        ristoranti: ["La Loggia"],
        produttori: [
          { nome: "Pasticceria Sorba", url: "https://bonifacio.it" }
        ]
      },
      {
        label: "Giorno sesto",
        titolo: "Porto-Vecchio e le spiagge del golfo",
        paragrafi: [
          "Porto-Vecchio, la \"Città del Sale\" per le saline attive fra Sette e Ottocento, ha un centro storico che vale una passeggiata a sé: la cittadella genovese, la Rue Borgo con le sue botteghe, Piazza della Repubblica con il Patio, antica infermeria in pietra. Ma il vero motivo per cui il mondo la conosce sono le spiagge che la circondano, nessuna raggiungibile a piedi dal centro ma tutte a pochi minuti d'auto: Palombaggia, sabbia bianca fra le pinete di pini marittimi, di fronte alle Isole Cerbicali; e Santa Giulia, una baia più riparata, quasi una laguna, con uno stagno naturale alle spalle della spiaggia. Il Grand Hôtel de Cala Rossa, dove si dorme, si trova esattamente fra le due, sulla sua stessa penisola."
        ],
        note: [
          "Si dorme di nuovo al Grand Hôtel de Cala Rossa.",
          "Pranzo — Playa Baggia, sulla spiaggia di Palombaggia (Tamaricciu)."
        ],
        ristoranti: ["Playa Baggia"],
        produttori: []
      },
      {
        label: "Giorno settimo",
        titolo: "Il Col de Bavella, verso l'Alta Rocca",
        paragrafi: [
          "Da Porto-Vecchio la strada risale verso Zonza attraverso l'Alta Rocca, fino al Col de Bavella: milleduecentodiciotto metri, dominati dalle Aiguilles — guglie di granito rosa erose da trecento milioni di anni di vento e gelo, fra le immagini più fotografate di tutta la Corsica. Alla sommità del passo, la statua di Notre-Dame-des-Neiges veglia sul massiccio dal 1953, circondata da ex voto dei pastori della zona. Chi ha tempo può inoltrarsi per un paio d'ore fino al Trou de la Bombe, un'apertura naturale a forma di finestra scavata nella roccia."
        ],
        note: [
          "Si dorme al Domaine Le Mouflon d'Or, Zonza.",
          "Cena — A Népita, il ristorante gastronomico del Domaine."
        ],
        ristoranti: ["A Népita"],
        produttori: []
      },
      {
        label: "Giorno ottavo",
        titolo: "Il ritorno, lungo la costa orientale",
        paragrafi: [
          "Da Zonza si scende a Solenzara e si imbocca la piana orientale, l'unica vera pianura di Corsica. Vale una sosta ad Aleria, dove le rovine della colonia greco-romana di Alalia, fondata nel 564 a.C., custodiscono uno dei siti archeologici più importanti dell'isola. Il resto del tragitto corre lungo la costa fino a Bastia."
        ],
        note: ["Si dorme di nuovo a Bastia (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno nono",
        titolo: "Erbalunga e il congedo dal Capo Corso",
        paragrafi: [
          "Ultima giornata libera, da dedicare a un'ultima uscita breve: Erbalunga, venti minuti da Bastia, porticciolo variopinto sorvegliato da una torre genovese del Cinquecento, amato da generazioni di pittori per la luce del tardo pomeriggio. Oppure, per chi preferisce restare in città, un'ultima passeggiata fra il mercato di Terra Vecchia e i canistrelli appena sfornati di rue Napoléon."
        ],
        note: ["Si dorme per l'ultima volta a Bastia."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno decimo",
        titolo: "Congedo",
        paragrafi: [
          "Partenza da Bastia, con porto e aeroporto a pochi minuti dal centro — l'ultimo caffè si può ancora prendere in Place Saint-Nicolas, dove tutto era cominciato dieci giorni prima."
        ],
        note: ["Congedo: Bastia ha porto e aeroporto a pochi minuti dal centro."],
        ristoranti: [],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Bastia", notti: "quattro notti in totale, due soste",
          strutture: [
            { nome: "Hôtel des Gouverneurs", contatto: "3 bis Rue des Turquines, tel. +33 4 95 47 10 10", testo: "Boutique hotel di ventisette camere nella Cittadella, terrazza panoramica sul Vieux Port." }
          ]
        },
        {
          zona: "Corte", notti: "una notte",
          strutture: [
            { nome: "Dominique Colonna", contatto: "Vallée de la Restonica", testo: "Terrazza affacciata sul fiume Tavignano, vicino all'università, ai piedi della valle della Restonica." }
          ]
        },
        {
          zona: "Sartène", notti: "due notti",
          strutture: [
            { nome: "Domaine de Murtoli", contatto: "Vallée de l'Ortolo, tel. +33 4 95 71 69 24", testo: "Duemilacinquecento ettari, venti ovili di pastori restaurati, tre ristoranti, spiaggia privata." }
          ]
        },
        {
          zona: "Porto-Vecchio", notti: "due notti",
          strutture: [
            { nome: "Grand Hôtel de Cala Rossa", contatto: "Route de Cala Rossa, Lecci, tel. +33 4 95 71 61 51", testo: "A conduzione familiare dal 1993, sulla spiaggia della penisola di Cala Rossa." }
          ]
        },
        {
          zona: "Zonza", notti: "una notte",
          strutture: [
            { nome: "Domaine Le Mouflon d'Or", contatto: "Pian di Santo, tel. +33 4 95 78 72 72", testo: "Dimora di inizio Novecento fra cedri del Libano e castagni secolari, ai piedi delle Aiguilles di Bavella." }
          ]
        }
      ],

      tavola: {
        intro: "Gli indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso.",
        voci: [
          { nome: "La Table de la Corniche" },
          { nome: "U Museu" },
          { nome: "La Table de la Ferme" },
          { nome: "La Loggia" },
          { nome: "Playa Baggia" },
          { nome: "A Népita" }
        ]
      },

      approfondimenti: [
        {
          titolo: "Il Cercle des Grandes Maisons Corses",
          testo: "Ventuno indirizzi in tutta l'isola, dal Capo Corso a Bonifacio, uniti da un solo filo: appartengono tutti a famiglie, non a catene. Nato per riunire l'ospitalità corsa più autentica — ovili di pastori restaurati, dimore di fine Ottocento, hotel nati da un'unica casa di famiglia — il Cercle è oggi il modo più affidabile per riconoscere, isola per isola, gli indirizzi che non assomigliano a nessun altro. Quattro delle cinque tappe di questo viaggio appartengono ai suoi membri."
        }
      ],

      aTavola: {
        titolo: "Che cosa cambia, dal mare alla montagna",
        testo: "Sulla costa la cucina segue il pesce e i frutti di mare; salendo verso Corte e l'Alta Rocca, il registro cambia nel giro di un'ora di strada — cinghiale, brocciu (il formaggio fresco di pecora o capra, onnipresente dai cannelloni al fiadone), castagne macinate in farina. I canistrelli, i biscotti secchi profumati al vino o agli agrumi, accompagnano il viaggio dal primo giorno all'ultimo, in ogni pasticceria dell'isola."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI E I PORTI", sotto: "Bastia", testo: "Bastia è collegata via traghetto con Savona, Genova, Livorno, Nizza e Marsiglia; l'aeroporto di Poretta ha voli diretti dalle principali città italiane." },
      { titolo: "L'AUTO", sotto: "indispensabile", testo: "Necessaria per l'intero giro; le strade di montagna (Restonica, Bavella) sono strette e richiedono tempi più lunghi del previsto." },
      { titolo: "LE CITTADELLE", sotto: "sei in tutta l'isola", testo: "Bastia, Corte, Ajaccio, Bonifacio, Saint-Florent e Calvi: questo itinerario ne tocca quattro." },
      { titolo: "LA STAGIONE", sotto: "maggio-giugno, settembre", testo: "Le finestre migliori per clima e affluenza; ad agosto Bonifacio e le spiagge di Porto-Vecchio sono molto affollate." },
      { titolo: "SE I GIORNI DIVENTANO OTTO", sotto: "cosa si toglie", testo: "Si toglie la notte a Corte, visitata in giornata da Bastia, e si accorcia il ritorno saltando la sosta di Erbalunga." }
    ],

    numeriUtili: [
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza; 196 per il soccorso in mare in Francia."
    ]
  }

});
