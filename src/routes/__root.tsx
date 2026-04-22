import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <div className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Error 404
          </p>
          <h1 className="mt-4 font-display text-7xl font-bold text-gradient">404</h1>
          <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
            Lost in the void
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-smooth hover:glow-ring-strong"
            >
              ← Back home
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chester De Guzman — Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Senior Full Stack Engineer with 7+ years building scalable web and mobile applications using React, Node.js, Python, and React Native.",
      },
      { name: "author", content: "Chester De Guzman" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Chester De Guzman — Senior Full Stack Engineer" },
      { name: "twitter:title", content: "Chester De Guzman — Senior Full Stack Engineer" },
      { name: "description", content: "Build an impressive professional portfolio from your resume to showcase your skills to recruiters and clients." },
      { property: "og:description", content: "Build an impressive professional portfolio from your resume to showcase your skills to recruiters and clients." },
      { name: "twitter:description", content: "Build an impressive professional portfolio from your resume to showcase your skills to recruiters and clients." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0eb62a15-a1b0-4bd9-9917-09ba877767a1/id-preview-3ce1c118--58db5779-71cc-4efe-94b5-e18306a9475f.lovable.app-1776866292237.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0eb62a15-a1b0-4bd9-9917-09ba877767a1/id-preview-3ce1c118--58db5779-71cc-4efe-94b5-e18306a9475f.lovable.app-1776866292237.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
