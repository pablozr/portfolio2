import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { Process } from "@/components/portfolio/Process";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ERR_STUDIO — Freelance Fullstack Developer" },
      {
        name: "description",
        content:
          "Freelance fullstack developer building landing pages, custom systems, internal tools and automation. Premium, dark, brutalist craft.",
      },
      { property: "og:title", content: "ERR_STUDIO — Freelance Fullstack Developer" },
      {
        property: "og:description",
        content:
          "Landing pages, custom systems, internal tools and automation. Premium dark craft, shipped lean.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
