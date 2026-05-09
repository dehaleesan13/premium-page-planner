import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import philosophyImage from "@/assets/philosophy.jpg";
import work5 from "@/assets/work-5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sri Selva Art Decorator" },
      { name: "description", content: "Three decades of celebration design from a family-run studio in Cuddalore, serving Tamil Nadu." },
      { property: "og:title", content: "About — Sri Selva Art Decorator" },
      { property: "og:description", content: "A family-run studio composing atmospheres across South India." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { t: "Restraint", b: "Every detail must earn its place. We strip away the obvious to reveal the beautiful." },
  { t: "Reverence", b: "We design around ritual, family, and the quiet meaning of the moment." },
  { t: "Reliability", b: "Showing up early, staying late, and delivering exactly what was promised — every time." },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel>The Studio</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl italic leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
              A family of <span className="text-gradient-gold">decorators.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-12 md:gap-20">
          <Reveal className="md:col-span-5">
            <img src={philosophyImage} alt="Florist arranging blooms" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <Reveal>
              <p>
                Sri Selva Art Decorator began three decades ago in Cuddalore — a family
                workshop dressing local temples and small weddings with marigolds and
                hand-stitched cotton drapes.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Today, the studio is known across Cuddalore, Chidambaram and Neyveli for
                composing celebrations of every scale, from intimate naming ceremonies to
                multi-day weddings of seven hundred guests.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                What hasn't changed is the way we work — slowly, carefully, listening
                first. The aesthetic has matured; the patience hasn't.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.11_0.005_60)] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionLabel className="justify-center">Our values</SectionLabel></Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.1}>
                <div>
                  <p className="font-display text-6xl italic text-primary/60">0{i + 1}</p>
                  <h3 className="mt-6 font-display text-3xl italic text-foreground">{v.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <img src={work5} alt="Brass diyas and marigold petals in candlelight" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="mt-6 font-display text-4xl italic leading-tight text-foreground md:text-5xl">
              Tell us about your <span className="text-gradient-gold">celebration.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              We take a small number of events each season so we can give every host
              our full attention. Begin the conversation early.
            </p>
            <div className="mt-10">
              <Button asChild variant="luxe" size="xl">
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
