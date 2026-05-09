import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-[oklch(0.10_0.005_60)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-3xl italic text-primary">Sri Selva</span>
            <p className="label-eyebrow mt-1 text-[0.6rem] text-muted-foreground">
              Art Decorator · Event Planner
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              A studio of celebration design serving Cuddalore, Chidambaram & Neyveli.
              Hand-curated weddings, receptions, birthdays, and corporate galas — composed
              with patience, dressed in candlelight.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow mb-5">Studio</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label-eyebrow mb-5">Visit</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Cuddalore, Tamil Nadu<br />Serving Chidambaram & Neyveli</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919999999999" className="hover:text-primary">+91 99999 99999</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                <a href="https://wa.me/919999999999" className="hover:text-primary">WhatsApp Studio</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-16" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Sri Selva Art Decorator & Event Planner. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="https://wa.me/919999999999" aria-label="WhatsApp" className="hover:text-primary"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
