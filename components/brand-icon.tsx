type BrandIconData = {
  path: string;
};

type BrandIconProps = {
  icon: BrandIconData;
  className?: string;
};

export function BrandIcon({ icon, className = "" }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`brand-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
