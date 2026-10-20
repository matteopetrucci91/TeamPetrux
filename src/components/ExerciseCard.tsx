import { useState, type ReactNode } from "react";
import type { Exercise } from "../data/exercises";
import { categoryById, doseFor, toolById } from "../lib/catalog";
import {
  AMOUNTS,
  composeDose,
  KINDS,
  parseDose,
  SETS,
  SIDES,
  type DoseKind,
  type DoseParts,
} from "../lib/doseBuilder";
import { useDoses } from "../lib/doses";
import { estimateMinutes, type RoundMinutes } from "../lib/lesson";
import { hrefFor } from "../lib/route";
import { ExerciseHowTo } from "./ExerciseHowTo";

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(ev) => onChange(ev.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

const opts = (list: string[], empty = "—") =>
  list.map((v) => ({ value: v, label: v || empty }));

/** Dosaggio con modifica tramite menu a tendina (serie, quantità, lati); il recupero è sempre 1 min. */
function DoseEditor({ e, round }: { e: Exercise; round: RoundMinutes }) {
  const { setDose } = useDoses();
  const { dose, minutes, custom } = doseFor(e, round);
  const [parts, setParts] = useState<DoseParts | null>(null);

  if (parts) {
    const update = (patch: Partial<DoseParts>) => setParts({ ...parts, ...patch });
    const preview = composeDose(parts);
    return (
      <div className="dose-edit">
        <div className="dose-fields">
          <Select
            label="Tipo"
            value={parts.kind}
            options={KINDS}
            onChange={(v) => {
              const kind = v as DoseKind;
              update({ kind, amount: AMOUNTS[kind].includes(parts.amount) ? parts.amount : AMOUNTS[kind][kind === "riprese" ? 2 : 9] ?? AMOUNTS[kind][0] });
            }}
          />
          <Select
            label={parts.kind === "riprese" ? "Riprese" : "Serie"}
            value={String(parts.sets)}
            options={opts(SETS)}
            onChange={(v) => update({ sets: Number(v) })}
          />
          <Select
            label={parts.kind === "ripetizioni" ? "Ripetizioni" : parts.kind === "riprese" ? "Durata" : parts.kind === "tempo" ? "Tempo" : "Metri"}
            value={parts.amount}
            options={opts(AMOUNTS[parts.kind])}
            onChange={(v) => update({ amount: v })}
          />
          <Select label="Lati" value={parts.side} options={opts(SIDES, "nessuno")} onChange={(v) => update({ side: v })} />
        </div>
        <p className="dose-preview">
          <span className="dose">{preview}</span>
          <span className="minutes">≈ {estimateMinutes(preview)} min</span>
        </p>
        <div className="dose-edit-actions">
          <button
            className="pill added"
            onClick={() => {
              setDose(e.id, preview);
              setParts(null);
            }}
          >
            Salva
          </button>
          <button className="pill" onClick={() => setParts(null)}>
            Annulla
          </button>
          {custom && (
            <button
              className="pill remove"
              onClick={() => {
                setDose(e.id, null);
                setParts(null);
              }}
            >
              Torna a 1 ripresa
            </button>
          )}
        </div>
      </div>
    );
  }
  return (
    <p className="dose-row">
      <span className="dose">{dose}</span>
      <span className="minutes">
        ≈ {minutes} min{custom && " · tuo dosaggio"}
      </span>
      <button className="edit" onClick={() => setParts(parseDose(dose))} aria-label="Modifica dosaggio">
        ✎ Modifica
      </button>
      {!custom && <small className="dose-hint">Nel catalogo: {e.dose}</small>}
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
        {collapsed || e.steps?.length ? (
          <details>
            <summary>Come si esegue</summary>
            <ExerciseHowTo e={e} />
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
