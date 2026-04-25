import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

type HeroSlide = {
  image: string;
  headline: string;
  subtext: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  imageClassName?: string;
  imagePosition?: string;
  mobileImagePosition?: string;
};

const slides: HeroSlide[] = [
  {
    image: "/hero/hero1.jpeg",
    headline: "Manufacturer of Municipal and Industrial Waste Handling Equipment",
    subtext: "McRAYGOR Mechanicals Infrastructure - clean cities, safe workers, mechanized sanitation.",
    primaryCta: { label: "Explore Products", to: "/products" },
    secondaryCta: { label: "Request a Quote", to: "/contact" },
    imagePosition: "center center",
    mobileImagePosition: "center center",
  },
  {
    image: "/hero/hero2-fullbleed.jpg",
    headline: "25+ Years of Manufacturing Legacy Under the McRAYGOR Brand",
    subtext: "Trusted by municipal bodies, government buyers, and industrial clients across India and export markets.",
    primaryCta: { label: "Our Story", to: "/about" },
    secondaryCta: { label: "Contact Us", to: "/contact" },
    imagePosition: "center center",
    mobileImagePosition: "center center",
  },
  {
    image: "/hero/hero3.png",
    headline: "Premium, Technology-Driven Waste Handling Solutions",
    subtext: "From jetting-cum-suction systems to special-purpose platforms for municipal and industrial applications.",
    primaryCta: { label: "View Solutions", to: "/products#applications" },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
    imagePosition: "right center",
    mobileImagePosition: "center center",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const heroHeight = "calc(100dvh - var(--site-header-height, 0px))";

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
    <section className="relative min-h-[420px] md:min-h-[500px] overflow-hidden" style={{ height: heroHeight }}>
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          style={{
            ['--obj-pos' as any]: s.imagePosition || "center",
            ['--obj-pos-mobile' as any]: s.mobileImagePosition || s.imagePosition || "center"
          }}
        >
          <img
            src={s.image}
            alt=""
            className={`w-full h-full hero-img-${i} ${s.image.endsWith('.png') ? 'object-contain md:object-cover' : 'object-cover'} ${s.imageClassName ?? ""}`}
            style={{
              objectPosition: 'var(--obj-pos-mobile)'
            }}
          />
          <style>{`
            @media (min-width: 768px) {
              .hero-img-${i} {
                object-position: var(--obj-pos) !important;
              }
            }
          `}</style>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent md:from-black/75 md:via-black/50 md:to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className={`relative z-10 h-full flex items-center transition-opacity duration-300 ${transitioning ? "opacity-0" : "opacity-100"}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8612c]/20 border border-[#e8612c]/40 text-[#e8612c] px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e8612c] animate-pulse" />
              Legacy Since 2007 | Operational Since 2019
            </div>

            <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.15 }}>
              {slide.headline}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl" style={{ fontWeight: 400, lineHeight: 1.6 }}>
              {slide.subtext}
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Link
                to={slide.primaryCta.to}
                className="bg-[#e8612c] hover:bg-[#d4531f] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded font-semibold text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-orange-500/25 text-center w-full sm:w-auto"
              >
                {slide.primaryCta.label} →
              </Link>
              <Link
                to={slide.secondaryCta.to}
                className="border border-white/40 text-white hover:bg-white/10 px-5 sm:px-7 py-3 sm:py-3.5 rounded font-semibold text-sm sm:text-base transition-colors text-center w-full sm:w-auto"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hidden sm:flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hidden sm:flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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
