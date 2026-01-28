import { content } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="pt-8 pb-14">
      <p className="text-sm text-zinc-400">
        {content.role} · {content.location}
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        I build <span className="text-[rgb(var(--accent))]">clean, reliable</span>{" "}
        software — <br />
        Web & Mobile apps, Full-Stack development, and Data Tools.
        </h1>


      {/* <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
        {content.subheadline}
      </p> */}

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
        >
          View Projects
        </a>

        <a
          href={`mailto:${content.links.email}`}
          className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
        >
          Contact
        </a>

        {content.links.resume ? (
          <a
            href={content.links.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
          >
            Resume
          </a>
        ) : null}
      </div>

      <div className="mt-6 flex gap-4 text-sm text-zinc-400">
        <a className="hover:text-white" href={content.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {content.links.linkedin ? (
          <a className="hover:text-white" href={content.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        ) : null}
      </div>
    </section>
  );
}
