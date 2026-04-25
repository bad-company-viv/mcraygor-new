import { Link } from "react-router";
import { ArrowRight, Download } from "lucide-react";

const categories = [
  {
    slug: "liquid-waste",
    title: "Liquid Waste",
    description: "Combined jetting-cum-suction, super sucker, sewer grabbing, gully suction emptier, bucket type and rodding systems.",
    image: "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-1.jpg",
    count: "Core Range",
    color: "#1a5c3a",
  },
  {
    slug: "solid-waste",
    title: "Solid Waste",
    description: "Litter picker units, refuse/garbage compactor systems, and road sweeper solutions for municipal operations.",
    image: "/garbage-compactor.png",
    count: "Municipal Fleet",
    color: "#e8612c",
  },
  {
    slug: "industrial-vacuum",
    title: "Industrial Vacuum",
    description: "Industrial vacuum cleaning machine (IVC - Super Sucker) for high-intensity cleaning and suction applications.",
    image: "/images/products/vaccum.png",
    count: "Specialized",
    color: "#1c2535",
  },
  {
    slug: "special-purpose",
    title: "Special Purpose",
    description: "Anti-smog gun/fogging systems, skylift working platforms, and mobile oil spill recovery unit (MOSR).",
    image: "/images/products/anti-smog/anti-smog.png",
    count: "Application Specific",
    color: "#7c3aed",
  },
];

export function ProductsShowcase() {
  return (
    <section className="bg-black">
      <div className="w-full">
        {/* Cinematic Grid with Minimal Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1">
          {categories.map((cat, index) => (
            <Link
              key={cat.slug}
              to="/products"
              className="group relative overflow-hidden h-[450px] lg:h-[550px] shadow-2xl"
            >
              {/* Background Image - High Contrast focus */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Minimalist Overlay - only darkens bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Minimalist Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start">
                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[#e8612c] text-base md:text-lg font-black tracking-tighter">0{index + 1}</span>
                    <div className="h-[1px] w-8 bg-white/30 group-hover:w-16 transition-all duration-500" />
                  </div>

                  <h3 className="text-white font-black uppercase tracking-tighter leading-none mb-6 drop-shadow-md" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                    {cat.title}
                  </h3>

                  <div className="flex items-center gap-4 text-white font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 group-hover:gap-6">
                    <span className="border-b border-white/50 pb-2 group-hover:border-[#e8612c] transition-colors">Discover Fleet</span>
                    <ArrowRight size={18} className="text-[#e8612c]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
