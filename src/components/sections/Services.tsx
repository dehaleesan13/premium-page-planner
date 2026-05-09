import { Link } from "@tanstack/react-router";
import { Heart, Sparkles, Cake, Building2, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";

const SERVICES = [
  { icon: Heart, title: "Weddings", copy: "Mandap design, floral architecture, and full-day choreography for the wedding of your imagination." },
  { icon: Sparkles, title: "Receptions", copy: "Banquet styling, stage installations, and tablescapes that turn the night into a memory." },
  { icon: Cake, title: "Birthdays", copy: "Intimate to extravagant — themed celebrations crafted around the person at the centre." },
  { icon: Building2, title: "Corporate Galas", copy: "Brand-aligned event design for awards, launches, and milestone evenings." },
];

export function Services() {
  return (
    <section className="bg-background px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <Reveal><SectionLabel className="justify-center">What we design</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl italic leading-tight text-foreground md:text-6xl">
              Four ways to <span className="text-gradient-gold">celebrate.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden border border-primary/15 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <Link
                to="/services"
                className="group relative flex h-full flex-col justify-between bg-[oklch(0.13_0.008_60)] p-8 outline outline-1 outline-primary/15 transition-colors duration-500 hover:bg-[oklch(0.16_0.01_70)] lg:p-10"
              >
                <div>
                  <s.icon className="h-7 w-7 stroke-[1.2] text-primary transition-transform duration-700 group-hover:-translate-y-1" />
                  <h3 className="mt-8 font-display text-3xl italic text-foreground">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
                <div className="mt-10 flex items-center gap-2 label-eyebrow text-primary">
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
