import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO, type Category } from "@/lib/data/portfolio";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { useEffect } from "react";

const CATEGORIES: ("All" | Category)[] = ["All", "Weddings", "Receptions", "Birthdays", "Corporate"];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Sri Selva Art Decorator" },
      { name: "description", content: "A curated gallery of weddings, receptions, birthdays and corporate galas designed by Sri Selva." },
      { property: "og:title", content: "Portfolio — Sri Selva Art Decorator" },
      { property: "og:description", content: "Hand-curated event design across South India." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? 0 : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpenIdx((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, items.length]);

  return (
    <>
      <section className="bg-background px-6 pb-16 pt-40 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel>The Portfolio</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl italic leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
              Evenings, <span className="text-gradient-gold">remembered.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Filter by occasion. Click any frame to view it full-screen.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-3">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`label-eyebrow rounded-full border px-5 py-2.5 transition-colors ${
                    filter === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            <AnimatePresence mode="popLayout">
              {items.map((item, idx) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setOpenIdx(idx)}
                  className={`group relative overflow-hidden bg-muted text-left ${
                    item.span === "wide" ? "sm:col-span-2" : item.span === "tall" ? "row-span-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.venue}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-105 ${
                      item.span === "tall" ? "aspect-[3/5]" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="label-eyebrow text-primary">{item.category}</p>
                    <p className="mt-1.5 font-display text-xl italic text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.venue}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-xl"
            onClick={() => setOpenIdx(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 text-primary"
              onClick={() => setOpenIdx(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-6 text-primary md:left-10"
              onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i === null ? 0 : (i - 1 + items.length) % items.length)); }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              aria-label="Next"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-primary md:right-10"
              onClick={(e) => { e.stopPropagation(); setOpenIdx((i) => (i === null ? 0 : (i + 1) % items.length)); }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <motion.div
              key={items[openIdx].id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={items[openIdx].image} alt={items[openIdx].title} className="max-h-[80vh] w-auto object-contain" />
              <div className="mt-4 text-center">
                <p className="font-display text-2xl italic text-primary">{items[openIdx].title}</p>
                <p className="label-eyebrow mt-1 text-muted-foreground">{items[openIdx].venue}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
