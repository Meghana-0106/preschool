import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT_CONFIG } from "../config/contact";
import { useState, useEffect, useRef, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Sparkles,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  ChevronUp,
  MessageSquare,
  Shield,
  Heart,
  Smile,
  BookOpen,
  HelpCircle,
  Backpack,
  Compass,
  ArrowUpRight,
  Star
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { VisitBookingModal, Field } from "@/components/programs/VisitBookingModal";
import heroImg from "@/assets/hero-classroom.jpg";
import playgroupImg from "@/assets/program-playgroup.jpg";
import nurseryImg from "@/assets/program-nursery.jpg";
import lkgImg from "@/assets/program-lkg.jpg";
import ukgImg from "@/assets/program-ukg.jpg";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryArt from "@/assets/gallery-art.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryStory from "@/assets/gallery-story.jpg";
import galleryGroup from "@/assets/gallery-group.jpg";
import galleryStem from "@/assets/gallery-stem.jpg";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LittleSteps Preschool | Play-Based Preschool in Bengaluru" },
      {
        name: "description",
        content:
          "LittleSteps Preschool is a warm, play-based preschool in Bengaluru offering nurturing programs, caring teachers, and weekend activity club for children aged 2–6 years.",
      },
      {
        property: "og:title",
        content: "LittleSteps Preschool | Play-Based Preschool in Bengaluru",
      },
      {
        property: "og:description",
        content:
          "Play groups, nursery, LKG and UKG programs in a safe, joyful learning space for little explorers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Preschool",
          name: "LittleSteps Preschool",
          description:
            "Play-based preschool for children aged 2 to 6 with caring teachers and weekend activity club.",
          telephone: CONTACT_CONFIG.PHONE_NUMBER,
          email: CONTACT_CONFIG.CONTACT_EMAIL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bangalore",
            addressLocality: "Karnataka",
            addressCountry: "IN",
          },
          openingHours: "Mo-Fr 08:30-16:00",
        }),
      },
    ],
  }),
  component: Home,
});

// Custom SVGs for premium preschool illustrations
function Illustration({ type, className = "size-6" }: { type: string; className?: string }) {
  if (type === "star") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  }
  if (type === "cloud") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    );
  }
  if (type === "sun") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    );
  }
  if (type === "rainbow") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
        <path d="M4 20A8 8 0 0 1 20 20" />
        <path d="M7 20A5 5 0 0 1 17 20" strokeWidth="2" />
        <path d="M10 20A2 2 0 0 1 14 20" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17 8C8 10 5.9 16.17 3.82 21c4.83-2.08 11-4.18 13-13.18C16.82 7.82 17 8 17 8zm0-4c-3.64 0-7.36 2.45-9.55 5.55C9.45 8.45 13.18 6 17 6h3v-2h-3z" />
      </svg>
    );
  }
  if (type === "balloon") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2a6 6 0 0 0-6 6c0 3.6 2.8 6.5 6.2 6.9l-.7 2.1c-.2.6-.7.9-1.2.9H9v2h1.3c1.3 0 2.4-.8 2.8-2l.7-2.1c3.4-.4 6.2-3.3 6.2-6.9a6 6 0 0 0-6-6z" />
      </svg>
    );
  }
  if (type === "pencil") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    );
  }
  return null;
}

// Stats Counter Component with trigger observer
function CountUp({ end, prefix = "", suffix = "", duration = 1200 }: { end: number; prefix?: string | undefined; suffix?: string | undefined; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);

      setCount(Math.floor(progressPercentage * end));

      if (progressPercentage < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animationFrameId = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className="font-display font-extrabold">
      {prefix}{count}{suffix}
    </span>
  );
}

const chooseBenefits = [
  { illustration: "star", title: "Play-Based Learning", text: "Child-led curiosity drives our curriculum, connecting play activities to key developmental stages.", color: "bg-sunny/35 text-yellow-800" },
  { illustration: "balloon", title: "Caring Educators", text: "Trained teachers who welcome your child by name and nurture their growth with gentle routines.", color: "bg-blossom/35 text-pink-800" },
  { illustration: "leaf", title: "Safe Premises", text: "Fully secure campus with clean learning classrooms, routines, and safe child-proofing systems.", color: "bg-mint/35 text-emerald-800" },
  { illustration: "rainbow", title: "Creative Activities", text: "From musical storytelling to messy clay play, art tables are prepared daily for creative hands.", color: "bg-peach/35 text-orange-800" },
  { illustration: "cloud", title: "Parent Communication", text: "Daily update reports and moments photos keep you in touch with their classroom discoveries.", color: "bg-sky/20 text-primary" },
  { illustration: "pencil", title: "Individual Attention", text: "With a 1:6 ratio, teachers understand your child's distinct rhythms, personality and pace.", color: "bg-cream text-ink border border-border" },
];

const programs = [
  {
    name: "Play Group",
    age: "2–3 years",
    img: playgroupImg,
    text: "Gentle first steps away from home with sensory play, songs and lots of cuddles.",
    focus: "Socialization & Sensory Play",
    hours: "9:00 AM – 12:00 PM"
  },
  {
    name: "Nursery",
    age: "3–4 years",
    img: nurseryImg,
    text: "Circle time, early language and friendships that build everyday confidence.",
    focus: "Language & Fine Motor Skills",
    hours: "8:30 AM – 12:30 PM"
  },
  {
    name: "LKG",
    age: "4–5 years",
    img: lkgImg,
    text: "Letters, numbers and curiosity projects introduced through playful discovery.",
    focus: "Early Literacy & Problem Solving",
    hours: "8:30 AM – 1:30 PM"
  },
  {
    name: "UKG",
    age: "5–6 years",
    img: ukgImg,
    text: "School-ready reading, writing and thinking skills, at each child's own pace.",
    focus: "Advanced Read-Write & STEM",
    hours: "8:30 AM – 3:30 PM"
  },
];

const journeyStages = [
  {
    stage: "Play Group",
    age: "2–3 years",
    verb: "Explore",
    color: "bg-mint/30 border-mint text-emerald-800",
    points: ["Social interaction & turn-taking", "Sensory texture play", "Language & communication steps", "Independent snack-time routines"],
    detailText: "For our youngest, school is about learning that they are safe, loved, and capable. We structure the day around touch, music, and gentle play."
  },
  {
    stage: "Nursery",
    age: "3–4 years",
    verb: "Discover",
    color: "bg-sky/15 border-sky text-primary",
    points: ["Language expression & stories", "Creativity with paints & clay", "Meaningful early friendships", "Basic shapes and early concepts"],
    detailText: "Curiosity expands rapidly at age 3. We capture this energy by introducing storytelling circles, early math games, and collaborative play tables."
  },
  {
    stage: "LKG",
    age: "4–5 years",
    verb: "Build",
    color: "bg-sunny/35 border-sunny text-yellow-800",
    points: ["Early numbers & sorting", "Letter sounds & trace play", "Collaborative problem solving", "Confidence to speak in circle time"],
    detailText: "We introduce structured project work here. Children explore nature projects and build confidence presenting their discoveries to friends."
  },
  {
    stage: "UKG",
    age: "5–6 years",
    verb: "Prepare",
    color: "bg-blossom/30 border-blossom text-pink-800",
    points: ["Confident reading & phonics", "Creative journal writing", "Elementary STEM experiments", "Primary school readiness steps"],
    detailText: "Our final year readies children for formal primary environments, helping them build literacy, logical thinking, and strong self-regulation."
  }
];

