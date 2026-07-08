/* ===================================================================
   T42 — VIAGGIOPERDUE · ARCHIVIO DEI CONTENUTI
   ===================================================================

   QUESTO È L'UNICO FILE CHE DEVI MODIFICARE PER AGGIORNARE IL SITO.
   Non toccare gli altri file (index.html, categoria.html, stile.css...).

   COME AGGIUNGERE UNA NUOVA SCHEDA
   --------------------------------
   1. Trova qui sotto la categoria giusta (locande, trattorie, luoghi,
      artigiani, vignaioli).
   2. Copia un blocco esistente — tutto ciò che sta tra una graffa
      aperta {  e la graffa chiusa con la virgola  },
   3. Incollalo subito sotto, dentro le parentesi quadre [ ... ].
   4. Cambia i testi tra virgolette. Lascia stare i nomi prima dei due punti
      (titolo, luogo, testo...): quelli servono al sito per riconoscere i dati.
   5. Salva e ricarica il file su Aruba. Fatto.

   ATTENZIONE ALLE VIRGOLETTE
   --------------------------
   Il testo va sempre tra "virgolette doppie".
   Se nel testo ti serve una virgoletta, usa quelle ‘singole’ o «caporali».
   Ogni blocco { } va chiuso con una virgola, tranne eventualmente l'ultimo.

   IL CAMPO "telefono"
   -------------------
   Scrivi il numero senza spazi, con prefisso internazionale, es: "+390532000000".
   Sul sito diventerà un pulsante che avvia la chiamata dal cellulare.
   Se non c'è numero, lascia le virgolette vuote: ""

   IL CAMPO "mappa"
   ----------------
   Incolla l'indirizzo o il nome del luogo, es: "Stadera, Ferrara".
   Diventerà un pulsante che apre le indicazioni stradali.

   IL CAMPO "immagine"
   -------------------
   Scrivi il nome del file foto che hai caricato nella cartella "assets",
   es: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_8781_ouxnzu". Se non hai foto, lascia "".
=================================================================== */

