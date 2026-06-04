import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, MessageCircle, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroTrain from "@/assets/hero-train.jpg";
import mirissa from "@/assets/dest-mirissa.jpg";
import sigiriya from "@/assets/dest-sigiriya.jpg";
import colombo from "@/assets/dest-colombo.jpg";
import ella from "@/assets/dest-ella.jpg";
import kandy from "@/assets/dest-kandy.jpg";
import yala from "@/assets/dest-yala.jpg";
import { waLink } from "./WhatsAppFloat";

const DESTINATIONS = [
  { name: "Ella", tag: "Train through the clouds", img: ella },
  { name: "Mirissa", tag: "Whales & turquoise bays", img: mirissa },
  { name: "Sigiriya", tag: "The lion rock fortress", img: sigiriya },
  { name: "Kandy", tag: "Cultural heartbeat", img: kandy },
  { name: "Colombo", tag: "Capital with character", img: colombo },
  { name: "Yala", tag: "Leopards in the wild", img: yala },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const active = DESTINATIONS[index];

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % DESTINATIONS.length), 5500);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % DESTINATIONS.length);
  const prev = () => setIndex((i) => (i - 1 + DESTINATIONS.length) % DESTINATIONS.length);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-navy-deep text-white">
      {/* Background image (Ella train, cinematic) */}
      <div className="absolute inset-0">
        <img
          src={heroTrain}
          alt="Sri Lanka train through tea plantations"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </div>

      {/* Giant background destination text */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[8%] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 40, letterSpacing: "0.2em" }}
            animate={{ opacity: 0.08, y: 0, letterSpacing: "0.04em" }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-display select-none whitespace-nowrap text-[18vw] font-semibold leading-none text-white"
            style={{ WebkitTextStroke: "1px rgba(212,175,55,0.35)", color: "transparent" }}
          >
            {active.name.toUpperCase()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content grid */}
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-40 lg:grid-cols-12 lg:gap-8">
        {/* Left */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="eyebrow text-gold"
          >
            — Welcome to
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-display mt-4 text-[14vw] leading-[0.92] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Sri <span className="italic gradient-gold">Lanka</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            Tailor-made tours, private transport, handpicked hotels and unforgettable
            experiences — crafted by local experts who call this island home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-[1.04]"
            >
              Plan My Tour
              <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-gold transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm text-white backdrop-blur-md transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-white/55"
          >
            <span>★ ★ ★ ★ ★ Google Reviews</span>
            <span>Local Experts · Since 2015</span>
            <span>24/7 Concierge</span>
          </motion.div>
        </div>

        {/* Right: destination slider */}
        <div className="lg:col-span-6">
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div className="eyebrow text-white/60">Featured destinations</div>
              <div className="flex gap-2">
                <button onClick={prev} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={next} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative h-[460px] sm:h-[520px]">
              {DESTINATIONS.map((d, i) => {
                const offset = (i - index + DESTINATIONS.length) % DESTINATIONS.length;
                const visible = offset <= 2;
                return (
                  <motion.div
                    key={d.name}
                    animate={{
                      x: offset * 70,
                      y: offset * 16,
                      scale: 1 - offset * 0.06,
                      opacity: visible ? 1 - offset * 0.25 : 0,
                      zIndex: 10 - offset,
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 overflow-hidden rounded-3xl shadow-luxe"
                  >
                    <img src={d.img} alt={d.name} loading={i === 0 ? "eager" : "lazy"} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="glass rounded-2xl p-5">
                        <div className="flex items-center gap-2 text-xs text-gold">
                          <MapPin className="h-3.5 w-3.5" /> SRI LANKA
                        </div>
                        <div className="mt-2 flex items-end justify-between">
                          <div>
                            <div className="text-display text-3xl text-white">{d.name}</div>
                            <div className="text-sm text-white/70">{d.tag}</div>
                          </div>
                          <Link to="/tours" className="rounded-full bg-gold px-4 py-2 text-xs font-semibold text-navy">
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2">
              {DESTINATIONS.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => setIndex(i)}
                  className={`h-1 rounded-full transition-all ${
                    i === index ? "w-10 bg-gold" : "w-5 bg-white/25"
                  }`}
                  aria-label={d.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/50">
          Scroll
          <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
