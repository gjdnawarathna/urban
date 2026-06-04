import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Fleet } from "@/components/site/Fleet";
import heroImg from "@/assets/fleet-suv.jpg";
import { motion } from "motion/react";
import { Plane, Building2, Map as MapIcon, Briefcase, Users } from "lucide-react";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Sri Lanka Private Transport — Airport Transfers & Chauffeur Tours" },
      { name: "description", content: "Modern fleet, English-speaking chauffeur-guides, airport transfers, round tours, corporate and group transport across Sri Lanka." },
      { property: "og:title", content: "Private Transport in Sri Lanka — Urban Travels" },
      { property: "og:description", content: "Premium chauffeur-driven cars, vans and coaches across Sri Lanka." },
      { property: "og:url", content: "/transport" },
    ],
    links: [{ rel: "canonical", href: "/transport" }],
  }),
  component: TransportPage,
});

const SERVICES = [
  { Icon: Plane, title: "Airport Transfers", text: "Meet & greet from arrivals straight to your hotel — anywhere on the island." },
  { Icon: Building2, title: "City Transfers", text: "Comfortable point-to-point transport between major cities and hotels." },
  { Icon: MapIcon, title: "Round Tours", text: "Full itinerary transport with your own chauffeur for the entire trip." },
  { Icon: Briefcase, title: "Corporate Transport", text: "Discreet, on-time executive transport for meetings and events." },
  { Icon: Users, title: "Group Transport", text: "Mini-coaches and luxury buses for weddings, retreats and large groups." },
];

function TransportPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Transport services"
        title={<>Drive the island, <span className="italic">in good hands</span>.</>}
        description="Every chauffeur is vetted, English-speaking and trained in hospitality. Your safety and comfort are non-negotiable."
        image={heroImg}
      />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-display mt-5 text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Fleet />
      <section className="bg-navy py-20 text-center text-white">
        <h2 className="text-display text-4xl md:text-5xl">Ready to ride in comfort?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">Book your chauffeur in minutes — we'll confirm within an hour.</p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy">
          Book Transport →
        </Link>
      </section>
    </SiteLayout>
  );
}
