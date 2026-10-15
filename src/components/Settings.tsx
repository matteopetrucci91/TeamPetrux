import type { LessonSettings } from "../lib/lesson";

export type SettingsProps = {
  settings: LessonSettings;
  onSettings: (s: LessonSettings) => void;
};

function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string; hint?: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="setting">
      <span className="setting-label">{label}</span>
      <div className="segmented" role="radiogroup" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            role="radio"
            aria-checked={o.value === value}
            className={o.value === value ? "active" : ""}
            onClick={() => o.value !== value && onChange(o.value)}
          >
            {o.label}
            {o.hint && <small>{o.hint}</small>}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SettingsPanel({
  settings,
  onSettings,
  compact = false,
}: SettingsProps & { compact?: boolean }) {
  return (
    <section className={compact ? "settings compact" : "settings"}>
      <Segmented
        label="Durata lezione"
        value={settings.lesson}
        options={[
          { value: 60, label: "1 ora" },
          { value: 90, label: "1 ora e 30" },
        ]}
        onChange={(lesson) => onSettings({ ...settings, lesson })}
      />
      <Segmented
        label="Durata ripresa"
        value={settings.round}
        options={[
          { value: 2, label: "2 min", hint: "leggero" },
          { value: 3, label: "3 min", hint: "agonistico" },
        ]}
        onChange={(round) => onSettings({ ...settings, round })}
      />
    </section>
  );
}
