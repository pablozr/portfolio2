import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Footer } from "@/components/portfolio/Footer";
import { RevealOnScroll } from "@/components/portfolio/RevealOnScroll";
import { CtaBand } from "@/components/portfolio/ConversionBands";
import { useLanguage } from "@/i18n/language";
import { lazy, Suspense, useEffect } from "react";

const Work = lazy(() => import("@/components/portfolio/Work").then((m) => ({ default: m.Work })));
const Process = lazy(() =>
  import("@/components/portfolio/Process").then((m) => ({ default: m.Process })),
);
const About = lazy(() =>
  import("@/components/portfolio/About").then((m) => ({ default: m.About })),
);
const FAQ = lazy(() => import("@/components/portfolio/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() =>
  import("@/components/portfolio/Contact").then((m) => ({ default: m.Contact })),
);

function SectionFallback() {
  return <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36" aria-hidden />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:type", content: "website" }],
  }),
  component: Page,
});

export function Page() {
  const { copy } = useLanguage();

  useEffect(() => {
    document.title = copy.meta.title;
    const canonicalUrl = window.location.href;
    const ogImageUrl = `${window.location.origin}/og-cover.svg`;

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
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: ogImageUrl,
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: copy.meta.ogImageAlt,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: copy.meta.ogTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: copy.meta.ogDescription,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: ogImageUrl,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [copy]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="flex min-h-screen flex-col">
          <Hero className="flex-1" />
        </section>
        <div className="relative isolate bg-background">
          <div
            className="pointer-events-none absolute inset-0 noise-overlay opacity-20"
            aria-hidden
          />
          <Suspense fallback={<SectionFallback />}>
            <RevealOnScroll>
              <Work />
            </RevealOnScroll>
          </Suspense>
        </div>
        <CtaBand tone="dark" />
        <div className="relative isolate bg-primary">
          <div
            className="pointer-events-none absolute inset-0 noise-overlay opacity-35"
            aria-hidden
          />
          <Suspense fallback={<SectionFallback />}>
            <RevealOnScroll>
              <Process />
            </RevealOnScroll>
          </Suspense>
        </div>
        <div className="relative isolate bg-background">
          <div
            className="pointer-events-none absolute inset-0 noise-overlay opacity-20"
            aria-hidden
          />
          <Suspense fallback={<SectionFallback />}>
            <RevealOnScroll>
              <About />
            </RevealOnScroll>
          </Suspense>
        </div>
        <div className="relative isolate bg-secondary">
          <div
            className="pointer-events-none absolute inset-0 noise-overlay opacity-35"
            aria-hidden
          />
          <Suspense fallback={<SectionFallback />}>
            <RevealOnScroll>
              <FAQ />
            </RevealOnScroll>
          </Suspense>
        </div>
        <CtaBand />
        <div className="relative isolate bg-background">
          <div
            className="pointer-events-none absolute inset-0 noise-overlay opacity-20"
            aria-hidden
          />
          <Suspense fallback={<SectionFallback />}>
            <RevealOnScroll>
              <Contact />
            </RevealOnScroll>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
