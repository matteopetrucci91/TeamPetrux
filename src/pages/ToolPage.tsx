import { categories, type Tool } from "../data/exercises";
import { ExerciseCard } from "../components/ExerciseCard";
import { Topbar } from "../components/Topbar";
import { byTool } from "../lib/catalog";
import type { RoundMinutes } from "../lib/lesson";
import { hrefFor } from "../lib/route";

const order = new Map(categories.map((c, i) => [c.id, i]));

/** Elenco completo degli esercizi di un attrezzo. */
export function ToolPage({
  tool,
  round,
  inWorkout,
  onToggleWorkout,
  workoutCount,
}: {
  tool: Tool;
  round: RoundMinutes;
  inWorkout: ReadonlySet<string>;
  onToggleWorkout: (id: string) => void;
  workoutCount: number;
}) {
  const list = [...(byTool.get(tool.id) ?? [])].sort(
    (a, b) => (order.get(a.category) ?? 0) - (order.get(b.category) ?? 0),
  );
  return (
    <div className="page">
      <Topbar
        route="attrezzo"
        workoutCount={workoutCount}
        title={tool.label}
        eyebrow="Attrezzo"
        subtitle={tool.description}
        back={{ href: hrefFor({ page: "attrezzi" }), label: "Attrezzi" }}
        sticky
      />
      <main>
        <p className="counter">{list.length} esercizi</p>
        <ol className="exercises">
          {list.map((e, i) => (
            <ExerciseCard
              key={e.id}
              exercise={e}
              index={i + 1}
              round={round}
              showCategory
              collapsed
              hideToolLink
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
    </div>
  );
}
