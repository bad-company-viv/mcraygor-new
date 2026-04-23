import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

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
  }
];

export function IndustriesWeServe() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-white px-6 py-2 rounded-full mb-8 shadow-sm">
            <span className="text-[#e8612c] text-xs font-black uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          <h2 className="text-[#1c2535] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
            Industries We Serve
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Delivering specialized waste management and industrial cleaning solutions across diverse sectors with proven expertise and reliability.
          </p>
        </div>

        <div className="relative px-4 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: industries.length > 3,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {industries.map((industry) => (
                <CarouselItem key={industry.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Link
                    to={`/industries/${industry.id}`}
                    className="group relative block h-full bg-white overflow-hidden shadow-[0_10px_50px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1c2535]/80 via-[#1c2535]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between">
                        <span className="text-white font-bold text-sm uppercase tracking-widest">Explore Sector</span>
                        <div className="w-10 h-10 bg-[#e8612c] flex items-center justify-center text-white">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-6 bg-[#e8612c]" />
                        <h3 className="text-[#1c2535] font-black text-xl leading-tight group-hover:text-[#e8612c] transition-colors uppercase tracking-tight">
                          {industry.title}
                        </h3>
                      </div>

                      <p className="text-gray-500 text-base leading-relaxed mb-0 font-medium">
                        {industry.description}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-16 gap-4">
              <CarouselPrevious className="static translate-y-0 h-14 w-14 border-2 border-gray-100 bg-white text-[#1c2535] hover:bg-[#1c2535] hover:text-white transition-all shadow-sm" />
              <Link
                to="/industries"
                className="flex items-center gap-3 bg-[#1c2535] text-white px-8 text-sm font-black uppercase tracking-widest hover:bg-[#e8612c] transition-all shadow-md"
              >
                View All Sectors
              </Link>
              <CarouselNext className="static translate-y-0 h-14 w-14 border-2 border-gray-100 bg-white text-[#1c2535] hover:bg-[#1c2535] hover:text-white transition-all shadow-sm" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
