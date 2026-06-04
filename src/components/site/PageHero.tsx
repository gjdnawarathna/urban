import type { ReactNode } from "react";
import { motion } from "motion/react";

export function PageHero({
  eyebrow, title, description, image,
}: { eyebrow: string; title: ReactNode; description?: string; image: string }) {
  return (
    <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden bg-navy text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow text-gold">{eyebrow}</div>
          <h1 className="text-display mt-3 text-5xl leading-[1.05] md:text-7xl">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-white/75 md:text-lg">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
}
