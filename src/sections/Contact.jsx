import { content } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight">Let’s talk</h2>
        <p className="mt-2 text-sm text-zinc-300">
          If you want to collaborate, chat about an opportunity, or see more details on any project, email me.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${content.links.email}`}
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition"
          >
            Email me
          </a>

          <a
            href={content.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
