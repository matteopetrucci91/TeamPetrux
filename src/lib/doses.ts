// Dosaggi personalizzati dall'allenatore (ripetizioni, serie, tempo), per esercizio.
import { createContext, useContext } from "react";

export type CustomDoses = Record<string, string>;

let current: CustomDoses = {};

/** Aggiornato da App a ogni render, così stime e liste usano sempre i dosaggi scelti. */
export const setCurrentDoses = (d: CustomDoses) => {
  current = d;
};
export const customDoseOf = (id: string): string | undefined => current[id];

export const DoseContext = createContext<{
  custom: CustomDoses;
  setDose: (id: string, dose: string | null) => void;
}>({ custom: {}, setDose: () => {} });

export const useDoses = () => useContext(DoseContext);
