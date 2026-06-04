import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/dest-ella.jpg";
import sig from "@/assets/dest-sigiriya.jpg";
import mir from "@/assets/dest-mirissa.jpg";
import kan from "@/assets/dest-kandy.jpg";
import yal from "@/assets/dest-yala.jpg";
import ell from "@/assets/dest-ella.jpg";
import nuw from "@/assets/dest-nuwara.jpg";

const POSTS = [
  { title: "Best Places to Visit in Sri Lanka", excerpt: "From ancient rock fortresses to wild leopard country, here are the regions you can't miss.", img: sig, read: "8 min", cat: "Travel Guide" },
  { title: "Sri Lanka Travel Guide for First-Timers", excerpt: "Visas, weather, currency, etiquette and everything else you need to know before you fly.", img: kan, read: "12 min", cat: "Travel Guide" },
  { title: "Top Beaches in Sri Lanka", excerpt: "Mirissa, Unawatuna, Bentota and the secret coves only locals know about.", img: mir, read: "6 min", cat: "Beaches" },
  { title: "Best Time to Visit Sri Lanka", excerpt: "Two monsoons, two coasts — here's how to chase the sun all year round.", img: nuw, read: "5 min", cat: "Planning" },
  { title: "Cultural Attractions in Sri Lanka", excerpt: "Temples, festivals and 2,500 years of living history.", img: ell, read: "9 min", cat: "Culture" },
  { title: "Sri Lanka Wildlife Experiences", excerpt: "Leopards in Yala, elephants in Minneriya, whales in Mirissa.", img: yal, read: "7 min", cat: "Wildlife" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Sri Lanka Travel Blog — Tips, Guides & Stories" },
      { name: "description", content: "Insider Sri Lanka travel guides written by our local team — best beaches, when to visit, cultural highlights and wildlife." },
      { property: "og:title", content: "Sri Lanka Travel Blog — Urban Travels" },
      { property: "og:description", content: "Local Sri Lanka travel tips, guides and stories." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Journal"
        title={<>Stories from <span className="italic">the island</span>.</>}
        description="Local tips, hidden corners and travel inspiration — straight from our team in Sri Lanka."
        image={heroImg}
      />
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="group overflow-hidden rounded-3xl bg-card shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="text-gold">{p.cat}</span> · {p.read} read
                </div>
                <h3 className="text-display mt-3 text-2xl text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link to="/blog" className="mt-5 inline-block text-sm font-semibold text-gold">Read article →</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
