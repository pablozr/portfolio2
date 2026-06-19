const STACK = [
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    bg: "#d5ff3f",
  },
  {
    name: "Java",
    icon: "https://cdn.simpleicons.org/openjdk/ED8B00",
    bg: "#ff3bbd",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    bg: "#ffef5c",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.simpleicons.org/fastapi/009688",
    bg: "#d5ff3f",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.simpleicons.org/springboot/6DB33F",
    bg: "#ffef5c",
  },
  {
    name: "Angular",
    icon: "https://cdn.simpleicons.org/angular/DD0031",
    bg: "#ff3bbd",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    bg: "#d5ff3f",
  },
];

export function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="overflow-hidden border-y-[4px] border-border bg-foreground pt-5 pb-7">
      <div className="flex w-max -translate-y-1 items-center animate-marquee gap-16 font-mono text-sm font-black uppercase tracking-[0.28em] text-background">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-16">
            <img
              src={item.icon}
              alt={item.name}
              className="h-9 w-9 border-2 border-background bg-card p-1 opacity-100 transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <span
              className="border-[3px] border-background px-5 py-2.5 font-mono text-sm font-black uppercase tracking-[0.22em] text-foreground shadow-[5px_5px_0_var(--color-background)]"
              style={{ backgroundColor: item.bg }}
            >
              {item.name}
            </span>
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
