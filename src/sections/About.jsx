import { motion as Motion } from "framer-motion";
import { content } from "../data/content";
import ScrollReveal from "../components/effects/ScrollReveal";

export default function About() {
  // Group skills by category for visual interest
  const skillCategories = [
    {
      label: "Languages",
      items: ["Python", "Java", "C/C++", "SQL", "JavaScript", "TypeScript", "Kotlin", "Rust", "GDScript"],
    },
    {
      label: "Frameworks",
      items: ["React", "Next.js", "Vite", "FastAPI", "Django", "Firebase", "Node/Express"],
    },
    {
      label: "Data & Infra",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Qdrant", "Docker", "Terraform (AWS)", "DuckDB", "Linux", "Git", "Power BI"],
    },
  ];

  return (
    <section id="about" className="py-20">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">
          // about
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          About me
        </h2>
      </ScrollReveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        {/* Left: bio */}
        <div className="lg:col-span-3 space-y-4">
          <ScrollReveal delay={0.1}>
            <p className="text-sm leading-relaxed text-zinc-400">
              I'm a fourth-year Software Engineering student focused on building
              reliable, well-structured software systems. Through academic
              projects, internships, and personal work, I've gained hands-on
              experience across backend services, APIs, data pipelines, and
              application development -- with a growing interest in systems that
              sit at the intersection of software, data, and automation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-sm leading-relaxed text-zinc-400">
              I've worked on projects involving Java and Android development,
              Python-based backend services, distributed task systems, SQL
              databases, vector databases, and API-driven architectures. In
              team-based environments, I've used Git and GitHub for
              collaboration, written unit tests (including JUnit), and worked in
              Agile-style workflows where code quality and ownership mattered.
              I've also explored applied AI through projects combining machine
              learning, audio processing, and large language models.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-sm leading-relaxed text-zinc-400">
              Outside code, I spend time leetcoding for fun, playing guitar and
              composing music, staying active through soccer and working out, and
              cooking. I approach both work and interests with the same mindset:
              understand deeply, build thoughtfully, and keep getting better.
            </p>
          </ScrollReveal>
        </div>

        {/* Right: skills */}
        <div className="lg:col-span-2">
          <ScrollReveal delay={0.2} direction="right">
            <div className="rounded-2xl glass p-6 border-gradient">
              <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-mono">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-500" />
                Tech Stack
              </p>

              <div className="mt-5 space-y-5">
                {skillCategories.map((cat, catIndex) => (
                  <div key={cat.label}>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-600 font-mono mb-2">
                      {cat.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items
                        .filter((s) => content.skills.includes(s))
                        .map((s, i) => (
                          <Motion.span
                            key={s}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: 0.3 + catIndex * 0.1 + i * 0.03,
                            }}
                            whileHover={{
                              scale: 1.05,
                              borderColor: "rgba(99, 102, 241, 0.4)",
                              color: "rgba(165, 180, 252, 1)",
                            }}
                            className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-zinc-500
                                     cursor-default transition-all duration-200"
                          >
                            {s}
                          </Motion.span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
