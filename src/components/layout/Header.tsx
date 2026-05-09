import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/portfolio", label: "Portfolio", exact: false },
  { to: "/services", label: "Services", exact: false },
  { to: "/about", label: "About", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-primary/10 py-3" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl italic text-primary tracking-tight">Sri Selva</span>
          <span className="label-eyebrow mt-0.5 text-[0.55rem] text-muted-foreground">
            Art Decorator · Event Planner
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="label-eyebrow text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="luxe" size="default">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className="text-primary md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl transition-all duration-500 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-2xl italic text-primary">Sri Selva</span>
          <button aria-label="Close" className="text-primary" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 px-6 pt-20">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.exact }}
              className="font-display text-4xl italic text-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
            <Button asChild variant="luxe" size="xl">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Consultation</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
