import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio.booted";
const LINE_MS = 260;

function alreadyBooted() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markBooted() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage can be unavailable (private mode); the boot just replays.
  }
}

export function BootSequence({ lines, hint }: { lines: string[]; hint: string }) {
  const [phase, setPhase] = useState<"pending" | "running" | "leaving" | "done">("pending");
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPhase(reduced || alreadyBooted() ? "done" : "running");
  }, []);

  useEffect(() => {
    if (phase !== "running") return;
    const finish = () => {
      markBooted();
      setPhase("leaving");
    };
    const timers = lines.map((_, i) => window.setTimeout(() => setShown(i + 1), LINE_MS * (i + 1)));
    timers.push(window.setTimeout(finish, LINE_MS * lines.length + 900));
    window.addEventListener("keydown", finish, { once: true });
    window.addEventListener("pointerdown", finish, { once: true });
    return () => {
      timers.forEach(window.clearTimeout);
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
    };
  }, [phase, lines]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const id = window.setTimeout(() => setPhase("done"), 650);
    return () => window.clearTimeout(id);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`boot ${phase === "leaving" ? "boot-leaving" : ""}`} aria-hidden="true">
      <div className="boot-screen">
        {lines.slice(0, shown).map((line, i) => (
          <p key={line} className={i === lines.length - 1 ? "boot-final" : ""}>
            <span className="boot-prompt">&gt;</span> {line}
          </p>
        ))}
        <span className="boot-cursor" />
      </div>
      <p className="boot-hint">{hint}</p>
    </div>
  );
}
