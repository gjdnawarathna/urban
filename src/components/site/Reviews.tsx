import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const REVIEWS = [
  { name: "Emma Watson", country: "UK", text: "Urban Travels turned our 10-day honeymoon into the trip of a lifetime. Every hotel, every driver — perfection.", rating: 5 },
  { name: "Marcus Schneider", country: "Germany", text: "Punctual chauffeur, beautiful itinerary and the local insider tips were priceless. Will book again next year.", rating: 5 },
  { name: "Aisha Khan", country: "UAE", text: "Family of six with three kids — they planned every detail. Felt safe, pampered and looked after the whole way.", rating: 5 },
  { name: "Liam O'Connor", country: "Ireland", text: "Whale watching in Mirissa, leopards in Yala, sunset in Galle — exactly the cinematic Sri Lanka I dreamt of.", rating: 5 },
  { name: "Sofia Rossi", country: "Italy", text: "Bellissimo! The team replied in minutes on WhatsApp throughout. Most responsive travel agency I've ever used.", rating: 5 },
  { name: "Hiroshi Tanaka", country: "Japan", text: "Very professional, very personal. The driver guide became our friend by the end of the trip.", rating: 5 },
];

export function Reviews() {
  return (
    <section className="bg-background py-24 md:py-32">
      <SectionHeader
        eyebrow="Guest stories"
        title={<>Loved by travellers <span className="italic">from around the world</span>.</>}
        description="4.9 average rating across hundreds of verified Google reviews."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
            className="relative rounded-3xl border border-border bg-card p-8 shadow-card"
          >
            <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20" />
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold">
                {r.name.split(" ").map((s) => s[0]).join("")}
              </div>
              <div>
                <div className="font-medium text-navy">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.country} · Verified Google Review</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
