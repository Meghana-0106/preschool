import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Sprout,
  Palette,
  Heart,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
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
      { title: "LittleSteps Preschool — Little Steps. Big Discoveries." },
      {
        name: "description",
        content:
          "A warm, playful preschool for ages 2–6 with play-based learning, caring teachers, weekend club and a safe, happy environment. Book a visit today.",
      },
      {
        property: "og:title",
        content: "LittleSteps Preschool — Little Steps. Big Discoveries.",
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
          telephone: "+91 98765 43210",
          email: "hello@littlesteps.school",
          address: {
            "@type": "PostalAddress",
            streetAddress: "12 Sunshine Lane, Green Park",
            addressLocality: "Bengaluru",
            addressCountry: "IN",
          },
          openingHours: "Mo-Fr 08:30-16:00",
        }),
      },
    ],
  }),
  component: Home,
});

const whyCards = [
  {
    icon: Sprout,
    emoji: "🌱",
    title: "Learn Through Play",
    text: "Hands-on play activities that turn everyday curiosity into real learning.",
    tone: "bg-mint",
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "Creative Exploration",
    text: "Art, music and storytelling that help little imaginations bloom.",
    tone: "bg-peach",
  },
  {
    icon: Heart,
    emoji: "❤️",
    title: "Caring Teachers",
    text: "Warm, trained educators who know every child by name and by heart.",
    tone: "bg-blossom",
  },
  {
    icon: Star,
    emoji: "🌟",
    title: "Safe & Happy Environment",
    text: "Secure classrooms, healthy routines and lots of gentle encouragement.",
    tone: "bg-sunny",
  },
];

const programs = [
  {
    name: "Play Group",
    age: "2–3 years",
    img: playgroupImg,
    text: "Gentle first steps away from home with sensory play, songs and lots of cuddles.",
  },
  {
    name: "Nursery",
    age: "3–4 years",
    img: nurseryImg,
    text: "Circle time, early language and friendships that build everyday confidence.",
  },
  {
    name: "LKG",
    age: "4–5 years",
    img: lkgImg,
    text: "Letters, numbers and curiosity projects introduced through playful discovery.",
  },
  {
    name: "UKG",
    age: "5–6 years",
    img: ukgImg,
    text: "School-ready reading, writing and thinking skills, at each child's own pace.",
  },
];

const schedule = [
  { time: "09:00", label: "Welcome & Free Play", emoji: "👋", tone: "bg-sunny" },
  { time: "09:30", label: "Circle Time", emoji: "🎶", tone: "bg-sky" },
  { time: "10:00", label: "Creative Learning", emoji: "🎨", tone: "bg-peach" },
  { time: "11:00", label: "Outdoor Play", emoji: "⚽", tone: "bg-mint" },
  { time: "12:00", label: "Lunch", emoji: "🍱", tone: "bg-blossom" },
  { time: "01:00", label: "Story & Activity Time", emoji: "📚", tone: "bg-cream" },
];

const weekend = [
  { emoji: "🎨", title: "Art & Craft", text: "Messy, joyful making sessions." },
  { emoji: "🧩", title: "Fun Learning Games", text: "Puzzles and thinking play." },
  { emoji: "🎵", title: "Music & Dance", text: "Rhythm, songs and movement." },
  { emoji: "🌱", title: "Nature Activities", text: "Garden days and mini walks." },
  { emoji: "📚", title: "Storytelling", text: "Tales, puppets and role play." },
  { emoji: "🤖", title: "Kids STEM Activities", text: "Simple builds and experiments." },
];

const gallery = [
  { src: galleryClassroom, alt: "Children raising hands during a classroom activity" },
  { src: galleryArt, alt: "Two children painting together at an art table" },
  { src: galleryOutdoor, alt: "Children playing on an outdoor playground slide" },
  { src: galleryStory, alt: "Teacher reading a storybook to children on a rug" },
  { src: galleryGroup, alt: "Group music and movement circle in the classroom" },
  { src: galleryStem, alt: "Children exploring a STEM activity with blocks and a toy robot" },
];

const testimonials = [
  {
    name: "Ananya R.",
    role: "Mum of Aarav, Nursery",
    emoji: "🌸",
    text: "Aarav runs into class every morning. The teachers share little updates that make us feel part of his day.",
  },
  {
    name: "Karthik S.",
    role: "Dad of Meera, LKG",
    emoji: "🌤️",
    text: "Beautifully safe and calm space. Meera has become so much more confident and curious in just one term.",
  },
  {
    name: "Fatima N.",
    role: "Mum of Zain, Play Group",
    emoji: "🍀",
    text: "The weekend club is our favourite. Zain comes home covered in paint and full of stories.",
  },
];

