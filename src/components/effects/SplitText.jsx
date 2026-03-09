import { useMemo, useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";

export default function SplitText({
  text = "",
  className = "",
  delay = 0,
  duration = 0.05,
  ease = "easeOut",
  split = "chars", // "chars" | "words"
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const tokens = useMemo(
    () => (split === "words" ? text.split(" ") : text.split("")),
    [text, split],
  );

  return (
    <span ref={ref} className={className} aria-label={text}>
      {tokens.map((token, i) => (
        <Motion.span
          key={`${token}-${i}`}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * duration,
            ease,
          }}
          className="inline-block"
          style={{ whiteSpace: split === "words" ? "pre" : undefined }}
        >
          {token}
          {split === "words" && i < tokens.length - 1 ? "\u00A0" : ""}
        </Motion.span>
      ))}
    </span>
  );
}
