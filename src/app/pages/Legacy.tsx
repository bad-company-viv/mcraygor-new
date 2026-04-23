import { Calendar, Award, Users, TrendingUp } from "lucide-react";
import { SEO } from "../components/SEO";

const milestones = [
  {
    year: "2007",
    title: "Brand Presence Established",
    desc: "McRAYGOR brand gains market recall among municipal bodies, contractors, and export buyers. The brand becomes recognized for quality sewer cleaning and waste handling equipment across India.",
  },
  {
    year: "2010-2018",
    title: "Market Expansion & Growth",
    desc: "Significant expansion in government and private sector projects. Established strong relationships with major municipal corporations, state governments, and industrial clients. Export operations begin to international markets.",
  },
  {
    year: "2019",
    title: "Current Entity Operations",
    desc: "Business operates as McRAYGOR Mechanicals Infrastructure (sole proprietorship), independent from the earlier private limited setup. Fresh start with renewed focus on quality, reliability, and customer satisfaction.",
  },
  {
    year: "2020-2023",
    title: "Technology & Innovation Focus",
    desc: "Investment in R&D capabilities, product improvements, and customization. Enhanced manufacturing processes and quality control systems. Expansion of product portfolio to meet diverse customer requirements.",
  },
  {
    year: "Present",
    title: "Technology-Led Positioning",
    desc: "Focus on premium, technology-driven waste handling systems aligned to cleaner cities and safer sanitation practices. Commitment to eliminating manual scavenging through mechanization and supporting Make in India initiatives.",
  },
];

export function Legacy() {
  return (
    <>
      <SEO pageKey="legacy" />
      
      {/* Hero Section */}
      <section className="bg-[#1c2535] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 
            className="text-white mb-2" 
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            Company Legacy
          </h1>
          <div className="w-24 h-1 bg-[#1a5c3a] mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            25+ years of manufacturing legacy under the McRAYGOR brand, building trust with government and industrial customers across India and globally.
          </p>
        </div>
      </section>

      {/* Legacy Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Our Heritage</p>
              <h2 className="text-[#1c2535] mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
                Building Trust Through Engineering Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                The McRAYGOR brand has been synonymous with quality waste handling equipment since 2007. Over the years, we have built a strong reputation for:
              </p>
              <ul className="space-y-3 text-gray-600 text-[15px] mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#e8612c] mt-1">•</span>
                  <span><strong>Engineering depth:</strong> Deep understanding of municipal and industrial waste handling requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8612c] mt-1">•</span>
                  <span><strong>Manufacturing evolution:</strong> Continuous improvement in design, quality, and reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e8612c] mt-1">•</span>
                  <span><strong>Customer trust:</strong> Long-term relationships with government bodies and industrial clients</span>
                </li>
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Calendar, val: "2007", label: "Brand Established" },
                  { icon: Award, val: "25+", label: "Years Legacy" },
                  { icon: Users, val: "100+", label: "Major Clients" }
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <item.icon className="w-6 h-6 text-[#e8612c] mx-auto mb-2" />
                    <div className="text-[#1c2535] font-black mb-1" style={{ fontSize: "1.5rem", lineHeight: 1 }}>{item.val}</div>
                    <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/manufacturing-facility.png"
                alt="McRAYGOR Manufacturing Legacy"
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-2">Journey</p>
            <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Legacy Timeline
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((item, i) => (
                <div key={item.year} className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm inline-block w-full">
                      <div className="text-[#e8612c] font-black text-2xl mb-1">{item.year}</div>
                      <div className="text-[#1c2535] font-bold text-lg mb-2">{item.title}</div>
                      <div className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#e8612c] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Entity Focus */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-2">Current Operations</p>
              <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
                McRAYGOR Mechanicals Infrastructure
              </h2>
            </div>
            <div className="bg-gradient-to-br from-[#1c2535] to-[#2a3f5f] rounded-2xl p-8 md:p-10 text-white shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e8612c] flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Independent Entity Since 2019</h3>
                  <p className="text-gray-300 text-[15px] leading-relaxed">
                    The current legal and operational entity is McRAYGOR Mechanicals Infrastructure (sole proprietorship), active since 2019, with a clear focus on reliability, safety, and technology-led mechanized sanitation.
                  </p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6 mt-6">
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  We maintain a clear distinction between our legacy and our current independent operational structure. The brand name has been retained deliberately due to strong legacy recall, existing customer trust, and long-standing presence in municipal and export markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
