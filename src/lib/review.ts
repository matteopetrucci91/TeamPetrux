// Controllo qualità dell'allenamento: regole da allenatore, calcolate nell'app (gratis, anche offline).
import type { CategoryId, Exercise } from "../data/exercises";
import { doseFor, toolById } from "./catalog";
import type { LessonSettings } from "./lesson";
import { availableMinutes, generateLesson } from "./plan";

export type Level = "ok" | "warn" | "bad";
export interface ReviewItem {
  level: Level;
  text: string;
}
export interface Review {
  score: number;
  verdict: string;
  items: ReviewItem[];
}

type Phase = "tecnica" | "clinch" | "velocita" | "condizionamento" | "forza" | "core" | "mobilita";

const PHASE: Record<CategoryId, Phase> = {
  tecnica: "tecnica",
  clinch: "clinch",
  velocita: "velocita",
  agilita: "velocita",
  resistenza: "condizionamento",
  "forza-esplosiva": "forza",
  "forza-massimale": "forza",
  "forza-resistente": "forza",
  core: "core",
  mobilita: "mobilita",
};

/** Lavori che richiedono freschezza e lavori che stancano. */
const FRESH: Phase[] = ["tecnica", "velocita"];
const TIRING: Phase[] = ["condizionamento", "forza"];

// attrezzi che in palestra ci sono per ogni coppia: ripeterli non crea attese
const SHARED_TOOLS = new Set(["corpo-libero", "compagno", "pao", "sacco"]);

export function reviewWorkout(list: readonly Exercise[], settings: LessonSettings): Review | null {
  if (list.length === 0) return null;
  const items: ReviewItem[] = [];
  let score = 100;
  const add = (level: Level, text: string, penalty = 0) => {
    items.push({ level, text });
    score -= penalty;
  };

  const mins = list.map((e) => doseFor(e, settings.round).minutes);
  const phases = list.map((e) => PHASE[e.category]);
  const total = mins.reduce((a, b) => a + b, 0);
  const budget = availableMinutes(settings);
  const minutesOf = (...p: Phase[]) => phases.reduce((s, ph, i) => (p.includes(ph) ? s + mins[i] : s), 0);
  const has = (p: Phase) => phases.includes(p);

  // 1. Tempo
  if (total > budget) {
    const over = total - budget;
    add("bad", `Supera il tempo di circa ${over} min: togli un esercizio o riduci serie e riprese.`, Math.min(25, over * 3));
  } else if (budget - total > 8) {
    const free = budget - total;
    add("warn", `Restano circa ${free} min liberi: aggiungi un esercizio di tecnica o di condizionamento.`, Math.min(15, Math.round((free - 5) * 1.5)));
  } else {
    add("ok", `Il tempo è giusto: ~${total} min di esercizi su ${budget} disponibili dopo il riscaldamento.`);
  }

  // 2. Peso della tecnica (il cuore della lezione di Muay Thai)
  const techShare = total ? minutesOf("tecnica", "clinch") / total : 0;
  const pct = Math.round(techShare * 100);
  if (!has("tecnica")) add("bad", "Manca la tecnica: in una lezione di Muay Thai dovrebbe essere la parte principale.", 20);
  else if (techShare < 0.2) add("bad", `La tecnica (con il clinch) è solo il ${pct}% del tempo: portala almeno al 35%.`, 15);
  else if (techShare < 0.35) add("warn", `La tecnica (con il clinch) è il ${pct}% del tempo: meglio almeno il 35%.`, 7);
  else add("ok", `Buon peso della tecnica: ${pct}% del tempo tra tecnica e clinch.`);

  // 3. Componenti fisiche
  if (!has("condizionamento") && !has("velocita"))
    add("warn", "Nessun lavoro di condizionamento o velocità: aggiungine uno per il fiato e il ritmo.", 8);
  else add("ok", "C'è lavoro di condizionamento o velocità.");
  if (!has("core") && !has("forza")) add("warn", "Nessun esercizio di forza o core: aggiungine uno breve verso la fine.", 5);
  else add("ok", "C'è lavoro di forza o core.");

  // 4. Ordine logico: prima ciò che richiede freschezza, poi ciò che stanca
  const firstTiring = phases.findIndex((p) => TIRING.includes(p));
  const lateFresh = firstTiring >= 0 ? list.filter((_, i) => i > firstTiring && FRESH.includes(phases[i])) : [];
  if (lateFresh.length > 0)
    add(
      "warn",
      `${lateFresh.map((e) => e.name).join(", ")} ${lateFresh.length > 1 ? "vengono" : "viene"} dopo esercizi stancanti: sposta tecnica e velocità all'inizio, quando gli atleti sono freschi.`,
      Math.min(12, 5 * lateFresh.length),
    );
  else add("ok", "Ordine logico: tecnica e velocità prima, lavori stancanti dopo.");

  // 5. Defaticamento
  if (!has("mobilita")) add("warn", "Manca il defaticamento: chiudi con un esercizio di mobilità o stretching.", 5);
  else if (phases.at(-1) !== "mobilita") add("warn", "La mobilità è meglio come ultimo esercizio, per defaticare.", 4);
  else add("ok", "Chiude con mobilità per defaticare.");

  // 6. Varietà
  let run = 1;
  let longest = 1;
  for (let i = 1; i < list.length; i++) {
    run = list[i].category === list[i - 1].category ? run + 1 : 1;
    longest = Math.max(longest, run);
  }
  const toolCount = new Map<string, number>();
  list.forEach((e) => e.tool && !SHARED_TOOLS.has(e.tool) && toolCount.set(e.tool, (toolCount.get(e.tool) ?? 0) + 1));
  const crowded = [...toolCount.entries()].filter(([, n]) => n > 3);
  if (longest >= 4) add("warn", `Ci sono ${longest} esercizi di fila della stessa categoria: alterna un po' di più.`, 5);
  if (crowded.length) add(
      "warn",
      `Troppi esercizi con ${crowded.map(([t, n]) => `${toolById.get(t as never)?.label.toLowerCase() ?? t} (${n})`).join(", ")}: in palestra può creare file d'attesa.`,
      4,
    );
  if (longest < 4 && !crowded.length) add("ok", "Buona varietà di esercizi e attrezzi.");

  // 7. Numero di esercizi
  if (list.length < 4) add("warn", `Solo ${list.length} esercizi: la lezione rischia di essere monotona.`, 8);
  const long = list.filter((_, i) => mins[i] > 25);
  if (long.length) add("warn", `${long.map((e) => e.name).join(", ")} dura più di 25 min: valuta di accorciarlo.`, 4);

  score = Math.max(0, Math.min(100, Math.round(score)));
  const verdict = score >= 85 ? "Ottimo" : score >= 70 ? "Buono" : score >= 50 ? "Da migliorare" : "Debole";
  // prima i problemi, poi i punti forti
  const order: Record<Level, number> = { bad: 0, warn: 1, ok: 2 };
  items.sort((a, b) => order[a.level] - order[b.level]);
  return { score, verdict, items };
}

/**
 * Lezione automatica con il voto più alto: ne genera fino a 40 e si ferma alla prima da 100
 * (con i dosaggi personalizzati una singola estrazione potrebbe non bastare).
 */
export function bestLesson(settings: LessonSettings): Exercise[] {
  let best: Exercise[] = [];
  let bestScore = -1;
  for (let i = 0; i < 40 && bestScore < 100; i++) {
    const list = generateLesson(settings);
    const score = reviewWorkout(list, settings)?.score ?? 0;
    if (score > bestScore) [best, bestScore] = [list, score];
  }
  return best;
}
