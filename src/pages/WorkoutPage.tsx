import { useState, type ReactNode } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { ExercisePicker } from "../components/ExercisePicker";
import { QualityCheck } from "../components/QualityCheck";
import { SettingsPanel, type SettingsProps } from "../components/Settings";
import { Topbar } from "../components/Topbar";
import { doseFor, toExercises } from "../lib/catalog";
import type { LessonSettings } from "../lib/lesson";
import { downloadWorkoutPdf } from "../lib/pdf";
import { groupByPhase, insertInOrder, PHASE_INFO } from "../lib/phases";
import { availableMinutes, WARMUP_MIN } from "../lib/plan";
import { bestLesson, reviewWorkout } from "../lib/review";
import { hrefFor } from "../lib/route";
import { showToast } from "../lib/toast";

export interface Workout {
  ids: string[];
  /** true se creato con "Crea lezione automatica" e non modificato a mano. */
  auto: boolean;
}

const WARMUP_TEXT = "Corda o corsa leggera, mobilità articolare e shadow boxing a ritmo crescente.";
const lessonLabel = (s: LessonSettings) => (s.lesson === 60 ? "1 ora" : "1 ora e 30");
const paceLabel = (s: LessonSettings) => (s.round === 2 ? "ritmo leggero" : "ritmo agonistico");

function Choice({
  active,
  icon,
  title,
  text,
  onClick,
  href,
}: {
  active?: boolean;
  icon: string;
  title: string;
  text: string;
  onClick?: () => void;
  href?: string;
}) {
  const body = (
    <>
      <span className="choice-icon" aria-hidden="true">{icon}</span>
      <span className="choice-text">
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
      {active !== undefined && <span className="choice-check" aria-hidden="true">{active && <span className="mark-check" />}</span>}
    </>
  );
  return href ? (
    <a className="choice" href={href}>{body}</a>
  ) : (
    <button className={`choice${active ? " active" : ""}`} aria-pressed={active} onClick={onClick}>
      {body}
    </button>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="step">
      <h2>
        <span className="step-n">{n}</span>
        {title}
      </h2>
      <div className="choices">{children}</div>
    </section>
  );
}

