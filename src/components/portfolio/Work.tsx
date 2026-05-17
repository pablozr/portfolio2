import vanguard from "@/assets/project-vanguard.jpg";
import nexus from "@/assets/project-nexus.jpg";
import flux from "@/assets/project-flux.jpg";

type Project = {
  index: string;
  tag: string;
  title: string;
  year: string;
  body: string;
  stack: string[];
  image: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    tag: "LOGISTICS / SYSTEM",
    title: "Vanguard Logistics Engine",
    year: "2025",
    body: "Real-time tracking system for a 200+ vehicle fleet. Live map, dispatch, billing — reduced manual dispatch time by 40%.",
    stack: ["NEXT.JS", "SUPABASE", "MAPBOX", "STRIPE"],
    image: vanguard,
    alt: "Dashboard for a logistics platform with charts and a live map",
  },
  {
    index: "02",
    tag: "AI / INTERNAL TOOL",
    title: "Nexus Intelligence Hub",
    year: "2025",
    body: "Internal dashboard for an AI research team to monitor LLM token spend, pipelines and incidents across three regions.",
    stack: ["REACT", "PYTHON", "REDIS", "GRAFANA"],
    image: nexus,
    alt: "Abstract neural network visualization in neon green",
  },
  {
    index: "03",
    tag: "AUTOMATION / INTEGRATIONS",
    title: "Flux Ops Pipeline",
    year: "2024",
    body: "Custom workflow engine connecting CRM, Stripe and GPT. Auto-routes leads, drafts replies and updates billing without humans in the loop.",
    stack: ["NODE", "N8N", "OPENAI", "POSTGRES"],
    image: flux,
    alt: "Diagram of automation workflow connecting API nodes",
  },
];

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 flex items-end justify-between border-b border-border pb-6">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            // selected_output
          </p>
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Recent shipments
          </h2>
        </div>
        <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
          [ 03 / CASE_STUDIES ]
        </span>
      </div>

      <div className="space-y-28">
        {PROJECTS.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <article key={p.title} className="group grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden border border-border bg-card ring-1 ring-transparent transition-all duration-500 group-hover:ring-accent/40">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={1280}
                    height={832}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 flex items-center gap-2 border border-border bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                    <span className="size-1.5 rounded-full bg-accent" /> {p.tag}
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-col justify-center gap-5 lg:col-span-5 ${
                  reverse ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span className="text-accent">/{p.index}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="text-3xl font-bold italic tracking-tight sm:text-4xl">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-border px-2.5 py-1 font-mono text-[10px] tracking-widest text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
