import { motion as Motion } from "framer-motion";
import { content } from "../data/content";
import avatar from "../assets/avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import SplitText from "../components/effects/SplitText";
import GradientText from "../components/effects/GradientText";
import Typewriter from "../components/effects/Typewriter";
import MagneticButton from "../components/effects/MagneticButton";

function LinkRow({ href, icon, label, sublabel, delay = 0 }) {
  return (
    <Motion.a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group flex items-center gap-3 rounded-xl glass glass-hover px-3 py-2.5
                 text-sm text-zinc-200 transition-all duration-300"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300
                       group-hover:text-indigo-400 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-300">
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-medium">{label}</span>
        {sublabel && (
          <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
            {sublabel}
          </span>
        )}
      </span>
    </Motion.a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-start">
        {/* Left: headline */}
        <div>
          {/* Avatar + identity */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="relative">
              <img
                src={avatar}
                alt="Profile"
                className="h-16 w-16 rounded-full border-2 border-indigo-500/30 object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-emerald-500 border-2 border-[#09090b]" />
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold text-zinc-100 font-mono">
                <Typewriter text={content.name} speed={40} />
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">
                {content.role} &middot; {content.location}
              </p>
            </div>
          </Motion.div>

          {/* Main headline */}
          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
            <SplitText
              text="I build"
              split="words"
              delay={0.3}
              className="text-zinc-100"
            />{" "}
            <GradientText className="font-extrabold text-glow">
              clean, reliable
            </GradientText>{" "}
            <SplitText
              text="software --"
              split="words"
              delay={0.5}
              className="text-zinc-100"
            />
            <br className="hidden sm:block" />{" "}
            <SplitText
              text="web apps, distributed systems, and AI tools."
              split="words"
              delay={0.7}
              className="text-zinc-300"
              duration={0.04}
            />
          </h1>

          {/* Tech stack subtitle */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {content.subheadline.split(" . ").map((tech, i) => (
              <Motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + i * 0.05, duration: 0.3 }}
                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-zinc-400
                         hover:border-indigo-500/30 hover:text-indigo-300 transition-all duration-300 cursor-default"
              >
                {tech}
              </Motion.span>
            ))}
          </Motion.div>

          {/* CTA buttons */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white
                         hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
              >
                <span className="relative z-10">View Projects</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={`mailto:${content.links.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-200
                         hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
              >
                Contact
              </a>
            </MagneticButton>

            {content.links.resume && (
              <MagneticButton>
                <a
                  href={content.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-200
                           hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
                >
                  Resume
                </a>
              </MagneticButton>
            )}
          </Motion.div>
        </div>

        {/* Right: stacked links */}
        <Motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:pt-4"
        >
          <div className="rounded-2xl glass p-5 border-gradient">
            <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500 font-mono">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <LinkRow
                href={content.links.github}
                icon={<FaGithub size={18} />}
                label="GitHub"
                sublabel="aniketh1409"
                delay={0.6}
              />
              <LinkRow
                href={content.links.linkedin}
                icon={<FaLinkedin size={18} />}
                label="LinkedIn"
                sublabel="Aniketh Kini"
                delay={0.7}
              />
              <LinkRow
                href={`mailto:${content.links.email}`}
                icon={<HiOutlineMail size={18} />}
                label="Email"
                sublabel={content.links.email}
                delay={0.8}
              />
              {content.links.resume && (
                <LinkRow
                  href={content.links.resume}
                  icon={<HiOutlineDocumentText size={18} />}
                  label="Resume"
                  sublabel="PDF"
                  delay={0.9}
                />
              )}
            </div>
          </div>
        </Motion.aside>
      </div>
    </section>
  );
}
