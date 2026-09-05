import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/language";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ property: "og:type", content: "website" }] }),
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

  return <Portfolio />;
}
