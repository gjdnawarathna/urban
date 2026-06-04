import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import sigiriya from "@/assets/dest-sigiriya.jpg";
import yala from "@/assets/dest-yala.jpg";
import bentota from "@/assets/dest-bentota.jpg";
import colombo from "@/assets/dest-colombo.jpg";

const PACKAGES = [
  {
    tag: "Luxury",
    title: "7 Days Sri Lanka — Sigiriya | Kandy | Ella | Bentota",
    days: 7,
    price: 899,
    priceSuffix: "(pp)",
    rating: 5.0,
    reviews: 7,
    included: "3–4 star & boutique resorts. Private luxury vehicle, private safari experience, breakfast + selected dinners.",
    img: sigiriya,
    highlights: ["Sigiriya", "Kandy", "Ella", "Bentota"],
  },
  {
    tag: "Culture",
    title: "7 Days / 6 Nights — Classic Sigiriya | Kandy | Ella | Yala | Bentota",
    days: 7,
    nights: 6,
    price: 700,
    priceAlt: "LKR 165,000",
    rating: 5.0,
    reviews: 10,
    included: "Hotels & breakfast. Private transport and safari experience.",
    img: yala,
    highlights: ["Sigiriya", "Kandy", "Ella", "Yala", "Bentota"],
  },
  {
    tag: "Luxury",
    title: "7 Days Luxury — Sigiriya | Kandy | Yala | Bentota | Ella",
    days: 7,
    price: 1350,
    priceSuffix: "(pp)",
    rating: 5.0,
    reviews: 12,
    included: "5-star & boutique resorts. Private luxury vehicle, private safari experience, breakfast + selected dinners.",
    img: bentota,
    highlights: ["Sigiriya", "Kandy", "Yala", "Bentota", "Ella"],
  },
  {
    tag: "Relaxation",
    title: "10 Days / 9 Nights — Negombo | Sigiriya | Kandy | Ella | Thalpe Beach",
    days: 10,
    nights: 9,
    price: 1150,
    pricePrefix: "Only USD",
    rating: 5.0,
    reviews: 9,
    included: "3-star accommodation, private transport, daily breakfast, and driver-guide.",
    img: colombo,
    highlights: ["Negombo", "Sigiriya", "Kandy", "Ella", "Thalpe Beach"],
  },
];

function formatDuration(days: number, nights?: number) {
  if (nights != null) return `${days} days / ${nights} nights`;
  return `${days} days`;
}

export function TourPackages() {
  return (
    <section className="relative bg-navy-deep py-24 text-white md:py-32">
      <SectionHeader
        eyebrow="Featured journeys"
        light
        title={<>Curated tours, <span className="italic">crafted for you</span>.</>}
        description="Four handpicked itineraries — each shaped to your dates, pace and style. Or design something entirely your own."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 md:grid-cols-2">
        {PACKAGES.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
            className="group overflow-hidden rounded-3xl glass-dark transition-transform hover:-translate-y-1"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
                {p.tag}
              </div>
              <div className="absolute bottom-4 right-4 max-w-[70%] rounded-full glass px-3 py-1.5 text-right text-xs leading-snug">
                {p.pricePrefix ? (
                  <span>{p.pricePrefix} <span className="font-semibold text-gold">${p.price.toLocaleString()}</span></span>
                ) : (
                  <>
                    from <span className="font-semibold text-gold">${p.price.toLocaleString()}</span>
                    {p.priceSuffix && <span className="text-white/70"> {p.priceSuffix}</span>}
                    {p.priceAlt && (
                      <span className="block text-[10px] text-white/60">/ {p.priceAlt}</span>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/55">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {formatDuration(p.days, p.nights)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                  {p.rating.toFixed(1)} ({p.reviews} reviews)
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Sri Lanka
                </span>
              </div>
              <h3 className="text-display mt-3 text-xl text-white md:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                <span className="font-medium text-white/80">What&apos;s included: </span>
                {p.included}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <li key={h} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/70">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <Link to="/contact" className="text-sm font-semibold text-gold underline-offset-4 hover:underline">
                  Send Inquiry →
                </Link>
                <Link to="/tours" className="text-xs text-white/55 hover:text-white">
                  View itinerary
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
