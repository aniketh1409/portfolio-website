import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function SpotlightCursor({ size = 400, color = "rgba(99, 102, 241, 0.06)" }) {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <Motion.div
      className="pointer-events-none fixed top-0 left-0 z-50"
      animate={{ x: pos.x - size / 2, y: pos.y - size / 2 }}
      transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
      }}
    />
  );
}
