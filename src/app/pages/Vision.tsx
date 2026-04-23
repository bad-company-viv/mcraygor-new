import { Eye, Target, Lightbulb, ShieldCheck, Globe, Wrench, Factory } from "lucide-react";
import { SEO } from "../components/SEO";

export function Vision() {
  return (
    <div className="bg-white">
      <SEO pageKey="vision" />
      
      {/* Premium Hero Section */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        {/* Background Sophistication */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#1a5c3a]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#e8612c]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative text-center">
          <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#e8612c]" />
            <span className="text-xs font-bold text-[#1c2535] uppercase tracking-[0.2em]">Our Purpose</span>
          </div>
          
          <h1 className="text-[#1c2535] font-black leading-[1.1] tracking-tight mb-10" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a5c3a] to-[#166534]">Mission.</span>
          </h1>
          
          <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto mb-16">
            Our commitment to cleaner cities, safer sanitation practices, and mechanized infrastructure aligned with national growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Vision",
                content: "Cleaner cities and safer sanitation practices enabled through mechanized infrastructure. We envision a future where manual scavenging is completely eliminated through technology-driven solutions.",
                color: "#1a5c3a",
              },
              {
                icon: Target,
                title: "Mission",
                content: "Deliver dependable municipal and industrial waste handling solutions with practical, field-ready engineering that meets international standards and environmental responsibility.",
                color: "#e8612c",
              },
              {
                icon: Lightbulb,
                title: "Alignment",
                content: "Support Make in India, indigenous manufacturing, and sustainable infrastructure development, contributing to India's self-reliance in critical machinery.",
                color: "#1c2535",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50/50 backdrop-blur-sm rounded-[2.5rem] p-10 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}10`, color: item.color }}
                >
                  <item.icon size={28} />
                </div>
                <h3 className="text-[#1c2535] font-black text-2xl mb-4">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section: Transforming Sanitation */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="bg-[#1c2535] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img src="/images/manufacturing-facility-branded.png" alt="" className="w-full h-full object-cover grayscale" />
            </div>
            
            <div className="relative z-10 lg:w-3/5">
              <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#e8612c]" />
                <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">Long-term Vision</span>
              </div>
              <h2 className="text-white font-black leading-[1.2] mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Transforming India's <br />
                Sanitation <span className="text-[#1a5c3a]">Infrastructure.</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-8 text-white/70">
                {[
                  { title: "Manual Scavenging Elimination", desc: "Advanced machinery replacing hazardous manual practices." },
                  { title: "Safer Sanitation", desc: "Ensuring worker safety and dignity through mechanized tech." },
                  { title: "Cleaner Urban Life", desc: "Supporting municipal bodies in maintaining hygienic cities." },
                  { title: "Sustainable Waste", desc: "Building environmentally responsible solutions for management." }
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                       <span className="text-[#e8612c] text-2xl">+</span> {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Alignment */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full mb-10">
            <span className="w-2 h-2 rounded-full bg-[#1a5c3a]" />
            <span className="text-xs font-bold text-[#1c2535] uppercase tracking-[0.2em]">National Alignment</span>
          </div>
          <h2 className="text-[#1c2535] font-black mb-16" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
            Supporting Make in India.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="p-12 bg-gray-50/50 border border-gray-100 rounded-[3rem] text-center hover:bg-white hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Factory size={32} className="text-[#e8612c]" />
              </div>
              <h3 className="text-[#1c2535] font-black text-2xl mb-6">Indigenous Manufacturing</h3>
              <p className="text-gray-500 leading-relaxed">
                All our equipment is designed and manufactured in India, contributing to the nation's self-reliance in critical infrastructure machinery with 100% manufacturing control.
              </p>
            </div>

            <div className="p-12 bg-gray-50/50 border border-gray-100 rounded-[3rem] text-center hover:bg-white hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Globe size={32} className="text-[#1a5c3a]" />
              </div>
              <h3 className="text-[#1c2535] font-black text-2xl mb-6">Sustainable Development</h3>
              <p className="text-gray-500 leading-relaxed">
                Commitment to sustainable infrastructure aligned with national goals, focusing on energy-efficient designs and environmentally responsible solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
