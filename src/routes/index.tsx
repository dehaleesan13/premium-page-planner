import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/shared/Marquee";
import { SignatureWork } from "@/components/sections/SignatureWork";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Selva Art Decorator & Event Planner — Cuddalore · Chidambaram · Neyveli" },
      {
        name: "description",
        content:
          "Bespoke event design and decoration for weddings, receptions, and celebrations across Cuddalore, Chidambaram, and Neyveli.",
      },
      { property: "og:title", content: "Sri Selva — Where moments become heirlooms" },
      {
        property: "og:description",
        content: "Luxury event design across Cuddalore, Chidambaram & Neyveli.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Sri Selva Art Decorator & Event Planner",
          image: "https://example.com/og.jpg",
          telephone: "+91 99999 99999",
          priceRange: "₹₹₹",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cuddalore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          areaServed: ["Cuddalore", "Chidambaram", "Neyveli"],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <SignatureWork />
      <Philosophy />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
