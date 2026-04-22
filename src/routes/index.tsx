import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chester De Guzman — Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Senior Full Stack Engineer with 7+ years building scalable React, Node.js, Python, and React Native applications.",
      },
      {
        property: "og:title",
        content: "Chester De Guzman — Senior Full Stack Engineer",
      },
      {
        property: "og:description",
        content:
          "Building scalable, high-performance web and mobile apps with React, Node, Python, and React Native.",
      },
    ],
  }),
  component: HomePage,
});

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "Python",
  "GraphQL",
  "Vue.js",
  "Tailwind CSS",
  "Redux Toolkit",
  "Zustand",
  "React Query",
  "D3.js",
  "Recharts",
  "AWS",
  "Docker",
  "PostgreSQL",
  "GitHub Actions",
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="text-foreground">Chester</span>
              <br />
              <span className="text-gradient">De Guzman</span>
              <span className="text-primary">.</span>
            </h1>

            <p className="mt-5 max-w-xl font-mono text-sm text-muted-foreground sm:text-base">
              <span className="text-primary">{"// "}</span>
              Senior Full Stack Engineer · React · Node · Python · React Native
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              7+ years crafting{" "}
              <span className="text-foreground">scalable, high-performance</span> web and
              mobile applications. I build complex UI systems, data-intensive platforms,
              and interactive experiences that ship.
            </p>

            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin size={12} className="text-primary" />
              Taytay, Philippines · Open to remote
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-smooth hover:glow-ring-strong"
              >
                Let's work together
                <ArrowRight
                  size={14}
                  className="transition-smooth group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface/50 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-smooth hover:border-primary/60 hover:text-primary"
              >
                <Sparkles size={14} />
                View Work
              </Link>
              <a
                href="https://linkedin.com/in/chester-de-guzman-86002a3b0"
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-md border border-border-strong bg-surface/50 text-muted-foreground transition-smooth hover:border-primary/60 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="grid h-11 w-11 place-items-center rounded-md border border-border-strong bg-surface/50 text-muted-foreground transition-smooth hover:border-primary/60 hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md md:max-w-none"
          >
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-elegant">
              <div className="flex items-center gap-1.5 border-b border-border bg-background/50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  ~ /chester/profile.tsx
                </span>
              </div>
              <img
                src={avatar}
                alt="Chester De Guzman — abstract portrait"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      Currently
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold text-foreground">
                      Senior Full Stack @ FunctionHealth
                    </p>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    v7.0
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="relative overflow-hidden border-y border-border bg-surface/30 py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-12">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-muted-foreground/60 transition-smooth hover:text-primary md:text-3xl"
            >
              {tech}
              <span className="ml-12 text-primary/40">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { value: "7+", label: "Years experience" },
            { value: "30+", label: "Projects shipped" },
            { value: "10+", label: "Tech stacks mastered" },
            { value: "3", label: "Continents served" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-background p-6 transition-smooth hover:bg-surface md:p-8"
            >
              <p className="font-display text-4xl font-bold text-gradient md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EXPERIENCE PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              Currently
            </div>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Building <span className="text-gradient">healthcare-grade</span> systems
              that scale.
            </h2>
          </div>
          <Link
            to="/experience"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary"
          >
            Full timeline
            <ArrowRight size={14} className="transition-smooth group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              co: "FunctionHealth",
              role: "Senior Full Stack",
              years: "2025 — Present",
              note: "Healthcare analytics platform · D3.js · React Native",
            },
            {
              co: "Redlizard Studioz",
              role: "Full Stack Dev",
              years: "2021 — 2024",
              note: "Creative platforms · Vue 2/3 · React Native · Python",
            },
            {
              co: "KaizenPH",
              role: "Frontend Dev",
              years: "2018 — 2021",
              note: "Next.js · Redux · AWS Amplify · Builder.io",
            },
          ].map((j) => (
            <div
              key={j.co}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                {j.years}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                {j.co}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{j.role}</p>
              <p className="mt-4 border-t border-border pt-4 font-mono text-xs leading-relaxed text-foreground/70">
                {j.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-10 md:p-14">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Have an idea worth building?
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                I partner with founders and teams to ship products that feel inevitable.
                Let's talk specifics.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-smooth hover:glow-ring-strong"
              >
                Start a project
                <ArrowRight size={14} />
              </Link>
              <a
                href="mailto:chester.guzman0523@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface/50 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-smooth hover:border-primary/60 hover:text-primary"
              >
                <Download size={14} />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
