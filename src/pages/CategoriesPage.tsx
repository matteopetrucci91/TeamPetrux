import { categories } from "../data/exercises";
import { Topbar } from "../components/Topbar";
import { byCategory } from "../lib/catalog";
import { CATEGORY_ICON } from "../lib/icons";
import { hrefFor } from "../lib/route";
import { ToolGrid } from "./ToolsPage";

export function CategoriesPage({ workoutCount }: { workoutCount: number }) {
  return (
    <div className="page">
      <Topbar
        route="home"
        workoutCount={workoutCount}
        showLogo
        title="Allenamento Muay Thai"
        subtitle="Scegli una categoria per vedere gli esercizi."
      />
      <main className="home">
        <div className="cta-row">
          <a className="cta" href={hrefFor({ page: "allenamento" })}>
            <span className="cta-icon" aria-hidden="true">✨</span>
            <strong>Crea allenamento</strong>
            <small>Automatico o scelto da te</small>
          </a>
          <a className="cta secondary" href={hrefFor({ page: "calendario" })}>
            <span className="cta-icon" aria-hidden="true">📅</span>
            <strong>Calendario lezioni</strong>
            <small>Orari e presenze</small>
          </a>
        </div>
        <section className="group">
          <h2>Categorie</h2>
          <div className="grid">
            {categories.map((c) => (
              <a key={c.id} className="cat-card" href={hrefFor({ page: "categoria", id: c.id })}>
                <span className="cat-icon" aria-hidden="true">{CATEGORY_ICON[c.id]}</span>
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
