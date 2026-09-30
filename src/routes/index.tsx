import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ property: "og:type", content: "website" }] }),
  component: Page,
});
