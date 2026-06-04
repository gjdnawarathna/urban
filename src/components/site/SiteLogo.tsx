import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

const SIZES = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-20 w-20",
} as const;

type SiteLogoProps = {
  size?: keyof typeof SIZES;
  showTagline?: boolean;
  asLink?: boolean;
  className?: string;
};

export function SiteLogo({
  size = "md",
  showTagline = false,
  asLink = true,
  className = "",
}: SiteLogoProps) {
  const content = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt="Urban Travels Sri Lanka"
        className={`${SIZES[size]} shrink-0 rounded-full object-cover ring-2 ring-gold/50`}
        width={size === "lg" ? 80 : size === "md" ? 48 : 40}
        height={size === "lg" ? 80 : size === "md" ? 48 : 40}
      />
      {showTagline && (
        <span className="text-[10px] font-medium tracking-[0.3em] text-gold/80">SRI LANKA</span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" className="inline-flex transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}
