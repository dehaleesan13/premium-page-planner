import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";

const QUOTES = [
  { q: "They didn't just decorate our wedding — they built the world we'll remember together. Every petal felt intentional.", who: "Lakshmi & Arun", event: "Wedding · Chidambaram" },
  { q: "From the first meeting to the last farewell, the team treated our reception like their own. The room genuinely glowed.", who: "Priya R.", event: "Reception · Cuddalore" },
  { q: "A rare combination of taste, restraint, and absolute reliability. Our gala looked editorial — and ran on time.", who: "Karthik M.", event: "Corporate Gala · Neyveli" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="bg-[oklch(0.11_0.005_60)] px-6 py-28 lg:px-12 lg:py-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal><SectionLabel className="justify-center">Voices</SectionLabel></Reveal>
        <div className="relative mt-12 min-h-[280px] sm:min-h-[240px]">
          <span aria-hidden className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[10rem] leading-none text-primary/30">❝</span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <p className="font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl md:text-4xl">
                {QUOTES[i].q}
              </p>
              <footer className="mt-10">
                <p className="font-display text-xl italic text-primary">{QUOTES[i].who}</p>
                <p className="label-eyebrow mt-1 text-muted-foreground">{QUOTES[i].event}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-12 flex justify-center gap-3">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${idx === i ? "w-12 bg-primary" : "w-6 bg-primary/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
