import { useEffect } from "react";
import {
  motion as Motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function SpotlightCursor({ size = 400, color = "rgba(99, 102, 241, 0.06)" }) {
  const prefersReducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  const x = useSpring(cursorX, { stiffness: 170, damping: 24, mass: 0.45 });
  const y = useSpring(cursorY, { stiffness: 170, damping: 24, mass: 0.45 });

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const handler = (e) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [cursorX, cursorY, size, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <Motion.div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        x,
        y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
      }}
    />
  );
}
