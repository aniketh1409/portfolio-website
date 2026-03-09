import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Aurora from "./components/effects/Aurora";
import Particles from "./components/effects/Particles";
import SpotlightCursor from "./components/effects/SpotlightCursor";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="noise min-h-screen text-zinc-50 bg-[#09090b] relative overflow-x-hidden">
      <div className="moving-bg pointer-events-none fixed inset-0 z-0" />

      {/* Animated aurora background */}
      <Aurora className="z-[1]" />

      {/* Particle field */}
      <div className="pointer-events-none fixed inset-0 z-[2]">
        <Particles
          count={isMobile ? 25 : 50}
          color="rgba(99, 102, 241, 0.4)"
          speed={0.2}
          connectDistance={100}
          size={1.5}
        />
      </div>

      {/* Spotlight cursor (desktop only) */}
      {!isMobile && <SpotlightCursor />}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Navbar />
        <main>
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
