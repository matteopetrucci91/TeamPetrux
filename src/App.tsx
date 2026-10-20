import { useEffect, useState } from "react";
import { categoryById, poolFor, toExercises, toolById } from "./lib/catalog";
import { DoseContext, setCurrentDoses, type CustomDoses } from "./lib/doses";
import { DEFAULT_SETTINGS, type LessonSettings } from "./lib/lesson";
import { insertInOrder } from "./lib/phases";
import { totalMinutes } from "./lib/plan";
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

const SETTINGS_KEY = "muaythai:lezione:v1";
const WORKOUT_KEY = "muaythai:allenamento:v1";
const DOSES_KEY = "muaythai:dosi:v1";

/** Chiave della lista mostrata nella pagina corrente, se è una lista. */
const listKey = (r: Route) =>
  r.page === "categoria" ? r.id : r.page === "attrezzo" ? `attrezzo:${r.id}` : null;

export default function App() {
  const route = useRoute();
  const [settings, setSettings] = useState<LessonSettings>(() => ({
    ...DEFAULT_SETTINGS,
    ...load<Partial<LessonSettings>>(SETTINGS_KEY, {}),
  }));
  const [workout, setWorkout] = useState<Workout>(() =>
    load<Workout>(WORKOUT_KEY, { ids: [], auto: false }),
  );
  const [doses, setDoses] = useState<CustomDoses>(() => load<CustomDoses>(DOSES_KEY, {}));
  setCurrentDoses(doses);

  useEffect(() => save(SETTINGS_KEY, settings), [settings]);
  useEffect(() => save(WORKOUT_KEY, workout), [workout]);
  useEffect(() => save(DOSES_KEY, doses), [doses]);

  const key = listKey(route);

  /** Cambiando durata o ritmo, la lezione automatica si ricrea per stare nel tempo. */
  const changeSettings = (next: LessonSettings) => {
    setSettings(next);
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
      ids: w.ids.includes(id)
        ? w.ids.filter((x) => x !== id)
        : insertInOrder(toExercises(w.ids), toExercises([id])[0]).map((e) => e.id),
      auto: false,
    }));
  };

  const settingsProps = { settings, onSettings: changeSettings };
  const workoutCount = workout.ids.length;
  const listProps = key && {
    pool: poolFor(key),
    workoutMinutes: totalMinutes(toExercises(workout.ids), settings.round),
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
