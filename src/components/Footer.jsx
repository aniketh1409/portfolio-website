import { content } from "../data/content";

export default function Footer() {
  return (
    <footer className="py-10 text-sm text-zinc-500">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {content.name}</p>
        <p className="text-zinc-600">Built with React + Tailwind</p>
      </div>
    </footer>
  );
}
