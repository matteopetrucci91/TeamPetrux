/** Restituisce una copia mescolata dell'array (Fisher–Yates). */
export function shuffle<T>(items: readonly T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Sceglie fino a `n` elementi a caso da `pool`, escludendo gli id in `exclude`. */
export function pickRandom<T extends { id: string }>(
  pool: readonly T[],
  n: number,
  exclude: ReadonlySet<string> = new Set(),
): T[] {
  return shuffle(pool.filter((x) => !exclude.has(x.id))).slice(0, n);
}

/**
 * Nuova estrazione di `n` esercizi diversi da quelli mostrati ora.
 * Se la categoria non ne ha abbastanza, completa con quelli già visti.
 */
export function redraw<T extends { id: string }>(
  pool: readonly T[],
  n: number,
  current: ReadonlySet<string>,
): T[] {
  const fresh = pickRandom(pool, n, current);
  if (fresh.length >= n) return fresh;
  const freshIds = new Set(fresh.map((x) => x.id));
  return [...fresh, ...pickRandom(pool, n - fresh.length, freshIds)];
}
