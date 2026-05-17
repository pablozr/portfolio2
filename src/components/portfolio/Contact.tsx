export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="relative overflow-hidden border border-accent bg-accent p-10 text-accent-foreground sm:p-16 lg:p-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className="relative flex flex-col items-start gap-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em]">
            [ READY_TO_DEPLOY ]
          </p>
          <h2 className="max-w-4xl text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl">
            Let's build something
            <br />
            that <span className="italic">doesn't</span> break.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-accent-foreground/80">
            Tell me about the project — even a rough idea works. I reply within
            24h with honest feedback on scope, timeline and price.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@err-studio.dev"
              className="inline-flex items-center gap-3 border border-accent-foreground bg-background px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-foreground shadow-[6px_6px_0_0_currentColor] transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              hello@err-studio.dev
              <span>↗</span>
            </a>
            <a
              href="https://cal.com"
              className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 hover:no-underline"
            >
              or book a 30-min intro call →
            </a>
          </div>

          <div className="mt-8 grid w-full grid-cols-2 gap-6 border-t border-accent-foreground/20 pt-8 font-mono text-[11px] uppercase tracking-widest sm:grid-cols-4">
            <div>
              <div className="opacity-60">Response time</div>
              <div className="mt-1 font-bold">&lt; 24h</div>
            </div>
            <div>
              <div className="opacity-60">Based in</div>
              <div className="mt-1 font-bold">Remote / GMT-3</div>
            </div>
            <div>
              <div className="opacity-60">Engagement</div>
              <div className="mt-1 font-bold">Fixed price</div>
            </div>
            <div>
              <div className="opacity-60">Status</div>
              <div className="mt-1 font-bold">Accepting Q3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
