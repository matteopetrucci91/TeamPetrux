import { useEffect, useState } from "react";
import type { CategoryId, ToolId } from "../data/exercises";
import { isDateKey } from "./calendar";
import { isCategoryId, isToolId } from "./catalog";

export type Route =
  | { page: "home" }
  | { page: "categoria"; id: CategoryId }
  | { page: "attrezzi" }
  | { page: "attrezzo"; id: ToolId }
  | { page: "allenamento" }
  | { page: "impostazioni" }
  | { page: "calendario"; date?: string }
  | { page: "lezione"; id: string };

export function parseHash(hash: string): Route {
  const [, page, id] = hash.replace(/^#/, "").split("/");
  if (page === "categoria" && isCategoryId(id)) return { page, id };
  if (page === "attrezzo" && isToolId(id)) return { page, id };
  if (page === "calendario") return isDateKey(id) ? { page, date: id } : { page };
  if (page === "lezione" && id) return { page, id: decodeURIComponent(id) };
  if (page === "allenamento" || page === "impostazioni" || page === "attrezzi") return { page };
  return { page: "home" };
}

export function hrefFor(r: Route): string {
  switch (r.page) {
    case "categoria":
    case "attrezzo":
    case "lezione":
      return `#/${r.page}/${r.id}`;
    case "calendario":
      return r.date ? `#/calendario/${r.date}` : "#/calendario";
    default:
      return `#/${r.page}`;
  }
}

export function navigate(r: Route) {
  window.location.hash = hrefFor(r);
  window.scrollTo({ top: 0 });
}

/** Pagina corrente letta dall'indirizzo (#/...), così funziona anche il tasto indietro. */
/** La pagina principale si chiama sempre #/home, anche se l'indirizzo è vuoto o sconosciuto. */
function normalizeHash(r: Route) {
  if (r.page === "home" && window.location.hash !== "#/home") history.replaceState(null, "", "#/home");
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => {
    const r = parseHash(window.location.hash);
    normalizeHash(r);
    return r;
  });
  useEffect(() => {
    const onChange = () => {
      const r = parseHash(window.location.hash);
      normalizeHash(r);
      setRoute(r);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
