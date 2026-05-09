import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mandap.jpg";

const HEADLINE = ["Where", "moments", "become", "heirlooms."];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cinematic luxury mandap with marigolds, gold drapery and candles at golden hour"
          width={1920}
          height={1280}
          fetchPriority="high"
          className={reduce ? "h-full w-full object-cover" : "ken-burns h-full w-full object-cover"}
        />
        <div className="absolute inset-0 bg-[oklch(0.10_0.005_60)]/55" />
        <div className="veil-bottom absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-primary/70" />
          <span className="label-eyebrow text-primary">Est. Cuddalore · South India</span>
          <span className="h-px w-10 bg-primary/70" />
        </motion.div>

        <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {HEADLINE.map((word, i) => (
            <motion.span
              key={i}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mr-3 inline-block italic"
            >
              {word === "moments" || word === "heirlooms." ? (
                <span className="text-gradient-gold">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="gold-divider mt-10 w-32"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Bespoke event design across Cuddalore, Chidambaram & Neyveli — composed
          with patience, dressed in candlelight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button asChild variant="luxe" size="xl">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
          <Button asChild variant="ghostGold" size="xl">
            <Link to="/portfolio">View Portfolio</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-primary/70">
          <span className="label-eyebrow text-[0.6rem]">Scroll</span>
          <span className="h-12 w-px animate-pulse bg-primary/50" />
        </div>
      </motion.div>
    </section>
  );
}
