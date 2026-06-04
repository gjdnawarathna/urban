import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Users, Snowflake, Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import sedan from "@/assets/fleet-sedan.jpg";
import suv from "@/assets/fleet-suv.jpg";
import van from "@/assets/fleet-van.jpg";
import coach from "@/assets/fleet-coach.jpg";

const FLEET = [
  { name: "Luxury Sedan", img: sedan, pax: "1–3", ac: true, luggage: "3 bags", note: "Airport transfers & couples" },
  { name: "Premium SUV", img: suv, pax: "1–4", ac: true, luggage: "4 bags", note: "Comfort across terrain" },
  { name: "Tourist Van", img: van, pax: "4–8", ac: true, luggage: "8 bags", note: "Families & small groups" },
  { name: "Mini Coach", img: coach, pax: "10–22", ac: true, luggage: "20+ bags", note: "Groups & corporate" },
];

export function Fleet() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <SectionHeader
        eyebrow="Our fleet"
        title={<>Private transport, <span className="italic">driven with pride</span>.</>}
        description="Every vehicle is modern, fully insured and chauffeured by a vetted English-speaking driver-guide."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {FLEET.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className="group overflow-hidden rounded-3xl bg-card shadow-card transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="eyebrow text-gold">Fleet</div>
              <h3 className="text-display mt-2 text-2xl text-navy">{f.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.note}</p>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> {f.pax} passengers</li>
                <li className="flex items-center gap-2"><Snowflake className="h-4 w-4 text-gold" /> Climate control</li>
                <li className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-gold" /> {f.luggage} luggage</li>
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/transport"
          className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          View Full Fleet →
        </Link>
      </div>
    </section>
  );
}