const dailyLifeStrip = [
  { label: "Morning Welcome", time: "09:00 AM", desc: "Warm smiles & greeting hugs.", bg: "bg-sunny/30" },
  { label: "Circle Time", time: "09:30 AM", desc: "Singing songs & counting.", bg: "bg-sky/15" },
  { label: "Creative Play", time: "10:00 AM", desc: "Painting, sensory tubs & crafts.", bg: "bg-peach/30" },
  { label: "Outdoor Time", time: "11:00 AM", desc: "Climbing, sandbox & leaf hunts.", bg: "bg-mint/35" },
  { label: "Lunch Time", time: "12:00 PM", desc: "Healthy eating & soft chats.", bg: "bg-blossom/30" },
  { label: "Story Circle", time: "01:00 PM", desc: "Puppets & book adventures.", bg: "bg-cream" },
];

const schedule = [
  { time: "09:00", label: "Welcome & Free Play", illustration: "cloud", tone: "bg-sunny/45 text-yellow-800" },
  { time: "09:30", label: "Circle Time", illustration: "rainbow", tone: "bg-sky/20 text-primary" },
  { time: "10:00", label: "Creative Learning", illustration: "pencil", tone: "bg-peach/40 text-amber-700" },
  { time: "11:00", label: "Outdoor Play", illustration: "leaf", tone: "bg-mint/40 text-emerald-700" },
  { time: "12:00", label: "Lunch", illustration: "star", tone: "bg-blossom/40 text-pink-700" },
  { time: "01:00", label: "Story & Activity Time", illustration: "balloon", tone: "bg-cream text-ink" },
];

const featuredActivities = [
  { illustration: "rainbow", title: "Art & Craft", text: "Messy, sensory art sessions using clay, paper maché, and brushes.", color: "bg-peach/30 text-amber-800" },
  { illustration: "star", title: "Little Scientists", text: "Fun experiments exploring water, color mixing, and magnetic shapes.", color: "bg-sunny/35 text-yellow-800" },
  { illustration: "leaf", title: "Nature Explorers", text: "Planting sunflower seeds, studying leaves, and outdoor bugs hunts.", color: "bg-mint/30 text-emerald-800" },
  { illustration: "balloon", title: "Music & Movement", text: "Drums, xylophones, nursery rhymes, and soft rhythm dance.", color: "bg-blossom/30 text-pink-800" },
  { illustration: "cloud", title: "Story Adventures", text: "Puppet theatres, quiet book nooks, and early sound association.", color: "bg-sky/15 text-primary" },
  { illustration: "pencil", title: "Problem Solving", text: "Building block systems, wooden puzzle boards, and sorting games.", color: "bg-cream text-ink border border-border" },
];

const classroomHotspots = [
  { name: "Reading Corner", x: "25%", y: "40%", text: "Comfortable floor cushions and curated picture books to encourage early reading habit." },
  { name: "Art Corner", x: "65%", y: "30%", text: "Double-sided easels, washable finger paints, and space to display little creations." },
  { name: "Discovery Table", x: "45%", y: "65%", text: "STEM tools like magnifying glasses, building blocks, and balance scales." },
  { name: "Nature Area", x: "15%", y: "75%", text: "Indoor herb pots and sensory flower tubs where children learn where green food grows." },
  { name: "Music Space", x: "85%", y: "70%", text: "Musical bells, mini drums, and tambourines for afternoon sound play circles." }
];

const admissionSteps = [
  { step: "01", title: "Enquire", text: "Fill out our quick contact/enquiry form online or give us a telephone call." },
  { step: "02", title: "Visit Us", text: "Book a school tour modal to visit our classroom spaces and campus." },
  { step: "03", title: "Meet Teachers", text: "Bring your child to sit in a play session and speak with our educators." },
  { step: "04", title: "Enroll & Begin", text: "Choose a start date and get your preschool starter kit pack." }
];

const events = [
  { date: "Saturday", title: "Art & Craft Morning", desc: "Bring your toddler for sensory sand crafting and family canvas painting.", icon: "🎨" },
  { date: "18 Aug", title: "Little Scientists Day", desc: "Safe bubbling chemistry experiments, magnifying glass observations and prism coloring.", icon: "🧪" },
  { date: "24 Aug", title: "Family Story Hour", desc: "Interactive puppet storytelling, custom songs, and book exchanges in the garden.", icon: "📚" }
];

const faqs = [
  { q: "What age groups do you accept?", a: "We welcome little learners aged 2 to 6 years. Our programs are divided into Play Group (2-3y), Nursery (3-4y), LKG (4-5y), and UKG (5-6y)." },
  { q: "What are your preschool timings?", a: "Our school hours are Mon–Fri, 8:30 AM to 4:00 PM. Specific program durations range from 3 to 7 hours depending on age group." },
  { q: "Do you offer a trial visit?", a: "Absolutely! We highly encourage family campus visits. Use our 'Book a Visit' modal to schedule a personalized tour." },
  { q: "What should my child bring to school?", a: "A labeled backpack containing a change of clean clothes, a water bottle, a small healthy snack box, and a hat for playground play." },
  { q: "How do teachers communicate with parents?", a: "We believe in transparency. Parents receive direct updates and photos daily via our updates system, along with monthly check-in reviews." },
  { q: "Do you offer weekend activities?", a: "Yes, our Weekend Saturday Explorer Club is open to all neighborhood kids, featuring art, movement, and early STEM builds." }
];

const gallery = [
  { src: galleryClassroom, category: "Classroom", alt: "Children raising hands during a classroom activity" },
  { src: galleryArt, category: "Art & Craft", alt: "Two children painting together at an art table" },
  { src: galleryOutdoor, category: "Outdoor Play", alt: "Children playing on an outdoor playground slide" },
  { src: galleryStory, category: "Activities", alt: "Teacher reading a storybook to children on a rug" },
  { src: galleryGroup, category: "Activities", alt: "Group music and movement circle in the classroom" },
  { src: galleryStem, category: "STEM", alt: "Children exploring a STEM activity with blocks and a toy robot" },
];

const testimonials = [
  {
    name: "Ananya R.",
    role: "Mother of Aarav, Nursery",
    illustration: "star",
    text: "Aarav runs into class every morning. The teachers share little updates that make us feel part of his day. We couldn't have asked for a more nurturing start.",
  },
  {
    name: "Karthik S.",
    role: "Father of Meera, LKG",
    illustration: "rainbow",
    text: "Beautifully safe and calm space. Meera has become so much more confident and curious in just one term. Her language and social skills have blossomed.",
  },
  {
    name: "Fatima N.",
    role: "Mother of Zain, Play Group",
    illustration: "balloon",
    text: "The weekend club is our absolute favourite. Zain comes home covered in paint and full of stories. It is a wonderful community space for kids.",
  },
];

