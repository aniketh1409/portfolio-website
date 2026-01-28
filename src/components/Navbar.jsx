import { content } from "../data/content";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6">
      <a href="#top" className="text-sm font-semibold tracking-wide hover:text-white/90">
        {content.name}
      </a>

      <nav className="flex items-center gap-4 text-sm text-zinc-300">
        <a className="hover:text-white" href="#projects">Projects</a>
        <a className="hover:text-white" href="#about">About</a>
        <a className="hover:text-white" href="#contact">Contact</a>
      </nav>
    </header>
  );
}
