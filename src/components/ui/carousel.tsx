import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  prevLabel?: string;
  nextLabel?: string;
  ariaLabel?: string;
}

export function Carousel({
  children,
  autoplay = false,
  autoplayInterval = 5000,
  showArrows = true,
  showDots = true,
  className,
  listClassName,
  itemClassName,
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  ariaLabel = "Carousel",
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const updateIndex = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = Array.from(el.children) as HTMLElement[];
    if (items.length === 0) return;

    const containerLeft = el.getBoundingClientRect().left;
    let closestIndex = 0;
    let minDistance = Infinity;

    items.forEach((child, index) => {
      const childLeft = child.getBoundingClientRect().left;
      const distance = Math.abs(childLeft - containerLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      updateIndex();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(updateIndex, 100);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [updateIndex]);

  const scrollToIndex = useCallback((index: number) => {
    const el = containerRef.current;
    if (!el) return;

    const items = Array.from(el.children) as HTMLElement[];
    if (index >= 0 && index < items.length) {
      const child = items[index];
      if (child) {
        el.scrollTo({
          left: child.offsetLeft - el.offsetLeft,
          behavior: "smooth",
        });
        setActiveIndex(index);
      }
    }
  }, []);

  useEffect(() => {
    if (!autoplay || isPaused) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      scrollToIndex((activeIndex + 1) % children.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, activeIndex, children.length, isPaused, scrollToIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(Math.max(0, activeIndex - 1));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(Math.min(children.length - 1, activeIndex + 1));
    }
  };

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className={cn("relative w-full group/carousel", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Scrollable track */}
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
          listClassName
        )}
      >
        {children.map((child, idx) => (
          <div
            key={idx}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${children.length}`}
            data-active={activeIndex === idx ? "true" : "false"}
            className={cn("shrink-0 snap-start transition-all duration-300", itemClassName)}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Desktop / Hover) */}
      {showArrows && children.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label={prevLabel}
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:grid size-11 place-items-center rounded-full bg-background border border-border/80 shadow-soft text-ink hover:bg-cream disabled:opacity-0 transition-all duration-200 z-10 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(children.length - 1, activeIndex + 1))}
            disabled={activeIndex === children.length - 1}
            aria-label={nextLabel}
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:grid size-11 place-items-center rounded-full bg-background border border-border/80 shadow-soft text-ink hover:bg-cream disabled:opacity-0 transition-all duration-200 z-10 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {showDots && children.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {children.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={activeIndex === idx ? "true" : undefined}
              className={cn(
                "size-2.5 rounded-full transition-all duration-300 border border-transparent focus-visible:outline-2 focus-visible:outline-primary",
                activeIndex === idx
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
