import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border-strong bg-surface font-mono text-sm font-bold text-primary">
                CG
              </span>
              <span className="font-display text-base font-semibold">
                Chester De Guzman
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Senior Full Stack Engineer crafting scalable web and mobile experiences with React,
              Node, and Python.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/experience", label: "Experience" },
                { to: "/projects", label: "Projects" },
                { to: "/skills", label: "Skills" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-foreground/80 transition-smooth hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-foreground/80">
                <Mail size={14} className="text-primary" />
                <a
                  href="mailto:chester.guzman0523@gmail.com"
                  className="transition-smooth hover:text-primary"
                >
                  chester.guzman0523@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-foreground/80">
                <Phone size={14} className="text-primary" />
                <a
                  href="tel:+14092263535"
                  className="transition-smooth hover:text-primary"
                >
                  +1 409 226 3535
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-foreground/80">
                <Linkedin size={14} className="text-primary" />
                <a
                  href="https://linkedin.com/in/chester-de-guzman-86002a3b0"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-smooth hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-foreground/80">
                <MapPin size={14} className="text-primary" />
                Taytay, Philippines
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p className="font-mono">
            © {new Date().getFullYear()} Chester De Guzman — All rights reserved.
          </p>
          <p className="font-mono">Built with React · TanStack · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
