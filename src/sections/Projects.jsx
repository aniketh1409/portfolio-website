import { content } from "../data/content";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featured = content.projects.filter((p) => p.featured);
  const rest = content.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-sm text-zinc-400">A few things I’ve built recently.</p>
        </div>
      </div>

      {/* Featured row */}
      {featured.length > 0 ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {featured.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 overflow-hidden relative"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[rgb(var(--accent))]/15 blur-3xl" />
              <p className="text-xs uppercase tracking-wider text-zinc-400">Featured</p>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                {p.href ? (
                  <a
                    className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                ) : null}
                {p.github ? (
                  <a
                    className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* Rest grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}


