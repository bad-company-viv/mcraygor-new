import { ShieldCheck, Building2, Users, Globe } from "lucide-react";
import { SEO } from "../components/SEO";

export function About() {
  return (
    <>
      <SEO pageKey="about" />
      
      {/* Hero Section */}
      <section className="bg-[#1c2535] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 
            className="text-white mb-2" 
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            About Us
          </h1>
          <div className="w-24 h-1 bg-[#1a5c3a] mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Manufacturer of municipal and industrial waste handling equipment, with brand legacy in market since 2007 and current operations under McRAYGOR Mechanicals Infrastructure since 2019.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-[#1c2535] mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
                Legacy Brand, Current Independent Entity
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                The McRAYGOR brand has long-standing visibility across municipal and industrial sectors. We maintain a clear distinction between our legacy and our current independent operational structure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                The current legal and operational entity is McRAYGOR Mechanicals Infrastructure (sole proprietorship), active since 2019, with a clear focus on reliability, safety, and technology-led mechanized sanitation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { val: "2007", label: "Brand Established" },
                  { val: "2019", label: "Current Operations" },
                  { val: "25+", label: "Years Legacy" }
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-[#e8612c] font-black mb-1" style={{ fontSize: "1.8rem", lineHeight: 1 }}>{item.val}</div>
                    <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/manufacturing-facility-branded.png"
                alt="McRAYGOR Operations"
                className="rounded-2xl w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-2">Our Expertise</p>
            <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              What We Do
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Municipal Equipment",
                desc: "Comprehensive waste handling solutions for municipal corporations and government bodies",
              },
              {
                icon: Globe,
                title: "Industrial Solutions",
                desc: "Specialized equipment for industrial waste management and facility maintenance",
              },
              {
                icon: Users,
                title: "Custom Engineering",
                desc: "Tailored solutions designed to meet specific operational requirements",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Rigorous testing and quality control ensuring reliable field performance",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e8612c]/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-[#e8612c]" />
                </div>
                <h3 className="text-[#1c2535] font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3 text-center">Our Commitment</p>
            <h2 className="text-[#1c2535] mb-8 text-center" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Building Trust Through Quality
            </h2>
            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
              <p>
                The McRAYGOR brand has been active in the market since 2007 and has strong recall among municipal bodies, contractors, and export customers across India and internationally.
              </p>
              <p>
                Since 2019, the business operates as <strong>McRAYGOR Mechanicals Infrastructure</strong>, a sole proprietorship entity focused on delivering reliable, technology-driven waste handling solutions with a clear commitment to quality and customer satisfaction.
              </p>
              <p>
                Our focus areas include:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#e8612c] mt-1">•</span>
                  <span><strong>Engineering Excellence:</strong> Continuous innovation in product design and manufacturing processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8612c] mt-1">•</span>
                  <span><strong>Customer Trust:</strong> Building long-term relationships through reliable equipment and responsive service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8612c] mt-1">•</span>
                  <span><strong>Social Impact:</strong> Contributing to cleaner cities and safer sanitation practices through mechanization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8612c] mt-1">•</span>
                  <span><strong>Make in India:</strong> Supporting indigenous manufacturing and sustainable infrastructure development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
