const ITEMS = [
  "Weddings", "Receptions", "Engagements", "Birthdays",
  "Naming Ceremonies", "Corporate Galas", "Sangeet", "Reception",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-primary/15 bg-[oklch(0.10_0.005_60)] py-6">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="label-eyebrow flex items-center gap-12 text-primary/80">
            {item}
            <span className="text-primary/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
