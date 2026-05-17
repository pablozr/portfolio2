import { useEffect, useState } from "react";

const LINES = [
  { prompt: "$ whoami", out: "fullstack engineer · freelance" },
  { prompt: "$ cat ./focus.txt", out: "landing pages · systems · internal tools · automation" },
  { prompt: "$ status --availability", out: "ACCEPTING_CLIENTS // Q3 — Q4" },
];

function useTyped(text: string, delay = 0, speed = 22) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let raf: number;
    const t = setTimeout(() => {
      const tick = () => {
        i++;
        setOut(text.slice(0, i));
        if (i < text.length) raf = window.setTimeout(tick, speed) as unknown as number;
      };
      tick();
    }, delay);
    return () => {
      clearTimeout(t);
      clearTimeout(raf);
    };
  }, [text, delay, speed]);
  return out;
}

function TerminalLine({ prompt, out, delay }: { prompt: string; out: string; delay: number }) {
  const typed = useTyped(out, delay);
  return (
    <div className="flex flex-col gap-1 font-mono text-xs sm:text-sm">
      <span className="text-muted-foreground">{prompt}</span>
      <span className="text-accent text-glow">
        {typed}
        <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-accent animate-blink" />
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="h-32 w-full bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-scanline" />
      </div>
      {/* radial fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.92 0.22 128 / 0.08), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 animate-reveal">
            <div className="mb-8 inline-flex items-center gap-3 border border-border bg-card/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent animate-glow-pulse" aria-hidden />
              <span>[ SESSION_OPEN — 0x01 ]</span>
            </div>

            <h1 className="text-balance text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
              I build the
              <br />
              <span className="italic text-muted-foreground">systems</span> that
              <br />
              <span className="text-accent text-glow">run the engine.</span>
            </h1>
          </div>

          <div
            className="flex flex-col justify-end gap-8 lg:col-span-4 animate-reveal"
            style={{ animationDelay: "180ms" }}
          >
            <p className="border-l border-accent pl-6 text-base leading-relaxed text-muted-foreground">
              Freelance fullstack developer. I design and ship landing pages,
              custom systems, internal tools and automation flows for teams
              that need it built right, not built generic.
            </p>

            <div className="border border-border bg-card/60 p-5 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 border-b border-border pb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="size-2 rounded-full bg-destructive/80" />
                <span className="size-2 rounded-full bg-accent/70" />
                <span className="size-2 rounded-full bg-muted-foreground/40" />
                <span className="ml-2">~/intro.sh</span>
              </div>
              <div className="space-y-3">
                {LINES.map((l, i) => (
                  <TerminalLine
                    key={l.prompt}
                    prompt={l.prompt}
                    out={l.out}
                    delay={400 + i * 900}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-accent px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:border-accent hover:text-accent"
              >
                See selected work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
