import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-zinc-50 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900">
      {/* soft background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-50">
      <div className="absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
    </div>


      <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Navbar />
        <main className="py-10">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
