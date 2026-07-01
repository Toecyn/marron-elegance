import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoUrl from "@/assets/logo.png";
import m1 from "@/assets/m1.jpg";
import m2 from "@/assets/m2.jpg";
import m3 from "@/assets/m3.jpg";
import m4 from "@/assets/m4.jpg";
import m5 from "@/assets/m5.jpg";
import heroImg from "@/assets/hero-ballroom.jpg";
import tablescape from "@/assets/tablescape.jpg";
import champagne from "@/assets/champagne.jpg";
import wedding from "@/assets/wedding.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .image-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[color:var(--burgundy-deep)]/92 backdrop-blur-xl border-b border-[color:var(--gold)]/15 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logoUrl}
            alt="Marron Events and Ushering Agency"
            className={`transition-all duration-700 ${scrolled ? "h-11" : "h-14"} w-auto`}
          />
          <div className="hidden md:block leading-tight">
            <div className="font-serif text-[color:var(--gold)] text-lg tracking-[0.28em]">MARRON</div>
            <div className="text-[9px] tracking-[0.32em] text-[color:var(--champagne)]/70 uppercase">Events & Ushering</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--ivory)]/80 hover:text-[color:var(--gold)] transition-colors duration-500"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex btn-gold !py-3 !px-6">Book Now</a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[color:var(--gold)] p-2"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-px bg-current transition-all ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-[color:var(--burgundy-deep)]/98 backdrop-blur-xl ${
          open ? "max-h-[520px] border-t border-[color:var(--gold)]/15" : "max-h-0"
        }`}
      >
        <div className="container-luxe py-8 flex flex-col gap-5">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.3em] uppercase text-[color:var(--ivory)]/85 hover:text-[color:var(--gold)]"
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2 self-start">Book Now</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-[color:var(--burgundy-deep)]">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-55"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,4,9,0.55) 0%, rgba(26,4,9,0.35) 40%, rgba(26,4,9,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.18), transparent 40%)",
          }}
        />
      </div>

      {/* corner ornaments */}
      <div className="absolute top-28 left-6 md:left-12 hidden md:block">
        <div className="w-16 h-px bg-[color:var(--gold)]/60" />
        <div className="w-px h-16 bg-[color:var(--gold)]/60" />
      </div>
      <div className="absolute bottom-28 right-6 md:right-12 hidden md:block">
        <div className="w-16 h-px bg-[color:var(--gold)]/60 ml-auto" />
        <div className="w-px h-16 bg-[color:var(--gold)]/60 ml-auto" />
      </div>

      <div className="container-luxe relative z-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="reveal flex items-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="eyebrow text-[color:var(--gold)]">Luxury Event Staffing · Est. Nigeria</span>
          </div>

          <h1 className="reveal font-serif text-[color:var(--ivory)] text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.98] font-light">
            Luxury Event Staffing
            <br />
            for <em className="italic text-[color:var(--gold)] font-light">Exceptional</em> Experiences.
          </h1>

          <p className="reveal mt-10 max-w-2xl text-[color:var(--ivory)]/75 text-lg leading-relaxed font-light">
            MARRON Events and Ushering Agency provides professionally trained ushers, hostesses,
            and event staff who represent your brand with elegance, confidence, and the
            unwavering excellence your guests deserve.
          </p>

          <div className="reveal mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">Book Consultation</a>
            <a href="#services" className="btn-outline-gold">Our Services</a>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[color:var(--gold)]/80"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <div className="relative w-px h-14 bg-[color:var(--gold)]/25 overflow-hidden">
          <span
            className="absolute inset-x-0 top-0 h-4 bg-[color:var(--gold)]"
            style={{ animation: "scroll-hint 2.2s ease-in-out infinite" }}
          />
        </div>
      </a>
    </section>
  );
}

function Marquee() {
  const items = ["Luxury Weddings", "Corporate Galas", "Embassy Events", "Brand Activations", "VIP Receptions", "Fashion Shows", "Award Ceremonies"];
  const doubled = [...items, ...items];
  return (
    <div className="bg-[color:var(--burgundy)] border-y border-[color:var(--gold)]/20 overflow-hidden py-6">
      <div className="flex gap-16 whitespace-nowrap" style={{ animation: "marquee 40s linear infinite", width: "max-content" }}>
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-serif italic text-[color:var(--gold)]/90 text-xl md:text-2xl tracking-wide">{it}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  const stats = [
    { n: "100+", l: "Luxury Events" },
    { n: "500+", l: "Professional Staff" },
    { n: "98%", l: "Client Satisfaction" },
    { n: "12+", l: "Years Refined" },
  ];
  return (
    <section id="about" className="py-28 md:py-40 bg-[color:var(--ivory)]">
      <div className="container-luxe grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative">
          <div className="image-reveal relative aspect-[3/4] overflow-hidden">
            <img src={m3} alt="Marron ushers" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="image-reveal absolute -bottom-10 -right-4 md:-right-10 w-2/3 aspect-[4/5] overflow-hidden border-8 border-[color:var(--ivory)] shadow-[0_30px_60px_-20px_rgba(44,8,19,0.35)]">
            <img src={tablescape} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -top-6 -left-6 hidden md:block">
            <div className="w-24 h-px bg-[color:var(--gold)]" />
            <div className="w-px h-24 bg-[color:var(--gold)]" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="reveal flex items-center gap-4 mb-6">
            <span className="gold-line" />
            <span className="eyebrow text-[color:var(--burgundy)]">About the House</span>
          </div>
          <h2 className="reveal font-serif text-[color:var(--burgundy)] text-4xl md:text-6xl leading-[1.02] font-light">
            An atelier of hospitality,
            <em className="italic text-[color:var(--gold-soft)]"> quietly obsessed</em> with the details others overlook.
          </h2>
          <div className="reveal mt-10 space-y-6 text-[color:var(--charcoal)]/75 text-lg leading-relaxed font-light max-w-2xl">
            <p>
              MARRON is a boutique event staffing house serving discerning hosts, luxury wedding
              planners, embassies and international brands across Nigeria. Our ushers and
              hostesses are selected, trained and mentored to embody grace under every kind of
              spotlight.
            </p>
            <p>
              We believe presence is a discipline. From the first handshake at the door to the
              final farewell of the evening, every moment your guests spend with our team
              becomes an expression of the standard you set.
            </p>
          </div>

          <div className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[color:var(--gold)]/30 pt-10">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-[color:var(--burgundy)] text-4xl md:text-5xl font-light">
                  {s.n}
                </div>
                <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-[color:var(--charcoal)]/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { n: "01", t: "Professionally Trained Staff", d: "Every member of the Marron team completes an intensive hospitality curriculum." },
    { n: "02", t: "Elegant Presentation", d: "Tailored uniforms, refined posture, immaculate grooming — presence as a language." },
    { n: "03", t: "Exceptional Customer Service", d: "Warm, discreet, five-star service standards inspired by global luxury hospitality." },
    { n: "04", t: "Reliable Coordination", d: "Punctual, prepared and led by a floor captain who anticipates every scenario." },
    { n: "05", t: "Corporate Grade Standard", d: "Trusted by embassies, multinationals and Fortune-class organisations." },
    { n: "06", t: "White Glove Experience", d: "From arrival to farewell, we curate the quiet luxury your guests will remember." },
  ];
  return (
    <section className="py-28 md:py-40 bg-[color:var(--burgundy-deep)] text-[color:var(--ivory)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(212,175,55,0.18), transparent 40%), radial-gradient(circle at 85% 85%, rgba(212,175,55,0.12), transparent 45%)",
        }}
      />
      <div className="container-luxe relative">
        <div className="max-w-3xl mb-20">
          <div className="reveal flex items-center gap-4 mb-6">
            <span className="gold-line" />
            <span className="eyebrow text-[color:var(--gold)]">Why Marron</span>
          </div>
          <h2 className="reveal font-serif text-4xl md:text-6xl font-light leading-[1.05]">
            Six principles that
            <em className="italic text-[color:var(--gold)]"> shape</em> every event we serve.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--gold)]/15">
          {items.map((it) => (
            <div key={it.n} className="reveal group bg-[color:var(--burgundy-deep)] p-10 md:p-12 transition-all duration-700 hover:bg-[color:var(--burgundy)]">
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-serif text-[color:var(--gold)]/70 text-2xl">{it.n}</span>
                <span className="h-px w-12 bg-[color:var(--gold)]/40 group-hover:w-20 transition-all duration-700" />
              </div>
              <h3 className="font-serif text-2xl md:text-[26px] leading-snug mb-4 text-[color:var(--ivory)]">
                {it.t}
              </h3>
              <p className="text-[color:var(--ivory)]/65 font-light leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { t: "Professional Ushers", d: "Composed, articulate and immaculately presented ushers for arrivals, seating and flow." },
    { t: "Professional Hostesses", d: "Warm, poised hostesses trained in the language of luxury reception." },
    { t: "Corporate Event Staffing", d: "Boardroom-ready teams for conferences, launches and executive gatherings." },
    { t: "Wedding Staffing", d: "Discreet, romantic service that lets you savour every second of the day." },
    { t: "VIP Guest Management", d: "Private, considered handling for principals, dignitaries and public figures." },
    { t: "Conference Staffing", d: "Registration, wayfinding, floor management — end-to-end conference execution." },
    { t: "Brand Activation Staff", d: "On-message ambassadors who translate your brand into human presence." },
    { t: "Event Coordination Support", d: "Floor captains and coordinators who partner seamlessly with your planner." },
  ];
  return (
    <section id="services" className="py-28 md:py-40 bg-[color:var(--ivory)] relative">
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="reveal flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="eyebrow text-[color:var(--burgundy)]">The Services</span>
            </div>
            <h2 className="reveal font-serif text-[color:var(--burgundy)] text-4xl md:text-6xl leading-[1.03] font-light">
              A complete <em className="italic text-[color:var(--gold-soft)]">discipline</em> of front-of-house.
            </h2>
          </div>
          <p className="reveal text-[color:var(--charcoal)]/70 max-w-md font-light leading-relaxed">
            Curated staffing solutions for hosts and planners who understand that atmosphere is
            engineered, one refined interaction at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--gold)]/25">
          {services.map((s, i) => (
            <div
              key={s.t}
              className="reveal group relative bg-[color:var(--ivory)] p-10 min-h-[280px] flex flex-col justify-between transition-all duration-700 hover:bg-[color:var(--burgundy)] hover:text-[color:var(--ivory)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[color:var(--gold-soft)] group-hover:text-[color:var(--gold)] text-sm tracking-[0.3em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-6 h-6 rounded-full border border-current opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                  →
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl leading-tight mb-3">{s.t}</h3>
                <p className="text-sm font-light leading-relaxed opacity-70 group-hover:opacity-90 transition-opacity">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const imgs = [
    { src: m1, cat: "Corporate Lineup", size: "col-span-2 row-span-2" },
    { src: m4, cat: "Hostess Duo", size: "" },
    { src: m3, cat: "Elegance", size: "" },
    { src: wedding, cat: "Wedding Reception", size: "col-span-2" },
    { src: m5, cat: "Reception Detail", size: "" },
    { src: m2, cat: "Team of Twelve", size: "col-span-2" },
    { src: champagne, cat: "VIP Toast", size: "" },
    { src: tablescape, cat: "Dining Detail", size: "" },
  ];
  return (
    <section id="gallery" className="py-28 md:py-40 bg-[color:var(--charcoal)] text-[color:var(--ivory)]">
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <div className="reveal flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="eyebrow text-[color:var(--gold)]">The Portfolio</span>
            </div>
            <h2 className="reveal font-serif text-4xl md:text-6xl font-light leading-[1.03] max-w-2xl">
              Moments from evenings <em className="italic text-[color:var(--gold)]">quietly perfected</em>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3">
          {imgs.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img.src)}
              className={`reveal group relative overflow-hidden ${img.size}`}
            >
              <img
                src={img.src}
                alt={img.cat}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--burgundy-deep)]/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                <span className="eyebrow text-[color:var(--gold)]">{img.cat}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[80] bg-[color:var(--burgundy-deep)]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-[color:var(--gold)] text-sm tracking-[0.3em] uppercase"
            onClick={() => setActive(null)}
          >
            Close ×
          </button>
          <img src={active} alt="" className="max-w-full max-h-full object-contain shadow-2xl" />
        </div>
      )}
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Marron transformed our embassy reception. Their team read the room like seasoned diplomats — invisible when they needed to be, gracious at every touchpoint.",
      a: "Head of Protocol",
      r: "Diplomatic Mission, Abuja",
    },
    {
      q: "I plan luxury weddings across three continents. Marron is now the only agency I trust with my Nigerian celebrations. Their poise is genuinely rare.",
      a: "Adaeze O.",
      r: "Luxury Wedding Planner",
    },
    {
      q: "From consultation to the final farewell, every detail was handled with a quiet excellence. Our shareholders felt looked after in a way that lingers.",
      a: "Executive Director",
      r: "Financial Group, Lagos",
    },
  ];
  return (
    <section id="testimonials" className="py-28 md:py-40 bg-[color:var(--ivory)]">
      <div className="container-luxe">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="reveal flex items-center justify-center gap-4 mb-6">
            <span className="gold-line" />
            <span className="eyebrow text-[color:var(--burgundy)]">Client Voices</span>
            <span className="gold-line" />
          </div>
          <h2 className="reveal font-serif text-[color:var(--burgundy)] text-4xl md:text-6xl font-light leading-[1.02]">
            Trusted by hosts who <em className="italic text-[color:var(--gold-soft)]">notice everything</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <figure
              key={i}
              className="reveal relative bg-white p-10 md:p-12 border border-[color:var(--gold)]/25 shadow-[0_20px_60px_-30px_rgba(44,8,19,0.25)] flex flex-col"
            >
              <div className="text-[color:var(--gold)] text-lg tracking-[0.4em] mb-6">★ ★ ★ ★ ★</div>
              <blockquote className="font-serif text-xl md:text-[22px] leading-[1.4] text-[color:var(--charcoal)]/85 italic font-light mb-8 flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="pt-6 border-t border-[color:var(--gold)]/30">
                <div className="font-serif text-[color:var(--burgundy)] text-lg">{t.a}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--charcoal)]/55 mt-1">
                  {t.r}
                </div>
              </figcaption>
              <span className="absolute -top-4 left-10 font-serif text-6xl text-[color:var(--gold)] leading-none">"</span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Contact Us", d: "Share your vision, your guests and the tone of your evening." },
    { n: "02", t: "Consultation", d: "We design a staffing brief around your event's personality." },
    { n: "03", t: "Staff Selection", d: "Hand-picked ushers and hostesses matched to your standard." },
    { n: "04", t: "Event Execution", d: "Rehearsed arrivals, seamless flow, invisible coordination." },
    { n: "05", t: "Exceptional Experience", d: "Your guests leave feeling considered, cared for and celebrated." },
  ];
  return (
    <section id="process" className="py-28 md:py-40 bg-[color:var(--burgundy)] text-[color:var(--ivory)] relative overflow-hidden">
      <div className="container-luxe">
        <div className="max-w-3xl mb-20">
          <div className="reveal flex items-center gap-4 mb-6">
            <span className="gold-line" />
            <span className="eyebrow text-[color:var(--gold)]">The Process</span>
          </div>
          <h2 className="reveal font-serif text-4xl md:text-6xl font-light leading-[1.03]">
            Five deliberate steps toward an
            <em className="italic text-[color:var(--gold)]"> effortless</em> evening.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-[color:var(--gold)]/25" />
          <div className="grid md:grid-cols-5 gap-10 md:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="reveal relative">
                <div className="hidden md:block absolute top-[58px] left-0 w-3 h-3 rounded-full bg-[color:var(--gold)] shadow-[0_0_0_6px_rgba(212,175,55,0.15)]" />
                <div className="font-serif text-[color:var(--gold)] text-6xl md:text-7xl font-light leading-none mb-8">
                  {s.n}
                </div>
                <h3 className="font-serif text-2xl mb-3 leading-tight">{s.t}</h3>
                <p className="text-[color:var(--ivory)]/70 text-sm font-light leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-[color:var(--burgundy-deep)]">
      <div className="absolute inset-0">
        <img src={champagne} alt="" className="w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--burgundy-deep)]/80 via-[color:var(--burgundy-deep)]/70 to-[color:var(--burgundy-deep)]/95" />
      </div>
      <div className="container-luxe relative text-center max-w-4xl mx-auto">
        <div className="reveal flex items-center justify-center gap-4 mb-8">
          <span className="gold-line" />
          <span className="eyebrow text-[color:var(--gold)]">Reserve Your Date</span>
          <span className="gold-line" />
        </div>
        <h2 className="reveal font-serif text-[color:var(--ivory)] text-4xl md:text-7xl font-light leading-[1.02]">
          Let us <em className="italic text-[color:var(--gold)]">elevate</em> your next event.
        </h2>
        <p className="reveal mt-8 text-[color:var(--ivory)]/70 max-w-xl mx-auto font-light text-lg">
          Availability for signature events is limited. Begin the conversation early to secure
          the Marron team for your date.
        </p>
        <div className="reveal mt-12 flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="btn-gold">Book Now</a>
          <a href="tel:+2348127936751" className="btn-outline-gold">Call +234 812 793 6751</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28 md:py-40 bg-[color:var(--ivory)]">
      <div className="container-luxe grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="reveal flex items-center gap-4 mb-6">
            <span className="gold-line" />
            <span className="eyebrow text-[color:var(--burgundy)]">Enquiries</span>
          </div>
          <h2 className="reveal font-serif text-[color:var(--burgundy)] text-4xl md:text-6xl font-light leading-[1.03]">
            Begin the <em className="italic text-[color:var(--gold-soft)]">conversation</em>.
          </h2>
          <p className="reveal mt-8 text-[color:var(--charcoal)]/70 font-light leading-relaxed max-w-md">
            Share a few details about your event and our concierge will respond within one
            business day with availability and next steps.
          </p>

          <div className="reveal mt-14 space-y-8">
            <div>
              <div className="eyebrow text-[color:var(--gold-soft)] mb-2">Phone</div>
              <a href="tel:+2348127936751" className="font-serif text-2xl text-[color:var(--burgundy)] hover:text-[color:var(--gold-soft)] transition-colors">
                +234 812 793 6751
              </a>
            </div>
            <div>
              <div className="eyebrow text-[color:var(--gold-soft)] mb-2">Email</div>
              <a
                href="mailto:marroneventsandusheringagency@gmail.com"
                className="font-serif text-lg md:text-xl text-[color:var(--burgundy)] hover:text-[color:var(--gold-soft)] transition-colors break-all"
              >
                marroneventsandusheringagency@gmail.com
              </a>
            </div>
            <div>
              <div className="eyebrow text-[color:var(--gold-soft)] mb-2">Social</div>
              <div className="flex flex-col gap-2">
                <a href="https://instagram.com/marroneventsandushering" target="_blank" rel="noopener" className="font-serif text-xl text-[color:var(--burgundy)] hover:text-[color:var(--gold-soft)] transition-colors">
                  Instagram — @marroneventsandushering
                </a>
                <a href="#" className="font-serif text-xl text-[color:var(--burgundy)] hover:text-[color:var(--gold-soft)] transition-colors">
                  Facebook — Marron Events And Ushering Agency
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4500);
              (e.target as HTMLFormElement).reset();
            }}
            className="reveal bg-white border border-[color:var(--gold)]/25 p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(44,8,19,0.35)]"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name" name="name" required />
              <Field label="Phone Number" name="phone" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Event Date" name="date" type="date" required />
              <div className="md:col-span-2">
                <Field label="Event Type" name="eventType" placeholder="Wedding · Corporate · Gala · Brand Activation" />
              </div>
              <div className="md:col-span-2">
                <label className="eyebrow text-[color:var(--charcoal)]/60 block mb-3">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border-b border-[color:var(--charcoal)]/25 focus:border-[color:var(--gold)] outline-none py-3 font-light text-[color:var(--charcoal)] resize-none transition-colors"
                  placeholder="Tell us about your evening..."
                />
              </div>
            </div>
            <button type="submit" className="btn-dark mt-10 w-full md:w-auto">
              Send Enquiry
            </button>
            {sent && (
              <p className="mt-6 text-[color:var(--gold-soft)] text-sm tracking-widest uppercase">
                Thank you — your enquiry has been received.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-[color:var(--charcoal)]/60 block mb-3">
        {label} {required && <span className="text-[color:var(--gold-soft)]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[color:var(--charcoal)]/25 focus:border-[color:var(--gold)] outline-none py-3 font-light text-[color:var(--charcoal)] placeholder:text-[color:var(--charcoal)]/30 transition-colors"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--burgundy-deep)] text-[color:var(--ivory)] pt-24 pb-10 border-t border-[color:var(--gold)]/15">
      <div className="container-luxe">
        <div className="grid md:grid-cols-12 gap-14 pb-16 border-b border-[color:var(--gold)]/15">
          <div className="md:col-span-5">
            <img src={logoUrl} alt="Marron" className="h-24 w-auto mb-6" />
            <p className="font-serif italic text-[color:var(--gold)] text-xl mb-4">Where elegance meets service.</p>
            <p className="text-[color:var(--ivory)]/60 max-w-sm font-light leading-relaxed">
              MARRON Events and Ushering Agency — Nigeria's boutique house of luxury event
              staffing, hostesses and coordinated front-of-house.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow text-[color:var(--gold)] mb-6">Navigate</div>
            <ul className="space-y-3 font-light">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[color:var(--ivory)]/70 hover:text-[color:var(--gold)] transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow text-[color:var(--gold)] mb-6">Contact</div>
            <ul className="space-y-3 font-light text-[color:var(--ivory)]/70">
              <li><a href="tel:+2348127936751" className="hover:text-[color:var(--gold)]">+234 812 793 6751</a></li>
              <li><a href="mailto:marroneventsandusheringagency@gmail.com" className="hover:text-[color:var(--gold)] break-all">marroneventsandusheringagency@gmail.com</a></li>
              <li><a href="https://instagram.com/marroneventsandushering" className="hover:text-[color:var(--gold)]">Instagram · @marroneventsandushering</a></li>
              <li><a href="#" className="hover:text-[color:var(--gold)]">Facebook · Marron Events And Ushering</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs tracking-[0.28em] uppercase text-[color:var(--ivory)]/45">
          <div>© {new Date().getFullYear()} Marron Events and Ushering Agency</div>
          <div>Crafted with quiet precision</div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  useReveal();
  return (
    <div className="bg-[color:var(--ivory)]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhyChoose />
        <Services />
        <Gallery />
        <Testimonials />
        <Process />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
