import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const INTERESTS = ["Culture", "Wildlife", "Beaches", "Honeymoon", "Adventure", "Luxury", "Food", "Hiking"];

export function CustomTourForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (i: string) =>
    setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow text-gold">Custom itinerary</div>
          <h2 className="text-display mt-4 text-5xl leading-[1.05] md:text-6xl">
            Receive a free, <span className="italic gradient-gold">customised itinerary</span> within 24 hours.
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            Tell us when you're coming and what you love. Our concierge will design a tailored journey — beautifully priced and ready to book.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-gold" /> No commitment, no fees</li>
            <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-gold" /> Designed by Sri Lankan locals</li>
            <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-gold" /> 100% private and flexible</li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Our team will reply within 24 hours.");
          }}
          className="rounded-3xl glass-dark p-8 shadow-luxe"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="name" required />
            <Field label="Country" name="country" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone Number" name="phone" />
            <Field label="Travel Dates" name="dates" placeholder="e.g. 12–22 Mar" />
            <Field label="Travellers" name="travelers" type="number" placeholder="2" />
            <div className="sm:col-span-2">
              <Field label="Budget Range (USD)" name="budget" placeholder="e.g. $1,500 – $3,000 per person" />
            </div>
          </div>

          <div className="mt-6">
            <div className="eyebrow mb-3 text-gold/80">Interests</div>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggle(i)}
                  className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
                    picked.includes(i)
                      ? "border-gold bg-gold text-navy"
                      : "border-white/20 text-white/80 hover:border-gold/60"
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-[1.02]"
          >
            Get My Free Itinerary
          </button>
          <p className="mt-3 text-center text-[11px] text-white/50">
            By submitting, you agree to our friendly privacy policy. We never spam.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-white/55">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}
