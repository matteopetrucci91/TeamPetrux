import { categories } from "../data/exercises";
import { Topbar } from "../components/Topbar";
import { byCategory } from "../lib/catalog";
import { hrefFor } from "../lib/route";
import { ToolGrid } from "./ToolsPage";

export function CategoriesPage({ workoutCount }: { workoutCount: number }) {
  return (
    <div className="page">
      <Topbar
        route="categorie"
        workoutCount={workoutCount}
        showLogo
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
        <a className="cta secondary" href={hrefFor({ page: "calendario" })}>
          <span>
            <strong>Calendario lezioni</strong>
            <small>Orari delle lezioni e presenze</small>
          </span>
          <span aria-hidden="true">›</span>
        </a>
        <section className="group">
          <h2>Categorie</h2>
          <div className="grid">
            {categories.map((c) => (
              <a key={c.id} className="cat-card" href={hrefFor({ page: "categoria", id: c.id })}>
                <span className="cat-label">{c.label}</span>
                <span className="cat-desc">{c.description}</span>
                <span className="cat-count">{byCategory.get(c.id)?.length ?? 0} esercizi</span>
              </a>
            ))}
          </div>
        </section>
        <section className="group">
          <h2>Attrezzi</h2>
          <ToolGrid />
        </section>
      </main>
    </div>
  );
}
