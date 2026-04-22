import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Briefcase, MapPin } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Chester De Guzman" },
      {
        name: "description",
        content:
          "7+ years of engineering experience across FunctionHealth, Redlizard Studioz, and KaizenPH IT Solutions.",
      },
      { property: "og:title", content: "Experience — Chester De Guzman" },
      {
        property: "og:description",
        content: "A timeline of full stack and mobile engineering roles since 2018.",
      },
    ],
  }),
  component: ExperiencePage,
});

const jobs = [
  {
    company: "FunctionHealth",
    role: "Senior Full Stack Developer",
    location: "Austin, TX",
    period: "Jan 2025 — Feb 2026",
    current: true,
    bullets: [
      "Built scalable, high-performance applications using React and TypeScript for healthcare analytics platforms.",
      "Developed advanced data visualization systems using D3.js and Recharts for real-time insights.",
      "Integrated and optimized GraphQL and REST APIs, improving data-fetch efficiency and reducing latency.",
      "Contributed to backend services using Node.js and Python for data processing and API performance improvements.",
      "Implemented robust state management and caching strategies using React Query.",
      "Developed and maintained cross-platform mobile applications using React Native for iOS and Android.",
      "Optimized mobile performance and ensured consistent user experience across devices.",
      "Contributed to CI/CD pipelines and monorepo architecture, improving deployment speed and reliability.",
    ],
    stack: ["React", "TypeScript", "D3.js", "GraphQL", "Node.js", "Python", "React Native", "React Query"],
  },
  {
    company: "Redlizard Studioz",
    role: "Full Stack Developer",
    location: "Port Coquitlam, Canada",
    period: "Aug 2021 — Dec 2024",
    bullets: [
      "Developed complex frontend systems using React and TypeScript for interactive applications.",
      "Built scalable UI architectures and reusable component systems.",
      "Utilized Vue 2 and Vue 3 with Vuetify for diverse product requirements.",
      "Built backend services and APIs using Node.js and Python for real-time systems.",
      "Designed scalable state management architectures (Zustand, Redux, Vuex, Pinia).",
      "Engineered dynamic visualization and transformation tools for creative platforms.",
      "Led development of multiple cross-platform mobile applications using React Native.",
      "Improved application performance and maintainability through architectural enhancements and code reviews.",
    ],
    stack: ["React", "Vue 3", "Vuetify", "Node.js", "Python", "React Native", "Zustand", "Pinia"],
  },
  {
    company: "KaizenPH IT Solutions",
    role: "Frontend Developer",
    location: "Taytay, Philippines",
    period: "Jun 2018 — Jul 2021",
    bullets: [
      "Developed frontend applications using React, Next.js, and Redux.",
      "Contributed to scalable UI systems and reusable frontend architecture.",
      "Built API service layers to streamline backend communication.",
      "Implemented authentication systems using AWS Amplify and third-party providers.",
      "Optimized performance for data-heavy applications.",
      "Integrated Builder.io to enable no-code content management.",
    ],
    stack: ["React", "Next.js", "Redux", "AWS Amplify", "Builder.io"],
  },
];

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="Career Timeline"
        title={
          <>
            Seven years.{" "}
            <span className="text-gradient">Three companies.</span>
            <br />A lot of shipped code.
          </>
        }
        description="From frontend specialist to senior full stack — here's where I've built things that mattered."
      />

      <div className="relative mt-16">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-14">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                <div className="relative grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background">
                  <div
                    className={`h-2 w-2 rounded-full bg-primary ${job.current ? "animate-pulse-glow" : ""}`}
                  />
                </div>
              </div>

              {/* Card */}
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {job.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {job.company}
                </h3>
                <p className="mt-1 text-base text-foreground/80">{job.role}</p>
                <p
                  className={`mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <MapPin size={12} className="text-primary" />
                  {job.location}
                </p>
                {job.current && (
                  <span
                    className={`mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                  >
                    <Briefcase size={10} />
                    Current
                  </span>
                )}
              </div>

              <div className="pl-12 md:pl-0">
                <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <ul className="space-y-2.5">
                    {job.bullets.map((b, k) => (
                      <li key={k} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border-strong bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