const teachers = [
  {
    name: "Priya Menon",
    role: "Lead Teacher, Nursery",
    img: teacher1,
    text: "10 years of early-years teaching and an endless supply of songs.",
  },
  {
    name: "Sara Thomas",
    role: "Head of Curriculum",
    img: teacher2,
    text: "Designs our play-based programs and mentors every classroom.",
  },
  {
    name: "Rahul Iyer",
    role: "Activity & STEM Coach",
    img: teacher3,
    text: "Runs weekend builds, nature walks and messy experiments.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <WhyUs />
        <Programs />
        <OurDay />
        <WeekendClub />
        <Gallery />
        <Testimonials />
        <Teachers />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
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
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 inline-block rounded-full bg-cream px-4 py-1.5 text-sm font-bold text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base text-muted-foreground sm:text-lg">{text}</p> : null}
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-16 top-10 size-52 rounded-full bg-sky/70 blur-2xl" />
        <div className="absolute right-0 top-40 size-64 rounded-full bg-peach/60 blur-3xl" />
        <span className="absolute left-[8%] top-24 animate-float text-3xl">⭐</span>
        <span className="absolute right-[12%] top-16 animate-float-slow text-3xl">☁️</span>
        <span className="absolute bottom-16 left-[18%] animate-float-slow text-3xl">📚</span>
        <span className="absolute bottom-28 right-[6%] animate-float text-3xl">🎈</span>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-bold text-muted-foreground shadow-soft">
            🐣 Now enrolling ages 2–6
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Little Steps.
            <br />
            <span className="text-primary">Big Discoveries.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Where curiosity grows, friendships begin, and every little learner gets the space
            to explore.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#programs"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lift"
            >
              Explore Programs
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-full border-2 border-primary/25 bg-background px-6 text-base font-bold text-ink transition-colors hover:bg-sky/50"
            >
              Book a Visit
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              ["12+", "Years caring"],
              ["1:6", "Teacher ratio"],
              ["400+", "Happy families"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl bg-background p-4 text-center shadow-soft">
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-extrabold text-ink">{value}</dd>
                <dd className="mt-1 text-xs font-semibold text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-[2.5rem] bg-background p-3 shadow-lift">
            <img
              src={heroImg}
              alt="Children playing, painting and reading with their teacher in a bright preschool classroom"
              width={1280}
              height={1024}
              className="w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 hidden items-center gap-3 rounded-3xl bg-background px-5 py-3 shadow-soft sm:flex">
            <span className="text-2xl">🌈</span>
            <p className="text-sm font-bold text-ink">
              Safe, joyful days
              <span className="block text-xs font-semibold text-muted-foreground">
                8:30 AM – 4:00 PM
              </span>
            </p>
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
        {whyCards.map((card, i) => (
          <Reveal
            as="li"
            key={card.title}
            delay={i * 90}
            className="group rounded-[2rem] border border-border/60 bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <span
              className={`grid size-14 place-items-center rounded-2xl ${card.tone} text-2xl`}
              aria-hidden="true"
            >
              {card.emoji}
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="bg-cream/60 py-20">
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
              className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <img
                src={p.img}
                alt={`${p.name} children at LittleSteps Preschool`}
                width={768}
                height={768}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-sky/70 px-3 py-1 text-xs font-bold text-ink">
                  Age: {p.age}
                </span>
                <h3 className="mt-3 text-xl font-bold text-ink">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-transform hover:translate-x-0.5"
                >
                  Learn More
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
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
      <ol className="relative mt-12 space-y-4 md:space-y-0">
        <div
          aria-hidden="true"
          className="absolute left-6 top-4 bottom-4 w-1 rounded-full bg-sky/70 md:hidden"
        />
        <div className="hidden gap-4 md:grid md:grid-cols-6">
          {schedule.map((s, i) => (
            <Reveal
              as="li"
              key={s.time}
              delay={i * 80}
              className="rounded-[1.75rem] border border-border/60 bg-card p-5 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span
                className={`mx-auto grid size-12 place-items-center rounded-2xl ${s.tone} text-xl`}
                aria-hidden="true"
              >
                {s.emoji}
              </span>
              <p className="mt-3 font-display text-lg font-extrabold text-ink">{s.time}</p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
        {schedule.map((s, i) => (
          <Reveal
            as="li"
            key={`m-${s.time}`}
            delay={i * 60}
            className="relative flex items-center gap-4 pl-0 md:hidden"
          >
            <span
              className={`relative z-10 grid size-12 shrink-0 place-items-center rounded-2xl ${s.tone} text-xl shadow-soft`}
              aria-hidden="true"
            >
              {s.emoji}
            </span>
            <div className="min-w-0 flex-1 rounded-3xl bg-card p-4 shadow-soft">
              <p className="font-display text-base font-extrabold text-ink">{s.time}</p>
              <p className="text-sm font-semibold text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function WeekendClub() {
  return (
    <section id="weekend" className="px-4 pb-20 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-sunny/70 px-6 py-16 sm:px-10">
        <span aria-hidden="true" className="absolute right-8 top-8 animate-float text-4xl">
          🪁
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-8 left-8 animate-float-slow text-4xl"
        >
          🌻
        </span>
        <SectionHeading
          eyebrow="Weekend Club"
          title="Weekends Are for Exploring!"
          text="Our Saturday club opens the doors to every little explorer in the neighbourhood — with art, music, nature and STEM sessions led by our own teachers."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weekend.map((w, i) => (
            <Reveal
              as="li"
              key={w.title}
              delay={i * 70}
              className="flex items-start gap-4 rounded-[1.75rem] bg-background p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl" aria-hidden="true">
                {w.emoji}
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-ink">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120} className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lift"
          >
            Explore Weekend Activities
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Gallery"
        title="Little Moments From Our Days"
        text="Classroom projects, art tables, outdoor play and story circles."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((g, i) => (
          <Reveal
            as="li"
            key={g.alt}
            delay={i * 70}
            className="overflow-hidden rounded-[2rem] shadow-soft"
          >
            <img
              src={g.src}
              alt={g.alt}
              width={768}
              height={640}
              loading="lazy"
              className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Loved by Parents, Enjoyed by Little Learners" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 90}
              className="rounded-[2rem] bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5"
            >
              <p className="text-base leading-relaxed text-muted-foreground">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-2xl bg-peach text-xl"
                  aria-hidden="true"
                >
                  {t.emoji}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-bold text-ink">{t.name}</p>
                  <p className="truncate text-sm text-muted-foreground">{t.role}</p>
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
            className="overflow-hidden rounded-[2rem] bg-card text-center shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <img
              src={t.img}
              alt={`${t.name}, ${t.role}`}
              width={640}
              height={640}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-ink">{t.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{t.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-sky/70 px-6 py-16 text-center sm:px-10">
        <span aria-hidden="true" className="absolute left-10 top-10 animate-float text-3xl">
          ✏️
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-10 right-10 animate-float-slow text-3xl"
        >
          🧸
        </span>
        <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
          Ready to Begin Your Little One’s Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          Come visit us and discover a place where learning feels like play.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lift"
          >
            Book a Visit
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-full bg-background px-7 text-base font-bold text-ink shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@littlesteps.school" },
  { icon: MapPin, label: "Location", value: "12 Sunshine Lane, Green Park, Bengaluru" },
  { icon: Clock, label: "Opening Hours", value: "Mon–Fri, 8:30 AM – 4:00 PM" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Come Say Hello"
          text="Tell us a little about your child and we'll get back within one working day."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-[1.75rem] bg-card p-5 shadow-soft"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-mint">
                  <Icon className="size-5 text-ink" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink">{label}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{value}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="parent-name" label="Parent Name" placeholder="Your full name" />
                <Field id="child-age" label="Child's Age" placeholder="e.g. 3 years" />
                <Field
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 00000 00000"
                />
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
                    placeholder="Tell us what you'd like to know"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
              >
                Send Enquiry
              </button>
              <p aria-live="polite" className="mt-4 text-sm font-semibold text-primary">
                {sent ? "Thank you! We'll be in touch very soon. 🌈" : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-2xl bg-sunny text-xl">
              🐣
            </span>
            <span className="font-display text-lg font-extrabold text-ink">LittleSteps</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            A warm neighbourhood preschool where little steps lead to big discoveries.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="grid size-11 place-items-center rounded-2xl bg-muted text-ink transition-colors hover:bg-sky/70"
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
            ["Activities", "#activities"],
            ["Gallery", "#gallery"],
            ["Weekend Club", "#weekend"],
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
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-ink">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>+91 98765 43210</li>
            <li>hello@littlesteps.school</li>
            <li>12 Sunshine Lane, Green Park, Bengaluru</li>
            <li>Mon–Fri, 8:30 AM – 4:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} LittleSteps Preschool. Made with care for little learners.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-ink">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
