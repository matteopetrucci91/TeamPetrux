// Fasi della lezione: servono a mostrare l'allenamento come una scaletta.
import type { CategoryId, Exercise } from "../data/exercises";

export type Phase = "tecnica" | "clinch" | "velocita" | "condizionamento" | "forza" | "core" | "mobilita";

export const PHASE_OF: Record<CategoryId, Phase> = {
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

export const PHASE_INFO: Record<Phase, { label: string; icon: string }> = {
  tecnica: { label: "Tecnica", icon: "🦵" },
  clinch: { label: "Clinch", icon: "🤼" },
  velocita: { label: "Velocità e footwork", icon: "⚡" },
  condizionamento: { label: "Condizionamento", icon: "❤️" },
  forza: { label: "Forza", icon: "💪" },
  core: { label: "Core", icon: "🎯" },
  mobilita: { label: "Defaticamento", icon: "🧘" },
};

export const phaseOf = (e: Exercise) => PHASE_OF[e.category];

/** Raggruppa gli esercizi consecutivi della stessa fase, mantenendo l'ordine. */
export function groupByPhase<T extends { e: Exercise }>(items: T[]): { phase: Phase; items: T[] }[] {
  const groups: { phase: Phase; items: T[] }[] = [];
  for (const it of items) {
    const ph = phaseOf(it.e);
    const last = groups.at(-1);
    if (last && last.phase === ph) last.items.push(it);
    else groups.push({ phase: ph, items: [it] });
  }
  return groups;
}

/** Ordine logico delle fasi nella lezione. */
export const PHASE_ORDER: Phase[] = ["tecnica", "velocita", "clinch", "condizionamento", "forza", "core", "mobilita"];
const rank = (e: Exercise) => PHASE_ORDER.indexOf(phaseOf(e));

/** Inserisce un esercizio nella lezione al posto giusto: dopo gli ultimi della sua fase o di quelle prima. */
export function insertInOrder(list: readonly Exercise[], e: Exercise): Exercise[] {
  const r = rank(e);
  let at = list.length;
  for (let i = list.length - 1; i >= -1; i--) {
    if (i === -1 || rank(list[i]) <= r) {
      at = i + 1;
      break;
    }
  }
  return [...list.slice(0, at), e, ...list.slice(at)];
}
