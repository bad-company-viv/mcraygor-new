import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, Factory, Building2, Fuel, Mountain, Zap, HardHat } from "lucide-react";
import { SEO } from "../components/SEO";

const industriesData = {
  "oil-gas": {
    title: "Oil & Gas Industry",
    description: "Comprehensive industrial vacuum systems and spill recovery solutions designed for the demanding requirements of oil & gas operations.",
    icon: Fuel,
    color: "#1a5c3a",
    image: "/images/industries/oil&gas.jpeg",
    heroImage: "/images/industries/oil&gas.jpeg",
    overview: "The oil & gas industry requires specialized equipment capable of handling hazardous materials, operating in challenging environments, and meeting strict safety standards. Our industrial vacuum systems and spill recovery solutions are engineered to deliver reliable performance in these critical applications.",
    applications: [
      "Pipeline cleaning and maintenance",
      "Oil spill recovery and containment",
      "Tank cleaning and maintenance",
      "Refinery operations support",
      "Drilling site cleanup",
      "Petrochemical facility maintenance"
    ],
    products: [
      "Mobile Oil Spill Recovery Unit (MOSR)",
      "IVC Super Sucker - Industrial Vacuum Cleaner",
      "High-Flow Deep Suction Machine",
      "ATEX Compliant Vacuum Systems"
    ],
    benefits: [
      "ATEX compliant equipment for hazardous environments",
      "High-capacity suction for efficient operations",
      "Corrosion-resistant materials and components",
      "Emergency response capability",
      "Environmental compliance support",
      "Reduced operational downtime"
    ],
    caseStudies: [
      {
        title: "Major Oil Refinery Spill Response",
        description: "Successfully deployed MOSR units for rapid oil spill containment and recovery, minimizing environmental impact."
      },
      {
        title: "Pipeline Maintenance Project",
        description: "Provided specialized vacuum systems for pipeline cleaning operations across 500km of network."
      }
    ]
  },
  "municipal": {
    title: "Municipal Corporations & Urban Local Bodies",
    description: "Complete waste management and urban sanitation solutions for municipal corporations and local government bodies.",
    icon: Building2,
    color: "#e8612c",
    image: "/images/industries/municipal-corporation.png",
    heroImage: "/images/industries/municipal-corporation.png",
    overview: "Municipal corporations face increasing challenges in waste management, street cleaning, and maintaining urban sanitation standards. Our comprehensive range of municipal equipment helps local bodies deliver efficient, cost-effective services to citizens while meeting environmental regulations.",
    applications: [
      "Street sweeping and cleaning",
      "Solid waste collection and compaction",
      "Sewer network maintenance",
      "Public area sanitation",
      "Storm drain cleaning",
      "Municipal facility maintenance"
    ],
    products: [
      "Truck Mounted Road Sweeping Machine",
      "Garbage Compactor Systems",
      "Litter Picker Machines",
      "Combined Jetting Cum Suction Machine",
      "Sewer Rodding Machine",
      "Anti-Smog Gun / Fog Cannon"
    ],
    benefits: [
      "Improved urban cleanliness standards",
      "Cost-effective waste management",
      "Enhanced operational efficiency",
      "Environmental compliance",
      "Reduced manual labor requirements",
      "Better citizen satisfaction"
    ],
    caseStudies: [
      {
        title: "Delhi Municipal Corporation Fleet",
        description: "Deployed 50+ units across Delhi for comprehensive waste management and street cleaning operations."
      },
      {
        title: "Smart City Initiative",
        description: "Provided integrated waste management solutions for multiple smart city projects across India."
      }
    ]
  },
  "steel-plants": {
    title: "Steel Plants",
    description: "Heavy-duty industrial vacuum systems and waste handling equipment designed for steel manufacturing environments.",
    icon: HardHat,
    color: "#ea580c",
    image: "/images/industries/steel-plant.jpeg",
    heroImage: "/images/industries/steel-plant.jpeg",
    overview: "Steel manufacturing generates significant amounts of dust, slag, and waste materials that require specialized handling equipment. Our heavy-duty vacuum systems and material handling solutions are engineered to operate reliably in the harsh conditions of steel plants.",
    applications: [
      "Slag handling and removal",
      "Steel mill cleaning operations",
      "Dust collection and control",
      "Material recovery systems",
      "Furnace maintenance support",
      "Plant housekeeping operations"
    ],
    products: [
      "IVC Super Sucker - Heavy Duty",
      "Industrial Vacuum Cleaner Trucks",
      "Material Recovery Systems",
      "Dust Suppression Equipment"
    ],
    benefits: [
      "High-temperature operation capability",
      "Heavy-duty construction for durability",
      "Efficient material recovery",
      "Improved workplace safety",
      "Environmental compliance",
      "Reduced maintenance costs"
    ],
    caseStudies: [
      {
        title: "JSW Steel Plant Operations",
        description: "Provided comprehensive material handling and cleaning solutions for large-scale steel manufacturing operations."
      },
      {
        title: "Vizag Steel Plant Maintenance",
        description: "Deployed specialized vacuum systems for ongoing plant maintenance and housekeeping operations."
      }
    ]
  },
  "oil-refineries": {
    title: "Oil Refineries",
    description: "High-capacity industrial vacuum cleaners and spill recovery systems specifically designed for oil refinery operations.",
    icon: Factory,
    color: "#7c3aed",
    image: "/images/industries/oil-refineries.jpeg",
    heroImage: "/images/industries/oil-refineries.jpeg",
    overview: "Oil refineries operate complex processes that require specialized cleaning and maintenance equipment. Our industrial vacuum systems and spill recovery solutions are engineered to handle petroleum products, meet safety standards, and support continuous refinery operations with minimal downtime.",
    applications: [
      "Refinery unit cleaning and maintenance",
      "Catalyst recovery and handling",
      "Hydrocarbon spill containment",
      "Tank cleaning operations",
      "Process equipment maintenance",
      "Emergency response and cleanup"
    ],
    products: [
      "Mobile Oil Spill Recovery Unit (MOSR)",
      "ATEX Compliant Industrial Vacuum Systems",
      "High-Capacity Suction Systems",
      "Specialized Catalyst Recovery Equipment"
    ],
    benefits: [
      "ATEX certified for explosive atmospheres",
      "Hydrocarbon-resistant components",
      "High-efficiency recovery systems",
      "Compliance with safety regulations",
      "Reduced environmental impact",
      "Minimized operational disruptions"
    ],
    caseStudies: [
      {
        title: "IOCL Refinery Maintenance",
        description: "Provided comprehensive vacuum cleaning solutions for scheduled maintenance operations at major IOCL refineries."
      },
      {
        title: "Catalyst Recovery Project",
        description: "Deployed specialized equipment for catalyst recovery operations, achieving 95% material recovery efficiency."
      }
    ]
  },
  "cement": {
    title: "Cement Industry",
    description: "Dust suppression systems and industrial cleaning solutions designed for cement manufacturing environments.",
    icon: Mountain,
    color: "#059669",
    image: "/images/industries/cement-industry.jpeg",
    heroImage: "/images/industries/cement-industry.jpeg",
    overview: "Cement manufacturing generates substantial amounts of dust and requires robust cleaning systems to maintain operational efficiency and environmental compliance. Our specialized equipment is designed to handle cement dust, limestone particles, and other materials in harsh industrial conditions.",
    applications: [
      "Cement dust collection and control",
      "Kiln and mill cleaning operations",
      "Material handling and recovery",
      "Plant housekeeping and maintenance",
      "Environmental compliance support",
      "Quarry and mining operations"
    ],
    products: [
      "Industrial Dust Suppression Systems",
      "Heavy-Duty Vacuum Cleaners",
      "Material Recovery Equipment",
      "Anti-Smog Gun / Fog Cannon Systems"
    ],
    benefits: [
      "Effective dust control and suppression",
      "Improved air quality compliance",
      "Enhanced worker safety",
      "Reduced material waste",
      "Lower maintenance costs",
      "Environmental protection"
    ],
    caseStudies: [
      {
        title: "ACC Cement Plant Solutions",
        description: "Implemented comprehensive dust control systems across multiple cement manufacturing facilities."
      },
      {
        title: "Shree Cement Environmental Compliance",
        description: "Deployed advanced dust suppression systems to meet stringent environmental regulations."
      }
    ]
  },
  "power-plants": {
    title: "Coal Handling & Power Plants",
    description: "Heavy-duty vacuum systems and material handling equipment for power generation facilities and coal handling operations.",
    icon: Zap,
    color: "#dc2626",
    image: "/images/industries/coal-power-plant.jpeg",
    heroImage: "/images/industries/coal-power-plant.jpeg",
    overview: "Power plants require specialized equipment for coal handling, ash removal, and facility maintenance. Our heavy-duty systems are designed to handle the demanding conditions of power generation facilities, from coal yards to boiler maintenance operations.",
    applications: [
      "Coal handling and conveyor cleaning",
      "Fly ash and bottom ash removal",
      "Boiler and turbine maintenance",
      "Dust suppression in coal yards",
      "Emergency cleanup operations",
      "Plant infrastructure maintenance"
    ],
    products: [
      "Heavy-Duty Industrial Vacuum Systems",
      "Coal Handling Equipment",
      "Ash Removal Systems",
      "Dust Suppression Equipment"
    ],
    benefits: [
      "High-capacity material handling",
      "Reduced manual labor requirements",
      "Improved plant efficiency",
      "Environmental compliance support",
      "Enhanced safety operations",
      "Minimized downtime"
    ],
    caseStudies: [
      {
        title: "BHEL Power Plant Maintenance",
        description: "Provided comprehensive cleaning and maintenance solutions for thermal power plant operations."
      },
      {
        title: "Coal Yard Dust Control",
        description: "Implemented advanced dust suppression systems for large-scale coal handling facilities."
      }
    ]
  }
};

