const STACK = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "NODE", "POSTGRES", "SUPABASE",
  "TAILWIND", "PYTHON", "STRIPE", "OPENAI", "MAKE", "N8N", "ZAPIER",
  "REDIS", "DOCKER", "CLOUDFLARE",
];

export function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="overflow-hidden border-y border-border bg-card/40 py-5">
      <div className="flex w-max animate-marquee gap-12 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="hover:text-accent">{s}</span>
            <span className="text-accent/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
