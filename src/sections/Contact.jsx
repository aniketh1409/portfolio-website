import { motion as Motion } from "framer-motion";
import { content } from "../data/content";
import ScrollReveal from "../components/effects/ScrollReveal";
import SpotlightCard from "../components/effects/SpotlightCard";
import MagneticButton from "../components/effects/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <ScrollReveal>
        <SpotlightCard
          className="rounded-2xl glass border-gradient overflow-hidden"
          spotlightColor="rgba(99, 102, 241, 0.08)"
        >
          <div className="relative p-8 sm:p-10">
            {/* Background glow */}
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">
                // contact
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Let's talk
              </h2>
              <p className="mt-3 text-sm text-zinc-400 max-w-lg">
                If you want to collaborate, chat about an opportunity, or see
                more details on any project -- reach out.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton>
                  <a
                    href={`mailto:${content.links.email}`}
                    className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white
                             hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email me
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={content.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200
                             hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={content.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200
                             hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                </MagneticButton>
              </div>

              {/* Email display */}
              <Motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-xs font-mono text-zinc-600"
              >
                {content.links.email}
              </Motion.p>
            </div>
          </div>
        </SpotlightCard>
      </ScrollReveal>
    </section>
  );
}
