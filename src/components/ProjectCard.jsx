export default function ProjectCard({ title, desc, tags, href, github }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">{title}</h3>

        <div className="flex gap-2 text-sm">
          {href ? (
            <a className="text-zinc-300 hover:text-white" href={href} target="_blank" rel="noreferrer">
              Live
            </a>
          ) : null}
          {github ? (
            <a className="text-zinc-300 hover:text-white" href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