const teachers = [
  {
    name: "Priya Menon",
    role: "Lead Teacher, Nursery",
    img: teacher1,
    text: "10 years of early-years teaching experience and an endless supply of storytelling songs.",
  },
  {
    name: "Sara Thomas",
    role: "Head of Curriculum",
    img: teacher2,
    text: "Designs our play-based programs and mentors classroom teachers on child development.",
  },
  {
    name: "Rahul Iyer",
    role: "Activity & STEM Coach",
    img: teacher3,
    text: "Runs weekend builds, nature exploration walks, and fascinating messy experiments.",
  },
];

function Home() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll triggers
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased relative">
      {/* Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 h-[3px] bg-primary z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <SiteNav onBookVisit={() => setIsVisitModalOpen(true)} />
      <main>
        <Hero onBookVisit={() => setIsVisitModalOpen(true)} />
        <WhyUs />
        <WhyChooseUs />
        <ProgramsSection />
        <JourneySection />
        <LifePhotoStrip />
        <OurDay />
        <FeaturedActivities />
        <ClassroomGlimpse onBookVisit={() => setIsVisitModalOpen(true)} />
        <ParentCommunication />
        <SafetySection />
        <FirstDaySection onBookVisit={() => setIsVisitModalOpen(true)} />
        <AdmissionProcess />
        <GallerySection />
        <Teachers />
        <StatsBar />
        <Testimonials />
        <EventsSection />
        <ParentResources />
        <NewsletterSection />
        <CallToAction onBookVisit={() => setIsVisitModalOpen(true)} />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top */}
      {showBackToTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-2xl bg-primary text-white shadow-lift hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
        >
          <ChevronUp className="size-5.5" />
        </button>
      ) : null}

      {/* Floating CTA (Desktop only) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <a
          href="#contact"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-premium hover:-translate-y-0.5 transition-transform"
        >
          <MessageSquare className="size-4.5 text-sunny animate-pulse" />
          Enquire Now
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 border-t border-border/80 p-3 flex md:hidden gap-3 shadow-lift backdrop-blur-md">
        <button
          onClick={() => setIsVisitModalOpen(true)}
          className="flex-1 min-h-11 rounded-2xl bg-primary text-white text-sm font-bold shadow-soft"
        >
          Book a Visit
        </button>
        <a
          href="#contact"
          className="flex-1 min-h-11 inline-flex items-center justify-center rounded-2xl bg-cream border border-sunny text-ink text-sm font-bold"
        >
          Enquire Now
        </a>
      </div>

      {/* Book Visit Dialog Modal */}
      {isVisitModalOpen ? (
        <VisitBookingModal onClose={() => setIsVisitModalOpen(false)} />
      ) : null}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center px-4">
      {eyebrow ? (
        <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full bg-cream border border-sunny/75 px-4 py-1.5 text-sm font-bold text-primary">
          <Sparkles className="size-3.5" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">{text}</p> : null}
    </Reveal>
  );
}

