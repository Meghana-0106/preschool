import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { Sparkles } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav({ onBookVisit }: { onBookVisit?: () => void }) {
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

  return (
    <>
      {/* Mobile & Tablet Header and Navigation */}
      <MobileMenu onBookVisit={onBookVisit} />

      {/* Desktop Header and Navigation */}
      <header
        className={cn(
          "hidden lg:flex sticky top-0 z-50 w-full transition-all duration-300 items-center justify-center",
          scrolled
            ? "border-b border-border/80 bg-background/90 h-16 shadow-soft backdrop-blur-md"
            : "border-b border-transparent bg-transparent h-18 lg:h-20",
        )}
      >
        <nav
          aria-label="Main Navigation"
          className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6"
        >
          <a
            href="#home"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-sunny text-lg shadow-soft">
              🐣
            </span>
            <span className="font-display text-base md:text-lg font-extrabold tracking-tight text-ink">
              LittleSteps
              <span className="hidden text-muted-foreground sm:inline font-semibold">
                {" "}
                Preschool
              </span>
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="items-center gap-2 flex h-full">
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
                        : "text-muted-foreground hover:bg-cream hover:text-ink",
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onBookVisit}
              className="inline-flex h-9.5 items-center justify-center rounded-full border border-primary/25 bg-background px-4 text-sm font-bold text-ink hover:bg-cream active:scale-95 transition-all duration-150 shadow-sm cursor-pointer"
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
        </nav>
      </header>
    </>
  );
}
