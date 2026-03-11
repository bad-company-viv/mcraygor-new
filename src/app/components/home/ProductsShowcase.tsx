import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    slug: "liquid-waste",
    title: "Liquid Waste",
    description: "Combined jetting-cum-suction, super sucker, sewer grabbing, gully suction emptier, bucket type and rodding systems.",
    image: "/images/products/sewer-jetting-suction-machine.jpeg",
    count: "Core Range",
    color: "#1a5c3a",
  },
  {
    slug: "solid-waste",
    title: "Solid Waste",
    description: "Litter picker units, refuse/garbage compactor systems, and road sweeper solutions for municipal operations.",
    image: "/images/products/refuse-compactor.jpeg",
    count: "Municipal Fleet",
    color: "#e8612c",
  },
  {
    slug: "industrial-vacuum",
    title: "Industrial Vacuum",
    description: "Industrial vacuum cleaning machine (IVC - Super Sucker) for high-intensity cleaning and suction applications.",
    image: "/images/products/mm-suction-vacuum-pump.jpeg",
    count: "Specialized",
    color: "#1c2535",
  },
  {
    slug: "special-purpose",
    title: "Special Purpose",
    description: "Anti-smog gun/fogging systems, skylift working platforms, and mobile oil spill recovery unit (MOSR).",
    image: "/images/products/oil-suction-machine.jpeg",
    count: "Application Specific",
    color: "#7c3aed",
  },
];

export function ProductsShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Our Product Range
            </h2>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-2 text-[#e8612c] font-semibold hover:gap-3 transition-all"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/products"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span
                  className="absolute top-3 right-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.count}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[#1c2535] font-bold mb-2" style={{ fontSize: "1.05rem", lineHeight: 1.4 }}>
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.description}</p>
                <span className="flex items-center gap-1.5 text-[#e8612c] text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Explore Range <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
