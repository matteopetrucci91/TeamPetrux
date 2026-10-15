// Persistenza gratuita nel browser (localStorage): niente database.
// Se il browser blocca lo storage (es. navigazione privata) l'app funziona lo stesso.

export function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function save<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage non disponibile: si ignora */
  }
}
