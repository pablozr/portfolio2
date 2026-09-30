import { useEffect, useRef } from "react";

type Pole = { x: number; top: number; arm: number; depth: number };
type Wire = { x0: number; y0: number; x1: number; y1: number; sag: number; depth: number };
type Pulse = { wire: number; t: number; speed: number; size: number };

const layers = [
  { depth: 0.45, poles: [0.08, 0.34, 0.6, 0.86], height: 0.46, arm: 0.05 },
  { depth: 1, poles: [-0.04, 0.42, 0.9], height: 0.78, arm: 0.1 },
];

function buildScene(w: number, h: number) {
  const ground = h * 0.94;
  const poles: Pole[] = [];
  const wires: Wire[] = [];
  layers.forEach(({ depth, poles: xs, height, arm }) => {
    const layerPoles = xs.map((fx) => ({
      x: fx * w,
      top: ground - h * height,
      arm: Math.max(26, w * arm),
      depth,
    }));
    poles.push(...layerPoles);
    const anchors = (p: Pole) => [
      { x: p.x - p.arm, y: p.top + 14 * depth },
      { x: p.x, y: p.top + 14 * depth },
      { x: p.x + p.arm, y: p.top + 14 * depth },
      { x: p.x - p.arm * 0.7, y: p.top + 42 * depth },
      { x: p.x + p.arm * 0.7, y: p.top + 42 * depth },
    ];
    const chain = [
      { x: -w * 0.3, top: layerPoles[0].top + 20, arm: layerPoles[0].arm, depth },
      ...layerPoles,
      {
        x: w * 1.3,
        top: layerPoles[layerPoles.length - 1].top + 20,
        arm: layerPoles[0].arm,
        depth,
      },
    ];
    for (let i = 0; i < chain.length - 1; i++) {
      const a = anchors(chain[i]);
      const b = anchors(chain[i + 1]);
      const span = Math.abs(chain[i + 1].x - chain[i].x);
      a.forEach((pa, k) => {
        wires.push({
          x0: pa.x,
          y0: pa.y,
          x1: b[k].x,
          y1: b[k].y,
          sag: span * (0.07 + k * 0.012),
          depth,
        });
      });
    }
  });
  return { poles, wires, ground };
}

function point(wire: Wire, t: number, hum: number) {
  const cx = (wire.x0 + wire.x1) / 2;
  const cy = (wire.y0 + wire.y1) / 2 + 2 * (wire.sag + hum);
  const u = 1 - t;
  return {
    x: u * u * wire.x0 + 2 * u * t * cx + t * t * wire.x1,
    y: u * u * wire.y0 + 2 * u * t * cy + t * t * wire.y1,
  };
}

export function WiredCanvas({ paused }: { paused: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scene = buildScene(1, 1);
    let pulses: Pulse[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let pointer = 0;
    let time = 0;
    let last = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene = buildScene(w, h);
      pulses = Array.from({ length: Math.round(w / 55) }, () => spawn());
      draw();
    };

    const spawn = (): Pulse => ({
      wire: Math.floor(Math.random() * scene.wires.length),
      t: Math.random(),
      speed: 0.04 + Math.random() * 0.12,
      size: 1.2 + Math.random() * 1.8,
    });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, "#050306");
      sky.addColorStop(0.55, "#16040b");
      sky.addColorStop(0.86, "#4d0718");
      sky.addColorStop(1, "#7a0c22");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      // Sun-bleed glow sitting on the horizon.
      const glow = ctx.createRadialGradient(w * 0.7, h * 0.95, 0, w * 0.7, h * 0.95, w * 0.55);
      glow.addColorStop(0, "rgba(255, 43, 74, 0.35)");
      glow.addColorStop(1, "rgba(255, 43, 74, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      for (const depth of [0.45, 1]) {
        const shift = pointer * (depth === 1 ? 14 : 5);
        ctx.save();
        ctx.translate(shift, 0);
        const tone = depth === 1 ? "#020102" : "#12050a";
        ctx.strokeStyle = tone;
        ctx.fillStyle = tone;

        ctx.lineWidth = depth === 1 ? 1.4 : 0.8;
        scene.wires.forEach((wire, i) => {
          if (wire.depth !== depth) return;
          const hum = reduced ? 0 : Math.sin(time * 1.4 + i * 0.7) * 1.4 * depth;
          const cx = (wire.x0 + wire.x1) / 2;
          const cy = (wire.y0 + wire.y1) / 2 + 2 * (wire.sag + hum);
          ctx.beginPath();
          ctx.moveTo(wire.x0, wire.y0);
          ctx.quadraticCurveTo(cx, cy, wire.x1, wire.y1);
          ctx.stroke();
        });

        scene.poles.forEach((p) => {
          if (p.depth !== depth) return;
          const pw = depth === 1 ? 9 : 4;
          ctx.fillRect(p.x - pw / 2, p.top, pw, scene.ground - p.top + 40);
          ctx.fillRect(p.x - p.arm - 6, p.top + 10 * depth, p.arm * 2 + 12, depth === 1 ? 6 : 3);
          ctx.fillRect(
            p.x - p.arm * 0.7 - 6,
            p.top + 38 * depth,
            p.arm * 1.4 + 12,
            depth === 1 ? 5 : 2,
          );
          if (depth === 1) {
            // Transformer drum and insulators.
            ctx.fillRect(p.x + pw / 2, p.top + 80, 22, 38);
            for (const dx of [-p.arm, 0, p.arm]) ctx.fillRect(p.x + dx - 2, p.top + 3, 4, 8);
          }
        });

        ctx.fillStyle = "rgba(255, 51, 85, 0.95)";
        ctx.shadowColor = "#ff2b4a";
        ctx.shadowBlur = 12;
        pulses.forEach((pulse) => {
          const wire = scene.wires[pulse.wire];
          if (!wire || wire.depth !== depth) return;
          const { x, y } = point(wire, pulse.t, 0);
          ctx.beginPath();
          ctx.arc(x, y, pulse.size * depth + 0.4, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!visible || pausedRef.current) return;
      time += dt;
      pulses.forEach((pulse, i) => {
        pulse.t += pulse.speed * dt;
        if (pulse.t > 1) pulses[i] = { ...spawn(), t: 0 };
      });
      draw();
    };

    const onPointer = (event: PointerEvent) => {
      pointer = (event.clientX / window.innerWidth - 0.5) * -2;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();
    if (!reduced) {
      window.addEventListener("pointermove", onPointer, { passive: true });
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="wired-canvas" aria-hidden="true" />;
}
