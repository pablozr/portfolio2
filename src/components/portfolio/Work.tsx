import vanguard from "@/assets/project-vanguard.jpg";
import nexus from "@/assets/project-nexus.jpg";
import flux from "@/assets/project-flux.jpg";
import { useMemo, useState, type MouseEvent } from "react";
import { useLanguage } from "@/i18n/language";
import BorderGlow from "@/components/ui/BorderGlow";

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
  const { copy } = useLanguage();
  const [activeCard, setActiveCard] = useState(0);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  const projects: Project[] = copy.work.projects.map((project, i) => ({
    ...project,
    stack: PROJECTS[i]?.stack ?? [],
    image: PROJECTS[i]?.image ?? vanguard,
  }));

  const cardLayout = useMemo(
    () => [
      "lg:col-span-6",
      "lg:col-span-3",
      "lg:col-span-3",
      "lg:col-span-3",
      "lg:col-span-3",
      "lg:col-span-6",
    ],
    [],
  );

  const projectCards = useMemo(
    () =>
      projects.flatMap((p) => [
        {
          kind: "project" as const,
          id: `${p.index}-project`,
          project: p,
        },
        {
          kind: "detail" as const,
          id: `${p.index}-detail`,
          project: p,
        },
      ]),
    [projects],
  );

  function handleSectionMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setMouseX(Math.max(0, Math.min(100, x)));
    setMouseY(Math.max(0, Math.min(100, y)));
  }

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-32"
      onMouseMove={handleSectionMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[2.2rem] opacity-55 blur-3xl transition-all duration-500"
        style={{
          background:
            activeCard % 2 === 0
              ? `radial-gradient(42% 36% at ${mouseX}% ${mouseY}%, oklch(0.76 0.11 78 / 0.2), transparent 76%), radial-gradient(58% 44% at 82% 8%, oklch(0.67 0.1 220 / 0.14), transparent 82%)`
              : `radial-gradient(42% 36% at ${mouseX}% ${mouseY}%, oklch(0.69 0.12 220 / 0.2), transparent 76%), radial-gradient(58% 44% at 15% 90%, oklch(0.78 0.1 78 / 0.14), transparent 82%)`,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] border border-white/10" aria-hidden />

      <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/15 bg-[linear-gradient(130deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_38%,rgba(0,0,0,0.1)_100%)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/45" aria-hidden />
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-6">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent/90">
              // selected_output
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {copy.work.title}
            </h2>
          </div>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-200/85">
            {copy.work.itemsLabel}
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-300/90 sm:text-base">
          Projetos com foco em performance, conversao e experiencia de produto. Passe o mouse pelos
          cards para explorar destaque, profundidade e identidade visual de cada entrega.
        </p>
      </div>

      <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 lg:grid-cols-12">
        {projectCards.map((card, i) => {
          const p = card.project;
          const isActive = activeCard === i;

          return (
            <article
              key={card.id}
              onMouseEnter={() => setActiveCard(i)}
              className={`group relative transition-transform duration-500 hover:-translate-y-0.5 ${cardLayout[i] ?? "lg:col-span-6"}`}
            >
              <BorderGlow
                className="h-full"
                edgeSensitivity={26}
                glowColor={i % 2 === 0 ? "42 84 74" : "214 78 72"}
                backgroundColor="rgba(10,10,12,0.82)"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={0.85}
                coneSpread={20}
                animated={false}
                fillOpacity={0.38}
                colors={
                  i % 2 === 0
                    ? ["#f7cf77", "#f59f4b", "#5cb6ff"]
                    : ["#4aa2ff", "#7f8cff", "#a36cff"]
                }
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl transition-all duration-500 group-hover:opacity-40"
                  style={{
                    background:
                      i % 2 === 0
                        ? "oklch(0.78 0.09 78 / 0.8)"
                        : "oklch(0.7 0.1 220 / 0.8)",
                  }}
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                  <div className="absolute -left-3 top-6 h-1.5 w-1.5 rounded-full bg-accent/70 animate-orbit-soft" style={{ animationDelay: "0ms" }} />
                  <div className="absolute right-8 top-10 h-2 w-2 rounded-full bg-white/55 animate-orbit-soft" style={{ animationDelay: "180ms" }} />
                  <div className="absolute bottom-7 left-10 h-1.5 w-1.5 rounded-full bg-white/50 animate-orbit-soft" style={{ animationDelay: "320ms" }} />
                  <svg className="absolute right-4 bottom-4 h-16 w-16 text-white/22 animate-float-soft" viewBox="0 0 64 64" fill="none">
                    <path d="M12 36C22 24 34 24 52 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="12" cy="36" r="2" fill="currentColor" />
                    <circle cx="52" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>

                {card.kind === "project" ? (
                  <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-card/50 p-4 sm:p-5">
                    <img
                      src={p.image}
                      alt={p.alt}
                      width={1280}
                      height={832}
                      loading="lazy"
                      className={`aspect-video w-full rounded-xl object-cover transition-transform duration-700 ${isActive ? "scale-[1.04]" : "scale-100"}`}
                    />
                    <div className="pointer-events-none absolute inset-x-4 bottom-4 top-4 rounded-xl bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    <div className="absolute left-7 top-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-100 backdrop-blur">
                      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                      {p.tag}
                    </div>
                    <div className="absolute right-7 top-7 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur">
                      {p.year}
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <span className="mb-1.5 block font-mono text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight text-white/15 select-none">
                        {p.index}
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">{p.title}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-between gap-6 p-4 sm:p-5">
                    <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                      <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-accent">
                        /{p.index}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <span className={`size-1.5 rounded-full ${isActive ? "bg-accent" : "bg-white/40"}`} aria-hidden />
                        case file
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">{p.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-300/90 sm:text-base">{p.body}</p>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-white/15 bg-black/20 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-zinc-200/90"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                      <span>case detail</span>
                      <span className="inline-flex items-center gap-2 text-accent/90">
                        view case
                        <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
              </BorderGlow>
            </article>
          );
        })}
      </div>
    </section>
  );
}
