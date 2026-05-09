import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import philosophyImage from "@/assets/philosophy.jpg";

const LINES = [
  "We don't decorate venues.",
  "We compose atmospheres —",
  "the kind that memory keeps.",
];

export function Philosophy() {
  return (
    <section className="relative bg-[oklch(0.11_0.005_60)] px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel>Philosophy</SectionLabel>
          </Reveal>
          <div className="mt-10 space-y-2 font-display text-3xl italic leading-[1.15] text-foreground sm:text-5xl md:text-6xl">
            {LINES.map((line, i) => (
              <Reveal key={i} delay={0.15 * i} y={20}>
                <p className={i === 1 ? "text-gradient-gold" : ""}>{line}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground">
              Three decades of craft, hundreds of celebrations, one principle:
              every detail must earn its place. From the first sketch to the last
              candle lit, we design with restraint and reverence.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:col-span-5">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-primary/60" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-primary/60" />
            <img
              src={philosophyImage}
              alt="Hands arranging white roses and marigolds in candlelight"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
