import { motion as Motion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up", // "up" | "down" | "left" | "right" | "none"
  duration = 0.6,
  once = true,
}) {
  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(4px)", ...offsets[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
}
