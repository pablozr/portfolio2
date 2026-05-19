import { useLanguage } from "@/i18n/language";

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Pablo Farina — {copy.footer.rights}</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">GitHub</a>
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">X/Twitter</a>
          <a href="#" className="hover:text-accent">Read.cv</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          <span>{copy.footer.status}</span>
        </div>
      </div>
    </footer>
  );
}
