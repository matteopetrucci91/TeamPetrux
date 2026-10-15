import { ExerciseCard } from "../components/ExerciseCard";
import { SettingsPanel, type SettingsProps } from "../components/Settings";
import { TimeSummary } from "../components/TimeSummary";
import { Topbar } from "../components/Topbar";
import { toExercises } from "../lib/catalog";
import { downloadWorkoutPdf } from "../lib/pdf";
import { totalMinutes, WARMUP_MIN } from "../lib/plan";
import { hrefFor } from "../lib/route";

export interface Workout {
  ids: string[];
  /** true se creato con "Crea lezione automatica" e non modificato a mano. */
  auto: boolean;
}

export function WorkoutPage({
  workout,
  onChange,
  onGenerate,
  settings,
  onSettings,
}: {
  workout: Workout;
  onChange: (ids: string[]) => void;
  onGenerate: () => void;
} & SettingsProps) {
  const list = toExercises(workout.ids);
  const move = (i: number, d: -1 | 1) => {
    const ids = [...workout.ids];
    [ids[i], ids[i + d]] = [ids[i + d], ids[i]];
    onChange(ids);
  };

  return (
    <div className="page">
      <Topbar
        route="allenamento"
        workoutCount={list.length}
        title="Crea allenamento"
        subtitle="Scegli tu gli esercizi dalle categorie o crea una lezione automatica."
        sticky
      />
      <main>
        <SettingsPanel settings={settings} onSettings={onSettings} compact />
        <TimeSummary
          settings={settings}
          exerciseMinutes={totalMinutes(list, settings.round)}
          extra={`${list.length} esercizi${workout.auto && list.length ? " · automatica" : ""}`}
        />
        <ol className="exercises">
          <li className="exercise warmup-card">
            <span className="num">0</span>
            <div>
              <h3>Riscaldamento</h3>
              <p className="dose-row">
                <span className="dose">{WARMUP_MIN} min</span>
              </p>
              <p className="summary">
                Corda o corsa leggera, mobilità articolare e shadow boxing a ritmo crescente.
              </p>
            </div>
          </li>
          {list.map((e, i) => (
            <ExerciseCard
              key={e.id}
              exercise={e}
              index={i + 1}
              round={settings.round}
              showCategory
              collapsed
              actions={
                <>
                  <button className="icon" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Sposta su">
                    ↑
                  </button>
                  <button
                    className="icon"
                    onClick={() => move(i, 1)}
                    disabled={i === list.length - 1}
                    aria-label="Sposta giù"
                  >
                    ↓
                  </button>
                  <button
                    className="pill remove"
                    onClick={() => onChange(workout.ids.filter((id) => id !== e.id))}
                  >
                    Rimuovi
                  </button>
                </>
              }
            />
          ))}
        </ol>
        {list.length === 0 && (
          <p className="empty">
            Nessun esercizio ancora. Aggiungili dalle{" "}
            <a href={hrefFor({ page: "categorie" })}>categorie</a> con "+ Aggiungi all'allenamento",
            oppure premi "Crea lezione automatica".
          </p>
        )}
        {list.length > 0 && (
          <button className="btn pdf" onClick={() => void downloadWorkoutPdf(list, settings)}>
            ⬇ Scarica PDF dell'allenamento
          </button>
        )}
        {list.length > 0 && (
          <p className="more">
            <a href={hrefFor({ page: "categorie" })}>+ Aggiungi altri esercizi dalle categorie</a>
          </p>
        )}
      </main>
      <footer className="actions">
        <button className="btn secondary" onClick={() => onChange([])} disabled={list.length === 0}>
          Svuota
        </button>
        <button className="btn primary" onClick={onGenerate}>
          ⚡ Crea lezione automatica
        </button>
      </footer>
    </div>
  );
}
