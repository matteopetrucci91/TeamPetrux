import { useState } from "react";
import type { Exercise } from "../data/exercises";
import { ExerciseCard } from "../components/ExerciseCard";
import { SettingsPanel, type SettingsProps } from "../components/Settings";
import { TimeSummary } from "../components/TimeSummary";
import { Topbar } from "../components/Topbar";
import { hrefFor, type Route } from "../lib/route";

/** Tutti gli esercizi di una categoria o di un attrezzo, da aggiungere alla lezione. */
export function ListPage({
  route,
  title,
  eyebrow,
  subtitle,
  pool,
  inWorkout,
  onToggleWorkout,
  workoutCount,
  workoutMinutes,
  showCategory = false,
  settings,
  onSettings,
}: {
  route: Route["page"];
  title: string;
  eyebrow?: string;
  subtitle: string;
  pool: Exercise[];
  inWorkout: ReadonlySet<string>;
  onToggleWorkout: (id: string) => void;
  workoutCount: number;
  /** Minuti degli esercizi già nella lezione. */
  workoutMinutes: number;
  /** Negli attrezzi si mostra la qualità allenata sopra il nome. */
  showCategory?: boolean;
} & SettingsProps) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const shown = q ? pool.filter((e) => `${e.name} ${e.description} ${e.equipment ?? ""}`.toLowerCase().includes(q)) : pool;

  return (
    <div className="page">
      <Topbar
        route={route}
        workoutCount={workoutCount}
        title={title}
        eyebrow={eyebrow}
        subtitle={subtitle}
        back={{ href: hrefFor({ page: "home" }), label: "Home" }}
      />
      <main>
        <SettingsPanel settings={settings} onSettings={onSettings} compact />
        <TimeSummary
          settings={settings}
          exerciseMinutes={workoutMinutes}
          extra={`${workoutCount} nella tua lezione`}
        />
        <input
          className="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`🔍 Cerca tra i ${pool.length} esercizi`}
          aria-label="Cerca esercizi"
        />
        {q && <p className="counter">{shown.length} risultati</p>}
        <ol className="exercises">
          {shown.map((e, i) => (
            <ExerciseCard
              key={e.id}
              exercise={e}
              index={i + 1}
              round={settings.round}
              showCategory={showCategory}
              hideToolLink={showCategory}
              collapsed
              actions={
                <button
                  className={inWorkout.has(e.id) ? "pill added" : "pill"}
                  onClick={() => onToggleWorkout(e.id)}
                >
                  {inWorkout.has(e.id) ? "✓ Nella lezione" : "+ Aggiungi alla lezione"}
                </button>
              }
            />
          ))}
        </ol>
        {shown.length === 0 && <p className="empty">Nessun esercizio trovato.</p>}
      </main>
      <footer className="actions">
        <a className="btn primary link-btn" href={hrefFor({ page: "allenamento" })}>
          Vai alla tua lezione{workoutCount > 0 ? ` (${workoutCount})` : ""} ›
        </a>
      </footer>
    </div>
  );
}
