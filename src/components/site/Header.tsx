import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { waLink } from "./WhatsAppFloat";
import { SiteLogo } from "./SiteLogo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/tours", label: "Tours" },
  { to: "/transport", label: "Transport" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled
            ? "glass-dark rounded-full py-3 shadow-luxe"
            : ""
        }`}
        style={scrolled ? { maxWidth: "min(80rem, calc(100% - 1.5rem))" } : undefined}
      >
        <SiteLogo size="md" showTagline />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-white/85 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-5 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm transition-transform hover:scale-[1.03] hover:border-gold hover:bg-white/30 hover:text-gold"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            contact us
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-navy transition-transform hover:scale-[1.03] shadow-gold"
          >
            Plan My Tour
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-6 mt-2 rounded-2xl glass-dark p-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/20 px-5 py-2 text-center text-sm font-medium text-white shadow-sm backdrop-blur-sm"
            >
              <MessageCircle className="h-4 w-4" />
              +94 74 145 0646
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold px-5 py-2 text-center text-navy"
            >
              Plan My Tour
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
