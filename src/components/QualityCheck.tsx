import type { Review } from "../lib/review";

const ICON = { ok: "✓", warn: "!", bad: "✕" } as const;

/** Voto e consigli del controllo qualità. */
export function QualityCheck({ review }: { review: Review }) {
  const tone = review.score >= 85 ? "ok" : review.score >= 60 ? "warn" : "bad";
  return (
    <section className="quality" aria-label="Controllo qualità">
      <header>
        <span className={`score ${tone}`}>{review.score}</span>
        <div>
          <h2>Controllo qualità</h2>
          <p>
            <strong>{review.verdict}</strong> · voto su 100
          </p>
        </div>
      </header>
      <ul>
        {review.items.map((it) => (
          <li key={it.text} className={it.level}>
            <span className="mark">{ICON[it.level]}</span>
            {it.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
