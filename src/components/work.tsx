import { useMemo, useState } from "react";
import { categories, projects, type Filter } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Work() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="work-head">
          <div>
            <p className="kicker">01 — Work</p>
            <h2 id="work-title" className="section-title mt-3">
              Selected pieces
            </h2>
          </div>
          <div className="chip-row" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={cn("chip press", filter === category && "chip-on")}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
          {filter === "All" ? "" : ` in ${filter}`}.
        </p>
        {visible.length === 0 ? (
          <p className="text-muted">Nothing filed under {filter} yet.</p>
        ) : (
          <ul className="work-grid" key={filter}>
            {visible.map((project, index) => (
              <li key={project.id} className={filter === "All" && index === 0 ? "is-lead" : undefined}>
                <article className="project-card" tabIndex={0}>
                  <div className="project-frame">
                    <img
                      src={project.image}
                      alt={project.alt}
                      style={{ objectPosition: project.objectPosition }}
                      loading={project.index === "01" ? "eager" : "lazy"}
                    />
                    <span className="note-hint">Note</span>
                    <div className="project-plate">
                      <p className="plate-role">{project.role}</p>
                      <p>{project.summary}</p>
                    </div>
                  </div>
                  <div className="project-meta">
                    <p className="project-kicker">
                      {project.index} · {project.category} · {project.year}
                    </p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
