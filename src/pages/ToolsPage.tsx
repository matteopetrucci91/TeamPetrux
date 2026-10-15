import { tools } from "../data/exercises";
import { Topbar } from "../components/Topbar";
import { byTool } from "../lib/catalog";
import { TOOL_ICON } from "../lib/icons";
import { hrefFor } from "../lib/route";

/** Griglia degli attrezzi: usata nella pagina Attrezzi e nella home. */
export function ToolGrid() {
  return (
    <div className="grid">
      {tools.map((t) => (
        <a key={t.id} className="cat-card tool-card" href={hrefFor({ page: "attrezzo", id: t.id })}>
          <span className="cat-icon" aria-hidden="true">{TOOL_ICON[t.id]}</span>
          <span className="cat-label">{t.label}</span>
          <span className="cat-desc">{t.description}</span>
          <span className="cat-count">{byTool.get(t.id)?.length ?? 0} esercizi</span>
        </a>
      ))}
    </div>
  );
}

export function ToolsPage({ workoutCount }: { workoutCount: number }) {
  return (
    <div className="page">
      <Topbar
        back={{ href: hrefFor({ page: "categorie" }), label: "Categorie" }}
        route="attrezzi"
        workoutCount={workoutCount}
        title="Esercizi per attrezzo"
        subtitle="Tutti gli esercizi raggruppati per attrezzo: palla medica, corda, kettlebell e altri."
      />
      <main className="home">
        <ToolGrid />
      </main>
    </div>
  );
}
