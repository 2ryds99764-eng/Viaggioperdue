# Viaggioperdue · T42 — Istruzioni

## Cosa c'è in questa cartella

- **index.html** — la pagina iniziale (landing page) su cui atterri da Instagram
- **categoria.html** — la pagina che mostra le schede; serve per tutte e cinque le categorie
- **racconto.html** — la pagina con il racconto "Appunti di viaggio in Italia"
- **storia.html** — la pagina con la storia lunga di un luogo (es. la Trattoria Campanini)
- **mappa.html** — la mappa con tutte le località puntate (Leaflet + OpenStreetMap)
- **stile.css** — la grafica (colori, font, impaginazione)
- **motore.js** — la logica che costruisce le pagine
- **dati.js** — ★ I CONTENUTI: l'unico file che devi modificare ★
- **assets/** — la cartella con le fotografie e il logo
    - `logo-t42.png` — il logo a colori (intestazione)
    - `logo-t42-bianco.png` — il logo bianco (piè di pagina scuro)

Il logo e il racconto sono già inseriti. Il racconto vive nel blocco
`racconto:` dentro **dati.js**: per modificarlo cambi i paragrafi tra
virgolette, esattamente come per le schede.

---

## 1 · Mettere il sito online su Aruba

1. Accedi al pannello Aruba e apri la sezione **FTP / Gestione File** (oppure usa un
   programma come FileZilla con i dati FTP che trovi nel pannello Aruba).
2. Entra nella cartella pubblica del tuo spazio web (di solito si chiama
   **www** oppure **htdocs**).
3. Carica lì dentro **tutti i file** di questa cartella, mantenendo anche la
   cartella **assets** con le foto.
4. Apri il tuo indirizzo (es. www.iltuosito.it): vedrai la pagina iniziale.

> Non serve database né installazioni. È un sito statico: si carica e funziona.

### Il link da Instagram
Nella biografia di Instagram metti l'indirizzo del sito (es. www.iltuosito.it).
Chi clicca atterra su **index.html**. Da lì, toccando una categoria, arriva alla
pagina dedicata. È esattamente il percorso Step 1 → Step 2 che avevi descritto.

---

## 2 · Aggiungere o modificare i contenuti

Apri **dati.js** con un editor di testo (anche il Blocco Note va bene).
In cima al file trovi le istruzioni dettagliate. In sintesi:

- Ogni scheda è un blocco tra parentesi graffe `{ ... }`.
- Per aggiungerne una, copia un blocco esistente e incollalo sotto, dentro le
  parentesi quadre `[ ... ]` della categoria giusta.
- Cambia solo i testi **tra virgolette**. Non toccare le parole prima dei due punti
  (`titolo:`, `luogo:`, `testo:`...).
- Ogni blocco `{ }` finisce con una virgola.
- Salva e ricarica **dati.js** su Aruba. Il sito è aggiornato.

### Il pulsante "Chiama per prenotare"
Nel campo `telefono` scrivi il numero con prefisso, senza spazi: `"+390532000000"`.
Comparirà un pulsante che, da cellulare, avvia la telefonata.
Se lasci `""` (vuoto), il pulsante non appare.

### Il pulsante "Apri in Apple Maps"
Nel campo `mappa` scrivi il nome o l'indirizzo del luogo: `"Stadera, Ferrara"`.
Comparirà un pulsante che apre la posizione in Apple Maps (sull'iPhone si apre
direttamente l'app; altrove nel browser).

### La mappa con tutte le località (coordinate)
La pagina `mappa.html` mostra ogni località come segnaposto, con un colore
diverso per categoria. I segnaposto si posizionano grazie ai campi `lat` e `lng`
presenti in ogni scheda dentro `dati.js`, per esempio:

    lat: 44.8381, lng: 11.6198

Le coordinate attuali sono **approssimative** (ricavate dal nome del luogo).
Per renderle precise:
1. Apri Apple Maps (o Google Maps) e cerca il luogo esatto.
2. Tieni premuto sul punto per far comparire le coordinate, oppure leggile
   nella scheda del luogo.
3. Copia i due numeri: il primo è `lat` (latitudine), il secondo `lng` (longitudine).
4. Sostituiscili in `dati.js` nella scheda corrispondente. Salva e ricarica.

Se una scheda non ha `lat` e `lng`, semplicemente non appare sulla mappa
(ma resta regolarmente nella sua pagina-categoria).

### Le fotografie
1. Carica la foto nella cartella **assets** su Aruba.
2. In `dati.js`, nel campo `immagine`, scrivi il nome del file:
   `"assets/nome-foto.jpg"`.
3. Se lasci `""` (vuoto), al posto della foto appare un riquadro azzurro
   con la scritta "fotografia".

> Consiglio: ridimensiona le foto a circa 1600 pixel di lato lungo prima di
> caricarle, così le pagine restano leggere e veloci sul telefono.
> Le foto già presenti sono state ottimizzate per questo.

---

## 3 · Cambiare il testo della pagina iniziale

Sempre in **dati.js**, in alto, nel blocco `sito:` puoi cambiare il payoff,
l'introduzione e l'indirizzo Instagram.

---

Buon viaggio. Per due.

---

## Campi extra di una scheda (facoltativi)

Oltre a titolo, luogo, sommario, testo, immagine, telefono e mappa, una scheda
può avere:

- `email: "indirizzo@dominio.it"` → pulsante **Scrivi**
- `web: "https://..."` → pulsante **Sito web**
- `storia: "campanini"` → pulsante **Leggi la storia →** che apre
  `storia.html?s=campanini`
- `galleria: [ "assets/foto1.jpg", "assets/foto2.jpg" ]` → le foto mostrate
  nella pagina storia

## Aggiungere la storia lunga di un luogo

Le storie stanno nel blocco `storie:` in `dati.js`. Ogni storia ha una chiave
(es. `campanini`) richiamata dal campo `storia` della scheda. Struttura:

    storie: {
      campanini: {
        occhiello: "Trattoria Campanini · Busseto",
        titolo: "Una storia di campagna, di tavola e di famiglia",
        sottotitolo: "Madonna dei Prati — Busseto",
        copertina: "assets/campanini-sala.jpg",
        paragrafi: [
          "Primo paragrafo...",
          "§ Titolo di sezione",      ← un paragrafo che inizia con § diventa
          "Altro paragrafo...",          un sottotitolo nella pagina
        ]
      }
    }

La galleria in fondo alla pagina storia viene presa dal campo `galleria`
della scheda collegata.

---

## La Guida ai ristoranti (pagina di ricerca)

La pagina `guida.html` mostra l'archivio dei ristoranti con una ricerca per
**nome** e un filtro per **regione**. I dati stanno nel file `guida.js`, generato
dalla tua rubrica (file .vcf). Ogni voce ha questa forma:

    {"nome":"...", "luogo":"Città (PR)", "regione":"Toscana",
     "prov":"FI", "tel":"+39...", "web":"https://...", "mappa":"...testo per Apple Maps..."}

Per aggiungere o correggere un ristorante puoi modificare direttamente una riga
in `guida.js`. La regione serve per il menu a tendina: scrivila per intero
(es. "Lombardia"). Se la lasci vuota, il ristorante compare comunque nella
ricerca per nome, sotto "zona non indicata".

Se un domani vorrai rigenerare tutto da una rubrica aggiornata, conserva il file
.vcf: la conversione rifà `guida.js` in automatico.
