import { useEffect, useState } from "react";
import { categoryById, poolFor, toolById } from "./lib/catalog";
import { DoseContext, setCurrentDoses, type CustomDoses } from "./lib/doses";
import { DEFAULT_SETTINGS, type LessonSettings } from "./lib/lesson";
import { availableMinutes, fitDraw } from "./lib/plan";
import { bestLesson } from "./lib/review";
import { useRoute, type Route } from "./lib/route";
import { load, save } from "./lib/storage";
import { Toaster } from "./components/Toast";
import { showToast } from "./lib/toast";
import { CalendarPage } from "./pages/CalendarPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { LessonPage } from "./pages/LessonPage";
import { ListPage } from "./pages/ListPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ToolsPage } from "./pages/ToolsPage";
import { WorkoutPage, type Workout } from "./pages/WorkoutPage";

const LISTS_KEY = "muaythai:liste:v1";
const SETTINGS_KEY = "muaythai:lezione:v1";
const WORKOUT_KEY = "muaythai:allenamento:v1";
const DOSES_KEY = "muaythai:dosi:v1";
const PAGE = 10;

/** Esercizi mostrati per ogni lista (categoria o "attrezzo:<id>"), solo gli id. */
type Lists = Record<string, string[]>;

/** Chiave della lista mostrata nella pagina corrente, se è una lista. */
const listKey = (r: Route) =>
  r.page === "categoria" ? r.id : r.page === "attrezzo" ? `attrezzo:${r.id}` : null;

/** 10 esercizi a caso della lista che stanno nel tempo della lezione. */
const drawFor = (key: string, s: LessonSettings) =>
  fitDraw(poolFor(key), availableMinutes(s), s.round, PAGE).map((e) => e.id);

export default function App() {
  const route = useRoute();
  const [lists, setLists] = useState<Lists>(() => load<Lists>(LISTS_KEY, {}));
  const [settings, setSettings] = useState<LessonSettings>(() => ({
    ...DEFAULT_SETTINGS,
    ...load<Partial<LessonSettings>>(SETTINGS_KEY, {}),
  }));
  const [workout, setWorkout] = useState<Workout>(() =>
    load<Workout>(WORKOUT_KEY, { ids: [], auto: false }),
  );
  const [doses, setDoses] = useState<CustomDoses>(() => load<CustomDoses>(DOSES_KEY, {}));
  setCurrentDoses(doses);

  useEffect(() => save(LISTS_KEY, lists), [lists]);
  useEffect(() => save(SETTINGS_KEY, settings), [settings]);
  useEffect(() => save(WORKOUT_KEY, workout), [workout]);
  useEffect(() => save(DOSES_KEY, doses), [doses]);

  // Alla prima apertura di una lista si estraggono gli esercizi.
  const key = listKey(route);
  useEffect(() => {
    if (key && !lists[key]?.length) {
      setLists((prev) => ({ ...prev, [key]: drawFor(key, settings) }));
    }
  }, [key, lists, settings]);

  /** Cambiando durata, liste e lezione automatica si ricaricano per stare nel tempo. */
  const changeSettings = (next: LessonSettings) => {
    setSettings(next);
    setLists((prev) => Object.fromEntries(Object.keys(prev).map((k) => [k, drawFor(k, next)])));
    if (workout.auto && workout.ids.length) {
      setWorkout({ ids: bestLesson(next).map((e) => e.id), auto: true });
    }
  };

  const setDose = (id: string, dose: string | null) =>
    setDoses((prev) => {
      const next = { ...prev };
      if (dose && dose.trim()) next[id] = dose.trim();
      else delete next[id];
      return next;
    });

  const toggleWorkout = (id: string) => {
    showToast(workout.ids.includes(id) ? "Tolto dalla lezione" : "Aggiunto alla lezione ✓");
    setWorkout((w) => ({
      ids: w.ids.includes(id) ? w.ids.filter((x) => x !== id) : [...w.ids, id],
      auto: false,
    }));
  };

  const settingsProps = { settings, onSettings: changeSettings };
  const workoutCount = workout.ids.length;
  const listProps = key && {
    ids: lists[key] ?? [],
    onChange: (ids: string[]) => setLists((prev) => ({ ...prev, [key]: ids })),
    pool: poolFor(key),
    inWorkout: new Set(workout.ids),
    onToggleWorkout: toggleWorkout,
    workoutCount,
    ...settingsProps,
  };

  let page;
  if (route.page === "categoria" && listProps) {
    const c = categoryById.get(route.id)!;
    page = (
      <ListPage key={key} route="categoria" title={c.label} subtitle={c.description} {...listProps} />
    );
  } else if (route.page === "attrezzo" && listProps) {
    const t = toolById.get(route.id)!;
    page = (
      <ListPage
        key={key}
        route="attrezzo"
        title={t.label}
        eyebrow="Attrezzo"
        subtitle={t.description}
        showCategory
        {...listProps}
      />
    );
  } else if (route.page === "attrezzi") {
    page = <ToolsPage workoutCount={workoutCount} />;
  } else if (route.page === "allenamento") {
    page = (
      <WorkoutPage
        workout={workout}
        onChange={(ids) => setWorkout({ ids, auto: false })}
        onGenerate={() => setWorkout({ ids: bestLesson(settings).map((e) => e.id), auto: true })}
        {...settingsProps}
      />
    );
  } else if (route.page === "calendario") {
    page = <CalendarPage key={route.date ?? "oggi"} workoutCount={workoutCount} date={route.date} />;
  } else if (route.page === "lezione") {
    page = <LessonPage key={route.id} workoutCount={workoutCount} id={route.id} />;
  } else if (route.page === "impostazioni") {
    page = <SettingsPage workoutCount={workoutCount} {...settingsProps} />;
  } else {
    page = <CategoriesPage workoutCount={workoutCount} />;
  }

  return (
    <DoseContext.Provider value={{ custom: doses, setDose }}>
      {page}
      <Toaster />
    </DoseContext.Provider>
  );
}
