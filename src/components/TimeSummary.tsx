import type { LessonSettings } from "../lib/lesson";
import { WARMUP_MIN } from "../lib/plan";

/** Riepilogo del tempo: riscaldamento + esercizi rispetto alla durata della lezione. */
export function TimeSummary({
  settings,
  exerciseMinutes,
  extra,
}: {
  settings: LessonSettings;
  exerciseMinutes: number;
  extra?: string;
}) {
  const total = WARMUP_MIN + exerciseMinutes;
  const over = total - settings.lesson;
  const pct = (m: number) => `${Math.min(100, (m / settings.lesson) * 100)}%`;
  return (
    <div className={`time-summary${over > 0 ? " over" : ""}`}>
      <div className="time-text">
        <span>
          Tempo stimato: <strong>~{total} min</strong> su {settings.lesson}
        </span>
        {extra && <span className="counter">{extra}</span>}
      </div>
      <div className="time-bar" aria-hidden="true">
        <span className="warmup" style={{ width: pct(WARMUP_MIN) }} />
        <span style={{ width: pct(exerciseMinutes) }} />
      </div>
      <p className="time-note">
        <span className="legend warmup" /> Riscaldamento {WARMUP_MIN} min ·{" "}
        <span className="legend" /> Esercizi ~{exerciseMinutes} min
        {over > 0 ? (
          <strong> · supera di {over} min</strong>
        ) : (
          over < 0 && <> · liberi {-over} min</>
        )}
      </p>
    </div>
  );
}
