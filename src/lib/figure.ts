// Figure stilizzate degli esercizi: un omino visto di lato disegnato in SVG a partire dagli angoli
// delle articolazioni. Niente immagini da scaricare: funziona offline e pesa pochissimo.
//
// Angoli in gradi. Busto e testa: 0 = verso l'alto, positivo = inclinato in avanti (verso destra).
// Braccia, gambe e piedi: 0 = verso il basso, 90 = in avanti orizzontale, 180 = verso l'alto,
// negativo = all'indietro. L'omino guarda a destra; "flip" lo fa guardare a sinistra.

import { POSES } from "./poses";

/** [braccio, avambraccio] */
export type Arm = [number, number];
/** [coscia, gamba, piede] */
export type Leg = [number, number, number];

export interface Pose {
  /** Inclinazione del busto (anca → spalle). */
  torso: number;
  /** Inclinazione della testa rispetto al busto. */
  head?: number;
  /** Braccio dal lato di chi guarda (davanti). */
  arm: Arm;
  /** Braccio dall'altro lato (dietro, più chiaro). */
  arm2: Arm;
  leg: Leg;
  leg2: Leg;
}

export type Joint = "hand" | "hand2" | "elbow" | "elbow2" | "foot" | "foot2" | "knee" | "knee2" | "hip" | "shoulder" | "head";

export type Prop =
  | { type: "kettlebell" | "dumbbell" | "medball" | "plate"; at?: Joint }
  | { type: "barbell"; at?: Joint }
  | { type: "box"; x: number; w?: number; h?: number }
  | { type: "bench"; x: number; w?: number; h?: number }
  | { type: "bag"; x: number }
  | { type: "pullbar" }
  | { type: "rope" }
  | { type: "cone"; x: number }
  | { type: "line"; x: number };

export interface Arrow {
  /** Articolazione da cui parte la freccia. */
  at: Joint;
  dx: number;
  dy: number;
  /** Curvatura: positivo piega a sinistra del verso della freccia. */
  bend?: number;
  /** Persona a cui si riferisce l'articolazione (0 = principale, 1 = compagno). */
  who?: 0 | 1;
}

export interface Person {
  /** Posizione, o il nome di una posizione di poses.ts. */
  pose: Pose | string;
  /** Guarda a sinistra. */
  flip?: boolean;
  /** Spostamento orizzontale dell'anca rispetto al centro del riquadro. */
  x?: number;
  /** Sollevato da terra (salti). */
  air?: number;
  gloves?: boolean;
  /** Compagno: disegnato in grigio. */
  partner?: boolean;
  /** Mani che afferrano un punto di un'altra persona (o della stessa): il braccio si piega da solo. */
  reach?: { hand?: Target; hand2?: Target };
}

export interface Target {
  who: number;
  at: Joint;
  dx?: number;
  dy?: number;
}

export interface Frame {
  /** Didascalia sotto il riquadro: "Partenza", "Spinta", ... */
  label?: string;
  people: Person[];
  props?: Prop[];
  arrows?: Arrow[];
}

export const W = 160;
export const H = 150;
const GROUND = 140;
const L = { torso: 44, neck: 13, head: 8.5, ua: 25, fa: 23, th: 34, sh: 32, foot: 10 };

const rad = (d: number) => (d * Math.PI) / 180;
type P = [number, number];
/** Punto a distanza len da o, nella direzione "angolo da verso il basso". */
const down = (o: P, a: number, len: number): P => [o[0] + Math.sin(rad(a)) * len, o[1] + Math.cos(rad(a)) * len];
/** Come down ma con 0 = verso l'alto (busto, testa). */
const up = (o: P, a: number, len: number): P => [o[0] + Math.sin(rad(a)) * len, o[1] - Math.cos(rad(a)) * len];

type Skeleton = Record<Joint | "elbow" | "elbow2" | "ankle" | "ankle2" | "neck", P>;

