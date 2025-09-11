import React from 'react';

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: number;
  alpha: number;
};

const AnimatedHeroBackground: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const animRef = React.useRef<number | null>(null);
  const particlesRef = React.useRef<Particle[]>([]);
  const pointer = React.useRef({ x: -9999, y: -9999 });

  React.useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const DPR = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function random(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function createParticles(count = Math.round((width * height) / 60000)) {
      const parts: Particle[] = [];
      for (let i = 0; i < count; i++) {
        parts.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: random(0.8, 3.2),
          vx: random(-0.15, 0.15),
          vy: random(-0.05, 0.05),
          hue: random(25, 45),
          alpha: random(0.12, 0.6),
        });
      }
      particlesRef.current = parts;
    }

    function draw() {
      if (!ctx) return;

      // soft gradient background
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, 'rgba(255, 250, 240, 1)');
      g.addColorStop(0.5, 'rgba(250, 245, 235, 1)');
      g.addColorStop(1, 'rgba(245, 240, 230, 1)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // rotating soft overlay (subtle vignette)
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.translate(width / 2, height / 2);
      const t = performance.now() / 20000;
      ctx.rotate(t);
      ctx.translate(-width / 2, -height / 2);
      const radial = ctx.createRadialGradient(width * 0.75, height * 0.25, 10, width * 0.5, height * 0.6, Math.max(width, height));
      radial.addColorStop(0, 'rgba(255,236,179,0.06)');
      radial.addColorStop(0.5, 'rgba(255,245,235,0.02)');
      radial.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // particles
      const parts = particlesRef.current;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];

        // simple attraction to pointer
        const dx = pointer.current.x - p.x;
        const dy = pointer.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const attracted = Math.min(0.06, 60 / dist) * (pointer.current.x > -9000 ? 1 : 0);
        p.vx += dx * 0.0006 * attracted;
        p.vy += dy * 0.0003 * attracted;

        // drift
        p.x += p.vx;
        p.y += p.vy;

        // gentle bounds
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // fade in/out by y
        const alpha = p.alpha * (0.8 + 0.4 * Math.sin((p.x + performance.now() / 2000) * 0.01));

        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        const color = `hsla(${p.hue}, 50%, 50%, ${alpha})`;
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // soft overlay glows
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = 'rgba(255, 235, 180, 0.02)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';
    }

    function loop() {
      draw();
      animRef.current = requestAnimationFrame(loop);
    }

    function attach() {
      resize();
      createParticles();
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = requestAnimationFrame(loop);
    }

    attach();

    let resizeTimeout: number | undefined;
    function onResize() {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        resize();
        createParticles();
      }, 120);
    }

    function onMove(e: MouseEvent) {
      pointer.current.x = e.clientX - canvas.getBoundingClientRect().left;
      pointer.current.y = e.clientY - canvas.getBoundingClientRect().top;
    }

    function onLeave() {
      pointer.current.x = -9999;
      pointer.current.y = -9999;
    }

    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    // respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      // static subtle gradient only
      if (animRef.current) cancelAnimationFrame(animRef.current);
      ctx.fillStyle = 'linear-gradient(180deg, #fffaf0 0%, #fff6e8 100%)' as any;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 hero-canvas"
      aria-hidden
    />
  );
};

export default AnimatedHeroBackground;
