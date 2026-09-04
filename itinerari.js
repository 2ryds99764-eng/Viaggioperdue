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
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_1980_fm3zve",
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
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_1938_cenqvj",
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
          { nome: "Pietre Levate", url: "https://www.pietrelevate.it" },
          { nome: "Il racconto di Ottati: Un Fico, Due Storie", url: "storia.html?s=ficobianco" }
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
          "Pranzo — Chalet Nicoletti (Laurino) o La Piazzetta di Valle dell'Angelo."
        ],
        ristoranti: ["Chalet Nicoletti", "La Piazzetta di Valle dell'Angelo"],
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
          { nome: "Chalet Nicoletti" },
          { nome: "La Piazzetta di Valle dell'Angelo" },
          { nome: "Le Grotticelle", storia: "grotticelle" },
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
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/FF018D39-020C-4114-8821-47D667E164C8_ee7uwx",
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
  },

  "langhe-monferrato": {
    occhiello: "Un itinerario per due",
    titolo: "Da Vezza d'Alba a Canelli",
    sottotitolo: "sei giorni tra le colline meno battute delle Langhe, dal Roero alle Cattedrali Sotterranee del Monferrato",
    regione: "Piemonte",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/725E03D0-B369-4DD5-92F4-4D1E06415D34_infujl",
    tappe: ["Vezza d'Alba","Guarene","Bossolasco","Murazzano","Paroldo","Castellino Tanaro","Cortemilia","Roccaverano","Bubbio","Olmo Gentile","Cessole","Loazzolo","Canelli","Asti"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "Ci sono le Langhe che tutti conoscono, quelle di Barolo e Barbaresco, delle Rocche celebri e delle cantine con la lista d'attesa. E c'è una Langa che si scopre solo scendendo più a sud, dove le colline si fanno più ripide e i paesi più piccoli: l'Alta Langa e, ancora oltre, la Langa Astigiana, dove la provincia di Cuneo cede il passo a quella di Asti senza che il paesaggio se ne accorga. Questo itinerario nasce lì, in quella zona meno fotografata ma non meno vera, e la attraversa da nord a sud e poi di nuovo verso nord-est, chiudendo il cerchio a Canelli e ad Asti.",
      "Si comincia dal Roero, sulla riva sinistra del Tanaro, dove le rocche di argilla si aprono in calanchi e l'uva Arneis matura all'ombra dei boschi. Si sale poi nell'Alta Langa, tra noccioleti, tome di pecora e paesi che si contano sulle dita di una mano, fino a toccare quasi la Liguria. Si scende infine nella Langa Astigiana, terra di torri medievali e di un vino passito che è la più piccola DOC d'Italia, prima di chiudere il viaggio nelle Cattedrali Sotterranee di Canelli e sotto i portici di Asti.",
      "Sei giorni sono la misura giusta per non correre: una notte nel Roero, due nell'Alta Langa, due nella Langa Astigiana, e un'ultima giornata tra Canelli e Asti prima di ripartire — Asti ha una stazione ben collegata, quindi non serve necessariamente un'altra notte per chiudere il viaggio.",
      "Quello che segue non è una classifica. È un percorso possibile, con dentro gli indirizzi di chi lavora bene e da tempo: trattorie di famiglia, agriturismi che fanno colazione con la marmellata dell'orto, cascine dove si dorme tra i noccioleti. Il resto — cosa vedere per primo, dove fermarsi più a lungo — appartiene a chi viaggia."
    ],

    percorso: {
      intro: "Vezza d'Alba per una notte, Bossolasco per due, Bubbio per due, con l'ultima giornata a cavallo fra Canelli e Asti. Circa centosessanta chilometri in tutto, mai più di quaranta minuti fra una tappa e l'altra.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Vezza d'Alba e il Roero", km: "", testo: "Arrivo, la Rocca del Castello, il Santuario della Madonna dei Boschi, cena in paese." },
        { giorno: "Giorno secondo", titolo: "verso l'Alta Langa", km: "45 km", testo: "Sosta breve ad Alba, poi le colline fino a Bossolasco, il paese delle rose." },
        { giorno: "Giorno terzo", titolo: "il cuore dell'Alta Langa", km: "40 km", testo: "Murazzano e la sua toma, Paroldo, Castellino Tanaro, Cortemilia e il suo castello." },
        { giorno: "Giorno quarto", titolo: "verso la Langa Astigiana", km: "35 km", testo: "San Benedetto Belbo e Fenoglio, il castello di Roccaverano, arrivo a Bubbio." },
        { giorno: "Giorno quinto", titolo: "il Giro delle Cinque Torri", km: "30 km", testo: "Olmo Gentile, Cessole, il passito di Loazzolo, il borgo remoto di Serole." },
        { giorno: "Giorno sesto", titolo: "Canelli e Asti", km: "40 km", testo: "Le Cattedrali Sotterranee, il Palio e la Collegiata di San Secondo, congedo." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Vezza d'Alba, la porta del Roero",
        paragrafi: [
          "Vezza d'Alba è un borgo millenario che guarda il Tanaro da una collina bassa, l'ultima prima che il Roero digradi verso la pianura. Il nucleo antico si raccoglie intorno ai resti della Rocca del Castello, un tempo dimora della famiglia Roero, raggiungibile a piedi lungo un sentiero che sale dal paese; poco distante, in cima a un'altra collina, il Santuario della Madonna dei Boschi custodisce un affresco gotico dell'Annunciazione del Quattrocento.",
          "Chi arriva nel primo pomeriggio ha il tempo di allungarsi fino a Guarene, dove il castello secentesco dei Roero — oggi residenza d'epoca — domina la valle, o fino a Canale, il paese più grande del Roero, con i suoi portici e l'Enoteca Regionale. È un buon modo per capire, prima ancora di sedersi a tavola, la differenza fra il Roero e le Langhe che si visiteranno nei giorni successivi: qui il vitigno principe è l'Arneis, bianco e profumato, mentre di là dal Tanaro regnano i rossi.",
          "La cena è a due passi da dove si dorme: a Vezza d'Alba lavora Di Vin Roero, dove Rosa Borlengo porta in tavola una cucina che segue il territorio senza cedere alla nostalgia."
        ],
        note: [
          "Si dorme a Vezza d'Alba.",
          "Cena — Di Vin Roero, Piazza San Bernardo 11, tel. 0173 65114 / 333 9013173: cucina del territorio, chef Rosa Borlengo."
        ],
        ristoranti: ["Di Vin Roero"],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "Verso l'Alta Langa, il paese delle rose",
        paragrafi: [
          "La strada verso sud attraversa Alba solo di striscio — merita una sosta per un caffè in via Maestra, non di più: la si scoprirà meglio in un altro viaggio, quello delle Langhe del vino. Da qui le colline cominciano a salire, i vigneti lasciano il posto ai noccioleti, e dopo una quarantina di chilometri di curve si arriva a Bossolasco, settecentocinquanta metri sul livello del mare, conosciuto ovunque come il paese delle rose.",
          "Bossolasco conquista prima ancora di entrarci: si lascia l'auto fuori dal centro storico e si trova una terrazza affacciata sulle colline, con le panchine messe lì apposta per fermarsi senza fare nulla di particolarmente utile. Rose ovunque, case di pietra, un parco — il Parco delle Rose Rare e Antiche — che costeggia il paese vecchio. Un tempo località di villeggiatura per gli artisti torinesi, oggi resta uno dei punti di riferimento per chi vuole dormire nel cuore dell'Alta Langa."
        ],
        note: ["Si dorme a Bossolasco (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Murazzano, Paroldo, Castellino Tanaro",
        paragrafi: [
          "Da Bossolasco si scende a Murazzano, borgo che dà il nome alla toma di pecora più celebre delle Langhe: la Murazzano DOP si assaggia nelle latterie del paese, che vale anche una salita fino alla Torre Medievale e al Palazzo Tovegni. Da qui la strada segue la dorsale fra i fiumi Tanaro e Belbo, passando accanto alla chiesetta romanica di San Sebastiano di Paroldo, fino a raggiungere il paese stesso — poche case raccolte intorno alla piazza, a un passo dal confine con la Liguria.",
          "A Paroldo si pranza da Trattoria Salvetti, gestita dalla famiglia Salvetti dal 1920: oggi è la terza generazione, con Clelia ai fornelli, a portare avanti una cucina di montagna che non ha mai avuto bisogno di reinventarsi. A pochi minuti, a Castellino Tanaro, la sera si chiude da Vecchia Osteria, un indirizzo di paese senza fronzoli, il tipo di posto che si trova solo chiedendo a chi ci vive.",
          "Chi ha ancora tempo nel pomeriggio può spingersi fino a Cortemilia, il centro più importante dell'Alta Langa, dominato dalla torre cilindrica duecentesca e da quel che resta del castello; o fino a Mombarcaro, il paese più alto delle Langhe, celebre per gli amaretti."
        ],
        note: [
          "Si dorme di nuovo a Bossolasco.",
          "Pranzo — Trattoria Salvetti, Via Coste 19, Paroldo, tel. 0174 789131 / 347 8904709: cucina di famiglia dal 1920, oggi con Clelia Salvetti.",
          "Cena — Vecchia Osteria, Via Roma 21, Castellino Tanaro, tel. 0174 785137: trattoria di paese, gestione Vilma."
        ],
        ristoranti: ["Trattoria Salvetti", "Vecchia Osteria"],
        produttori: []
      },
      {
        label: "Giorno quarto",
        titolo: "Da Fenoglio a Roccaverano, verso la Langa Astigiana",
        paragrafi: [
          "Si lascia l'Alta Langa cuneese passando da San Benedetto Belbo, paese piccolissimo ma presente in ogni pagina di Beppe Fenoglio: chi ha letto La Malora riconoscerà queste colline. Un percorso ad anello nel centro storico ripercorre i luoghi della Resistenza raccontati dallo scrittore.",
          "Da qui la strada scivola verso est, nella Langa Astigiana, dove il paesaggio cambia poco ma cambia provincia: si entra nel territorio del Giro delle Cinque Torri, antiche torri d'avvistamento dei marchesi del Carretto. La prima tappa è Roccaverano, la piccola capitale della zona e il paese più alto: la facciata in pietra del castello, con le sue tre bifore, fa da sipario a una chiesa rinascimentale che vi si specchia davanti, in una piazza che è già uno spettacolo da sola. È qui che nasce la Robiola di Roccaverano DOP, l'unico formaggio DOP italiano ancora fatto con latte di capra.",
          "Nel tardo pomeriggio si scende a Bubbio, il centro più grande della Langa Astigiana, nato su una terrazza di roccia con le cappelle sparse sulle colline intorno — quella di San Grato è la più panoramica."
        ],
        note: ["Si dorme a Bubbio (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "Il Giro delle Cinque Torri",
        paragrafi: [
          "La giornata segue, almeno in parte, l'antico cammino di crinale che univa le torri difensive della zona. Prima tappa Olmo Gentile, il più piccolo dei borghi della Langa Astigiana — il castello, l'osteria, il municipio, la chiesa, e a quanto pare molti gatti amichevoli. Qui si pranza da Ristorante della Posta da Geminio, dove Annita Lavagnino porta in tavola i castagneti e i noccioleti che circondano il paese.",
          "Nel pomeriggio la strada scende verso Cessole, borgo di pietra digradante verso il fiume, dove un tempo viveva il celebre guaritore di tutta la valle. Chi ha voglia di allungare il giro può deviare verso Loazzolo, il paese che dà il nome alla più piccola DOC d'Italia — un moscato passito ottenuto da vigne terrazzate, prodotto in quantità minime — o spingersi fino a Serole, il comune più remoto della provincia, dove una lapide ricorda la battaglia di Lepanto del 1571.",
          "La cena è a Cessole, al Ristorante Albergo Madonna della Neve, gestito dalla famiglia Cirio dal 1957, oggi ai fornelli con Piera e Francesca."
        ],
        note: [
          "Si dorme di nuovo a Bubbio.",
          "Pranzo — Ristorante della Posta da Geminio, Via Roma 4, Olmo Gentile, tel. 0144 953613: chef Annita Lavagnino.",
          "Cena — Ristorante Albergo Madonna della Neve, Regione Madonna della Neve 2, Cessole, tel. 0144 850402: famiglia Cirio dal 1957."
        ],
        ristoranti: ["Ristorante della Posta da Geminio", "Ristorante Albergo Madonna della Neve"],
        produttori: []
      },
      {
        label: "Giorno sesto",
        titolo: "Le Cattedrali Sotterranee, e il congedo ad Asti",
        paragrafi: [
          "Ultima tappa, Canelli: una ventina di minuti da Bubbio, e un cambio di scala completo. Sotto le strade del borgo si aprono le Cattedrali Sotterranee, oltre venti chilometri di cantine scavate nel tufo fra Sette e Ottocento, dove riposano ancora oggi le bottiglie di Asti Spumante e Moscato d'Asti delle case storiche — Bosca, Contratto, Coppo, Gancia. Riconosciute Patrimonio UNESCO nel 2014, si visitano su prenotazione diretta presso le cantine. Sopra terra, vale una passeggiata la Sternia, la via degli innamorati con vista sulle colline del moscato, e la Torre dei Contini, punto panoramico sulle Alpi e sull'Appennino ligure insieme.",
          "Da Canelli ad Asti sono meno di trenta chilometri. La città del Palio si visita in un pomeriggio: la Cattedrale di Santa Maria Assunta, fra le più grandi del Piemonte, e la Collegiata di San Secondo, che custodisce nella cripta le reliquie del patrono e, in una cappella laterale, i drappi delle edizioni più recenti del Palio — la corsa di cavalli che si corre la prima domenica di settembre ed è fra le più antiche d'Italia.",
          "Prima di ripartire, un'ultima tappa fuori le mura, nella frazione Rioscone: qui, alla Trattoria Rioscone, si chiude il viaggio come è cominciato — con una cucina di famiglia che non ha nulla da dimostrare a nessuno."
        ],
        note: [
          "Congedo: Asti ha una stazione ferroviaria ben collegata con Torino e Genova; non è necessario un ulteriore pernottamento.",
          "Pranzo o cena — Trattoria Rioscone, Frazione Rioscone 112, Asti, tel. 0141 212674: cucina di famiglia.",
          "Da prenotare — Cattedrali Sotterranee di Canelli: visite dirette presso le cantine Bosca, Contratto, Coppo o Gancia."
        ],
        ristoranti: ["Trattoria Rioscone"],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Vezza d'Alba", notti: "una notte",
          strutture: [
            { nome: "Le Cicale", contatto: "tel. — · roeroturismo.it", testo: "Tre camere doppie con bagno privato, gestite dalla signora Maria: colazione con marmellate e torte fatte in casa, miele di produzione propria, servita in giardino nella bella stagione." },
            { nome: "Agriturismo Il Pedaggio", contatto: "Strada Pedaggio 7/B, Guarene, tel. 0173 212673", testo: "Cascina secentesca ristrutturata ai piedi della collina di Guarene, con piscina e prodotti dell'azienda agricola a colazione." }
          ]
        },
        {
          zona: "Bossolasco e Alta Langa", notti: "due notti",
          strutture: [
            { nome: "Cascina Facelli", contatto: "Bossolasco · cascinafacelli.com", testo: "Bed & breakfast raffinato immerso nel silenzio dell'Alta Langa, piscina privata, a 30 minuti dal mare ligure e da Alba." },
            { nome: "La Panoramica", contatto: "Bossolasco", testo: "Ventitré camere doppie e una suite, gestione della famiglia Albarello da oltre trent'anni, cucina tradizionale in loco." },
            { nome: "Casa di Langa", contatto: "Località Talloria 1, Cerretto Langhe · casadilanga.com", testo: "Boutique hotel cinque stelle con spa e piscina panoramica, per chi cerca un soggiorno più curato nella stessa zona." }
          ]
        },
        {
          zona: "Bubbio e Langa Astigiana", notti: "due notti",
          strutture: [
            { nome: "Tre Colline in Langa", contatto: "Bubbio · agriturismo.it", testo: "Vecchia cascina del 1830 restaurata, camere dedicate ai prodotti dell'azienda (Pesco, Nocciola, Moscato), cena con carta dei vini locali e maiale alle nocciole." },
            { nome: "Agriturismo Mondo", contatto: "Bubbio", testo: "Azienda agricola di famiglia fra vigneti e noccioleti, camere e mini-appartamento ricavati nella cascina, colazione con le conserve dell'orto." }
          ]
        }
      ],

      tavola: {
        intro: "I sei indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso, con orari da verificare telefonicamente il giorno prima — come sempre, fuori stagione qualche chiusura può cambiare.",
        voci: [
          { nome: "Di Vin Roero" },
          { nome: "Trattoria Salvetti" },
          { nome: "Vecchia Osteria" },
          { nome: "Ristorante della Posta da Geminio" },
          { nome: "Ristorante Albergo Madonna della Neve" },
          { nome: "Trattoria Rioscone" }
        ]
      },

      approfondimenti: [
        {
          titolo: "La Robiola di Roccaverano",
          testo: "È l'unico formaggio DOP italiano ancora prodotto con solo latte di capra — o con capra in prevalenza, secondo il disciplinare più recente, che ammette una piccola quota di latte vaccino od ovino. Nasce sugli stessi pascoli scoscesi della Langa Astigiana attraversati in questo itinerario, dove le capre si arrampicano su versanti che nessuna mucca affronterebbe. La forma è cilindrica, la pasta morbida e leggermente acidula da giovane, più decisa e piccante dopo qualche settimana di stagionatura. Si trova nelle latterie di Roccaverano e nei caseifici sparsi fra Bubbio, Olmo Gentile e Loazzolo — chiedere direttamente ai ristoranti dove l'hanno comprata è spesso il modo più veloce per risalire al produttore giusto."
        },
        {
          titolo: "Nocciole, Moscato e un passito piccolissimo",
          testo: "La Nocciola Piemonte IGP, varietà Tonda Gentile, accompagna la cucina di tutto il percorso: nei dolci, nei ripieni, spesso semplicemente tostata come apertura del pasto. Nei calici, il territorio racconta due storie diverse. Ad Asti e Canelli si beve la spuma dolce dell'Asti Spumante DOCG e del Moscato d'Asti, gli stessi vini che riposano nelle Cattedrali Sotterranee. Salendo verso la Langa Astigiana, a Loazzolo si produce invece un moscato passito da vigne terrazzate — la Loazzolo DOC, fra le denominazioni più piccole d'Italia, con una manciata di ettari e una manciata di produttori. Non è un vino che si trova ovunque: se lo si incontra in carta, vale la pena approfittarne."
        }
      ],

      aTavola: {
        titolo: "Che cosa cambia, chilometro dopo chilometro",
        testo: "Nel Roero la tavola si apre con l'Arneis, bianco profumato che qui nasce, e con i primi tajarin al tartufo quando è stagione. Salendo in Alta Langa il registro cambia: la toma di Murazzano, i plin ripieni di arrosto, gli agnolotti al tovagliolo, la bagna cauda quando le sere si fanno fredde, gli amaretti di Mombarcaro per chiudere. Nella Langa Astigiana la robiola di capra prende il posto delle tome vaccine, e i noccioleti si fanno più fitti — la nocciola compare ovunque, dai dolci ai ripieni della pasta. Ad Asti e Canelli, infine, la tavola si alleggerisce verso il dolce: il Moscato accompagna più che accompagnare i pasti, e la cucina cittadina — bagna cauda compresa, qui rivendicata come piatto d'origine — si fa più formale, pensata per il dopo-teatro o per il dopo-Palio."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Cuneo e Torino", testo: "Cuneo Levaldigi è il più vicino al Roero e all'Alta Langa (circa un'ora), ma ha pochi collegamenti. Torino Caselle ne ha molti di più ed è a circa un'ora e mezza dal punto di partenza." },
      { titolo: "L'AUTO", sotto: "indispensabile", testo: "Non esistono alternative valide per raggiungere Paroldo, Castellino Tanaro, Olmo Gentile o Cessole. Le strade di cresta sono strette e panoramiche: i tempi reali restano quasi sempre più lunghi di quelli del navigatore." },
      { titolo: "LE CHIUSURE", sotto: "da verificare per telefono", testo: "Molte trattorie di paese chiudono un giorno infrasettimanale che può cambiare stagione per stagione; le cantine di Canelli si visitano solo su prenotazione diretta." },
      { titolo: "LA STAGIONE", sotto: "maggio-giugno, settembre-ottobre", testo: "Bossolasco è al meglio nella fioritura delle rose (inizio giugno); settembre porta la vendemmia e il Palio di Asti (prima domenica del mese). Ad agosto molte trattorie di paese chiudono per ferie: verificare prima di partire." },
      { titolo: "SE I GIORNI DIVENTANO QUATTRO", sotto: "cosa si toglie", testo: "Una notte a Bossolasco e una a Bubbio, restando un solo giorno in ciascuna delle due Alte Langhe. Si perde il Giro delle Cinque Torri per intero, ma resta un viaggio completo." }
    ],

    numeriUtili: [
      "Da prenotare — Cattedrali Sotterranee di Canelli: contatto diretto con le cantine Bosca, Contratto, Coppo o Gancia.",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza."
    ]
  },

  "val-di-noto-costa": {
    occhiello: "Un itinerario per due",
    titolo: "Da Marina di Ragusa a Ortigia",
    sottotitolo: "la Val di Noto vista dal mare, quattro basi sulla costa e il barocco in giornata",
    regione: "Sicilia",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/F0443651-A953-4521-828C-C76ED1B382E3_ima84f",
    tappe: ["Marina di Ragusa","Ragusa Ibla","Modica","Portopalo di Capo Passero","Vendicari","Marzamemi","Noto","Plemmirio","Siracusa","Ortigia"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "C'è un modo di vedere la Val di Noto che quasi nessuno prova: non dalle piazze barocche verso il mare, ma dal mare verso le piazze barocche. Questo itinerario ribalta la prospettiva più consueta: invece di dormire nelle città di pietra e toccare la costa di passaggio, si dorme sulla costa — quattro basi, tutte dimore storiche o boutique hotel autentici, mai un resort — e si sale in collina solo per il tempo di una visita.",
      "Si comincia a Marina di Ragusa, spiaggia Bandiera Blu a un passo da Ragusa Ibla. Si scende a Portopalo di Capo Passero, la punta più a sud della Sicilia, base naturale per Vendicari e Marzamemi. Si risale fino al Plemmirio, l'area marina protetta alle porte di Siracusa. Si chiude a Ortigia, un'ultima notte nel cuore della città vecchia.",
      "Otto giorni, sette notti. Quello che segue non è una classifica. È un percorso possibile, con dentro gli indirizzi di chi lavora bene — dimore che non assomigliano a nessun villaggio turistico, ristoranti dove il pesce arriva la mattina stessa. Il resto appartiene a chi viaggia."
    ],

    percorso: {
      intro: "Marina di Ragusa per due notti, Portopalo di Capo Passero per due, il Plemmirio per due, Ortigia per l'ultima. Le città patrimonio UNESCO — Ragusa, Modica, Noto — si visitano in giornata dalla costa.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Marina di Ragusa", km: "", testo: "Arrivo, il lungomare, la spiaggia Bandiera Blu." },
        { giorno: "Giorno secondo", titolo: "Ragusa Ibla e Modica", km: "in giornata", testo: "Il barocco delle due città, andata e ritorno dalla costa." },
        { giorno: "Giorno terzo", titolo: "verso Portopalo di Capo Passero", km: "55 km", testo: "Trasferimento, il Faro di Cozzo Spadaro." },
        { giorno: "Giorno quarto", titolo: "Vendicari, Marzamemi, l'Isola delle Correnti", km: "in giornata", testo: "La riserva, il borgo di pescatori, il punto più a sud della Sicilia." },
        { giorno: "Giorno quinto", titolo: "verso il Plemmirio, con Noto sulla strada", km: "45 km", testo: "Il barocco netino, poi l'area marina protetta." },
        { giorno: "Giorno sesto", titolo: "il Plemmirio e la Neapolis", km: "in giornata", testo: "La riserva marina, il Teatro Greco, il Museo Paolo Orsi." },
        { giorno: "Giorno settimo", titolo: "il Fiume Ciane e Ortigia", km: "15 km", testo: "Escursione in barca, ultimo trasferimento, l'ultima notte in città vecchia." },
        { giorno: "Giorno ottavo", titolo: "Congedo", km: "", testo: "Partenza da Siracusa." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Marina di Ragusa",
        paragrafi: [
          "Marina di Ragusa è una Bandiera Blu che non ha mai smesso di essere anche un paese vero: il lungomare di Piazza Duca degli Abruzzi si anima la sera, la sabbia dorata si allunga per chilometri, e da qui Ragusa Ibla dista appena venti minuti. La Moresca Maison de Charme, dove si dorme, occupa un palazzo liberty di primo Novecento a poco più di duecento metri dal mare — l'indirizzo giusto per cominciare senza fretta."
        ],
        note: ["Si dorme a Marina di Ragusa, a La Moresca Maison de Charme (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "Ragusa Ibla e Modica, in giornata",
        paragrafi: [
          "Da Marina di Ragusa si sale alle due città di pietra chiara che danno il nome al barocco ibleo. Ragusa Ibla si visita a piedi, dal Duomo di San Giorgio al Giardino Ibleo; Modica si legge in verticale, tra il Corso Umberto e la città alta, con una sosta all'Antica Dolceria Bonajuto per il cioccolato lavorato a freddo. Si torna a dormire sulla costa in serata."
        ],
        note: [
          "Si torna a dormire a La Moresca, Marina di Ragusa.",
          "Pranzo — Hotel Miramare, Lungomare Andrea Doria 44: fronte spiaggia, cucina mediterranea, chef Giuseppe Cutrera."
        ],
        ristoranti: ["Hotel Miramare"],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Verso Portopalo di Capo Passero",
        paragrafi: [
          "Si scende lungo la costa, un'ora abbondante, fino alla punta più a sud della Sicilia continentale. Castello Tafuri — residenza storica del 1935 accanto alla vecchia tonnara, letteralmente sul mare — diventa la base per i prossimi due giorni. Nel tardo pomeriggio, una prima uscita verso il Faro di Cozzo Spadaro, a pochi minuti a piedi."
        ],
        note: ["Si dorme a Portopalo di Capo Passero, al Castello Tafuri (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno quarto",
        titolo: "Vendicari, Marzamemi, l'Isola delle Correnti",
        paragrafi: [
          "Da Castello Tafuri, tutto è a portata di mano: la Riserva di Vendicari, con la tonnara dismessa e le spiagge di Calamosche ed Eloro; Marzamemi, borgo di pescatori con le case colorate intorno a Piazza Regina Margherita; l'Isola delle Correnti, dove lo Ionio e il Mediterraneo si incontrano. Si pranza a Marzamemi, si cena magari senza muoversi affatto — il ristorante del Castello guarda direttamente il mare.",
          "Prima che diventasse un borgo da cartolina, questo tratto di costa viveva della mattanza: la pesca del tonno rosso, praticata con lo stesso sistema di reti a camere — la tonnara — che i Fenici portarono nel Mediterraneo. Il tonno lavorato dalla famiglia Campisi — ventresca, bottarga, mosciame — è ancora oggi il modo più diretto per assaggiarne l'eredità."
        ],
        note: [
          "Si dorme di nuovo al Castello Tafuri.",
          "Pranzo — Campisi, Via Marzamemi 12b: la famiglia lavora il tonno dal 1854, bottega accanto alla sala."
        ],
        ristoranti: ["Campisi"],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "Verso il Plemmirio, con Noto sulla strada",
        paragrafi: [
          "Si risale la costa verso nord, con una sosta a Noto: il Corso illuminato nel tardo pomeriggio, la Cattedrale di San Nicolò, via Nicolaci con i suoi balconi barocchi. Si prosegue poi fino al Plemmirio, l'area marina protetta alle porte di Siracusa, dove Dimora Caiammari — villa nobiliare del Seicento in un giardino botanico storico — accoglie per le prossime due notti."
        ],
        note: ["Si dorme al Plemmirio, a Dimora Caiammari (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno sesto",
        titolo: "Il Plemmirio e la Neapolis",
        paragrafi: [
          "Il mattino si dedica all'Area Marina Protetta del Plemmirio, fra calette e scogliere; nel pomeriggio, il Parco Archeologico della Neapolis — il Teatro Greco, l'Orecchio di Dionisio — e il Museo Paolo Orsi. La cena si fa a Ognina, il porticciolo a pochi minuti da Dimora Caiammari, con il pesce che arriva la mattina stessa."
        ],
        note: [
          "Si dorme di nuovo a Dimora Caiammari.",
          "Cena — Vista Mare Ognina, sul porticciolo: crudi, fritti, aperitivo al tramonto."
        ],
        ristoranti: ["Vista Mare Ognina"],
        produttori: []
      },
      {
        label: "Giorno settimo",
        titolo: "Il Fiume Ciane, le Saline, e l'ultima notte a Ortigia",
        paragrafi: [
          "Prima di lasciare il Plemmirio, un'ultima uscita: la Riserva Naturale Orientata del Fiume Ciane, l'unico luogo in Europa dove il papiro cresce spontaneo lungo un corso d'acqua dolce, si visita in barca a remi risalendo la corrente fra le canne. Poco distante, le Saline di Siracusa, dove nidificano ancora i fenicotteri. Antonio Vella, di una famiglia di barcaioli locali, accompagna entrambe le escursioni.",
          "Nel primo pomeriggio, ultimo trasferimento — dieci minuti dal Plemmirio a Ortigia. Palazzo Salomone, a pochi passi dal Castello Maniace e da Piazza Duomo, ospita per l'ultima notte — e al suo interno, il ristorante Cortile Spirito Santo dello chef Giuseppe Torrisi porta una Stella Michelin proprio nel cuore della città vecchia. Il resto del pomeriggio si passa fra il mercato di via Trento, il Duomo costruito dentro il tempio di Atena, e un ultimo bagno dalle scalette."
        ],
        note: [
          "Si dorme a Ortigia, a Palazzo Salomone.",
          "Da prenotare — escursione al Fiume Ciane e alle Saline con Antonio Vella, tel. 346 1599635.",
          "Cena — Cortile Spirito Santo, dentro Palazzo Salomone: 1 Stella Michelin, chef Giuseppe Torrisi."
        ],
        ristoranti: ["Cortile Spirito Santo"],
        produttori: [
          { nome: "Escursioni Antonio Vella (Fiume Ciane)", url: "tel:+393461599635" }
        ]
      },
      {
        label: "Giorno ottavo",
        titolo: "Congedo",
        paragrafi: [
          "Partenza da Siracusa, con l'aeroporto di Catania a circa un'ora di auto."
        ],
        note: ["Congedo: l'aeroporto di Catania è a circa un'ora."],
        ristoranti: [],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Marina di Ragusa", notti: "due notti",
          strutture: [
            { nome: "La Moresca Maison de Charme", contatto: "Via Dandolo 63, tel. 0932 239495", testo: "Palazzo liberty di primo Novecento, quindici camere, a poco più di duecento metri dal mare." }
          ]
        },
        {
          zona: "Portopalo di Capo Passero", notti: "due notti",
          strutture: [
            { nome: "Castello Tafuri", contatto: "Via Tonnara 1, tel. 0931 844111", testo: "Residenza storica del 1935 accanto alla vecchia tonnara, diciotto camere e suite, spiaggia privata." }
          ]
        },
        {
          zona: "Plemmirio, Siracusa", notti: "due notti",
          strutture: [
            { nome: "Dimora Caiammari", contatto: "Via Daniele Impellizzeri 6, tel. 0931 721217", testo: "Villa nobiliare del Seicento in un giardino botanico storico, diciassette camere, vicino all'Area Marina Protetta." },
            { nome: "Braccialieri", contatto: "Contrada Seggio, tel. 376 2414542", testo: "Antico baglio ottocentesco tra ulivi secolari, tre suite e sei eco-ville nella campagna di Avola, a due passi da Noto." }
          ]
        },
        {
          zona: "Ortigia", notti: "una notte",
          strutture: [
            { nome: "Palazzo Salomone", contatto: "Via Salomone 21, tel. 0931 1815404", testo: "Boutique hotel nel cuore della città vecchia, con il ristorante stellato Cortile Spirito Santo al piano terra." }
          ]
        }
      ],

      tavola: {
        intro: "Gli indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso.",
        voci: [
          { nome: "Hotel Miramare" },
          { nome: "Campisi" },
          { nome: "Vista Mare Ognina" },
          { nome: "Cortile Spirito Santo" }
        ]
      },

      approfondimenti: [
        {
          titolo: "La tonnara, da Portopalo a Marzamemi",
          testo: "Prima che diventasse un borgo da cartolina, questo tratto di costa viveva della mattanza: la pesca del tonno rosso, praticata con lo stesso sistema di reti a camere — la tonnara — che i Fenici portarono nel Mediterraneo. La Tonnara di Marzamemi, oggi location per cene ed eventi, e quella di Portopalo, accanto a cui sorge Castello Tafuri, restano i segni più visibili di un'economia che ha modellato ogni paese di questa costa per secoli. Il tonno lavorato dalla famiglia Campisi — ventresca, bottarga, mosciame — è ancora oggi il modo più diretto per assaggiarne l'eredità."
        }
      ],

      aTavola: {
        titolo: "Lo stesso mare, quattro registri diversi",
        testo: "A Marina di Ragusa la cucina resta quella semplice delle spiagge siciliane: pesce alla griglia, pasta con le vongole, poco altro. A Portopalo e Marzamemi il tonno domina ogni carta, crudo o cotto, spesso nella stessa giornata in cui è stato pescato. Salendo al Plemmirio il registro si fa più conviviale, aperitivi lunghi e piatti da condividere guardando il tramonto. A Ortigia, infine, la cucina di mare raggiunge il suo punto più alto: una Stella Michelin, a pochi passi dal Duomo, chiude il viaggio con lo stesso ingrediente — il pesce di questa costa — trattato con la massima cura possibile."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Comiso e Catania", testo: "Comiso, quindici chilometri da Ragusa, ha pochi voli diretti; Catania Fontanarossa, un'ora da Siracusa, ne ha molti di più." },
      { titolo: "L'AUTO", sotto: "indispensabile", testo: "Nessuna delle quattro basi costiere è raggiungibile comodamente senza; serve anche per le giornate in collina." },
      { titolo: "LE ZONE A TRAFFICO LIMITATO", sotto: "solo nelle giornate in collina", testo: "Riguardano Ragusa Ibla, Modica e Noto: le quattro basi costiere non ne hanno." },
      { titolo: "LA STAGIONE", sotto: "maggio-giugno, settembre-ottobre", testo: "Le finestre migliori; ad agosto le spiagge di Marina di Ragusa, Vendicari e Fontane Bianche sono molto affollate." },
      { titolo: "SE I GIORNI DIVENTANO SETTE", sotto: "cosa si toglie", testo: "Si toglie una notte al Plemmirio, unendo la giornata della Neapolis a quella del Fiume Ciane." }
    ],

    numeriUtili: [
      "Da prenotare — escursione al Fiume Ciane e alle Saline con Antonio Vella, tel. 346 1599635.",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza; 1530 per il soccorso in mare."
    ]
  },

  "val-demona": {
    occhiello: "Un itinerario per due",
    titolo: "Da Catania a Taormina",
    sottotitolo: "la Val Dèmona fra le pendici dell'Etna e il mare, tre dimore che uniscono la Sicilia orientale che si vede da entrambi i lati",
    regione: "Sicilia",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/96E2AA40-5543-450D-8AC3-A7B63B3DE1A3_zjo7yp",
    tappe: ["Catania","Etna","Riposto","Alcantara","Taormina"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "Se la Val di Noto racconta il barocco e il mare del sud-est, la Val Dèmona — la terza delle antiche valli in cui gli arabi divisero la Sicilia, quella che prende il nome da un misterioso insediamento medievale, la Dèmona — racconta tutt'altro: il vulcano più attivo d'Europa che incombe su ogni paesaggio, una città barocca costruita di pietra lavica, e la cittadina che dal Settecento incanta viaggiatori di ogni provenienza.",
      "Tre basi, scelte con lo stesso criterio della Val di Noto costiera: mai un resort, sempre un indirizzo con una storia propria. Si comincia a Catania, scavata letteralmente nelle mura di fortificazione di Carlo V. Si sale poi a Riposto, dove un antico palmento per la pigiatura dell'uva guarda insieme l'Etna e il mare. Si chiude a Taormina, nella pensione di famiglia che ospita viaggiatori dal 1905.",
      "Sei giorni, cinque notti. Quello che segue non è una classifica. È un percorso possibile. Il resto appartiene a chi viaggia."
    ],

    percorso: {
      intro: "Catania per una notte, Riposto per due, Taormina per due. L'Etna, le Gole dell'Alcantara e le strade del vino si visitano lungo il percorso, senza mai tornare indietro.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Catania", km: "", testo: "La città di pietra lavica, il Duomo, via Crociferi." },
        { giorno: "Giorno secondo", titolo: "verso l'Etna e Riposto", km: "50 km", testo: "I Crateri Silvestri, poi la costa e il palmento di Zash." },
        { giorno: "Giorno terzo", titolo: "le strade del vino dell'Etna", km: "in giornata", testo: "I terrazzamenti di lava nera, l'Etna DOC." },
        { giorno: "Giorno quarto", titolo: "le Gole dell'Alcantara, verso Taormina", km: "45 km", testo: "Il canyon di basalto, poi l'ultimo trasferimento." },
        { giorno: "Giorno quinto", titolo: "Taormina", km: "in giornata", testo: "Il Teatro Antico, Isola Bella, il Corso Umberto." },
        { giorno: "Giorno sesto", titolo: "Congedo", km: "", testo: "Partenza da Taormina." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Catania, la città di pietra nera",
        paragrafi: [
          "Catania si costruisce e ricostruisce da sempre con la stessa pietra che la minaccia: la lava dell'Etna, incisa nei palazzi barocchi dopo il terremoto del 1693. In Piazza del Duomo, 'u Liotru — l'elefantino di pietra lavica, simbolo della città — sorveglia la Cattedrale di Sant'Agata, costruita sopra terme romane. Poche centinaia di metri più su, via Crociferi allinea quattro chiese barocche in fila, la strada più bella della città."
        ],
        note: [
          "Si dorme a Catania, a Bastiò Suites.",
          "Cena — Acqualavica, il ristorante interno: osteria negli ambienti voltati delle mura cinquecentesche."
        ],
        ristoranti: ["Acqualavica"],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "Verso l'Etna e Riposto",
        paragrafi: [
          "Da Catania si sale verso il vulcano: dal Rifugio Sapienza, a milleottocento metri, un sentiero a piedi raggiunge i Crateri Silvestri, i più accessibili dei tanti crateri spenti che punteggiano i fianchi dell'Etna. Chi vuole salire più in alto può farlo in funivia o in fuoristrada.",
          "Nel pomeriggio si scende verso la costa ionica, fino a Riposto — piccolo borgo marinaro, il porto storico dell'Etna. Zash Country Boutique Hotel & Spa, la base per le prossime due notti, occupa un antico palmento immerso in tredici ettari di agrumeto: da un lato la vista si apre sul vulcano, dall'altro sul golfo di Taormina."
        ],
        note: ["Si dorme a Riposto, a Zash Country Boutique Hotel & Spa (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Le strade del vino dell'Etna",
        paragrafi: [
          "Giornata dedicata al versante orientale del vulcano, dove la denominazione Etna DOC produce, su terrazzamenti di lava nera, alcuni dei rossi più originali d'Italia — Nerello Mascalese e Nerello Cappuccio, spesso vinificati come fossero Borgogna. A Passopisciaro, in Contrada Feudo di Mezzo, Federico Graziani — ex miglior sommelier d'Italia, oggi vignaiolo — lavora vigne prefillossera di oltre cent'anni per il suo Profumo di Vulcano; il terzo vino della cantina, Mareneve, prende il nome proprio dall'ossimoro fra il fuoco del vulcano e la neve che lo ricopre d'inverno. Diverse cantine della zona, compresa la sua, si visitano su prenotazione diretta. La sera, la cena resta dentro Zash: il ristorante, guidato dallo chef Giuseppe Raciti, ha una Stella Michelin dal 2019."
        ],
        note: [
          "Si dorme di nuovo a Zash.",
          "Cena — Zash, il ristorante interno: chef Giuseppe Raciti, 1 Stella Michelin dal 2019."
        ],
        ristoranti: ["Zash"],
        produttori: [
          { nome: "Federico Graziani", url: "https://fedegraziani.it" }
        ]
      },
      {
        label: "Giorno quarto",
        titolo: "Le Gole dell'Alcantara, verso Taormina",
        paragrafi: [
          "Prima di raggiungere Taormina, una deviazione verso l'interno: le Gole dell'Alcantara, un canyon di basalto colonnare scavato dal fiume nella lava solidificata, con pareti alte fino a cinquanta metri. Ci si arriva a piedi o, per chi vuole inoltrarsi nell'acqua, con stivali a noleggio.",
          "Nel pomeriggio, ultimo trasferimento fino a Taormina. Hotel Villa Schuler, dove si dorme per le ultime due notti, accoglie ospiti dal 1905: la stessa famiglia lo gestisce da allora, in una villa liberty con giardino, sulla via panoramica che guarda il mare."
        ],
        note: ["Si dorme a Taormina, a Hotel Villa Schuler (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "Taormina",
        paragrafi: [
          "Il Teatro Antico, costruito dai greci e ampliato dai romani, resta il punto più alto della città — e il palcoscenico con la vista più famosa di Sicilia, l'Etna che fa da sfondo naturale al proscenio. Il Corso Umberto attraversa il centro storico da Porta Messina a Porta Catania; da Piazza IX Aprile, una terrazza panoramica si affaccia sul golfo. Isola Bella, la piccola penisola collegata alla terraferma da una lingua di sabbia che appare e scompare con le maree, si raggiunge in funivia o a piedi.",
          "La sera si cena da Tischi Toschi, la trattoria gourmet di Luca Casablanca: pochi coperti, filosofia Slow Food, gli stessi sapori che secondo più fonti restano fra i più autentici di tutta la città."
        ],
        note: [
          "Si dorme di nuovo a Villa Schuler.",
          "Cena — Tischi Toschi, Vico Francesco Paladini 3, tel. 339 3642088."
        ],
        ristoranti: ["Tischi Toschi"],
        produttori: []
      },
      {
        label: "Giorno sesto",
        titolo: "Congedo",
        paragrafi: [
          "Partenza da Taormina, con l'aeroporto di Catania a circa un'ora di auto."
        ],
        note: ["Congedo: l'aeroporto di Catania è a circa un'ora."],
        ristoranti: [],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Catania", notti: "una notte",
          strutture: [
            { nome: "Bastiò Suites", contatto: "Via Cardinale Dusmet 37, tel. 328 1570423", testo: "Cinque suite nelle mura di fortificazione di Carlo V, pietra lavica a vista." }
          ]
        },
        {
          zona: "Riposto", notti: "due notti",
          strutture: [
            { nome: "Zash Country Boutique Hotel & Spa", contatto: "Strada Provinciale 2/I-II 60, tel. 095 7828932", testo: "Antico palmento in tredici ettari di agrumeto, vista Etna e mare insieme, 1 Stella Michelin." }
          ]
        },
        {
          zona: "Taormina", notti: "due notti",
          strutture: [
            { nome: "Hotel Villa Schuler", contatto: "Piazzetta Bastione, Via Roma, tel. 0942 23481", testo: "Pensione di famiglia dal 1905, villa liberty con giardino, via panoramica lato mare." }
          ]
        }
      ],

      tavola: {
        intro: "Gli indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso.",
        voci: [
          { nome: "Acqualavica" },
          { nome: "Zash" },
          { nome: "Tischi Toschi" }
        ]
      },

      approfondimenti: [
        {
          titolo: "Il vino dell'Etna",
          testo: "Sui terrazzamenti di lava nera del versante orientale del vulcano nasce l'Etna DOC, una delle denominazioni più originali d'Italia: altitudini che arrivano a mille metri, suoli vulcanici ricchissimi di minerali, e due vitigni autoctoni — Nerello Mascalese e Nerello Cappuccio — che i produttori più attenti vinificano con la stessa cura riservata ai grandi rossi di Borgogna, tanto che i cru dell'Etna vengono ormai chiamati \"contrade\" proprio in analogia ai climat borgognoni. Le stesse pendici, più in basso, restituiscono anche bianchi minerali da uve Carricante. Un territorio che cambia volto nel giro di poche centinaia di metri di altitudine, come raramente accade altrove."
        }
      ],

      aTavola: {
        titolo: "Dalla pietra lavica al mare",
        testo: "A Catania la cucina resta quella di città: la pasta alla Norma, che qui è nata e che deve il suo nome a Bellini, gli arancini con la punta, le cartocciate di rosticceria. Salendo verso l'Etna il registro si fa più ricco — funghi, formaggi di montagna, i vini rossi strutturati dei terrazzamenti lavici — mentre la cucina di Zash aggiunge agli ingredienti di terra il pescato del vicino porto di Riposto. A Taormina, infine, la tavola guarda soprattutto al mare: pesce fresco, la pasta alla siracusana rivisitata, e la stessa attenzione alle materie prime che ha reso l'isola una delle mete gastronomiche più interessanti del Mediterraneo."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Catania Fontanarossa", testo: "Il riferimento per l'intero itinerario, a un'ora da Taormina e pochi minuti da Catania stessa." },
      { titolo: "L'AUTO", sotto: "indispensabile", testo: "Necessaria per raggiungere l'Etna, le Gole dell'Alcantara e Riposto; a Taormina conviene lasciarla nei parcheggi esterni (Lumbi o Porta Catania) e muoversi a piedi." },
      { titolo: "L'ETNA", sotto: "attenzione al meteo", testo: "Le condizioni cambiano rapidamente in quota: una felpa serve anche in piena estate, e vale la pena verificare l'accessibilità dei crateri prima di salire." },
      { titolo: "LA STAGIONE", sotto: "maggio-giugno, settembre-ottobre", testo: "Le finestre migliori; in inverno l'Etna si scia, ma le strade di montagna richiedono catene o gomme adatte." },
      { titolo: "SE I GIORNI DIVENTANO CINQUE", sotto: "cosa si toglie", testo: "Si toglie una notte a Zash, unendo la giornata dell'Etna a quella delle strade del vino." }
    ],

    numeriUtili: [
      "Da prenotare — il ristorante di Zash (Stella Michelin, tavoli limitati); cantine dell'Etna DOC, contatto diretto.",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza."
    ]
  },

  "val-di-mazara-palermo": {
    occhiello: "Un itinerario per due",
    titolo: "Da Via Roma a Ballarò",
    sottotitolo: "la Val di Mazara, cinque giorni a Palermo fra l'eleganza di Via Roma e la vitalità di Ballarò, con i mosaici di Monreale a fare da cerniera",
    regione: "Sicilia",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/52DA4616-D0BD-406D-BB72-DEA9C2BCE107_usep56",
    tappe: ["Palermo","Via Roma","Teatro Massimo","Quattro Canti","Palazzo dei Normanni","Ballarò","Vucciria","Monreale","La Kalsa"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "Palermo non si lascia raccontare da un solo punto di vista. C'è la città elegante del Liberty e dei grand hotel, quella che guarda l'Europa da Via Roma e dal Teatro Massimo; e c'è la città araba, quella dei mercati che gridano ancora come mille anni fa, dove il Mediterraneo si sente più che altrove. Questo itinerario le tiene insieme, cambiando base a metà percorso invece di sceglierne una sola.",
      "Si comincia al Grand Hotel et Des Palmes, palazzo del 1874 sulla centralissima Via Roma, per due giorni dedicati al cuore monumentale della città — il Teatro Massimo, la Cappella Palatina, la Cattedrale. Si continua a Palazzo Brunaccini, alle spalle del mercato di Ballarò, per la Palermo più autentica e meno filtrata. Nel mezzo, una giornata a Monreale, dove i mosaici bizantini più estesi del mondo raccontano l'incontro fra le tre culture che hanno fatto la Sicilia.",
      "Cinque giorni, quattro notti. Quello che segue non è una classifica. È un percorso possibile. Il resto appartiene a chi viaggia."
    ],

    percorso: {
      intro: "Grand Hotel et Des Palmes per due notti, Palazzo Brunaccini per due, con Monreale a fare da cerniera fra le due basi. Tutto raggiungibile a piedi o in taxi, senza bisogno di auto.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Via Roma, il Teatro Massimo, i Quattro Canti", km: "", testo: "Arrivo, prima passeggiata nel cuore monumentale della città." },
        { giorno: "Giorno secondo", titolo: "Palazzo dei Normanni e la Cappella Palatina", km: "", testo: "L'arte arabo-normanna, la Cattedrale." },
        { giorno: "Giorno terzo", titolo: "Verso Ballarò, il mercato e la Vucciria", km: "", testo: "Cambio di base, i due mercati storici." },
        { giorno: "Giorno quarto", titolo: "Monreale", km: "10 km", testo: "I mosaici bizantini, il chiostro benedettino." },
        { giorno: "Giorno quinto", titolo: "La Kalsa, e il congedo", km: "", testo: "Il quartiere più antico, Palazzo Abatellis." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Via Roma, il Teatro Massimo, i Quattro Canti",
        paragrafi: [
          "Il Grand Hotel et Des Palmes, dove si dorme per le prime due notti, fu costruito nel 1874 per la famiglia Ingham-Whitaker come residenza privata, con un tunnel segreto che la collegava alla chiesa anglicana di fronte. Oggi è un albergo Liberty di cinque stelle, con il Giardino d'Inverno disegnato da Ernesto Basile e un passato che comprende anche l'omicidio del bandito Raffaele Cutolo — ne fu ambientato Dimenticare Palermo di Francesco Rosi.",
          "A dieci minuti a piedi, il Teatro Massimo è il più grande teatro d'opera d'Italia: l'ultima scena de Il Padrino - Parte III è stata girata sulla sua scalinata. Il centro storico si organizza intorno ai Quattro Canti, l'incrocio barocco che divide la città in quattro mandamenti, ciascuno con la propria fontana e la propria statua di santo patrono."
        ],
        note: ["Si dorme al Grand Hotel et Des Palmes (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "Palazzo dei Normanni e la Cappella Palatina",
        paragrafi: [
          "Il Palazzo dei Normanni, oggi sede dell'Assemblea Regionale Siciliana, custodisce la Cappella Palatina: fatta costruire da Ruggero II nel 1132, è forse l'esempio più compiuto di arte arabo-normanna al mondo — mosaici bizantini, soffitto ligneo a muqarnas di manifattura islamica, pavimento cosmatesco, tutto nello stesso spazio. Poco distante, la Cattedrale di Palermo mescola stili accumulati in otto secoli di rimaneggiamenti, dal normanno al neoclassico.",
          "La sera si cena da Osteria dei Vespri, al piano terra di Palazzo Gangi — una delle dimore più prestigiose della città, location del ballo ne Il Gattopardo di Visconti: cucina gourmet e tradizionale insieme, oltre seicento etichette in carta."
        ],
        note: [
          "Si torna a dormire al Grand Hotel et Des Palmes.",
          "Cena — Osteria dei Vespri, Piazza Croce dei Vespri 6, dentro Palazzo Gangi."
        ],
        ristoranti: ["Osteria dei Vespri"],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Verso Ballarò, il mercato e la Vucciria",
        paragrafi: [
          "Trasferimento breve, pochi minuti, ma un cambio di registro completo: Palazzo Brunaccini, dove si dorme per le prossime due notti, occupa l'ex dimora della principessa Lucrezia Brunaccini, alle spalle del mercato di Ballarò — il più antico e rumoroso di Palermo, dove i banchi gridano ancora la merce come secoli fa.",
          "Nel pomeriggio si cammina fino alla Vucciria, l'altro mercato storico della città, oggi più silenzioso di giorno e animato la sera, quando i banchi lasciano il posto a bancarelle di street food. La cena si fa da Buatta Cucina Popolana, in un'antica bottega di Via Vittorio Emanuele: Bib Gourmand della Guida Michelin, cucina popolare palermitana senza compromessi."
        ],
        note: ["Si dorme a Palazzo Brunaccini (prima delle due notti)."],
        ristoranti: ["Buatta Cucina Popolana"],
        produttori: []
      },
      {
        label: "Giorno quarto",
        titolo: "Monreale",
        paragrafi: [
          "Dieci chilometri a sud, Monreale custodisce uno dei capolavori assoluti dell'arte medievale: il Duomo, inaugurato nel 1174 da Guglielmo II, ha oltre seimilatrecento metri quadrati di mosaici dorati che raccontano l'Antico e il Nuovo Testamento, un soffitto ligneo a capriate del XII secolo, un pavimento in opus sectile di marmi policromi. Accanto, il chiostro benedettino — duecentoventotto colonne, ciascuna diversa dalle altre — offre un momento di silenzio dopo lo sfarzo della chiesa."
        ],
        note: [
          "Si dorme di nuovo a Palazzo Brunaccini.",
          "Da verificare — orari del Duomo: chiuso la domenica mattina, pausa pranzo nei giorni feriali."
        ],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "La Kalsa, e il congedo",
        paragrafi: [
          "L'ultimo giorno si dedica alla Kalsa, il quartiere più antico della città, di fondazione araba: il Museo Regionale di Palazzo Abatellis custodisce il Trionfo della Morte, affresco quattrocentesco di autore ignoto, e il busto di Eleonora d'Aragona di Francesco Laurana. Prima di ripartire, un'ultima passeggiata fra le vie del centro storico, magari fermandosi per un'ultima arancina da uno dei tanti banchi di strada, o per un'ultima dolcezza da Pasticceria Cappello, patria della torta Setteveli."
        ],
        note: [
          "Congedo: l'aeroporto Falcone e Borsellino è a circa quaranta minuti.",
          "Ultima tappa — Pasticceria Cappello, Via Colonna Rotta 68."
        ],
        ristoranti: ["Pasticceria Cappello"],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Via Roma", notti: "due notti",
          strutture: [
            { nome: "Grand Hotel et Des Palmes", contatto: "Via Roma 398, tel. 091 8048800", testo: "Palazzo del 1874 della famiglia Ingham-Whitaker, Giardino d'Inverno di Ernesto Basile." }
          ]
        },
        {
          zona: "Ballarò", notti: "due notti",
          strutture: [
            { nome: "Palazzo Brunaccini", contatto: "Piazzetta Lucrezia Brunaccini 9, tel. 091 586904", testo: "Ex dimora nobiliare, alle spalle del mercato di Ballarò." }
          ]
        }
      ],

      tavola: {
        intro: "Gli indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso, con un'opzione in più.",
        voci: [
          { nome: "Osteria dei Vespri" },
          { nome: "Buatta Cucina Popolana" },
          { nome: "Ristorante Gagini" },
          { nome: "Pasticceria Cappello" }
        ]
      },

      approfondimenti: [
        {
          titolo: "L'arte arabo-normanna, Patrimonio UNESCO",
          testo: "Nel 2015 l'UNESCO ha riconosciuto un intero itinerario — Palermo, Cefalù e Monreale — come testimonianza di un fenomeno unico al mondo: la sintesi fra elementi architettonici occidentali, islamici e bizantini, fioriti nella Sicilia normanna fra XII e XIII secolo. La Cappella Palatina, il Duomo di Monreale, e la stessa Cattedrale di Palermo ne sono gli esempi più compiuti: mosaici bizantini, soffitti a muqarnas di manifattura araba, e l'architettura normanna a tenerli insieme. Nessun altro luogo al mondo racconta con la stessa chiarezza l'incontro — non lo scontro — fra le tre culture che si sono contese il Mediterraneo medievale."
        }
      ],

      aTavola: {
        titolo: "Dal mercato alla tavola elegante",
        testo: "A Palermo il cibo di strada non è un ripiego, è una vera e propria cucina a sé: panelle e crocché fritte al momento, pane con la milza, sfincione, arancine con la punta. Ballarò e la Vucciria restano i luoghi migliori per assaggiarlo, in piedi, fra le grida dei venditori. Ma la stessa città sa essere elegante quando serve: da Osteria dei Vespri, dentro un palazzo che ha visto il Gattopardo di Visconti, o da Buatta, dove la cucina popolare si rialza di un grado senza perdere la propria anima. Il filo che tiene insieme le due tavole è lo stesso: rispetto per l'ingrediente povero, trattato con la stessa cura di uno nobile."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Falcone e Borsellino", testo: "L'aeroporto di Punta Raisi è a circa quaranta minuti dal centro." },
      { titolo: "L'AUTO", sotto: "sconsigliata in centro", testo: "Il traffico è denso, i parcheggi scarsi, e le due basi di questo itinerario si raggiungono comodamente a piedi o in taxi dall'aeroporto." },
      { titolo: "LE ZONE A TRAFFICO LIMITATO", sotto: "gran parte del centro storico", testo: "Incluse le zone di entrambe le basi: un motivo in più per lasciare l'auto fuori città." },
      { titolo: "LA STAGIONE", sotto: "aprile-giugno, settembre-ottobre", testo: "Le finestre migliori; ad agosto il caldo in città può essere intenso." },
      { titolo: "SE I GIORNI DIVENTANO QUATTRO", sotto: "cosa si toglie", testo: "Si toglie una notte a testa da entrambe le basi, unendo Ballarò/Vucciria alla giornata di Monreale." }
    ],

    numeriUtili: [
      "Da prenotare — Cappella Palatina (Palazzo dei Normanni), verificare orari di apertura variabili per eventi istituzionali; Osteria dei Vespri, tavoli limitati.",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza."
    ]
  },

  "val-di-mazara-trapani": {
    occhiello: "Un itinerario per due",
    titolo: "Da Trapani a Montallegro",
    sottotitolo: "la Val di Mazara, il versante occidentale della Sicilia, dalle saline di Trapani alla Valle dei Templi, passando per Selinunte e le vigne di Planeta",
    regione: "Sicilia",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/C24329A7-A430-4662-B1B4-748393632795_ffbvgc",
    tappe: ["Trapani","Erice","Marsala","Menfi","Selinunte","Sciacca","Montallegro","Valle dei Templi","Scala dei Turchi"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "Se Palermo racconta la Sicilia delle corti e dei mercati, questo secondo versante della Val di Mazara ne racconta un'altra: quella delle saline che si tingono di rosa al tramonto, dei templi greci più imponenti del Mediterraneo, delle vigne che scendono fino al mare. È un itinerario più lento, più rurale, con tre sole basi per sette giorni.",
      "Si comincia a Trapani, città di saline e di ceramiche, con Erice che veglia dall'alto. Si scende poi a Menfi, fra le vigne di Planeta e le rovine di Selinunte, il più esteso parco archeologico d'Europa. Si chiude a Montallegro, base per la Valle dei Templi e la Scala dei Turchi, prima del congedo.",
      "Sette giorni, sei notti. Quello che segue non è una classifica. È un percorso possibile. Il resto appartiene a chi viaggia."
    ],

    percorso: {
      intro: "Palazzo Gatto a Trapani per due notti, La Foresteria a Menfi per due, Relais Briuccia a Montallegro per due. Circa sessanta-novanta chilometri fra una base e l'altra.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Trapani, fra saline e ceramiche", km: "", testo: "Centro storico, Mura di Tramontana, la Riserva delle Saline." },
        { giorno: "Giorno secondo", titolo: "Erice", km: "in giornata", testo: "Il borgo medievale in quota, il Castello di Venere." },
        { giorno: "Giorno terzo", titolo: "Verso Menfi, con Marsala sulla strada", km: "80 km", testo: "Pranzo a Marsala, arrivo fra le vigne di Planeta." },
        { giorno: "Giorno quarto", titolo: "Selinunte", km: "in giornata", testo: "Il parco archeologico più esteso d'Europa." },
        { giorno: "Giorno quinto", titolo: "Verso Montallegro, con Sciacca sulla strada", km: "65 km", testo: "La città termale, poi Relais Briuccia." },
        { giorno: "Giorno sesto", titolo: "La Valle dei Templi e la Scala dei Turchi", km: "in giornata", testo: "Il sito archeologico, la falesia bianca." },
        { giorno: "Giorno settimo", titolo: "Congedo", km: "", testo: "Partenza." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Trapani, fra saline e ceramiche",
        paragrafi: [
          "Palazzo Gatto, dove si dorme per le prime due notti, occupa un edificio del Settecento nel cuore di Trapani, restaurato dall'architetto Simone Micheli e impreziosito da ceramiche di Santo Stefano di Camastra: diciannove camere, un rooftop con vista sulla città, a pochi passi dall'imbarco per le Egadi. Il centro storico si visita in poche ore — le Mura di Tramontana, il lungomare Dante Alighieri — prima di dedicare il tardo pomeriggio alla Riserva Naturale delle Saline di Trapani e Paceco, dove i mulini a vento e le vasche colorate raccontano un mestiere antico quanto la città stessa."
        ],
        note: ["Si dorme a Trapani, a Palazzo Gatto (prima delle due notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "Erice",
        paragrafi: [
          "Settecentocinquanta metri sul livello del mare, Erice guarda Trapani e le Egadi da una posizione che sembra fatta apposta per la contemplazione — non a caso vi sorgeva un tempio dedicato a Venere Ericina, meta di pellegrinaggio in tutto il Mediterraneo antico. Il borgo medievale, con il Castello di Venere e le sue strade acciottolate, si visita a piedi in una mattinata; la funivia da Trapani rende la salita un'esperienza in sé."
        ],
        note: ["Si torna a dormire a Palazzo Gatto."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Verso Menfi, con Marsala sulla strada",
        paragrafi: [
          "Si lascia Trapani lungo la costa, con una sosta a Marsala: qui, da Le Lumie, si pranza affacciati sulle Isole Egadi e sulla Riserva Naturale dello Stagnone, dove il sale si raccoglie ancora con i metodi di sempre. Nell'entroterra, in Contrada Samperi, la cantina di Marco De Bartoli custodisce il Vecchio Samperi, il vino \"perpetuo\" che negli anni Settanta riportò alla luce il metodo pre-industriale del vero Marsala — elogiato a suo tempo dallo stesso Luigi Veronelli. Prima di lasciare la zona, un aperitivo al tramonto da Mamma Caura, dentro le Saline Ettore Infersa: un'ex caserma degli anni Trenta trasformata in sunset bar, con vista sul Mulino a Vento cinquecentesco e sul sole che scompare dietro l'isola di Favignana. Si prosegue poi verso Menfi, fra vigneti che scendono fino al mare, fino a La Foresteria — il wine resort della famiglia Planeta, dove si dorme per le prossime due notti, fra le cantine di Ulmo e Dispensa."
        ],
        note: [
          "Si dorme a Menfi, a La Foresteria (prima delle due notti).",
          "Pranzo — Le Lumie, Contrada Fontanelle 178/B, Marsala.",
          "Da prenotare — degustazione a Marco De Bartoli, Contrada Fornara Samperi 292, tel. 0923 962093.",
          "Aperitivo al tramonto — Mamma Caura, Saline Ettore Infersa, tel. 348 7446687."
        ],
        ristoranti: ["Le Lumie", "Mamma Caura"],
        produttori: [
          { nome: "Marco De Bartoli", url: "https://www.marcodebartoli.com" }
        ]
      },
      {
        label: "Giorno quarto",
        titolo: "Selinunte",
        paragrafi: [
          "Selinunte è il parco archeologico più esteso d'Europa: otto templi dorici, di cui solo uno — il Tempio E — è stato ricostruito, gli altri lasciati come colonne cadute a raccontare da soli il tempo che è passato. L'Acropoli si affaccia direttamente sul mare, e la vista dai templi verso l'acqua resta una delle immagini più forti di tutta la Sicilia greca. La sera si cena a La Foresteria stessa, fra i colori che sfumano dall'azzurro al rosa sopra i vigneti."
        ],
        note: [
          "Si dorme di nuovo a La Foresteria.",
          "Cena — La Foresteria, chef Angelo Pumilia, cucina di Casa Planeta."
        ],
        ristoranti: ["La Foresteria"],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "Verso Montallegro, con Sciacca sulla strada",
        paragrafi: [
          "Si prosegue lungo la costa fino a Sciacca, città termale dal centro medievale intatto, per una sosta breve prima dell'ultimo trasferimento. Relais Briuccia, a Montallegro, occupa un palazzo nobiliare ottocentesco tinteggiato di rosso pompeiano — la base ideale per la Valle dei Templi, la Scala dei Turchi e le riserve naturali di Torre Salsa ed Eraclea Minoa, tutte a pochi minuti di distanza."
        ],
        note: [
          "Si dorme a Montallegro, a Relais Briuccia (prima delle due notti).",
          "Cena — Capitolo Primo, il ristorante interno del Relais, chef Damiano Ferraro."
        ],
        ristoranti: ["Capitolo Primo"],
        produttori: []
      },
      {
        label: "Giorno sesto",
        titolo: "La Valle dei Templi e la Scala dei Turchi",
        paragrafi: [
          "La Valle dei Templi è il sito archeologico più vasto al mondo dopo Angkor: il Tempio della Concordia, praticamente intatto dal V secolo a.C., resta l'immagine più fotografata della Sicilia greca, ma l'intera valle — con il Tempio di Giunone, quello di Ercole, e i resti del Tempio di Zeus Olimpico — merita una giornata intera. Nel pomeriggio, la Scala dei Turchi: una falesia di marna bianca modellata dal vento e dal mare in gradoni naturali, il cui nome ricorda le incursioni saracene che qui trovavano un approdo naturale.",
          "Chi ha tempo e voglia di allungare può spingersi fino a Licata, un'ora abbondante di strada: qui, a La Madia, Pino Cuttaia ha guidato per sette anni La Sicilia di Ulisse — l'associazione che raccoglie molti degli indirizzi di questo itinerario — prima di cedere la presidenza a Tony Lo Coco nel 2024. Tornato in Sicilia nel 2000 dopo anni di formazione in Piemonte, la sua cucina — due Stelle Michelin dal 2009 — si costruisce tutta sulla memoria: \"il mio ingrediente segreto\", dice lui stesso, capace di trasformare un ricordo d'infanzia in un piatto come la Nuvola di Mozzarella, premiata \"piatto dell'anno\" nel 2013."
        ],
        note: [
          "Si dorme di nuovo a Relais Briuccia.",
          "Deviazione facoltativa — La Madia, Corso Filippo Re Capriata 22, Licata, tel. 0922 771443: due Stelle Michelin, chef Pino Cuttaia. Un'ora abbondante da Montallegro, consigliata solo se non si ha fretta."
        ],
        ristoranti: ["La Madia"],
        produttori: []
      },
      {
        label: "Giorno settimo",
        titolo: "Congedo",
        paragrafi: [
          "Partenza: l'aeroporto di Palermo è a circa due ore, quello di Trapani-Birgi a circa un'ora e mezza."
        ],
        note: ["Congedo: Trapani-Birgi è il più vicino, circa un'ora e mezza."],
        ristoranti: [],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Trapani", notti: "due notti",
          strutture: [
            { nome: "Palazzo Gatto", contatto: "Via della Cuba 9-11, tel. 0923 941344", testo: "Palazzo del Settecento, design di Simone Micheli, rooftop con vista sulla città." }
          ]
        },
        {
          zona: "Menfi", notti: "due notti",
          strutture: [
            { nome: "La Foresteria", contatto: "Contrada Passo di Gurra, tel. 0925 1955460", testo: "Wine resort della famiglia Planeta, fra le cantine di Ulmo e Dispensa." }
          ]
        },
        {
          zona: "Montallegro", notti: "due notti",
          strutture: [
            { nome: "Relais Briuccia", contatto: "Via Trieste 1, tel. 0922 847755", testo: "Palazzo nobiliare ottocentesco, base per la Valle dei Templi." }
          ]
        }
      ],

      tavola: {
        intro: "Gli indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso.",
        voci: [
          { nome: "Le Lumie" },
          { nome: "La Foresteria" },
          { nome: "Capitolo Primo" },
          { nome: "Mamma Caura" },
          { nome: "La Madia" }
        ]
      },

      approfondimenti: [
        {
          titolo: "Le saline, un paesaggio di lavoro",
          testo: "Fra Trapani e Marsala, la costa si trasforma in un mosaico di vasche geometriche, mulini a vento e cumuli di sale bianco che d'estate luccicano come neve. È un paesaggio interamente costruito dall'uomo, praticato ininterrottamente dai Fenici a oggi: l'acqua di mare entra nelle vasche più esterne e, evaporando progressivamente sotto il sole siciliano, lascia depositare il sale via via più puro nelle vasche interne. I fenicotteri rosa, che qui sostano regolarmente durante la migrazione, si nutrono degli stessi microrganismi che danno alle vasche più concentrate la loro caratteristica tonalità rosata — lo stesso pigmento che colora anche il loro piumaggio."
        }
      ],

      aTavola: {
        titolo: "Dal sale alla vigna",
        testo: "Sulla costa trapanese la cucina segue il cous cous di pesce, eredità della vicinanza con il Nord Africa, e il sale delle saline che condisce tutto, dal pane alle acciughe. Scendendo verso Menfi il registro cambia: qui comanda la vigna, con l'olio e il vino Planeta protagonisti di ogni piatto, e la cucina di Casa Planeta che reinterpreta le ricette dei monsù, i cuochi delle antiche dimore nobiliari siciliane. Verso Agrigento, infine, la tavola si fa più semplice e contadina — legumi, verdure di stagione, il pane cotto nei forni a legna dei paesi dell'entroterra."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Trapani-Birgi e Palermo", testo: "Trapani-Birgi è il più vicino al punto di partenza, con collegamenti low-cost; Palermo Punta Raisi ne ha di più ma è più lontano." },
      { titolo: "L'AUTO", sotto: "indispensabile", testo: "Necessaria per l'intero percorso; le distanze fra le tre basi sono nell'ordine di sessanta-novanta chilometri ciascuna." },
      { titolo: "LE SALINE", sotto: "luce migliore nel tardo pomeriggio", testo: "La Riserva di Trapani e Paceco si visita meglio quando la luce radente esalta i colori delle vasche." },
      { titolo: "LA STAGIONE", sotto: "aprile-giugno, settembre-ottobre", testo: "Le finestre migliori; le saline sono più spettacolari da giugno a settembre, quando la raccolta del sale è in corso." },
      { titolo: "SE I GIORNI DIVENTANO CINQUE", sotto: "cosa si toglie", testo: "Si toglie una notte a testa da Trapani e Menfi, trasformando Erice e Selinunte in soste di mezza giornata invece che tappe complete." }
    ],

    numeriUtili: [
      "Da prenotare — degustazioni a La Foresteria/Planeta; Capitolo Primo, tavoli limitati.",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza."
    ]
  },

  "ragusa-siracusa": {
    occhiello: "Un itinerario per due",
    titolo: "Da Ragusa a Siracusa",
    sottotitolo: "sette giorni lungo il filo del barocco, dall'altopiano ibleo al mare di Ortigia",
    regione: "Sicilia",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/23FC9D95-1811-4C25-9B86-AB9CC2768ACE_crnpn8",
    tappe: ["Ragusa Ibla","Donnafugata","Punta Secca","Scicli","Modica","Cava d'Ispica","Vendicari","Marzamemi","Noto","Siracusa","Ortigia","Catania"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "Ci sono itinerari che hanno un senso di marcia, e questo è uno di quelli. Conviene percorrerlo da ovest verso est: cominciare in alto, sull'altopiano ibleo, dove la pietra è chiara e le città stanno appese ai bordi delle gole, e scendere piano verso il mare, fino a Siracusa, dove l'acqua entra dentro la città e non se ne va più.",
      "La ragione non è soltanto panoramica. Andando in questa direzione anche la tavola racconta una storia con un principio e una fine. Si comincia con la cucina di terra degli Iblei, quella della ricotta appena fatta, del sugo di maiale, del caciocavallo e del cioccolato lavorato a freddo. Si finisce con i ricci di mare e il gambero rosso, con il pesce che a Ortigia si compra al mercato e si mangia a mezzogiorno. Nel mezzo, il tonno di Marzamemi fa da cerniera fra le due cose — e un pasticcere di fama internazionale, a Noto, dà a tutto il percorso un centro gravitazionale che nessuna guida avrebbe previsto qualche decennio fa.",
      "Sette giorni sono la misura giusta per non correre. Due notti a Ragusa Ibla e tre a Siracusa evitano di fare e disfare le valigie ogni sera, e lasciano spazio a una giornata intera a Catania, che è un'altra Sicilia ancora: nera di pietra lavica, rumorosa, con l'Etna in fondo a ogni strada.",
      "Quello che segue non è una classifica e non vuole esserlo. È un percorso possibile, con dentro gli indirizzi di chi lavora bene e da tempo: trattorie di famiglia, gastronomie che friggono al momento, ristoranti stellati che restano fedeli al proprio territorio, case dove si viene accolti da qualcuno che vi abita. Il resto — cosa vedere per primo, dove fermarsi più a lungo, cosa saltare — appartiene a chi viaggia."
    ],

    percorso: {
      intro: "Ragusa Ibla per due notti, Modica per una, Noto per una, Siracusa per le ultime tre. Circa trecento chilometri in tutto, mai più di un'ora fra una tappa e l'altra, e una sola giornata davvero lunga: quella di Catania.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Ragusa Ibla", km: "", testo: "Arrivo, il Duomo di San Giorgio, il Giardino Ibleo, la prima cena a Ibla." },
        { giorno: "Giorno secondo", titolo: "verso la costa", km: "100 km", testo: "Il Castello di Donnafugata, Punta Secca, Marina di Ragusa, ritorno passando per Scicli." },
        { giorno: "Giorno terzo", titolo: "Modica", km: "35 km", testo: "Modica alta e Modica bassa, il cioccolato, la Cava d'Ispica nel pomeriggio." },
        { giorno: "Giorno quarto", titolo: "verso Noto", km: "115 km", testo: "La riserva di Vendicari al mattino, Marzamemi a pranzo, Portopalo e l'Isola delle Correnti, Noto alla sera." },
        { giorno: "Giorno quinto", titolo: "Noto e Siracusa", km: "60 km", testo: "Il barocco di Noto, Corrado Assenza, il Fiume Ciane, il trasferimento a Ortigia." },
        { giorno: "Giorno sesto", titolo: "Catania", km: "130 km", testo: "Una giornata intera in città, o mezza giornata sull'Etna." },
        { giorno: "Giorno settimo", titolo: "Siracusa", km: "10 km", testo: "La Neapolis, il Museo Paolo Orsi, l'ultimo pomeriggio nell'isola." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Ragusa, due città sovrapposte",
        paragrafi: [
          "Dopo il terremoto del 1693 i ragusani si divisero. Una parte volle ricominciare da capo su un pianoro vicino, in una città ordinata e disegnata a griglia: è Ragusa Superiore. L'altra parte si ostinò a ricostruire dov'era sempre stata, sopra le rovine dell'abitato medievale, e ne conservò l'andamento a gomitolo, i vicoli che si avvitano e i cortili che si aprono all'improvviso. È Ragusa Ibla, ed è lì che vale la pena dormire.",
          "Il Duomo di San Giorgio sta in cima a una scalinata, con la facciata convessa a torre disegnata da Rosario Gagliardi: la si vede da lontano e sembra avanzare verso chi sale. All'estremità opposta del quartiere il Giardino Ibleo raccoglie palme, tre chiese e un belvedere sulla valle dell'Irminio. Nei suggestivi bassi accanto alla Chiesa dei Miracoli, un altro monumento UNESCO, si trova Locanda Don Serafino: una Stella Michelin, lo chef Vincenzo Candiano, una cantina di oltre duemila etichette visibile attraverso botole di vetro — la famiglia La Rosa la porta avanti dal 1953, quando i genitori Serafino ed Elia aprirono a Marina di Ragusa il primo ristorante di famiglia.",
          "La sera, quando i pullman se ne vanno, Ibla si svuota e resta uno dei posti più silenziosi dell'isola: è il momento migliore per la prima cena."
        ],
        note: [
          "Si dorme a Ragusa Ibla.",
          "Cena — Locanda Don Serafino, Via Avv. G. Ottaviano 13, o le trattorie di famiglia del centro.",
          "La colazione, il mattino dopo — Dolci d'Autore, via Monti Iblei 19, tel. 0932 641552, in città alta; chiuso il lunedì. Per i cannoli, Pasticceria Iudice, via Giardino 23, tel. 0932 1882071."
        ],
        ristoranti: ["Locanda Don Serafino"],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "Il castello, il faro, la strada barocca",
        paragrafi: [
          "Venti chilometri a ovest, in mezzo alla campagna, il Castello di Donnafugata non è un castello ma la villa ottocentesca di una famiglia che voleva sembrare più antica di quanto fosse. Ha centoventidue stanze, un labirinto di pietra nel parco e un museo del costume che merita il tempo che chiede. È chiuso il lunedì: se il secondo giorno cade di lunedì, basta scambiarlo con il terzo.",
          "Da lì si scende al mare. A Punta Secca la casa che tutti riconoscono si affaccia direttamente sulla spiaggia, accanto al faro. A Marina di Ragusa, sul lungomare Andrea Doria, Votavota guarda il Mediterraneo da larghe vetrate: una Stella Michelin, lo chef Giuseppe Causarano e il pastry chef Antonio Colombo, un orto proprio — \"Gli Orti del Votavota\" — da cui arrivano molte delle verdure in carta.",
          "Il ritorno passa da Scicli. Via Francesco Mormina Penna è una strada breve e senza sbavature, con i palazzi e le chiese allineati come in un disegno; la Chiesa di San Bartolomeo ha un interno che non ci si aspetta dalla facciata, e Palazzo Beneventano espone sulle mensole una processione di mascheroni. Il municipio, per chi ha guardato la serie, è il commissariato."
        ],
        note: [
          "Si dorme di nuovo a Ragusa Ibla.",
          "Pranzo o cena — Votavota, Lungomare Andrea Doria 48, Marina di Ragusa, tel. 334 1426962; oppure Don Peppinu o Coffee delle Rose, più informali, sullo stesso lungomare.",
          "Da verificare prima di partire — Castello di Donnafugata, tel. 0932 676500, chiuso il lunedì."
        ],
        ristoranti: ["Votavota"],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Modica, in verticale",
        paragrafi: [
          "Modica sta dentro una gola e si legge su due piani. In basso il Corso Umberto I, che era un torrente e oggi è una strada; in alto la città vecchia, aggrappata al fianco della roccia. Fra le due il Duomo di San Giorgio, in cima a una scalinata di circa duecentocinquanta gradini che si salgono lentamente, con qualche sosta dichiarata come pausa panoramica.",
          "Il cioccolato di Modica si lavora a freddo: lo zucchero non si scioglie e resta in cristalli, così il morso è granuloso e la pasta di cacao conserva il suo sapore intero. All'Antica Dolceria Bonajuto, in fondo al corso, si può assistere alla lavorazione e assaggiare anche le 'mpanatigghi, dolcetti ripieni di cioccolato e carne di manzo che arrivano dritti dalla dominazione spagnola.",
          "La cena si fa da Radici – L'Osteria di Accursio, accanto al Duomo di San Pietro: lo chef Accursio Craparo, siciliano di Sciacca tornato a mettere radici qui nel 2019, si è formato anche nelle cucine di Corrado Assenza — lo stesso maestro che si incontrerà fra due giorni a Noto. Nel pomeriggio, la Cava d'Ispica: un canyon lungo tredici chilometri scavato da grotte preistoriche, necropoli, catacombe e chiese rupestri. Si entra dal Parco Archeologico sul lato Modica o dal Parco della Forza sul lato Ispica."
        ],
        note: [
          "Si dorme a Modica.",
          "Cena — Radici – L'Osteria di Accursio, Via Grimaldi 55, tel. 331 2369404.",
          "La colazione — Caffè dell'Arte, via Sacro Cuore 64a, tel. 0932 943257, apre alle sei e mezza. In città alta, Gran Bar, corso Sicilia 20, per la granita di gelsi.",
          "Numeri utili — Antica Dolceria Bonajuto, tel. 0932 941225 (degustazioni su prenotazione); Parco archeologico della Cava d'Ispica, tel. 0932 771667."
        ],
        ristoranti: ["Radici – L'Osteria di Accursio"],
        produttori: []
      },
      {
        label: "Giorno quarto",
        titolo: "La riserva, il borgo, la punta dell'isola",
        paragrafi: [
          "La Riserva di Vendicari si visita al mattino, prima che il sole diventi ingombrante. È una striscia di pantani salmastri dove sostano i fenicotteri, con una tonnara dismessa e una torre sveva in riva al mare e due spiagge che si raggiungono soltanto a piedi, Calamosche ed Eloro. L'ombra è pochissima: acqua e scarpe comode non sono un consiglio, sono una condizione.",
          "A mezzogiorno si pranza a Marzamemi, che era un villaggio di tonnaroti e ha conservato le case basse attorno a Piazza Regina Margherita e alla tonnara. Nel pomeriggio si scende ancora, fino a Portopalo e all'Isola delle Correnti, il punto più a sud della Sicilia continentale: quando il mare è calmo ci si arriva a piedi, con l'acqua alle ginocchia, e da lì Ionio e Mediterraneo sono la stessa cosa.",
          "In serata si risale verso Noto, trentacinque chilometri. Conviene arrivarci quando è già buio: il corso illuminato, con la pietra che vira al miele, giustifica da solo il cambio di base."
        ],
        note: [
          "Si dorme a Noto.",
          "La colazione prima di partire — Caffè dell'Arte a Modica, apre alle sei e mezza. A Vendicari non c'è nulla: conviene arrivare con acqua e qualcosa da mangiare.",
          "Numeri utili — Riserva di Vendicari, tel. 0931 468879."
        ],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "Noto al mattino, il Ciane e Ortigia alla sera",
        paragrafi: [
          "Noto fu ricostruita da zero, altrove rispetto alla città distrutta, e questo si vede: è l'unica delle città del Val di Noto pensata tutta insieme, come un progetto. La Cattedrale di San Nicolò chiude la scenografia in cima alla sua scalinata; la cupola crollò nel 1996 ed è stata ricostruita, e oggi si sale. In via Nicolaci, Palazzo Villadorata regge i balconi con mensole scolpite a cavalli, sirene e figure grottesche: è il punto in cui il barocco netino smette di essere composto e si diverte.",
          "Ma la vera ragione per fermarsi a lungo a Noto ha il nome di un uomo solo: Corrado Assenza. Nato qui nel 1960, cresciuto nel laboratorio di famiglia — il Caffè Sicilia, aperto nel 1892 — si laureò in Agraria a Bologna specializzandosi in apicoltura prima di tornare nel 1985 a guidare l'attività. La sua filosofia, quella di un pasticcere che ragiona da agronomo, gli è valsa le Tre Torte del Gambero Rosso per anni consecutivi, il Premio Veronelli, e nel 2018 un intero episodio di Chef's Table: Pastry su Netflix, che ha reso Noto una meta di culto per i viaggiatori gourmet di tutto il mondo. La sua influenza attraversa anche altri due indirizzi di questo itinerario — Accursio Craparo a Modica e Marco Baglieri qui a Noto, entrambi suoi allievi.",
          "Prima di lasciare la zona, un'ultima uscita: la Riserva Naturale Orientata del Fiume Ciane, l'unico luogo in Europa dove il papiro cresce spontaneo lungo un corso d'acqua dolce, si visita in barca a remi risalendo la corrente fra le canne. Antonio Vella, di una famiglia di barcaioli locali, accompagna l'escursione, che tocca anche le Saline di Siracusa. Nel pomeriggio, quaranta minuti di strada, e Ortigia: aperitivo sul lungomare, il tramonto dalla Fonte Aretusa — una sorgente d'acqua dolce a due passi dal mare, con i papiri — e la prima cena nell'isola."
        ],
        note: [
          "Si dorme a Siracusa, in Ortigia (prima delle tre notti).",
          "Colazione — Caffè Sicilia, Corso Vittorio Emanuele 125, tel. 0931 835013, Corrado Assenza; oppure Caffè Costanzo, via Silvio Spaventa 7/9, con meno coda.",
          "Cena — Ristorante Crocifisso, Via Principe Umberto 48, tel. 0931 968608, chef Marco Baglieri.",
          "Da prenotare — escursione al Fiume Ciane e alle Saline con Antonio Vella, tel. 346 1599635."
        ],
        ristoranti: ["Caffè Sicilia", "Ristorante Crocifisso"],
        produttori: [
          { nome: "Escursioni Antonio Vella (Fiume Ciane)", url: "tel:+393461599635" }
        ]
      },
      {
        label: "Giorno sesto",
        titolo: "Catania, o l'Etna",
        paragrafi: [
          "Da Siracusa a Catania è poco più di un'ora, in auto o in treno; il treno risolve il problema del traffico e dei parcheggi, che in città è reale. Conviene partire presto, perché la Pescheria chiude a metà mattina: è un mercato urlato che va in scena dal lunedì al sabato dalle sette alle quattordici, dietro Piazza del Duomo, e attorno al pesce si dispongono banchi di frutta, spezie e formaggi.",
          "In Piazza del Duomo stanno la fontana con l'elefantino di pietra lavica — 'u Liotru, simbolo della città — e la Cattedrale di Sant'Agata, che poggia su terme romane e custodisce la tomba di Bellini. Poche centinaia di metri più su, via Crociferi allinea quattro chiese barocche una dopo l'altra ed è la strada più bella della città.",
          "Chi preferisce la montagna al centro storico può dedicare mezza giornata all'Etna: dal Rifugio Sapienza, un'ora da Catania a milleottocento metri, si raggiungono a piedi i crateri Silvestri, e funivia e fuoristrada salgono più in alto."
        ],
        note: [
          "Si torna a dormire a Siracusa.",
          "La colazione a Catania — Comis Ice Cafè, piazza Bellini 8, davanti al Teatro Massimo; oppure Savia, via Etnea 300, dal 1897.",
          "Da prenotare — Monastero dei Benedettini, tel. 334 9242464, si visita solo con guida."
        ],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno settimo",
        titolo: "La città greca, e il congedo",
        paragrafi: [
          "L'ultimo giorno appartiene a Siracusa. Al Parco della Neapolis si arriva presto, appena aperto: il Teatro Greco è scavato nella roccia viva, l'Anfiteatro romano poco più in là, e nelle latomie si apre l'Orecchio di Dionisio, una grotta artificiale con un'acustica che ha prodotto più leggende che spiegazioni. Il Museo Paolo Orsi, poco distante, è uno dei più ricchi del Mediterraneo.",
          "Il pomeriggio si passa in Ortigia. In Piazza Duomo la cattedrale è costruita dentro il tempio dorico di Atena del quinto secolo avanti Cristo: le colonne greche sono ancora lì, inglobate nelle pareti della navata, e si toccano. Al mercato di via Trento si comprano le ultime cose da portare a casa. La cena di congedo si fa da Area M, sulla Riva Nazario Sauro, cucina di mare con vista; o da Don Camillo, dal 1985 nelle rovine di un edificio crollato nel terremoto del 1693 — due modi diversi di chiudere lo stesso viaggio."
        ],
        note: [
          "Si dorme a Siracusa, oppure si va verso l'aeroporto: un'ora scarsa.",
          "Cena — Area M, Riva Nazario Sauro 6, tel. 0931 21367; oppure Don Camillo, Via delle Maestranze 96, tel. 0931 67133.",
          "La colazione — CCA' e DDA', via Dione 24, tel. 328 9655162: per molti la granita migliore dell'isola."
        ],
        ristoranti: ["Area M", "Don Camillo"],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Ragusa Ibla", notti: "due notti",
          strutture: [
            { nome: "Locanda Don Serafino", contatto: "Via XI Febbraio 15, tel. 0932 220065", testo: "Palazzo dell'Ottocento nel cuore di Ibla, gestito dalla famiglia La Rosa dal 1953: poche camere raffinate, il ristorante stellato a pochi passi." },
            { nome: "Terra del Sole Ibla", contatto: "Corso Mazzini 165, tel. 391 4080930", testo: "Camere ampie e balconi affacciati sui tetti di Ibla. Nanni, che la gestisce, dà indicazioni sui posti dove mangiare che di solito si rivelano giuste." },
            { nome: "Belvedere all'Idria", contatto: "Corso Mazzini 159/B, tel. 338 2035377", testo: "A metà strada fra Ragusa alta e Ibla, con la colazione servita in camera e la stessa vista sulla vallata." },
            { nome: "Terrazza dei Sogni", contatto: "Vico Domenico Morelli 8, tel. 333 4939521", testo: "Nella parte bassa di Ibla, dunque con poche scale da fare. Terrazza panoramica e dolci fatti in casa la mattina." }
          ]
        },
        {
          zona: "Modica", notti: "una notte",
          strutture: [
            { nome: "Casa Catalè", contatto: "Vico Giusto 18, tel. 340 3772407", testo: "Un palazzo storico arredato con libri, quadri e mobili di provenienze diverse. Alessandro e Caterina accolgono gli ospiti di persona." },
            { nome: "Stanze Barocche", contatto: "Via Santa 12, tel. 334 2879360", testo: "Interni in stile, posizione centrale, prezzi contenuti." },
            { nome: "Modica Old Town Rooms", contatto: "Via Santa 15, tel. 0932 1855115", testo: "Ingresso con codice e cucina in comune, nel cuore della città vecchia." }
          ]
        },
        {
          zona: "Noto", notti: "una notte",
          strutture: [
            { nome: "Dea's Rooms", contatto: "Vico Giunchiglia 1, tel. 339 5211825", testo: "Poche camere e una terrazza dove si fa colazione con marmellate, olive e pane fatti in casa." },
            { nome: "Filinona", contatto: "Via Venti Settembre 30, tel. 392 3661692", testo: "La casa d'infanzia di chi la gestisce, ristrutturata da poco. Silenziosa, a due passi dal corso." },
            { nome: "Embrace Sicily", contatto: "Via Giovanni Nicotera 46, tel. 0931 891104", testo: "Due fratelli, Paolo e Carlo, e una casa disegnata con attenzione. Si parcheggia liberamente in strada." },
            { nome: "Marla's Boutique Rooms", contatto: "Piazza Simon Bolivar 18, tel. 329 4215448", testo: "Fuori dal centro di pochi minuti a piedi, con posto auto davanti alla porta." },
            { nome: "Braccialieri", contatto: "Contrada Seggio, tel. 376 2414542", testo: "Antico baglio ottocentesco tra ulivi secolari, tre suite e sei eco-ville nella campagna di Avola, a due passi da Noto." }
          ]
        },
        {
          zona: "Siracusa, Ortigia", notti: "tre notti",
          strutture: [
            { nome: "Dimore delle Zagare", contatto: "Via Tommaso Gargallo 52, tel. 338 5392475", testo: "Via tranquilla ma dentro l'isola, camere spaziose, gestione attenta senza essere invadente." },
            { nome: "Aretusa Vacanze", contatto: "Vicolo Zuccalà 1, tel. 0931 483484", testo: "Tre generazioni della stessa famiglia, una terrazza sullo Ionio per l'aperitivo e la marmellata di gelsi a colazione." },
            { nome: "Casa by Duomo", contatto: "Ronco I Bottai 16, tel. 351 3321698", testo: "Pochissime stanze a due passi da Piazza Duomo, con i proprietari che vivono lì accanto." },
            { nome: "Ortigia Bed and Breakfast", contatto: "Via Dione 8, tel. 345 0465006", testo: "Semplice e ben tenuto, con il caffè disponibile a qualunque ora del giorno e della notte." }
          ]
        }
      ],

      tavola: {
        intro: "Gli indirizzi principali sono già segnati giorno per giorno; li ripetiamo qui in ordine di percorso, con qualche opzione in più.",
        voci: [
          { nome: "Locanda Don Serafino" },
          { nome: "Votavota" },
          { nome: "Radici – L'Osteria di Accursio" },
          { nome: "Caffè Sicilia" },
          { nome: "Ristorante Crocifisso" },
          { nome: "Area M" },
          { nome: "Don Camillo" }
        ]
      },

      approfondimenti: [
        {
          titolo: "Gli arancini",
          testo: "Una questione di lessico, prima di ordinare. Nella Sicilia orientale è arancino, al maschile, e a Catania ha spesso la punta, di forma conica. A Palermo è invece l'arancina, tonda e femminile, e la discussione fra le due sponde dell'isola non si è mai chiusa. Le farciture di partenza sono due, al ragù e al burro; tutte le altre — pistacchio, spinaci e ricotta, nero di seppia, alla Norma — sono arrivate dopo. Lungo questo itinerario, buoni indirizzi si trovano a Ragusa (Aranci, the King of Rice, via Archimede 375), a Noto (Ziu Currao, via G. Salvemini 36; Bread and Panelle Andrea, via Matteo Raeli 7), a Siracusa dentro Ortigia (Antica Giudecca, via della Giudecca 26, forno di famiglia con la fila fuori quasi garantita; U Siciliano, poco distante) e a Catania (Munnu Arancinu, via Lavandaie 36; Serafino, via Musumeci 90; Savia, via Etnea 300, dal 1897)."
        },
        {
          titolo: "La colazione: granita e brioche",
          testo: "Nella Sicilia orientale la granita non è un gelato e non è un dopocena: è la colazione. Si ordina con la brioche col tuppo — il nome viene dal nodo di capelli che le donne portavano sulla nuca — e la si mangia inzuppando, o alternando cucchiaio e morso, secondo scuole che nessuno ha mai conciliato. I gusti d'origine sono mandorla, limone, gelsi e caffè; il pistacchio è arrivato molto dopo, e la cioccolata è una specialità catanese. Il nome più importante di questa tradizione, lungo tutto il percorso, resta però uno solo: Corrado Assenza e il suo Caffè Sicilia a Noto, dove la granita si accompagna a un intero mondo di pasticceria che ha conquistato critici internazionali e una puntata di Netflix. Altri indirizzi affidabili: a Ragusa Ibla, Dolci d'Autore e Pasticceria Iudice; a Modica, Caffè dell'Arte e Gran Bar; a Marina di Ragusa, Coffee delle Rose sul lungomare; a Siracusa, CCA' e DDA' in via Dione, spesso citata come la granita migliore dell'isola; a Catania, Comis Ice Cafè davanti al Teatro Massimo Bellini."
        },
        {
          titolo: "Il cioccolato, e quello che si porta a casa",
          testo: "L'Antica Dolceria Bonajuto di Modica, corso Umberto I 159, è la più antica fabbrica di cioccolato dell'isola: le barre si assaggiano prima di comprarle — cannella, peperoncino, sale — e su prenotazione si segue la lavorazione a freddo, dalla fava alla tavoletta. A Marzamemi, la famiglia Campisi lavora il tonno dal 1854: bottarga, ventresca, mosciame, sotto vetro e sotto sale. A Siracusa, il mercato di via Trento — pomodori secchi, capperi, origano, mandorle — resta il posto giusto per gli ultimi acquisti, il mattino della partenza."
        }
      ],

      aTavola: {
        titolo: "Che cosa cambia, chilometro dopo chilometro",
        testo: "Sull'altopiano si mangia di terra. I ravioli di ricotta al sugo di maiale sono il piatto d'identità degli Iblei; accanto ci sono i cavati tirati con il pollice, la scaccia ragusana, il caciocavallo ragusano, il coniglio alla stimpirata, e il cioccolato di Modica con le sue 'mpanatigghi. Scendendo verso Noto e la punta dell'isola comincia il passaggio: il tonno di Marzamemi in tutte le sue conserve, la mandorla di Avola, il Nero d'Avola e il Moscato di Noto. E a Noto, più di ogni altro luogo di questo itinerario, la pasticceria di Corrado Assenza dimostra come un ingrediente povero — la mandorla, il gelso, il pistacchio — possa diventare materia di ricerca internazionale senza perdere un grammo della propria origine contadina. A Siracusa il mare prende il sopravvento: spaghetti ai ricci quando è stagione, pasta alla siracusana, gambero rosso e tonno crudi. A Catania si cambia ancora: la pasta alla Norma, le cipolline e le cartocciate di rosticceria, la granita con la brioche che è colazione e non merenda."
      }
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Comiso e Catania", testo: "Comiso è a quindici chilometri da Ragusa e sarebbe l'inizio ideale, ma ha pochi voli. Catania Fontanarossa ne ha molti di più e dista due ore dal punto di partenza: chiudendo a Siracusa resta comunque a un'ora dall'ultima notte." },
      { titolo: "L'AUTO", sotto: "indispensabile, sempre", testo: "Donnafugata, Punta Secca, Vendicari e Marzamemi non hanno alternative. Le strade dell'altopiano sono strette e curve: i tempi reali sono sempre un po' più lunghi di quelli calcolati dal navigatore." },
      { titolo: "LE ZONE A TRAFFICO LIMITATO", sotto: "Ibla, Modica alta, Noto, Ortigia", testo: "Tutte e quattro. Conviene lasciare l'auto nei parcheggi esterni e muoversi a piedi; a Ortigia il più comodo è il Talete, all'ingresso dell'isola." },
      { titolo: "LE CHIUSURE", sotto: "da segnare sul calendario", testo: "Donnafugata è chiuso il lunedì e la Pescheria di Catania la domenica. Quasi ogni trattoria ha poi un giorno di riposo infrasettimanale, e le gastronomie chiudono nel primo pomeriggio per riaprire verso le diciassette." },
      { titolo: "LA STAGIONE", sotto: "aprile-giugno, settembre-ottobre", testo: "Clima praticabile, mare ancora godibile, città meno affollate. A luglio e agosto il caldo sull'altopiano e dentro le città è un fattore da mettere in conto nella costruzione delle giornate." },
      { titolo: "SE I GIORNI DIVENTANO CINQUE", sotto: "cosa si toglie", testo: "La giornata di Catania e una notte a Ragusa. Restano Ibla, Modica, Noto e Ortigia, che è già un viaggio intero." }
    ],

    numeriUtili: [
      "Da prenotare — Monastero dei Benedettini, Catania, tel. 334 9242464 (solo visite guidate); Antica Dolceria Bonajuto, Modica, tel. 0932 941225 (degustazioni); escursione al Fiume Ciane e alle Saline con Antonio Vella, tel. 346 1599635.",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Da verificare prima di partire — Castello di Donnafugata, tel. 0932 676500 (chiuso il lunedì); Riserva di Vendicari, tel. 0931 468879; Cava d'Ispica, tel. 0932 771667.",
      "Numeri di emergenza — 112 per qualunque emergenza; 1530 per il soccorso in mare."
    ]
  },

  "alto-molise": {
    occhiello: "Un itinerario per due",
    titolo: "Da Castel del Giudice a Vastogirardi",
    sottotitolo: "l'Alto Molise, tra un borgo rinato, la pietra di Pescopennataro, l'acciaio di Frosolone e il latte di montagna di Vastogirardi",
    regione: "Molise",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_2272_jitpne",
    tappe: ["Castel del Giudice", "Pescopennataro", "Frosolone", "Vastogirardi"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "L'Alto Molise non ha bisogno di spiegazioni sul perché resti fuori dalle rotte più battute: è una manciata di borghi a mille metri di quota, incastonati tra faggete e valli strette, dove il turismo di massa non è mai arrivato per la semplice ragione che non c'era una strada comoda per farlo arrivare. Chi ci va, ci va apposta.",
      "Castel del Giudice ne è il punto di partenza naturale. Trecento abitanti, un tempo sull'orlo dello spopolamento, oggi un caso studiato altrove: quaranta ettari di meleto biologico dove c'erano solo terreni incolti, un birrificio agricolo che usa l'orzo coltivato a pochi passi, un apiario di comunità gestito da trenta apicoltori. Il simbolo di questa rinascita è Borgo Tufi, l'albergo diffuso nato dal recupero di case e stalle abbandonate — la base per tutti e quattro i giorni che seguono.",
      "Quattro giorni, tre notti, sempre nello stesso letto: da qui si parte ogni mattina verso un paese diverso e si torna a dormire nello stesso borgo. Pescopennataro per la pietra, Frosolone per l'acciaio, Vastogirardi per il latte di montagna e per un tempio che ha duemila anni."
    ],

    percorso: {
      intro: "Borgo Tufi come base fissa per tre notti, con Pescopennataro, Frosolone e Vastogirardi come gite in giornata.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Arrivo, Castel del Giudice", km: "", testo: "Check-in a Borgo Tufi, primo giro del borgo rinato." },
        { giorno: "Giorno secondo", titolo: "Pescopennataro, il paese della pietra", km: "7 km", testo: "Il Museo della Pietra, il Parco di Pinocchio." },
        { giorno: "Giorno terzo", titolo: "Frosolone e Vastogirardi", km: "~35 km + ~24 km", testo: "I coltelli, poi il tempio sannitico e il caseificio." },
        { giorno: "Giorno quarto", titolo: "Congedo", km: "", testo: "Nessuna tappa fissa." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Arrivo, Castel del Giudice",
        paragrafi: [
          "Si arriva nel pomeriggio, dopo strade che si stringono man mano che si sale — l'ultimo tratto verso Castel del Giudice non lascia dubbi sul fatto che questo è un paese di montagna, ottocento metri sul livello del mare, a un passo dal confine con l'Abruzzo. Il check-in a Borgo Tufi è anche una prima visita: le camere sono ricavate nelle vecchie stalle e case coloniche del borgo, restaurate senza tradire la pietra a vista.",
          "Il resto del pomeriggio si passa a piedi, tra il meleto biologico della cooperativa Melise (quaranta ettari, dove vent'anni fa c'erano solo campi abbandonati) e il birrificio agricolo Malto Lento, che usa l'orzo coltivato proprio qui. Le trecento arnie dell'apiario di comunità completano il quadro di un paese che ha scelto di ripartire dalla terra invece di aspettare che si svuotasse."
        ],
        note: ["Si dorme a Borgo Tufi (prima delle tre notti)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "Pescopennataro, il paese della pietra",
        paragrafi: [
          "Pescopennataro è a poco più di sei chilometri, ma il paesaggio cambia in fretta: milleduecento metri di quota, boschi di abeti bianchi ormai rari sull'intero Appennino, e un nome — 'il paese della pietra e degli abeti' — che dice già tutto. Il paese sorge su uno sperone roccioso da cui si intravede, nelle giornate limpide, il mare Adriatico.",
          "Al Museo Civico della Pietra 'Chiara Marinelli' si ripercorre una tradizione di scalpellini che risale al Medioevo — una scuola per la lavorazione della pietra fu aperta qui già nel Settecento. L'ultimo maestro scalpellino del paese è scomparso di recente: resta il museo, e resta il Parco di Pinocchio, un sentiero nel bosco punteggiato di sculture nate da due simposi internazionali."
        ],
        note: ["Il Museo della Pietra richiede prenotazione.", "Si dorme di nuovo a Borgo Tufi.", "Pranzo o cena — L'Abete Bianco, ristorante-parco tra gli abeti, Via Turistica 99."],
        ristoranti: ["L'Abete Bianco"],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Frosolone e Vastogirardi",
        paragrafi: [
          "Frosolone è un'altra Italia rispetto a Pescopennataro: qui la pietra lascia il posto all'acciaio. La tradizione della forgiatura arriva nel Quattrocento con artigiani veneziani, e nell'Ottocento i coltelli e i rasoi di Frosolone competevano — la citazione è di Benedetto Croce — con quelli di Toledo e Sheffield. Al Museo dei Ferri Taglienti si può ancora guardare un fabbro al lavoro sull'incudine, la stessa tecnica di sempre. Poco distante, la bottega di Rocco Petrunti tiene viva la tradizione di famiglia dal 1800.",
          "Una storia laterale vale la deviazione: due famiglie di emigranti frosolonesi, i Miranda e i Paolantonio, fondarono a Providence, negli Stati Uniti, quelle che diventarono l'Imperial Knife e la Colonial Knife Company — tra le più grandi coltellerie del mondo del Novecento, nate dal sapere portato via da questo paese di montagna.",
          "Il pomeriggio porta a Vastogirardi, altro paese di pastori e casari — è qui, al Caseificio Fonte Luna, che si lavora ancora a mano il caciocavallo di montagna, a milleduecento metri di quota. Poco fuori dal centro, in un prato circondato da faggi, restano i resti di un tempio sannitico del secondo secolo avanti Cristo: un podio in pietra su cui, secoli dopo, fu costruita una chiesa medievale dedicata a Sant'Angelo. Nessuna recinzione, nessun biglietto — solo il rumore del Trigno che nasce lì vicino."
        ],
        note: ["Si dorme un'ultima volta a Borgo Tufi.", "Cena — Il Vecchio Granaio, Vastogirardi."],
        ristoranti: ["Il Vecchio Granaio"],
        produttori: [
          { nome: "Rocco Petrunti", url: "https://www.roccopetrunti.it" },
          { nome: "Caseificio Fonte Luna", url: "https://www.caseificiofonteluna.it" }
        ]
      },
      {
        label: "Giorno quarto",
        titolo: "Congedo",
        paragrafi: [
          "Il congedo è breve: nessuna tappa fissa, solo la strada del ritorno — verso l'aeroporto di Pescara, il più vicino ai borghi dell'Alto Molise, o verso la propria auto."
        ],
        note: [],
        ristoranti: [],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        { zona: "Castel del Giudice", notti: "tre notti",
          strutture: [{ nome: "Borgo Tufi", contatto: "Via Borgo Tufi 80, tel. 0865 946820", testo: "Albergo diffuso nato dal recupero di case e stalle abbandonate, simbolo della rinascita del borgo, con ristorante interno e spa." }] }
      ],
      tavola: {
        intro: "Due soli indirizzi, uno per gita: bastano per quattro giorni in un territorio così piccolo.",
        voci: [
          { nome: "L'Abete Bianco" },
          { nome: "Il Vecchio Granaio" }
        ]
      },
      approfondimenti: [
        { titolo: "Il paese della pietra", testo: "Dal Medioevo al Settecento, quando fu aperta una vera scuola di scalpellini, Pescopennataro ha esportato maestranze in tutto l'Alto Molise. Oggi quella tradizione vive solo nel Museo della Pietra 'Chiara Marinelli', dopo la scomparsa dell'ultimo artigiano attivo in paese." },
        { titolo: "Dai coltelli di Frosolone a Providence", testo: "L'arte della forgiatura arrivò a Frosolone nel Quattrocento con artigiani veneziani. Ottocento anni dopo, l'emigrazione portò due famiglie del paese a fondare negli Stati Uniti l'Imperial Knife e la Colonial Knife Company — nomi che pochi collegano ancora a questo borgo di montagna." },
        { titolo: "Un tempio di duemila anni, senza biglietto", testo: "Il santuario sannitico di Vastogirardi risale al II secolo a.C. Nel Medioevo, sui suoi resti fu costruita una chiesa dedicata a Sant'Angelo — la stessa sovrapposizione di culti (Ercole, poi il santo cristiano) che si ritrova in molti siti dell'Appennino." }
      ]
    },

    primaDiChiudere: [
      { titolo: "GLI AEROPORTI", sotto: "Pescara, il più vicino", testo: "L'aeroporto di Pescara-Abruzzo è il collegamento più comodo; Roma Fiumicino e Ciampino restano un'alternativa più distante." },
      { titolo: "L'AUTO", sotto: "indispensabile", testo: "Nessuno dei quattro borghi è raggiungibile comodamente senza auto propria; le strade sono di montagna, strette e panoramiche." },
      { titolo: "LA STAGIONE", sotto: "da aprile a ottobre", testo: "L'inverno porta neve e temperature rigide sopra i mille metri; la stagione turistica si concentra tra primavera e autunno." },
      { titolo: "I MUSEI", sotto: "spesso su prenotazione", testo: "Il Museo della Pietra di Pescopennataro e i musei civici di Frosolone richiedono la prenotazione: da verificare orari e disponibilità prima di partire." }
    ],

    numeriUtili: [
      "Da prenotare — Museo della Pietra (Pescopennataro), Museo dei Ferri Taglienti (Frosolone), entrambi su prenotazione.",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza."
    ]
  },

  "ischia": {
    occhiello: "Un itinerario per due",
    titolo: "Dalla Baia di San Montano al Castello Aragonese",
    sottotitolo: "sei giorni tra terme, stelle Michelin e il giardino di Susana Walton",
    regione: "Campania",
    copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_2343_ciaqg8",
    tappe: ["Forio", "Giardini La Mortella", "Ischia Ponte", "Castello Aragonese", "Sant'Angelo", "Baia di Sorgeto", "Nitrodi", "Baia di San Montano", "Negombo"],

    epigrafe: {
      testo: "Raccontiamo, non giudichiamo. La libertà di scoprire appartiene a chi viaggia, non a chi scrive.",
      fonte: ""
    },

    apertura: [
      "Ischia non è un'isola sola: è almeno tre isole nella stessa isola. C'è l'isola termale, quella che i greci conoscevano già come luogo di cura, con sorgenti sacre e parchi che sono più giardino che stabilimento. C'è l'isola gastronomica, che in pochi chilometri quadrati conta più stelle Michelin che intere regioni. E c'è l'isola storica, dominata da una rocca che guarda il golfo di Napoli da venticinque secoli.",
      "La base è Forio, sul versante ovest: Umberto a Mare, undici camere incastonate nella roccia sotto la chiesa del Soccorso, stella Michelin nel ristorante di sotto. Chi cerca qualcosa di più esclusivo può scegliere il Mezzatorre, sull'altro capo dell'isola: due alberghi diversissimi per stile e prezzo, accomunati dalla stessa cosa — una vista sul mare con il tramonto davanti agli occhi.",
      "Sei giorni, cinque notti, un'auto a noleggio o un autista di fiducia: il tempo di girare l'isola intera senza avere fretta."
    ],

    percorso: {
      intro: "Umberto a Mare come base fissa a Forio, con gite quotidiane verso i quattro angoli dell'isola.",
      giorni: [
        { giorno: "Giorno primo", titolo: "Arrivo, Forio", km: "", testo: "Traghetto da Napoli, check-in, i bastioni al tramonto." },
        { giorno: "Giorno secondo", titolo: "I Giardini La Mortella", km: "5 km", testo: "Il giardino di Susana Walton e Russell Page." },
        { giorno: "Giorno terzo", titolo: "Ischia Ponte e il Castello Aragonese", km: "12 km", testo: "Venticinque secoli di storia, il pane di Boccia." },
        { giorno: "Giorno quarto", titolo: "Sant'Angelo e le terme naturali", km: "15 km", testo: "Il borgo pedonale, la Baia di Sorgeto." },
        { giorno: "Giorno quinto", titolo: "Nitrodi, Negombo e la Baia di San Montano", km: "20 km", testo: "Due terme, il miele di Franco Conte, cena da Danì Maison." },
        { giorno: "Giorno sesto", titolo: "Congedo", km: "", testo: "Nessuna tappa fissa." }
      ]
    },

    giorni: [
      {
        label: "Giorno primo",
        titolo: "Arrivo, Forio",
        paragrafi: [
          "Il traghetto Caremar o l'aliscafo Alilauro da Napoli impiegano tra un'ora e un'ora e quaranta, a seconda della scelta. Ischia si presenta da lontano con il profilo del Monte Epomeo, poi via via i colori dei paesi che si affacciano sul mare. Il check-in a Umberto a Mare è già un primo assaggio: undici camere incastonate nel promontorio del Soccorso, a venti metri dalla chiesa omonima, con il mare come unico vero arredo.",
          "Il resto del pomeriggio si passa a piedi per il centro storico di Forio, fino ai bastioni: è qui, al tramonto, che si vede — nelle giornate più limpide — il leggendario raggio verde, l'ultimo lampo di luce quando il sole tocca l'orizzonte."
        ],
        note: ["Si dorme a Umberto a Mare (prima delle cinque notti).", "Cena — Umberto a Mare, il ristorante dell'albergo stesso."],
        ristoranti: ["Umberto a Mare"],
        produttori: []
      },
      {
        label: "Giorno secondo",
        titolo: "I Giardini La Mortella",
        paragrafi: [
          "Nel 1956 Susana Walton, moglie argentina del compositore inglese William Walton, chiamò il paesaggista Russell Page — grande ammiratore della sua musica — per disegnare un giardino tra le rocce vulcaniche del promontorio di Zaro. Page tracciò la Valle, il giardino più basso, subtropicale e umido; la Collina, terrazzata a muri a secco, restò invece opera di Lady Walton stessa, che vi lavorò per oltre cinquant'anni seguendo solo la propria ispirazione. Aperto al pubblico dal 1991, il giardino prende il nome dai cespugli di mirto — 'mortella', in dialetto — che crescevano tra le rocce prima che diventassero altro.",
          "Non è un caso che la sera si torni a cena da Danì Maison, qualche giorno dopo: anche lì, dietro la casa di famiglia di Nino Di Costanzo, un giardino curato con la stessa pazienza ossessiva accompagna l'ingresso al ristorante. Nessun legame storico tra i due — solo la stessa cura, applicata a distanza di decenni e di scopi diversi."
        ],
        note: ["Si dorme di nuovo a Umberto a Mare.", "Il giardino richiede la prenotazione online, verificare i giorni di apertura (mar/gio/sab/dom)."],
        ristoranti: [],
        produttori: []
      },
      {
        label: "Giorno terzo",
        titolo: "Ischia Ponte e il Castello Aragonese",
        paragrafi: [
          "Il Castello Aragonese è un'isola nell'isola: uno scoglio di tufo alto oltre cento metri, collegato a Ischia Ponte da un ponte di pietra voluto da Alfonso d'Aragona nel 1441. Venticinque secoli di storia si accumulano tra le sue mura — fortezza, residenza reale, convento di clausura, carcere borbonico — fino a diventare, oggi, il monumento più visitato dell'isola: cattedrale, giardini pensili, il Museo delle Torture, una terrazza panoramica sull'intero golfo di Napoli.",
          "Prima di risalire in auto, una tappa al Panificio Boccia, a cinquanta metri dal castello: attivo dal 1938, quattro generazioni della stessa famiglia, è qui che nasce il pane usato per la zingara ischitana, il crostone di prosciutto crudo e fior di latte diventato un classico dell'isola."
        ],
        note: ["Si dorme un'altra volta a Umberto a Mare.", "Il Castello chiude per manutenzione da inizio gennaio a inizio marzo: verificare prima di partire.", "Cena — Il Saturnino, sul porto di Forio."],
        ristoranti: ["Saturnino"],
        produttori: []
      },
      {
        label: "Giorno quarto",
        titolo: "Sant'Angelo e le terme naturali",
        paragrafi: [
          "Sant'Angelo è un borgo di pescatori collegato a un isolotto da un sottile istmo di sabbia, nel comune di Serrara Fontana. Niente auto: si arriva a piedi, tra case color pastello raccolte intorno a una piazzetta che guarda il mare. Da qui, un taxi boat porta in pochi minuti alla Baia di Sorgeto, dove l'acqua termale sgorga direttamente dalla roccia e si mescola gratuitamente con quella del mare, in piscine naturali scavate nella pietra.",
          "Lungo il litorale verso i Maronti si incontrano le Fumarole di Cava Petrelle: la sabbia, qui, è calda al punto da scottare i piedi nudi — un avvertimento più che un consiglio."
        ],
        note: ["Si dorme ancora a Umberto a Mare.", "Cena — L'Isola, per il tramonto sulla terrazza."],
        ristoranti: ["L'Isola"],
        produttori: []
      },
      {
        label: "Giorno quinto",
        titolo: "Nitrodi, Negombo e la Baia di San Montano",
        paragrafi: [
          "La mattina si apre a Barano, alla Fonte delle Ninfe Nitrodi: una sorgente che i coloni greci dedicarono ad Apollo e alle ninfe, con proprietà curative riconosciute ufficialmente dal Ministero della Salute nel 2003. Niente piscine, solo fontane e docce dove l'acqua esce pura dalla roccia a ventotto gradi. A pochi minuti, nella stessa Barano, l'Apicoltura 'E Maist di Franco Conte lavora il miele seguendo le fioriture del suolo vulcanico dell'isola — il suo millefiori ha vinto il primo posto nazionale alle Tre Gocce d'Oro 2024.",
          "Il pomeriggio è per Negombo, nella Baia di San Montano: fondato nel 1946 dal duca Luigi Silvestro Camerini, che diede al parco il nome di una baia di Ceylon che aveva amato durante un esilio politico. Piscine termali, un giardino con piante da ogni continente, opere di Arnaldo Pomodoro e Lucio Del Pezzo tra la vegetazione.",
          "La sera, la cena più importante del viaggio: da Danì Maison, la casa di famiglia dello chef Nino Di Costanzo trasformata in un ristorante da due stelle Michelin, appena sedici coperti. Va prenotato con largo anticipo."
        ],
        note: ["Ultima notte a Umberto a Mare.", "Negombo è aperto solo da aprile a ottobre."],
        ristoranti: ["Danì Maison"],
        produttori: [
          { nome: "Apicoltura 'E Maist — Franco Conte", url: "https://www.ischiamielemaist.it" }
        ]
      },
      {
        label: "Giorno sesto",
        titolo: "Congedo",
        paragrafi: [
          "Il congedo è breve: nessuna tappa fissa, solo la strada del ritorno verso il porto o l'imbarco per l'aliscafo. Chi vuole allungare il soggiorno con un finale più esclusivo può spostarsi per un'ultima notte al Mezzatorre, sull'altro capo dell'isola — stesso tramonto sul mare, in una torre aragonese del Cinquecento."
        ],
        note: [],
        ristoranti: [],
        produttori: []
      }
    ],

    taccuino: {
      dormire: [
        {
          zona: "Forio", notti: "cinque notti",
          strutture: [
            { nome: "Umberto a Mare", contatto: "Via Soccorso 8, tel. 081 997171", testo: "Undici camere incastonate nel promontorio del Soccorso, ristorante interno con Stella Michelin dal novembre 2025." },
            { nome: "Mezzatorre", contatto: "Via Mezzatorre 23, tel. 081 986111", testo: "Cinque stelle in una torre di avvistamento aragonese del Cinquecento, baia privata, per chi cerca un finale più esclusivo (alternativa, non incluso nelle cinque notti base)." }
          ]
        }
      ],
      tavola: {
        intro: "Cinque indirizzi diversi in cinque sere, dal più semplice al più celebrato.",
        voci: [
          { nome: "Umberto a Mare" },
          { nome: "Origini — Da Peppina di Renato" },
          { nome: "Saturnino" },
          { nome: "L'Isola" },
          { nome: "Danì Maison" }
        ]
      },
      approfondimenti: [
        { titolo: "Il giardino di Susana Walton", testo: "Cinquant'anni di lavoro personale, dopo l'impianto iniziale di Russell Page, hanno trasformato La Mortella in uno dei giardini privati più celebrati d'Italia. William Walton è sepolto lì, in una roccia del giardino, con un'iscrizione che ricorda il lavoro comune con la moglie." },
        { titolo: "Duemilacinquecento anni in una rocca", testo: "Dal 474 a.C. a oggi, il Castello Aragonese ha attraversato praticamente ogni dominazione del Mediterraneo occidentale — greci, romani, angioini, aragonesi — fino a diventare, nel Settecento, un piccolo borgo autosufficiente di quasi duemila abitanti dentro le sue mura." },
        { titolo: "Un'isola di sorgenti", testo: "Ischia conta più parchi termali di qualunque altra isola italiana: da Nitrodi, sacra già ai greci, ai grandi giardini-stabilimento come Negombo, la cura dell'acqua calda è una costante della sua storia quanto la vite o la pesca." }
      ]
    },

    primaDiChiudere: [
      { titolo: "GLI ARRIVI", sotto: "Caremar o Alilauro da Napoli", testo: "Caremar (traghetto, porta anche le auto) impiega circa un'ora e quaranta da Calata Porta di Massa; Alilauro (aliscafo, solo passeggeri) circa un'ora da Molo Beverello." },
      { titolo: "L'AUTO", sotto: "consigliata, non indispensabile", testo: "L'isola si gira anche in autobus locale o con un autista privato, ma un'auto a noleggio dà più libertà per le gite quotidiane." },
      { titolo: "LA STAGIONE", sotto: "aprile-ottobre per le terme all'aperto", testo: "Negombo e La Mortella sono aperti solo da aprile a ottobre; il Castello Aragonese e i ristoranti restano aperti tutto l'anno, salvo chiusure stagionali da verificare." },
      { titolo: "L'AUTISTA", sotto: "Stani Senese", testo: "Per trasferimenti privati sull'isola: +39 333 6671111 o +39 347 5791074." }
    ],

    numeriUtili: [
      "Da prenotare con largo anticipo — Danì Maison (due stelle Michelin, sedici coperti).",
      "Ristoranti dell'itinerario — vedi il taccuino \"Dove sedersi a tavola\".",
      "Numeri di emergenza — 112 per qualunque emergenza."
    ]
  }

});
