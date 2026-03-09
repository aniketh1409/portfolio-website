import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Typewriter({
  text = "",
  speed = 60,
  delay = 0,
  className = "",
  cursor = true,
  onComplete,
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      onComplete?.();
      return;
    }
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, started, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {cursor && (
        <Motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-0.5 w-[2px] h-[1em] bg-current align-middle"
        />
      )}
    </span>
  );
}
