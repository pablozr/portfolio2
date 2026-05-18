import { useState } from "react";
import { useLanguage } from "@/i18n/language";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { copy } = useLanguage();

  return (
    <section id="faq" className="relative border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            // faq
          </p>
          <h2 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
            {copy.faq.titleLine1}
            <br />
            <span className="font-serif italic text-muted-foreground">
              {copy.faq.titleLine2}
            </span>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {copy.faq.preContact}{" "}
            <a
              href="#contact"
              className="text-foreground underline-offset-4 hover:underline"
            >
              {copy.faq.contactLink}
            </a>{" "}
            {copy.faq.postContact}
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {copy.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-medium tracking-tight text-foreground group-hover:text-accent">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`mt-1.5 font-mono text-xl leading-none text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-accent" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="max-w-xl pl-10 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
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
