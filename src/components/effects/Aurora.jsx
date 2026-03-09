import { motion as Motion } from "framer-motion";

export default function Aurora({ className = "" }) {
  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden ${className}`}>
      {/* Large sweeping aurora blobs - more vivid */}
      <Motion.div
        className="absolute -top-[300px] -left-[200px] h-[800px] w-[1200px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.35) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 200, -100, 50, 0],
          y: [0, -80, 60, -40, 0],
          scale: [1, 1.3, 0.9, 1.15, 1],
          opacity: [0.6, 0.8, 0.5, 0.7, 0.6],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="absolute top-[20%] -right-[300px] h-[700px] w-[1000px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.08) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -180, 80, -60, 0],
          y: [0, 100, -50, 80, 0],
          scale: [1, 0.85, 1.2, 0.95, 1],
          opacity: [0.5, 0.7, 0.4, 0.6, 0.5],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="absolute -bottom-[200px] left-[20%] h-[600px] w-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 120, -160, 80, 0],
          y: [0, -80, 40, -60, 0],
          scale: [1, 1.2, 0.85, 1.1, 1],
          opacity: [0.5, 0.3, 0.7, 0.5, 0.5],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary smaller accent blobs for extra depth */}
      <Motion.div
        className="absolute top-[50%] left-[10%] h-[300px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -40, 30, 0],
          opacity: [0.3, 0.6, 0.2, 0.3],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="absolute top-[10%] right-[20%] h-[250px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          opacity: [0.4, 0.2, 0.5, 0.4],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(9, 9, 11, 0.6) 100%)",
        }}
      />
    </div>
  );
}
