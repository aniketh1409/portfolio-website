import { content } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-xl font-semibold tracking-tight">About</h2>

      <div className="mt-4 grid gap-6 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <p className="text-sm leading-relaxed text-zinc-300">
            I’m a fourth-year Software Engineering student with a strong focus on building reliable, well-structured software systems and understanding how technology works end to end. Through academic projects, internships, and personal work, I’ve gained hands-on experience across backend services, APIs, data pipelines, and application development, with a growing interest in systems that sit at the intersection of software, data, and automation.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            I’ve worked on projects involving Java and Android development, Python-based backend services, SQL databases, and API-driven architectures. In team-based environments, I’ve used Git and GitHub for collaboration, written unit tests (including JUnit), and worked in Agile-style workflows where code quality, clear communication, and ownership mattered. I’ve also explored applied AI and data analysis through projects that combine machine learning, audio processing, and large language models, giving me experience translating complex technical outputs into clear, usable results.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            Alongside my technical work, I value consistency, curiosity, and continuous improvement. Outside academics, I spend time leetcoding for fun, playing guitar and composing music, staying active through soccer and working out, and cooking-habits that help me stay balanced and disciplined. I approach both my work and interests with the same mindset: understand deeply, build thoughtfully, and keep getting better.
        </p>
        </div>

        <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-medium text-zinc-200">Skills</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {content.skills.map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
