import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, Code2, Layers, Zap, Users, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chester De Guzman" },
      {
        name: "description",
        content:
          "About Chester De Guzman: 7+ years of full stack engineering, specializing in React, Node, Python, and React Native across distributed teams.",
      },
      { property: "og:title", content: "About — Chester De Guzman" },
      {
        property: "og:description",
        content:
          "Senior engineer with deep expertise in scalable web and mobile architectures.",
      },
    ],
  }),
  component: AboutPage,
});

const strengths = [
  {
    icon: Code2,
    title: "React Ecosystem Mastery",
    body: "Deep expertise in Next.js, advanced state management, and squeezing every millisecond out of complex UI systems.",
  },
  {
    icon: Layers,
    title: "Full Stack Depth",
    body: "Strong end-to-end experience with Node.js and Python — API design, system integration, and performance optimization.",
  },
  {
    icon: Zap,
    title: "Cross-Platform Mobile",
    body: "Hands-on React Native delivery for both iOS and Android with an obsession for native-feel performance.",
  },
  {
    icon: Users,
    title: "Vue When It Fits",
    body: "Solid working knowledge of Vue 2, Vue 3, Vuetify, Vuex, and Pinia for diverse product requirements.",
  },
  {
    icon: Rocket,
    title: "Scalable Architectures",
    body: "Building maintainable component systems, microfrontends, and monorepos that grow gracefully with the team.",
  },
  {
    icon: GraduationCap,
    title: "Data-Intensive UIs",
    body: "D3.js, Recharts, AG Grid, TanStack Table — turning oceans of data into experiences people actually use.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="About"
        title={
          <>
            Engineer first.{" "}
            <span className="text-gradient">Craftsman always.</span>
          </>
        }
      />

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>
            I'm Chester — a Senior Full Stack Engineer with{" "}
            <span className="text-foreground">7+ years</span> of experience building
            scalable, high-performance web and mobile applications. My specialty is the
            React ecosystem and modern frontend, but I'm equally comfortable shaping
            backend services in Node.js and Python.
          </p>
          <p>
            I've spent my career working on{" "}
            <span className="text-foreground">complex UI systems</span>, data-intensive
            platforms, and highly interactive experiences across web and mobile. From
            healthcare analytics to creative studio tooling, I take products from idea to
            production with an eye for performance, maintainability, and the small details
            that make software feel alive.
          </p>
          <p>
            I thrive in{" "}
            <span className="text-foreground">distributed, async teams</span> — shipping
            cross-platform mobile apps with React Native, designing GraphQL and REST APIs,
            and tuning monorepo CI/CD pipelines so the whole team moves faster.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Education
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
              B.S. Computer Science
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Siena College of Taytay
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">2014 — 2018</p>
          </div>

          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Last Position
            </p>
            <p className="mt-3 font-display text-base font-semibold text-foreground">
              Senior Full Stack Engineer
            </p>
            <p className="mt-1 text-sm text-muted-foreground">FunctionHealth · Austin, TX</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">Jan 2025 — Feb 2026</p>
          </div>
        </aside>
      </div>

      {/* Strengths */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Key Strengths"
          title={
            <>
              What I bring to the <span className="text-gradient">table.</span>
            </>
          }
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-smooth group-hover:opacity-100" />
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <s.icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
