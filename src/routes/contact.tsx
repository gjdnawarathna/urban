import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CustomTourForm } from "@/components/site/CustomTourForm";
import heroImg from "@/assets/dest-galle.jpg";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { waLink } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Urban Travels Sri Lanka — Plan Your Custom Tour" },
      { name: "description", content: "Get in touch with Urban Travels Sri Lanka. Call, email, or WhatsApp our team — we reply within hours, 7 days a week." },
      { property: "og:title", content: "Contact Urban Travels Sri Lanka" },
      { property: "og:description", content: "Reach our team by phone, email or WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const ITEMS = [
  { Icon: Phone, label: "Phone", value: "+94 74 145 0646", href: "tel:+94741450646" },
  { Icon: Mail, label: "Email", value: "urbantravel360@gmail.com", href: "mailto:urbantravel360@gmail.com" },
  { Icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: waLink },
  { Icon: MapPin, label: "Office", value: "Melsiripura, Sri Lanka", href: "#map" },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title={<>We'd love to <span className="italic">hear from you</span>.</>}
        description="Our team replies in hours — not days. Call, email, or message us on WhatsApp."
        image={heroImg}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-3xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <div className="eyebrow mt-5 text-muted-foreground">{label}</div>
              <div className="mt-1 text-lg font-medium text-navy group-hover:text-gold">{value}</div>
            </motion.a>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-navy p-8 text-white lg:col-span-1">
              <div className="eyebrow text-gold">Visit our office</div>
              <h3 className="text-display mt-3 text-2xl">Urban Travels</h3>
              <p className="mt-3 text-sm text-white/75">
                Second Floor, De Mel Shopping Complex,<br />
                Pallepola Road,<br />
                Melsiripura, Sri Lanka
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/75">
                <Clock className="h-4 w-4 text-gold" />
                Open daily · 8:00 – 20:00
              </div>
            </div>
            <div id="map" className="overflow-hidden rounded-3xl lg:col-span-2 shadow-card">
              <iframe
                title="Office map"
                src="https://www.google.com/maps?q=Melsiripura,+Sri+Lanka&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <CustomTourForm />
    </SiteLayout>
  );
}
