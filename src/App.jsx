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
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const check = () => {
      const lowCpu = navigator.hardwareConcurrency
        ? navigator.hardwareConcurrency <= 4
        : false;
      const lowMemory = navigator.deviceMemory
        ? navigator.deviceMemory <= 4
        : false;

      setIsMobile(window.innerWidth < 768);
      setReducedMotion(mediaQuery.matches);
      setIsLowPerfDevice(lowCpu || lowMemory);
    };

    check();
    window.addEventListener("resize", check);
    mediaQuery.addEventListener("change", check);

    return () => {
      window.removeEventListener("resize", check);
      mediaQuery.removeEventListener("change", check);
    };
  }, []);

  const enableHeavyEffects = !isLowPerfDevice && !isMobile && !reducedMotion;
  const showParticles = !reducedMotion;

  return (
    <div className="noise min-h-screen text-zinc-50 bg-[#09090b] relative overflow-x-hidden">
      <div className="moving-bg pointer-events-none fixed inset-0 z-0" />

      {/* Animated aurora background */}
      {enableHeavyEffects && <Aurora className="z-[1]" />}

      {/* Particle field */}
      {showParticles && (
        <div className="pointer-events-none fixed inset-0 z-[2]">
          <Particles
            count={isMobile ? 12 : isLowPerfDevice ? 18 : 28}
            color="rgba(99, 102, 241, 0.35)"
            speed={isLowPerfDevice ? 0.12 : 0.18}
            connectDistance={isLowPerfDevice ? 0 : 70}
            size={isLowPerfDevice ? 1.1 : 1.3}
            maxFps={isLowPerfDevice ? 24 : 30}
          />
        </div>
      )}

      {/* Spotlight cursor (desktop only) */}
      {enableHeavyEffects && <SpotlightCursor />}

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
