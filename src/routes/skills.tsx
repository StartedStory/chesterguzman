import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Stack — Chester De Guzman" },
      {
        name: "description",
        content:
          "Technologies, frameworks, and tools Chester De Guzman uses to build scalable web and mobile products.",
      },
      { property: "og:title", content: "Skills & Stack — Chester De Guzman" },
      {
        property: "og:description",
        content: "React, Node, Python, React Native, Vue, GraphQL, AWS, and more.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Vue 2 & 3", "Vuetify", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    items: ["React Native", "iOS", "Android", "Cross-platform Architecture", "Mobile Performance"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "REST APIs", "GraphQL", "API Architecture & Integration"],
  },
  {
    label: "State Management",
    items: ["React Query", "Redux Toolkit", "Zustand", "Vuex", "Pinia"],
  },
  {
    label: "Data & Visualization",
    items: ["D3.js", "Recharts", "Chart.js", "AG Grid", "TanStack Table"],
  },
  {
    label: "Databases",
    items: ["SQL", "PostgreSQL", "Data Modeling", "Large Dataset Handling"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git", "CI/CD", "GitHub Actions", "GitLab"],
  },
  {
    label: "Architecture",
    items: ["Component-based Design", "Microfrontends", "Monorepos", "Scalable UI Systems"],
  },
];

function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="Tech Stack"
        title={
          <>
            Tools of the <span className="text-gradient">trade.</span>
          </>
        }
        description="A working toolkit built across 7+ years and dozens of production deployments."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <div
            key={g.label}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-semibold text-foreground">
                {g.label}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                0{i + 1}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border-strong bg-surface px-2.5 py-1 font-mono text-xs text-foreground/80 transition-smooth hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
