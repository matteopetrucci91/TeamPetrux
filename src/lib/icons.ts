// Icone (emoji) di categorie e attrezzi: rendono le schede più riconoscibili a colpo d'occhio.
import type { CategoryId, ToolId } from "../data/exercises";

export const CATEGORY_ICON: Record<CategoryId, string> = {
  tecnica: "🦵",
  clinch: "🤼",
  velocita: "⚡",
  agilita: "🏃",
  resistenza: "❤️",
  "forza-esplosiva": "💥",
  "forza-massimale": "🏋️",
  "forza-resistente": "🔋",
  core: "🎯",
  mobilita: "🧘",
};

export const TOOL_ICON: Record<ToolId, string> = {
  "corpo-libero": "🤸",
  compagno: "🤝",
  "palla-medica": "🏐",
  corda: "➰",
  kettlebell: "🔔",
  elastico: "🎗️",
  sacco: "🥊",
  pao: "🛡️",
  bilanciere: "🏋️",
  manubri: "💪",
  sbarra: "🧗",
  "battle-rope": "🌊",
  sandbag: "🎒",
  pneumatico: "⭕",
  "coni-scaletta": "🔺",
};
