import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-smooth ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md border border-border-strong bg-surface font-mono text-sm font-bold text-primary transition-smooth group-hover:glow-ring">
            CG
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-foreground">
            Chester<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-smooth hover:bg-surface hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "!text-primary bg-surface" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary transition-smooth hover:bg-primary hover:text-primary-foreground hover:glow-ring"
          >
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden grid h-9 w-9 place-items-center rounded-md border border-border-strong bg-surface text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground transition-smooth hover:bg-surface hover:text-foreground"
                activeOptions={{ exact: true }}
                activeProps={{ className: "!text-primary bg-surface" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
