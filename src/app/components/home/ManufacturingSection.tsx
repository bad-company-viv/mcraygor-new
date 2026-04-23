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
    <section className="py-16 md:py-20 bg-[#1c2535] relative overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Manufacturing Expertise at Scale
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
              McRAYGOR's manufacturing backbone is designed for long lifecycle performance. Every machine is engineered for harsh operating environments with practical serviceability and reliable output.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {capabilities.map((cap) => (
                <div key={cap.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <cap.icon size={24} className="text-[#e8612c] mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-2" style={{ lineHeight: 1.4 }}>{cap.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/manufacturing-facility-branded.png"
              alt="McRAYGOR Advanced Manufacturing Facility"
              className="w-full object-cover h-[320px] sm:h-[420px] md:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
