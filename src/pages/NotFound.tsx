import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream/30 px-4 text-center">
      <div className="max-w-md font-sans">
        <span className="grid size-24 place-items-center rounded-3xl bg-sunny text-5xl shadow-soft animate-float mx-auto">
          🐣
        </span>
        <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Oops! We couldn't find that page.
        </h1>
        <p className="mt-4 text-base font-semibold text-muted-foreground leading-relaxed">
          It looks like this little path went off-course. Let's get you back to safety!
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition-all cursor-pointer"
          >
            Back to LittleSteps
          </Link>
        </div>
      </div>
    </div>
  );
}
