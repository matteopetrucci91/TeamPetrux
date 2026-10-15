import { useState, type ReactNode } from "react";
import type { Exercise } from "../data/exercises";
import { categoryById, doseFor, toolById } from "../lib/catalog";
import { useDoses } from "../lib/doses";
import type { RoundMinutes } from "../lib/lesson";
import { hrefFor } from "../lib/route";

/** Dosaggio con modifica: l'allenatore può scrivere le sue ripetizioni, serie o tempi. */
function DoseEditor({ e, round }: { e: Exercise; round: RoundMinutes }) {
  const { setDose } = useDoses();
  const { dose, minutes, custom } = doseFor(e, round);
  const [draft, setDraft] = useState<string | null>(null);

  if (draft !== null) {
    const save = () => {
      setDose(e.id, draft);
      setDraft(null);
    };
    return (
      <form
        className="dose-edit"
        onSubmit={(ev) => {
          ev.preventDefault();
          save();
        }}
      >
        <input
          autoFocus
          value={draft}
          onChange={(ev) => setDraft(ev.target.value)}
          placeholder="es. 4 × 12 ripetizioni, recupero 60 s"
          aria-label={`Dosaggio per ${e.name}`}
        />
        <div className="dose-edit-actions">
          <button type="submit" className="pill added">
            Salva
          </button>
          <button type="button" className="pill" onClick={() => setDraft(null)}>
            Annulla
          </button>
          {custom && (
            <button
              type="button"
              className="pill remove"
              onClick={() => {
                setDose(e.id, null);
                setDraft(null);
              }}
            >
              Ripristina originale
            </button>
          )}
        </div>
      </form>
    );
  }
  return (
    <p className="dose-row">
      <span className="dose">{dose}</span>
      <span className="minutes">
        ≈ {minutes} min{custom && " · tuo dosaggio"}
      </span>
      <button className="edit" onClick={() => setDraft(dose)} aria-label="Modifica ripetizioni">
        ✎ Modifica
      </button>
    </p>
  );
}

export function ExerciseCard({
  exercise: e,
  index,
  round,
  showCategory = false,
  collapsed = false,
  actions,
  hideToolLink = false,
}: {
  exercise: Exercise;
  index: number;
  round: RoundMinutes;
  showCategory?: boolean;
  /** Descrizione estesa nascosta dietro "Come si esegue". */
  collapsed?: boolean;
  actions?: ReactNode;
  /** Nella pagina dell'attrezzo il collegamento all'attrezzo stesso non serve. */
  hideToolLink?: boolean;
}) {
  return (
    <li className="exercise">
      <span className="num">{index}</span>
      <div>
        {showCategory && <span className="eyebrow cat">{categoryById.get(e.category)?.label}</span>}
        <h3>{e.name}</h3>
        <DoseEditor e={e} round={round} />
        <p className="summary">{e.description}</p>
        {collapsed ? (
          <details>
            <summary>Come si esegue</summary>
            <p className="details">{e.details}</p>
          </details>
        ) : (
          <p className="details">{e.details}</p>
        )}
        {e.tool && !hideToolLink ? (
          <a className="chip link" href={hrefFor({ page: "attrezzo", id: e.tool })}>
            {toolById.get(e.tool)?.label}: vedi tutti gli esercizi ›
          </a>
        ) : (
          e.equipment && <span className="chip">{e.equipment}</span>
        )}
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </li>
  );
}
