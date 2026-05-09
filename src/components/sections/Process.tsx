import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";

const STEPS = [
  { n: "01", title: "Consult", body: "We sit with you, listen to the story, and understand what this evening must feel like." },
  { n: "02", title: "Design", body: "Mood boards, sketches, floral palettes, and a detailed visual blueprint of the entire event." },
  { n: "03", title: "Curate", body: "Sourcing florals, fabrics, lighting, and props from trusted artisans across South India." },
  { n: "04", title: "Execute", body: "On the day, our team transforms the venue while you focus on what matters — your people." },
];

export function Process() {
  return (
    <section className="relative bg-[oklch(0.11_0.005_60)] px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <Reveal><SectionLabel className="justify-center">How we work</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl italic leading-tight text-foreground md:text-6xl">
              From first call to <span className="text-gradient-gold">final candle.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2 md:block" />

          <div className="space-y-16 md:space-y-28">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={0.1}>
                <div className={`grid items-start gap-6 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`relative ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="font-display text-7xl italic text-primary/80 md:text-8xl">{step.n}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-2 top-3 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary pulse-gold md:left-[-4rem] md:block" />
                    <h3 className="font-display text-3xl italic text-foreground md:text-4xl">{step.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
