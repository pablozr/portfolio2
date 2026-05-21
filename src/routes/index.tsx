import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { Process } from "@/components/portfolio/Process";
import { About } from "@/components/portfolio/About";
import { FAQ } from "@/components/portfolio/FAQ";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { RevealOnScroll } from "@/components/portfolio/RevealOnScroll";
import { useLanguage } from "@/i18n/language";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:type", content: "website" }],
  }),
  component: Page,
});

function Page() {
  const { copy } = useLanguage();

  useEffect(() => {
    document.title = copy.meta.title;

    const upsertMeta = (selector: string, attrs: Record<string, string>) => {
      let node = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => node?.setAttribute(k, v));
        document.head.appendChild(node);
      }
      if (attrs.name) {
        node.setAttribute("name", attrs.name);
      }
      if (attrs.property) {
        node.setAttribute("property", attrs.property);
      }
      if (attrs.content) {
        node.setAttribute("content", attrs.content);
      }
    };

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: copy.meta.description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: copy.meta.ogTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: copy.meta.ogDescription,
    });
  }, [copy]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="flex min-h-screen flex-col">
          <Hero className="flex-1" />
          <Marquee />
        </section>
        <div className="relative isolate bg-[#0c0d10]">
          <div className="pointer-events-none absolute inset-0 noise-overlay opacity-35" aria-hidden />
          <RevealOnScroll>
            <Services />
          </RevealOnScroll>
        </div>
        <div className="relative isolate bg-background">
          <div className="pointer-events-none absolute inset-0 noise-overlay opacity-20" aria-hidden />
          <RevealOnScroll>
            <Work />
          </RevealOnScroll>
        </div>
        <div className="relative isolate bg-[#0b0c0f]">
          <div className="pointer-events-none absolute inset-0 noise-overlay opacity-35" aria-hidden />
          <RevealOnScroll>
            <Process />
          </RevealOnScroll>
        </div>
        <div className="relative isolate bg-background">
          <div className="pointer-events-none absolute inset-0 noise-overlay opacity-20" aria-hidden />
          <RevealOnScroll>
            <About />
          </RevealOnScroll>
        </div>
        <div className="relative isolate bg-[#0d0f12]">
          <div className="pointer-events-none absolute inset-0 noise-overlay opacity-35" aria-hidden />
          <RevealOnScroll>
            <FAQ />
          </RevealOnScroll>
        </div>
        <div className="relative isolate bg-background">
          <div className="pointer-events-none absolute inset-0 noise-overlay opacity-20" aria-hidden />
          <RevealOnScroll>
            <Contact />
          </RevealOnScroll>
        </div>
      </main>
      <Footer />
    </div>
  );
}
