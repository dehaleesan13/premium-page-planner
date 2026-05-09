import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sri Selva Art Decorator" },
      { name: "description", content: "Wedding, reception, birthday and corporate event design across Cuddalore, Chidambaram and Neyveli." },
      { property: "og:title", content: "Services — Sri Selva Art Decorator" },
      { property: "og:description", content: "Four ways we craft unforgettable celebrations." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Weddings",
    image: work1,
    body: "From the mandap to the mehndi night, we orchestrate every visual element of the wedding — florals, drapery, lighting, seating, signage. Designed for ceremonies that honour tradition and feel utterly personal.",
    bullets: ["Mandap & stage architecture", "Floral & garland design", "Aisle, entrance, and pooja styling", "Lighting & ambient design"],
  },
  {
    title: "Receptions",
    image: work2,
    body: "Banquet styling that turns the evening into a memory. We compose the room around the couple — tablescapes, statement centerpieces, custom backdrops, and ambient layering.",
    bullets: ["Stage & backdrop installations", "Tablescapes & centerpieces", "Lounge & cocktail areas", "Themed colour palettes"],
  },
  {
    title: "Birthdays & Private",
    image: work3,
    body: "Intimate to extravagant — themed celebrations crafted around the person at the centre. Milestone birthdays, anniversaries, naming ceremonies, and engagement parties.",
    bullets: ["Concept & theme design", "Balloon & floral installations", "Cake table styling", "Photo-ready backdrops"],
  },
  {
    title: "Corporate Galas",
    image: work6,
    body: "Brand-aligned event design for awards nights, product launches, and corporate milestones. Sleek, on-brand, and operationally seamless.",
    bullets: ["Stage & AV scenography", "Brand-aligned styling", "Guest experience design", "End-to-end execution"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel>What we design</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl italic leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
              Four crafts. <span className="text-gradient-gold">One studio.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Each engagement begins with a conversation and ends with an evening
              your guests will keep retelling.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-28 lg:space-y-40">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title}>
              <div className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative">
                  <img src={s.image} alt={s.title} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                  <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-primary/60 md:block" />
                </div>
                <div>
                  <p className="label-eyebrow">0{i + 1}</p>
                  <h2 className="mt-4 font-display text-4xl italic text-foreground md:text-6xl">{s.title}</h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.body}</p>
                  <ul className="mt-8 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                        <span className="mt-2 h-px w-6 shrink-0 bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Button asChild variant="ghostGold" size="default">
                      <Link to="/contact">Enquire about {s.title}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
