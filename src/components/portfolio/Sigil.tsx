// Symmetric cybersigil ornament. The left half is drawn once and mirrored.
const half = [
  "M100 0 L103.5 200 L100 400 L96.5 200 Z",
  "M100 118 C72 110 42 82 18 26 C48 70 76 96 100 104 Z",
  "M100 58 C86 54 76 40 70 16 C80 36 90 46 100 49 Z",
  "M100 162 C74 168 52 156 36 128 C58 146 80 152 100 150 Z",
  "M100 214 C62 212 30 240 6 304 C40 258 70 236 100 228 Z",
  "M100 300 C82 308 70 336 72 384 C78 350 88 326 100 316 Z",
  "M96 250 C84 262 80 280 86 300 C88 282 92 268 99 258 Z",
];

export function Sigil({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg
      className={`sigil ${className}`}
      viewBox="0 0 200 400"
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <g>
        {half.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g transform="translate(200 0) scale(-1 1)">
        {half.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}

// Horizontal thorn divider.
export function ThornRule({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`thorn-rule ${className}`}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 20 L560 18.5 C575 12 588 4 600 0 C612 4 625 12 640 18.5 L1200 20 L640 21.5 C625 28 612 36 600 40 C588 36 575 28 560 21.5 Z" />
      <path d="M470 20 C490 14 505 6 512 -2 C508 8 500 16 492 20 C500 24 508 32 512 42 C505 34 490 26 470 20 Z" />
      <path d="M730 20 C710 14 695 6 688 -2 C692 8 700 16 708 20 C700 24 692 32 688 42 C695 34 710 26 730 20 Z" />
    </svg>
  );
}
