import { motion as Motion } from "framer-motion";
import { content } from "../data/content";
import ProjectCard from "../components/ProjectCard";
import SpotlightCard from "../components/effects/SpotlightCard";
import TiltCard from "../components/effects/TiltCard";
import ScrollReveal from "../components/effects/ScrollReveal";

export default function Projects() {
  const featured = content.projects.filter((p) => p.featured);
  const rest = content.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20">
      <ScrollReveal>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">
              // projects
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What I've built
            </h2>
            <p className="mt-2 text-sm text-zinc-500 max-w-lg">
              A selection of projects spanning AI systems, distributed backends,
              web apps, mobile development, and game dev.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Featured row */}
      {featured.length > 0 && (
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard tiltAmount={4} className="group h-full">
                <SpotlightCard
                  className="h-full rounded-2xl overflow-hidden relative glass transition-all duration-300 hover:border-indigo-500/20"
                  spotlightColor="rgba(99, 102, 241, 0.1)"
                >
                  {/* Accent glow */}
                  <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/15 transition-all duration-700" />

                  <div className="relative p-6 sm:p-7 h-full flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-6 rounded-full bg-indigo-500" />
                      <p className="text-[11px] uppercase tracking-widest text-indigo-400 font-mono">
                        Featured
                      </p>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-400 flex-1">
                      {p.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags?.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-indigo-500/20 bg-indigo-500/5 px-2 py-0.5 text-[11px] font-mono text-indigo-300/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex gap-3">
                      {p.href && (
                        <a
                          className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950
                                   hover:bg-zinc-200 transition-all duration-200"
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live
                          <svg className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {p.github && (
                        <a
                          className="group/btn inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-300
                                   hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-200"
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source
                          <svg className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </Motion.div>
          ))}
        </div>
      )}

      {/* Rest grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </section>
  );
}
