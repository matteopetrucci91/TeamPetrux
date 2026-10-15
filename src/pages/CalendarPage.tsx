import { useRef, useState } from "react";
import { Topbar } from "../components/Topbar";
import {
  addDays,
  addMinutes,
  byStart,
  exportBackup,
  exportCsv,
  longDate,
  monthGrid,
  MONTHS,
  newId,
  parseBackup,
  parseDate,
  TIMES,
  todayKey,
  useCalendar,
  WEEKDAYS,
  type Lesson,
} from "../lib/calendar";
import { hrefFor, navigate } from "../lib/route";

const REPEATS = [
  { value: 0, label: "Mai" },
  { value: 4, label: "Ogni settimana per 1 mese" },
  { value: 8, label: "Ogni settimana per 2 mesi" },
  { value: 13, label: "Ogni settimana per 3 mesi" },
  { value: 26, label: "Ogni settimana per 6 mesi" },
  { value: 52, label: "Ogni settimana per 1 anno" },
];

/** Nuova lezione: titolo, orari e ripetizione settimanale. */
function NewLessonForm({ date, onCreate, onCancel }: { date: string; onCreate: (l: Lesson[]) => void; onCancel: () => void }) {
  const [title, setTitle] = useState("Muay Thai");
  const [start, setStart] = useState("18:30");
  const [end, setEnd] = useState("20:00");
  const [repeat, setRepeat] = useState(0);
  const create = () => {
    const weeks = Math.max(1, repeat);
    onCreate(
      Array.from({ length: weeks }, (_, i) => ({
        id: newId(),
        title: title.trim() || "Muay Thai",
        date: addDays(date, i * 7),
        start,
        end: end > start ? end : addMinutes(start, 60),
        people: [],
      })),
    );
  };
  return (
    <div className="sheet">
      <h3>Nuova lezione · {longDate(date)}</h3>
      <label className="field wide">
        <span>Titolo</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="es. Muay Thai adulti" />
      </label>
      <div className="dose-fields">
        <label className="field">
          <span>Inizio</span>
          <select value={start} onChange={(e) => { setStart(e.target.value); if (end <= e.target.value) setEnd(addMinutes(e.target.value, 90)); }}>
            {TIMES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Fine</span>
          <select value={end} onChange={(e) => setEnd(e.target.value)}>
            {TIMES.filter((t) => t > start).map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <label className="field wide">
        <span>Ripeti</span>
        <select value={repeat} onChange={(e) => setRepeat(Number(e.target.value))}>
          {REPEATS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
      </label>
      <div className="dose-edit-actions">
        <button className="pill added" onClick={create}>Aggiungi</button>
        <button className="pill" onClick={onCancel}>Annulla</button>
      </div>
    </div>
  );
}

export function CalendarPage({ workoutCount, date }: { workoutCount: number; date?: string }) {
  const { data, setData, addLessons } = useCalendar();
  const today = todayKey();
  const [selected, setSelected] = useState(date ?? today);
  const sel = parseDate(selected);
  const [view, setView] = useState({ y: sel.getFullYear(), m: sel.getMonth() });
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const select = (key: string) => {
    setSelected(key);
    // aggiorna l'indirizzo senza ricaricare la pagina: tornando da una lezione si riapre questo giorno
    history.replaceState(null, "", hrefFor({ page: "calendario", date: key }));
    const d = parseDate(key);
    setView({ y: d.getFullYear(), m: d.getMonth() });
    setAdding(false);
  };
  const shift = (n: number) => {
    const d = new Date(view.y, view.m + n, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  const perDay = new Map<string, number>();
  data.lessons.forEach((l) => perDay.set(l.date, (perDay.get(l.date) ?? 0) + 1));
  const dayLessons = data.lessons.filter((l) => l.date === selected).sort(byStart);

  const importFile = async (file: File) => {
    const parsed = parseBackup(await file.text());
    if (!parsed) return setMessage("Il file non è un backup valido del calendario.");
    setData(parsed);
    setMessage(`Backup caricato: ${parsed.lessons.length} lezioni.`);
  };

  return (
    <div className="page">
      <Topbar
        route="calendario"
        workoutCount={workoutCount}
        back={{ href: hrefFor({ page: "categorie" }), label: "Categorie" }}
        title="Calendario lezioni"
        subtitle="Orari delle lezioni e presenze."
      />
      <main>
        <section className="calendar">
          <header className="cal-head">
            <button className="icon" onClick={() => shift(-1)} aria-label="Mese precedente">‹</button>
            <h2>
              {MONTHS[view.m]} <span>{view.y}</span>
            </h2>
            <button className="icon" onClick={() => shift(1)} aria-label="Mese successivo">›</button>
            <button className="pill today-btn" onClick={() => select(today)}>Oggi</button>
          </header>
          <div className="cal-grid" role="grid">
            {WEEKDAYS.map((w, i) => <span key={i} className="cal-wd">{w}</span>)}
            {monthGrid(view.y, view.m).map((key) => {
              const d = parseDate(key);
              const cls = [
                "cal-day",
                d.getMonth() !== view.m && "out",
                key === today && "today",
                key === selected && "selected",
              ].filter(Boolean).join(" ");
              const n = perDay.get(key) ?? 0;
              return (
                <button key={key} className={cls} onClick={() => select(key)} aria-label={`${longDate(key)}${n ? `, ${n} lezioni` : ""}`}>
                  <span className="d">{d.getDate()}</span>
                  <span className="dots">{Array.from({ length: Math.min(n, 3) }, (_, i) => <i key={i} />)}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="day">
          <h2 className="day-title">{longDate(selected)}</h2>
          {dayLessons.length === 0 && !adding && <p className="empty">Nessuna lezione in questo giorno.</p>}
          <ul className="events">
            {dayLessons.map((l) => {
              const missing = l.people.filter((p) => !p.certificato || !p.pagato).length;
              return (
                <li key={l.id}>
                  <a className="event" href={hrefFor({ page: "lezione", id: l.id })}>
                    <span className="event-time">
                      {l.start}
                      <small>{l.end}</small>
                    </span>
                    <span className="event-body">
                      <strong>{l.title}</strong>
                      <small>
                        {l.people.length} {l.people.length === 1 ? "persona" : "persone"}
                        {missing > 0 && <em> · {missing} da controllare</em>}
                      </small>
                    </span>
                    <span aria-hidden="true">›</span>
                  </a>
                </li>
              );
            })}
          </ul>
          {adding ? (
            <NewLessonForm
              date={selected}
              onCancel={() => setAdding(false)}
              onCreate={(list) => {
                addLessons(list);
                setAdding(false);
                if (list.length === 1) navigate({ page: "lezione", id: list[0].id });
                else setMessage(`Aggiunte ${list.length} lezioni, una a settimana.`);
              }}
            />
          ) : (
            <button className="btn primary wide" onClick={() => setAdding(true)}>+ Nuova lezione</button>
          )}
          {message && <p className="info notice">{message}</p>}
        </section>

        <section className="backup">
          <h2>Backup dei dati</h2>
          <p className="info">
            Lezioni e presenze restano solo su questo dispositivo. Scarica ogni tanto un backup:
            se cambi telefono o cancelli i dati del browser lo puoi ricaricare.
          </p>
          <div className="backup-actions">
            <button className="pill" onClick={() => exportBackup(data)}>⬇ Scarica backup</button>
            <button className="pill" onClick={() => fileRef.current?.click()}>⬆ Carica backup</button>
            <button className="pill" onClick={() => exportCsv(data)}>⬇ Presenze per Excel</button>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void importFile(f);
              e.target.value = "";
            }}
          />
        </section>
      </main>
    </div>
  );
}
