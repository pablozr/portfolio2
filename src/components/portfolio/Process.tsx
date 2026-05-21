import { useLanguage } from "@/i18n/language";
import { useEffect, useRef, useState } from "react";

export function Process() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!section || !viewport || !track || window.innerWidth < 1024) {
        setProgress(0);
        setTravel(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const nextTravel = Math.max(0, track.scrollWidth - viewport.clientWidth);

      setProgress(nextProgress);
      setTravel(nextTravel);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const activeStep = Math.min(
    copy.process.steps.length - 1,
    Math.round(progress * (copy.process.steps.length - 1)),
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-clip border-y border-border bg-card/20 lg:h-[320vh]"
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.78 0.09 70 / 0.5), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-16">
        <div className="mb-20 grid grid-cols-1 gap-10 lg:mb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.26em] text-accent">
              {isPt ? "// processo" : "// how_we_work"}
            </p>
            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              {copy.process.titleLine1}{" "}
              <span className="font-serif italic text-accent">{copy.process.titleAccent}</span>
              <br />
              {copy.process.titleLine2}
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-zinc-200/95 sm:text-[1.05rem]">
              {copy.process.body}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-border/80 bg-card/40">
            <div
              className="pointer-events-none absolute left-8 right-8 top-14 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--color-border) 6%, var(--color-border) 94%, transparent)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-8 top-[52px] h-1.5 rounded-full blur-[1px] transition-[width] duration-150 ease-out"
              style={{
                width: `calc((100% - 4rem) * ${progress})`,
                background: "linear-gradient(to right, transparent, var(--color-accent))",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-[52px] h-2 w-28 rounded-full opacity-80 blur-[2px] transition-transform duration-150 ease-out"
              style={{
                background: "linear-gradient(to right, transparent, oklch(0.98 0.02 90), transparent)",
                transform: `translateX(calc((100vw - 10rem) * ${progress}))`,
              }}
              aria-hidden
            />

            <div ref={viewportRef} className="no-scrollbar overflow-x-auto px-5 py-7 sm:px-7 lg:overflow-hidden">
              <div
                ref={trackRef}
                className="flex min-w-[940px] gap-6 transition-transform duration-150 ease-out lg:min-w-0"
                style={{ transform: `translate3d(${-travel * progress}px, 0, 0)` }}
              >
            {copy.process.steps.map((s, i) => (
              <div
                key={s.k}
                className="group relative min-h-[370px] w-[min(76vw,430px)] shrink-0 rounded-xl border border-border/70 bg-background/70 p-5 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-background/90 lg:w-[420px] animate-reveal"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative mb-7 flex items-center justify-between">
                  <div className="relative flex size-[72px] items-center justify-center">
                    <div className={`absolute inset-0 rounded-full border transition-colors duration-300 ${i <= activeStep ? "animate-process-node border-accent/60" : "border-border/70"}`} />
                    <div className={`absolute inset-2 rounded-full border transition-all duration-500 group-hover:inset-1 ${i <= activeStep ? "border-accent/40" : "border-border/60"}`} />
                    <span className={`relative font-serif text-[1.7rem] transition-colors ${i <= activeStep ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                      {s.k}
                    </span>
                  </div>
                  <span className="rounded-full border border-border/80 bg-background/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-300/95">
                    {s.meta}
                  </span>
                </div>

                <h3 className="mb-3 text-[1.55rem] font-medium tracking-tight sm:text-[1.72rem]">
                  {s.t}
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-zinc-200/90 sm:text-base">
                  {s.d}
                </p>

                <ul className="space-y-2 border-t border-border/90 pt-4 font-mono text-xs text-zinc-300/95 sm:text-[13px]">
                  {s.deliver.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="text-accent">→</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
