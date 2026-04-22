import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowUpRight, Lock } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Chester De Guzman" },
      {
        name: "description",
        content:
          "Selected work and case studies from Chester De Guzman — full stack and mobile engineering projects.",
      },
      { property: "og:title", content: "Projects — Chester De Guzman" },
      {
        property: "og:description",
        content: "A curated showcase of full stack and React Native projects.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Healthcare Analytics Platform",
    tag: "Case Study · Coming Soon",
    desc: "Real-time data visualization for clinical insights, built with React, D3.js, GraphQL, and React Native companion app.",
    stack: ["React", "TypeScript", "D3.js", "GraphQL", "React Native"],
    color: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Creative Studio Toolkit",
    tag: "Case Study · Coming Soon",
    desc: "Dynamic visualization and transformation tools powering a multi-tenant creative platform with Vue 3 + Pinia.",
    stack: ["Vue 3", "Vuetify", "Pinia", "Node.js", "Python"],
    color: "from-teal-500/20 to-emerald-500/10",
  },
  {
    title: "Cross-Platform Mobile Suite",
    tag: "Case Study · Coming Soon",
    desc: "Production React Native applications shipped to iOS and Android with shared component libraries and offline support.",
    stack: ["React Native", "Zustand", "TypeScript", "Node.js"],
    color: "from-sky-500/20 to-cyan-500/10",
  },
];

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="Selected Work"
        title={
          <>
            Projects in <span className="text-gradient">production.</span>
          </>
        }
        description="Case studies are being curated. Most of my work has shipped under NDA — get in touch for a private walkthrough."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:border-primary/40 hover:shadow-elegant"
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.color}`}
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl font-bold text-foreground/10">
                  0{i + 1}
                </span>
              </div>
              <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border-strong bg-background/60 text-muted-foreground backdrop-blur transition-smooth group-hover:border-primary/60 group-hover:text-primary">
                <Lock size={14} />
              </div>
            </div>

            <div className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                {p.tag}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              Want a private walkthrough of past work?
            </h3>
            <p className="mt-2 max-w-xl text-muted-foreground">
              I can share architecture decks, code samples, and live demos under NDA.
              Get in touch and I'll send a tailored portfolio.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 self-start rounded-md bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-smooth hover:glow-ring-strong md:self-auto"
          >
            Request access
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
