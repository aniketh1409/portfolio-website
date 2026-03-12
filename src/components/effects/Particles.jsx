import { useEffect, useRef } from "react";

export default function Particles({
  count = 50,
  color = "rgba(99, 102, 241, 0.3)",
  className = "",
  speed = 0.3,
  connectDistance = 120,
  size = 2,
  maxFps = 30,
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: Math.random() * size + 0.5,
    }));

    const connectDistanceSq = connectDistance * connectDistance;
    const frameInterval = 1000 / maxFps;
    let lastTime = 0;

    const draw = (now = 0) => {
      animRef.current = requestAnimationFrame(draw);

      if (now - lastTime < frameInterval) return;
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Draw connections
      if (connectDistance > 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSq = dx * dx + dy * dy;

            if (distSq < connectDistanceSq) {
              const dist = Math.sqrt(distSq);
              ctx.beginPath();
              ctx.strokeStyle = color;
              ctx.globalAlpha = (1 - dist / connectDistance) * 0.18;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

    };

    draw();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [count, color, speed, connectDistance, size, maxFps]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