function skeleton(p: Pose): Skeleton {
  const hip: P = [0, 0];
  const shoulder = up(hip, p.torso, L.torso);
  const head = up(shoulder, p.torso + (p.head ?? 0), L.neck);
  const neck = up(shoulder, p.torso + (p.head ?? 0), 3);
  const elbow = down(shoulder, p.arm[0], L.ua);
  const hand = down(elbow, p.arm[1], L.fa);
  const elbow2 = down(shoulder, p.arm2[0], L.ua);
  const hand2 = down(elbow2, p.arm2[1], L.fa);
  const knee = down(hip, p.leg[0], L.th);
  const ankle = down(knee, p.leg[1], L.sh);
  const foot = down(ankle, p.leg[2], L.foot);
  const knee2 = down(hip, p.leg2[0], L.th);
  const ankle2 = down(knee2, p.leg2[1], L.sh);
  const foot2 = down(ankle2, p.leg2[2], L.foot);
  return { hip, shoulder, head, neck, elbow, hand, elbow2, hand2, knee, ankle, foot, knee2, ankle2, foot2 };
}

/** Posiziona lo scheletro nel riquadro: appoggiato a terra (o sollevato di "air") e centrato. */
function place(person: Person): Skeleton {
  const s = skeleton(typeof person.pose === "string" ? (POSES[person.pose] ?? POSES["in-piedi"]) : person.pose);
  const pts = Object.values(s);
  const sign = person.flip ? -1 : 1;
  // Il punto più basso tocca terra; la testa conta per il suo raggio.
  const bottom = Math.max(...pts.map((q) => q[1]), s.head[1] + L.head - 3.5);
  const xs = pts.map((q) => q[0] * sign);
  const cx = person.x ?? 0;
  const mid = (Math.min(...xs) + Math.max(...xs)) / 2;
  const dx = person.x === undefined ? W / 2 - mid : W / 2 + cx;
  const dy = GROUND - 3.5 - (person.air ?? 0) - bottom;
  const out = {} as Skeleton;
  for (const k of Object.keys(s) as (keyof Skeleton)[]) out[k] = [s[k][0] * sign + dx, s[k][1] + dy];
  return out;
}

const f = (n: number) => Math.round(n * 10) / 10;
const line = (a: P, b: P, color: string, w: number) =>
  `<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
const poly = (pts: P[], color: string, w: number) =>
  `<polyline points="${pts.map((q) => `${f(q[0])},${f(q[1])}`).join(" ")}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const circle = (c: P, r: number, fill: string, extra = "") =>
  `<circle cx="${f(c[0])}" cy="${f(c[1])}" r="${r}" fill="${fill}"${extra}/>`;
const lerp = (a: P, b: P, t: number): P => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

const C = {
  body: "#2d2a4a",
  far: "#9a97b8",
  shorts: "#a51931",
  shortsFar: "#d98a98",
  partner: "#6f6d86",
  partnerFar: "#c4c3d2",
  prop: "#55536b",
  arrow: "#a51931",
  ground: "#c9cad6",
};

function drawPerson(s: Skeleton, p: Person): string {
  const near = p.partner ? C.partner : C.body;
  const far = p.partner ? C.partnerFar : C.far;
  const sh = p.partner ? C.partnerFar : C.shorts;
  const shFar = p.partner ? C.partnerFar : C.shortsFar;
  const out: string[] = [];
  // Lato lontano, dietro al busto.
  out.push(poly([s.hip, s.knee2, s.ankle2, s.foot2], far, 7));
  out.push(line(s.hip, lerp(s.hip, s.knee2, 0.36), shFar, 9.5));
  out.push(poly([s.shoulder, s.elbow2, s.hand2], far, 6.5));
  if (p.gloves) out.push(circle(s.hand2, 5.2, shFar));
  // Busto, testa.
  out.push(line(s.hip, s.shoulder, near, 12));
  out.push(line(s.neck, s.head, near, 5));
  out.push(circle(s.head, L.head, near));
  // Lato vicino.
  out.push(poly([s.hip, s.knee, s.ankle, s.foot], near, 7.5));
  out.push(line(s.hip, lerp(s.hip, s.knee, 0.36), sh, 10));
  out.push(line(lerp(s.hip, s.shoulder, 0.0), lerp(s.hip, s.shoulder, 0.1), sh, 12.5));
  out.push(poly([s.shoulder, s.elbow, s.hand], near, 7));
  if (p.gloves) out.push(circle(s.hand, 5.6, sh));
  return out.join("");
}

