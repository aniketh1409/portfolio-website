import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { content } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["contact", "about", "projects", "top"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`sticky top-0 z-50 -mx-6 sm:-mx-8 px-6 sm:px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#09090b]/70 border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-semibold tracking-wide"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 group-hover:animate-ping" />
          <span className="text-zinc-200 transition group-hover:text-white">
            {content.name.split(" ")[0]}
          </span>
          <span className="hidden sm:inline text-zinc-500 font-normal">
            / portfolio
          </span>
        </a>

        <nav className="flex items-center gap-1">
          {links.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {label}
                <AnimatePresence>
                  {isActive && (
                    <Motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </nav>
      </div>
    </Motion.header>
  );
}
