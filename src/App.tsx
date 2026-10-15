import { useEffect, useMemo, useState } from "react";
import {
  categories,
  exercises,
  type Category,
  type CategoryId,
  type Exercise,
} from "./data/exercises";
import {
  adaptDose,
  DEFAULT_SETTINGS,
  estimateMinutes,
  type LessonSettings,
} from "./lib/lesson";
import { pickRandom, redraw } from "./lib/random";
import { load, save } from "./lib/storage";

const PAGE = 10;
const LISTS_KEY = "muaythai:liste:v1";
const CURRENT_KEY = "muaythai:categoria:v1";
const SETTINGS_KEY = "muaythai:lezione:v1";

/** Esercizi mostrati per ogni categoria (solo gli id, in ordine). */
type Lists = Partial<Record<CategoryId, string[]>>;

const byId = new Map(exercises.map((e) => [e.id, e]));
const byCategory = new Map<CategoryId, Exercise[]>(
  categories.map((c) => [c.id, exercises.filter((e) => e.category === c.id)]),
);
const isCategoryId = (v: unknown): v is CategoryId =>
  categories.some((c) => c.id === v);

/** Raggruppa le categorie: quelle con lo stesso `group` stanno insieme (es. Forza). */
function groupCategories(list: Category[]) {
  const groups: { title?: string; items: Category[] }[] = [];
  for (const c of list) {
    const existing = c.group
      ? groups.find((g) => g.title === c.group)
      : groups.at(-1)?.title === undefined && groups.at(-1);
    if (existing) existing.items.push(c);
    else groups.push({ title: c.group, items: [c] });
  }
  return groups;
}

export default function App() {
  const [lists, setLists] = useState<Lists>(() => load<Lists>(LISTS_KEY, {}));
  const [current, setCurrent] = useState<CategoryId | null>(() => {
    const saved = load<string | null>(CURRENT_KEY, null);
    return isCategoryId(saved) ? saved : null;
  });

  const [settings, setSettings] = useState<LessonSettings>(() => ({
    ...DEFAULT_SETTINGS,
    ...load<Partial<LessonSettings>>(SETTINGS_KEY, {}),
  }));

  useEffect(() => save(LISTS_KEY, lists), [lists]);
  useEffect(() => save(SETTINGS_KEY, settings), [settings]);
  useEffect(() => save(CURRENT_KEY, current), [current]);

  const openCategory = (id: CategoryId) => {
    const pool = byCategory.get(id) ?? [];
    setLists((prev) => {
      const valid = (prev[id] ?? []).filter((x) => byId.has(x));
      if (valid.length > 0) return prev;
      return { ...prev, [id]: pickRandom(pool, PAGE).map((e) => e.id) };
    });
    setCurrent(id);
    window.scrollTo({ top: 0 });
  };

  const category = categories.find((c) => c.id === current);

  return category ? (
    <CategoryView
      category={category}
      ids={lists[category.id] ?? []}
      onChange={(ids) => setLists((prev) => ({ ...prev, [category.id]: ids }))}
      onBack={() => setCurrent(null)}
      settings={settings}
      onSettings={setSettings}
    />
  ) : (
    <Home onOpen={openCategory} settings={settings} onSettings={setSettings} />
  );
}

function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string; hint?: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="setting">
      <span className="setting-label">{label}</span>
      <div className="segmented" role="radiogroup" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            role="radio"
            aria-checked={o.value === value}
            className={o.value === value ? "active" : ""}
            onClick={() => onChange(o.value)}
          >
            {o.label}
            {o.hint && <small>{o.hint}</small>}
          </button>
        ))}
      </div>
    </div>
  );
}

function SettingsPanel({
  settings,
  onSettings,
  compact = false,
}: SettingsProps & { compact?: boolean }) {
  return (
    <section className={compact ? "settings compact" : "settings"}>
      <Segmented
        label="Durata lezione"
        value={settings.lesson}
        options={[
          { value: 60, label: "1 ora" },
          { value: 90, label: "1 ora e 30" },
        ]}
        onChange={(lesson) => onSettings({ ...settings, lesson })}
      />
      <Segmented
        label="Durata ripresa"
        value={settings.round}
        options={[
          { value: 2, label: "2 min", hint: "leggero" },
          { value: 3, label: "3 min", hint: "agonistico" },
        ]}
        onChange={(round) => onSettings({ ...settings, round })}
      />
    </section>
  );
}

