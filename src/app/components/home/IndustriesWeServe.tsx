import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    id: "oil-gas",
    title: "Oil & Gas Industry",
    description: "Industrial vacuum systems and spill recovery solutions for oil & gas operations.",
    color: "#1a5c3a",
    image: "/images/industries/oil&gas.jpeg"
  },
  {
    id: "municipal",
    title: "Municipal Corporations & Urban Local Bodies",
    description: "Comprehensive waste management and sewer cleaning equipment for urban infrastructure.",
    color: "#e8612c",
    image: "/images/industries/municipal-corporation.png"
  },
  {
    id: "sewer-sewage",
    title: "Sewer & Sewage Network Cleaning",
    description: "Specialized jetting-cum-suction and desilting machines for sewage network maintenance.",
    color: "#1c2535",
    image: "/images/industries/sewer.jpeg"
  },
  {
    id: "oil-refineries",
    title: "Oil Refineries",
    description: "High-capacity industrial vacuum cleaners and spill recovery systems for refinery operations.",
    color: "#7c3aed",
    image: "/images/industries/oil-refineries.jpeg"
  },
  {
    id: "cement",
    title: "Cement Industry",
    description: "Dust suppression systems and industrial cleaning solutions for cement manufacturing.",
    color: "#059669",
    image: "/images/industries/cement-industry.jpeg"
  },
  {
    id: "power-plants",
    title: "Coal Handling & Power Plants",
    description: "Heavy-duty vacuum systems and material handling equipment for power generation facilities.",
    color: "#dc2626",
    image: "/images/industries/coal-power-plant.jpeg"
  },
  {
    id: "steel-plants",
    title: "Steel Plants",
    description: "Industrial vacuum cleaners and waste handling systems for steel manufacturing processes.",
    color: "#ea580c",
    image: "/images/industries/steel-plant.jpeg"
  },
  {
    id: "chemical-processing",
    title: "Chemical Processing Plants",
    description: "ATEX compliant vacuum systems and specialized cleaning equipment for chemical industries.",
    color: "#0891b2",
    image: "/images/industries/chemical-plant.jpeg"
  },
  {
    id: "food-waste",
    title: "Food Waste Processing & Organic Waste Facilities",
    description: "Organic waste handling and processing equipment for food industry applications.",
    color: "#65a30d",
    image: "/images/industries/food-waste.jpeg"
  }
];

export function IndustriesWeServe() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-2">Our Expertise</p>
            <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Industries We Serve
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl text-sm">
              Delivering specialized waste management and industrial cleaning solutions across diverse sectors with proven expertise and reliability.
            </p>
          </div>
          <Link
            to="/industries"
            className="flex items-center gap-2 text-[#e8612c] font-semibold hover:gap-3 transition-all"
          >
            View All Industries <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            return (
              <Link
                key={industry.id}
                to={`/industries/${industry.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to a gradient background if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = `linear-gradient(135deg, ${industry.color}20, ${industry.color}10)`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-[#1c2535] font-bold text-lg mb-2 group-hover:text-[#e8612c] transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#e8612c] text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1c2535] mb-2">9+</div>
            <div className="text-gray-500 text-sm">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1c2535] mb-2">25+</div>
            <div className="text-gray-500 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1c2535] mb-2">500+</div>
            <div className="text-gray-500 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1c2535] mb-2">100%</div>
            <div className="text-gray-500 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}