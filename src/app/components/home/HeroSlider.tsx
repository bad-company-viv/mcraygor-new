import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const slides = [
  {
    image: "/hero/hero1.jpeg",
    headline: "Manufacturer of Municipal and Industrial Waste Handling Equipment",
    subtext: "McRAYGOR Mechanicals Infrastructure - clean cities, safe workers, mechanized sanitation.",
    primaryCta: { label: "Explore Products", to: "/products" },
    secondaryCta: { label: "Request a Quote", to: "/contact" },
  },
  {
    image: "/hero/hero2.png",
    headline: "25+ Years of Manufacturing Legacy Under the McRAYGOR Brand",
    subtext: "Trusted by municipal bodies, government buyers, and industrial clients across India and export markets.",
    primaryCta: { label: "Our Story", to: "/about" },
    secondaryCta: { label: "Contact Us", to: "/contact" },
  },
  {
    image: "/hero/hero3.png",
    headline: "Premium, Technology-Driven Waste Handling Solutions",
    subtext: "From jetting-cum-suction systems to special-purpose platforms for municipal and industrial applications.",
    primaryCta: { label: "View Solutions", to: "/products#applications" },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  function goNext() {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setTransitioning(false);
    }, 300);
  }

  function goPrev() {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c - 1 + slides.length) % slides.length);
      setTransitioning(false);
    }, 300);
  }

  const slide = slides[current];

  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className={`relative z-10 h-full flex items-center transition-opacity duration-300 ${transitioning ? "opacity-0" : "opacity-100"}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8612c]/20 border border-[#e8612c]/40 text-[#e8612c] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e8612c] animate-pulse" />
              Legacy Since 2007 | Operational Since 2019
            </div>

            <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.15 }}>
              {slide.headline}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8" style={{ fontWeight: 400, lineHeight: 1.6 }}>
              {slide.subtext}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={slide.primaryCta.to}
                className="bg-[#e8612c] hover:bg-[#d4531f] text-white px-7 py-3.5 rounded font-semibold text-base transition-all hover:shadow-lg hover:shadow-orange-500/25"
              >
                {slide.primaryCta.label} →
              </Link>
              <Link
                to={slide.secondaryCta.to}
                className="border border-white/40 text-white hover:bg-white/10 px-7 py-3.5 rounded font-semibold text-base transition-colors"
              >
                {slide.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? "w-8 bg-[#e8612c]" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
