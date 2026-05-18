export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 0%, oklch(0.78 0.09 70 / 0.06), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-32 sm:pt-48 sm:pb-40">
        <div className="animate-reveal">
          <div className="mb-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            <span>Available for projects · Q3 — Q4 2025</span>
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-[5rem]">
            Fullstack development
            <br />
            for teams that need it{" "}
            <span className="font-serif italic text-accent">built right.</span>
          </h1>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&rsquo;m a freelance developer designing and shipping landing
            pages, custom systems, internal tools and automation flows —
            crafted with care, delivered on time.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-4 animate-reveal"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              View selected work
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
