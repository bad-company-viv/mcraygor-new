import { Cpu, FlaskConical, Award, Zap, CheckCircle2, Microscope } from "lucide-react";
import { SEO } from "../components/SEO";

const rdAreas = [
  {
    icon: FlaskConical,
    title: "Product Validation",
    desc: "Each design undergoes rigorous stress testing and field-oriented validation to ensure maximum reliability in diverse operating environments.",
    impact: "Precision",
    color: "#e8612c",
  },
  {
    icon: Cpu,
    title: "Continuous Innovation",
    desc: "Our engineering team continuously refines performance, maintainability, and safety protocols across all product lines.",
    impact: "Uptime",
    color: "#1a5c3a",
  },
  {
    icon: Award,
    title: "Custom Engineering",
    desc: "We offer use-case-specific customizations, allowing municipal and industrial clients to configure equipment for their unique needs.",
    impact: "Scalability",
    color: "#1c2535",
  },
  {
    icon: Zap,
    title: "Pioneering Tech",
    desc: "From smart telemetry to advanced structural improvements, we hold multiple design benchmarks in the mechanized sanitation industry.",
    impact: "Legacy",
    color: "#e8612c",
  },
];

const rdStats = [
  { label: "Engineering Setup", value: "In-House", desc: "End-to-end R&D Control" },
  { label: "Design Refinement", value: "Agi-Tech", desc: "Rapid Multi-Phase Prototyping" },
];

export function RD() {
  return (
    <div className="bg-white min-h-screen">
      <SEO pageKey="rd" />
      {/* Engineering Hero Section */}
      <section className="relative h-[58vh] min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/rd-hero.png"
            alt="McRAYGOR R&D"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c2535]/95 via-[#1c2535]/80 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#e8612c]/20 border border-[#e8612c]/30 text-[#e8612c] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Microscope size={14} className="animate-pulse" />
              Research & Development
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1 }}>
              Precision <br />
              <span className="text-[#e8612c]">Engineering</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
              At McRAYGOR, R&D isn't just about laboratory tests—it's about field-led innovation that drives operational uptime and worker safety.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="py-16 md:py-24 relative bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#1c2535] text-2xl sm:text-3xl md:text-5xl font-black mb-4 leading-tight">Driving the Future of Sanitation Tech</h2>
              <p className="text-gray-600 text-base md:text-lg">Our dedicated team focuses on practical, real-world engineering outputs.</p>
            </div>
            <div className="w-20 h-2 bg-[#e8612c] rounded-full hidden md:block mb-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {rdAreas.map((area) => (
              <div key={area.title} className="group bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 shrink-0"
                  style={{ backgroundColor: `${area.color}15`, color: area.color }}
                >
                  <area.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1c2535] font-black text-xl mb-4 leading-tight">{area.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{area.desc}</p>
                </div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl self-start"
                  style={{ backgroundColor: `${area.color}10`, color: area.color }}
                >
                  <CheckCircle2 size={14} />
                  {area.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Validation Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/rd-testing.png"
                  alt="Product Validation & Testing"
                  className="w-full h-[320px] sm:h-[420px] md:h-[550px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#e8612c]/10 rounded-full blur-3xl -z-0" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-[#1c2535] text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight">
                Rigorous Validation <br />
                <span className="text-[#e8612c]">Real-World Results</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                Every McRAYGOR machine is subjected to stability, pressure, and stress tests that simulate the toughest municipal and industrial environments. This commitment to testing ensures that our equipment not only performs but lasts.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {rdStats.map((stat) => (
                  <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-3xl font-black text-[#1c2535] mb-1">{stat.value}</div>
                    <div className="text-sm font-bold text-[#e8612c] uppercase tracking-wider mb-2">{stat.label}</div>
                    <div className="text-xs text-gray-400 font-medium">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 md:py-24 bg-[#1c2535] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e8612c]/5 skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 text-center">
          <Award size={52} className="mx-auto mb-8 text-[#e8612c]" />
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-black mb-6">Built for Your Specific Needs</h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Our internal R&D capabilities allow us to customize every product to meet the unique challenges of your local infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white text-sm font-semibold backdrop-blur-sm">
              Custom Tanker Sizes
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white text-sm font-semibold backdrop-blur-sm">
              Variable Pump Pressures
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white text-sm font-semibold backdrop-blur-sm">
              Smart Telemetry Options
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
