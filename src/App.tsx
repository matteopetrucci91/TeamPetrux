import { useEffect, useMemo, useState } from "react";
import {
  categories,
  exercises,
  type Category,
  type CategoryId,
  type Exercise,
} from "./data/exercises";
import { pickRandom, redraw } from "./lib/random";
import { load, save } from "./lib/storage";

const PAGE = 10;
const LISTS_KEY = "muaythai:liste:v1";
const CURRENT_KEY = "muaythai:categoria:v1";

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

  useEffect(() => save(LISTS_KEY, lists), [lists]);
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
    />
  ) : (
    <Home onOpen={openCategory} />
  );
}

function Home({ onOpen }: { onOpen: (id: CategoryId) => void }) {
  const groups = useMemo(() => groupCategories(categories), []);
  return (
    <div className="page">
      <header className="topbar">
        <h1>Allenamento Muay Thai</h1>
        <p className="subtitle">Scegli una categoria per vedere 10 esercizi.</p>
      </header>
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
}: {
  category: Category;
  ids: string[];
  onChange: (ids: string[]) => void;
  onBack: () => void;
}) {
  const pool = byCategory.get(category.id) ?? [];
  const shown = ids.map((id) => byId.get(id)).filter((e): e is Exercise => !!e);
  const shownIds = new Set(shown.map((e) => e.id));
  const remaining = pool.length - shown.length;

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
        <p className="counter">
          {shown.length} di {pool.length} esercizi
        </p>
        <ol className="exercises">
          {shown.map((e, i) => (
            <li key={e.id} className="exercise">
              <span className="num">{i + 1}</span>
              <div>
                <h3>{e.name}</h3>
                <p className="dose">{e.dose}</p>
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
