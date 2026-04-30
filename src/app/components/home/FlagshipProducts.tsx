import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const flagships = [
  {
    id: "jetting-suction",
    title: "Combined Jetting Cum Suction Machine – COMBINATOR™",
    subtitle: "Flagship series",
    description: "Our high-performance combined unit for simultaneous high-pressure jetting and vacuum suction. Designed for efficient sewer line cleaning and liquid waste management in municipal and industrial environments.",
    image: "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-1.jpg",
    link: "/products/COMBINATOR",
    align: "left"
  },
  {
    id: "super-sucker",
    title: "Super Sucker Machine – HYPERVAC™",
    subtitle: "Heavy-Duty Series",
    description: "The ultimate industrial vacuum cleaner. Engineered for deep sewer desilting and high-intensity industrial cleaning, capable of handling dry and wet waste with unmatched suction power.",
    image: "/images/products/super-sucker-machine/super-sucker-1.jpg",
    link: "/products/HYPERVAC",
    align: "right"
  }
];

export function FlagshipProducts() {
  return (
    <section className="bg-white border-y border-gray-100 pb-12 md:pb-20">
      {flagships.map((product, index) => (
        <div
          key={product.id}
          className={`flex flex-col ${product.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-stretch min-h-[650px] mb-12 md:mb-20 last:mb-0`}
        >
          {/* Image Side */}
          <div className="w-full md:w-[55%] lg:w-[60%] relative overflow-hidden min-h-[400px] md:min-h-[650px]">
            <img
              src={product.image}
              alt={`McRAYGOR ${product.title} - Heavy-Duty Industrial Cleaning Machine`}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
              loading="lazy"
            />
            {/* Subtle shadow overlay on mobile */}
            <div className="absolute inset-0 bg-black/10 md:hidden" />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center px-8 py-20 md:px-14 lg:px-20 xl:px-24">
            <div className="max-w-[500px]">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1a1a1a] mb-8 uppercase leading-[1]">
                {product.title}
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-12 font-medium">
                {product.description}
              </p>

              <div>
                <Link
                  to={product.link}
                  className="inline-flex items-center gap-3 bg-[#1c2535] px-10 py-5 text-sm font-black text-white uppercase tracking-[0.2em] transition-all hover:bg-[#f36b2a] hover:gap-5"
                >
                  View Details
                  <ArrowRight size={20} strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
