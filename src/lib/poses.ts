// Posizioni ricorrenti delle figure, richiamate per nome dal catalogo (campo "figure").
// Convenzioni sugli angoli: vedi figure.ts.
import type { Pose } from "./figure";

export const POSES: Record<string, Pose> = {
  "in-piedi": { torso: 0, arm: [5, 5], arm2: [-5, -5], leg: [2, 0, 90], leg2: [-2, 0, 90] },
  guardia: { torso: 4, arm: [35, 165], arm2: [20, 170], leg: [14, 4, 90], leg2: [-14, -18, 60] },
  plank: { torso: 81, arm: [0, 90], arm2: [0, 90], leg: [-81, -81, 5], leg2: [-81, -81, 5] },
  "mezzo-squat": { torso: 34, head: -20, arm: [-45, -30], arm2: [-40, -25], leg: [62, -28, 90], leg2: [60, -30, 90] },
  salto: { torso: 0, arm: [150, 160], arm2: [145, 155], leg: [2, -2, 25], leg2: [-2, -5, 25] },
  "swing-carica": { torso: 62, head: -30, arm: [-25, -30], arm2: [-22, -28], leg: [22, -12, 90], leg2: [20, -14, 90] },
  "swing-alto": { torso: -4, arm: [90, 92], arm2: [88, 90], leg: [3, 0, 90], leg2: [0, 0, 90] },
  "calcio-circolare": { torso: -28, head: 15, arm: [-35, -10], arm2: [70, 172], leg: [92, 96, 105], leg2: [-6, -4, 85] },
  "teep-carica": { torso: -8, arm: [40, 165], arm2: [25, 170], leg: [100, 5, 90], leg2: [-4, -4, 90] },
  "teep-spinta": { torso: -22, arm: [45, 165], arm2: [25, 170], leg: [88, 88, 175], leg2: [-8, -6, 90] },
  plum: { torso: 6, arm: [0, 0], arm2: [0, 0], leg: [10, 0, 90], leg2: [-14, -12, 70] },
  "piegato-in-clinch": { torso: 58, head: 30, arm: [60, 120], arm2: [50, 110], leg: [-5, -10, 90], leg2: [-25, -30, 70] },
};
