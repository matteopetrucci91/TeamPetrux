import { useMemo } from "react";
import type { Exercise } from "../data/exercises";
import { frameSvg } from "../lib/figure";

/** Figure dell'esecuzione, una per fase, numerate. */
export function ExerciseFigure({ e }: { e: Exercise }) {
  const svgs = useMemo(() => (e.figure ?? []).map(frameSvg), [e.figure]);
  if (!e.figure?.length) return null;
  return (
    <div className="figure-strip">
      {e.figure.map((fr, i) => (
        <figure key={i} className="figure-frame">
          <div className="figure-img" dangerouslySetInnerHTML={{ __html: svgs[i] }} />
          <figcaption>
            {e.figure!.length > 1 && <b>{i + 1}</b>} {fr.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Spiegazione completa: figure, partenza, passaggi, errori e a cosa serve. */
export function ExerciseHowTo({ e }: { e: Exercise }) {
  if (!e.steps?.length) return <p className="details">{e.details}</p>;
  return (
    <div className="howto">
      <ExerciseFigure e={e} />
      {e.setup && (
        <>
          <h4>Posizione di partenza</h4>
          <p>{e.setup}</p>
        </>
      )}
      <h4>Esecuzione</h4>
      <ol className="steps">
        {e.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      {e.errors?.length ? (
        <>
          <h4>Errori da evitare</h4>
          <ul className="errors">
            {e.errors.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      ) : null}
      {e.why && (
        <>
          <h4>A cosa serve</h4>
          <p>{e.why}</p>
        </>
      )}
    </div>
  );
}
