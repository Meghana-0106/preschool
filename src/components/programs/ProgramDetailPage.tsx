import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ChevronRight, 
  ArrowLeft, 
  Clock, 
  Target, 
  BookOpen, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  Plus, 
  Minus,
  Maximize2,
  X,
  Heart,
  Shield,
  Smile,
  Award,
  Users
} from "lucide-react";
import { type ProgramData, programsData } from "@/data/programs/data";
import { VisitBookingModal } from "./VisitBookingModal";
import { Carousel } from "@/components/ui/carousel";

export function ProgramDetailPage({ program }: { program: ProgramData }) {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [program.id]);

  // Find other programs for "Related Programs" section
  const relatedPrograms = Object.values(programsData).filter(p => p.id !== program.id);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-foreground antialiased selection:bg-sunny selection:text-ink relative">
      
      {/* DEDICATED SIMPLE HEADER FOR PROGRAM DETAILS PAGE */}
      <header className="border-b border-border/40 bg-background/95 sticky top-0 z-40 backdrop-blur-md h-16 flex items-center justify-between px-4 sm:px-6 shadow-sm">
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-sunny text-base shadow-soft">
              🐣
            </span>
            <span className="font-display text-sm md:text-base font-extrabold tracking-tight text-ink">
              LittleSteps
              <span className="hidden sm:inline font-semibold text-muted-foreground"> Preschool</span>
            </span>
          </Link>
        </div>
      </header>

      {/* BACK TO PROGRAMS BUTTON */}
      <div className="pt-6 pb-2 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            hash="programs"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-background px-4 text-xs font-extrabold text-ink hover:bg-cream transition-colors shadow-soft"
          >
            <ArrowLeft className="size-3.5" /> Back to Programs
          </Link>
        </div>
      </div>

      {/* A. BREADCRUMB */}
      <div className="bg-cream/20 border-y border-border/30 py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground/75">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="size-2.5 text-muted-foreground/45" />
          <span className="text-muted-foreground/40">Programs</span>
          <ChevronRight className="size-2.5 text-muted-foreground/45" />
          <span className="text-ink font-bold">{program.title}</span>
        </div>
      </div>

      {/* B. HERO SECTION */}
      <section className="relative overflow-hidden py-14 lg:py-20 px-4 sm:px-6">
        <div className="absolute top-6 left-6 size-12 rounded-full bg-sunny/15 blur-lg pointer-events-none" />
        <div className="absolute bottom-6 right-6 size-20 rounded-full bg-sky/10 blur-xl pointer-events-none" />
        
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-sunny text-amber-900 tracking-wider uppercase border border-sunny-dark/15 animate-fade-in shadow-soft">
                {program.age}
              </span>
              
              <h1 className="text-3xl sm:text-4.5xl font-extrabold text-ink tracking-tight font-display leading-[1.2]">
                {program.title} <br />
                <span className="text-primary text-xl sm:text-2xl font-bold font-sans block mt-1.5 text-sky-600">
                  {program.tagline}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground font-semibold leading-relaxed max-w-xl">
                {program.overview}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-3.5 max-w-lg pt-2">
                <div className="rounded-2xl border border-border/80 bg-card p-3.5 shadow-soft flex items-start gap-2.5">
                  <Target className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wide">Focus</h4>
                    <p className="text-xs font-extrabold text-ink mt-0.5">{program.focus}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/80 bg-card p-3.5 shadow-soft flex items-start gap-2.5">
                  <Clock className="size-5 text-sunny shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wide">Hours</h4>
                    <p className="text-xs font-extrabold text-ink mt-0.5">{program.timing}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/80 bg-card p-3.5 shadow-soft flex items-start gap-2.5">
                  <BookOpen className="size-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wide">Learning Style</h4>
                    <p className="text-xs font-extrabold text-ink mt-0.5">{program.learningStyle}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/80 bg-card p-3.5 shadow-soft flex items-start gap-2.5">
                  <Calendar className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wide">Age Range</h4>
                    <p className="text-xs font-extrabold text-ink mt-0.5">{program.age}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 flex flex-wrap gap-3">
                <button
                  onClick={() => setIsVisitModalOpen(true)}
                  className="inline-flex min-h-11 items-center rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition-all duration-200"
                >
                  Book a Visit
                </button>
                <a
                  href="#contact-section"
                  className="inline-flex min-h-11 items-center rounded-full border border-border/80 bg-background px-7 text-sm font-bold text-ink shadow-sm hover:bg-cream transition-all duration-200"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-2" />
              <img
                src={program.heroImage}
                alt={`${program.title} learning program hero image`}
                className="relative rounded-[2rem] border border-border/80 shadow-lift object-cover w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] object-center z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* C. PROGRAM OVERVIEW & D. WHAT CHILDREN LEARN */}
      <section className="bg-cream/20 border-y border-border/40 py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-2.5xl font-extrabold text-ink font-display tracking-tight">
                Program Overview & Approach
              </h2>
              <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
                We believe children learn best when they are leading their own exploration. Through sensory workspaces, reading tables, and collaborative routines, our educators encourage self-expression and motor coordination.
              </p>
              
              <div className="rounded-2xl border border-border bg-card p-5.5 shadow-soft">
                <h3 className="text-sm font-bold text-ink mb-1.5 flex items-center gap-2">
                  <Award className="size-4.5 text-primary" /> Learning Approach
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                  {program.learningApproach}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="text-xs font-extrabold text-ink uppercase tracking-wider mb-4.5 block">What Children Experience</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {program.experiences.map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-background border border-border/40 rounded-xl p-3.5 shadow-soft">
                    <CheckCircle className="size-4.5 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-ink">{exp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. LEARNING OBJECTIVES & F. KEY DEVELOPMENT AREAS */}
      <section className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left: Learning Objectives */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl font-extrabold text-ink font-display flex items-center gap-2">
                <BookOpen className="size-5.5 text-primary" /> Learning Objectives
              </h3>
              <ul className="space-y-4">
                {program.learningObjectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-3 bg-cream/35 border border-border/30 p-4 rounded-2xl shadow-soft">
                    <span className="grid size-6 place-items-center rounded-lg bg-sky/20 text-primary text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-muted-foreground leading-relaxed">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Key Development Areas */}
            <div className="lg:col-span-6 rounded-2xl bg-cream border border-border/50 p-6 sm:p-7">
              <h3 className="text-lg font-extrabold text-ink mb-3 font-display flex items-center gap-2">
                <Target className="size-5 text-primary" /> Key Development Areas
              </h3>
              <p className="text-xs text-muted-foreground font-semibold mb-5">
                Our educators map activities to support these specific preschool milestones:
              </p>
              <ul className="space-y-3.5">
                {program.developmentGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-muted-foreground">
                    <CheckCircle className="size-4.5 text-primary shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* G. TYPICAL DAILY ROUTINE */}
      <section className="bg-cream/20 border-y border-border/40 py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2.5xl font-extrabold text-ink font-display tracking-tight">
              Typical Daily Routine
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground font-semibold">
              A balanced flow of group blocks, focused exercises, meals, and outdoor play.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-2 sm:ml-28 space-y-6 py-2">
            {program.dailyRoutine.map((item, idx) => (
              <div key={idx} className="relative pl-6 group">
                {/* Dot marker */}
                <div className="absolute left-[-9px] top-1.5 size-4 rounded-full border-2 border-primary bg-background group-hover:scale-110 transition-transform" />
                
                {/* Timeline time text */}
                <span className="block sm:absolute sm:left-[-110px] sm:top-1.5 text-xs font-extrabold text-primary sm:text-right sm:w-24">
                  {item.time}
                </span>

                <div className="bg-background rounded-xl border border-border/60 p-4 shadow-soft">
                  <p className="text-xs sm:text-sm font-bold text-ink">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H. CLASSROOM EXPERIENCE & CARE */}
      <section className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Images Grid */}
          <div className="grid gap-6 sm:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold bg-sky/15 text-primary tracking-wider uppercase">
                Care & Interaction
              </span>
              <h2 className="text-2.5xl font-extrabold text-ink font-display tracking-tight">
                Responsive Care, Nurturing Guides
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                In our classroom setting, children learn from structured educators who model healthy social, emotional, and early learning habits:
              </p>
              
              <div className="space-y-4">
                <div className="bg-background border border-border/40 rounded-xl p-4.5 shadow-soft">
                  <h4 className="text-xs sm:text-sm font-extrabold text-ink mb-1">Teacher Interaction</h4>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                    {program.teacherInteraction}
                  </p>
                </div>
                
                <div className="bg-background border border-border/40 rounded-xl p-4.5 shadow-soft">
                  <h4 className="text-xs sm:text-sm font-extrabold text-ink mb-1">Safety & Childcare</h4>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                    {program.safetyCare}
                  </p>
                </div>

                <div className="bg-background border border-border/40 rounded-xl p-4.5 shadow-soft">
                  <h4 className="text-xs sm:text-sm font-extrabold text-ink mb-1">Parent Partnership</h4>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                    {program.parentInvolvement}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform -rotate-1 -z-10" />
              <img
                src={program.activityImage1}
                alt={`${program.title} classroom study activity`}
                className="rounded-2xl border border-border/80 shadow-soft w-full aspect-square object-cover"
                loading="lazy"
              />
              <img
                src={program.activityImage2}
                alt={`${program.title} outdoor movement`}
                className="rounded-2xl border border-border/80 shadow-soft w-full aspect-square object-cover mt-6"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* I. EXPECTED OUTCOMES & SKILLS DEVELOPED */}
      <section className="bg-cream/20 border-y border-border/40 py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Skills */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-base sm:text-lg font-bold text-ink mb-4 flex items-center gap-2">
                <Smile className="size-5 text-primary" /> Skills Developed
              </h3>
              <div className="grid gap-3">
                {program.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-primary" />
                    <span className="text-xs sm:text-sm font-bold text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-base sm:text-lg font-bold text-ink mb-4 flex items-center gap-2">
                <Award className="size-5 text-sunny" /> Expected Outcomes
              </h3>
              <div className="grid gap-3">
                {program.outcomes.map((out, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-sunny" />
                    <span className="text-xs sm:text-sm font-bold text-muted-foreground">{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L. PHOTO GALLERY */}
      <section className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2.5xl font-extrabold text-ink font-display tracking-tight">
              Little Moments, Big Learning
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground font-semibold">
              Every day brings a new opportunity to explore, create and grow.
            </p>
          </div>

          <Carousel
            ariaLabel="Program Image Gallery"
            prevLabel="Previous program image"
            nextLabel="Next program image"
            className="w-full max-w-2xl mx-auto"
            listClassName="pb-6"
            itemClassName="w-full px-2"
          >
            {program.gallery.map((g, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-soft aspect-[4/3] cursor-pointer"
                onClick={() => setLightboxImage(g.src)}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white size-7" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* M. FAQ SECTION */}
      <section className="bg-cream/20 border-t border-border/40 py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2.5xl font-extrabold text-ink font-display tracking-tight text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3.5">
            {program.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-xs sm:text-sm font-bold text-ink hover:bg-cream/20 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <Minus className="size-4 text-primary shrink-0" /> : <Plus className="size-4 text-primary shrink-0" />}
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed border-t border-border/20 animate-slide-in">
                      {faq.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELATED PROGRAMS SECTION */}
      <section className="py-16 border-t border-border/40 bg-background px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-xl sm:text-2xl font-extrabold text-ink font-display tracking-tight text-center mb-8">
            Explore Other Programs
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedPrograms.map((p) => {
              const targetRoute = 
                p.id === "play-group" ? "/programs/play-group" :
                p.id === "nursery" ? "/programs/nursery" :
                p.id === "lkg" ? "/programs/lkg" :
                p.id === "ukg" ? "/programs/ukg" : "/";
              return (
                <div 
                  key={p.id} 
                  className="group border border-border/60 rounded-2xl overflow-hidden bg-card shadow-soft hover:-translate-y-1 transition-all"
                >
                  <Link to={targetRoute} className="aspect-[4/3] overflow-hidden block">
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="p-5">
                    <span className="text-[10px] font-extrabold bg-sunny text-amber-900 px-2 py-0.5 rounded-full uppercase">
                      {p.age}
                    </span>
                    <h4 className="text-base font-extrabold text-ink mt-2">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1 font-semibold">
                      {p.tagline}
                    </p>
                    <Link 
                      to={targetRoute} 
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-4 hover:translate-x-0.5 transition-transform"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* N. ENQUIRE / BOOK A VISIT CTA */}
      <section id="contact-section" className="py-16 px-4 sm:px-6 bg-[#0284c7]/5 border-t border-border">
        <div className="mx-auto max-w-4xl text-center bg-background rounded-3xl border border-border p-8 sm:p-12 shadow-premium relative">
          <div className="absolute top-6 left-6 text-sunny/40 animate-pulse">
            <Sparkles className="size-6" />
          </div>
          <div className="absolute bottom-6 right-6 text-primary/30 animate-pulse">
            <Sparkles className="size-6" />
          </div>

          <h2 className="text-2.5xl font-extrabold text-ink font-display leading-[1.2]">
            Ready to take the next little step?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Come see how LittleSteps turns everyday moments into meaningful learning experiences. Book a school tour or submit an application query today.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setIsVisitModalOpen(true)}
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition-all duration-200"
            >
              Book a Visit
            </button>
            <a
              href="#contact-section"
              onClick={() => setIsVisitModalOpen(true)}
              className="inline-flex min-h-11 items-center rounded-full border border-border/85 bg-background px-8 text-sm font-bold text-ink shadow-sm hover:bg-cream transition-all duration-200"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* DEDICATED SIMPLE FOOTER FOR PROGRAM DETAILS PAGE */}
      <footer className="border-t border-border/40 py-6 bg-cream text-center text-xs font-semibold text-muted-foreground/75 px-4 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <div>
          <span>© {new Date().getFullYear()} LittleSteps Preschool. Program details. All rights reserved.</span>
        </div>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {lightboxImage ? (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-5 right-5 grid size-10 place-items-center rounded-full bg-black/45 text-white hover:bg-black/70 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="size-5" />
          </button>
          <img
            src={lightboxImage}
            alt="Expanded gallery view"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-premium border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}

      {/* BOOKING MODAL */}
      {isVisitModalOpen ? (
        <VisitBookingModal 
          onClose={() => setIsVisitModalOpen(false)} 
          defaultProgram={program.title}
        />
      ) : null}
    </div>
  );
}
