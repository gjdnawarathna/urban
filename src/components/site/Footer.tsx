import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { waLink } from "./WhatsAppFloat";
import { SiteLogo } from "./SiteLogo";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/share/1J5kg9eUAm/",
    label: "Urban Travels on Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/ceylon_urban_travels?igsh=MTA3Ym9udnFlYXkwaw==",
    label: "Ceylon Urban Travels on Instagram",
    Icon: Instagram,
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
           style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }} />
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <SiteLogo size="lg" asLink={false} />
            <div className="eyebrow mt-3 text-gold">Sri Lanka</div>
            <p className="mt-5 max-w-xs text-sm text-white/70">
              Tailor-made tours, private chauffeurs and handpicked stays across the Pearl of the Indian Ocean.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explore" links={[
            ["/", "Home"], ["/about", "About"], ["/tours", "Tour Packages"],
            ["/transport", "Transport"], ["/blog", "Blog"], ["/contact", "Contact"],
          ]} />

          <FooterCol title="Destinations" links={[
            ["/tours", "Sigiriya"], ["/tours", "Kandy"], ["/tours", "Ella"],
            ["/tours", "Yala"], ["/tours", "Galle"], ["/tours", "Mirissa"],
          ]} />

          <div>
            <h4 className="eyebrow text-gold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" />Second Floor, De Mel Shopping Complex, Pallepola Road, Melsiripura, Sri Lanka</li>
              <li><a href="tel:+94741450646" className="flex gap-3 hover:text-gold"><Phone className="h-4 w-4 text-gold" />+94 74 145 0646</a></li>
              <li><a href="mailto:ceylonurbantravels@gmail.com" className="flex gap-3 hover:text-gold"><Mail className="h-4 w-4 text-gold" />ceylonurbantravels@gmail.com</a></li>
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                   className="mt-3 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-navy hover:scale-[1.03] transition-transform">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row">
          <p>© {new Date().getFullYear()} Urban Travels Sri Lanka. All rights reserved.</p>
          <p>Crafted with care in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="eyebrow text-gold">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-white/75">
        {links.map(([to, label], i) => (
          <li key={i}><Link to={to as never} className="hover:text-gold">{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
