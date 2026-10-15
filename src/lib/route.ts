import { useEffect, useState } from "react";
import type { CategoryId, ToolId } from "../data/exercises";
import { isCategoryId, isToolId } from "./catalog";

export type Route =
  | { page: "categorie" }
  | { page: "categoria"; id: CategoryId }
  | { page: "attrezzi" }
  | { page: "attrezzo"; id: ToolId }
  | { page: "allenamento" }
  | { page: "impostazioni" };

export function parseHash(hash: string): Route {
  const [, page, id] = hash.replace(/^#/, "").split("/");
  if (page === "categoria" && isCategoryId(id)) return { page, id };
  if (page === "attrezzo" && isToolId(id)) return { page, id };
  if (page === "allenamento" || page === "impostazioni" || page === "attrezzi") return { page };
  return { page: "categorie" };
}

export const hrefFor = (r: Route) =>
  r.page === "categoria" || r.page === "attrezzo"
    ? `#/${r.page}/${r.id}`
    : r.page === "categorie"
      ? "#/"
      : `#/${r.page}`;

export function navigate(r: Route) {
  window.location.hash = hrefFor(r);
  window.scrollTo({ top: 0 });
}

/** Pagina corrente letta dall'indirizzo (#/...), così funziona anche il tasto indietro. */
export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
