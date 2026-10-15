# TeamPetrux
App Muay Thai per strutturare gli allenamenti: scegli una categoria e ottieni esercizi specifici di Muay Thai a caso.

<img src="docs/anteprima-categoria.png" alt="Lista esercizi di una categoria" width="300">

## Cosa fa

- Home con le categorie (Forza esplosiva / massimale / resistente raggruppate sotto "Forza").
- Tocchi una categoria e vedi **10 esercizi a caso** (523 esercizi in 10 categorie, almeno 50 ciascuna).
- Ogni esercizio ha il **dosaggio** (ripetizioni, serie, tempo o riprese) e una **descrizione estesa** su come eseguirlo e a cosa serve.
- **+ Altri 10** aggiunge 10 esercizi non ancora mostrati, fino a esaurire la categoria.
- **↻ Ricarica** sostituisce la lista con 10 esercizi diversi da quelli a schermo.
- Le liste restano salvate nel browser (localStorage): nessun database, nessun costo.
  Ogni browser/dispositivo ha le sue liste.
- Colori della bandiera thailandese, pensata prima per il telefono (anche tema scuro).

## Avvio in locale

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

- `src/App.tsx` – schermate (categorie e lista esercizi)
- `src/data/exercises.ts` – catalogo esercizi (generato dal catalogo del progetto, non modificarlo a mano)
- `src/lib/random.ts` – estrazione casuale senza ripetizioni
- `src/lib/storage.ts` – salvataggio in localStorage
- `src/index.css` – stile e colori (rosso `#A51931`, bianco, blu `#2D2A4A`)
