export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              Get in touch
            </p>
            <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Have a project in mind?
              <br />
              <span className="font-serif italic text-muted-foreground">
                Let&rsquo;s talk.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Tell me about the project — even a rough idea works. I reply
              within 24 hours with honest feedback on scope, timeline and
              price.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@err-studio.dev"
                className="group inline-flex items-center gap-3 rounded-md bg-foreground px-6 py-4 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                hello@err-studio.dev
                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
              <a
                href="https://cal.com"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                or book a 30-min intro call
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-md border border-border bg-card/40 p-8">
              <dl className="space-y-6">
                {[
                  { k: "Response time", v: "Under 24 hours" },
                  { k: "Engagement", v: "Fixed-price milestones" },
                  { k: "Timezone", v: "Remote · GMT-3" },
                  { k: "Status", v: "Accepting Q3 projects" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {row.k}
                    </dt>
                    <dd className="text-sm text-foreground">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
