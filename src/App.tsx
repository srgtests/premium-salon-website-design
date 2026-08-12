import { useState, useEffect } from "react";

// -----------------------------
// Navbar
// -----------------------------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
  ];
  void links; // used only for potential future extension

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(26,24,21,0.06)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex flex-col items-start leading-none">
          <span className="tracking-luxe text-[10px] text-brass uppercase">Est. 2014</span>
          <span className="font-display text-2xl lg:text-3xl text-espresso tracking-wide">
            THE TRENDS
          </span>
          <span className="text-[10px] tracking-luxe text-mauve uppercase mt-0.5">
            Unisex Salon
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {["About", "Services", "Treatments", "Gallery", "Team", "Pricing"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link text-[13px] tracking-widest uppercase text-espresso/80 hover:text-espresso transition"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#book"
            className="group relative px-6 py-3 bg-espresso text-ivory text-[12px] tracking-widest uppercase overflow-hidden"
          >
            <span className="relative z-10 transition-colors group-hover:text-ivory">Book Appointment</span>
            <span className="absolute inset-0 bg-brass translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`h-[1.5px] w-6 bg-espresso transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-espresso transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-espresso transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ivory border-t border-beige">
          <div className="flex flex-col px-6 py-6 gap-5">
            {["About", "Services", "Treatments", "Gallery", "Team", "Pricing"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase text-espresso"
              >
                {l}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 px-6 py-3 bg-espresso text-ivory text-[12px] tracking-widest uppercase text-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// -----------------------------
// Hero
// -----------------------------
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end pb-24 pt-40 bg-noise overflow-hidden">
      {/* Background portrait */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-portrait.jpg`}
          alt="The Trends Unisex Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl animate-fade-up">
          <span className="gold-divider text-[11px] tracking-luxe uppercase">
            <span>Premium Beauty · Hair · Style</span>
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-espresso leading-[0.95] mt-8">
            Where timeless
            <br />
            <span className="italic font-serif text-brass">elegance</span> meets
            <br />
            modern style.
          </h1>

          <p className="mt-8 text-espresso/70 max-w-lg leading-relaxed text-base">
            Step into The Trends — a sanctuary of beauty for her, him, and everyone in
            between. Expert hair artistry, radiance-enhancing fairness treatments, and
            signature styling crafted for the way you live today.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#book"
              className="group relative px-8 py-4 bg-espresso text-ivory text-[12px] tracking-widest uppercase overflow-hidden"
            >
              <span className="relative z-10">Reserve Your Chair</span>
              <span className="absolute inset-0 bg-brass translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#services"
              className="text-[12px] tracking-widest uppercase text-espresso border-b border-brass pb-1 hover:text-brass transition"
            >
              Explore Services →
            </a>
          </div>
        </div>
      </div>

      {/* Side stats */}
      <div className="hidden lg:flex absolute right-10 xl:right-16 bottom-32 gap-10 z-10">
        {[
          { n: "11+", l: "Years of Craft" },
          { n: "24K", l: "Happy Clients" },
          { n: "38", l: "Expert Stylists" },
        ].map((s) => (
          <div key={s.l} className="text-right">
            <div className="font-display text-4xl text-espresso">{s.n}</div>
            <div className="text-[10px] tracking-luxe uppercase text-mauve mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// -----------------------------
// Marquee
// -----------------------------
function Marquee() {
  const words = [
    "Hair Artistry",
    "Fairness Treatments",
    "Bridal Styling",
    "Luxury Facials",
    "Barbering",
    "Makeup",
    "Skin Brightening",
    "Hair Color",
    "Spa Rituals",
  ];
  const loop = [...words, ...words, ...words];
  return (
    <div className="bg-espresso text-ivory py-6 overflow-hidden border-y border-brass/40">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center mx-8">
            <span className="font-display text-2xl lg:text-3xl italic">{w}</span>
            <span className="ml-8 text-brass">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// -----------------------------
// About
// -----------------------------
function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/7195809/pexels-photo-7195809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
            alt="Salon interior"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-brass text-ivory p-8 max-w-[240px]">
            <div className="font-display text-5xl">11</div>
            <div className="text-[11px] tracking-luxe uppercase mt-2">Years shaping beauty & confidence</div>
          </div>
        </div>

        <div>
          <span className="gold-divider text-[11px] tracking-luxe uppercase">
            <span>Our Story</span>
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-espresso mt-6 leading-tight">
            A house of beauty,
            <br />
            built on <span className="italic font-serif text-brass">craft</span>.
          </h2>
          <p className="mt-8 text-espresso/75 leading-relaxed">
            The Trends Unisex Salon was born from a simple idea — that everyone deserves a
            space where they feel seen, styled, and celebrated. For over a decade, we've
            welcomed thousands of guests into our chairs, blending classical technique with
            the trends of today.
          </p>
          <p className="mt-5 text-espresso/75 leading-relaxed">
            From precision haircuts and bespoke color to fairness facials and red-carpet
            makeup, every service is performed by a trained specialist using curated,
            premium-grade products.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">
            {[
              { t: "Certified Artists", d: "Internationally trained stylists and therapists." },
              { t: "Premium Products", d: "Curated, dermatologist-approved ranges." },
              { t: "Unisex Excellence", d: "Tailored services for every guest." },
              { t: "Hygiene First", d: "Sanitised tools, single-use items." },
            ].map((f) => (
              <div key={f.t}>
                <div className="font-display text-xl text-brass mb-1">{f.t}</div>
                <div className="text-sm text-espresso/70 leading-relaxed">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Services
// -----------------------------
function Services() {
  const services = [
    {
      title: "Hair Styling",
      desc: "Precision cuts, blowouts, updos and signature styles tailored to your face and lifestyle.",
      img: "https://images.pexels.com/photos/8834072/pexels-photo-8834072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
      price: "from ₹699",
    },
    {
      title: "Hair Colour",
      desc: "Balayage, highlights, global colour and creative tones with ammonia-free formulas.",
      img: "https://images.pexels.com/photos/3356211/pexels-photo-3356211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
      price: "from ₹1,499",
    },
    {
      title: "Skin & Fairness",
      desc: "Brightening facials, tan removal and radiance therapies for even, luminous skin.",
      img: "https://images.pexels.com/photos/11898946/pexels-photo-11898946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
      price: "from ₹999",
    },
    {
      title: "Bridal & Makeup",
      desc: "HD, airbrush and bridal makeup with complete styling packages for your big day.",
      img: "https://images.pexels.com/photos/37710473/pexels-photo-37710473.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
      price: "from ₹4,999",
    },
    {
      title: "Men's Barbering",
      desc: "Classic cuts, beards, hot towel shaves and grooming rituals for the modern man.",
      img: "https://images.pexels.com/photos/2521978/pexels-photo-2521978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
      price: "from ₹399",
    },
    {
      title: "Spa & Waxing",
      desc: "Full-body spa, manicure, pedicure and gentle waxing for lasting softness.",
      img: "https://images.pexels.com/photos/15866041/pexels-photo-15866041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
      price: "from ₹599",
    },
  ];

  return (
    <section id="services" className="py-28 lg:py-36 bg-cream bg-noise">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider text-[11px] tracking-luxe uppercase">
            <span>Our Services</span>
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-espresso mt-6 leading-tight">
            Tailored rituals,
            <br />
            <span className="italic font-serif text-brass">refined</span> results.
          </h2>
          <p className="mt-6 text-espresso/70 leading-relaxed">
            Every service is a considered experience — designed to leave you feeling polished,
            radiant, and unmistakably you.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-shine bg-ivory group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-espresso text-ivory text-[10px] tracking-luxe uppercase px-3 py-1.5">
                  {s.price}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-espresso">{s.title}</h3>
                <p className="mt-3 text-sm text-espresso/70 leading-relaxed min-h-[60px]">
                  {s.desc}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-beige pt-4">
                  <span className="text-[11px] tracking-luxe uppercase text-brass">Learn More</span>
                  <span className="text-brass text-lg transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Signature Treatments (Fairness focus)
// -----------------------------
function Treatments() {
  const treatments = [
    {
      tag: "01",
      name: "Pearl Radiance Facial",
      time: "75 min",
      price: "₹2,499",
      desc: "A 24K pearl-infused facial that visibly brightens dull skin, smooths texture and restores luminosity.",
    },
    {
      tag: "02",
      name: "Gold Brightening Ritual",
      time: "90 min",
      price: "₹3,499",
      desc: "24-carat gold leaf masque with vitamin C — visibly even tone, reduced pigmentation and a lit-from-within glow.",
    },
    {
      tag: "03",
      name: "De-Tan & Glow Therapy",
      time: "60 min",
      price: "₹1,799",
      desc: "Gentle exfoliation paired with botanical brighteners to reverse sun damage and revive tired skin.",
    },
    {
      tag: "04",
      name: "Crystal Clarity Peel",
      time: "45 min",
      price: "₹2,199",
      desc: "A clinical-grade brightening peel for uneven tone, dark spots and post-acne marks — safe for all skin types.",
    },
  ];

  return (
    <section id="treatments" className="relative py-28 lg:py-36 bg-espresso text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/30809943/pexels-photo-30809943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-espresso/80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="gold-divider text-[11px] tracking-luxe uppercase">
            <span>Signature Treatments</span>
          </span>
          <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-tight">
            Fairness & <span className="italic font-serif text-brass-light">radiance</span>,
            <br />perfected.
          </h2>
          <p className="mt-6 text-ivory/70 leading-relaxed max-w-lg">
            Our curated fairness therapies combine dermatologist-approved science with
            luxurious ritual — for visibly brighter, more even, confident skin.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-brass/30">
          {treatments.map((t) => (
            <div
              key={t.name}
              className="bg-espresso p-8 lg:p-10 group hover:bg-coffee transition-colors duration-500"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-3xl text-brass">{t.tag}</span>
                  <h3 className="font-display text-2xl lg:text-3xl">{t.name}</h3>
                </div>
                <span className="text-[11px] tracking-luxe uppercase text-ivory/50 hidden md:block">
                  {t.time}
                </span>
              </div>
              <p className="mt-5 text-ivory/70 leading-relaxed text-sm">{t.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-display text-2xl text-brass-light">{t.price}</span>
                <a
                  href="#book"
                  className="text-[11px] tracking-luxe uppercase border-b border-brass pb-1 hover:text-brass-light transition"
                >
                  Book Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Gallery
// -----------------------------
function Gallery() {
  const images = [
    { src: "https://images.pexels.com/photos/3356211/pexels-photo-3356211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", label: "Signature Color" },
    { src: "https://images.pexels.com/photos/3356151/pexels-photo-3356151.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", label: "Bridal Updo" },
    { src: "https://images.pexels.com/photos/32856321/pexels-photo-32856321.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", label: "Styling" },
    { src: "https://images.pexels.com/photos/6171/hairstyle-hair-wedding-bride.jpg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", label: "Bridal Detail" },
    { src: "https://images.pexels.com/photos/3993445/pexels-photo-3993445.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", label: "Precision Cut" },
    { src: "https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000", label: "Updo Craft" },
  ];

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="gold-divider text-[11px] tracking-luxe uppercase">
              <span>Portfolio</span>
            </span>
            <h2 className="font-display text-4xl lg:text-6xl text-espresso mt-6 leading-tight">
              A gallery of
              <br />
              <span className="italic font-serif text-brass">beautiful</span> transformations.
            </h2>
          </div>
          <p className="text-espresso/70 max-w-sm leading-relaxed">
            From everyday glow-ups to red-carpet moments — every chair tells a story.
            Here's a glimpse of the art we create every day.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${
                i === 0 || i === 5 ? "lg:col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] tracking-luxe uppercase text-ivory/70">Look</div>
                <div className="font-display text-xl text-ivory">{img.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Team
// -----------------------------
function Team() {
  const team = [
    {
      name: "Aarav Mehta",
      role: "Creative Director · Master Stylist",
      img: "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    },
    {
      name: "Sana Kapoor",
      role: "Senior Colour Specialist",
      img: "https://images.pexels.com/photos/3993458/pexels-photo-3993458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    },
    {
      name: "Ishaan Roy",
      role: "Lead Barber · Grooming Expert",
      img: "https://images.pexels.com/photos/2521978/pexels-photo-2521978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    },
    {
      name: "Riya Desai",
      role: "Skin Therapist · Fairness Specialist",
      img: "https://images.pexels.com/photos/8834023/pexels-photo-8834023.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    },
  ];

  return (
    <section id="team" className="py-28 lg:py-36 bg-cream bg-noise">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider text-[11px] tracking-luxe uppercase">
            <span>The Artists</span>
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-espresso mt-6 leading-tight">
            Meet the <span className="italic font-serif text-brass">hands</span>
            <br />
            behind the trends.
          </h2>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <div key={m.name} className="group">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-2xl text-espresso">{m.name}</h3>
                <p className="text-[11px] tracking-widest uppercase text-mauve mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Testimonials
// -----------------------------
function Testimonials() {
  const reviews = [
    {
      name: "Ananya Sharma",
      role: "Bride, 2025",
      text: "The bridal team made me feel like royalty. My hair and makeup lasted all day, and the fairness facial the week before gave my skin the most beautiful glow.",
    },
    {
      name: "Vikram Joshi",
      role: "Regular Client",
      text: "Best barbering experience in the city. The hot-towel shave is a ritual I look forward to every month — precise, relaxed and genuinely premium.",
    },
    {
      name: "Priya Nair",
      role: "Skin Client",
      text: "After three Pearl Radiance sessions my dark spots are visibly faded. The therapists are honest, gentle and truly know their craft.",
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center">
          <span className="gold-divider text-[11px] tracking-luxe uppercase">
            <span>Kind Words</span>
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-espresso mt-6 leading-tight">
            Loved by <span className="italic font-serif text-brass">24,000+</span> guests.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-cream p-8 lg:p-10 border border-beige hover:border-brass transition-colors duration-500"
            >
              <div className="text-brass text-4xl font-display leading-none">"</div>
              <p className="mt-4 text-espresso/80 leading-relaxed text-sm italic font-serif">
                {r.text}
              </p>
              <div className="mt-8 pt-6 border-t border-beige">
                <div className="font-display text-lg text-espresso">{r.name}</div>
                <div className="text-[11px] tracking-luxe uppercase text-mauve mt-1">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Pricing
// -----------------------------
function Pricing() {
  const packages = [
    {
      name: "The Essentials",
      price: "₹1,499",
      sub: "For quick refreshes",
      items: ["Signature Haircut & Style", "Hair Wash & Blowdry", "Complimentary Beverage"],
      featured: false,
    },
    {
      name: "The Signature",
      price: "₹3,499",
      sub: "Our most-loved experience",
      items: [
        "Precision Cut & Style",
        "Global Colour or Highlights",
        "Keratin Gloss Treatment",
        "Express Facial",
        "Champagne Service",
      ],
      featured: true,
    },
    {
      name: "The Radiance",
      price: "₹5,999",
      sub: "Full transformation",
      items: [
        "Everything in Signature",
        "Pearl Radiance Facial",
        "Manicure & Pedicure",
        "Full Body Spa (60 min)",
        "Dedicated Stylist for the Day",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-28 lg:py-36 bg-cream bg-noise">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="gold-divider text-[11px] tracking-luxe uppercase">
            <span>Signature Packages</span>
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-espresso mt-6 leading-tight">
            Curated <span className="italic font-serif text-brass">experiences</span>,
            <br />thoughtfully priced.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative p-10 transition-all duration-500 ${
                p.featured
                  ? "bg-espresso text-ivory lg:-translate-y-6"
                  : "bg-ivory text-espresso"
              }`}
            >
              {p.featured && (
                <div className="absolute top-0 right-0 bg-brass text-ivory text-[10px] tracking-luxe uppercase px-4 py-1.5">
                  Most Popular
                </div>
              )}
              <div className="text-[11px] tracking-luxe uppercase opacity-70">{p.sub}</div>
              <h3 className="font-display text-4xl mt-3">{p.name}</h3>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl">{p.price}</span>
                <span className="text-xs opacity-60">/ session</span>
              </div>
              <ul className="mt-10 space-y-4">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <span className={p.featured ? "text-brass" : "text-brass"}>✦</span>
                    <span className={p.featured ? "text-ivory/85" : "text-espresso/75"}>{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-10 block text-center py-3 text-[12px] tracking-widest uppercase transition-colors ${
                  p.featured
                    ? "bg-brass text-ivory hover:bg-brass-light"
                    : "bg-espresso text-ivory hover:bg-coffee"
                }`}
              >
                Choose Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------
// Booking CTA
// -----------------------------
function Booking() {
  return (
    <section id="book" className="relative py-28 lg:py-36 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="gold-divider text-[11px] tracking-luxe uppercase">
            <span>Book Your Visit</span>
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-espresso mt-6 leading-tight">
            Reserve your
            <br />
            <span className="italic font-serif text-brass">chair</span>.
          </h2>
          <p className="mt-6 text-espresso/70 leading-relaxed max-w-lg">
            Walk-ins welcome. For priority service and a dedicated specialist, we recommend
            booking ahead — especially for bridal and fairness treatments.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 border border-brass flex items-center justify-center text-brass">✦</div>
              <div>
                <div className="text-[11px] tracking-luxe uppercase text-mauve">Call</div>
                <div className="font-display text-xl text-espresso">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 border border-brass flex items-center justify-center text-brass">✦</div>
              <div>
                <div className="text-[11px] tracking-luxe uppercase text-mauve">Visit</div>
                <div className="font-display text-xl text-espresso">42, Heritage Avenue, Bandra West</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 border border-brass flex items-center justify-center text-brass">✦</div>
              <div>
                <div className="text-[11px] tracking-luxe uppercase text-mauve">Hours</div>
                <div className="font-display text-xl text-espresso">Mon – Sun · 10:00 AM – 9:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-cream border border-beige p-8 lg:p-10">
          <h3 className="font-display text-3xl text-espresso">Request an Appointment</h3>
          <p className="mt-2 text-sm text-espresso/70">We'll confirm your booking within 30 minutes.</p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="text-[11px] tracking-luxe uppercase text-mauve">Full Name</label>
              <input
                type="text"
                className="mt-2 w-full bg-transparent border-b border-espresso/20 py-3 focus:border-brass outline-none text-espresso"
                placeholder="Your name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] tracking-luxe uppercase text-mauve">Phone</label>
                <input
                  type="tel"
                  className="mt-2 w-full bg-transparent border-b border-espresso/20 py-3 focus:border-brass outline-none text-espresso"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="text-[11px] tracking-luxe uppercase text-mauve">Preferred Date</label>
                <input
                  type="date"
                  className="mt-2 w-full bg-transparent border-b border-espresso/20 py-3 focus:border-brass outline-none text-espresso"
                />
              </div>
            </div>
            <div>
              <label className="text-[11px] tracking-luxe uppercase text-mauve">Service</label>
              <select className="mt-2 w-full bg-transparent border-b border-espresso/20 py-3 focus:border-brass outline-none text-espresso">
                <option>Hair Styling</option>
                <option>Hair Colour</option>
                <option>Skin & Fairness</option>
                <option>Bridal & Makeup</option>
                <option>Men's Barbering</option>
                <option>Spa & Waxing</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] tracking-luxe uppercase text-mauve">Special Notes</label>
              <textarea
                rows={3}
                className="mt-2 w-full bg-transparent border-b border-espresso/20 py-3 focus:border-brass outline-none text-espresso resize-none"
                placeholder="Tell us anything we should know"
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full py-4 bg-espresso text-ivory text-[12px] tracking-widest uppercase hover:bg-brass transition-colors duration-500"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// -----------------------------
// Footer
// -----------------------------
function Footer() {
  return (
    <footer className="bg-espresso text-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 gap-12 pb-16 border-b border-ivory/10">
          <div className="lg:col-span-2">
            <div className="flex flex-col leading-none">
              <span className="tracking-luxe text-[10px] text-brass uppercase">Est. 2014</span>
              <span className="font-display text-4xl tracking-wide mt-1">THE TRENDS</span>
              <span className="text-[10px] tracking-luxe text-ivory/60 uppercase mt-1">Unisex Salon</span>
            </div>
            <p className="mt-6 text-ivory/60 leading-relaxed max-w-sm">
              A house of beauty where timeless elegance meets modern style — serving her,
              him, and everyone in between since 2014.
            </p>
            <div className="mt-6 flex gap-4">
              {["Instagram", "Facebook", "Pinterest", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-xs tracking-widest uppercase hover:bg-brass hover:border-brass transition"
                >
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] tracking-luxe uppercase text-brass">Explore</div>
            <ul className="mt-6 space-y-3">
              {["About", "Services", "Treatments", "Gallery", "Team", "Pricing"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-ivory/70 hover:text-brass transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-luxe uppercase text-brass">Visit Us</div>
            <ul className="mt-6 space-y-3 text-ivory/70 text-sm leading-relaxed">
              <li>42, Heritage Avenue<br />Bandra West, Mumbai 400050</li>
              <li>+91 98765 43210</li>
              <li>hello@thetrends.salon</li>
              <li>Mon – Sun · 10:00 AM – 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} The Trends Unisex Salon. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brass transition">Privacy Policy</a>
            <a href="#" className="hover:text-brass transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// -----------------------------
// App
// -----------------------------
export default function App() {
  return (
    <div className="bg-ivory text-espresso min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Treatments />
      <Gallery />
      <Team />
      <Testimonials />
      <Pricing />
      <Booking />
      <Footer />
    </div>
  );
}
