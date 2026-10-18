import { practice } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="section" id="practice" aria-labelledby="practice-title">
      <div className="shell">
        <p className="kicker">03 — Practice</p>
        <h2 id="practice-title" className="section-title mt-3 max-w-xl">
          What I actually do
        </h2>
        <div className="practice-list">
          {practice.map((item) => (
            <article key={item.index} className="practice-row">
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
