import { useEffect, useState } from "react";
import type { CategoryId } from "../data/exercises";
import { isCategoryId } from "./catalog";

export type Route =
  | { page: "categorie" }
  | { page: "categoria"; id: CategoryId }
  | { page: "allenamento" }
  | { page: "impostazioni" };

export function parseHash(hash: string): Route {
  const [, page, id] = hash.replace(/^#/, "").split("/");
  if (page === "categoria" && isCategoryId(id)) return { page, id };
  if (page === "allenamento" || page === "impostazioni") return { page };
  return { page: "categorie" };
}

export const hrefFor = (r: Route) =>
  r.page === "categoria" ? `#/categoria/${r.id}` : r.page === "categorie" ? "#/" : `#/${r.page}`;

export function navigate(r: Route) {
  window.location.hash = hrefFor(r);
  window.scrollTo({ top: 0 });
}

/** Pagina corrente letta dall'indirizzo (#/...), così funziona anche il tasto indietro. */
export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
