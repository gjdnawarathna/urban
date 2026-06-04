import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import sigiriya from "@/assets/dest-sigiriya.jpg";
import kandy from "@/assets/dest-kandy.jpg";
import ella from "@/assets/dest-ella.jpg";
import nuwara from "@/assets/dest-nuwara.jpg";
import yala from "@/assets/dest-yala.jpg";
import galle from "@/assets/dest-galle.jpg";
import mirissa from "@/assets/dest-mirissa.jpg";
import bentota from "@/assets/dest-bentota.jpg";

const DESTS = [
  { name: "Sigiriya", subtitle: "Cultural Triangle", img: sigiriya, span: "lg:col-span-2" },
  { name: "Kandy", subtitle: "Hill Capital", img: kandy, span: "" },
  { name: "Ella", subtitle: "Mountain Escape", img: ella, span: "" },
  { name: "Nuwara Eliya", subtitle: "Little England", img: nuwara, span: "" },
  { name: "Yala", subtitle: "Wildlife Safari", img: yala, span: "" },
  { name: "Galle", subtitle: "Colonial Fort", img: galle, span: "lg:col-span-2" },
  { name: "Mirissa", subtitle: "Whales & Beaches", img: mirissa, span: "" },
  { name: "Bentota", subtitle: "Tropical Resort Coast", img: bentota, span: "" },
];

export function FeaturedDestinations() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <SectionHeader
        eyebrow="Featured destinations"
        title={<>Many places. <span className="italic">One unforgettable island.</span></>}
        description="From misty highlands to palm-fringed shores, discover the regions our guests fall in love with."
      />
      <div className="mx-auto mt-16 grid max-w-7xl auto-rows-[300px] gap-5 px-6 md:grid-cols-2 lg:grid-cols-4">
        {DESTS.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
            className={`group relative overflow-hidden rounded-3xl ${d.span}`}
          >
            <img
              src={d.img}
              alt={d.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
            <Link to="/tours" className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="eyebrow text-gold/90">{d.subtitle}</div>
              <div className="mt-1 flex items-end justify-between">
                <div className="text-display text-4xl">{d.name}</div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-navy transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