function Hero({ onBookVisit }: { onBookVisit: () => void }) {
  return (
    <section id="home" className="relative overflow-hidden bg-cream/70 py-12 md:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute -left-20 -top-20 size-72 rounded-full bg-sky/40 blur-3xl" />
        <div className="absolute right-0 top-10 size-80 rounded-full bg-peach/40 blur-3xl" />

        {/* Floating brand icons */}
        <div className="absolute left-[6%] top-[12%] animate-float text-primary opacity-60">
          <Illustration type="star" className="size-8" />
        </div>
        <div className="absolute right-[12%] top-[8%] animate-float-slow text-sunny opacity-60">
          <Illustration type="cloud" className="size-12" />
        </div>
        <div className="absolute bottom-[20%] left-[10%] animate-float-slow text-blossom opacity-60">
          <Illustration type="balloon" className="size-9" />
        </div>
        <div className="absolute bottom-[10%] right-[8%] animate-float text-mint opacity-60">
          <Illustration type="leaf" className="size-8" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7 text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-background border border-border/80 px-4 py-2 text-sm font-bold text-ink shadow-sm">
            🎉 <span className="text-primary font-extrabold">Now enrolling</span> ages 2–6
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] text-ink sm:text-5xl lg:text-6xl">
            Little Steps.
            <br />
            <span className="text-primary">Big Discoveries.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Where curiosity grows, friendships begin, and every little learner gets the space to explore under warm, experienced guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition-all duration-200"
            >
              Explore Programs
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </a>
            <button
              onClick={onBookVisit}
              className="inline-flex min-h-12 items-center rounded-full border-2 border-primary/25 bg-background px-7 text-base font-bold text-ink shadow-sm hover:bg-cream hover:border-primary/50 transition-all duration-200"
            >
              Book a Visit
            </button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border/60 pt-8">
            {[
              ["12+", "Years of Care"],
              ["1:6", "Teacher Ratio"],
              ["400+", "Happy Families"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-background p-4 text-center border border-border/40 shadow-soft">
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{value}</dd>
                <dd className="mt-1 text-xs font-bold text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-[2.2rem] bg-background p-3.5 shadow-lift border border-border/40">
            <img
              src={heroImg}
              alt="Children playing, painting and reading with their teacher in a bright preschool classroom"
              width={1280}
              height={1024}
              className="w-full aspect-[4/3] rounded-[1.8rem] object-cover shadow-sm"
            />
          </div>
          {/* Floating hours badge */}
          <div className="absolute -bottom-6 left-8 items-center gap-3 rounded-2xl border border-border/60 bg-background px-5 py-3.5 shadow-lift flex animate-bounce-slow">
            <span className="grid size-10 place-items-center rounded-xl bg-sunny text-xl" aria-hidden="true">
              🌈
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Safe, joyful days</p>
              <p className="text-xs font-bold text-muted-foreground">8:30 AM – 4:00 PM</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="About Us"
        title="A Happy Place to Learn & Grow"
        text="LittleSteps is a warm neighbourhood preschool built around play, kindness and gentle routines."
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {chooseBenefits.slice(0, 4).map((card, i) => (
          <Reveal
            as="li"
            key={card.title}
            delay={i * 90}
            className="group rounded-[2rem] border border-border/50 bg-card p-7 shadow-soft hover:-translate-y-1.5 hover:shadow-lift transition-all duration-300"
          >
            <span
              className={`grid size-14 place-items-center rounded-2xl ${card.color} text-2xl mb-6`}
              aria-hidden="true"
            >
              <Illustration type={card.illustration} className="size-7" />
            </span>
            <h3 className="text-xl font-bold tracking-tight text-ink">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

// 1. "WHY PARENTS CHOOSE LITTLESTEPS" SECTION
function WhyChooseUs() {
  return (
    <section className="bg-cream/45 border-y border-border py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Families Choose LittleSteps"
          text="We combine premium early-years education with a nurturing neighborhood environment that centers on each child's voice."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Benefits list left */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-4">
            {chooseBenefits.slice(0, 3).map((b, idx) => (
              <Reveal
                key={b.title}
                delay={idx * 80}
                className="flex gap-4 rounded-3xl bg-card border border-border p-5 shadow-soft"
              >
                <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${b.color}`}>
                  <Illustration type={b.illustration} className="size-5.5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Large central photo */}
          <Reveal delay={100} className="lg:col-span-4 flex justify-center">
            <div className="relative max-w-sm rounded-[2.5rem] bg-background border border-border/80 p-3 shadow-lift">
              <img
                src={galleryOutdoor}
                alt="Happy child smiling on a playground swing"
                className="rounded-[2.2rem] object-cover w-full h-[360px]"
              />
              <div className="absolute -top-4 -right-4 size-16 bg-sunny text-amber-800 text-2xl grid place-items-center rounded-2xl shadow-lift animate-float">
                🌱
              </div>
            </div>
          </Reveal>

          {/* Benefits list right */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-4">
            {chooseBenefits.slice(3, 6).map((b, idx) => (
              <Reveal
                key={b.title}
                delay={idx * 80}
                className="flex gap-4 rounded-3xl bg-card border border-border p-5 shadow-soft"
              >
                <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${b.color}`}>
                  <Illustration type={b.illustration} className="size-5.5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. PROGRAMS & INTERACTIVE CARDS + 24. COMPARISON
function ProgramsSection() {
  const [compareOpen, setCompareOpen] = useState(false);

  const getProgramPath = (name: string) => {
    if (name === "Play Group") return "/programs/play-group";
    if (name === "Nursery") return "/programs/nursery";
    if (name === "LKG") return "/programs/lkg";
    if (name === "UKG") return "/programs/ukg";
    return "/";
  };

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Programs"
          title="Programs for Every Little Learner"
          text="Small groups, familiar faces and a day shaped around what each age needs most."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={i * 80}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/40 bg-card shadow-soft hover:-translate-y-1.5 hover:shadow-lift transition-all duration-300 relative"
            >
              <Link to={getProgramPath(p.name)} className="overflow-hidden aspect-[4/3] w-full relative block">
                <img
                  src={p.img}
                  alt={`${p.name} children at LittleSteps Preschool`}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Age Badge */}
                <div className="absolute top-4 left-4 rounded-full bg-background/95 border border-primary/20 px-3.5 py-1 text-xs font-extrabold text-primary shadow-sm">
                  {p.age}
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-6 relative">
                <h3 className="text-xl font-bold text-ink hover:text-primary transition-colors">
                  <Link to={getProgramPath(p.name)}>{p.name}</Link>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>

                {/* Information Panel on Hover (Desktop) / Tap (Mobile) */}
                <div className="mt-4 pt-4 border-t border-border/60 text-xs font-semibold text-muted-foreground space-y-1.5">
                  <p><span className="text-ink font-bold">Focus:</span> {p.focus}</p>
                  <p><span className="text-ink font-bold">Hours:</span> {p.hours}</p>
                </div>

                <Link
                  to={getProgramPath(p.name)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:translate-x-0.5 transition-transform"
                >
                  Explore Program →
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Compare Programs Tool */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setCompareOpen(!compareOpen)}
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-primary/25 bg-background px-6 text-sm font-bold text-ink shadow-sm hover:bg-cream transition-colors"
          >
            {compareOpen ? "Hide Program Comparison" : "Compare Programs"}
          </button>

          {compareOpen ? (
            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-lift text-left max-w-4xl mx-auto overflow-hidden animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/80 text-ink">
                      <th className="py-3 px-4 text-left font-bold font-display">Feature</th>
                      <th className="py-3 px-4 font-bold font-display">Play Group</th>
                      <th className="py-3 px-4 font-bold font-display">Nursery</th>
                      <th className="py-3 px-4 font-bold font-display">LKG</th>
                      <th className="py-3 px-4 font-bold font-display">UKG</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4 font-bold text-ink">Age Range</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">2–3 years</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">3–4 years</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">4–5 years</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">5–6 years</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4 font-bold text-ink">Play Focus</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ Sensory Play</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ Social Play</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ Guided Projects</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ STEM Builds</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4 font-bold text-ink">Early Literacy</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">—</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ Phonics Intro</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ Tracing & Blending</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ Reading & Phonics</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-ink">School Readiness</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">—</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">—</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ Soft Prep</td>
                      <td className="py-3 px-4 text-center text-emerald-600">✓ Primary Complete</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

// 2. CHILD DEVELOPMENT JOURNEY
function JourneySection() {
  const [activeStage, setActiveStage] = useState(0);
  const currentStage = (journeyStages[activeStage] || journeyStages[0])!;

  return (
    <section className="bg-cream/45 border-t border-border py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Milestones"
          title="Growing Every Step of the Way"
          text="We map every program to specific developmental phases, ensuring learning flows naturally with age milestones."
        />

        {/* Stages Tabs */}
        <div className="mt-12 flex flex-wrap justify-between gap-3 border-b border-border/60 pb-3">
          {journeyStages.map((js, index) => (
            <button
              key={js.stage}
              onClick={() => setActiveStage(index)}
              className={`flex-1 min-w-[140px] text-center py-3.5 px-4.5 rounded-2xl font-bold border transition-all duration-200 ${activeStage === index
                ? "bg-primary border-primary text-white shadow-soft"
                : "bg-background border-border text-muted-foreground hover:bg-cream hover:text-ink"
                }`}
            >
              <span className="block text-xs uppercase tracking-widest opacity-80">{js.age}</span>
              <span className="block text-base font-display mt-0.5">{js.stage}</span>
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-lift flex flex-col md:flex-row gap-8 items-start animate-scale-in">
          <div className="flex-1">
            <span className={`inline-flex px-3.5 py-1.5 rounded-full text-xs font-extrabold ${currentStage.color} border mb-4`}>
              Development Focus: {currentStage.verb}
            </span>
            <h3 className="text-2xl font-extrabold text-ink font-display">{currentStage.stage} Journey</h3>
            <p className="mt-3.5 text-sm text-muted-foreground leading-relaxed">
              {currentStage.detailText}
            </p>
          </div>

          <div className="w-full md:w-[320px] rounded-2xl bg-cream border border-border/40 p-6">
            <p className="text-xs font-bold text-ink uppercase tracking-wider mb-3">Key Development Areas:</p>
            <ul className="space-y-3.5">
              {currentStage.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm font-semibold text-muted-foreground">
                  <CheckCircle className="size-4.5 text-primary shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. DAILY LIFE PHOTO STRIP
function LifePhotoStrip() {
  return (
    <section className="py-14 bg-background overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink font-display">A Peek Inside Our Happy Day</h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          Hover or tap on our daily milestones to imagine your little learner spending their days at LittleSteps.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto pb-4 scrollbar-none">
        <div className="flex gap-4 px-6 min-w-[1000px] justify-between max-w-6xl mx-auto">
          {dailyLifeStrip.map((item, idx) => (
            <div
              key={item.label}
              className={`flex-1 rounded-[1.75rem] ${item.bg} border border-border/40 p-5 shadow-soft transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5`}
            >
              <span className="inline-block text-xs font-extrabold text-primary font-mono">{item.time}</span>
              <h3 className="text-base font-extrabold text-ink font-display mt-2">{item.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5 font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurDay() {
  return (
    <section id="activities" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Our Day"
        title="A Day at LittleSteps"
        text="Predictable, gentle rhythms help children feel settled and ready to explore."
      />

      {/* Horizontal timeline for desktop */}
      <div className="relative mt-16 hidden md:block">
        <div aria-hidden="true" className="absolute top-[28px] left-[5%] right-[5%] h-1 rounded-full bg-border" />
        <ol className="grid grid-cols-6 gap-4">
          {schedule.map((s, i) => (
            <Reveal
              as="li"
              key={s.time}
              delay={i * 80}
              className="text-center group"
            >
              <span
                className={`mx-auto relative z-10 grid size-14 place-items-center rounded-2xl ${s.tone} shadow-soft border-2 border-background transition-transform duration-300 group-hover:scale-110`}
                aria-hidden="true"
              >
                <Illustration type={s.illustration} className="size-6" />
              </span>
              <p className="mt-5 font-display text-lg font-extrabold text-ink">{s.time}</p>
              <p className="mt-1.5 px-2 text-sm font-bold text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Vertical timeline for mobile */}
      <ol className="relative mt-12 space-y-5 md:hidden pl-3">
        <div
          aria-hidden="true"
          className="absolute left-7 top-4 bottom-4 w-0.5 bg-border"
        />
        {schedule.map((s, i) => (
          <Reveal
            as="li"
            key={`m-${s.time}`}
            delay={i * 60}
            className="relative flex items-center gap-5 pl-0"
          >
            <span
              className={`relative z-10 grid size-12 shrink-0 place-items-center rounded-2xl ${s.tone} shadow-soft`}
              aria-hidden="true"
            >
              <Illustration type={s.illustration} className="size-5.5" />
            </span>
            <div className="min-w-0 flex-1 rounded-[1.5rem] border border-border/55 bg-card p-4.5 shadow-soft">
              <p className="font-display text-base font-extrabold text-ink">{s.time}</p>
              <p className="text-sm font-bold text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

// 5. FEATURED ACTIVITIES SECTION
function FeaturedActivities() {
  return (
    <section className="bg-cream/45 border-y border-border py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Curriculum Activities"
          title="Little Hands, Big Ideas"
          text="We provide a curriculum enriched with artistic, physical and mathematical explorations, guided by children's own pace."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredActivities.map((act, i) => (
            <Reveal
              key={act.title}
              delay={i * 70}
              className={`rounded-[1.8rem] border border-border/40 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${act.color}`}
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-background border border-border/20 shadow-sm mb-5 text-ink">
                <Illustration type={act.illustration} className="size-6" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-ink font-display">{act.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed opacity-85 font-semibold text-muted-foreground">{act.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

// 3. "A GLIMPSE INTO OUR CLASSROOM" SECTION + 13. MEET OUR SPACE HOTSPOTS
function ClassroomGlimpse({ onBookVisit }: { onBookVisit: () => void }) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const currentHotspot = activeHotspot !== null ? (classroomHotspots[activeHotspot] || null) : null;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Meet Our Space"
          title="Learning Looks Like This"
          text="Explore the corners of LittleSteps classrooms that promote self-directed child inquiry."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Interactive Classroom hot-spots */}
          <Reveal className="lg:col-span-7 relative group">
            <div className="overflow-hidden rounded-[2.2rem] bg-cream p-3 shadow-lift border border-border/40 relative">
              <img
                src={heroImg}
                alt="Preschool classroom reading corner layout"
                className="w-full aspect-[4/3] rounded-[1.8rem] object-cover"
              />

              {/* Hotspot buttons */}
              {classroomHotspots.map((hs, index) => (
                <button
                  key={hs.name}
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                  className="absolute p-2 bg-primary border-2 border-white text-white rounded-full shadow-lift hover:scale-110 active:scale-95 transition-transform animate-pulse"
                  style={{ left: hs.x, top: hs.y }}
                  aria-label={`Explore ${hs.name}`}
                >
                  <span className="block size-2 bg-white rounded-full" />
                </button>
              ))}
            </div>

            {/* Hotspot tooltip panel */}
            {currentHotspot !== null ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-72 bg-background border border-border/80 p-5 rounded-2xl shadow-lift animate-scale-in">
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="absolute right-3.5 top-3.5 text-muted-foreground hover:text-ink"
                  aria-label="Close details"
                >
                  <X className="size-4" />
                </button>
                <h4 className="font-extrabold text-ink font-display">{currentHotspot.name}</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-semibold">
                  {currentHotspot.text}
                </p>
              </div>
            ) : null}

            {/* Mobile Hotspot fallback list */}
            <ul className="mt-4 flex flex-wrap gap-2 md:hidden">
              {classroomHotspots.map((hs, idx) => (
                <li key={hs.name}>
                  <button
                    onClick={() => setActiveHotspot(idx)}
                    className="rounded-full bg-cream border border-border px-3 py-1.5 text-xs font-bold text-ink"
                  >
                    📍 {hs.name}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Value descriptions side */}
          <Reveal delay={100} className="lg:col-span-5 text-left">
            <h3 className="text-2xl font-extrabold text-ink font-display">A Nurturing Environment</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Every table, shelf, and corner is designed intentionally for young children to reach, explore, and put away independently.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                { title: "Create", desc: "Easels, mud bowls, and paint boxes always within child reach.", icon: "🎨" },
                { title: "Explore", desc: "Sensory bins, gears, and block columns waiting to be stacked.", icon: "🧩" },
                { title: "Discover", desc: "curated reading nooks containing picture storybooks.", icon: "📚" }
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-ink text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <button
                onClick={onBookVisit}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white shadow-soft"
              >
                Plan a Visit →
              </button>
              <a
                href="#gallery"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-bold text-ink hover:bg-cream"
              >
                See Our Gallery
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// 7. PARENT COMMUNICATION SECTION
function ParentCommunication() {
  return (
    <section className="bg-cream/45 border-y border-border py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Connection"
          title="You're Always Part of Their Day"
          text="We believe parents should never feel disconnected from their child's preschool journey."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <h3 className="text-2xl font-extrabold text-ink font-display">Daily Updates in Your Pocket</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We capture and share real classroom moments. Check photos of their building accomplishments, daily food menus, and teacher updates directly from our secure updates system.
            </p>

            <ul className="mt-6 space-y-4.5">
              {[
                { title: "Daily Moments", desc: "Beautiful photos of sensory builds, arts, and gardening cycles." },
                { title: "Progress Updates", desc: "Brief teacher updates reviewing social and literacy milestones." },
                { title: "Teacher Chats", desc: "Send direct feedback notes to your child's educators anytime." }
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-sunny text-sm text-amber-800" aria-hidden="true">✓</span>
                  <div>
                    <h4 className="font-bold text-ink text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Update App Card Mockup */}
          <Reveal delay={100} className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[2rem] border border-border bg-background p-6 shadow-lift relative">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-full bg-sunny text-lg shadow-sm">🐣</span>
                  <div>
                    <h4 className="text-xs font-bold text-ink">LittleSteps Portal</h4>
                    <p className="text-[10px] text-muted-foreground font-semibold">Today's Update • Nursery</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-mint/35 border border-mint px-2.5 py-0.5 rounded-full">Delivered</span>
              </div>

              <div className="mt-4">
                <p className="text-xs font-extrabold text-ink">Aria's Water Play Update 💧</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed italic">
                  "Aria enjoyed the color-sorting water-play activity today and confidently joined circle time songs!"
                </p>
                <div className="mt-4 rounded-xl bg-cream border border-border/40 p-2.5 flex items-center justify-between text-[10px] text-muted-foreground font-bold">
                  <span>🥪 Food: Finished lunch</span>
                  <span>😴 Nap: 45 mins</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// 8. SAFETY & CARE SECTION
function SafetySection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Security & Health"
          title="A Place Where Little Ones Feel Safe"
          text="Your child's physical safety and emotional security are our absolute foundation."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5 flex justify-center">
            <div className="grid size-48 place-items-center rounded-[2.5rem] bg-mint border border-mint/70 text-emerald-800 shadow-soft">
              <Shield className="size-20 text-emerald-700" />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Shield, title: "Secure Premises", desc: "Single entry gate checks, visitor passes, and security guard checks." },
              { icon: Heart, title: "Trained Educators", desc: "All team members undergo child protection, safety, and CPR training." },
              { icon: Smile, title: "Clean Spaces", desc: "Daily deep sanitization routines for toys, desks, and carpeted floors." },
              { icon: BookOpen, title: "Caring Routines", desc: "Predictable schedules that build comfort and trust." }
            ].map((s) => (
              <div key={s.title} className="rounded-[1.75rem] border border-border/40 bg-card p-6 shadow-soft hover:-translate-y-1 transition-transform">
                <span className="grid size-11 place-items-center rounded-xl bg-sunny text-amber-800 mb-4">
                  <s.icon className="size-5.5" />
                </span>
                <h3 className="text-base font-bold text-ink">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-semibold">{s.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// 14. "FIRST DAY" SECTION
function FirstDaySection({ onBookVisit }: { onBookVisit: () => void }) {
  return (
    <section className="bg-cream/45 border-t border-border py-20 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="Nurturing Start"
          title="Every Big Journey Starts With a Little Hello."
          text="Settling into preschool takes a team effort. Here is how we ensure their first day feels comfortable, friendly and reassuring."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {[
            { step: "01", label: "Welcome", desc: "A warm, one-on-one greeting at the door by the lead teacher." },
            { step: "02", label: "Explore", desc: "Your child gets space to inspect toys, painting easels and nooks." },
            { step: "03", label: "Play", desc: "Gentle games, blocks, and songs help them settle naturally." },
            { step: "04", label: "Connect", desc: "Teachers begin understanding their voice, interests, and personality." }
          ].map((item) => (
            <Reveal key={item.step} className="rounded-3xl bg-card border border-border p-6 shadow-soft">
              <span className="block font-mono text-2xl font-extrabold text-primary opacity-60">{item.step}</span>
              <h3 className="text-base font-extrabold text-ink font-display mt-2">{item.label}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-semibold">{item.desc}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={onBookVisit}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-7 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 transition-transform"
          >
            Plan a Visit →
          </button>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-7 text-sm font-bold text-ink hover:bg-cream"
          >
            Ask Questions
          </a>
        </div>
      </div>
    </section>
  );
}

// 25. ADMISSION PROCESS
function AdmissionProcess() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Admissions"
          title="How Admission Works"
          text="We keep the admission loop simple and transparent for families."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting line for desktop */}
          <div aria-hidden="true" className="absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-border hidden lg:block" />

          {admissionSteps.map((step) => (
            <Reveal key={step.step} className="rounded-[1.75rem] border border-border/40 bg-card p-6 shadow-soft text-center group z-10 relative">
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-sunny text-amber-800 font-mono font-extrabold text-base border-2 border-background shadow-sm transition-transform duration-300 group-hover:scale-105">
                {step.step}
              </span>
              <h3 className="text-base font-extrabold text-ink font-display mt-4">{step.title}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-semibold">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-primary group"
          >
            Start Your Enquiry
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// 9. STATS / TRUST BAR
function StatsBar() {
  return (
    <section className="bg-cream/45 border-y border-border py-16">
      <div className="mx-auto max-w-5xl px-4">
        <dl className="grid gap-6 grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { end: 12, suffix: "+", label: "Years of Care" },
            { end: 400, suffix: "+", label: "Happy Families" },
            { end: 6, prefix: "1:", label: "Teacher Ratio" },
            { end: 6, suffix: "", label: "Learning Areas" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-card border border-border/30 p-5 shadow-soft">
              <dd className="text-3xl sm:text-4xl text-ink font-display">
                <CountUp end={item.end} prefix={item.prefix} suffix={item.suffix} />
              </dd>
              <dt className="text-xs font-bold text-muted-foreground mt-1.5">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// 10. EVENTS & SPECIAL DAYS
function EventsSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Campus Life"
          title="There's Always Something Happening!"
          text="We host monthly weekend workshops, family hour reading events, and classroom days."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((e, idx) => (
            <Reveal
              key={e.title}
              delay={idx * 80}
              className="rounded-3xl border border-border/40 bg-card p-6 shadow-soft hover:-translate-y-1 transition-transform flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/40 pb-3">
                  <span className="text-xs font-extrabold text-primary font-mono">{e.date}</span>
                  <span className="text-2xl">{e.icon}</span>
                </div>
                <h3 className="text-base font-extrabold text-ink font-display mt-4">{e.title}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-semibold">{e.desc}</p>
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline"
              >
                View Details <ArrowUpRight className="size-3.5" />
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-white shadow-soft"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}

// 11. PARENT RESOURCES SECTION + 12. FAQ ACCORDION
function ParentResources() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="bg-cream/45 border-t border-border py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 items-start">

          {/* Resources left */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-extrabold text-ink font-display">Helpful Things for Parents</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We compile handy materials to help parents prep children for transition milestones.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { title: "Parent Guide", desc: "Handbook detailing daily routines and values.", icon: BookOpen, cta: "Download Guide" },
                { title: "What to Bring", desc: "Backpack checklist for transition confidence.", icon: Backpack, cta: "View Checklist" },
                { title: "FAQ Booklet", desc: "Comprehensive review of safety and sickness.", icon: HelpCircle, cta: "Explore FAQs" },
                { title: "Admission steps", desc: "Key information on terms and options.", icon: Compass, cta: "Read Steps" }
              ].map((res) => (
                <div key={res.title} className="rounded-2xl border border-border bg-card p-5 flex gap-4 shadow-soft">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sunny text-amber-800">
                    <res.icon className="size-5.5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-ink text-sm">{res.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 font-semibold leading-relaxed">{res.desc}</p>
                    <a href="#contact" className="mt-2.5 inline-block text-[10px] font-extrabold text-primary uppercase tracking-wider">{res.cta} →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion FAQ right */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-extrabold text-ink font-display mb-6">Questions Parents Often Ask</h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={faq.q} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-extrabold text-ink text-sm focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="text-primary text-lg font-bold">{openFAQ === idx ? "−" : "+"}</span>
                  </button>
                  {openFAQ === idx ? (
                    <div className="p-5 pt-0 border-t border-border/40 text-xs text-muted-foreground leading-relaxed font-semibold animate-slide-in">
                      {faq.a}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Classroom", "Art & Craft", "Outdoor Play", "Activities", "STEM"];

  // Filtered list of images with index relative to active category
  const filteredGallery = gallery.map((item, originalIndex) => ({ ...item, originalIndex }))
    .filter(item => activeCategory === "All" || item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredGallery.length);
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredGallery.length) % filteredGallery.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Gallery"
        title="Little Moments From Our Days"
        text="Classroom projects, art tables, outdoor play and story circles."
      />

      {/* Category Filters */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4.5 py-1.5 text-sm font-bold border transition-all duration-200 ${activeCategory === cat
              ? "bg-primary border-primary text-primary-foreground shadow-sm"
              : "bg-background border-border/80 text-muted-foreground hover:bg-cream hover:text-ink"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGallery.map((g, i) => (
          <li
            key={g.alt}
            onClick={() => openLightbox(i)}
            className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-border/30 shadow-soft list-none"
          >
            <Reveal delay={i * 60}>
              <div className="overflow-hidden aspect-[4/3] w-full">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={768}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-ink/35 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="rounded-full bg-background/95 px-5 py-2.5 text-xs font-extrabold text-ink shadow-lift scale-90 group-hover:scale-100 transition-transform duration-300">
                  View Photo
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Modal Lightbox */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute right-6 top-6 grid size-12 place-items-center rounded-full bg-background/10 hover:bg-background/25 text-white transition-colors"
          >
            <X className="size-6" />
          </button>

          {/* Prev Control */}
          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous Image"
            className="absolute left-6 top-1/2 -translate-y-1/2 hidden sm:grid size-12 place-items-center rounded-full bg-background/10 hover:bg-background/25 text-white transition-colors"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Next Control */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next Image"
            className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:grid size-12 place-items-center rounded-full bg-background/10 hover:bg-background/25 text-white transition-colors"
          >
            <ChevronRight className="size-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightboxIndex].src}
              alt={filteredGallery[lightboxIndex].alt}
              className="max-h-[75vh] w-auto max-w-full object-contain mx-auto rounded-lg"
            />
            <div className="bg-background/10 backdrop-blur-md p-4 text-center text-white mt-2 rounded-lg text-sm font-semibold max-w-xl mx-auto">
              {filteredGallery[lightboxIndex].alt}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Parents, Enjoyed by Little Learners"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 90}
              className="rounded-[2rem] border border-border/40 bg-card p-7.5 shadow-soft hover:-translate-y-1 transition-all duration-350"
            >
              <p className="text-base leading-relaxed text-muted-foreground italic">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3.5 border-t border-border/40 pt-5">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-2xl bg-peach text-xl"
                  aria-hidden="true"
                >
                  <Illustration type={t.illustration} className="size-6 text-amber-700" />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-bold text-ink text-base">{t.name}</p>
                  <p className="truncate text-xs font-bold text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Teachers() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Our Team"
        title="Meet Our Caring Teachers"
        text="Familiar, friendly faces who greet your child by name every morning."
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((t, i) => (
          <Reveal
            as="li"
            key={t.name}
            delay={i * 90}
            className="overflow-hidden rounded-[2rem] border border-border/40 bg-card text-center shadow-soft hover:-translate-y-1.5 hover:shadow-lift transition-all duration-300"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={t.img}
                alt={`${t.name}, ${t.role}`}
                width={640}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-102"
              />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold text-ink">{t.name}</h3>
              <p className="mt-1.5 text-sm font-extrabold text-primary uppercase tracking-wider">{t.role}</p>
              <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

// 26. FINAL "READY?" SECTION
function CallToAction({ onBookVisit }: { onBookVisit: () => void }) {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-sky/20 border border-sky/35 px-6 py-16 text-center sm:px-12">
        <span aria-hidden="true" className="absolute left-10 top-10 animate-float text-primary/30">
          <Illustration type="pencil" className="size-10" />
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-10 right-10 animate-float-slow text-blossom/65"
        >
          <Illustration type="balloon" className="size-12" />
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Your Little One's Next Adventure Starts Here.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
          Come see our classrooms, meet our teachers and discover what makes LittleSteps special.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <button
            onClick={onBookVisit}
            className="inline-flex min-h-12 items-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition-all duration-200"
          >
            Book a Visit
          </button>
          <a
            href={`tel:${CONTACT_CONFIG.PHONE_NUMBER.replace(/\s+/g, "")}`}
            className="inline-flex min-h-12 items-center rounded-full border border-border/80 bg-background px-8 text-base font-bold text-ink shadow-sm hover:bg-cream transition-all duration-200"
          >
            Call Us
          </a>
        </div>
        <p className="mt-5 text-xs font-medium text-muted-foreground">
          Associated under Mavros Tech Pvt Ltd.
        </p>
      </Reveal>
    </section>
  );
}

const contactDetails = [
  { icon: Phone, label: "Phone", value: CONTACT_CONFIG.PHONE_NUMBER },
  { icon: Mail, label: "Email", value: CONTACT_CONFIG.CONTACT_EMAIL },
  { icon: MapPin, label: "Location", value: CONTACT_CONFIG.LOCATION },
  { icon: Clock, label: "Opening Hours", value: "Mon–Fri, 8:30 AM – 4:00 PM" },
];

function Contact() {
  const [form, setForm] = useState({ parentName: "", childAge: "", phone: "", email: "", program: "Nursery", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!form.parentName.trim()) tempErrors["parentName"] = "Parent name is required.";
    if (!form.childAge.trim()) tempErrors["childAge"] = "Child's age is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      tempErrors["email"] = "Email address is required.";
    } else if (!emailRegex.test(form.email)) {
      tempErrors["email"] = "Please enter a valid email address.";
    }

    const phoneRegex = /^\+?[0-9\s\-]{8,15}$/;
    if (!form.phone) {
      tempErrors["phone"] = "Phone number is required.";
    } else if (!phoneRegex.test(form.phone)) {
      tempErrors["phone"] = "Please enter a valid phone number.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    if (CONTACT_CONFIG.FORM_ENDPOINT) {
      fetch(CONTACT_CONFIG.FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => {
          if (res.ok) {
            setSent(true);
            setForm({ parentName: "", childAge: "", phone: "", email: "", program: "Nursery", message: "" });
          } else {
            alert("Oops! There was an issue submitting your form. Please try again.");
          }
        })
        .catch(() => {
          alert("Oops! There was an issue submitting your form. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setTimeout(() => {
        setLoading(false);
        setSent(true);
        setForm({ parentName: "", childAge: "", phone: "", email: "", program: "Nursery", message: "" });
      }, 1200);
    }
  }

  return (
    <section id="contact" className="bg-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Come Say Hello"
          text="Tell us a little about your child and we'll get back within one working day."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4.5 rounded-[1.8rem] border border-border/40 bg-card p-5.5 shadow-soft"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mint text-emerald-800">
                  <Icon className="size-5.5" aria-hidden="true" />
                </span>
                <div className="min-w-0 font-sans">
                  <p className="text-sm font-extrabold text-ink tracking-wide uppercase">{label}</p>
                  {label === "Phone" ? (
                    <a href={`tel:${value.replace(/\s+/g, "")}`} className="mt-1 block text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : label === "Email" ? (
                    <a href={`mailto:${value}`} className="mt-1 block text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : label === "Location" ? (
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(value)}`} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-muted-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[2.2rem] border border-border/50 bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="parentName"
                  name="parentName"
                  label="Parent Name"
                  placeholder="Your full name"
                  value={form.parentName}
                  onChange={handleInputChange}
                  error={errors["parentName"]}
                />
                <Field
                  id="childAge"
                  name="childAge"
                  label="Child's Age"
                  placeholder="e.g. 3 years"
                  value={form.childAge}
                  onChange={handleInputChange}
                  error={errors["childAge"]}
                />
                <Field
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={handleInputChange}
                  error={errors["phone"]}
                />
                <Field
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleInputChange}
                  error={errors["email"]}
                />

                <div className="sm:col-span-2">
                  <label htmlFor="program" className="mb-2 block text-sm font-bold text-ink">
                    Preferred Program
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={form.program}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  >
                    <option value="Play Group">Play Group (2–3 years)</option>
                    <option value="Nursery">Nursery (3–4 years)</option>
                    <option value="LKG">LKG (4–5 years)</option>
                    <option value="UKG">UKG (5–6 years)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you'd like to know"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed transition-all sm:w-auto"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
                <span className="text-xs font-medium text-muted-foreground">
                  Associated under Mavros Tech Pvt Ltd.
                </span>
              </div>

              {sent ? (
                <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-mint/35 border border-mint p-4 text-emerald-800 animate-fade-in">
                  <CheckCircle className="size-5 shrink-0" />
                  <p className="text-sm font-bold">
                    Thank you! Your enquiry has been received. We'll be in touch shortly.
                  </p>
                </div>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}



export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-2xl bg-sunny text-xl shadow-soft">
              🐣
            </span>
            <span className="font-display text-lg font-extrabold text-ink">LittleSteps</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-semibold">
            A warm neighbourhood preschool where little steps lead to big discoveries.
          </p>
          <p className="mt-4 text-sm font-medium text-muted-foreground/80">
            Associated under Mavros Tech Pvt Ltd.
          </p>
          <div className="mt-4.5 flex gap-2">
            {[
              { 
                Icon: Facebook, 
                label: "Facebook", 
                ariaLabel: "Visit us on Facebook", 
                href: "https://www.facebook.com/profile.php?id=61591601618120",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              { 
                Icon: Instagram, 
                label: "Instagram", 
                ariaLabel: "Visit us on Instagram", 
                href: "https://www.instagram.com/mavrostech.in/",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              { 
                Icon: Youtube, 
                label: "YouTube", 
                ariaLabel: "YouTube", 
                href: "#home"
              },
            ].map(({ Icon, label, ariaLabel, href, target, rel }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={rel}
                aria-label={ariaLabel}
                className="grid size-11 place-items-center rounded-2xl bg-background border border-border/40 text-ink transition-all hover:bg-sky/60 hover:text-white hover:border-transparent active:scale-95 shadow-sm"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Quick Links"
          items={[
            ["Home", "#home"],
            ["About Us", "#about"],
            ["Programs", "#programs"],
            ["Activities", "#activities"],
            ["Gallery", "#gallery"],
          ]}
        />
        <FooterCol
          title="Programs"
          items={[
            ["Play Group", "#programs"],
            ["Nursery", "#programs"],
            ["LKG", "#programs"],
            ["UKG", "#programs"],
          ]}
        />
        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-ink/75">
            Contact
          </h2>
          <ul className="mt-4 space-y-3.5 text-sm font-semibold text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary shrink-0" />
              <a href={`tel:${CONTACT_CONFIG.PHONE_NUMBER.replace(/\s+/g, "")}`} className="hover:text-primary transition-colors">{CONTACT_CONFIG.PHONE_NUMBER}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary shrink-0" />
              <a href={`mailto:${CONTACT_CONFIG.CONTACT_EMAIL}`} className="hover:text-primary transition-colors">{CONTACT_CONFIG.CONTACT_EMAIL}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
              <a href={CONTACT_CONFIG.MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{CONTACT_CONFIG.LOCATION}</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-primary shrink-0" /> Mon–Fri, 8:30 AM – 4:00 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs font-semibold text-muted-foreground px-4 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <div className="text-center sm:text-left">
          <span>© {new Date().getFullYear()} LittleSteps Preschool. All rights reserved.</span>
        </div>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#home" className="hover:text-primary transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h2 className="text-xs font-extrabold uppercase tracking-widest text-ink/75">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSent(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Email address is required.");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setEmail("");
    }, 1200);
  };

  return (
    <section className="bg-background py-16 px-4 border-t border-border">
      <div className="mx-auto max-w-xl text-center rounded-[2rem] border border-border/50 bg-cream p-8 sm:p-10 shadow-soft">
        <span className="grid size-12 place-items-center rounded-2xl bg-sunny text-amber-700 mx-auto mb-4 text-xl" aria-hidden="true">
          ✉️
        </span>
        <h3 className="text-2xl font-extrabold text-ink font-display">Little Notes for Parents</h3>
        <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed font-semibold">
          Get occasional updates, preschool activities, and LittleSteps news in your inbox.
        </p>
        <form onSubmit={handleSubscribe} noValidate className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Your email address"
              className={`w-full rounded-full border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all ${error ? "border-red-400 focus:ring-red-200" : "border-border focus:border-primary"
                }`}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="min-h-11 rounded-full bg-primary px-8 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 transition-transform disabled:opacity-75"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {error ? (
          <p className="mt-2.5 text-xs font-bold text-red-500 flex items-center justify-center gap-1.5 animate-slide-in">
            <AlertCircle className="size-4" /> {error}
          </p>
        ) : null}
        {sent ? (
          <p className="mt-2.5 text-xs font-bold text-emerald-700 flex items-center justify-center gap-1.5 animate-slide-in">
            <CheckCircle className="size-4" /> Thank you for subscribing! 🌈
          </p>
        ) : null}
        <p className="text-[10px] text-muted-foreground mt-3 font-semibold">
          We'll only send useful updates. No spam.
        </p>
      </div>
    </section>
  );
}

