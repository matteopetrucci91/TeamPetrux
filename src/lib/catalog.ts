import { categories, exercises, type CategoryId, type Exercise } from "../data/exercises";
import { adaptDose, estimateMinutes, type RoundMinutes } from "./lesson";

export const byId = new Map(exercises.map((e) => [e.id, e]));
export const byCategory = new Map<CategoryId, Exercise[]>(
  categories.map((c) => [c.id, exercises.filter((e) => e.category === c.id)]),
);
export const categoryById = new Map(categories.map((c) => [c.id, c]));

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
