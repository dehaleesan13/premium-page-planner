import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { PORTFOLIO } from "@/lib/data/portfolio";

function ParallaxTile({
  item,
  speed,
  className,
}: {
  item: (typeof PORTFOLIO)[number];
  speed: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-muted ${className ?? ""}`}
    >
      <motion.img
        src={item.image}
        alt={`${item.title} — ${item.venue}`}
        loading="lazy"
        style={reduce ? undefined : { y }}
        className="h-[115%] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-700 group-hover:translate-y-0">
        <p className="label-eyebrow text-primary">{item.category}</p>
        <p className="mt-2 font-display text-2xl italic text-foreground">{item.title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{item.venue}</p>
      </div>
    </div>
  );
}

export function SignatureWork() {
  const items = PORTFOLIO.slice(0, 6);
  return (
    <section className="relative bg-background px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>Our Craft</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-display text-4xl italic leading-[1.1] text-foreground md:text-6xl">
                A portfolio of <span className="text-gradient-gold">unforgettable evenings.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Each event is designed in conversation with its hosts — drawn from
              memory, ritual and the architecture of the venue.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-6">
          <Reveal className="md:col-span-4 md:row-span-2"><ParallaxTile item={items[0]} speed={50} className="aspect-[4/5] md:aspect-auto md:h-full" /></Reveal>
          <Reveal delay={0.1} className="md:col-span-2"><ParallaxTile item={items[1]} speed={30} className="aspect-[4/3]" /></Reveal>
          <Reveal delay={0.15} className="md:col-span-2"><ParallaxTile item={items[2]} speed={40} className="aspect-[4/3]" /></Reveal>
          <Reveal delay={0.2} className="md:col-span-3"><ParallaxTile item={items[3]} speed={35} className="aspect-[3/4] md:aspect-[5/6]" /></Reveal>
          <Reveal delay={0.25} className="md:col-span-3"><ParallaxTile item={items[4]} speed={45} className="aspect-[4/3] md:aspect-[5/6]" /></Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <Button asChild variant="ghostGold" size="xl">
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
