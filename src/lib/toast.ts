export const TOAST_EVENT = "muaythai:toast";

/** Mostra un breve messaggio in basso (es. "Aggiunto alla lezione"). */
export const showToast = (text: string) => window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: text }));
