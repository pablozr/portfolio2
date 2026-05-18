import { useLanguage } from "@/i18n/language";

export function About() {
  const { copy } = useLanguage();

  return (
    <section id="about" className="relative border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-border bg-card">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 30% 20%, oklch(0.78 0.09 70 / 0.18), transparent 60%), linear-gradient(180deg, oklch(0.22 0.006 60), oklch(0.16 0.005 60))",
              }}
            />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>operator_01.jpg</span>
              <span className="text-accent">● live</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            // about
          </p>
          <h2 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
            {copy.about.titleLine1}
            <br />
            <span className="font-serif italic text-muted-foreground">
              {copy.about.titleLine2}
            </span>
          </h2>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              {copy.about.p1}
            </p>
            <p>
              {copy.about.p2}
            </p>
            <p className="text-foreground">
              {copy.about.p3}
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
            {copy.about.stats.map((s) => (
              <div key={s.k} className="bg-background p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </dt>
                <dd className="mt-2 font-serif text-3xl italic text-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