/** Lezione vuota: tre scelte guidate per prepararla. */
function Planner({ settings, onSettings, onGenerate, onPick }: SettingsProps & { onGenerate: () => void; onPick: () => void }) {
  return (
    <main className="planner">
      <p className="planner-intro">
        Tre scelte e la lezione è pronta. I primi <strong>{WARMUP_MIN} minuti</strong> sono sempre di riscaldamento.
      </p>
      <Step n={1} title="Quanto dura la lezione?">
        <Choice
          icon="⏱️"
          title="1 ora"
          text={`${availableMinutes({ ...settings, lesson: 60 })} min di lavoro dopo il riscaldamento`}
          active={settings.lesson === 60}
          onClick={() => onSettings({ ...settings, lesson: 60 })}
        />
        <Choice
          icon="⏳"
          title="1 ora e 30"
          text={`${availableMinutes({ ...settings, lesson: 90 })} min di lavoro dopo il riscaldamento`}
          active={settings.lesson === 90}
          onClick={() => onSettings({ ...settings, lesson: 90 })}
        />
      </Step>
      <Step n={2} title="Che ritmo vuoi oggi?">
        <Choice
          icon="🌿"
          title="Leggero"
          text="Riprese da 2 minuti: principianti o settimana di scarico"
          active={settings.round === 2}
          onClick={() => onSettings({ ...settings, round: 2 })}
        />
        <Choice
          icon="🔥"
          title="Agonistico"
          text="Riprese da 3 minuti, come in gara"
          active={settings.round === 3}
          onClick={() => onSettings({ ...settings, round: 3 })}
        />
      </Step>
      <Step n={3} title="Come la costruiamo?">
        <Choice icon="✨" title="Pensaci tu" text="Una lezione completa e in ordine logico, con voto 100" onClick={onGenerate} />
        <Choice icon="✋" title="La scelgo io" text="Aggiungi gli esercizi da qui, con i suggerimenti per il voto più alto" onClick={onPick} />
      </Step>
    </main>
  );
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
  const [showSettings, setShowSettings] = useState(false);
  const [busy, setBusy] = useState(false);
  /** "La scelgo io": si mostra la lezione anche vuota, con la scelta degli esercizi. */
  const [picking, setPicking] = useState(false);
  const list = toExercises(workout.ids);
  const review = reviewWorkout(list, settings);
  const generate = (first: boolean) => {
    onGenerate();
    showToast(first ? "Ecco la tua lezione! 💪" : "Nuova proposta pronta ✨");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (list.length === 0 && !picking) {
    return (
      <div className="page">
        <Topbar
          route="allenamento"
          workoutCount={0}
          back={{ href: hrefFor({ page: "categorie" }), label: "Categorie" }}
          title="Crea allenamento"
          subtitle="Prepariamo insieme la lezione di oggi."
        />
        <Planner
          settings={settings}
          onSettings={onSettings}
          onGenerate={() => generate(true)}
          onPick={() => {
            setPicking(true);
            window.scrollTo({ top: 0 });
          }}
        />
      </div>
    );
  }

  /** Completa la lezione tenendo gli esercizi scelti e puntando al voto più alto. */
  const complete = () => {
    setBusy(true);
    // piccolo ritardo: lascia comparire "Sto completando…" prima del calcolo
    setTimeout(() => {
      const before = new Set(workout.ids);
      const done = bestLesson(settings, list);
      const added = done.filter((e) => !before.has(e.id)).length;
      const score = reviewWorkout(done, settings)?.score ?? 0;
      onChange(done.map((e) => e.id));
      setBusy(false);
      showToast(
        added === 0
          ? `Non c'era spazio per altri esercizi: ho sistemato l'ordine · voto ${score}`
          : score === 100
            ? `Aggiunti ${added} esercizi: lezione da 100 💯`
            : `Aggiunti ${added} esercizi: voto ${score}, il massimo possibile con i tuoi`,
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 30);
  };

  const move = (i: number, d: -1 | 1) => {
    const ids = [...workout.ids];
    [ids[i], ids[i + d]] = [ids[i + d], ids[i]];
    onChange(ids);
  };

  // minuto di inizio di ogni esercizio, dopo il riscaldamento
  const timed = list.reduce<{ e: (typeof list)[number]; i: number; start: number; end: number }[]>((acc, e, i) => {
    const start = acc.at(-1)?.end ?? WARMUP_MIN;
    return [...acc, { e, i, start, end: start + doseFor(e, settings.round).minutes }];
  }, []);
  const total = timed.at(-1)?.end ?? WARMUP_MIN;
  const pct = (m: number) => `${Math.min(100, (m / settings.lesson) * 100)}%`;

  return (
    <div className="page">
      <Topbar
        route="allenamento"
        workoutCount={list.length}
        back={{ href: hrefFor({ page: "categorie" }), label: "Categorie" }}
        title="La tua lezione"
        subtitle={`${lessonLabel(settings)} · ${paceLabel(settings)} · ${list.length} esercizi`}
      />
      <main>
        <section className={`hero-card${total > settings.lesson ? " over" : ""}`}>
          {review && (
            <span className={`score ${review.score >= 85 ? "ok" : review.score >= 60 ? "warn" : "bad"}`}>{review.score}</span>
          )}
          <div className="hero-text">
            <strong>{!review ? "Lezione vuota" : review.score === 100 ? "Lezione perfetta 💯" : review.verdict}</strong>
            <span>
              ~{total} min su {settings.lesson}
              {total > settings.lesson ? ` · supera di ${total - settings.lesson} min` : total < settings.lesson ? ` · liberi ${settings.lesson - total} min` : ""}
            </span>
          </div>
          <div className="time-bar hero-bar" aria-hidden="true">
            <span className="warmup" style={{ width: pct(WARMUP_MIN) }} />
            <span style={{ width: pct(total - WARMUP_MIN) }} />
          </div>
          <div className="hero-actions">
            {list.length > 0 && (
              <button className="pill solid" onClick={() => void downloadWorkoutPdf(list, settings)}>⬇ Scarica PDF</button>
            )}
            <button className="pill" onClick={() => setShowSettings((v) => !v)} aria-expanded={showSettings}>
              ⚙️ Durata e ritmo
            </button>
          </div>
        </section>
        {list.length === 0 && (
          <p className="hint">
            Scegli gli esercizi qui sotto da <a href="#aggiungi">➕ Aggiungi esercizi</a>: ti suggerisco quelli che
            alzano di più il voto. Oppure premi <strong>✨ Completa la lezione</strong> quando vuoi.
          </p>
        )}
        {!workout.auto && review && review.score < 100 && (
          <p className="hint">
            Hai scelto tu gli esercizi: premi <strong>✨ Completa la lezione</strong> e aggiungo quelli che mancano,
            tenendo i tuoi, per arrivare al voto più alto possibile.
          </p>
        )}
        {showSettings && <SettingsPanel settings={settings} onSettings={onSettings} compact />}

        {review &&
          (review.score === 100 ? (
            <details className="quality-details">
              <summary>Perché è da 100? Vedi il controllo qualità</summary>
              <QualityCheck review={review} />
            </details>
          ) : (
            <QualityCheck review={review} />
          ))}

        <ol className="timeline">
          <li className="phase">
            <header>
              <span className="phase-icon" aria-hidden="true">🔥</span>
              <h3>Riscaldamento</h3>
              <time>0′–{WARMUP_MIN}′</time>
            </header>
            <p className="phase-note">{WARMUP_TEXT}</p>
          </li>
          {groupByPhase(timed).map((g) => (
            <li key={`${g.phase}-${g.items[0].i}`} className="phase">
              <header>
                <span className="phase-icon" aria-hidden="true">{PHASE_INFO[g.phase].icon}</span>
                <h3>{PHASE_INFO[g.phase].label}</h3>
                <time>
                  {g.items[0].start}′–{g.items.at(-1)!.end}′
                </time>
              </header>
              <ol className="exercises">
                {g.items.map(({ e, i }) => (
                  <ExerciseCard
                    key={e.id}
                    exercise={e}
                    index={i + 1}
                    round={settings.round}
                    showCategory
                    collapsed
                    actions={
                      <>
                        <button className="icon" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Sposta su">↑</button>
                        <button className="icon" onClick={() => move(i, 1)} disabled={i === list.length - 1} aria-label="Sposta giù">↓</button>
                        <button
                          className="pill remove"
                          onClick={() => {
                            onChange(workout.ids.filter((id) => id !== e.id));
                            showToast(`Tolto: ${e.name}`);
                          }}
                        >
                          Rimuovi
                        </button>
                      </>
                    }
                  />
                ))}
              </ol>
            </li>
          ))}
        </ol>
        <ExercisePicker
          list={list}
          settings={settings}
          onAdd={(e) => {
            onChange(insertInOrder(list, e).map((x) => x.id));
            showToast(`Aggiunto: ${e.name}`);
          }}
          onRemove={(e) => {
            onChange(workout.ids.filter((id) => id !== e.id));
            showToast(`Tolto: ${e.name}`);
          }}
        />
      </main>
      <footer className="actions">
        <button
          className="btn secondary"
          onClick={() => {
            onChange([]);
            setPicking(false);
          }}
        >
          Ricomincia
        </button>
        {workout.auto ? (
          <button className="btn primary" onClick={() => generate(false)}>
            ✨ Nuova proposta
          </button>
        ) : (
          <button className="btn primary" onClick={complete} disabled={busy}>
            {busy ? "Sto completando…" : "✨ Completa la lezione"}
          </button>
        )}
      </footer>
    </div>
  );
}
