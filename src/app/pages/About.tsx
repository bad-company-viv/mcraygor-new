import { Eye, Target, Lightbulb, ShieldCheck } from "lucide-react";

const milestones = [
  {
    year: "2007",
    title: "Brand Presence Established",
    desc: "McRAYGOR brand gains market recall among municipal bodies, contractors, and export buyers.",
  },
  {
    year: "2019",
    title: "Current Entity Operations",
    desc: "Business operates as McRAYGOR Mechanicals Infrastructure (sole proprietorship), independent from the earlier private limited setup.",
  },
  {
    year: "Present",
    title: "Technology-Led Positioning",
    desc: "Focus on premium, technology-driven waste handling systems aligned to cleaner cities and safer sanitation practices.",
  },
];

export function About() {
  return (
    <>
      <section className="bg-[#1c2535] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            About McRAYGOR Mechanicals Infrastructure
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Manufacturer of municipal and industrial waste handling equipment, with brand legacy in market since 2007 and current operations under McRAYGOR Mechanicals Infrastructure since 2019.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Background & Context</p>
              <h2 className="text-[#1c2535] mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
                Legacy Brand, Current Independent Entity
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The McRAYGOR brand has long-standing visibility across municipal and industrial sectors. We maintain a clear distinction between our legacy and our current independent operational structure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The current legal and operational entity is McRAYGOR Mechanicals Infrastructure (sole proprietorship), active since 2019, with a clear focus on reliability, safety, and technology-led mechanized sanitation.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[["2007", "Brand Recall"], ["2019", "Current Operations"], ["25+", "Legacy Focus"]].map(([val, label]) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-[#e8612c] font-black mb-1" style={{ fontSize: "1.8rem", lineHeight: 1 }}>{val}</div>
                    <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1764115424793-063c2a8b61f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                alt="McRAYGOR Operations"
                className="rounded-2xl w-full h-[420px] object-cover shadow-xl"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={32} className="text-[#e8612c] flex-shrink-0" />
                  <div>
                    <div className="text-[#1c2535] font-bold text-sm">Operationally Independent Since 2019</div>
                    <div className="text-gray-500 text-xs">Current entity focus: modern engineering and safer sanitation outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-2">Direction</p>
            <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Vision & Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Vision",
                content: "Cleaner cities and safer sanitation practices enabled through mechanized infrastructure.",
                color: "#1a5c3a",
              },
              {
                icon: Target,
                title: "Mission",
                content: "Deliver dependable municipal and industrial waste handling solutions with practical, field-ready engineering.",
                color: "#e8612c",
              },
              {
                icon: Lightbulb,
                title: "Alignment",
                content: "Support Make in India, indigenous manufacturing, and sustainable infrastructure development.",
                color: "#1c2535",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <item.icon size={24} />
                </div>
                <h3 className="text-[#1c2535] font-bold text-xl mb-3" style={{ lineHeight: 1.3 }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="legacy" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-2">Timeline</p>
            <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Legacy Snapshot
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
                      <div className="text-[#1c2535] font-bold mb-2">{item.title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
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
    </>
  );
}