// Add more industry data as needed...

export function IndustryDetail() {
  const { industryId } = useParams();
  const industry = industriesData[industryId as keyof typeof industriesData];

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Link to="/industries" className="text-[#e8612c] hover:underline">
            ← Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = industry.icon;

  return (
    <>
      <SEO 
        metadata={{
          title: `${industry.title} Solutions | McRAYGOR® Mechanicals`,
          description: industry.description,
          keywords: `${industry.title.toLowerCase()}, industrial vacuum systems, waste management equipment, specialized cleaning solutions`,
          canonical: `https://www.mcraygor.com/industries/${industryId}`,
          ogImage: industry.image
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1c2535] to-[#2d3748] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/industries" 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Industries
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: industry.color }}
                >
                  <IconComponent size={32} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{industry.title}</h1>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {industry.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-[#e8612c] hover:bg-[#d4531f] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get Quote
                </Link>
                <Link
                  to="/products"
                  className="border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Products
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-80 object-cover shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1c2535] mb-6">Industry Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {industry.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Applications & Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Applications */}
            <div>
              <h3 className="text-2xl font-bold text-[#1c2535] mb-6">Key Applications</h3>
              <div className="space-y-3">
                {industry.applications.map((app, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#e8612c] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-2xl font-bold text-[#1c2535] mb-6">Relevant Products</h3>
              <div className="space-y-3">
                {industry.products.map((productName, index) => {
                  // Attempt to find the product slug
                  const productsMap: Record<string, string> = {
                    "Combined Jetting Cum Suction Machine – COMBINATOR™": "COMBINATOR",
                    "Combined Jetting Cum Suction Machine": "COMBINATOR",
                    "IVC Super Sucker - Industrial Vacuum Cleaner": "HYPERVAC-IVC",
                    "IVC Super Sucker - Heavy Duty": "HYPERVAC-IVC",
                    "High-Flow Deep Suction Machine": "HYPERVAC",
                    "Super Sucker Machine – HYPERVAC™": "HYPERVAC",
                    "Truck Mounted Road Sweeping Machine": "McCLEAN",
                    "Garbage Compactor Systems": "PAC",
                    "Refuse / Garbage Compactor – PAC™": "PAC",
                    "Litter Picker Machines": "VYUK",
                    "Combined Jetting Cum Suction Machine": "COMBINATOR",
                    "Sewer Rodding Machine": "McRODDER",
                    "Anti-Smog Gun / Fog Cannon": "McFOGGER",
                    "Anti-Smog Gun / Fog Cannon Systems": "McFOGGER",
                    "Mobile Oil Spill Recovery Unit (MOSR)": "MOSRU",
                    "Industrial Vacuum Cleaner Trucks": "HYPERVAC-IVC",
                    "Material Recovery Systems": "MATERIAL-RECOVERY-SYSTEMS",
                    "Industrial Dust Suppression Systems": "McFOGGER",
                    "Heavy-Duty Vacuum Cleaners": "HYPERVAC-IVC",
                    "Heavy-Duty Industrial Vacuum Systems": "HYPERVAC-IVC",
                    "Coal Handling Equipment": "HYPERVAC-IVC"
                  };
                  const slug = productsMap[productName] || "COMBINATOR"; // Fallback to Combinator if not found
                  
                  return (
                    <Link 
                      key={index} 
                      to={`/products/${slug}`}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                    >
                      <CheckCircle size={20} className="text-[#e8612c] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 group-hover:text-[#e8612c] font-medium">{productName}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h3 className="text-2xl font-bold text-[#1c2535] mb-8 text-center">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#e8612c] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {industry.caseStudies && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h3 className="text-2xl font-bold text-[#1c2535] mb-8 text-center">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-[#1c2535] mb-3">{study.title}</h4>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-[#1c2535] text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your {industry.title.toLowerCase()} requirements and get a customized solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#e8612c] hover:bg-[#d4531f] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Custom Quote <ArrowRight size={20} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Browse Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
