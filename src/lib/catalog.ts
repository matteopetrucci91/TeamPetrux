import {
  categories,
  exercises,
  toolExercises,
  tools,
  type CategoryId,
  type Exercise,
  type ToolId,
} from "../data/exercises";
import { adaptDose, estimateMinutes, type RoundMinutes } from "./lesson";

export const byId = new Map([...exercises, ...toolExercises].map((e) => [e.id, e]));
export const byCategory = new Map<CategoryId, Exercise[]>(
  categories.map((c) => [c.id, exercises.filter((e) => e.category === c.id)]),
);
export const categoryById = new Map(categories.map((c) => [c.id, c]));

export const toolById = new Map(tools.map((t) => [t.id, t]));
/** Tutti gli esercizi di un attrezzo: quelli del catalogo che lo usano e quelli in più. */
export const byTool = new Map<ToolId, Exercise[]>(
  tools.map((t) => [t.id, [...exercises, ...toolExercises].filter((e) => e.tool === t.id)]),
);
export const isToolId = (v: unknown): v is ToolId => tools.some((t) => t.id === v);

export const isCategoryId = (v: unknown): v is CategoryId =>
  categories.some((c) => c.id === v);

/** Dosaggio adattato alla ripresa scelta e minuti stimati. */
export function doseFor(e: Exercise, round: RoundMinutes) {
  const dose = adaptDose(e.dose, round);
  return { dose, minutes: estimateMinutes(dose) };
}

/** Converte una lista di id in esercizi, scartando quelli non più presenti. */
export const toExercises = (ids: string[]): Exercise[] =>
  ids.map((id) => byId.get(id)).filter((e): e is Exercise => !!e);
