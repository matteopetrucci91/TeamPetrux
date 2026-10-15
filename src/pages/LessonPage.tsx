import { useState } from "react";
import { Topbar } from "../components/Topbar";
import {
  addMinutes,
  byStart,
  copyPerson,
  fullName,
  knownPeople,
  longDate,
  newId,
  sameName,
  TIMES,
  useCalendar,
  type Person,
} from "../lib/calendar";
import { hrefFor, navigate } from "../lib/route";

const AGES = Array.from({ length: 88 }, (_, i) => i + 3);

function Toggle({ on, label, onChange }: { on: boolean; label: string; onChange: (v: boolean) => void }) {
  return (
    <button type="button" className={`toggle ${on ? "on" : "off"}`} aria-pressed={on} onClick={() => onChange(!on)}>
      <span className="mark">{on ? "✓" : "✕"}</span>
      {label}
    </button>
  );
}

function PersonRow({
  p,
  index,
  autoFocus,
  onChange,
  onRemove,
}: {
  p: Person;
  index: number;
  autoFocus: boolean;
  onChange: (patch: Partial<Person>) => void;
  onRemove: () => void;
}) {
  const [notes, setNotes] = useState(p.note !== "");
  return (
    <li className="person">
      <span className="num">{index}</span>
      <div className="person-body">
        <div className="person-fields">
          <label className="field">
            <span>Nome</span>
            <input value={p.nome} autoFocus={autoFocus} autoCapitalize="words" onChange={(e) => onChange({ nome: e.target.value })} />
          </label>
          <label className="field">
            <span>Cognome</span>
            <input value={p.cognome} autoCapitalize="words" onChange={(e) => onChange({ cognome: e.target.value })} />
          </label>
          <label className="field age">
            <span>Età</span>
            <select value={p.eta ?? ""} onChange={(e) => onChange({ eta: e.target.value ? Number(e.target.value) : null })}>
              <option value="">—</option>
              {AGES.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </label>
        </div>
        <div className="person-flags">
          <Toggle on={p.certificato} label="Certificato medico" onChange={(v) => onChange({ certificato: v })} />
          <Toggle on={p.pagato} label="Mese pagato" onChange={(v) => onChange({ pagato: v })} />
        </div>
        {notes ? (
          <label className="field wide">
            <span>Note</span>
            <textarea rows={2} value={p.note} onChange={(e) => onChange({ note: e.target.value })} placeholder="es. infortunio alla caviglia, paga la prossima volta…" />
          </label>
        ) : null}
        <div className="person-actions">
          {!notes && <button className="edit" onClick={() => setNotes(true)}>+ Note</button>}
          <button className="pill remove" onClick={onRemove}>Rimuovi</button>
        </div>
      </div>
    </li>
  );
}

export function LessonPage({ workoutCount, id }: { workoutCount: number; id: string }) {
  const { data, updateLesson, removeLesson } = useCalendar();
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const lesson = data.lessons.find((l) => l.id === id);

  if (!lesson) {
    return (
      <div className="page">
        <Topbar route="lezione" workoutCount={workoutCount} back={{ href: hrefFor({ page: "calendario" }), label: "Calendario" }} title="Lezione non trovata" />
        <main><p className="empty">Questa lezione non esiste più. <a href={hrefFor({ page: "calendario" })}>Torna al calendario</a></p></main>
      </div>
    );
  }

  const people = lesson.people;
  const setPeople = (next: Person[]) => updateLesson(lesson.id, { people: next });
  const add = (p: Person) => {
    setPeople([...people, p]);
    setLastAdded(p.id);
  };
  const known = knownPeople(data.lessons).filter((k) => !people.some((p) => sameName(p, k.person)));
  const previous = [...data.lessons]
    .filter((l) => l.id !== lesson.id && byStart(l, lesson) < 0 && l.people.length > 0)
    .sort(byStart)
    .reverse();
  const prev = previous.find((l) => l.title === lesson.title) ?? previous[0];

  const noCert = people.filter((p) => !p.certificato).length;
  const notPaid = people.filter((p) => !p.pagato).length;

  return (
    <div className="page">
      <Topbar
        route="lezione"
        workoutCount={workoutCount}
        back={{ href: hrefFor({ page: "calendario", date: lesson.date }), label: "Calendario" }}
        title={lesson.title}
        eyebrow={`${lesson.start} – ${lesson.end}`}
        subtitle={longDate(lesson.date)}
      />
      <main>
        <section className="sheet">
          <label className="field wide">
            <span>Titolo</span>
            <input value={lesson.title} onChange={(e) => updateLesson(lesson.id, { title: e.target.value })} />
          </label>
          <div className="when">
            <label className="field">
              <span>Giorno</span>
              <input type="date" value={lesson.date} onChange={(e) => e.target.value && updateLesson(lesson.id, { date: e.target.value })} />
            </label>
            <label className="field">
              <span>Inizio</span>
              <select
                value={lesson.start}
                onChange={(e) => {
                  const start = e.target.value;
                  updateLesson(lesson.id, { start, end: lesson.end > start ? lesson.end : addMinutes(start, 90) });
                }}
              >
                {TIMES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="field">
              <span>Fine</span>
              <select value={lesson.end} onChange={(e) => updateLesson(lesson.id, { end: e.target.value })}>
                {TIMES.filter((t) => t > lesson.start).map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
          </div>
        </section>

        <section className="attendance">
          <h2>Presenze</h2>
          <p className="att-summary">
            <strong>{people.length}</strong> {people.length === 1 ? "persona" : "persone"}
            {people.length > 0 && (
              <>
                {" · "}
                <span className={noCert ? "warn" : "ok"}>{noCert ? `${noCert} senza certificato` : "certificati ok"}</span>
                {" · "}
                <span className={notPaid ? "warn" : "ok"}>{notPaid ? `${notPaid} non ${notPaid === 1 ? "ha" : "hanno"} pagato` : "pagamenti ok"}</span>
              </>
            )}
          </p>
          <ol className="people">
            {people.map((p, i) => (
              <PersonRow
                key={p.id}
                p={p}
                index={i + 1}
                autoFocus={p.id === lastAdded && !fullName(p)}
                onChange={(patch) => setPeople(people.map((x) => (x.id === p.id ? { ...x, ...patch } : x)))}
                onRemove={() => setPeople(people.filter((x) => x.id !== p.id))}
              />
            ))}
          </ol>
          <div className="add-people">
            <button
              className="btn primary wide"
              onClick={() => add({ id: newId(), nome: "", cognome: "", eta: null, certificato: false, pagato: false, note: "" })}
            >
              + Aggiungi persona
            </button>
            {known.length > 0 && (
              <label className="field wide">
                <span>Aggiungi una persona già inserita</span>
                <select
                  value=""
                  onChange={(e) => {
                    const k = known.find((x) => x.person.id === e.target.value);
                    if (k) add(copyPerson(k.person, k.date, lesson.date));
                  }}
                >
                  <option value="">Scegli dall'elenco ({known.length})…</option>
                  {known.map((k) => <option key={k.person.id} value={k.person.id}>{fullName(k.person)}</option>)}
                </select>
              </label>
            )}
            {prev && (
              <button
                className="pill"
                onClick={() => {
                  const extra = prev.people.filter((p) => fullName(p) && !people.some((x) => sameName(x, p)));
                  setPeople([...people, ...extra.map((p) => copyPerson(p, prev.date, lesson.date))]);
                }}
              >
                ⧉ Copia le presenze del {longDate(prev.date)}
              </button>
            )}
          </div>
        </section>

        <section className="danger">
          {confirmDelete ? (
            <div className="dose-edit-actions">
              <button
                className="pill remove"
                onClick={() => {
                  removeLesson(lesson.id);
                  navigate({ page: "calendario", date: lesson.date });
                }}
              >
                Sì, elimina la lezione
              </button>
              <button className="pill" onClick={() => setConfirmDelete(false)}>Annulla</button>
            </div>
          ) : (
            <button className="pill remove" onClick={() => setConfirmDelete(true)}>Elimina lezione</button>
          )}
        </section>
      </main>
    </div>
  );
}
