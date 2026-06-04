import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={`eyebrow ${light ? "text-gold" : "text-gold"} mb-4`}>{eyebrow}</div>
        <h2 className={`text-display text-4xl leading-[1.05] md:text-6xl ${light ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-5 text-base md:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
