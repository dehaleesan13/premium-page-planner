import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import ctaImg from "@/assets/cta-banner.jpg";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={ctaImg}
        alt="Luxurious ballroom decorated with cascading florals and candlelight"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center lg:px-12 lg:py-40">
        <Reveal>
          <p className="label-eyebrow text-primary">Begin the conversation</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl italic leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
            Let's design <span className="text-gradient-gold">your day.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Tell us the date, the place, and the feeling you want guests to leave with.
            We'll take it from there.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="luxe" size="xl">
              <Link to="/contact">Request Consultation</Link>
            </Button>
            <Button asChild variant="ghostGold" size="xl">
              <a href="https://wa.me/919999999999">WhatsApp Studio</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
