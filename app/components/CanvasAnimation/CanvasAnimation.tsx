"use client";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  m: number;
};

const CanvasAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    const s = 50;
    let w = window.innerWidth;
    let h = window.innerHeight;

    c.width = w;
    c.height = h;

    // Initialize 15 particles
    const particles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      particles[i] = {
        x: Math.random(),
        y: Math.random(),
        dx: Math.random() * 0.002 + 0.001,
        dy: Math.random() * 0.002 + 0.001,
        m: Math.random() * 0.025,
      };
    }

    const draw = () => {
      window.requestAnimationFrame(draw);

      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;

      // Clear canvas with white background
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, w, h);

      // Update particle positions
      for (let i = 0; i < 15; i++) {
        const p = particles[i];
        p.x += p.dx;
        p.y += p.dy;

        if (p.x > 1 || p.x < 0) p.dx = -p.dx;
        if (p.y > 1 || p.y < 0) p.dy = -p.dy;
      }

      // Draw grid with particle-influenced circles
      for (let x = 0; x <= w; x += s) {
        for (let y = 0; y <= h; y += s) {
          let n = 0;
          for (let i = 0; i < 15; i++) {
            const p = particles[i];
            const _x = x - p.x * w;
            const _y = y - p.y * h;
            const d = Math.sqrt(_x * _x + _y * _y) / (h + w);
            n += d ? Math.min(p.m / (d * d * 25), 2) : 2;
          }

          ctx.fillStyle = `hsla(${x % 360}, 85%, 40%, .15)`;
          ctx.beginPath();
          ctx.arc(x + 0.5, y + 0.5, Math.min(n, 9) * s * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    draw();

    const handleResize = () => {
      if (w !== window.innerWidth || h !== window.innerHeight) {
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="animation-canvas">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CanvasAnimation;
