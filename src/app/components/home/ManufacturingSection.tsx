import { CheckCircle2, Award, Cpu, Wrench } from "lucide-react";

const capabilities = [
  {
    icon: Wrench,
    title: "In-House Fabrication",
    description: "In-house manufacturing workflows built for durability, repeatability, and high uptime in field conditions.",
  },
  {
    icon: CheckCircle2,
    title: "Quality-Controlled Build Process",
    description: "Structured inspection and validation checkpoints before dispatch to customer projects.",
  },
  {
    icon: Cpu,
    title: "R&D-Integrated Engineering",
    description: "Design and manufacturing teams collaborate on continuous product improvement and practical customization.",
  },
  {
    icon: Award,
    title: "Field-Tested Reliability",
    description: "Machines are tested for actual municipal and industrial use cases before release.",
  },
];

export function ManufacturingSection() {
  return (
    <section className="py-20 bg-[#1c2535] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Built to Last</p>
            <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Manufacturing Expertise at Scale
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              McRAYGOR's manufacturing backbone is designed for long lifecycle performance. Every machine is engineered for harsh operating environments with practical serviceability and reliable output.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {capabilities.map((cap) => (
                <div key={cap.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <cap.icon size={24} className="text-[#e8612c] mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-2" style={{ lineHeight: 1.4 }}>{cap.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1673201159941-68fcdbbb4fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
              alt="McRAYGOR Manufacturing Facility"
              className="rounded-2xl w-full object-cover h-[480px] shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#e8612c] text-white rounded-xl p-5 shadow-xl">
              <div className="text-3xl font-black mb-0.5">In-House</div>
              <div className="text-sm font-semibold opacity-90">Manufacturing</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#1a5c3a] text-white rounded-xl p-5 shadow-xl">
              <div className="text-3xl font-black mb-0.5">Real</div>
              <div className="text-sm font-semibold opacity-90">Field Validation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
