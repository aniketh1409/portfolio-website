import { content } from "../data/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mx-5 px-5 py-4 backdrop-blur bg-zinc-950/60 border-b border-white/5">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-wide hover:text-white/90">
          {content.name}
        </a>

        <nav className="flex items-center gap-4 text-sm text-zinc-300">
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

