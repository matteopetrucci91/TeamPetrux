// Scelta degli esercizi entro un tempo: liste per categoria e lezione automatica.
import type { CategoryId, Exercise } from "../data/exercises";
import { byCategory, doseFor } from "./catalog";
import type { LessonSettings, RoundMinutes } from "./lesson";
import { shuffle } from "./random";

/** I primi 10 minuti di ogni lezione sono di riscaldamento. */
export const WARMUP_MIN = 10;

/** Minuti disponibili per gli esercizi, tolto il riscaldamento. */
export const availableMinutes = (s: LessonSettings) => s.lesson - WARMUP_MIN;

const minutes = (e: Exercise, round: RoundMinutes) => doseFor(e, round).minutes;

/**
 * Sceglie a caso fino a `max` esercizi la cui somma dei tempi sta in `budget`.
 * Preferisce quelli non in `exclude`; se non bastano, riusa anche quelli.
 */
export function fitDraw(
  pool: readonly Exercise[],
  budget: number,
  round: RoundMinutes,
  max: number,
  exclude: ReadonlySet<string> = new Set(),
): Exercise[] {
  const fresh = shuffle(pool.filter((e) => !exclude.has(e.id)));
  const old = shuffle(pool.filter((e) => exclude.has(e.id)));
  const picked: Exercise[] = [];
  let used = 0;
  for (const e of [...fresh, ...old]) {
    if (picked.length >= max) break;
    const m = minutes(e, round);
    if (used + m <= budget) {
      picked.push(e);
      used += m;
    }
  }
  // se nessuno ci sta, almeno il più breve
  if (picked.length === 0 && pool.length > 0) {
    picked.push([...pool].sort((a, b) => minutes(a, round) - minutes(b, round))[0]);
  }
  return picked;
}

/** Blocchi della lezione automatica, nell'ordine in cui si svolgono. */
const BLOCKS: { label: string; from: CategoryId[]; share: number }[] = [
  { label: "Tecnica", from: ["tecnica"], share: 0.35 },
  { label: "Velocità e footwork", from: ["velocita", "agilita"], share: 0.1 },
  { label: "Clinch", from: ["clinch"], share: 0.15 },
  { label: "Condizionamento", from: ["resistenza"], share: 0.15 },
  { label: "Forza", from: ["forza-esplosiva", "forza-resistente"], share: 0.1 },
  { label: "Core", from: ["core"], share: 0.08 },
  { label: "Defaticamento", from: ["mobilita"], share: 0.07 },
];

/** Blocco della lezione in cui cade una categoria (la forza massimale va con la forza). */
const blockOf = (c: CategoryId) => {
  const i = BLOCKS.findIndex((b) => b.from.includes(c));
  return i >= 0 ? i : BLOCKS.findIndex((b) => b.label === "Forza");
};

/**
 * Crea una lezione in ordine logico: dopo il riscaldamento tecnica, velocità,
 * clinch, condizionamento, forza, core e infine mobilità per defaticare.
 * Ogni blocco ha una quota del tempo; quello che avanza passa al blocco dopo.
 * Gli esercizi in `fixed` (scelti a mano) restano tutti: vanno nel loro blocco
 * e si aggiunge solo ciò che manca.
 */
export function generateLesson(settings: LessonSettings, fixed: readonly Exercise[] = []): Exercise[] {
  const { round } = settings;
  const total = availableMinutes(settings);
  const taken = new Set<string>(fixed.map((e) => e.id));
  const cats = BLOCKS.map((b) => b.from[Math.floor(Math.random() * b.from.length)]);
  const blocks: Exercise[][] = BLOCKS.map(() => []);
  fixed.forEach((e) => blocks[blockOf(e.category)].push(e));
  // se nel blocco c'è già una categoria scelta a mano, si resta su quella
  blocks.forEach((b, i) => b.length && (cats[i] = b[0].category));
  let used = totalMinutes(fixed, round);
  let carry = 0;

  const fill = (i: number, budget: number, max: number) => {
    const pool = (byCategory.get(cats[i]) ?? []).filter((e) => !taken.has(e.id));
    const room = Math.min(budget, total - used);
    if (room <= 0 || max <= 0) return 0;
    const picked = fitDraw(pool, room, round, max).filter((e) => minutes(e, round) <= room);
    const m = totalMinutes(picked, round);
    if (!picked.length || used + m > total) return 0;
    picked.forEach((e) => taken.add(e.id));
    blocks[i].push(...picked);
    used += m;
    return m;
  };

  // primo giro: ogni blocco la sua quota (meno quello che c'è già), l'avanzo passa al successivo;
  // il defaticamento si riserva per primo, così c'è sempre posto per chiudere la lezione
  const last = BLOCKS.length - 1;
  const quota = (i: number) => Math.round(BLOCKS[i].share * total) - totalMinutes(blocks[i], round);
  if (quota(last) > 0) fill(last, quota(last), 1);
  BLOCKS.forEach((_, i) => {
    if (i === last) return;
    const budget = quota(i) + carry;
    carry = budget > 0 ? budget - fill(i, budget, Infinity) : 0;
  });
  // secondo giro: il tempo rimasto va a tecnica, condizionamento, clinch e velocità
  for (const i of [0, 3, 2, 1]) {
    if (total - used < 2) break;
    fill(i, total - used, Infinity);
  }
  return blocks.flat();
}

export const totalMinutes = (list: readonly Exercise[], round: RoundMinutes) =>
  list.reduce((s, e) => s + minutes(e, round), 0);
