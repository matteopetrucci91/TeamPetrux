# TeamPetrux
App Muay Thai per strutturare gli allenamenti: scegli una categoria e ottieni esercizi specifici di Muay Thai a caso.

<img src="docs/anteprima-categoria.png" alt="Lista esercizi di una categoria" width="300">

## Cosa fa

- **Menu a tendina** in alto per passare tra *Categorie esercizi*, *Crea allenamento* e *Impostazioni lezione*.
- **Impostazioni**: lezione da 1 ora o 1 ora e 30, ripresa da 2 min (leggero) o 3 min (agonistico).
  I primi 10 minuti sono sempre di riscaldamento.
- **Categorie**: tocchi una categoria e vedi la lista completa dei suoi esercizi, con la ricerca per nome
  e il tempo della tua lezione in alto. "+ Aggiungi alla lezione" lo mette al posto giusto nella scaletta.
- Ogni esercizio ha il **dosaggio**, il tempo stimato e una **descrizione estesa**. Di default ogni esercizio è
  **1 ripresa da 2 o 3 min** (come scelto per la lezione) e il **recupero è sempre di 1 min**, tra le serie e tra un
  esercizio e l'altro. Sotto c'è il dosaggio suggerito dal catalogo ("Nel catalogo: …") come riferimento.
- **Esercizi per attrezzo**: corpo libero, compagno, palla medica, corda, kettlebell, elastici, sacco, pao, bilanciere, manubri,
  sbarra e parallele, battle rope, sandbag, pneumatico e mazza, coni e scaletta, ognuno con almeno 24 esercizi.
  Funzionano come le categorie (lista completa, ricerca, torna indietro).
  Negli esercizi delle categorie, l'attrezzo è un collegamento alla lista di quell'attrezzo.
- **Dosaggio modificabile**: con "✎ Modifica" scegli dai menu a tendina tipo (ripetizioni, tempo,
  riprese, distanza), serie, quantità e lati, così non si sbaglia a scrivere (il recupero resta 1 min);
  restano salvati, valgono ovunque e contano nella stima del tempo. "Torna a 1 ripresa" rimette quello di default.
- **Crea allenamento**: aggiungi gli esercizi dalle categorie con "+ Aggiungi all'allenamento", riordinali e toglili;
  oppure **⚡ Crea lezione automatica** compone la lezione in ordine logico: riscaldamento, tecnica, velocità o footwork,
  clinch, condizionamento, forza, core e mobilità per defaticare.
  Il **Controllo qualità** dà un voto su 100 e consigli: tempo, peso della tecnica, condizionamento, forza o core,
  ordine logico (tecnica prima dei lavori stancanti), defaticamento finale, varietà (non più di 20 min di fila sulla
  stessa categoria, tecnica esclusa) e numero di esercizi.
  Le regole sono nell'app (src/lib/review.ts): gratis e funziona anche offline.
  Con **⬇ Scarica PDF dell'allenamento** salvi la lezione completa (impostazioni, riscaldamento, esercizi con dosaggio,
  tempo e descrizione, totale) da stampare o tenere sul telefono.
- Tutto resta salvato nel browser (localStorage): nessun database, nessun costo. Ogni dispositivo ha i suoi dati.
- **Calendario lezioni**: calendario del mese come su iPhone; aggiungi le lezioni con orari (anche ripetute ogni settimana)
  e per ognuna le presenze: nome, cognome, età, certificato medico, mese pagato e note. Puoi aggiungere persone già
  inserite o copiare le presenze della lezione precedente. I dati restano sul dispositivo: "Scarica backup" e
  "Carica backup" servono per non perderli, "Presenze per Excel" scarica un file CSV.
- Logo del Team Petrux nella home (anche come icona dell'app sul telefono) e "‹ Home" per tornare indietro da ogni pagina; la pagina principale è #/home.
- **Crea allenamento guidato**: tre scelte (durata, ritmo, "Pensaci tu" o "La scelgo io") e la lezione appare come
  una scaletta per fasi con i minuti (es. Tecnica 10′–37′), il voto in alto, PDF e "Nuova proposta".
  Con "La scelgo io" (o sotto ogni lezione) c'è **➕ Aggiungi esercizi**: un menu a tendina con tutte le categorie
  e gli attrezzi, la ricerca per nome e i **💡 Suggeriti**, cioè gli esercizi che alzano di più il voto e stanno nel
  tempo che resta. Si aggiungono con "+" senza uscire dalla pagina.
  Se hai scelto tu alcuni esercizi, **✨ Completa la lezione** aggiunge quelli che mancano (tenendo i tuoi e
  rimettendoli in ordine logico) per arrivare a 100, o al voto più alto possibile.
- Colori della bandiera thailandese, pensata prima per il telefono (anche tema scuro).

<img src="docs/anteprima-allenamento.png" alt="Pagina Crea allenamento" width="300">

## Avvio in locale

La cartella `node_modules` non è nel repository: dopo ogni `git pull` che cambia le dipendenze esegui `npm install`.

Serve Node.js 20 o più recente (https://nodejs.org).

```bash
npm install
npm run dev
```

Apri l'indirizzo che compare (di solito http://localhost:5173).
Per provarla dal telefono sulla stessa rete Wi‑Fi: `npm run dev -- --host` e apri l'indirizzo "Network".

## Versione finale

```bash
npm run build     # crea la cartella dist/
npm run preview   # la prova in locale
```

`dist/` è un sito statico: si può pubblicare gratis (es. Netlify, Vercel, GitHub Pages).

## Struttura

- `src/App.tsx` – stato dell'app e scelta della pagina (indirizzi `#/`, `#/categoria/...`, `#/allenamento`, `#/impostazioni`)
- `src/pages/` – le pagine (anche `#/attrezzi` e `#/attrezzo/...`); `src/components/` – menu, impostazioni, riepilogo tempi, scheda esercizio
- `src/lib/plan.ts` – esercizi che stanno nel tempo e lezione automatica
- `src/data/exercises.ts` – catalogo esercizi (generato dal catalogo del progetto, non modificarlo a mano)
- `src/lib/random.ts` – estrazione casuale senza ripetizioni
- `src/lib/lesson.ts` – impostazioni lezione, adattamento delle riprese e stima dei tempi
- `src/lib/doses.ts` – dosaggi personalizzati
- `src/lib/storage.ts` – salvataggio in localStorage
- `src/index.css` – stile e colori (rosso `#A51931`, bianco, blu `#2D2A4A`)
