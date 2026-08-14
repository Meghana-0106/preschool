import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav({ onBookVisit }: { onBookVisit?: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll height and active section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const scrollPosition = window.scrollY + 120; // offset navbar height
      for (const link of links) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 flex items-center justify-center",
        scrolled
          ? "border-b border-border/80 bg-background/90 h-16 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent h-18 lg:h-20"
      )}
    >
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#home" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
          <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-sunny text-lg shadow-soft">
            🐣
          </span>
          <span className="font-display text-base md:text-lg font-extrabold tracking-tight text-ink">
            LittleSteps
            <span className="hidden text-muted-foreground sm:inline font-semibold"> Preschool</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-2 lg:flex h-full">
          {links.map((l) => {
            const id = l.href.substring(1);
            const isActive = activeSection === id;
            return (
              <li key={l.href} className="flex items-center">
                <a
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap inline-flex items-center justify-center",
                    isActive
                      ? "bg-sky/15 text-primary"
                      : "text-muted-foreground hover:bg-cream hover:text-ink"
                  )}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-2.5">
          <button
            type="button"
            onClick={onBookVisit}
            className="inline-flex h-9.5 items-center justify-center rounded-full border border-primary/25 bg-background px-4 text-sm font-bold text-ink hover:bg-cream active:scale-95 transition-all duration-150 shadow-sm"
          >
            Book a Visit
          </button>
          <a
            href="#contact"
            className="inline-flex h-9.5 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 active:shadow-soft transition-all duration-150"
          >
            <Sparkles className="size-3.5 animate-pulse" aria-hidden="true" />
            Enquire Now
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="grid size-9.5 shrink-0 place-items-center rounded-2xl bg-cream hover:bg-sunny/45 text-ink lg:hidden transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {open ? (
        <div
          className={cn(
            "fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm lg:hidden animate-fade-in",
            scrolled ? "top-16" : "top-18 lg:top-20"
          )}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full bg-background border-b border-border/60 py-4 px-6 shadow-lift animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => {
                const id = l.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-base font-bold transition-colors",
                        isActive
                          ? "bg-sky/15 text-primary"
                          : "text-ink hover:bg-cream"
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-border/40">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    if (onBookVisit) onBookVisit();
                  }}
                  className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-primary/20 bg-background px-4 py-2.5 text-sm font-bold text-ink hover:bg-cream"
                >
                  Book a Visit
                </button>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-2xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-soft"
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}

