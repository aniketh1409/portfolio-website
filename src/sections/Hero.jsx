import { content } from "../data/content";
import avatar from "../assets/avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";

function LinkRow({ href, icon, label, sublabel }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2
                 text-sm text-zinc-200 hover:border-white/20 hover:bg-white/10 transition"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 border border-white/10 text-zinc-200
                       group-hover:text-[rgb(var(--accent))] transition">
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-medium">{label}</span>
        {sublabel ? <span className="text-xs text-zinc-400">{sublabel}</span> : null}
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-10 pb-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
        {/* Left: headline */}
        <div>
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="Profile"
              className="h-14 w-14 rounded-full border border-white/15 object-cover"
            />

            <div className="leading-tight">
              <p className="text-sm font-semibold text-zinc-100">{content.name}</p>
              <p className="text-sm text-zinc-400">
                {content.role} · {content.location}
              </p>
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-3xl">
            I build{" "}
            <span className="text-[rgb(var(--accent))]">clean, reliable</span>{" "}
            software — Web & Mobile apps, Full-Stack development, and Data Tools.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
            React · FastAPI · Android · Firebase · Terraform · AWS · DuckDB
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition"
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
        </div>

        {/* Right: stacked links */}
        <aside className="lg:pt-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Links</p>
            <div className="mt-3 flex flex-col gap-2">
              <LinkRow
                href={content.links.github}
                icon={<FaGithub size={18} />}
                label="GitHub"
                sublabel="aniketh1409"
              />
              <LinkRow
                href={content.links.linkedin}
                icon={<FaLinkedin size={18} />}
                label="LinkedIn"
                sublabel="Aniketh Kini"
              />
              <LinkRow
                href={`mailto:${content.links.email}`}
                icon={<HiOutlineMail size={18} />}
                label="Email"
                sublabel={content.links.email}
              />
              {content.links.resume ? (
                <LinkRow
                  href={content.links.resume}
                  icon={<HiOutlineDocumentText size={18} />}
                  label="Resume"
                  sublabel="PDF"
                />
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