type SettingsProps = {
  settings: LessonSettings;
  onSettings: (s: LessonSettings) => void;
};

function Home({ onOpen, settings, onSettings }: { onOpen: (id: CategoryId) => void } & SettingsProps) {
  const groups = useMemo(() => groupCategories(categories), []);
  return (
    <div className="page">
      <header className="topbar">
        <h1>Allenamento Muay Thai</h1>
        <p className="subtitle">Scegli una categoria per vedere 10 esercizi.</p>
      </header>
      <SettingsPanel settings={settings} onSettings={onSettings} />
      <main className="home">
        {groups.map((g, i) => (
          <section key={g.title ?? `altre-${i}`} className="group">
            <h2>{g.title ?? "Altre categorie"}</h2>
            <div className="grid">
              {g.items.map((c) => (
                <CategoryCard key={c.id} category={c} onOpen={onOpen} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

function CategoryCard({
  category,
  onOpen,
}: {
  category: Category;
  onOpen: (id: CategoryId) => void;
}) {
  const count = byCategory.get(category.id)?.length ?? 0;
  return (
    <button className="cat-card" onClick={() => onOpen(category.id)}>
      <span className="cat-label">{category.label}</span>
      <span className="cat-desc">{category.description}</span>
      <span className="cat-count">{count} esercizi</span>
    </button>
  );
}

function CategoryView({
  category,
  ids,
  onChange,
  onBack,
  settings,
  onSettings,
}: {
  category: Category;
  ids: string[];
  onChange: (ids: string[]) => void;
  onBack: () => void;
} & SettingsProps) {
  const pool = byCategory.get(category.id) ?? [];
  const shown = ids.map((id) => byId.get(id)).filter((e): e is Exercise => !!e);
  const shownIds = new Set(shown.map((e) => e.id));
  const remaining = pool.length - shown.length;
  const rows = shown.map((e) => {
    const dose = adaptDose(e.dose, settings.round);
    return { e, dose, minutes: estimateMinutes(dose) };
  });
  const total = rows.reduce((sum, r) => sum + r.minutes, 0);
  const over = total - settings.lesson;

  const addMore = () =>
    onChange([...shown.map((e) => e.id), ...pickRandom(pool, PAGE, shownIds).map((e) => e.id)]);
  const reshuffle = () => {
    onChange(redraw(pool, PAGE, shownIds).map((e) => e.id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      <header className="topbar sticky">
        <button className="back" onClick={onBack} aria-label="Torna alle categorie">
          ‹ Categorie
        </button>
        <h1>
          {category.group && <span className="eyebrow">{category.group}</span>}
          {category.label}
        </h1>
        <p className="subtitle">{category.description}</p>
      </header>

      <main>
        <SettingsPanel settings={settings} onSettings={onSettings} compact />
        <div className={`time-summary${over > 0 ? " over" : ""}`}>
          <div className="time-text">
            <span>
              Tempo stimato: <strong>~{total} min</strong> su {settings.lesson}
            </span>
            <span className="counter">
              {shown.length} di {pool.length} esercizi
            </span>
          </div>
          <div className="time-bar" aria-hidden="true">
            <span style={{ width: `${Math.min(100, (total / settings.lesson) * 100)}%` }} />
          </div>
          <p className="time-note">
            {over > 0
              ? `Supera la lezione di ${over} min: scegli quali fare o usa Ricarica.`
              : `Restano circa ${-over} min per riscaldamento e defaticamento.`}
          </p>
        </div>
        <ol className="exercises">
          {rows.map(({ e, dose, minutes }, i) => (
            <li key={e.id} className="exercise">
              <span className="num">{i + 1}</span>
              <div>
                <h3>{e.name}</h3>
                <p className="dose-row">
                  <span className="dose">{dose}</span>
                  <span className="minutes">≈ {minutes} min</span>
                </p>
                <p className="summary">{e.description}</p>
                <p className="details">{e.details}</p>
                {e.equipment && <span className="chip">{e.equipment}</span>}
              </div>
            </li>
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
