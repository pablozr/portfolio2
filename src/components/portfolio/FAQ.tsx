import { useState } from "react";
import { useLanguage } from "@/i18n/language";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";

  return (
    <section id="faq" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-20 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "color-mix(in oklch, var(--accent) 14%, transparent)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full"
        style={{ background: "linear-gradient(to right, transparent, var(--color-border), transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-24 sm:py-32 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/55 p-6 backdrop-blur-sm sm:p-9 lg:sticky lg:top-24">
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(to right, transparent, var(--color-accent), transparent)" }}
              aria-hidden
            />
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              // faq
            </p>
            <h2 className="text-4xl font-medium leading-[1.03] tracking-tight sm:text-6xl">
              {copy.faq.titleLine1}
              <br />
              <span className="font-serif italic text-muted-foreground">
                {copy.faq.titleLine2}
              </span>
            </h2>

            <div className="mt-10 rounded-xl border border-border/70 bg-background/50 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {isPt ? "resposta direta" : "direct answer"}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {copy.faq.preContact}{" "}
                <a
                  href="#contact"
                  className="text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {copy.faq.contactLink}
                </a>{" "}
                {copy.faq.postContact}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:grid-cols-3">
              {[isPt ? "escopo" : "scope", isPt ? "prazo" : "timeline", isPt ? "stack" : "stack"].map((item) => (
                <span key={item} className="rounded-full border border-border/70 bg-background/40 px-3 py-2 text-center">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {copy.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={item.q}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 animate-reveal ${
                    isOpen
                      ? "border-accent/45 bg-card/80 shadow-2xl shadow-black/15"
                      : "border-border/80 bg-card/40 hover:border-border hover:bg-card/60"
                  }`}
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-inset sm:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border font-mono text-[11px] transition-colors ${
                          isOpen
                            ? "border-accent/50 bg-accent/10 text-accent"
                            : "border-border/80 text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-lg font-medium tracking-tight transition-colors sm:text-xl ${isOpen ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-border/80 font-mono text-xl leading-none text-muted-foreground transition-all duration-300 ${
                        isOpen ? "rotate-45 border-accent/45 text-accent" : "group-hover:border-accent/30 group-hover:text-foreground"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="px-6 pb-7 sm:px-7">
                        <div className="ml-[52px] border-t border-border/80 pt-5">
                          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
