import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import sigiriya from "@/assets/dest-sigiriya.jpg";
import mirissa from "@/assets/dest-mirissa.jpg";
import yala from "@/assets/dest-yala.jpg";
import ella from "@/assets/dest-ella.jpg";
import nuwara from "@/assets/dest-nuwara.jpg";
import bentota from "@/assets/dest-bentota.jpg";

const PACKAGES = [
  { tag: "Family Tour", title: "Classic Sri Lanka Family Escape", days: 8, price: 1290, img: sigiriya, highlights: ["Cultural Triangle", "Kandy", "Bentota"] },
  { tag: "Honeymoon", title: "Romantic Tea Country & Coast", days: 10, price: 1890, img: nuwara, highlights: ["Nuwara Eliya", "Ella", "Mirissa"] },
  { tag: "Wildlife", title: "Leopards, Elephants & Whales", days: 7, price: 1450, img: yala, highlights: ["Yala", "Udawalawe", "Mirissa"] },
  { tag: "Luxury", title: "Private Villas & Boutique Hotels", days: 12, price: 3490, img: bentota, highlights: ["5★ Resorts", "Private Chef", "Helicopter"] },
  { tag: "Adventure", title: "Hike, Surf & Wild Sri Lanka", days: 9, price: 1690, img: ella, highlights: ["Adams Peak", "Arugam Bay", "Knuckles"] },
  { tag: "Beach", title: "South Coast Beach Hopping", days: 6, price: 990, img: mirissa, highlights: ["Mirissa", "Unawatuna", "Galle"] },
];

export function TourPackages() {
  return (
    <section className="relative bg-navy-deep py-24 text-white md:py-32">
      <SectionHeader
        eyebrow="Featured journeys"
        light
        title={<>Curated tours, <span className="italic">crafted for you</span>.</>}
        description="Six starting points — each shaped to your dates, pace and style. Or design something entirely your own."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="group overflow-hidden rounded-3xl glass-dark transition-transform hover:-translate-y-1"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
                {p.tag}
              </div>
              <div className="absolute bottom-4 right-4 rounded-full glass px-3 py-1 text-xs">
                from <span className="font-semibold text-gold">${p.price}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-white/55">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.days} days</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />Sri Lanka</span>
              </div>
              <h3 className="text-display mt-3 text-2xl text-white">{p.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <li key={h} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/70">{h}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <Link to="/contact" className="text-sm font-semibold text-gold underline-offset-4 hover:underline">
                  Send Inquiry →
                </Link>
                <Link to="/tours" className="text-xs text-white/55 hover:text-white">View itinerary</Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
