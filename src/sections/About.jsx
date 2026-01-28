import { content } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-xl font-semibold tracking-tight">About</h2>

      <div className="mt-4 grid gap-6 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <p className="text-sm leading-relaxed text-zinc-300">
            I’m a Computer/Software Engineering student who enjoys building products that feel clean and fast —
            from React frontends to Python automation and tooling. I care about clarity, reliability, and
            shipping work that’s easy to maintain.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            Recently I’ve been working around MCP connectors, automation, and app development.
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
