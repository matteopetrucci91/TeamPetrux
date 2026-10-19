import { useMemo, useState } from "react";
import { categories, tools, type Exercise } from "../data/exercises";
import { byId, doseFor, poolFor } from "../lib/catalog";
import { CATEGORY_ICON, TOOL_ICON } from "../lib/icons";
import type { LessonSettings } from "../lib/lesson";
import { insertInOrder } from "../lib/phases";
import { totalMinutes, WARMUP_MIN } from "../lib/plan";
import { reviewWorkout } from "../lib/review";

const SUGGESTED = "suggeriti";
const ALL = [...byId.values()];
const label = new Map(categories.map((c) => [c.id, c.label]));

interface Suggestion {
  e: Exercise;
  score: number;
}

/**
 * Esercizi che fanno salire di più il voto: per ognuno si prova ad aggiungerlo
 * alla lezione, al suo posto, e si tiene il migliore di ogni categoria.
 */
function suggest(list: readonly Exercise[], settings: LessonSettings, n = 5): Suggestion[] {
  const inList = new Set(list.map((e) => e.id));
  const free = settings.lesson - WARMUP_MIN - totalMinutes(list, settings.round);
  // durata ideale di un esercizio: il tempo libero diviso per quelli che mancano, circa
  const target = Math.min(15, Math.max(6, free / 3));
  const off = (x: Exercise) => Math.abs(doseFor(x, settings.round).minutes - target);
  const best = new Map<string, Suggestion>();
  for (const e of ALL) {
    if (inList.has(e.id) || doseFor(e, settings.round).minutes > free) continue;
    const score = reviewWorkout(insertInOrder(list, e), settings)?.score ?? 0;
    const prev = best.get(e.category);
    // a parità di voto vince chi ha la durata più adatta al tempo che resta
    if (!prev || score > prev.score || (score === prev.score && off(e) < off(prev.e))) {
      best.set(e.category, { e, score });
    }
  }
  return [...best.values()].sort((a, b) => b.score - a.score).slice(0, n);
}

/** Aggiunge esercizi alla lezione senza uscire dalla pagina: suggeriti, per categoria o per attrezzo. */
export function ExercisePicker({
  list,
  settings,
  onAdd,
  onRemove,
}: {
  list: readonly Exercise[];
  settings: LessonSettings;
  onAdd: (e: Exercise) => void;
  onRemove: (e: Exercise) => void;
}) {
  const [group, setGroup] = useState(SUGGESTED);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const inList = new Set(list.map((e) => e.id));
  const ids = list.map((e) => e.id).join();
  const current = reviewWorkout(list, settings)?.score ?? 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps -- dipende dagli id, non dall'array
  const suggestions = useMemo(() => suggest(list, settings), [ids, settings]);

  const q = query.trim().toLowerCase();
  const match = (e: Exercise) => !q || `${e.name} ${e.description} ${e.equipment ?? ""}`.toLowerCase().includes(q);
  const shown: { e: Exercise; gain?: number }[] =
    group === SUGGESTED
      ? q
        ? ALL.filter(match).map((e) => ({ e }))
        : suggestions.map((s) => ({ e: s.e, gain: s.score - current }))
      : poolFor(group).filter(match).map((e) => ({ e }));

  return (
    <section className="picker" id="aggiungi">
      <h2>➕ Aggiungi esercizi</h2>
      <div className="picker-filters">
        <select value={group} onChange={(ev) => setGroup(ev.target.value)} aria-label="Categoria o attrezzo">
          <option value={SUGGESTED}>💡 Suggeriti per te</option>
          <optgroup label="Categorie">
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {CATEGORY_ICON[c.id]} {c.label} ({poolFor(c.id).length})
              </option>
            ))}
          </optgroup>
          <optgroup label="Attrezzi">
            {tools.map((t) => (
              <option key={t.id} value={`attrezzo:${t.id}`}>
                {TOOL_ICON[t.id]} {t.label} ({poolFor(`attrezzo:${t.id}`).length})
              </option>
            ))}
          </optgroup>
        </select>
        <input
          className="search"
          type="search"
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
          placeholder="🔍 Cerca per nome"
          aria-label="Cerca esercizi"
        />
      </div>
      {group === SUGGESTED && !q && (
        <p className="picker-note">
          {suggestions.length === 0
            ? "La lezione è piena: non c'è tempo per altri esercizi."
            : list.length === 0
              ? "Da dove partire: il migliore di ogni qualità, in ordine di voto."
              : "Quelli che fanno salire di più il voto e stanno nel tempo che resta."}
        </p>
      )}
      {q && <p className="picker-note">{shown.length} risultati</p>}
      <ul className="pick-list">
        {shown.map(({ e, gain }) => {
          const added = inList.has(e.id);
          return (
            <li key={e.id} className={`pick${added ? " added" : ""}`}>
              <button className="pick-main" onClick={() => setOpen(open === e.id ? null : e.id)} aria-expanded={open === e.id}>
                <span className="pick-icon" aria-hidden="true">{CATEGORY_ICON[e.category]}</span>
                <span className="pick-text">
                  <strong>{e.name}</strong>
                  <small>
                    {label.get(e.category)} · ~{doseFor(e, settings.round).minutes} min
                    {gain !== undefined && gain > 0 && <b className="gain"> · voto +{gain}</b>}
                  </small>
                  {open === e.id && (
                    <span className="pick-detail">
                      {e.description} <em>{doseFor(e, settings.round).dose}</em>
                    </span>
                  )}
                </span>
              </button>
              <button
                className={`pick-add${added ? " on" : ""}`}
                onClick={() => (added ? onRemove(e) : onAdd(e))}
                aria-label={added ? `Togli ${e.name}` : `Aggiungi ${e.name}`}
              >
                {added ? "✓" : "+"}
              </button>
            </li>
          );
        })}
      </ul>
      {shown.length === 0 && q && <p className="empty">Nessun esercizio trovato.</p>}
    </section>
  );
}
