import { Link } from "react-router";
import { ArrowRight, Download } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8612c]/10 text-[#e8612c] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            PRODUCT CATEGORIES
          </div>
          <h2 className="text-[#1c2535] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}>
            Our Product Range
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive solutions for waste management, industrial cleaning, and specialized municipal operations
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#e8612c] hover:bg-[#d4531f] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:gap-3 shadow-lg hover:shadow-xl"
          >
            View All Products <ArrowRight size={20} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          {categories.map((cat, index) => (
            <Link
              key={cat.slug}
              to="/products"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-96">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span
                    className="text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
                    style={{ backgroundColor: `${cat.color}CC` }}
                  >
                    {cat.count}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-3xl mb-3 text-white leading-tight">
                      {cat.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90 font-semibold group-hover:gap-3 transition-all">
                      <span className="text-lg">Explore Range</span>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#e8612c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-6 text-lg">
            Need help choosing the right equipment for your requirements?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1c2535] hover:bg-[#0f1419] text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Contact Our Experts
            </Link>
            <a
              href="/Brochure.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-[#e8612c] text-[#e8612c] hover:bg-[#e8612c] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <Download size={18} />
              Download Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
