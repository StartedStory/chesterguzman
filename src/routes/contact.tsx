import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Chester De Guzman" },
      {
        name: "description",
        content:
          "Get in touch with Chester De Guzman for full stack engineering opportunities, contracts, and collaborations.",
      },
      { property: "og:title", content: "Contact — Chester De Guzman" },
      {
        property: "og:description",
        content: "Let's build something together. Email, phone, or LinkedIn.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "chester.guzman0523@gmail.com",
    href: "mailto:chester.guzman0523@gmail.com",
    primary: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 409 226 3535",
    href: "tel:+14092263535",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/chester-de-guzman-86002a3b0",
    href: "https://linkedin.com/in/chester-de-guzman-86002a3b0",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Taytay, Philippines",
  },
];

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("chester.guzman0523@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Let's build <span className="text-gradient">something good.</span>
          </>
        }
        description="Open to senior full stack roles, contract work, and interesting collaborations. Average response time: under 24 hours."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        {/* Email card — primary CTA */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface to-background p-8 md:p-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Best way to reach me
            </p>
            <a
              href="mailto:chester.guzman0523@gmail.com"
              className="mt-4 block break-all font-display text-2xl font-semibold text-foreground transition-smooth hover:text-primary sm:text-3xl"
            >
              chester.guzman0523@gmail.com
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tell me about your team, the problem you're solving, and the timeline.
              I'll get back with concrete next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:chester.guzman0523@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-smooth hover:glow-ring-strong"
              >
                Send email
                <ArrowUpRight size={14} />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface/50 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-smooth hover:border-primary/60 hover:text-primary"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Channel list */}
        <div className="space-y-3">
          {channels.map((c) => {
            const Inner = (
              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-smooth hover:border-primary/40">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-0.5 truncate font-display text-base font-medium text-foreground">
                    {c.value}
                  </p>
                </div>
                {c.href && (
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-smooth group-hover:text-primary"
                  />
                )}
              </div>
            );

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="block"
              >
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}

          <div className="rounded-xl border border-border bg-surface/40 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Availability
            </p>
            <p className="mt-2 text-sm text-foreground/80">
              Available for new senior roles, freelance contracts, and product
              partnerships starting Q2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
