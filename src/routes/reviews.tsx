import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reviews } from "@/components/site/Reviews";
import heroImg from "@/assets/dest-mirissa.jpg";
import bentota from "@/assets/dest-bentota.jpg";
import ella from "@/assets/dest-ella.jpg";
import yala from "@/assets/dest-yala.jpg";
import kandy from "@/assets/dest-kandy.jpg";
import galle from "@/assets/dest-galle.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Urban Travels Sri Lanka" },
      { name: "description", content: "Read verified Google reviews and guest stories from travellers who've toured Sri Lanka with Urban Travels." },
      { property: "og:title", content: "Guest Reviews — Urban Travels Sri Lanka" },
      { property: "og:description", content: "Loved by travellers from around the world. 4.9 average rating." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const GALLERY = [bentota, ella, yala, kandy, galle, heroImg];

function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Guest stories"
        title={<>4.9 ★ · <span className="italic">loved worldwide</span>.</>}
        description="A few words from the people who've travelled with us. We're grateful for every single one."
        image={heroImg}
      />
      <Reviews />
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="eyebrow text-gold">Guest gallery</div>
          <h2 className="text-display mt-2 text-4xl text-navy md:text-5xl">Moments from the road.</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                <img src={g} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
