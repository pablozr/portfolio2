import { useEffect, useState } from "react";

export function Nav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm tracking-tighter">
          <span className="text-accent">ERR_</span>STUDIO<span className="text-muted-foreground">/v01</span>
        </a>
        <div className="hidden gap-7 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-accent">// work</a>
          <a href="#services" className="transition-colors hover:text-accent">// services</a>
          <a href="#process" className="transition-colors hover:text-accent">// process</a>
          <a href="#about" className="transition-colors hover:text-accent">// about</a>
          <a href="#faq" className="transition-colors hover:text-accent">// faq</a>
          <a href="#contact" className="transition-colors hover:text-accent">// ping</a>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="size-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
          <span className="hidden sm:inline">{time} UTC</span>
        </div>
      </div>
    </nav>
  );
}
