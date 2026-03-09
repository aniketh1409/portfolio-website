import { motion as Motion } from "framer-motion";
import { content } from "../data/content";

export default function Footer() {
  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-t border-white/[0.04]"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-600 font-mono">
          &copy; {new Date().getFullYear()} {content.name}
        </p>
        <div className="flex items-center gap-4 text-xs text-zinc-700">
          <span className="font-mono">React + Vite + Tailwind + Framer Motion</span>
          <span className="inline-block h-1 w-1 rounded-full bg-zinc-800" />
          <a
            href={content.links.github + "/portfolio-website"}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-zinc-400 transition-colors font-mono"
          >
            source
          </a>
        </div>
      </div>
    </Motion.footer>
  );
}
