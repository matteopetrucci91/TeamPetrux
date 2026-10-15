import { useEffect, useRef, useState, type ReactNode } from "react";
import logo from "../assets/logo.webp";
import { hrefFor, type Route } from "../lib/route";

const PAGES: { route: Route; label: string; icon: string }[] = [
  { route: { page: "categorie" }, label: "Categorie esercizi", icon: "☰" },
  { route: { page: "attrezzi" }, label: "Esercizi per attrezzo", icon: "◉" },
  { route: { page: "allenamento" }, label: "Crea allenamento", icon: "✚" },
  { route: { page: "impostazioni" }, label: "Impostazioni lezione", icon: "⏱" },
];

/** Menu a tendina per spostarsi tra le pagine. */
function Menu({ current, workoutCount }: { current: Route["page"]; workoutCount: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="menu" ref={ref}>
      <button
        className="menu-button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        Menu <span aria-hidden="true">{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <nav className="menu-list" role="menu">
          {PAGES.map((p) => {
            const active =
              p.route.page === current ||
              (p.route.page === "categorie" && current === "categoria") ||
              (p.route.page === "attrezzi" && current === "attrezzo");
            return (
              <a
                key={p.route.page}
                role="menuitem"
                href={hrefFor(p.route)}
                className={active ? "active" : ""}
                onClick={() => {
                  setOpen(false);
                  window.scrollTo({ top: 0 });
                }}
              >
                <span className="menu-icon" aria-hidden="true">{p.icon}</span>
                {p.label}
                {p.route.page === "allenamento" && workoutCount > 0 && (
                  <span className="badge">{workoutCount}</span>
                )}
              </a>
            );
          })}
        </nav>
      )}
    </div>
  );
}

export function Topbar({
  route,
  workoutCount,
  title,
  eyebrow,
  subtitle,
  back,
  sticky = false,
  showLogo = false,
}: {
  route: Route["page"];
  workoutCount: number;
  title: string;
  eyebrow?: string;
  subtitle?: ReactNode;
  back?: { href: string; label: string };
  sticky?: boolean;
  /** Logo del team grande, solo nella home. */
  showLogo?: boolean;
}) {
  return (
    <header className={["topbar", sticky && "sticky", showLogo && "with-logo"].filter(Boolean).join(" ")}>
      <div className="topbar-row">
        {back ? (
          <a className="back" href={back.href}>
            ‹ {back.label}
          </a>
        ) : (
          <span className="brand">{showLogo ? "" : "Team Petrux"}</span>
        )}
        <Menu current={route} workoutCount={workoutCount} />
      </div>
      {showLogo && <img className="team-logo" src={logo} alt="Team Petrux Muay Thai" width={132} height={132} />}
      <h1>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title}
      </h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}
