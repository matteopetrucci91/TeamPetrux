import { categories, type Category } from "../data/exercises";
import { Topbar } from "../components/Topbar";
import { byCategory } from "../lib/catalog";
import { hrefFor } from "../lib/route";

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

const groups = groupCategories(categories);

export function CategoriesPage({ workoutCount }: { workoutCount: number }) {
  return (
    <div className="page">
      <Topbar
        route="categorie"
        workoutCount={workoutCount}
        title="Allenamento Muay Thai"
        subtitle="Scegli una categoria per vedere gli esercizi."
      />
      <main className="home">
        <a className="cta" href={hrefFor({ page: "allenamento" })}>
          <span>
            <strong>Crea allenamento</strong>
            <small>Scegli tu gli esercizi o crea una lezione automatica</small>
          </span>
          <span aria-hidden="true">›</span>
        </a>
        {groups.map((g, i) => (
          <section key={g.title ?? `altre-${i}`} className="group">
            <h2>{g.title ?? "Altre categorie"}</h2>
            <div className="grid">
              {g.items.map((c) => (
                <a key={c.id} className="cat-card" href={hrefFor({ page: "categoria", id: c.id })}>
                  <span className="cat-label">{c.label}</span>
                  <span className="cat-desc">{c.description}</span>
                  <span className="cat-count">{byCategory.get(c.id)?.length ?? 0} esercizi</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
