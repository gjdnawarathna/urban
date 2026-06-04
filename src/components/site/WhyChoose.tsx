import { motion } from "motion/react";
import {
  Compass, Car, Hotel, Users, Headphones, BadgeDollarSign,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  { Icon: Compass, title: "Tailor-Made Experiences", text: "Every itinerary is shaped around your interests, pace and dreams." },
  { Icon: Car, title: "Reliable Transport", text: "Modern fleet with English-speaking chauffeur guides for total peace of mind." },
  { Icon: Hotel, title: "Handpicked Hotels", text: "Boutique villas, heritage estates and 5-star resorts negotiated at insider rates." },
  { Icon: Users, title: "Local Experts", text: "Sri Lankan team with deep cultural knowledge and personal connections island-wide." },
  { Icon: Headphones, title: "24/7 Customer Support", text: "Real humans on standby before, during and after your trip." },
  { Icon: BadgeDollarSign, title: "Transparent Pricing", text: "Honest quotes with no hidden fees — just exceptional value, beautifully delivered." },
];

export function WhyChoose() {
  return (
    <section className="relative bg-secondary py-24 md:py-32">
      <SectionHeader
        eyebrow="Why Urban Travels"
        title={<>The little things <br className="hidden md:block" /><span className="italic">make the journey</span>.</>}
        description="From the first reply to the last sunset, our team treats your holiday with the care of a private travel office."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            <div className="mt-6 h-px w-12 bg-gold transition-all group-hover:w-24" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
