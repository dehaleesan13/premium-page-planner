import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sri Selva Art Decorator" },
      { name: "description", content: "Begin the conversation. Request a consultation for weddings, receptions and events across Cuddalore, Chidambaram and Neyveli." },
      { property: "og:title", content: "Contact — Sri Selva Art Decorator" },
      { property: "og:description", content: "Tell us about your celebration." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  phone: z.string().trim().regex(/^[+\d\s-]{10,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  eventType: z.string().min(1, "Choose an event type"),
  eventDate: z.string().min(1, "Choose a date"),
  city: z.string().min(1, "Choose a city"),
  message: z.string().trim().max(1000).optional().default(""),
});

const empty = { name: "", phone: "", email: "", eventType: "", eventDate: "", city: "", message: "" };

function ContactPage() {
  const [data, setData] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((iss) => { errs[iss.path[0] as string] = iss.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setData(empty);
    toast.success("Inquiry received", { description: "We'll be in touch within 24 hours." });
  };

  return (
    <>
      <section className="px-6 pb-12 pt-40 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionLabel>Begin the conversation</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl italic leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
              Tell us about your <span className="text-gradient-gold">celebration.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12 md:gap-20">
          {/* Form */}
          <Reveal className="md:col-span-7">
            <form onSubmit={submit} className="space-y-6 border border-primary/15 bg-card p-8 md:p-12">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Your Name" error={errors.name}>
                  <Input value={data.name} onChange={(e) => set("name", e.target.value)} placeholder="Lakshmi Narayanan" maxLength={100} />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <Input value={data.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 99999 99999" />
                </Field>
              </div>
              <Field label="Email" error={errors.email}>
                <Input type="email" value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" maxLength={255} />
              </Field>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Event Type" error={errors.eventType}>
                  <Select value={data.eventType} onValueChange={(v) => set("eventType", v)}>
                    <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="reception">Reception</SelectItem>
                      <SelectItem value="birthday">Birthday</SelectItem>
                      <SelectItem value="naming">Naming Ceremony</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Event Date" error={errors.eventDate}>
                  <Input type="date" value={data.eventDate} onChange={(e) => set("eventDate", e.target.value)} />
                </Field>
              </div>
              <Field label="City" error={errors.city}>
                <Select value={data.city} onValueChange={(v) => set("city", v)}>
                  <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cuddalore">Cuddalore</SelectItem>
                    <SelectItem value="chidambaram">Chidambaram</SelectItem>
                    <SelectItem value="neyveli">Neyveli</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Tell us a little more (optional)" error={errors.message}>
                <Textarea rows={5} value={data.message} onChange={(e) => set("message", e.target.value)} placeholder="Guest count, venue, the feeling you want…" maxLength={1000} />
              </Field>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button type="submit" variant="luxe" size="xl" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Inquiry"}
                </Button>
                <Button asChild type="button" variant="ghostGold" size="xl">
                  <a href="https://wa.me/919999999999?text=Hello%20Sri%20Selva%2C%20I%27d%20like%20to%20enquire%20about%20event%20decoration.">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Studio
                  </a>
                </Button>
              </div>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="space-y-10">
              <div>
                <p className="label-eyebrow">Studio</p>
                <p className="mt-3 font-display text-2xl italic text-foreground">Cuddalore, Tamil Nadu</p>
                <p className="mt-2 text-sm text-muted-foreground">Serving Cuddalore · Chidambaram · Neyveli</p>
              </div>
              <ul className="space-y-5">
                <InfoRow icon={<Phone className="h-4 w-4" />} label="Call" value="+91 99999 99999" href="tel:+919999999999" />
                <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value="hello@sriselva.in" href="mailto:hello@sriselva.in" />
                <InfoRow icon={<MapPin className="h-4 w-4" />} label="Visit" value="By appointment" />
              </ul>
              <div className="aspect-[4/3] w-full overflow-hidden border border-primary/15">
                <iframe
                  title="Studio location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=79.74%2C11.73%2C79.78%2C11.76&layer=mapnik"
                  loading="lazy"
                  className="h-full w-full grayscale-[80%] contrast-[1.1] invert"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Toaster />
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="label-eyebrow text-muted-foreground">{label}</Label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="mt-1 text-primary">{icon}</span>
      <div>
        <p className="label-eyebrow text-muted-foreground">{label}</p>
        <p className="mt-1 text-base text-foreground">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="block transition-colors hover:[&_p:last-child]:text-primary">{inner}</a> : inner}</li>;
}
