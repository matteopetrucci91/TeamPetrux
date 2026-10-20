// Calendario delle lezioni e presenze, salvati solo su questo dispositivo (localStorage).
import { useEffect, useState } from "react";
import { load, save } from "./storage";

export interface Person {
  id: string;
  nome: string;
  cognome: string;
  eta: number | null;
  certificato: boolean;
  pagato: boolean;
  note: string;
}

export interface Lesson {
  id: string;
  title: string;
  /** Giorno nel formato AAAA-MM-GG. */
  date: string;
  /** Orari nel formato HH:MM. */
  start: string;
  end: string;
  people: Person[];
}

export interface CalendarData {
  lessons: Lesson[];
}

export const CALENDAR_KEY = "muaythai:calendario:v1";

export const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

/** Stato del calendario condiviso dalle pagine e salvato a ogni modifica. */
export function useCalendar() {
  const [data, setData] = useState<CalendarData>(() => load<CalendarData>(CALENDAR_KEY, { lessons: [] }));
  useEffect(() => save(CALENDAR_KEY, data), [data]);
  const updateLesson = (id: string, patch: Partial<Lesson>) =>
    setData((d) => ({ lessons: d.lessons.map((l) => (l.id === id ? { ...l, ...patch } : l)) }));
  const addLessons = (list: Lesson[]) => setData((d) => ({ lessons: [...d.lessons, ...list] }));
  const removeLesson = (id: string) => setData((d) => ({ lessons: d.lessons.filter((l) => l.id !== id) }));
  return { data, setData, updateLesson, addLessons, removeLesson };
}

// ---- date ----

const pad = (n: number) => String(n).padStart(2, "0");
export const dateKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const parseDate = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};
export const isDateKey = (v: unknown): v is string => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
export const todayKey = () => dateKey(new Date());
export const addDays = (key: string, n: number) => {
  const d = parseDate(key);
  d.setDate(d.getDate() + n);
  return dateKey(d);
};

export const MONTHS = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
export const WEEKDAYS = ["L", "M", "M", "G", "V", "S", "D"];

/** 6 settimane da lunedì che coprono il mese (come il calendario di iPhone). */
export function monthGrid(year: number, month: number): string[] {
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - offset);
  return Array.from({ length: 42 }, (_, i) => dateKey(new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)));
}

export const longDate = (key: string) =>
  parseDate(key).toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

/** Orari ogni 15 minuti dalle 6 alle 23:45. */
export const TIMES = Array.from({ length: 72 }, (_, i) => `${pad(6 + Math.floor(i / 4))}:${pad((i % 4) * 15)}`);
export const addMinutes = (time: string, min: number) => {
  const [h, m] = time.split(":").map(Number);
  const t = Math.min(23 * 60 + 45, h * 60 + m + min);
  return `${pad(Math.floor(t / 60))}:${pad(t % 60)}`;
};

export const byStart = (a: Lesson, b: Lesson) => (a.date + a.start).localeCompare(b.date + b.start);

// ---- persone ----

export const fullName = (p: Pick<Person, "nome" | "cognome">) => `${p.nome} ${p.cognome}`.trim();
const personKey = (p: Pick<Person, "nome" | "cognome">) => fullName(p).toLowerCase();

/** Tutte le persone già inserite, con i dati della loro ultima lezione. */
export function knownPeople(lessons: Lesson[]): { person: Person; date: string }[] {
  const map = new Map<string, { person: Person; date: string }>();
  for (const l of [...lessons].sort(byStart))
    for (const p of l.people) if (fullName(p)) map.set(personKey(p), { person: p, date: l.date });
  return [...map.values()].sort((a, b) => fullName(a.person).localeCompare(fullName(b.person), "it"));
}

/** Copia una persona in una lezione: il certificato resta, il pagamento vale solo nello stesso mese. */
export const copyPerson = (p: Person, fromDate: string, toDate: string): Person => ({
  ...p,
  id: newId(),
  pagato: p.pagato && fromDate.slice(0, 7) === toDate.slice(0, 7),
});

export const sameName = (a: Person, b: Person) => personKey(a) === personKey(b);

// ---- backup ----

const download = (name: string, text: string, type: string) => {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

export const exportBackup = (data: CalendarData) =>
  download(`calendario-team-petrux-${todayKey()}.json`, JSON.stringify(data, null, 2), "application/json");

export function exportCsv(data: CalendarData) {
  const q = (v: string | number | null) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const rows = [["Data", "Inizio", "Fine", "Lezione", "Nome", "Cognome", "Età", "Certificato medico", "Mese pagato", "Note"].map(q).join(";")];
  for (const l of [...data.lessons].sort(byStart))
    for (const p of l.people)
      rows.push([l.date, l.start, l.end, l.title, p.nome, p.cognome, p.eta, p.certificato ? "sì" : "no", p.pagato ? "sì" : "no", p.note].map(q).join(";"));
  // BOM: Excel legge correttamente gli accenti
  download(`presenze-team-petrux-${todayKey()}.csv`, "﻿" + rows.join("\r\n"), "text/csv");
}

/** Legge un backup JSON; restituisce null se il file non è valido. */
export function parseBackup(text: string): CalendarData | null {
  try {
    const d = JSON.parse(text) as CalendarData;
    if (!Array.isArray(d.lessons)) return null;
    const ok = d.lessons.every((l) => l && typeof l.id === "string" && isDateKey(l.date) && Array.isArray(l.people));
    return ok ? d : null;
  } catch {
    return null;
  }
}
