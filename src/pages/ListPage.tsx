import type { Exercise } from "../data/exercises";
import { ExerciseCard } from "../components/ExerciseCard";
import { SettingsPanel, type SettingsProps } from "../components/Settings";
import { TimeSummary } from "../components/TimeSummary";
import { Topbar } from "../components/Topbar";
import { toExercises } from "../lib/catalog";
import { availableMinutes, fitDraw, totalMinutes } from "../lib/plan";
import { pickRandom } from "../lib/random";
import { hrefFor, type Route } from "../lib/route";

const PAGE = 10;

/**
 * Lista di esercizi di una categoria o di un attrezzo: 10 a caso che stanno
 * nel tempo della lezione, con "Ricarica" e "Altri 10".
 */
export function ListPage({
  route,
  title,
  eyebrow,
  subtitle,
  pool,
  ids,
  onChange,
  inWorkout,
  onToggleWorkout,
  workoutCount,
  showCategory = false,
  settings,
  onSettings,
}: {
  route: Route["page"];
  title: string;
  eyebrow?: string;
  subtitle: string;
  pool: Exercise[];
  ids: string[];
  onChange: (ids: string[]) => void;
  inWorkout: ReadonlySet<string>;
  onToggleWorkout: (id: string) => void;
  workoutCount: number;
  /** Negli attrezzi si mostra la qualità allenata sopra il nome. */
  showCategory?: boolean;
} & SettingsProps) {
  const shown = toExercises(ids);
  const shownIds = new Set(shown.map((e) => e.id));
  const remaining = pool.length - shown.length;

  const addMore = () =>
    onChange([...ids, ...pickRandom(pool, PAGE, shownIds).map((e) => e.id)]);
  const reshuffle = () => {
    onChange(fitDraw(pool, availableMinutes(settings), settings.round, PAGE, shownIds).map((e) => e.id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      <Topbar
        route={route}
        workoutCount={workoutCount}
        title={title}
        eyebrow={eyebrow}
        subtitle={subtitle}
        back={{ href: hrefFor({ page: "categorie" }), label: "Categorie" }}
        sticky
      />
      <main>
        <SettingsPanel settings={settings} onSettings={onSettings} compact />
        <TimeSummary
          settings={settings}
          exerciseMinutes={totalMinutes(shown, settings.round)}
          extra={`${shown.length} di ${pool.length} esercizi`}
        />
        <ol className="exercises">
          {shown.map((e, i) => (
            <ExerciseCard
              key={e.id}
              exercise={e}
              index={i + 1}
              round={settings.round}
              showCategory={showCategory}
              hideToolLink={showCategory}
              actions={
                <button
                  className={inWorkout.has(e.id) ? "pill added" : "pill"}
                  onClick={() => onToggleWorkout(e.id)}
                >
                  {inWorkout.has(e.id) ? "✓ Nell'allenamento" : "+ Aggiungi all'allenamento"}
                </button>
              }
            />
          ))}
        </ol>
      </main>
      <footer className="actions">
        <button className="btn secondary" onClick={reshuffle}>
          ↻ Ricarica
        </button>
        <button className="btn primary" onClick={addMore} disabled={remaining === 0}>
          {remaining === 0 ? "Finiti" : `+ Altri ${Math.min(PAGE, remaining)}`}
        </button>
      </footer>
    </div>
  );
}
