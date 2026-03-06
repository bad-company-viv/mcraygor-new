import { Cpu, FlaskConical, Award, Zap } from "lucide-react";

const rdAreas = [
  {
    icon: FlaskConical,
    title: "Product Testing & Validation",
    desc: "Each design is validated against practical operating scenarios before release, with field-oriented testing and verification.",
  },
  {
    icon: Cpu,
    title: "Continuous Product Improvement",
    desc: "R&D and manufacturing teams continuously refine performance, maintainability, and operator safety across product lines.",
  },
  {
    icon: Award,
    title: "Customization Capability",
    desc: "Products can be configured for use-case-specific requirements to support varied municipal and industrial deployment needs.",
  },
  {
    icon: Zap,
    title: "Patented Work (Where Applicable)",
    desc: "Innovation efforts include patent-oriented engineering outputs where applicable to product architecture and functional improvements.",
  },
];

export function RD() {
  return (
    <>
      <section className="bg-[#1c2535] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Innovation</p>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Research & Development
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            In-house R&D positioned as real, ongoing, and implementation-driven, with focus on testing, improvement, and practical customization.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Our Lab</p>
              <h2 className="text-[#1c2535] mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
                Dedicated Team, Continuous Validation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As per SRS direction, R&D is presented as a core in-house function with ongoing engineering work and direct relevance to product outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Workstreams cover dedicated team operations, continuous improvement, customization, testing and validation, and patent-linked outputs where applicable.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[["In-House", "R&D Setup"], ["Continuous", "Improvement"], ["Field-Led", "Validation"]].map(([val, label]) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-[#e8612c] font-black mb-1" style={{ fontSize: "1.2rem", lineHeight: 1.2 }}>{val}</div>
                    <div className="text-gray-500 text-xs font-semibold">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1673201159941-68fcdbbb4fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
              alt="R&D Lab"
              className="rounded-2xl w-full h-[380px] object-cover shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rdAreas.map((area) => (
              <div key={area.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#e8612c]/10 flex items-center justify-center mb-4">
                  <area.icon size={22} className="text-[#e8612c]" />
                </div>
                <h3 className="text-[#1c2535] font-bold text-lg mb-3" style={{ lineHeight: 1.3 }}>{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
