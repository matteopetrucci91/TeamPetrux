import type { Exercise } from "../data/exercises";
import { categoryById, doseFor } from "./catalog";
import type { LessonSettings } from "./lesson";
import { totalMinutes, WARMUP_MIN } from "./plan";

const RED: [number, number, number] = [165, 25, 49];
const BLUE: [number, number, number] = [45, 42, 74];
const GREY: [number, number, number] = [95, 95, 110];

const lessonLabel = (s: LessonSettings) => (s.lesson === 60 ? "1 ora" : "1 ora e 30");
const roundLabel = (s: LessonSettings) => `${s.round} min (${s.round === 2 ? "leggero" : "agonistico"})`;

/** Crea e scarica il PDF dell'allenamento (jsPDF caricato solo quando serve). */
export async function downloadWorkoutPdf(list: readonly Exercise[], settings: LessonSettings) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 16;
  const textW = W - M * 2 - 10;
  let y = 0;

  const flag = (top: number) => {
    const bands: [number, number, number][] = [RED, [255, 255, 255], BLUE, [255, 255, 255], RED];
    const h = [1.2, 1, 2.4, 1, 1.2];
    let yy = top;
    bands.forEach((c, i) => {
      doc.setFillColor(...c);
      doc.rect(0, yy, W, h[i], "F");
      yy += h[i];
    });
  };
  const ensure = (needed: number) => {
    if (y + needed > H - 16) {
      doc.addPage();
      y = 18;
    }
  };
  const lines = (text: string, size: number, color: [number, number, number], style = "normal", x = M + 10) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const split: string[] = doc.splitTextToSize(text, W - x - M);
    const lh = size * 0.42;
    for (const l of split) {
      ensure(lh);
      doc.text(l, x, y);
      y += lh;
    }
  };

  // Intestazione
  doc.setFillColor(...BLUE);
  doc.rect(0, 0, W, 34, "F");
  flag(34);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Allenamento Muay Thai", M, 16);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  const exMin = totalMinutes(list, settings.round);
  doc.text(
    `Lezione ${lessonLabel(settings)}  ·  Ripresa ${roundLabel(settings)}  ·  ${list.length} esercizi  ·  ~${WARMUP_MIN + exMin} min totali`,
    M,
    25,
  );
  doc.setFontSize(9);
  doc.text(new Date().toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" }), M, 30);
  y = 48;

  const item = (n: number, title: string, meta: string, dose: string, body: string[]) => {
    ensure(22);
    doc.setFillColor(...RED);
    doc.circle(M + 3.5, y - 1.3, 3.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(String(n), M + 3.5, y, { align: "center" });
    lines(title, 13, BLUE, "bold");
    if (meta) lines(meta, 8.5, GREY);
    y += 1;
    lines(dose, 10.5, RED, "bold");
    y += 0.5;
    for (const b of body) {
      lines(b, 9.5, [30, 30, 40]);
      y += 1;
    }
    y += 3;
    ensure(4);
    doc.setDrawColor(225, 225, 232);
    doc.line(M + 10, y - 2, M + 10 + textW, y - 2);
    y += 3;
  };

  item(0, "Riscaldamento", "", `${WARMUP_MIN} min`, [
    "Corda o corsa leggera, mobilità articolare e shadow boxing a ritmo crescente.",
  ]);
  list.forEach((e, i) => {
    const { dose, minutes, custom } = doseFor(e, settings.round);
    const cat = categoryById.get(e.category)?.label ?? "";
    const meta = [cat, e.equipment].filter(Boolean).join("  ·  ");
    item(i + 1, e.name, meta, `${dose}   (~${minutes} min${custom ? ", dosaggio personalizzato" : ""})`, [
      e.description,
      e.details,
    ]);
  });

  ensure(10);
  lines(
    `Totale stimato: ~${WARMUP_MIN + exMin} min su ${settings.lesson} (riscaldamento ${WARMUP_MIN} min + esercizi ~${exMin} min)`,
    10.5,
    BLUE,
    "bold",
    M,
  );

  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...GREY);
    doc.text(`TeamPetrux · Muay Thai   —   pagina ${p} di ${pages}`, W / 2, H - 8, { align: "center" });
  }

  const date = new Date().toISOString().slice(0, 10);
  doc.save(`allenamento-muay-thai-${date}.pdf`);
}
