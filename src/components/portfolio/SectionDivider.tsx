type SectionDividerProps = {
  tone?: "amber" | "blue";
};

export function SectionDivider({ tone = "amber" }: SectionDividerProps) {
  const accentGlow = tone === "amber" ? "bg-[oklch(0.76_0.12_78_/_0.55)]" : "bg-[oklch(0.69_0.11_220_/_0.55)]";
  const accentLine = tone === "amber" ? "from-transparent via-amber-300/45 to-transparent" : "from-transparent via-sky-300/45 to-transparent";
  const ropeDark = tone === "amber" ? "stroke-[#7a5a2b]" : "stroke-[#345b7d]";
  const ropeLight = tone === "amber" ? "stroke-[#d9ba74]" : "stroke-[#86b6da]";
  const ropeShine = tone === "amber" ? "stroke-[#f5e2b5]/75" : "stroke-[#c8e4ff]/75";
  const ropeGlow = tone === "amber" ? "drop-shadow-[0_0_9px_rgba(251,191,36,0.3)]" : "drop-shadow-[0_0_9px_rgba(125,211,252,0.3)]";

  return (
    <div className="relative mx-auto w-full max-w-7xl px-6 py-5 sm:px-8 sm:py-7" aria-hidden>
      <div className="relative h-10 overflow-hidden rounded-full">
        <div className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r ${accentLine}`} />
        <div className="absolute inset-x-0 top-1/2 h-9 -translate-y-1/2 overflow-hidden">
          <svg viewBox="0 0 1200 90" className={`absolute left-0 top-1/2 h-9 w-full -translate-y-1/2 ${ropeGlow}`} fill="none" preserveAspectRatio="none">
            <path
              d="M0 30C30 30 30 60 60 60C90 60 90 30 120 30C150 30 150 60 180 60C210 60 210 30 240 30C270 30 270 60 300 60C330 60 330 30 360 30C390 30 390 60 420 60C450 60 450 30 480 30C510 30 510 60 540 60C570 60 570 30 600 30C630 30 630 60 660 60C690 60 690 30 720 30C750 30 750 60 780 60C810 60 810 30 840 30C870 30 870 60 900 60C930 60 930 30 960 30C990 30 990 60 1020 60C1050 60 1050 30 1080 30C1110 30 1110 60 1140 60C1170 60 1170 30 1200 30"
              className={ropeDark}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M0 60C30 60 30 30 60 30C90 30 90 60 120 60C150 60 150 30 180 30C210 30 210 60 240 60C270 60 270 30 300 30C330 30 330 60 360 60C390 60 390 30 420 30C450 30 450 60 480 60C510 60 510 30 540 30C570 30 570 60 600 60C630 60 630 30 660 30C690 30 690 60 720 60C750 60 750 30 780 30C810 30 810 60 840 60C870 60 870 30 900 30C930 30 930 60 960 60C990 60 990 30 1020 30C1050 30 1050 60 1080 60C1110 60 1110 30 1140 30C1170 30 1170 60 1200 60"
              className={ropeLight}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M0 30C30 30 30 60 60 60C90 60 90 30 120 30C150 30 150 60 180 60C210 60 210 30 240 30C270 30 270 60 300 60C330 60 330 30 360 30C390 30 390 60 420 60C450 60 450 30 480 30C510 30 510 60 540 60C570 60 570 30 600 30C630 30 630 60 660 60C690 60 690 30 720 30C750 30 750 60 780 60C810 60 810 30 840 30C870 30 870 60 900 60C930 60 930 30 960 30C990 30 990 60 1020 60C1050 60 1050 30 1080 30C1110 30 1110 60 1140 60C1170 60 1170 30 1200 30"
              className={ropeShine}
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeDasharray="1 29"
            />
            <path
              d="M0 60C30 60 30 30 60 30C90 30 90 60 120 60C150 60 150 30 180 30C210 30 210 60 240 60C270 60 270 30 300 30C330 30 330 60 360 60C390 60 390 30 420 30C450 30 450 60 480 60C510 60 510 30 540 30C570 30 570 60 600 60C630 60 630 30 660 30C690 30 690 60 720 60C750 60 750 30 780 30C810 30 810 60 840 60C870 60 870 30 900 30C930 30 930 60 960 60C990 60 990 30 1020 30C1050 30 1050 60 1080 60C1110 60 1110 30 1140 30C1170 30 1170 60 1200 60"
              className={ropeShine}
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeDasharray="1 29"
              strokeDashoffset="14"
            />
          </svg>
        </div>
        <div className="absolute left-1/2 top-1/2 h-9 w-44 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),rgba(255,255,255,0)_72%)]" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_16px_rgba(245,158,11,0.5)] animate-section-core" />
        <span className={`absolute left-[calc(50%-68px)] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${accentGlow} animate-pulse`} />
        <span className={`absolute left-[calc(50%+68px)] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${accentGlow} animate-pulse`} style={{ animationDelay: "260ms" }} />
      </div>
    </div>
  );
}
