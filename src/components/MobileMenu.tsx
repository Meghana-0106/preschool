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

interface MobileMenuProps {
  onBookVisit?: (() => void) | undefined;
}

export function MobileMenu({ onBookVisit }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll height and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    <div className="lg:hidden w-full sticky top-0 z-50 transition-all duration-300">
      {/* Mobile Sticky Header */}
      <header
        className={cn(
          "w-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 z-50 bg-background/95 backdrop-blur-md border-b",
          scrolled ? "border-border/80 h-16 shadow-soft" : "border-transparent h-16",
        )}
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-sunny text-lg shadow-soft">
            🐣
          </span>
          <span className="font-display text-base font-extrabold tracking-tight text-ink">
            LittleSteps
            <span className="text-muted-foreground font-semibold"> Preschool</span>
          </span>
        </a>

        {/* Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-2xl bg-cream hover:bg-sunny/45 text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px] min-w-[44px]"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </header>

      {/* Slide-down Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-40 bg-ink/20 backdrop-blur-sm animate-fade-in"
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
                        "block rounded-2xl px-4 py-3 text-base font-bold transition-colors min-h-[44px] flex items-center",
                        isActive ? "bg-sky/15 text-primary" : "text-ink hover:bg-cream",
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
                  className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-primary/20 bg-background px-4 py-2.5 text-sm font-bold text-ink hover:bg-cream cursor-pointer"
                >
                  Book a Visit
                </button>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-2xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition-all"
                >
                  <Sparkles className="size-4 animate-pulse" aria-hidden="true" />
                  Enquire Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
