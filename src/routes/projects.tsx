import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowUpRight, Lock } from "lucide-react";
import functionhealthImg from "@/assets/functionhealth.png";
import migraineheroesImg from "@/assets/migraine_heroes.png";
import expertcloseImg from "@/assets/exp-close.png";
import moneylineappImg from "@/assets/moneylineapp.png";
import cactuswareImg from "@/assets/cactusware.png";
import hitposthubImg from "@/assets/hitposthub.png";

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
    tag: "FunctionHealth · How it works",
    desc: "Real-time data visualization for clinical insights, built with React, Recharts, GraphQL, and React Native companion app.",
    stack: ["React", "TypeScript", "Recharts", "GraphQL", "React Native"],
    color: "from-cyan-500/20 to-blue-500/10",
    image: functionhealthImg,
    url: "https://www.functionhealth.com/how-it-works",
  },
  {
    title: "Lasting Relief from Chronic Migraine",
    tag: "Migraine Heroes · How it works",
    desc: "Interactive health platform interfaces with rich media, dynamic forms, and progress tracking.",
    stack: ["Next", "Redux", "Tailwind CSS", "Node.js", "Typescript"],
    color: "from-teal-500/20 to-emerald-500/10",
    image: migraineheroesImg,
    url: "https://migraineheroes.com/how-it-works/",
  },
  {
    title: "Cloud-Based Real Estate Broker",
    tag: "eXp South Africa Deals · Coming Soon",
    desc: "Centralized dashboard for managing transactions, tasks, and users, improving efficiency in real estate operations.",
    stack: ["React", "Python", "Supabase", "AI-augmented tools (Lovable, v0.dev)", "Rapid Prototyping"],
    color: "from-teal-500/20 to-emerald-500/10",
    image: expertcloseImg,
    url: "https://exp-south-africa-deals.lovable.app/dashboard",
  },
  {
    title: "Moneyline Mobile App: React Native",
    tag: "moneyline · Coming Soon",
    desc: "Production React Native applications shipped to iOS and Android with shared component libraries and offline support.",
    stack: ["React Native", "Zustand", "TypeScript", "Node.js", "iOS", "Android"],
    color: "from-sky-500/20 to-cyan-500/10",
    image: moneylineappImg,
  },
  {
    title: "Sports Scheduling Software: Ruby on Rails & React",
    tag: "Diamond Scheduler Sports Scheduling Software",
    desc: "Diamond Scheduler is a leading sports scheduling software that simplifies the planning of sports leagues.",
    stack: ["React", "React-Rails", "Ruby", "Ruby on Rails API", "SaaS"],
    color: "from-teal-500/20 to-emerald-500/10",
    image: cactuswareImg,
    url: "https://cactusware.com",
  },
  {
    title: "Top Digital Marketing Agency",
    tag: "Hitpost Strategy Hub · How it works",
    desc: "Hitpost offers expert digital marketing strategies tailored to your business needs, driving growth with proven results and hands-on execution.",
    stack: ["React", "Typescript", "Rapid Prototyping", "AI Integration", "SaaS"],
    color: "from-cyan-500/20 to-blue-500/10",
    image: hitposthubImg,
    url: "https://hitpost-strategy-hub.lovable.app/",
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
              {p.image ? <div className="w-full h-full" style={{ backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> : <></>}
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
              <a href={p.url ?? ""} target="_blank">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {p.tag}
                </p>
              </a>
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