const T42 = {

  /* ---- Testi della pagina iniziale (home) ---- */
  sito: {
    nome: "Viaggioperdue",
    sigla: "T42",
    logo: T42_LOGHI.logo,          /* logo a colori, per fondo chiaro */
    logoBianco: T42_LOGHI.logoBianco, /* logo bianco, per il piè di pagina scuro */
    payoff: "",
    introduzione: "Esistono luoghi dove il tempo sembra essersi fermato.\nEsistono persone che sanno fermarsi in questi luoghi.",
    instagram: "https://www.instagram.com/viaggioperdue",   /* ← metti qui l'indirizzo del tuo profilo */

    /* ---- Stile immersivo della home (ispirato a Domitur) ---- */
    hero: "https://res.cloudinary.com/dspgc41gt/image/upload/f_jpg/Hero.jpg_ffkmdy",                   /* grande foto a tutto schermo */
    heroTitolo: "Viaggioperdue",
    heroSotto: "Destinazioni oltre i luoghi comuni.",

    /* le tre sezioni a parola singola che si incontrano scorrendo */
    sezioni: [
      { parola: "Camera con vista",    testo: "Dimore dove l’ospitalità è autentica e il paesaggio entra dentro le stanze.", immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5181_pp5vga" },
      { parola: "Un tavolo per due",   testo: "Cucine che raccontano un luogo, una stagione, le mani di chi ha scelto di fare le cose a modo suo.", immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_6904_n0zj2j" },
      { parola: "Racconti di viaggio", testo: "Luoghi che non si visitano: si attraversano, e ci lasciano qualcosa.", immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5236_h4rgus" },
      { parola: "Mestieri d’autore",  testo: "Artigiani, agricoltori, pescatori: persone da incontrare, non solo prodotti da acquistare.", immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/4_ywqkpr" },
      { parola: "Vignaioli",           testo: "Chi fa vino con intenzione, controcorrente, perché certe radici meritano di sopravvivere.", immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_7370_c878u6" }
    ]
  },

  /* ---- Il racconto che illustra lo spirito del progetto ----
     Ogni stringa tra virgolette è un paragrafo. Per aggiungerne uno,
     mettilo tra virgolette e chiudilo con una virgola. ---- */
  racconto: {
    titolo: "Appunti di viaggio in Italia",
    occhiello: "Il racconto",
    paragrafi: [
      "C’è un filo che lega questi luoghi, e non è soltanto la strada: è la luce, quella che cambia colore a ogni latitudine, dalle Alpi che toccano il cielo fino al mare che si fa specchio.",
      "Comincia in montagna, quando l’inverno è ancora padrone. Le baite di larice annerito affondano nella neve, i tetti di pietra sostengono coltri bianche, e gli steccati storti tracciano vecchi confini che nessuno ricorda più. Il sole batte forte ma non scalda; il ghiaccio luccica come zucchero. Dentro una di quelle case, sotto travi annerite da anni di fuochi, l’aria profuma di legno e di resina. Un mazzo di protee bianche in un vaso pieno di pigne, le poltrone consumate, i piatti di ceramica appesi al muro: «il freddo scaccia, la fiamma suscita» (Alceo).",
      "E poi una cucina, la concentrazione di chi impiatta. Una mano posa con cura qualcosa di scuro e lucido nel piatto bianco, il brodo dorato, la carta bruciata accanto. La montagna sa nutrire chi la rispetta.",
      "Più in basso, l’Italia si apre come un ventaglio. Urbino in alto, i suoi torrioni di mattoni che bucano il cielo di maggio, i tetti di coppi che digradano verso le colline verdi. Le Marche profumano di fieno e di pietra calda. Le terrazze al crepuscolo, dove una lampada rossa accende il blu cobalto della sera e due bicchieri verdi aspettano. Una bottiglia d’olio, due coperti, il silenzio delle colline che sprofondano nel buio. Cenare così, sospesi tra il giorno e la notte.",
      "A Firenze l’Arno diventa oro liquido. Il ponte si specchia, le finestre si accendono una a una, e in fondo la ruota panoramica gira piano contro l’ultimo rosa del tramonto.",
      "Il giardino esplode di colori che sembrano impossibili: amaranti viola fitti come velluto, una petunia rossa che si intrufola dove non dovrebbe. Più in là un giardino all’italiana con la sua peschiera, i papiri, le ninfee, le siepi scolpite e i putti di pietra che vegliano. E poi i banchi del fioraio in città, le ortensie verdi e bordeaux, le rose rosse, il disordine generoso di chi vende bellezza per mestiere.",
      "Infine il Mediterraneo, con il mare che diventa protagonista assoluto. Portofino con le sue case color pastello strette sull’acqua, le barche all’ancora, la collina di pini che si tuffa nella baia. E il Salento estremo, tra Santa Maria di Leuca e Castro Marina, dove la roccia bianca si spacca e lascia entrare un’acqua color smeraldo, profonda e fredda. I fichi d’India aggrappati alle scogliere, il filo del bucato teso sul nulla, l’orizzonte che si confonde con il cielo.",
      "Una colazione sotto il pergolato, la tovaglia a rose, la gabbia per uccelli arrugginita, i cipressi come sentinelle: la Toscana che non finisce mai di somigliare a un quadro. E una tavola apparecchiata su un balcone, alta sopra il mare di Peschici, dove l’acqua si stende piatta fino a perdersi e l’unica cosa da fare è sedersi e guardare.",
      "Questo è il viaggio: dalla neve al sale, dal legno scuro delle baite alla luce bianca del Mediterraneo. Un paese intero che si lascia attraversare stagione dopo stagione, sempre uguale e sempre diverso, come la luce che lo accende."
    ]
  },

  /* ---- Le storie lunghe dei luoghi (pagina storia.html?s=...) ----
     Ogni storia ha una chiave (es. "campanini") richiamata dal campo
     "storia" di una scheda. titolo, occhiello, sottotitolo e i paragrafi. ---- */
  storie: {
    minervetta: {
      occhiello: "Camera con vista · Sorrento",
      titolo: "Dove il mare non smette mai d'incantarti",
      sottotitolo: "Maison La Minervetta — Sorrento, Penisola Sorrentina",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5680_aah5th",
      galleria: [
        "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5189_p6tsfa",
        "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_1315_sdj9f4",
        "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_6169_hfobsi"
      ],
      paragrafi: [
        "Ci sono luoghi in cui il tempo smette di avere fretta. La Minervetta è uno di questi. Una maison aggrappata alla scogliera di Via Capo, a Sorrento, con il golfo di Napoli disteso davanti e il Vesuvio che si staglia sull'orizzonte. Un buen retiro da cui non vorresti più andartene.",
        "Si resta tutto il giorno a guardare il mare. Non per pigrizia, ma per quella sensazione rara di essere esattamente nel posto giusto. La luce cambia ogni ora del giorno, prende colori che altrove non esistono, e ogni volta sembra uno spettacolo rivolto solo a te.",
        "Marco De Luca, il proprietario, ha realizzato in questi anni le case più belle della Penisola Sorrentina e della Costiera Amalfitana. Il suo stile è riconoscibile a prima vista — arte contemporanea, design, una cura per i dettagli che racconta un gusto profondo e personale. Lo chiamiamo Peninsula Style. Le tredici camere della Minervetta sono tutte diverse l'una dall'altra, eppure condividono una cosa sola: quella vista sul mare che non si smette di guardare.",
        "La mattina, a colazione, ci si sente coccolati come degli enfants gâtés: il caffè, la luce, la gentilezza discreta di chi sa accogliere con garbo. E il mare è sempre lì, a tenerti compagnia, mutando colore con le ore. Si finisce per restare più a lungo del previsto. E si riparte già con la voglia di ritornare."
      ]
    },
    vista: {
      occhiello: "Un tavolo per due · Riviera del Conero",
      titolo: "Dove il Conero incontra il mare",
      sottotitolo: "In Riva a Numana — Numana, Riviera del Conero",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/RIVA_Restaurant_Sett_24.jpg_ifpzgv",
      paragrafi: [
        "C'è una nonna a San Biagio Saracinisco, nel cuore del Parco Nazionale d'Abruzzo, Lazio e Molise, che fa ancora le salsicce a mano. È lì, dice Antonio Lerro, che ha imparato le cose più importanti — non le tecniche, non le ricette, ma la manualità, il rispetto per ciò che si fa con le mani. Quella nonna è rimasta con lui più di qualsiasi cucina stellata.",
        "Il resto è arrivato dopo. La Francia, Taillevent, Les Crayères con Philippe Mille. A 23 anni era già responsabile di partita — prima il pesce, poi la carne, le salse. In Francia ha trovato la tecnica e il rigore. Tornato in Italia, ha capito dove finisce la precisione e dove comincia la cucina vera. Ha fatto quindi la sua, di cucina.",
        "Dodici anni fa qualcuno gli ha proposto di aprire un ristorante sul Conero. Antonio è venuto a vedere il posto e ha capito che era l'unico motivo valido per ritornare a casa — quella casa dove da bambino abitava e che dista soltanto cinque minuti a piedi da qui. Non era nei suoi piani. Eppure è tornato.",
        "Al Riva la cucina si muove tra due mondi. Il menu Conero è l'espressione del parco naturale che li circonda — la verdura arriva da un'azienda agricola a pochi chilometri, condotta da una ragazza giovane che ha ripreso l'attività di famiglia, il pesce dai pescatori al porto di Numana o di Ancona. Poi in autunno arriva la cacciagione, e con lei uno stile molto francese — foie gras, pithiviers, lepre alla royale. Il sabato sera d'autunno non arriva una sola richiesta di pesce. Questa, dice Antonio, è una delle soddisfazioni più grandi.",
        "Il piatto che lo racconta meglio è il pithiviers. Lo metti nel forno, aspetti, e scopri se hai sbagliato soltanto quando lo tagli davanti al cliente. C'è tutto, in quel piatto: la pasticceria, la carne, la tecnica, il rischio. E poi c'è l'altro lato — le mazzancolle in bagnacauda, quattro ingredienti, in carta dall'inizio e mai tolte. La semplicità che nessun cliente ha mai discusso.",
        "Il servizio, dice, è come scendere in campo. Prima c'è l'allenamento, la preparazione, il silenzio del mattino in cucina. Poi si entra in partita e non ci si può permettere di sbagliare. È il momento che non cambierebbe con nulla — perché è lì che succede tutto. A lui piace leggere il volto dei clienti al primo boccone. Quello sguardo dice più di qualsiasi parola: se c'è stupore, se c'è meraviglia, allora vuol dire che ce l'ha fatta. Lo stesso vale in cucina, quando fa assaggiare un piatto nuovo ai suoi ragazzi — a volte hanno timore di dire tutto quello che pensano, ma il primo sguardo non mente mai.",
        "Buona cucina, per Antonio Lerro, è una cosa sola: un piatto eseguito bene, che sia buono e mostri una qualità tecnica. Il resto, dice, viene da sé."
      ]
    },
    dagustin: {
      occhiello: "Un tavolo per due · Marche",
      titolo: "La tavola sulle colline",
      sottotitolo: "Da Gustin — Bargni di Serrungarina, Marche",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_0585_tvzgdm",
      vimeo: "1207672070/b13928359c",
      galleria: ["https://res.cloudinary.com/dspgc41gt/image/upload/IMG_3766_qfwws0","https://res.cloudinary.com/dspgc41gt/image/upload/IMG_3781_vofs7d","https://res.cloudinary.com/dspgc41gt/image/upload/IMG_4657_urt9bj","https://res.cloudinary.com/dspgc41gt/image/upload/IMG_2720_dlg8dn"],
      paragrafi: [
        "Imboccata la strada per Bargni, il mondo cambia. Colline curate, borghi silenziosi, una luce che d'estate pesa come il grano maturo. E in cima, in quella che fu la prima bottega del paese, gestita da nonno Augusto per tutti Gustin, c'è un'osteria che ha capito una cosa rara: che la qualita' non ha bisogno di spiegazioni.",
        "Virginio Baldelli e sua moglie Catia hanno trasformato quello spazio in qualcosa di difficile da trovare: un luogo dove si mangia davvero bene, senza fronzoli, con materie prime scelte ogni giorno. La crescia sfogliata di Urbino, i tartufi di Acqualagna, l'olio extravergine di Serrungarina, le carni e i formaggi della zona raccontano un territorio.",
        "D'estate ci si siede nel nuovo dehors coperto, che prolunga la stagione anche quando il cielo non collabora. La vista sulle colline marchigiane è quella che ha ispirato anche la foto hero di Viaggioperdue.",
        "Soltanto una ventina di coperti all'interno, e pochi tavoli all'esterno. Non si prenota per abitudine: si prenota perché i posti finiscono presto."
      ]
    },
    lapergola: {
      occhiello: "Un tavolo per due \u00b7 Cilento",
      titolo: "Dove la Magna Grecia incontra il mare",
      sottotitolo: "La Pergola \u2014 Capaccio Paestum, Cilento",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/Pesce_n9hpsc",
      galleria: [
        "https://res.cloudinary.com/dspgc41gt/image/upload/La_Pergola_qtahs6",
        "https://res.cloudinary.com/dspgc41gt/image/upload/Bottiglie_hwenvq",
        "https://res.cloudinary.com/dspgc41gt/image/upload/Interno_gro6hg"
      ],
      paragrafi: [
        "A pochi passi dai templi dorici pi\u00f9 belli del Mediterraneo, lungo Via Magna Grecia, c\u2019\u00e8 un ristorante che ricorda nel nome la storia del luogo. La Pergola esiste da oltre trent\u2019anni, e durante questi anni ha saputo ricercare nel territorio i prodotti migliori.",
        "D\u2019estate si pranza all\u2019aperto in un gradevole dehors, con quella luce cilentana che rende tutto pi\u00f9 nitido. Il Cilento \u00e8 uno di quei luoghi dove il mare e la montagna si parlano, e la cucina di Giovanni Longo racconta esattamente questo dialogo. I gamberoni arrivano da Acciaroli, il tonno rosso \u00e8 quello di Mazara del Vallo, le ostriche sono le Gilardeau. Non si tratta semplicemente di nomi scritti per impressionare il cliente: \u00e8 il modo in cui lo chef sceglie ogni mattina quello che poi porter\u00e0 in tavola.",
        "La passione di Giovanni Longo si riflette in quella scelta quotidiana, nel sapere dove guardare, chi chiamare, e nel saper aspettare i prodotti migliori. Una cucina che non si inventa ogni giorno, ma che si costruisce nel tempo, fedele a una terra che non smette mai di sorprendere."
      ]
    },
    viadamez: {
      occhiello: "Mestieri d'autore · Poschiavo",
      titolo: "Le artigiane della Via di Mezzo",
      sottotitolo: "Viadamez — Poschiavo, Valposchiavo",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/7_vwr7wc",
      galleria: [
        "https://res.cloudinary.com/dspgc41gt/image/upload/4_ywqkpr",
        "https://res.cloudinary.com/dspgc41gt/image/upload/5_ae6n4v",
        "https://res.cloudinary.com/dspgc41gt/image/upload/2_omkqpg"
      ],
      paragrafi: [
        "Adriana e Cristina si conoscono dall’asilo. Hanno coltivato insieme i loro sogni a Poschiavo, poi ognuna ha preso la propria strada — Cristina verso l’apprendistato d’orafa a San Gallo, Adriana verso il restauro di affreschi a Lugano, poi la tappezzeria a San Gallo. Anni di formazione, di lavoro lontano dalla valle, di vita costruita altrove. E poi, entrambe, ritornano a casa.",
        "Cristina è tornata con nuove idee e esperienza maturata lontano. Adriana quasi per caso, per una questione di lavoro in Engadina, e ha scoperto di essere tornata a casa. “Poschiavo è piccola”, dice, “ma a misura d’uomo.” Quella che sembrava una valle da lasciare si è rivelata il posto giusto: la qualità della vita, le montagne, gli affetti, e un’anima artigianale autentica che resiste.",
        "L’incontro tra le due professioni ha preso il nome di Viadamez — la Via da Mezz — la strada storica degli artigiani che attraversa il borgo di Poschiavo, affacciata sugli edifici più antichi del paese. Un nome che è già un racconto: la via degli artigiani, la via di mezzo tra due mestieri, il punto dove cuoio e metallo si incontrano.",
        "La cintura Viadamez è il loro prodotto più emblematico. Adriana sceglie la pelle con le mani, le basta toccarla per capire se le trasmette qualcosa. La taglia, la cuce, la trasforma in qualcosa che non lo era ancora. Cristina realizza la fibbia in metallo — argento o bronzo — lavorata al banco rendendola un pezzo unico. Due gesti diversi, un oggetto solo.",
        "Quello che le unisce, però, va oltre la cintura. Cristina dice che un gioiello non deve essere perfetto, deve raccontare una storia, un luogo, un ricordo. I gioielli di Cristina nascono spesso da una passeggiata tra le vie del borgo, da un dettaglio della natura, da una forma incontrata lungo i sentieri e ne portano dentro la luce e le forme della Valposchiavo.",
        "Adriana dice che il vero cuoio si riconosce con il tempo, nelle piccole irregolarità, nel modo in cui invecchia con chi lo porta, acquistando carattere e fascino. Due filosofie che parlano la stessa lingua: quella degli oggetti fatti per durare, che portano con sé la traccia delle mani che li hanno creati. In un mondo che tende a buttare e ricomprare, Viadamez crede nel contrario.",
        "ARTIgianato di Adriana restaura poltrone d’autore — la LC2 di Le Corbusier — le imbottiture tradizionali con incordatura di molle, e realizza piumini con la lana di Poschiavo, seguendo l’intera filiera dalla tosatura al prodotto finito. Cris Orafa di Cristina trasforma gioielli antichi in pezzi nuovi che portano dentro la memoria di ciò che erano. Ogni oggetto ha una storia da prima, e ne avrà una dopo.",
        "Il treno rosso del Bernina passa da Poschiavo senza fermarsi abbastanza a lungo. Vale la pena scendere, percorrere le strade del piccolo borgo, e spingere la porta della bottega l’artefatto — trame d’eleganza e riflessi d’oro. Quello che si trova non è un negozio, è il racconto di due donne che hanno scelto di tornare, e di costruire qualcosa di bello nel posto dove tutto è cominciato."
      ]
    },
        ghianda: {
      occhiello: "Mestieri d'autore · Brianza",
      titolo: "Nel segno del legno",
      sottotitolo: "Bottega Ghianda — Giussano, Brianza",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/a_-90,f_jpg/IMG_1788_mftxg6",
      paragrafi: [
        "Ci sono botteghe che sopravvivono ai loro fondatori. Bottega Ghianda è nata più di due secoli fa in Brianza, dove il legno non è mai stato solo materia prima ma linguaggio — un modo di pensare la forma, il tempo, la cura.",
        "Luigi Ghianda ha portato quell'arte ai vertici. Ebanista tra i più grandi del Novecento italiano, ha lavorato con architetti e designer di eccezione, trasformando visioni progettuali in oggetti unici. Ogni pezzo che usciva dalla sua bottega era irripetibile: incastri complessi quanto discreti, essenze lavorate con mano sicura e amorevole — il segno distintivo di un'ebanisteria che non ammette scorciatoie.",
        "Lo incontrammo molti anni fa, dopo aver letto su Abitare un servizio che parlava dei mobili realizzati da Pierluigi Ghianda per un'abitazione di prestigio sui disegni di Frank Lloyd Wright. Nacque una lunga conversazione — lui che donava il suo tempo con generosità rara, raccontando il legno, i progetti, gli anni. Poco prima di salutarci ci regalò un tagliacarte in legno di pero. Lo stesso tagliacarte che la bottega realizza ancora oggi, invariato.",
        "Oggi Bottega Ghianda continua sotto la guida di Romeo Sozzi, che ne ha rilevato l'attività portandola nel mondo del design internazionale — da Álvaro Siza a Maria Sole Ferragamo. La sapienza artigianale brianzola dialoga con visioni nuove, ma resta fedele a una vocazione antica: quella di durare.",
        "Il legno, qui, non invecchia mai."
      ]
    },
    paponi: {
      occhiello: "Mestieri d'autore · Montegranaro",
      titolo: "L'eleganza che si costruisce a mano",
      sottotitolo: "Giorgio Paponi — Montegranaro, nelle Marche",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/a_-90,f_jpg/IMG_5771_bsqkns",
      paragrafi: [
        "Nelle Marche c'è un lembo di terra dove il cuoio è una lingua madre. Si chiama Montegranaro, ed è qui che nel 1977 Giorgio Paponi apre il suo calzaturificio, scegliendo da subito una strada precisa: l'eleganza della calzatura costruita a mano, per uomo e per donna, senza scorciatoie.",
        "L'identità del marchio nasce da un dialogo curioso tra due sensibilità. Da un lato il gusto inglese, rigoroso e raffinato; dall'altro la mano italiana, che quel rigore lo riscalda, lo addolcisce, lo reinterpreta. Le scarpe Paponi nascono da questo incontro — classici britannici che parlano con accento marchigiano.",
        "Il segno distintivo della casa è una lavorazione a doppia cucitura, robusta e flessibile insieme, e suole fresate a mano fino alla pregiata cucitura norvegese dei modelli più preziosi. Ogni paio è rifinito con la patinatura a mano, ed è di fatto un pezzo unico: due scarpe non sono mai identiche. La stessa cura è nei pellami — vitello francese, camoscio inglese, cuoi dai riflessi profondi — e perfino nei nomi dei colori, che sono già poesia di bottega: Testa di Moro, Melanzana, Arancio Antico, Becco d'Oca, Terra Bruciata.",
        "Dal mocassino allo stivaletto stringato, fino alla linea sportiva ispirata al mondo del golf, il catalogo tiene insieme passato e presente: i grandi classici rivivono in forme e colori nuovi, fianco a fianco con linee inedite.",
        "È, in fondo, ciò che l'azienda dichiara di sé fin dal principio: fatte con il cuore, in Italia. Un mestiere d'autore, dove la firma non è un logo ma il gesto della mano."
      ]
    },
    bernina: {
      occhiello: "Racconti di viaggio · Alpi",
      titolo: "Il treno più suggestivo delle Alpi",
      sottotitolo: "Un viaggio da St. Moritz a Tirano",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/Bernina_Express_xzhwsr",
      epigrafe: {
        testo: "Il viaggio in treno è come un film, una carrellata di fotogrammi che scorrono davanti agli occhi di un solo spettatore, fotogramma dopo fotogramma, e di cui si è perso il negativo.",
        fonte: "Wim Wenders, prefazione a Le Train - Voyage au cœur du rail, fotografie di Raymond Depardon (Éditions du Chêne, Parigi, 1988)"
      },
      paragrafi: [
        "C’è un treno rosso che parte da St. Moritz e scende verso Tirano, in Italia, attraversando le Alpi in un modo che non si dimentica. Non è la velocità a renderlo speciale, è il contrario. Il Bernina Express è lento per scelta, costruito per ammirare, non per arrivare.",
        "Il percorso sale fino al Passo del Bernina, a duemila metri di quota, tra ghiacciai e laghi alpini che cambiano colore con la luce. Poi scende verso Poschiavo e il lago omonimo, dove gli scorci sull’acqua si aprono e si chiudono tra una curva e l’altra. A Le Prese, sulla riva del lago, vale la pena fermarsi e l’Hotel Le Prese è una di quelle soste che trasformano un viaggio in treno in un’esperienza completa.",
        "Il viadotto di Brusio è il momento più straordinario del percorso. Una spirale di pietra che il treno percorre girando su se stesso per perdere quota, come un’opera d’ingegneria che non ha smesso di stupire dal 1908. Chi lo attraversa tende a non dire nulla, a guardare semplicemente fuori dal finestrino.",
        "Il Bernina Express è Patrimonio dell’Umanità UNESCO dal 2008, insieme alla linea dell’Albula, è uno dei capolavori ferroviari del mondo. Ma la ragione per cui vale la pena prenderlo non è la certificazione: è quella sensazione, difficile da spiegare, di guardare ogni volta un’edizione originale di un film. Il finestrino è lo schermo, il paesaggio scorre in sequenza, il tempo ha il ritmo di una narrazione. E di quel film non esiste un’altra copia."
      ]
    },
    soglio: {
      occhiello: "Racconti di viaggio · Val Bregaglia",
      titolo: "Dove il tempo si è fermato",
      sottotitolo: "Soglio, Val Bregaglia",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5354_aylm7n",
      vimeo: "1207748552",
      galleria: [
        "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5342_pw0v41",
        "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5340_cvv7yi"
      ],
      paragrafi: [
        "Ci sono luoghi che sembrano esistere fuori dal tempo. Soglio è uno di questi — un borgo aggrappato a un terrazzamento della Val Bregaglia, a oltre mille metri, affacciato su un panorama che si apre verso il fondovalle come se il mondo iniziasse lì.",
        "Le case in pietra, i vicoli stretti, i palazzi delle antiche famiglie grigionesi — tutto racconta una quiete che non è abbandono, ma scelta. Giovanni Segantini lo capì nell'estate del 1886, quando soggiornò qui e dipinse Alla messa, una delle sue opere più intense. Quel borgo lo colpì a tal punto che anni dopo, quando si stabilì a Maloja, commissionò alla ditta Torriani di Soglio la costruzione di una rotonda in legno — il suo studio e biblioteca all'aperto, perché Segantini amava dipingere sotto il cielo. Soglio era entrata nella sua vita non solo come soggetto pittorico, ma come luogo di artigiani fidati.",
        "Il borgo sorge su una balconata naturale che domina la valle e il massiccio del Masino. In basso, invisibile, scorre la Mera. Intorno, i castagni secolari che in autunno tingono il paesaggio di colori caldi e profondi. In inverno, la neve isola Soglio dal resto del mondo in modo quasi assoluto — e quella solitudine, anziché pesare, libera.",
        "Si raggiunge in auto salendo da Promontogno, nel fondovalle, lungo una strada stretta che sale tra i boschi fino al parcheggio del borgo. È già un modo di prepararsi — il viaggio verso Soglio non è mai solo geografico."
      ]
    },
    costiera: {
      vimeo: "1208219578/8f9d8ad8f0",
      occhiello: "Racconti di viaggio · Campania",
      titolo: "Dove la luce ha un peso",
      sottotitolo: "Costiera Amalfitana",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5236_h4rgus",
      paragrafi: [
        "Arrivare in Costiera è soprattutto una questione di luce. Cambia ora dopo ora, e con lei cambia il mare: bianca e tagliente a mezzogiorno, quando le case sembrano sospese sul vuoto; dorata nel tardo pomeriggio, quando si posa sui muri e li accende di un colore che non ha nome. È una luce che ha un peso, che si appoggia sulle cose e le rende più vere.",
        "Poi ci sono i limoni, aggrappati ai terrazzamenti che generazioni di mani hanno strappato alla roccia. Dietro a ogni muretto a secco c’è una fatica che oggi si fatica perfino a immaginare: salire e scendere ogni giorno scale infinite, portando sulle spalle ceste, attrezzi, raccolti. Quelle scale che per noi sono pittoresche, per chi è nato qui sono state per secoli una condanna e una disciplina. E proprio per questo il paesaggio che regalano — dall’alto, all’improvviso, dopo l’ennesima rampa — ha una potenza a cui è difficile resistere: è uno sguardo conquistato, non ricevuto.",
        "I luoghi più belli, come spesso accade, sono quelli meno noti. Praiano, sospesa e silenziosa. Conca dei Marini, con la sua piccola insenatura. Nerano, dove la Costiera comincia e il mare si fa più intimo. Lontano dalla folla di Positano e Amalfi, è qui che si trova il respiro vero di questa terra.",
        "E ci sono due modi di guardarla, la Costiera. Da terra, per lasciarsi sorprendere dal paesaggio che si apre a ogni curva. E dal mare, per scoprire anfratti nascosti e misurare dal basso l’imponenza delle montagne che precipitano nell’acqua. Sono due racconti diversi dello stesso luogo, e nessuno dei due basta da solo.",
        "C’è perfino una parola che è nata qui. I pescatori chiamavano tramontana il vento fresco che scendeva dai monti — perché arrivava da Tramonti, suggestivo borgo dell’entroterra. Da quel nome locale è nato il termine che oggi usa tutta Italia: un piccolo dono di questa terra alla lingua di tutti.",
        "Non si torna dalla Costiera con delle fotografie. Si torna con una certa idea di lentezza, con la memoria di una fatica antica, e con la nostalgia di una luce che altrove non si trova."
      ]
    },
    campanini: {
      occhiello: "Un tavolo per due · Busseto",
      titolo: "Una storia di campagna, di tavola e di famiglia",
      sottotitolo: "Trattoria Campanini — Madonna dei Prati, Busseto",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_4381_u74xvg",
      paragrafi: [
        "Imboccata la strada per Madonna dei Prati, cambia il mondo. Campi curati, case coloniche, silenzio. E di fronte al santuario, dove il giovane Verdi suonava l’organo, da oltre cent’anni si trova la trattoria della famiglia Campanini.",
        "La storia inizia nel 1911, con un punto di ristoro per i pellegrini. I Campanini erano mezzadri di Giovannino Guareschi e fu in quegli anni che si intrecciarono le radici tra il lavoro dei campi e quella vocazione all’ospitalità che non li ha mai lasciati. La gestione vera prese avvio nel 1968: in cucina nonna Turivia e mamma Maria, custodi delle paste ripiene e delle tagliatelle come voleva la nonna. In sala c’era la Franca.",
        "Per oltre quarant’anni, ogni giorno, Maria Campanini percorse i trenta chilometri da Piacenza fino a Madonna dei Prati. Tutti la chiamavano la Franca, un errore dell’anagrafe che diventò un nome. Sempre sorridente, sempre disponibile, aveva rinunciato da giovane a una voce bellissima e al sogno di cantare per stare accanto alla madre e al fratello. Ci ha lasciati nel 2019, a 62 anni. E il vuoto che ha lasciato è incolmabile.",
        "Oggi la trattoria appartiene alla terza generazione: la signora Maria e il figlio Stefano. Qualcosa è cambiato, cotture a bassa temperatura, meno grassi, ma il principio resta: custodire i sapori senza standardizzare niente.",
        "Il cuore del locale è la torta fritta col culatello. I culatelli entrano in cantina a giugno, aspettano tre anni, qualcuno fino a 42 mesi. In tavola ne arrivano sempre due stagionature diverse, perché si capisca come i sapori cambiano e si approfondiscono nel tempo. È un lavoro paziente, che assomiglia a quello della memoria."
      ]
    },
    poliform: {
      occhiello: "Poliform Cafè · Milano",
      titolo: "La cucina diretta di Mario Iannone",
      sottotitolo: "Piazza della Scala — nel cuore di Milano",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_1620_amjout",
      paragrafi: [
        "Un tavolo per due è una pausa dal mondo. Una luce limpida, una sala affacciata sulla piazza, il giusto silenzio per ritrovarsi. Al Poliform Cafè la cucina si fa comprensibile e leggera, pensata soprattutto per il pranzo: nessun piatto difficile, nessuna pesantezza, ma sapori diretti che si lasciano riconoscere.",
        "§ Lo chef — Mario Iannone",
        "Ventotto anni, napoletano, Mario Iannone ha sempre fatto un solo mestiere: il cuoco. Cresciuto con quell’idea fin da ragazzo, asseconda­to da una famiglia che a casa cucinava, sceglie l’alberghiero a Napoli — quando ancora lo si frequentava di rado per vocazione — perché voleva davvero imparare.",
        "Da lì un percorso che attraversa la grande cucina italiana: l’Accademia di Niko Romito, l’esperienza da Spazio, e soprattutto otto anni a Rovello accanto a Michele, in una trattoria dove l’ingrediente è protagonista assoluto. È lì che Mario affina la sua idea di cucina: grandi prodotti trattati con pochissimi fronzoli, una direzione netta e golosa, facile da capire. Poi le aperture più leggere, il Giappone e lo street food, e due ristoranti a Parigi. Tornato in Italia, ritrova Michele e il progetto del Poliform Cafè: un luogo dove costruire qualcosa di duraturo.",
        "Per lui la ristorazione si divide in due strade: l’esperienza che passa per la cucina, e il mangiare per stare bene — e a volte la seconda, più naturale e diretta, vale più di tante esperienze blasonate. La sua è di pancia, ma misurata.",
        "§ Il cucchiaio, la frutta, l’animale intero",
        "Mario parte spesso dalla posata, non dal piatto: ama il cucchiaio, perché raccoglie salsa, zuppa, pasta e secondo in un solo gesto e ricostruisce il piatto in un boccone. Per questo certi piatti li serve con lo gnocchetto invece della linguina — lo spaghetto alle vongole, per dire, col cucchiaio amplifica la cremina e il sapore di mare.",
        "Non è un grande appassionato di dolci, ma ama la frutta: lavorata in ogni sua sfaccettatura, come ha imparato da Romito, un solo elemento declinato in molti modi fino a scoprire sapori e spigolosità inattese. Ama il pesce e il crudo, le cotture sulla brace, e l’idea — tutta italiana — di non buttare via nulla dell’animale: prendere una bestia intera e usarne ogni parte. Più del piatto in sé, gli interessa il processo: la manualità, il gesto ripetuto mille volte, la costanza che dà sempre lo stesso gusto. «La passione si sente, quando vai a mangiare»: è questo, per lui, ciò che rende un piatto buono.",
        "§ Il menù",
        "In abbinamento, un Trebbiano d’Abruzzo DOC Valle Reale, vendemmia 2025. Tra i piatti: insalata di pomodori, robiola e basilico; crudo di pesce pescato con acqua di pomodoro, fragole e nasturzio; pesca alla piemontese con crema chantilly; ricotta di pecora, caffè e polline.",
        "§ Le mani nella pasta — il racconto di Piera Gandolfo",
        "Non avrei mai immaginato che la mia strada finisse tra farina e zucchero. Il liceo scientifico, poi una laurea in Lettere Moderne: sulla carta, sembrava tutto deciso. Eppure dentro di me cresceva un bisogno che le parole non riuscivano a soddisfare. Volevo lavorare con le mani, toccare gli ingredienti, sentire la creatività prendere forma sotto le dita. Così ho seguito la mia vera passione, la pasticceria, con accanto, fin da subito, il fascino silenzioso della panificazione.",
        "Mi sono formata all’ALMA, la scuola fondata da Gualtiero Marchesi, frequentando i corsi base e avanzato. È stato amore a prima vista: quando ho terminato il percorso, sapevo che non avrei più lasciato questo mondo. La mia carriera è cominciata con uno stage alla pasticceria Viscontea, vicino a Sant’Ambrogio a Milano, il mio primo vero laboratorio. Poi è arrivata la Pasticceria Martesana, un’esperienza che mi ha formata in profondità.",
        "Da lì ho allargato lo sguardo. Per un anno ho lavorato al ristorante gastronomico 142 di Milano, dove lo chef mi ha lasciato esplorare la cucina, affidandomi le preparazioni di laboratorio. Mi sono poi dedicata anima e corpo alla panificazione, passando tre anni accanto ad Aurora Zancanaro de Le Polveri. Il legame con le mie origini mi ha riportata a Imperia, la mia città natale: insieme a un docente dell’ALMA ho curato il rilancio di un locale storico, rinnovando la pasticceria, la linea produttiva e le attrezzature.",
        "Sono diventata responsabile della Bakery Nowhere, ho collaborato con Toc, una piccola realtà artigianale torinese, e ho lavorato con Pasta Madre nella preparazione dei dolci. Oggi sono al Poliform Cafè di Milano, ed è la mia prima vera esperienza come Pastry Chef in un ristorante: ne sono profondamente soddisfatta.",
        "Lungo la strada ho fatto una grande riscoperta: i dolci della tradizione, il pilastro da cui nasce tutta la pasticceria. Ho imparato a rivalutarli e a studiarli, perché in loro ogni ingrediente deve farsi sentire, per qualità e per lavorazione. Il processo è tutto. Il mio dolce del cuore resta il tiramisù, e tra le creme scelgo senza esitazione lo zabaione, quella che amo più di ogni altra.",
        "C’è una cosa, però, che mi rammarica del mondo gastronomico di oggi: il croissant va di moda a discapito della brioche italiana. Eppure la brioche andrebbe servita su un piatto d’argento. È talmente buona, con i suoi aromi di limone, arancia e vaniglia, profumi che nel croissant francese semplicemente non esistono. Se un giorno avrò un laboratorio tutto mio, lo dedicherò ai prodotti da colazione italiani: brioche, veneziana, i dolci che amo di più e che meriterebbero molta più attenzione."
      ]
    },
    castelli: {
      occhiello: "Maria Pia Castelli · Marche",
      titolo: "Il vino delle mani sapienti",
      sottotitolo: "Contrada Sant’Isidoro, Monte Urano — i colli del Piceno verso il mare",
      copertina: "assets/castelli-copertina.jpg",
      paragrafi: [
        "I vignaioli sono una pausa dal mondo. Un filare lavorato a mano, un vitigno che qualcuno ha scelto di non dimenticare, il giusto silenzio per ritrovarsi.",
        "C’era una terra, là dove le colline del Piceno si piegano dolci verso il mare, in cui il sole e il vento sembravano essersi messi d’accordo per maturare l’uva fino all’ultimo grappolo. Era qui che, nel 1999, un uomo di nome Erasmo Castelli decise di trasformare un sogno in radici.",
        "Erasmo aveva mani esperte e callose, mani che conoscevano la terra come si conosce un vecchio amico. Aveva guardato per anni quei filari, ascoltato il loro silenzio invernale e il loro fremito primaverile, e un giorno si disse: qui nascerà qualcosa che durerà oltre di me. Non voleva un vino qualunque. Voleva un vino che raccontasse la verità di quel suolo, vendemmia dopo vendemmia, un vino di alta qualità che nessuna scorciatoia avrebbe potuto imitare.",
        "Così piantò, potò, attese. La pazienza era il suo ingrediente segreto. E quando il primo vino prese corpo nelle botti, Erasmo capì che aveva fatto la cosa giusta: aveva piantato non solo viti, ma un’eredità. Quell’eredità portava un nome — quello di sua figlia, Maria Pia.",
        "Crescendo tra i tini e il profumo dolceamaro del mosto, Maria Pia respirò la passione del padre fino a farla propria. Quando venne il suo tempo, prese in mano l’azienda insieme al marito, Enrico Bartoletti, e fece una promessa silenziosa: avrebbe custodito ciò che Erasmo aveva costruito, ma lo avrebbe anche fatto crescere. Tradizione e innovazione, le due metà di uno stesso cuore.",
        "E così avvenne. Maria Pia ed Enrico selezionarono le uve migliori a una a una, affidandosi agli strumenti più moderni senza mai tradire il gesto antico del vignaiolo. In pochi anni, quel piccolo sogno nato tra le colline picene raggiunse vette di qualità che lo portarono ben oltre i confini italiani, fino alle tavole del mondo, riconosciuto come una delle voci più sincere e interessanti del panorama vinicolo del Piceno.",
        "Oggi, quando si stappa una bottiglia firmata Maria Pia Castelli, non si versa soltanto del vino nel bicchiere. Si versa la passione di un padre, la dedizione di una figlia, e il respiro di una terra che continua, anno dopo anno, a mantenere la promessa fatta tanto tempo fa. Perché certe storie, come certi vini, migliorano soltanto con il tempo.",
        "§ Stella Flora",
        "C’è un momento, nel cuore dell’estate picena, in cui la luce smette di essere semplice luce e diventa qualcosa di liquido, dorato, antico. È in quel momento che nasce l’idea di Stella Flora — un vino che non somiglia a nessun altro, perché osa ciò che pochi hanno il coraggio di tentare.",
        "Tutto comincia tra i filari esposti a nord-est, là dove le viti, vent’anni di radici affondate in un terreno argilloso venato di minerali ferrosi, danno solo trenta quintali per ettaro. Poco, pochissimo. Ma è una scelta, non una rinuncia: meno uva, più anima. Quattro vitigni si danno appuntamento in questo vino — il Pecorino, generoso protagonista a metà del blend; la Passerina, che porta freschezza e luce; e poi il Trebbiano e la Malvasia di Candia, a completare l’armonia con le loro voci più sottili.",
        "A settembre, mani esperte raccolgono ogni grappolo, uno per uno, senza l’aiuto di alcuna macchina. È un gesto lento, quasi sacro, che Erasmo aveva insegnato e che Maria Pia non ha mai voluto abbandonare.",
        "Poi accade la magia, o meglio, l’audacia. Perché Stella Flora non segue la strada comoda dei bianchi. Il mosto resta a contatto con le sue bucce per quindici, venti giorni, in vasche di legno, mentre la fermentazione lavora paziente. È da questo abbraccio prolungato che il vino ruba quel colore inconfondibile: sfumature d’oro antico, una tonalità che già all’occhio promette qualcosa di fuori dall’ordinario. E tutto questo con un uso minimo di anidride solforosa, come a dire: lasciamo che il vino sia se stesso, nudo e sincero.",
        "La fermentazione malolattica si compie in barrique, e lì il vino riposa diciotto lunghi mesi, affinandosi nel silenzio del legno. Poi, ancora, attende in bottiglia — perché Stella Flora non ha fretta. Sa di essere un vino da aspettare.",
        "Quando finalmente lo si versa nel bicchiere, si capisce perché tanta pazienza. Il naso si apre su profumi di mandarino e arancia amara, attraversati da una traccia sottile di erbe aromatiche, come un soffio di macchia mediterranea. In bocca è secco, sapido, di struttura generosa, con una ricchezza aromatica che riempie e una persistenza che resta, lunga, dopo l’ultimo sorso.",
        "È un vino libero, Stella Flora. Sta bene con un pollame arrosto, con i lessi di carne, con il pesce e i formaggi — eppure non disdegna di presentarsi da solo, come aperitivo inconsueto, sfidando ogni convenzione. Lo puoi servire fresco o a temperatura ambiente: si adatta, perché ha carattere.",
        "Dal 2002, anno della sua prima vendemmia, Stella Flora nasce in appena tremilacinquecento bottiglie l’anno. Poche. Preziose. Come le cose fatte non per il mercato, ma per amore.",
        "Una stella e un fiore nel nome. E nel bicchiere, la prova che a volte, per fare qualcosa di straordinario, basta avere il coraggio di fare diversamente."
      ]
    },
    ragni: {
      occhiello: "Il Monte dei Ragni · Valpolicella",
      titolo: "La collina magra che dà il meglio di sé",
      sottotitolo: "Marega di Fumane, sul crinale da Bure a Mazzurega",
      copertina: "assets/ragni-copertina.jpg",
      paragrafi: [
        "I vignaioli sono una pausa dal mondo. Un filare lavorato a mano, una terra che qualcuno ha scelto di non dimenticare, il giusto silenzio per ritrovarsi.",
        "C’era una contrada di nome Marega, datata 1450, raggiungibile solo da una vecchia stradina stretta fra due muri di sasso. Era nata come guarnigione, a guardia della vicina Villa della Torre, ma le sentinelle se ne erano andate da secoli, e al loro posto era rimasta la terra: povera, sassosa, pettinata di muretti a secco che la gente del posto chiamava marogne.",
        "Fu là, sul crinale che sale da Bure fino a Mazzurega, che Santo Ragno si fermò un mattino d’inizio Novecento a guardare il sole battere sulle pergole. Gli altri pensavano al grano, alle bestie, a tirare avanti. Santo invece prese in mano un grappolo e capì qualcosa che nessuno gli aveva insegnato: che quella collina magra, proprio perché magra, era fatta per la vite. La terra che non regala nulla, pensò, costringe la pianta a cercare in profondità — e ciò che trova in fondo, lo restituisce nel bicchiere.",
        "Lo presero per sognatore. Ma Santo comprò i terreni più a nord, verso Mazzurega, e piantò viti dove altri vedevano solo pietre. Tra un filare e l’altro mise olivi e ciliegi, perché — diceva — una collina deve dare gioia anche prima della vendemmia. E infatti ogni fine marzo, quando i ciliegi fiorivano tutti insieme, il crinale diventava una nuvola bianca sospesa sopra la valle, e perfino i più scettici salivano a guardarla.",
        "I suoi vini scesero in città. Nei primi decenni del secolo, due osterie rinomate di Verona li versavano direttamente ai loro avventori — il vino del Monte dei Ragni, lo chiamavano, dal nome che gli austriaci avevano scritto sul vecchio catasto, chissà perché, forse per i ragni che tessevano le loro tele d’argento fra le marogne all’alba.",
        "Passarono le generazioni — cinque, una dopo l’altra — e ognuna aggiunse qualcosa senza tradire l’intuizione di Santo. Oggi sul fondo lavora Zeno Zignoli, e quei sei o sette ettari sono curati come un giardino: oltre cinquemila ceppi per ettaro, vitigni autoctoni, le gemme contate a una a una in fase di potatura, i grappoli esposti all’aria perché il vento li asciughi e li tenga sani.",
        "In cantina succede la stessa cosa, al contrario: meno è meglio. Pigiature soffici, pressature morbide, quasi nessuna pompa meccanica — il mosto si muove quasi per gravità, con la pazienza di chi non ha fretta. Da quelle uve nascono l’Amarone, il Recioto, il Valpolicella Superiore, e perfino un bianco affinato in anfora, come si faceva mille anni fa. Dalle olive, ancora, l’olio pregiato di sempre.",
        "Se oggi salite quella stradina fra i due muri di sasso, troverete più o meno ciò che vide Santo Ragno: le pergole aperte al sole, le marogne, i ciliegi che a primavera tolgono il fiato. E in un bicchiere — se avrete la fortuna di fermarvi — sentirete il sapore di una collina magra che, proprio perché non regala niente, ha imparato a dare il meglio di sé."
      ]
    },
    burlotto: {
      occhiello: "Comm. G. B. Burlotto · Langhe",
      titolo: "Le mani di Verduno",
      sottotitolo: "Cinque generazioni nel cuore del Barolo",
      copertina: "assets/burlotto-copertina.jpg",
      paragrafi: [
        "A Verduno, comune storico del Barolo, una famiglia coltiva da centosettant’anni la stessa idea di vino: sobrio, fedele alla terra e ai vitigni che lo generano. È la storia di cinque generazioni — e di una cocciutaggine che ha salvato un’uva.",
        "Esiste una data, il 1850, ma in casa Burlotto nessuno l’ha mai considerata un inizio. È piuttosto il giorno in cui Giovan Battista Burlotto smise di chiamarsi contadino per chiamarsi vignaiolo — una parola che allora pochi pronunciavano, e ancor meno con convinzione. Le terre c’erano già: il Monvigliero che guarda il paese, i Cannubi più in là, verso Barolo. A cambiare fu lo sguardo.",
        "“GiBi” decise che da quelle uve non sarebbe uscito soltanto vino, ma un’idea precisa di che cosa il vino dovesse essere: fine, longevo, fedele al luogo che l’aveva fatto. Vennero le medaglie, trentadue, che ancora oggi stanno sulla facciata come una contabilità dell’ostinazione; vennero il riconoscimento come fornitore della Casa Savoia e i premi nelle fiere di qua e di là dall’Oceano.",
        "Ma Giovan Battista non lasciò in eredità soltanto il successo: lasciò un modo di stare alla terra che il figlio Francesco raccolse senza clamore e che, alla morte prematura di lui, passò al nipote Ignazio.",
        "A Ignazio toccò la parte più dura. La guerra, l’azienda da reggere da solo e un’uva piccola e testarda che nessun altro vinificava ancora in purezza: il Pelaverga. La coltivava in proprio e ne acquistava poche ceste dai contadini del vicinato, quel tanto che bastava a non lasciarla morire.",
        "Non era un calcolo commerciale — non c’era mercato per un vino che esisteva quasi solo a Verduno. Era qualcosa di più cocciuto: la convinzione che certe cose, una volta perse, non tornano. Se oggi il Verduno Pelaverga esiste ancora, luminoso e leggero, lo si deve in modo determinante a lui.",
        "Ignazio morì nel 1968. L’azienda passò alla figlia Marina, allora diciassettenne, con davanti un secolo di nomi e di medaglie. Non si lasciò spaventare. Con il marito Giuseppe Alessandria, e poi con i figli Fabio e Cristina, ha continuato a produrre i vini classici della Langa albese nello stesso solco — non per devozione a un modo arcaico di lavorare, ma perché quella tradizione è una catena di scelte coraggiose, e con essa una responsabilità da assumersi.",
        "Cinque generazioni dopo quella data che non era un inizio, le mani sono cambiate. Lo sguardo, no."
      ]
    },
    dettori: {
      occhiello: "Tenute Dettori · Sardegna",
      titolo: "Ciò che sono, non ciò che vuoi che siano",
      sottotitolo: "Sennori, in Romangia — artigiani del vino e della terra",
      copertina: "assets/dettori-copertina.jpg",
      paragrafi: [
        "I vignaioli sono una pausa dal mondo. Un filare lavorato a mano, una terra che qualcuno ha scelto di non tradire, il giusto silenzio per ritrovarsi.",
        "C’è un angolo di Sardegna, a Sennori, nella regione storica della Romangia, dove fare vino è rimasto un gesto antico. Qui i Dettori non si presentano come produttori, ma come vignaioli e artigiani del vino e della terra — e la differenza, per loro, è tutto.",
        "Il metodo è una forma di rispetto. I vini fermentano nelle tradizionali vasche di cemento, senza piede di partenza; dall’uva delle vigne fino alla bottiglia non si aggiunge nessuna delle sostanze pure ammesse in enologia. Ingredienti, coadiuvanti, additivi: uva, e nient’altro. Non vengono filtrati né chiarificati, si stabilizzano da soli per decantazione naturale e affinano nel solo cemento, dai dieci ai sessanta mesi. Si bevono freschi.",
        "Da un lavoro così poco forzato nasce una conseguenza bellissima: ogni bottiglia è diversa dall’altra. Per questo ognuna porta un numero, come un’opera che non si ripete.",
        "Non è una posa recente. Nel 2003, mentre in Italia il vino naturale moveva i primi passi, i Dettori erano già lì — unica cantina sarda a Critical Wine, a Verona, su invito personale di Luigi Veronelli, e al Leoncavallo di Milano. La loro biodinamica è certificata da quello stesso anno.",
        "Non seguono il mercato: fanno vini che piacciono a loro, fedeli alla cultura della propria terra. Tutta la loro filosofia sta in una riga, che è quasi una dichiarazione d’indipendenza: sono ciò che sono, e non ciò che vuoi che siano.",
        "E poiché certe cose vanno fino in fondo, lo scrivono perfino sull’etichetta — integralmente prodotto e imbottigliato all’origine, nella zona di produzione. Il cerchio si chiude dove si era aperto: nella terra di Romangia."
      ]
    },
    zidarich: {
      occhiello: "Azienda Agricola Zidarich · Carso",
      titolo: "Pietra e radici",
      sottotitolo: "Prepotto, nel cuore del Carso triestino",
      copertina: "assets/zidarich-copertina.jpg",
      paragrafi: [
        "I vignaioli sono una pausa dal mondo. Una pietra scaldata dal sole, una radice che scende dove sembra non ci sia spazio, il giusto silenzio per ritrovarsi.",
        "Benjamin lo sapeva da sempre: il Carso non si coltiva, si convince. Lo aveva imparato da bambino, guardando le mani di suo padre infilarsi tra le pieghe della roccia calcarea per cercare quella poca terra rossa che il vento aveva portato chissà da dove, semi e polvere migrati da oriente a occidente, fermati in quella strettoia tra il mare e i monti.",
        "A Prepotto, nel cuore del Carso triestino, l’azienda era nata nel 1988 con poco più di un’idea ostinata: che da quella pietra inospitale si potesse ancora tirare fuori il verde. Vita e lavoro, diceva Benjamin, sono la stessa cosa qui. La sua terra era anche il suo modo di pensare — fatto di pazienza, di radici che scendono dove sembra non ci sia spazio.",
        "Per otto anni aveva scavato. Non in senso figurato: la cantina nuova, inaugurata il 3 luglio 2009, era un’opera scolpita nella roccia stessa, venti metri di profondità su cinque piani, milleduecento metri quadrati che respiravano sottoterra. Aveva voluto un soffitto a volte in pietra nella zona d’invecchiamento, come una piccola cattedrale dove il vino potesse dormire al fresco. E in cima, dietro grandi vetrate, la sala di degustazione da cui le vigne sfumavano fino al mare all’orizzonte. Tutto costruito con risorse locali, perché l’uomo del Carso ha sempre usato quello che trovava.",
        "Nelle botti maturavano i vini delle usanze di una volta. La Vitovska soprattutto, il bianco autoctono nascosto tra secoli di cultura contadina, su cui aveva puntato tutto. La Malvasia arrivata un tempo dall’Istria. Il Prulke, assemblaggio che portava il nome di un toponimo antico. E il Terrano, rosso che solo quella terra rossa, quel microclima, quell’altitudine sapevano rendere unico — paziente, messo in commercio solo due anni dopo la vendemmia.",
        "Poi c’erano i vini fatti per amore più che per mestiere. Il Ruje, nato dalla sua passione. La Lehte, la Malvasia raccolta nei vigneti che erano stati dei suoi genitori, “ricca di ricordi”, come diceva lui. Ogni bottiglia un pezzo di memoria fermentata.",
        "A volte, salendo all’ultimo piano della cantina al tramonto, Benjamin si fermava davanti al vetro. Sotto di lui la pietra plasmata dal tempo, le vigne strappate alla roccia, e oltre il mare che si accendeva. Il Carso brullo era tornato verde. Protetto, amato, goduto. E lui, vignaiolo cocciuto tra il mare e il Carso, sapeva che era abbastanza."
      ]
    },
    debartoli: {
      occhiello: "Marco De Bartoli · Sicilia",
      titolo: "Il vino come verità",
      sottotitolo: "Contrada Samperi, Marsala — e l’isola di Pantelleria",
      copertina: "assets/debartoli-copertina.jpg",
      paragrafi: [
        "I vignaioli sono una pausa dal mondo. Una terra calcarea battuta dal sole, un vitigno che qualcuno ha scelto di non tradire, il giusto silenzio per ritrovarsi.",
        "C’è un nome, in Sicilia, che si pronuncia con rispetto quando si parla di vino: Marco De Bartoli. Perché a lui si deve qualcosa che somiglia a un atto di giustizia — aver riportato il Marsala alle sue radici, restituendogli dignità in un’epoca in cui quel nome glorioso era ormai svalutato.",
        "Il cuore aziendale batte nel baglio di famiglia in contrada Samperi, a pochi chilometri da Marsala e a breve distanza dal Mediterraneo, su una terra calcarea arida e ricca di minerali che nutre i vigneti. È lì che nasce, nel 1980, il Vecchio Samperi: il primo vino dell’azienda e il suo manifesto. Non un Marsala fortificato, ma un vino che torna al “vino di Marsala” pre-britannico, ottenuto col metodo perpetuo — il soleras: travasi di piccole quantità di vino giovane in botti che già contengono vini più maturi, così da fondere armoniosamente annate diverse in un profilo unico e irripetibile. Proprio perché non rispondeva al disciplinare, poté affermarsi come oggetto senza termini di paragone.",
        "Il protagonista è il Grillo, in Sicilia dalla metà dell’Ottocento e base storica del Marsala. Da lui nascono anche la Vigna la Miccia, Marsala Superiore Oro più gentile e immediato, la Riserva di dieci anni resa amabile dalla mistella di antica ricetta, e i Grappoli del Grillo, primo bianco fermo dell’azienda da un’uva fino ad allora destinata solo al Marsala, qui valorizzata per struttura e longevità.",
        "Poi c’è la seconda anima, di là dal mare: Pantelleria. Nel cru Bukkuram — termine arabo che significa “padre della vigna” — dall’uva Zibibbo coltivata sui terreni vulcanici nasce il passito omonimo, espressione luminosa dell’isola e del suo vento.",
        "Marco era un vignaiolo tenace e meridionalista convinto, persuaso fino all’ostinazione che certe radici meritino di essere difese. Oggi quel lavoro prosegue grazie ai tre figli — Renato, Sebastiano e Giuseppina — che ne custodiscono l’intransigenza e la cura, con una crescente attenzione ai vini d’annata, ai monovarietali e alla sostenibilità.",
        "Bere un suo vino significa allora bere un pezzo di Sicilia autentica: quella che non si è arresa, che ha riscoperto la propria ragione d’essere e l’ha messa in bottiglia, un sorso alla volta."
      ]
    },
    damijan: {
      occhiello: "Damijan Podversič · Collio",
      titolo: "La natura, il seme, il tempo",
      sottotitolo: "Gorizia, sul confine, dove il vino è lo specchio della vigna",
      copertina: "assets/damijan-copertina.jpg",
      paragrafi: [
        "I vignaioli sono una pausa dal mondo. Una terra ascoltata nei suoi colori e nei suoi cicli, un seme atteso fino al punto giusto, il giusto silenzio per ritrovarsi.",
        "A Gorizia, sul confine orientale, Damijan Podversič ha fatto dell’ascolto della natura il principio di tutto. «La natura non fa nulla di inutile», amava dire Aristotele: e oggi, sostiene Damijan, non siamo più abituati ad ascoltarla — ma se si presta attenzione ai suoi colori, ai profumi, ai cicli, tutto diventa più chiaro. Per fare un grande vino servono tre cose: una grande terra, una grande varietà, un seme maturo.",
        "La terra, qui, è la ponca: marna e arenaria, capace di trattenere l’acqua nei mesi estivi e di restituirla al vino come mineralità. Le varietà sono quelle che nel Collio fanno da padrone — la Ribolla Gialla, la Malvasia, il Friulano. È da questo incontro fra suolo e vitigno che nasce tutto il resto.",
        "§ Il seme",
        "C’è un momento in cui si decide la vendemmia, e non lo si stabilisce dal calendario, ma camminando tra i filari: osservando i colori del vigneto, dei grappoli, dei vinaccioli, e infine assaggiandoli. Nel seme è racchiusa l’annata intera. Perché — è questa la convinzione di Damijan — il vino è lo specchio della vigna: nessuna correzione in cantina può aggiungere ciò che non è nato nel campo.",
        "§ Il tempo",
        "In cantina comanda il tempo, quel grande autore che, diceva Chaplin, trova sempre il finale perfetto. Nei primi mesi il vino viene “firmato” attraverso la macerazione sulle bucce, che ne estrae la croccantezza del frutto, la mineralità del territorio, il ritmo dell’annata. Poi vengono tre anni nel grembo di legno delle botti e un anno in bottiglia. Non si forza nulla: si custodisce ciò che la vigna ha già dato, per ritrovarlo intatto a ogni sorso.",
        "I suoi vini portano i nomi di questa terra di confine — Kaplja, Malvasia, Nekaj, Pinot Grigio, Prelit, Ribolla Gialla — e dietro ognuno c’è una famiglia e un gruppo di persone legate dall’amicizia e da una stessa idea di bellezza. «Oggi mi sento una persona fortunata», dice Damijan, «perché ho raggiunto i sogni di quando ero bambino». Il vino, in fondo, è la poesia della terra."
      ]
    },
    tecce: {
      occhiello: "Luigi Tecce · Irpinia",
      titolo: "Il poeta del vino",
      sottotitolo: "Paternopoli, contrada Trinità, nel cuore del Taurasi",
      copertina: "assets/tecce-copertina.jpg",
      paragrafi: [
        "I vignaioli sono una pausa dal mondo. Una vigna antica allevata a raggiera, un vitigno che racconta la sua terra, il giusto silenzio per ritrovarsi.",
        "A Paternopoli, in contrada Trinità, nel cuore della DOCG Taurasi, lavora un uomo che molti, in Irpinia e oltre, chiamano un poeta del vino. Luigi Tecce è la quarta generazione di una famiglia di viticoltori: prende le redini dell’azienda nel 1997, coltivando poco più di un ettaro, e da subito fa una scelta netta — cambiare le tecniche senza tradire l’anima.",
        "Con lui il cambio generazionale diventa una piccola rivoluzione gentile: è il primo della famiglia a imbottigliare in proprio, rinuncia alla chimica e alle macchine, ma conserva intatta la sensibilità dei nonni. Non è nostalgia: è la convinzione che certe cose si possano fare solo con le mani e con il tempo.",
        "Oggi le vigne si estendono per circa cinque ettari, frazionate in piccoli appezzamenti esposti a sud, tra i cinquecento e i seicento metri d’altitudine. Il nucleo storico è fatto di piante secolari, allevate per lo più nella forma tradizionale della raggiera avellinese. Diserbanti e insetticidi sono banditi; i trattamenti, quando servono davvero, si fanno solo con rame e zolfo. L’idea è semplice e severa: assecondare la natura, cercando l’equilibrio fra le piante, il suolo e il clima.",
        "Controcorrente per natura, Luigi trasmette il proprio carattere anche nei vini, e perfino nei loro nomi, che sanno di letteratura. Il T’Aglianico “Satyricon”, il Taurasi “Poliphemo”, il “Puro Sangue”: vini di grande energia, che spiccano nel panorama irpino e ne racchiudono l’anima — quella di un Aglianico fiero, figlio di una terra alta e di una pazienza che non ammette scorciatoie.",
        "Sono poche bottiglie, ognuna con dentro un pezzo di Irpinia e un verso non scritto. Perché certi vini, come certe poesie, non si spiegano: si ascoltano."
      ]
    },
    pietrelevate: {
      occhiello: "Pietre Levate · Cilento",
      titolo: "Per pochi, per scelta",
      sottotitolo: "Ottati, nella Valle del Fasanella, ai piedi degli Alburni",
      copertina: "https://res.cloudinary.com/dspgc41gt/image/upload/PietreLevate_copertina_mubzk6",
            galleria: ["https://res.cloudinary.com/dspgc41gt/image/upload/PietreLevate_pietre_f0tqoq", "https://res.cloudinary.com/dspgc41gt/image/upload/PietreLevate_campagna_jxlbch", "https://res.cloudinary.com/dspgc41gt/image/upload/PietreLevate_vigna_ihmul7"],
      paragrafi: [
        "I vignaioli sono una pausa dal mondo. Una vigna strappata alla pietra, un vitigno che racconta la sua terra, il giusto silenzio per ritrovarsi.",
        "C’è una domanda all’origine di questo vino: può una bottiglia essere un atto d’amore verso chi è venuto prima, e insieme un gesto di resilienza contro lo spopolamento di una terra? A Ottati, in un angolo del Cilento dove la pietra calcarea affiora ovunque e i centenari sono più numerosi che altrove, qualcuno ha deciso che la risposta fosse sì.",
        "Il nome viene dalla fatica. Per fare spazio alle viti è stato necessario levare pietre senza sosta — talmente tante che i mezzi meccanici non riuscivano a passare. Sotto, argilla e limo, ma soprattutto scheletro carsico: ed è da lì che nasce la finezza di questo Aglianico, lontano dall’opulenza dei vini di costa.",
        "Le scelte sono nette, quasi ostinate. Mille piante su poco più di duemila metri quadrati. Fermentazione in anfora di terracotta, che lascia respirare il vino senza imporgli nulla. Certificazione biologica dal 2021, per coerenza con il luogo. E un numero che non cambia: ogni anno, qualunque sia l’annata, escono esattamente cinquecentoventotto bottiglie. Numerate, incartate a una a una. Tutto il resto si beve tra parenti e amici.",
        "È un vino che non insegue i numeri, e proprio per questo li sceglie con cura. Per pochi, per scelta."
      ]
    }
  },

  /* ===============================================================
     LE CINQUE CATEGORIE
     L'ordine in cui le scrivi qui è l'ordine in cui appaiono.
     =============================================================== */
  categorie: [
    {
      id: "locande", titolo: "Camera con vista", sottotitolo: "Dove fermarsi per la notte",
      tessera: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5181_pp5vga",
      intro: "Aprire le persiane su un panorama inaspettato è uno dei piccoli miracoli del viaggio. Abbiamo scelto le dimore dove l’accoglienza incontra la bellezza: alberghi, rifugi e affacci sospesi, pensati per chi vuole fermarsi davvero — non solo per la notte.",
      manifesto: {
        titolo: "Quali sono le dimore che scegliamo",
        sottotitolo: "L’ospitalità come paesaggio",
        paragrafi: [
          "C’è una differenza sottile, ma determinante, tra un luogo dove dormire e un luogo dove fermarsi. Il primo ti accoglie per la notte; il secondo ti cambia la giornata — e a volte qualcosa di più.",
          "Le dimore che scegliamo non si misurano in stelle. Si misurano in quello che si vede aprendo le persiane al mattino: un giardino silenzioso, un golfo che cambia colore con la luce, un tetto di tegole che racconta secoli di storia. Si misurano nell’attenzione che qualcuno ripone in ogni dettaglio — non per stupire, ma per farvi stare bene.",
          "Abbiamo scelto alberghi dove l’ospitalità è autentica, non formale. Rifugi dove il paesaggio entra dentro le stanze. Dimore storiche dove il tempo si è fermato nel modo giusto — non per nostalgia, ma perché certe cose non hanno bisogno di essere cambiate.",
          "Sono posti che si raggiungono con intenzione, spesso fuori dai percorsi più battuti. E che si lasciano, di solito, con qualche rimpianto."
        ]
      }
    },
    {
      id: "trattorie", titolo: "Un tavolo per due", sottotitolo: "La cucina come destinazione",
      tessera: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_6904_n0zj2j",
      intro: "C'è una cucina che vale un viaggio. Non perché si trovi in una guida, ma perché racconta un luogo, una persona, un modo di stare al mondo che altrimenti non avresti incontrato. Abbiamo scelto i tavoli dove la cucina è una destinazione: trattorie, ristoranti e osterie da raggiungere con intenzione, non per caso.",
      manifesto: {
        titolo: "Quali sono i locali che scegliamo",
        sottotitolo: "La cucina come destinazione",
        paragrafi: [
          "C’è un locale che merita un viaggio. Non perché sia famoso, non perché stia su una guida, ma perché racconta qualcosa che non avresti trovato altrove: un territorio, una stagione, le mani di chi ha deciso di fare le cose a modo suo.",
          "I locali che scegliamo non si misurano in coperti. Si misurano in quello che arriva nel piatto: un ingrediente che viene da vicino, una ricetta che qualcuno ha custodito per generazioni, un sapore che rimane dopo che il pranzo è finito. Si misurano nell’attenzione che il cuoco ripone in ogni gesto, non per impressionare, ma per restituire qualcosa di autentico.",
          "Abbiamo scelto trattorie dove la cucina è ancora un atto di amore. Ristoranti dove lo chef conosce il nome di chi alleva, di chi coltiva, di chi pesca. Osterie dove sedersi a tavola significa conoscere un luogo, non solo consumare un pasto.",
          "Sono tavoli che si raggiungono con intenzione, spesso fuori dai luoghi comuni. E dai quali, di solito, si riparte con qualcosa in più."
        ]
      },
      guidaLink: true
    },
    {
      id: "luoghi", titolo: "Racconti di viaggio", sottotitolo: "Luoghi da scoprire, non solo da vedere",
      tessera: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5236_h4rgus",
      intro: "Certi posti non si visitano: si attraversano, e ci lasciano qualcosa. Un borgo che non è sul GPS, una strada che porta dove non si aspettava, un panorama che toglie le parole. Abbiamo scelto i luoghi che hanno una storia da raccontare — e che cambiano, almeno un po', chi li percorre.",
      manifesto: {
        titolo: "Quali sono i luoghi che scegliamo",
        sottotitolo: "Luoghi da scoprire, non soltanto da vedere",
        paragrafi: [
          "Esiste un luogo che merita un viaggio. Non perché stia su una mappa, non perché lo abbia consigliato qualcuno, ma perché custodisce qualcosa di difficile da spiegare: un’atmosfera, una luce, un silenzio che ha il peso delle cose vere.",
          "I luoghi che scegliamo non si misurano in attrazioni. Si misurano in quello che riescono a restituire: un borgo che racconta secoli in silenzio, una strada che porta dove non ci si aspetta, un paesaggio che elimina le parole e le rende inutili. Si misurano nel tempo che invita a prendersi, non per consumare un’esperienza, ma per lasciarsi permeare da un luogo.",
          "Abbiamo scelto luoghi dove la bellezza non è esibita. Angoli d’Italia e del mondo che esistono al di là del turismo organizzato, dove ci si sente ospiti di qualcosa di autentico, non spettatori di una scenografia.",
          "Sono posti che si raggiungono con intenzione, spesso fuori dai luoghi comuni. E che si lasciano, di solito, con la sensazione di averne capito solo una parte."
        ]
      }
    },
    {
      id: "artigiani", titolo: "Mestieri d'autore", sottotitolo: "La sapienza del fare",
      tessera: "https://res.cloudinary.com/dspgc41gt/image/upload/5_ae6n4v",
      intro: "L’importanza del dettaglio. C’è un sapere che non si trova sui motori di ricerca. Si trova in una bottega, al mercato del pesce al mattino presto, in un campo coltivato con la saggezza di un tempo. Nelle mani di chi ha imparato guardando e poi ha fatto proprio. Abbiamo scelto i mestieri dove l’identità di chi fa è inseparabile da ciò che produce — persone da incontrare, non solo prodotti da acquistare.",
      manifesto: {
        titolo: "Quali sono i mestieri che raccontiamo",
        sottotitolo: "La sapienza del fare",
        paragrafi: [
          "Esistono attività che meritano di essere conosciute. Non perché producano soltanto qualcosa di famoso, non perché i loro prodotti siano esposti nei negozi alla moda, ma perché dietro ogni oggetto, ogni taglio, ogni raccolto c’è una persona che ha scelto di fare le cose con le proprie mani, e di farle per bene.",
          "I mestieri che raccontiamo non si misurano soltanto in fatturato. Si misurano in quello che restituiscono: un capo sartoriale che migliora con il tempo, un formaggio che racconta il pascolo dove è nato, un pesce che arriva dalla barca di chi lo ha pescato all’alba. Si misurano nell’attenzione che qualcuno ripone in ogni gesto, non per stupire, ma perché non sa farlo in altro modo.",
          "Abbiamo scelto artigiani, agricoltori, pescatori, macellai, casari, e chiunque altro faccia qualcosa con la stessa intenzione. Persone dove l’identità di chi fa è inseparabile da ciò che realizza. Dove la qualità non è un obiettivo di marketing, ma una conseguenza naturale del modo in cui si lavora.",
          "Sono mestieri che si scoprono con intenzione, spesso fuori dai luoghi comuni. E che ricordano, ogni volta, che dietro ogni cosa fatta bene c’è sempre una persona."
        ]
      }
    },
    {
      id: "vignaioli", titolo: "Vignaioli", sottotitolo: "Il vino come memoria di un territorio",
      tessera: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_7370_c878u6",
      intro: "Il vino racconta ciò che la terra ricorda. Un vitigno antico, un suolo che nessun altro ha, un clima che non si ripete: ogni bottiglia è la memoria di un luogo preciso e di chi ha scelto di custodirlo. Abbiamo scelto i vignaioli che fanno vino con intenzione — controcorrente, spesso in solitudine — perché certe radici, letterali e culturali, meritano di sopravvivere.",
      manifesto: {
        titolo: "Chi sono i vignaioli che scegliamo",
        sottotitolo: "Il vino come memoria di un territorio",
        paragrafi: [
          "Esistono vini che meritano di essere assaggiati. Non perché abbiano ricevuto un punteggio elevato su una guida, non perché siano sulle carte dei ristoranti famosi, ma perché raccontano qualcosa di particolare: un territorio, condizioni climatiche uniche, le mani di chi ha deciso di non cedere alla logica del mercato.",
          "I vignaioli che scegliamo non si misurano in bottiglie prodotte. Si misurano in quello che restituiscono: un vitigno antico che qualcuno ha scelto di salvare dall’estinzione, un suolo che nessun altro ha, un’annata che porta dentro di sé tutto quello che quell’anno ha dato e tolto. Si misurano nell’ostinazione di chi lavora i filari a mano, perché sa che certi gesti non si possono delegare.",
          "Abbiamo scelto chi fa vino con determinazione, controcorrente, spesso in solitudine, quasi sempre lontano dai riflettori. Persone convinte che certe radici, letterali e culturali, meritino di sopravvivere. Che ogni bottiglia sia la memoria di un luogo e di chi lo abita.",
          "Sono vignaioli che si scoprono con intenzione, e che ricordano, ogni volta, che dietro ogni vino fatto bene c’è sempre una persona."
        ]
      }
    }
  ],

  /* ===============================================================
     LE SCHEDE, DIVISE PER CATEGORIA
     =============================================================== */
  schede: {

    /* ---------------- LOCANDE ---------------- */
    locande: [
      {
        titolo: "Hotel La Soglina",
        luogo: "Via Carnella 6 · Soglio · Grigioni",
        sommario: "Una terrazza sospesa sulla Val Bregaglia, dove il panorama è già parte del soggiorno.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5352_mxpvmk",
        telefono: "+41818221608",
        email: "info@lasoglina.ch",
        web: "http://www.lasoglina.ch",
        mappa: "Via Carnella 6, Soglio, Svizzera",
        lat: 46.3494, lng: 9.5186
      },
      {
        titolo: "Maison La Minervetta",
        luogo: "Via Capo 25 · Sorrento",
        sommario: "Un buen retiro sulla scogliera di Sorrento, dove il mare non smette mai d'incantarti.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5680_aah5th",
        storia: "minervetta",
        galleria: ["https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5189_p6tsfa","https://res.cloudinary.com/dspgc41gt/image/upload/IMG_1315_sdj9f4","https://res.cloudinary.com/dspgc41gt/image/upload/IMG_6169_hfobsi"],
        telefono: "+390818774455",
        email: "info@laminervetta.com",
        web: "https://www.laminervetta.com",
        mappa: "Via Capo 25, Sorrento",
        lat: 40.6293, lng: 14.3661
      }
    ],

    /* ---------------- TRATTORIE ---------------- */
    trattorie: [
      {
        titolo: "Poliform Cafè",
        luogo: "Piazza della Scala 5 · Milano",
        sommario: "Nel cuore di Milano, una cucina diretta e luminosa: l’ingrediente protagonista, il pranzo come arte della leggerezza.",
        testo: "In Piazza della Scala, il Poliform Cafè porta in tavola la cucina di Mario Iannone — formazione napoletana, l’Accademia di Niko Romito e otto anni accanto a Michele a Rovello — e la pasticceria di Piera Gandolfo. Una cucina comprensibile e leggera, dove l’ingrediente è il vero protagonista e ogni gesto custodisce la stessa cura.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_1620_amjout",
        telefono: "+39 331 1958361",
        email: "",
        web: "",
        mappa: "Poliform Cafè, Piazza della Scala 5, Milano",
        lat: 45.4670, lng: 9.1895,   /* coordinate approssimative — correggi con precisione */
        storia: "poliform",
        galleria: []
      },
      {
        titolo: "Trattoria Campanini",
        luogo: "Madonna dei Prati · Busseto (PR)",
        sommario: "Da oltre un secolo, di fronte al santuario, la memoria corale della Bassa: torta fritta e culatello.",
        testo: "Imboccata la strada per Madonna dei Prati cambia il mondo: campi curati, case coloniche, lunghi filari, silenzio. Di fronte al santuario dove un giovane Verdi suonava l’organo, da oltre cent’anni sta la trattoria della famiglia Campanini. I salumi sono il cuore della casa — culatelli grandi e marezzati, stagionati fino a 32 e 42 mesi — e il lunedì sera resta la tradizione della torta fritta.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_4381_u74xvg",
        telefono: "+390524925 69",
        email: "campanini@culatelloandwine.com",
        web: "https://campanini.culatelloandwine.it",
        mappa: "Trattoria Campanini, Via Roncole Verdi 136, Madonna dei Prati, Busseto",
        lat: 44.9710, lng: 10.1340,   /* coordinate approssimative — correggi con precisione */
        storia: "campanini",          /* ← collega la pagina storia.html?s=campanini */
        galleria: [
          "assets/campanini-culatello.jpg",
          "assets/campanini-bilancia.jpg",
          "assets/campanini-closerie.jpg",
          "assets/campanini-vouette.jpg"
        ]
      },
      {
        titolo: "Stadera — Gastronomia Contemporanea",
        luogo: "Largo della Crocetta 1 · Milano",
        sommario: "Sembra una gastronomia di quartiere. È, invece, grande cucina.",
        testo: "Un’occhiata distratta potrebbe ingannare. Ma se cedete alla curiosità di soffermarvi, scoprirete un locale dove si servono piatti di grande cucina. Aldo Ritrovato e Laura hanno realizzato il sogno che a lungo custodivano in un cassetto.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_8781_ouxnzu",
        telefono: "",
        mappa: "Largo della Crocetta 1, Milano",
        lat: 45.4566, lng: 9.1878
      },
      {
        titolo: "Manifattura Alimentare",
        luogo: "Ferrara",
        sommario: "Cucina del territorio, nel cuore di Ferrara.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_2487_x5bdzv",
        telefono: "",
        web: "http://www.manifatturaalimentare.it",
        mappa: "Ferrara",
        lat: 44.8381, lng: 11.6198
      },
      {
        titolo: "In Riva a Numana",
        luogo: "Via Flaminia 109 · Numana · Riviera del Conero",
        sommario: "Dove il Conero incontra il mare, una cucina che sceglie ogni mattina quello che porterà in tavola.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/RIVA_Restaurant_Sett_24.jpg_ifpzgv",
        storia: "vista",
        telefono: "+390719720967",
        email: "info@vistanumana.it",
        web: "https://www.rivanumana.it",
        mappa: "Via Flaminia 109, Numana, Ancona",
        lat: 43.5025, lng: 13.6289,
        galleria: ["https://res.cloudinary.com/dspgc41gt/image/upload/Chef.jpg_mim2sg","https://res.cloudinary.com/dspgc41gt/image/upload/Bagna_Cruda.jpg_xcer0y","https://res.cloudinary.com/dspgc41gt/image/upload/Pithivier.jpg_e0z7q1"]
      },
      {
        titolo: "Da Gustin",
        luogo: "Bargni di Serrungarina · Marche",
        sommario: "Una bottega degli anni Quaranta diventata osteria, nel cuore del Montefeltro.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_3757_kxkhuw",
        web: "https://www.dagustin.it",
        telefono: "+390721891517",
        mappa: "Via Castello 27, Bargni di Serrungarina, Pesaro Urbino",
        lat: 43.6891, lng: 12.8734,
        storia: "dagustin",
        galleria: ["https://res.cloudinary.com/dspgc41gt/image/upload/IMG_3766_qfwws0","https://res.cloudinary.com/dspgc41gt/image/upload/IMG_3781_vofs7d","https://res.cloudinary.com/dspgc41gt/image/upload/IMG_4657_urt9bj","https://res.cloudinary.com/dspgc41gt/image/upload/IMG_2720_dlg8dn"]
      },
      {
        titolo: "La Pergola",
        luogo: "Via Magna Grecia 50 · Capaccio Paestum",
        sommario: "A pochi passi dai templi dorici, una cucina fedele al Cilento e al mare.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/Dehor_zktbye",
        storia: "lapergola",
        telefono: "+390828723377",
        email: "info@lapergolapaestum.it",
        web: "https://www.lapergolapaestum.it",
        mappa: "Via Magna Grecia 50, Capaccio Salerno",
        lat: 40.4570, lng: 15.0119,
        outdoor: true
      }
    ],

    /* ---------------- LUOGHI ---------------- */
    luoghi: [
      {
        titolo: "Costiera Amalfitana",
        luogo: "Campania",
        sommario: "Dove la luce ha un peso, e il tempo scorre lentamente.",
        storia: "costiera",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5236_h4rgus",
        mappa: "Costiera Amalfitana",
        lat: 40.634, lng: 14.602
      },
      {
        titolo: "Il Bernina Express",
        luogo: "Svizzera · Italia",
        sommario: "Il treno più cinematografico d’Europa, fotogramma dopo fotogramma.",
        storia: "bernina",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/Bernina_Express_xzhwsr",
        mappa: "Bernina Pass, Svizzera",
        lat: 46.4108, lng: 10.0203
      },
      {
        titolo: "Soglio",
        luogo: "Val Bregaglia · Grigioni",
        sommario: "Un borgo fuori dal tempo, dove la luce ha la qualità di un quadro.",
        storia: "soglio",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5354_aylm7n",
        mappa: "Soglio, Val Bregaglia",
        lat: 46.3494, lng: 9.5186
      }
    ],

    /* ---------------- ARTIGIANI ---------------- */
    artigiani: [
      {
        titolo: "Giorgio Paponi",
        luogo: "Via Fermana Sud 401/B · Montegranaro (FM)",
        sommario: "L\'eleganza che si costruisce a mano, un punto alla volta.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/IMG_5771_bsqkns",
        storia: "paponi",
        telefono: "+390734889468",
        mappa: "Via Fermana Sud 401/B, Montegranaro, Fermo",
        lat: 43.2347, lng: 13.6278
      },
      {
        titolo: "Bottega Ghianda",
        luogo: "Giussano · Brianza",
        sommario: "Due secoli di sapienza ebanistica, nel cuore della Brianza.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/a_-90/IMG_1788_mftxg6",
        storia: "ghianda",
        web: "https://bottegaghianda.com/it",
        mappa: "Giussano, Monza e Brianza",
        lat: 45.6964, lng: 9.2205
      },
      {
        titolo: "Viadamez",
        luogo: "Strada S. Giovanni 4 · Poschiavo · Valposchiavo",
        sommario: "Due amiche, due mestieri, una via di mezzo — nel cuore della Valposchiavo.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/1_vmrtqa",
        storia: "viadamez",
        galleria: ["https://res.cloudinary.com/dspgc41gt/image/upload/5_ae6n4v","https://res.cloudinary.com/dspgc41gt/image/upload/3_qdr7qw","https://res.cloudinary.com/dspgc41gt/image/upload/2_omkqpg"],
        telefono: "+41788800671",
        web: "http://www.viadamez.ch",
        mappa: "Strada S. Giovanni 4, Poschiavo, Svizzera",
        lat: 46.3225, lng: 10.0694
      }
    ],

    /* ---------------- VIGNAIOLI ---------------- */
    vignaioli: [
      {
        titolo: "Maria Pia Castelli",
        luogo: "Monte Urano (FM) · Marche",
        sommario: "Il vino delle mani sapienti: una famiglia, una terra fra le colline picene e il mare, e vini che raccontano la verità del suolo.",
        testo: "Dove le colline del Piceno si piegano dolci verso il mare, Erasmo Castelli piantò nel 1999 non solo viti, ma un’eredità — quella che porta il nome di sua figlia, Maria Pia. Oggi Maria Pia ed Enrico custodiscono quel sogno fra tradizione e innovazione, e firmano vini riconosciuti come una delle voci più sincere del Piceno. Tra questi, Stella Flora: poche, preziose bottiglie nate per amore.",
        immagine: "assets/castelli-copertina.jpg",
        telefono: "+39 0734 841774",
        email: "info@mariapiacastelli.it",
        web: "https://www.mariapiacastelli.it",
        mappa: "Azienda Agricola Maria Pia Castelli, Contrada Sant'Isidoro 22, Monte Urano FM",
        lat: 43.1820, lng: 13.6790,   /* Monte Urano (FM) — approssimative, da affinare */
        storia: "castelli",
      prestoOnline: true,
        galleria: []
      },
      {
        titolo: "Il Monte dei Ragni",
        luogo: "Marega di Fumane (VR) · Valpolicella",
        sommario: "Una collina magra in Valpolicella, cinque generazioni e l’intuizione di Santo Ragno: la terra che non regala nulla restituisce il meglio nel bicchiere.",
        testo: "Sul crinale che sale da Bure fino a Mazzurega, all’inizio del Novecento Santo Ragno capì che quella collina povera e sassosa, proprio perché magra, era fatta per la vite. Tra i filari piantò olivi e ciliegi, perché una collina deve dare gioia anche prima della vendemmia. Oggi, cinque generazioni dopo, Zeno Zignoli cura quei pochi ettari come un giardino: ne nascono Amarone, Recioto, Valpolicella Superiore, un bianco affinato in anfora e un olio pregiato.",
        immagine: "assets/ragni-copertina.jpg",
        telefono: "+39 045 6801600",
        cellulare: "+39 339 3428360",
        email: "info@montedeiragni.com",
        web: "https://www.montedeiragni.com",
        mappa: "Azienda Agricola Monte dei Ragni, Località Marega 3, Fumane VR",
        lat: 45.5360, lng: 10.8840,   /* Fumane (VR) — approssimativa, da affinare */
        storia: "ragni",
      prestoOnline: true,
        galleria: []
      },
      {
        titolo: "Comm. G. B. Burlotto",
        luogo: "Verduno (CN) · Langhe",
        sommario: "Le mani di Verduno: cinque generazioni nel cuore del Barolo, e una cocciutaggine che ha salvato un’uva, il Pelaverga.",
        testo: "A Verduno, comune storico del Barolo, la famiglia Burlotto coltiva da centosettant’anni la stessa idea di vino: sobrio, fedele alla terra e ai vitigni che lo generano. Dal 1850 di Giovan Battista fino a Marina, Giuseppe e ai figli Fabio e Cristina, è la storia di cinque generazioni — e di chi, con ostinazione, ha salvato dall’oblio il Verduno Pelaverga, luminoso e leggero. Le mani sono cambiate. Lo sguardo, no.",
        immagine: "assets/burlotto-copertina.jpg",
        telefono: "+39 0172 470122",
        email: "burlotto@burlotto.com",
        web: "https://www.burlotto.com",
        mappa: "Azienda Vitivinicola Comm. G. B. Burlotto, Via Vittorio Emanuele II 28, Verduno CN",
        lat: 44.6480, lng: 7.9760,   /* Verduno (CN) — approssimativa, da affinare */
        storia: "burlotto",
      prestoOnline: true,
        galleria: []
      },
      {
        titolo: "Tenute Dettori",
        luogo: "Sennori (SS) · Romangia, Sardegna",
        sommario: "Vignaioli e artigiani del vino e della terra. Solo uva, fermentata nel cemento e lasciata decantare: ogni bottiglia è diversa, ogni bottiglia è numerata.",
        testo: "A Sennori, in Romangia, i Dettori fanno il vino come un atto di fedeltà alla loro terra. Nelle vasche di cemento, senza piede di partenza, l’uva diventa vino senza che vi si aggiunga nient’altro — non filtrato, non chiarificato, stabilizzato per sola decantazione, affinato dai dieci ai sessanta mesi. Biodinamica certificata dal 2003, quando erano l’unica cantina sarda a Critical Wine, su invito di Luigi Veronelli. La loro idea sta in una frase: «sono ciò che sono, e non ciò che vuoi che siano».",
        immagine: "assets/dettori-copertina.jpg",
        telefono: "+39 079 515511",
        email: "",
        web: "",
        mappa: "Tenute Dettori, Strada Provinciale 29 km 10, Sennori SS",
        lat: 40.7890, lng: 8.5900,   /* Sennori (SS) — approssimativa, da affinare */
        storia: "dettori",
      prestoOnline: true,
        galleria: []
      },
      {
        titolo: "Azienda Agricola Zidarich",
        luogo: "Prepotto (TS) · Carso triestino",
        sommario: "Pietra e radici: sul Carso, dove la terra è poca e rossa, una cantina scavata nella roccia e i vini autoctoni di una volta — Vitovska, Terrano, Malvasia.",
        testo: "A Prepotto, nel cuore del Carso triestino, Benjamin Zidarich coltiva dal 1988 un’idea ostinata: che da quella pietra inospitale si possa ancora tirare fuori il verde. La cantina, inaugurata nel 2009, è scolpita nella roccia — venti metri di profondità, una piccola cattedrale dove il vino dorme al fresco. Nelle botti maturano i vini di una volta: la Vitovska soprattutto, e poi Malvasia, Prulke, Terrano. «Vita e lavoro, qui, sono la stessa cosa».",
        immagine: "assets/zidarich-copertina.jpg",
        telefono: "+39 040 201223",
        email: "info@zidarich.it",
        web: "https://www.zidarich.it",
        mappa: "Azienda Agricola Zidarich, Località Prepotto 23, Duino Aurisina TS",
        lat: 45.7570, lng: 13.6160,   /* Prepotto / Carso (TS) — approssimativa, da affinare */
        storia: "zidarich",
      prestoOnline: true,
        galleria: []
      },
      {
        titolo: "Marco De Bartoli",
        luogo: "Contrada Samperi · Marsala (TP), Sicilia",
        sommario: "Il custode del Marsala vero e del passito di Pantelleria: due isole, il Grillo e lo Zibibbo, una sola idea di vino come verità del territorio.",
        testo: "Nel baglio di famiglia in contrada Samperi, a Marsala, Marco De Bartoli ha ridato dignità a un vino che il mercato aveva svilito, riportandolo alle sue radici: il Vecchio Samperi, non fortificato, affinato col metodo perpetuo dal Grillo di Sicilia. Di là dal mare, a Pantelleria, la seconda anima — il Bukkuram, passito di Zibibbo del cru pantesco. Oggi la sua opera continua con i figli Renato, Sebastiano e Giuseppina, fedeli alla stessa intransigenza.",
        immagine: "assets/debartoli-copertina.jpg",
        telefono: "+39 0923 962093",
        email: "info@marcodebartoli.com",
        web: "https://www.marcodebartoli.com",
        mappa: "Marco De Bartoli, Contrada Samperi, Marsala TP",
        lat: 37.7670, lng: 12.4690,   /* Marsala (TP) — approssimativa, da affinare */
        storia: "debartoli",
      prestoOnline: true,
        galleria: []
      },
      {
        titolo: "Damijan Podversič",
        luogo: "Gorizia (GO) · Collio",
        sommario: "Sul confine, la ponca e il tempo: macerazioni lunghe e attese pazienti per vini che sono lo specchio della vigna.",
        testo: "A Gorizia, sul confine, Damijan Podversič fa vino ascoltando la natura — i suoi colori, i profumi, i cicli. Tutto comincia dalla ponca, la terra di marna e arenaria che dona mineralità, e dai vitigni del territorio: Ribolla Gialla, Malvasia, Friulano. In cantina comanda il tempo: la macerazione che firma il vino, poi tre anni nel legno e uno in bottiglia. «Mi sento fortunato: ho raggiunto i sogni di quando ero bambino».",
        immagine: "assets/damijan-copertina.jpg",
        telefono: "+39 0481 78217",
        email: "",
        web: "https://www.damijanpodversic.com",
        mappa: "Damijan Podversič, Via degli Eroi 33, Gorizia GO",
        lat: 45.9490, lng: 13.6210,   /* Gorizia (GO) — approssimativa, da affinare */
        storia: "damijan",
      prestoOnline: true,
        galleria: []
      },
      {
        titolo: "Luigi Tecce",
        luogo: "Paternopoli (AV) · Irpinia",
        sommario: "Un poeta del vino in Irpinia: piante secolari a raggiera, niente chimica, e Taurasi di grande energia dai nomi letterari.",
        testo: "A Paternopoli, nel cuore della DOCG Taurasi, Luigi Tecce — quarta generazione di viticoltori — ha preso le redini nel 1997, scegliendo la via più difficile: niente chimica né macchine, ma la sensibilità dei nonni. Cinque ettari esposti a sud, fra i 500 e i 600 metri, con un nucleo di piante secolari allevate a raggiera avellinese. Controcorrente per natura, mette la sua anima letteraria nei vini: il T’Aglianico Satyricon, i Taurasi Poliphemo e Puro Sangue.",
        immagine: "assets/tecce-copertina.jpg",
        telefono: "+39 0827 71375",
        email: "",
        web: "",
        mappa: "Azienda Agricola Luigi Tecce, Via Trinità 6, Paternopoli AV",
        lat: 40.9760, lng: 15.0330,   /* Paternopoli (AV) — approssimativa, da affinare */
        storia: "tecce",
      prestoOnline: true,
        galleria: []
      },
      {
        titolo: "Pietre Levate",
        luogo: "Ottati (SA) · Cilento, Monti Alburni",
        sommario: "Nel cuore del Cilento, un vino nato per amore: 528 bottiglie di Aglianico, vinificate in anfora di terracotta. Per pochi, per scelta.",
        testo: "Ad Ottati, nella Valle del Fasanella alle pendici dei Monti Alburni — cuore del Parco Nazionale del Cilento, patrimonio Unesco — nasce il Pietre Levate: un omaggio alla generazione che ha preceduto e una testimonianza di resistenza allo spopolamento della terra. Circa mille piante di Aglianico, vinificate in anfora di terracotta, per sole 528 bottiglie numerate ogni anno. Certificazione biologica dal 2021. Un vino che, per scelta, non cerca i numeri.",
        immagine: "https://res.cloudinary.com/dspgc41gt/image/upload/PietreLevate_copertina_mubzk6",
        telefono: "+39 380 2835759",
        email: "info@pietrelevate.it",
        web: "",
        mappa: "Azienda Agricola Pietre Levate, Località Bocito, Ottati SA",
        lat: 40.3760, lng: 15.2480,   /* Ottati (SA) — approssimativa, da affinare */
        storia: "pietrelevate",
        galleria: ["https://res.cloudinary.com/dspgc41gt/image/upload/PietreLevate_pietre_f0tqoq","https://res.cloudinary.com/dspgc41gt/image/upload/PietreLevate_campagna_jxlbch","https://res.cloudinary.com/dspgc41gt/image/upload/PietreLevate_vigna_ihmul7"]
      }
    ]

  }
};

