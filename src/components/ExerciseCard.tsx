import type { ReactNode } from "react";
import type { Exercise } from "../data/exercises";
import { categoryById, doseFor, toolById } from "../lib/catalog";
import type { RoundMinutes } from "../lib/lesson";
import { hrefFor } from "../lib/route";

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
  const { dose, minutes } = doseFor(e, round);
  return (
    <li className="exercise">
      <span className="num">{index}</span>
      <div>
        {showCategory && <span className="eyebrow cat">{categoryById.get(e.category)?.label}</span>}
        <h3>{e.name}</h3>
        <p className="dose-row">
          <span className="dose">{dose}</span>
          <span className="minutes">≈ {minutes} min</span>
        </p>
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
