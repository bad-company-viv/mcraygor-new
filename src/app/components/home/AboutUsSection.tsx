import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Section 1: Company (Redesigned without image) */}
      <div className="bg-[#f8fafc] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-[#fff7ed] px-6 py-2 rounded-none mb-10 shadow-sm border border-[#e8612c]/10">
              <span className="text-[#e8612c] text-xs font-black uppercase tracking-[0.2em]">Our Legacy</span>
            </div>
            
            <div className="mb-12 flex justify-center">
              <img 
                src="/mcraygor-header-logo.png" 
                alt="McRAYGOR" 
                className="h-20 md:h-28 w-auto object-contain"
              />
            </div>

            <p className="text-2xl md:text-4xl text-[#1c2535] leading-[1.2] mb-12 font-black uppercase tracking-tighter">
              McRAYGOR® is India's leading manufacturer of specialized waste handling 
              and industrial cleaning equipment.
            </p>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 font-medium">
              We focus on visible build strength and practical engineering for municipal operations, 
              delivering reliability that defines modern infrastructure.
            </p>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-4 bg-[#1c2535] text-white px-10 py-5 rounded-none text-sm font-black uppercase tracking-widest hover:bg-[#e8612c] transition-all shadow-xl"
              >
                Our Story
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
