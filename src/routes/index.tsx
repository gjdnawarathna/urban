import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { WhyChoose } from "@/components/site/WhyChoose";
import { FeaturedDestinations } from "@/components/site/FeaturedDestinations";
import { TourPackages } from "@/components/site/TourPackages";
import { Fleet } from "@/components/site/Fleet";
import { Reviews } from "@/components/site/Reviews";
import { CustomTourForm } from "@/components/site/CustomTourForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urban Travels Sri Lanka — Tailor-Made Tours & Private Chauffeurs" },
      { name: "description", content: "Discover Sri Lanka your way. Tailor-made tours, private chauffeur transport, handpicked hotels and unforgettable experiences." },
      { property: "og:title", content: "Urban Travels Sri Lanka — Discover Sri Lanka Your Way" },
      { property: "og:description", content: "Luxury tailor-made Sri Lanka tours and private chauffeurs by trusted local experts." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <WhyChoose />
      <FeaturedDestinations />
      <TourPackages />
      <Fleet />
      <Reviews />
      <CustomTourForm />
    </SiteLayout>
  );
}
