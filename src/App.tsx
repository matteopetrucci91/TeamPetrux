import { useEffect, useState } from "react";
import type { CategoryId } from "./data/exercises";
import { byCategory, categoryById } from "./lib/catalog";
import { DEFAULT_SETTINGS, type LessonSettings } from "./lib/lesson";
import { availableMinutes, fitDraw, generateLesson } from "./lib/plan";
import { useRoute } from "./lib/route";
import { load, save } from "./lib/storage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { SettingsPage } from "./pages/SettingsPage";
import { WorkoutPage, type Workout } from "./pages/WorkoutPage";

const LISTS_KEY = "muaythai:liste:v1";
const SETTINGS_KEY = "muaythai:lezione:v1";
const WORKOUT_KEY = "muaythai:allenamento:v1";
const PAGE = 10;

/** Esercizi mostrati per ogni categoria (solo gli id, in ordine). */
type Lists = Partial<Record<CategoryId, string[]>>;

/** 10 esercizi a caso della categoria che stanno nel tempo della lezione. */
const drawFor = (id: CategoryId, s: LessonSettings) =>
  fitDraw(byCategory.get(id) ?? [], availableMinutes(s), s.round, PAGE).map((e) => e.id);

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

  useEffect(() => save(LISTS_KEY, lists), [lists]);
  useEffect(() => save(SETTINGS_KEY, settings), [settings]);
  useEffect(() => save(WORKOUT_KEY, workout), [workout]);

  // Alla prima apertura di una categoria si estraggono gli esercizi.
  const currentCategory = route.page === "categoria" ? route.id : null;
  useEffect(() => {
    if (currentCategory && !lists[currentCategory]?.length) {
      setLists((prev) => ({ ...prev, [currentCategory]: drawFor(currentCategory, settings) }));
    }
  }, [currentCategory, lists, settings]);

  /** Cambiando durata, liste e lezione automatica si ricaricano per stare nel tempo. */
  const changeSettings = (next: LessonSettings) => {
    setSettings(next);
    setLists((prev) => {
      const out: Lists = {};
      for (const id of Object.keys(prev) as CategoryId[]) out[id] = drawFor(id, next);
      return out;
    });
    if (workout.auto && workout.ids.length) {
      setWorkout({ ids: generateLesson(next).map((e) => e.id), auto: true });
    }
  };

  const toggleWorkout = (id: string) =>
    setWorkout((w) => ({
      ids: w.ids.includes(id) ? w.ids.filter((x) => x !== id) : [...w.ids, id],
      auto: false,
    }));

  const settingsProps = { settings, onSettings: changeSettings };
  const workoutCount = workout.ids.length;

  switch (route.page) {
    case "categoria": {
      const category = categoryById.get(route.id)!;
      return (
        <CategoryPage
          key={route.id}
          category={category}
          ids={lists[route.id] ?? []}
          onChange={(ids) => setLists((prev) => ({ ...prev, [route.id]: ids }))}
          inWorkout={new Set(workout.ids)}
          onToggleWorkout={toggleWorkout}
          workoutCount={workoutCount}
          {...settingsProps}
        />
      );
    }
    case "allenamento":
      return (
        <WorkoutPage
          workout={workout}
          onChange={(ids) => setWorkout({ ids, auto: false })}
          onGenerate={() =>
            setWorkout({ ids: generateLesson(settings).map((e) => e.id), auto: true })
          }
          {...settingsProps}
        />
      );
    case "impostazioni":
      return <SettingsPage workoutCount={workoutCount} {...settingsProps} />;
    default:
      return <CategoriesPage workoutCount={workoutCount} />;
  }
}
