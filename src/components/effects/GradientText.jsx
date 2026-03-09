import { motion as Motion } from "framer-motion";

export default function GradientText({
  children,
  className = "",
  from = "#818cf8",
  via = "#22d3ee",
  to = "#c084fc",
  animate = true,
}) {
  const style = {
    backgroundImage: `linear-gradient(135deg, ${from}, ${via}, ${to}, ${from})`,
    backgroundSize: animate ? "300% 300%" : "100% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline",
  };

  if (!animate) {
    return (
      <span className={className} style={style}>
        {children}
      </span>
    );
  }

  return (
    <Motion.span
      className={className}
      style={style}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </Motion.span>
  );
}
