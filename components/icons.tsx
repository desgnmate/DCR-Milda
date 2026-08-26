type IconProps = { className?: string };

const shared = {
  "aria-hidden": true,
  fill: "none",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

export function ArrowUpRight({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={`icon-arrow icon-up-right ${className}`.trim()}>
      <path d="M3.25 12.75 12.75 3.25M5.25 3.25h7.5v7.5" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={`icon-arrow icon-right ${className}`.trim()}>
      <path d="M2 8h11.5M9.5 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowLeft({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={`icon-arrow icon-left ${className}`.trim()}>
      <path d="M14 8H2.5M6.5 4l-4 4 4 4" />
    </svg>
  );
}

export function ArrowDown({ className = "" }: IconProps) {
  return (
    <svg {...shared} className={`icon-arrow icon-down ${className}`.trim()}>
      <path d="M8 2v11.5M4 9.5l4 4 4-4" />
    </svg>
  );
}
