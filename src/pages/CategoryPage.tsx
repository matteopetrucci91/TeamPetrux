import type { Category } from "../data/exercises";
import { ExerciseCard } from "../components/ExerciseCard";
import { SettingsPanel, type SettingsProps } from "../components/Settings";
import { TimeSummary } from "../components/TimeSummary";
import { Topbar } from "../components/Topbar";
import { byCategory, toExercises } from "../lib/catalog";
import { availableMinutes, fitDraw, totalMinutes } from "../lib/plan";
import { pickRandom } from "../lib/random";
import { hrefFor } from "../lib/route";

const PAGE = 10;

export function CategoryPage({
  category,
  ids,
  onChange,
  inWorkout,
  onToggleWorkout,
  workoutCount,
  settings,
  onSettings,
}: {
  category: Category;
  ids: string[];
  onChange: (ids: string[]) => void;
  inWorkout: ReadonlySet<string>;
  onToggleWorkout: (id: string) => void;
  workoutCount: number;
} & SettingsProps) {
  const pool = byCategory.get(category.id) ?? [];
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
        route="categoria"
        workoutCount={workoutCount}
        title={category.label}
        eyebrow={category.group}
        subtitle={category.description}
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
