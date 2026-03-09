import { motion as Motion } from "framer-motion";
import SpotlightCard from "./effects/SpotlightCard";
import TiltCard from "./effects/TiltCard";

export default function ProjectCard({ title, desc, tags, href, github, index = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <TiltCard tiltAmount={5} className="group h-full">
        <SpotlightCard
          className="h-full rounded-2xl glass glass-hover transition-all duration-300"
          spotlightColor="rgba(99, 102, 241, 0.08)"
        >
          <div className="p-5 h-full flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                {title}
              </h3>

              <div className="flex gap-2 text-xs font-mono shrink-0">
                {href && (
                  <a
                    className="text-zinc-500 hover:text-indigo-400 transition-colors"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    live
                  </a>
                )}
                {github && (
                  <a
                    className="text-zinc-500 hover:text-indigo-400 transition-colors"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    src
                  </a>
                )}
              </div>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-zinc-400 flex-1">
              {desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[11px] font-mono text-zinc-500
                           group-hover:border-indigo-500/20 group-hover:text-zinc-400 transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </TiltCard>
    </Motion.div>
  );
}
