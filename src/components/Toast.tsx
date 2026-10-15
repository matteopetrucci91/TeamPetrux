import { useEffect, useState } from "react";

import { TOAST_EVENT as EVENT } from "../lib/toast";

export function Toaster() {
  const [toast, setToast] = useState<{ text: string; id: number } | null>(null);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const on = (e: Event) => {
      setToast({ text: (e as CustomEvent<string>).detail, id: Date.now() });
      clearTimeout(timer);
      timer = setTimeout(() => setToast(null), 2200);
    };
    window.addEventListener(EVENT, on);
    return () => {
      window.removeEventListener(EVENT, on);
      clearTimeout(timer);
    };
  }, []);
  return toast ? (
    <div key={toast.id} className="toast" role="status">
      {toast.text}
    </div>
  ) : null;
}
