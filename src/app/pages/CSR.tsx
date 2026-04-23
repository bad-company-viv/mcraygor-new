import { Heart, Users, Leaf, Shield, CheckCircle2, Handshake } from "lucide-react";
import { SEO } from "../components/SEO";

const initiatives = [
  {
    icon: Shield,
    title: "Eliminating Manual Scavenging",
    desc: "McRAYGOR's core social objective is to replace hazardous manual sewer cleaning with advanced mechanized operations, ensuring a zero-contact cleaning environment.",
    impact: "Core Commitment",
    color: "#e8612c",
  },
  {
    icon: Users,
    title: "Worker Safety & Dignity",
    desc: "We focus on uplifting the status of sanitation workers by providing them with the technology and safety gear required to perform their duties with dignity and professional security.",
    impact: "Empowerment",
    color: "#1a5c3a",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    desc: "Our technology ensures that municipal waste is handled responsibly, preventing leakages and promoting a cleaner, more sustainable urban ecosystem.",
    impact: "Sustainability",
    color: "#1c2535",
  },
  {
    icon: Handshake,
    title: "Collaborative Upliftment",
    desc: "We partner with municipal bodies and NGOs to implement training programs that transition traditional cleaning staff into skilled equipment operators.",
    impact: "Collaboration",
    color: "#e8612c",
  },
];

const impactStats = [
  { label: "Mechanical Sanitation", value: "100%", desc: "Focus on Eliminating Human Contact" },
  { label: "Worker Safety", value: "Gold", desc: "Industry Standard Protection" },
];

export function CSR() {
  return (
    <div className="bg-white min-h-screen">
      <SEO pageKey="csr" />
      {/* Immersive Hero Section */}
      <section className="relative h-[56vh] min-h-[380px] md:min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/csr-hero.png"
            alt="McRAYGOR Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a5c3a]/90 via-[#1a5c3a]/70 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/30 text-green-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Heart size={14} className="animate-pulse" />
              Responsibility & Impact
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1 }}>
              Engineering <br /> Social Change
            </h1>
            <p className="text-green-50 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
              Replacing hazardous manual intervention with mechanized dignity. Our technology is designed to protect lives and professionalize sanitation work.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1c2535] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Our Core CSR Pillars</h2>
            <div className="w-20 h-1.5 bg-[#e8612c] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {initiatives.map((item) => (
              <div key={item.title} className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shrink-0"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <item.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1c2535] font-black text-xl mb-4 leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl self-start"
                  style={{ backgroundColor: `${item.color}10`, color: item.color }}
                >
                  <CheckCircle2 size={14} />
                  {item.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Impact Highlight Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl md:rounded-[3rem] p-5 sm:p-8 md:p-16 border border-gray-100">
            <div>
              <h2 className="text-[#1c2535] text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight">
                Human-Centric <br /> Mechanization
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                We believe that technology should serve humanity. By mechanizing hazardous tasks, we are not just providing equipment; we are restoring the dignity of labor for thousands of sanitation workers.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="border-l-4 border-[#e8612c] pl-6">
                    <div className="text-4xl font-black text-[#1c2535] mb-1">{stat.value}</div>
                    <div className="text-sm font-bold text-[#e8612c] uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <img
                  src="/images/csr-impact.png"
                  alt="Sanitation Worker Dignity"
                  className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e8612c] rounded-3xl -z-0 opacity-20 animate-pulse" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1a5c3a] rounded-3xl -z-0 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="bg-[#1c2535] rounded-3xl md:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
            {/* Background subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#1a5c3a]/20 blur-[100px] rounded-full" />

            <div className="relative z-10">
              <Heart size={52} className="mx-auto mb-8 text-[#e8612c] fill-[#e8612c]/20" />
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-black max-w-4xl mx-auto mb-8 leading-tight">
                "Mechanization of cleaning operations is central to safer sanitation outcomes."
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Join us in our mission to create a safer, cleaner, and more dignified future for every sanitation worker across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
