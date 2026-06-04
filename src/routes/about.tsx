import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reviews } from "@/components/site/Reviews";
import heroImg from "@/assets/dest-nuwara.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Urban Travels Sri Lanka — Local Experts You Can Trust" },
      { name: "description", content: "Meet the Sri Lankan team behind Urban Travels. Personalised planning, reliable transport, transparent pricing and fast communication." },
      { property: "og:title", content: "About Urban Travels Sri Lanka" },
      { property: "og:description", content: "The Sri Lankan team designing your perfect island holiday." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TRUST = [
  "Personalised Planning", "Reliable Transport",
  "Transparent Pricing", "Fast Communication",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our story"
        title={<>Sri Lankan <span className="italic">at heart</span>.</>}
        description="Born in the hills of Melsiripura, Urban Travels was founded on a simple idea — that travellers deserve a friend on the inside."
        image={heroImg}
      />
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="eyebrow text-gold">Mission</div>
            <h2 className="text-display mt-3 text-4xl text-navy md:text-5xl">
              Deliver exceptional travel through <span className="italic">personalised service</span> and local expertise.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We design holidays the way we'd plan one for a close friend — every hotel chosen with care, every driver hand-picked, every restaurant tested.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="eyebrow text-gold">Vision</div>
            <h2 className="text-display mt-3 text-4xl text-navy md:text-5xl">
              To become Sri Lanka's most <span className="italic">trusted travel partner</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              By treating every guest as a guest in our own home, we're building a reputation worth more than any advertisement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <SectionHeader eyebrow="Why guests trust us" title={<>Four promises, <span className="italic">always kept</span>.</>} />
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl bg-card p-5 shadow-card">
              <CheckCircle2 className="h-6 w-6 text-gold" />
              <span className="font-medium text-navy">{t}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white">
            Start Planning Your Trip →
          </Link>
        </div>
      </section>
      <Reviews />
    </SiteLayout>
  );
}
