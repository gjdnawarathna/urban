import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { TourPackages } from "@/components/site/TourPackages";
import { FeaturedDestinations } from "@/components/site/FeaturedDestinations";
import { CustomTourForm } from "@/components/site/CustomTourForm";
import heroImg from "@/assets/dest-sigiriya.jpg";
import { motion } from "motion/react";
import { Calendar, MapPin, Camera, Hotel, CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Sri Lanka Tour Packages — Luxury, Culture & Beach Holidays" },
      { name: "description", content: "7 and 10-day Sri Lanka tour packages: Sigiriya, Kandy, Ella, Yala, Bentota and the south coast. Luxury and classic options with private transport." },
      { property: "og:title", content: "Sri Lanka Tour Packages — Urban Travels" },
      { property: "og:description", content: "Luxury, culture and relaxation tours of Sri Lanka from USD 700 per person." },
      { property: "og:url", content: "/tours" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: ToursPage,
});

const SAMPLE_ITINERARY = [
  { day: 1, title: "Arrival in Colombo", text: "Met at the airport by your chauffeur and transferred to your hotel for welcome dinner." },
  { day: 2, title: "Sigiriya Rock & Dambulla Caves", text: "Climb the ancient lion fortress at sunrise and explore Buddhist cave temples." },
  { day: 3, title: "Kandy Cultural Tour", text: "Temple of the Tooth, traditional dance show and a stroll around Kandy Lake." },
  { day: 4, title: "Train to Ella", text: "Ride the world-famous Kandy–Ella railway through tea country." },
  { day: 5, title: "Yala Wildlife Safari", text: "Private 4×4 safari in search of leopards, elephants and sloth bears." },
  { day: 6, title: "Mirissa Beach & Whales", text: "Relax on golden sand and head out at dawn for whale watching." },
  { day: 7, title: "Galle Fort Heritage", text: "Cobbled streets, colonial architecture and sunset by the lighthouse." },
  { day: 8, title: "Departure", text: "Private transfer back to Colombo airport. Until next time." },
];

const INCLUDED = ["Private A/C vehicle", "English-speaking chauffeur-guide", "Handpicked hotels (breakfast)", "All transfers & taxes", "24/7 concierge support"];
const EXCLUDED = ["International flights", "Lunches & dinners", "Entrance fees to attractions", "Personal expenses & tips"];

function ToursPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tour packages"
        title={<>Designed for <span className="italic">your story</span>.</>}
        description="Browse our most-loved itineraries — then make them yours. Every package can be personalised to your dates, pace and pace."
        image={heroImg}
      />
      <TourPackages />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="eyebrow text-gold">Sample itinerary</div>
              <h2 className="text-display mt-3 text-4xl text-navy md:text-5xl">8-Day Classic Sri Lanka</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                A taste of how we design every journey — flexible, immersive and luxurious from start to finish.
              </p>
              <ol className="mt-10 space-y-6 border-l border-border pl-8">
                {SAMPLE_ITINERARY.map((d) => (
                  <li key={d.day} className="relative">
                    <span className="absolute -left-[42px] grid h-9 w-9 place-items-center rounded-full bg-gold text-xs font-bold text-navy">
                      {d.day}
                    </span>
                    <div className="text-display text-xl text-navy">Day {d.day} — {d.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{d.text}</p>
                  </li>
                ))}
              </ol>
            </motion.div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-navy p-8 text-white shadow-luxe">
                <div className="eyebrow text-gold">Trip facts</div>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex items-center gap-3"><Calendar className="h-4 w-4 text-gold" /> 8 days / 7 nights</li>
                  <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" /> 6 destinations</li>
                  <li className="flex items-center gap-3"><Hotel className="h-4 w-4 text-gold" /> 4★ & 5★ hotels</li>
                  <li className="flex items-center gap-3"><Camera className="h-4 w-4 text-gold" /> 12+ experiences</li>
                </ul>
                <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold py-3 text-sm font-semibold text-navy">
                  Inquire Now
                </Link>
              </div>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <div className="eyebrow text-gold">Inclusions</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {INCLUDED.map((i) => <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> {i}</li>)}
                </ul>
                <div className="eyebrow mt-6 text-muted-foreground">Exclusions</div>
                <ul className="mt-3 space-y-2 text-sm">
                  {EXCLUDED.map((i) => <li key={i} className="flex gap-2 text-muted-foreground"><XCircle className="h-4 w-4" /> {i}</li>)}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FeaturedDestinations />
      <CustomTourForm />
    </SiteLayout>
  );
}