function drawProp(pr: Prop, s: Skeleton): string {
  const at = (j?: Joint): P => (j ? s[j] : lerp(s.hand, s.hand2, 0.5));
  switch (pr.type) {
    case "kettlebell": {
      const [x, y] = at(pr.at);
      return `<path d="M${f(x - 4)} ${f(y + 2)} Q${f(x)} ${f(y - 6)} ${f(x + 4)} ${f(y + 2)}" fill="none" stroke="${C.prop}" stroke-width="2.5"/>${circle([x, y + 9], 7.5, C.prop)}`;
    }
    case "dumbbell": {
      const [x, y] = at(pr.at);
      return `<rect x="${f(x - 7)}" y="${f(y - 2)}" width="14" height="4" rx="1" fill="${C.prop}"/><rect x="${f(x - 9)}" y="${f(y - 5)}" width="4" height="10" rx="1.5" fill="${C.prop}"/><rect x="${f(x + 5)}" y="${f(y - 5)}" width="4" height="10" rx="1.5" fill="${C.prop}"/>`;
    }
    case "medball":
      return circle(at(pr.at), 9, C.prop, ` stroke="#fff" stroke-width="1"`);
    case "plate":
      return circle(at(pr.at), 11, "none", ` stroke="${C.prop}" stroke-width="5"`);
    case "barbell": {
      const c = at(pr.at);
      return `${circle(c, 15, "#ffffff00", ` stroke="${C.prop}" stroke-width="5"`)}${circle(c, 2.5, C.prop)}`;
    }
    case "box": {
      const w = pr.w ?? 40, h = pr.h ?? 34;
      return `<rect x="${pr.x}" y="${GROUND - h}" width="${w}" height="${h}" rx="2" fill="#e3e3ec" stroke="${C.prop}" stroke-width="2"/>`;
    }
    case "bench": {
      const w = pr.w ?? 70, h = pr.h ?? 26;
      return `<rect x="${pr.x}" y="${GROUND - h}" width="${w}" height="6" rx="2" fill="${C.prop}"/><line x1="${pr.x + 8}" y1="${GROUND - h}" x2="${pr.x + 8}" y2="${GROUND}" stroke="${C.prop}" stroke-width="3"/><line x1="${pr.x + w - 8}" y1="${GROUND - h}" x2="${pr.x + w - 8}" y2="${GROUND}" stroke="${C.prop}" stroke-width="3"/>`;
    }
    case "bag":
      return `<line x1="${pr.x + 11}" y1="0" x2="${pr.x + 11}" y2="10" stroke="${C.prop}" stroke-width="2"/><rect x="${pr.x}" y="10" width="22" height="92" rx="9" fill="#a51931" opacity="0.9"/><rect x="${pr.x}" y="28" width="22" height="5" fill="#fff" opacity="0.7"/>`;
    case "pullbar": {
      const y = Math.min(s.hand[1], s.hand2[1]) - 1;
      return `<line x1="10" y1="${f(y)}" x2="${W - 10}" y2="${f(y)}" stroke="${C.prop}" stroke-width="4" stroke-linecap="round"/>`;
    }
    case "rope": {
      const a = s.hand, b = s.hand2;
      const low = Math.max(s.foot[1], s.foot2[1]) + 3;
      return `<path d="M${f(a[0])} ${f(a[1])} C${f(a[0] + 30)} ${f(low + 10)} ${f(b[0] - 30)} ${f(low + 10)} ${f(b[0])} ${f(b[1])}" fill="none" stroke="${C.shorts}" stroke-width="1.8"/>`;
    }
    case "cone":
      return `<path d="M${pr.x - 7} ${GROUND} L${pr.x} ${GROUND - 16} L${pr.x + 7} ${GROUND} Z" fill="#e8762c"/>`;
    case "line":
      return `<line x1="${pr.x}" y1="${GROUND + 1}" x2="${pr.x}" y2="${GROUND - 4}" stroke="${C.arrow}" stroke-width="3"/>`;
  }
}

function drawArrow(a: Arrow, s: Skeleton): string {
  const [x1, y1] = s[a.at];
  const x2 = x1 + a.dx, y2 = y1 + a.dy;
  const len = Math.hypot(a.dx, a.dy) || 1;
  const nx = -a.dy / len, ny = a.dx / len;
  const b = a.bend ?? 0;
  const cx = (x1 + x2) / 2 + nx * b, cy = (y1 + y2) / 2 + ny * b;
  // Punta orientata come la tangente finale della curva.
  const tx = x2 - cx, ty = y2 - cy, tl = Math.hypot(tx, ty) || 1;
  const ux = tx / tl, uy = ty / tl;
  const head = [
    [x2, y2],
    [x2 - ux * 7 - uy * 4, y2 - uy * 7 + ux * 4],
    [x2 - ux * 7 + uy * 4, y2 - uy * 7 - ux * 4],
  ];
  return `<path d="M${f(x1)} ${f(y1)} Q${f(cx)} ${f(cy)} ${f(x2 - ux * 4)} ${f(y2 - uy * 4)}" fill="none" stroke="${C.arrow}" stroke-width="2.2" stroke-dasharray="4 3"/><polygon points="${head.map((q) => q.map(f).join(",")).join(" ")}" fill="${C.arrow}"/>`;
}

