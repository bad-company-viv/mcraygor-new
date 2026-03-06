import { Heart, Users, Leaf, Shield } from "lucide-react";

const initiatives = [
  {
    icon: Shield,
    title: "Eliminating Manual Scavenging",
    desc: "CSR communication is anchored to one core objective: replacing hazardous manual sewer cleaning with mechanized operations.",
    impact: "Core Commitment",
    color: "#e8612c",
  },
  {
    icon: Users,
    title: "Worker Safety & Dignity",
    desc: "Focus on safe operating practices, respect for sanitation workers, and dignity-first implementation in field environments.",
    impact: "SRS Priority",
    color: "#1a5c3a",
  },
  {
    icon: Leaf,
    title: "Responsible Public Outcomes",
    desc: "CSR narrative supports cleaner infrastructure outcomes with practical technology use in sanitation operations.",
    impact: "Impact Focus",
    color: "#1c2535",
  },
  {
    icon: Heart,
    title: "Collaboration Framework",
    desc: "Work in collaboration with government bodies, NGOs, and social initiatives where sanitation upliftment is required.",
    impact: "Collaborative",
    color: "#e8612c",
  },
];

export function CSR() {
  return (
    <>
      <section className="bg-[#1a5c3a] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Responsibility</p>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            CSR Initiatives
          </h1>
          <p className="text-green-100/80 max-w-2xl text-lg leading-relaxed">
            CSR communication is structured to be responsible, respectful, and impact-driven, with emphasis on safety and dignity in sanitation work.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {initiatives.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <item.icon size={24} />
                </div>
                <h3 className="text-[#1c2535] font-bold text-xl mb-3" style={{ lineHeight: 1.3 }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <span
                  className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.impact}
                </span>
              </div>
            ))}
          </div>

          {/* Statement */}
          <div className="bg-[#1a5c3a] rounded-2xl p-10 text-center text-white">
            <Heart size={40} className="mx-auto mb-4 text-green-300" />
            <h2 className="text-white font-bold text-2xl mb-4" style={{ lineHeight: 1.3 }}>
              \"Mechanization of cleaning operations is central to safer sanitation outcomes.\"
            </h2>
            <p className="text-green-100/80 max-w-xl mx-auto text-sm leading-relaxed">
              This page intentionally keeps the tone non-promotional and outcome-focused, in line with the SRS CSR guidance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
