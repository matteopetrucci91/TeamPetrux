// Dosaggio composto con menu a tendina: niente errori di battitura.

export type DoseKind = "ripetizioni" | "tempo" | "riprese" | "distanza";

export interface DoseParts {
  kind: DoseKind;
  sets: number;
  amount: string;
  side: string;
}

export const KINDS: { value: DoseKind; label: string }[] = [
  { value: "ripetizioni", label: "Ripetizioni" },
  { value: "tempo", label: "Tempo" },
  { value: "riprese", label: "Riprese" },
  { value: "distanza", label: "Distanza" },
];

const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => String(a + i));

export const SETS = range(1, 12);

export const AMOUNTS: Record<DoseKind, string[]> = {
  ripetizioni: [...range(1, 30), "35", "40", "50", "60", "80", "100"],
  tempo: ["10 s", "15 s", "20 s", "30 s", "40 s", "45 s", "1 min", "90 s", "2 min", "3 min", "4 min", "5 min", "10 min", "15 min", "20 min", "30 min"],
  riprese: ["1 min", "2 min", "3 min", "4 min", "5 min"],
  distanza: ["10 m", "15 m", "20 m", "25 m", "30 m", "40 m", "50 m", "100 m", "200 m", "400 m"],
};

export const SIDES = ["", "per lato", "per gamba", "per braccio"];

/** Recupero fisso tra le serie e tra un esercizio e l'altro. */
export const REST = "recupero 1 min";

/** Dosaggio di default: una ripresa della durata scelta per la lezione. */
export const defaultDose = (round: number) => `1 ripresa da ${round} min, ${REST}`;

/** Sostituisce qualsiasi recupero scritto nel dosaggio con quello fisso di 1 min. */
export const withRest = (dose: string) =>
  `${dose
    .replace(/\s+/g, " ")
    .replace(/,?\s*(?:recupero (?:di )?[\d.,–-]+ ?(?:min|s)|[\d.,–-]+ ?(?:min|s) (?:di )?recupero)/g, "")
    .trim()}, ${REST}`;

export function composeDose(p: DoseParts): string {
  const side = p.side ? ` ${p.side}` : "";
  const rest = `, ${REST}`;
  switch (p.kind) {
    case "riprese":
      return `${p.sets} ${p.sets === 1 ? "ripresa" : "riprese"} da ${p.amount}${side}${rest}`;
    case "ripetizioni":
      return `${p.sets} × ${p.amount} ripetizioni${side}${rest}`;
    default:
      return `${p.sets} × ${p.amount}${side}${rest}`;
  }
}

const nearest = (list: string[], value: string) => (list.includes(value) ? value : list[0]);

/** Ricava i valori iniziali dei menu dal dosaggio attuale (se il formato è riconoscibile). */
export function parseDose(dose: string): DoseParts {
  const d = dose.replace(/\s+/g, " ");
  const side = SIDES.find((s) => s && d.includes(s)) ?? "";
  const first = d.match(/^(\d+)/);
  const sets = first ? Math.min(12, Math.max(1, parseInt(first[1], 10))) : 3;

  const rounds = d.match(/ripres[ae] da (\d+ min)/);
  if (rounds) return { kind: "riprese", sets, amount: nearest(AMOUNTS.riprese, rounds[1]), side };
  const dist = d.match(/× (\d+ m)\b/);
  if (dist) return { kind: "distanza", sets, amount: nearest(AMOUNTS.distanza, dist[1]), side };
  const time = d.match(/× (\d+ (?:s|min))\b/);
  if (time) return { kind: "tempo", sets, amount: nearest(AMOUNTS.tempo, time[1]), side };
  const reps = d.match(/× (\d+)/);
  return {
    kind: "ripetizioni",
    sets,
    amount: reps ? nearest(AMOUNTS.ripetizioni, reps[1]) : "10",
    side,
  };
}