/** Gomito per portare la mano su target (cinematica inversa a due segmenti, gomito verso il basso). */
function reachTo(s: Skeleton, side: "" | "2", target: P) {
  const sh = s.shoulder;
  const dx = target[0] - sh[0], dy = target[1] - sh[1];
  const d = Math.min(Math.hypot(dx, dy), L.ua + L.fa - 0.01);
  const base = Math.atan2(dy, dx);
  const cos = (L.ua * L.ua + d * d - L.fa * L.fa) / (2 * L.ua * d);
  const a = Math.acos(Math.max(-1, Math.min(1, cos)));
  const pick = (sg: number): P => [sh[0] + Math.cos(base + sg * a) * L.ua, sh[1] + Math.sin(base + sg * a) * L.ua];
  const e1 = pick(1), e2 = pick(-1);
  const elbow = e1[1] >= e2[1] ? e1 : e2;
  const hand: P = [sh[0] + Math.cos(base) * d, sh[1] + Math.sin(base) * d];
  s[`elbow${side}`] = elbow;
  s[`hand${side}`] = hand;
}

/** Riquadro che contiene tutte le persone (testa compresa). */
function bounds(skels: Skeleton[]) {
  const pts = skels.flatMap((s) => [...Object.values(s), [s.head[0], s.head[1] - L.head] as P]);
  return {
    x0: Math.min(...pts.map((q) => q[0])) - 7,
    x1: Math.max(...pts.map((q) => q[0])) + 7,
    y0: Math.min(...pts.map((q) => q[1])) - 5,
  };
}

/** SVG di un riquadro. */
export function frameSvg(fr: Frame): string {
  const skels = fr.people.map(place);
  fr.people.forEach((p, i) => {
    for (const side of ["", "2"] as const) {
      const t = p.reach?.[`hand${side}`];
      if (!t) continue;
      const q = skels[t.who][t.at];
      reachTo(skels[i], side, [q[0] + (t.dx ?? 0) * (fr.people[t.who].flip ? -1 : 1), q[1] + (t.dy ?? 0)]);
    }
  });
  const main = skels[0];
  // Se qualcosa esce dal riquadro, rimpicciolisce tutto tenendo i piedi a terra.
  const b = bounds(skels);
  const k = Math.min(1, (W - 4) / (b.x1 - b.x0), (GROUND - 4) / (GROUND - b.y0));
  let tx = 0;
  const sx0 = W / 2 + (b.x0 - W / 2) * k, sx1 = W / 2 + (b.x1 - W / 2) * k;
  if (sx0 < 2) tx = 2 - sx0;
  else if (sx1 > W - 2) tx = W - 2 - sx1;
  const parts = [
    `<line x1="6" y1="${GROUND}" x2="${W - 6}" y2="${GROUND}" stroke="${C.ground}" stroke-width="2" stroke-linecap="round"/>`,
    `<g transform="translate(${f(W / 2 + tx)} ${GROUND}) scale(${f(k * 1000) / 1000}) translate(${-W / 2} ${-GROUND})">`,
  ];
  const before = (fr.props ?? []).filter((p) => ["box", "bench", "bag", "cone", "line", "pullbar"].includes(p.type));
  const after = (fr.props ?? []).filter((p) => !before.includes(p));
  parts.push(...before.map((p) => drawProp(p, main)));
  // Il compagno dietro, la persona principale davanti.
  fr.people.forEach((p, i) => i > 0 && parts.push(drawPerson(skels[i], p)));
  parts.push(drawPerson(main, fr.people[0]));
  parts.push(...after.map((p) => drawProp(p, main)));
  parts.push(...(fr.arrows ?? []).map((a) => drawArrow(a, skels[a.who ?? 0])));
  parts.push("</g>");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img">${parts.join("")}</svg>`;
}
