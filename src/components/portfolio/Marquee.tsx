const STACK = [
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    bg: "#111827",
  },
  {
    name: "Java",
    icon: "https://cdn.simpleicons.org/openjdk/ED8B00",
    bg: "#111827",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    bg: "#0F172A",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.simpleicons.org/fastapi/009688",
    bg: "#0F172A",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.simpleicons.org/springboot/6DB33F",
    bg: "#0F172A",
  },
  {
    name: "Angular",
    icon: "https://cdn.simpleicons.org/angular/DD0031",
    bg: "#111827",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    bg: "#111827",
  },
];

export function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="overflow-hidden border-y border-border bg-card/60 pt-5 pb-7">
      <div className="flex w-max -translate-y-1 items-center animate-marquee gap-16 font-mono text-sm uppercase tracking-[0.28em] text-foreground/90">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-16">
            <img
              src={item.icon}
              alt={item.name}
              className="h-9 w-9 opacity-100 drop-shadow-[0_0_10px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <span
              className="rounded-md border border-border/80 px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              style={{ backgroundColor: item.bg }}
            >
              {item.name}
            </span>
            <span className="text-accent/70">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
