// Impostazioni della lezione e stima dei tempi a partire dal dosaggio testuale.

export type LessonMinutes = 60 | 90;
export type RoundMinutes = 2 | 3;

export interface LessonSettings {
  lesson: LessonMinutes;
  round: RoundMinutes;
}

export const DEFAULT_SETTINGS: LessonSettings = { lesson: 60, round: 3 };

/** Recupero tra le serie e tra un esercizio e l'altro: sempre 1 min. */
const REST_MIN = 1;

const num = (s: string) => parseFloat(s.replace(",", "."));

/** Prende un numero o un intervallo ("3–4") e restituisce il valore medio. */
function amount(s: string): number {
  const [a, b] = s.split(/[–-]/).map(num);
  return b ? (a + b) / 2 : a;
}

const N = String.raw`(\d+(?:[.,]\d+)?(?:\s*[–-]\s*\d+(?:[.,]\d+)?)?)`;

/**
 * Stima in minuti del tempo che un esercizio occupa nella lezione.
 * È un'approssimazione: interpreta i formati più comuni del dosaggio
 * (riprese, serie a tempo, serie a ripetizioni, distanze).
 */
export function estimateMinutes(text: string): number {
  // il catalogo usa a volte spazi non separabili: si normalizzano
  const dose = text.replace(/\s+/g, " ");
  const sides = /per (lato|gamba|braccio|piede)|per atleta|per ruolo/.test(dose) ? 2 : 1;
  let work: number;
  let sets: number;

  const rounds = dose.match(new RegExp(`${N} ripres[ae] da ${N} (min|s)(?: (\\d+) s)?`));
  const timed = dose.match(new RegExp(`${N} × ${N} (min|s)\\b`));
  const reps = dose.match(new RegExp(`${N} × ${N}`));
  const plainMin = dose.match(new RegExp(`^${N} min`));

  if (rounds) {
    sets = amount(rounds[1]);
    work = amount(rounds[2]) / (rounds[3] === "s" ? 60 : 1) + (rounds[4] ? num(rounds[4]) / 60 : 0);
  } else if (timed) {
    sets = amount(timed[1]);
    work = amount(timed[2]) / (timed[3] === "s" ? 60 : 1);
  } else if (reps) {
    sets = amount(reps[1]);
    const r = amount(reps[2]);
    // distanze in metri: circa 2 m al secondo; ripetizioni: circa 3 s l'una
    work = / m\b/.test(dose) ? r / 2 / 60 : (r * 3) / 60;
  } else if (plainMin) {
    return Math.round(amount(plainMin[1]) + REST_MIN);
  } else {
    return 5;
  }

  const total = sets * work * sides + Math.max(0, sets * sides - 1) * REST_MIN;
  return Math.max(2, Math.round(total + REST_MIN));
}
