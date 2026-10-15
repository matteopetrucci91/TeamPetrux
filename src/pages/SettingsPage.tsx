import { SettingsPanel, type SettingsProps } from "../components/Settings";
import { Topbar } from "../components/Topbar";
import { WARMUP_MIN } from "../lib/plan";

export function SettingsPage({
  settings,
  onSettings,
  workoutCount,
}: SettingsProps & { workoutCount: number }) {
  return (
    <div className="page">
      <Topbar
        route="impostazioni"
        workoutCount={workoutCount}
        title="Impostazioni lezione"
        subtitle="Valgono per le liste delle categorie e per la creazione dell'allenamento."
      />
      <main>
        <SettingsPanel settings={settings} onSettings={onSettings} />
        <div className="info">
          <p>
            I primi <strong>{WARMUP_MIN} minuti</strong> sono sempre di riscaldamento: restano{" "}
            <strong>{settings.lesson - WARMUP_MIN} minuti</strong> per gli esercizi.
          </p>
          <p>
            Quando cambi durata, le liste delle categorie e la lezione automatica si ricaricano da sole
            per stare nel tempo. Gli esercizi a riprese da 2–3 minuti seguono la durata della ripresa.
          </p>
          <p>I tempi degli esercizi sono stime calcolate dal dosaggio, con 1 minuto di passaggio tra uno e l'altro.</p>
        </div>
      </main>
    </div>
  );
}
