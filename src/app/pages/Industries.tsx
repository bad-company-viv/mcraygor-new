import { Link } from "react-router";
import { ArrowRight, Factory, Building2, Droplets, Fuel, Mountain, Zap, HardHat, FlaskConical, Leaf } from "lucide-react";
import { SEO } from "../components/SEO";

const industries = [
  {
    id: "oil-gas",
    title: "Oil & Gas Industry",
    description: "Industrial vacuum systems and spill recovery solutions for oil & gas operations.",
    icon: Fuel,
    color: "#1a5c3a",
    image: "/images/industries/oil&gas.jpeg",
    applications: ["Pipeline cleaning", "Spill recovery", "Tank maintenance", "Refinery operations"]
  },
  {
    id: "municipal",
    title: "Municipal Corporations & Urban Local Bodies",
    description: "Comprehensive waste management and sewer cleaning equipment for urban infrastructure.",
    icon: Building2,
    color: "#e8612c",
    image: "/images/industries/municipal.jpg",
    applications: ["Street cleaning", "Waste collection", "Sewer maintenance", "Public sanitation"]
  },
  {
    id: "sewer-sewage",
    title: "Sewer & Sewage Network Cleaning",
    description: "Specialized jetting-cum-suction and desilting machines for sewage network maintenance.",
    icon: Droplets,
    color: "#1c2535",
    image: "/images/products/sewer-jetting-suction-machine.jpeg",
    applications: ["Sewer jetting", "Pipe cleaning", "Blockage removal", "Network maintenance"]
  },
  {
    id: "oil-refineries",
    title: "Oil Refineries",
    description: "High-capacity industrial vacuum cleaners and spill recovery systems for refinery operations.",
    icon: Factory,
    color: "#7c3aed",
    image: "/images/industries/oil-refineries.jpeg",
    applications: ["Refinery cleaning", "Catalyst recovery", "Maintenance operations", "Safety compliance"]
  },
  {
    id: "cement",
    title: "Cement Industry",
    description: "Dust suppression systems and industrial cleaning solutions for cement manufacturing.",
    icon: Mountain,
    color: "#059669",
    image: "/images/industries/cement-industry.jpeg",
    applications: ["Dust control", "Material handling", "Plant cleaning", "Environmental compliance"]
  },
  {
    id: "power-plants",
    title: "Coal Handling & Power Plants",
    description: "Heavy-duty vacuum systems and material handling equipment for power generation facilities.",
    icon: Zap,
    color: "#dc2626",
    image: "/images/industries/coal-power-plant.jpeg",
    applications: ["Coal handling", "Ash removal", "Boiler cleaning", "Maintenance support"]
  },
  {
    id: "steel-plants",
    title: "Steel Plants",
    description: "Industrial vacuum cleaners and waste handling systems for steel manufacturing processes.",
    icon: HardHat,
    color: "#ea580c",
    image: "/images/industries/steel-plant.jpeg",
    applications: ["Slag handling", "Mill cleaning", "Dust collection", "Material recovery"]
  },
  {
    id: "chemical-processing",
    title: "Chemical Processing Plants",
    description: "ATEX compliant vacuum systems and specialized cleaning equipment for chemical industries.",
    icon: FlaskConical,
    color: "#0891b2",
    image: "/images/industries/chemical-plant.jpeg",
    applications: ["Chemical spill cleanup", "Process cleaning", "Safety operations", "Contamination control"]
  },
  {
    id: "food-waste",
    title: "Food Waste Processing & Organic Waste Facilities",
    description: "Organic waste handling and processing equipment for food industry applications.",
    icon: Leaf,
    color: "#65a30d",
    image: "/images/industries/food-waste.jpg",
    applications: ["Organic waste collection", "Food processing cleanup", "Facility maintenance", "Waste management"]
  }
];

export function Industries() {
  return (
    <>
      <SEO 
        title="Industries We Serve - McRAYGOR Mechanicals"
        description="Specialized waste management and industrial cleaning solutions across diverse sectors including oil & gas, municipal, cement, steel plants, and more."
        keywords="industrial vacuum systems, waste management equipment, sewer cleaning, municipal equipment, industrial cleaning solutions"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1c2535] to-[#2d3748] text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Delivering specialized waste management and industrial cleaning solutions across diverse sectors 
              with proven expertise, reliability, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Link
                  key={industry.id}
                  to={`/industries/${industry.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = `linear-gradient(135deg, ${industry.color}20, ${industry.color}10)`;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div 
                      className="absolute top-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm"
                      style={{ backgroundColor: `${industry.color}90` }}
                    >
                      <IconComponent size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-[#1c2535] font-bold text-xl mb-3 group-hover:text-[#e8612c] transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    {/* Applications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.applications.slice(0, 3).map((app, index) => (
                          <span 
                            key={index}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                          >
                            {app}
                          </span>
                        ))}
                        {industry.applications.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                            +{industry.applications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#e8612c] text-sm font-semibold group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1c2535] text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We work with diverse industries and can customize solutions for your specific needs. 
            Contact us to discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e8612c] hover:bg-[#d4531f] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Custom Solution <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}