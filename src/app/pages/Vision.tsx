import { Eye, Target, Lightbulb } from "lucide-react";
import { SEO } from "../components/SEO";

export function Vision() {
  return (
    <>
      <SEO pageKey="vision" />
      
      {/* Hero Section */}
      <section className="bg-[#1c2535] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 
            className="text-white mb-2" 
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            Vision & Mission
          </h1>
          <div className="w-24 h-1 bg-[#1a5c3a] mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Our commitment to cleaner cities, safer sanitation practices, and mechanized infrastructure aligned with Make in India.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Vision",
                content: "Cleaner cities and safer sanitation practices enabled through mechanized infrastructure. We envision a future where manual scavenging is completely eliminated through technology-driven solutions, ensuring dignity and safety for all sanitation workers.",
                color: "#1a5c3a",
              },
              {
                icon: Target,
                title: "Mission",
                content: "Deliver dependable municipal and industrial waste handling solutions with practical, field-ready engineering. Our mission is to provide robust, reliable equipment that meets the demanding requirements of government bodies, municipalities, and industrial clients across India and globally.",
                color: "#e8612c",
              },
              {
                icon: Lightbulb,
                title: "Alignment",
                content: "Support Make in India, indigenous manufacturing, and sustainable infrastructure development. We are committed to contributing to India's self-reliance in critical infrastructure equipment while maintaining international quality standards and environmental responsibility.",
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
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Vision Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Long-term Vision</p>
              <h2 className="text-[#1c2535] mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
                Transforming Sanitation Infrastructure
              </h2>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>
                  Our long-term vision extends beyond manufacturing equipment. We aim to be instrumental in transforming India's sanitation infrastructure through:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span><strong>Mechanization replacing manual scavenging:</strong> Complete elimination of hazardous manual cleaning practices through advanced machinery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span><strong>Cleaner cities:</strong> Supporting municipal bodies in maintaining hygienic urban environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span><strong>Safer sanitation practices:</strong> Ensuring worker safety and dignity through technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span><strong>Sustainable infrastructure:</strong> Building environmentally responsible solutions for waste management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/manufacturing-facility-branded.png"
                alt="McRAYGOR Manufacturing Facility"
                className="rounded-2xl w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Make in India Alignment */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-2">National Alignment</p>
            <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Supporting Make in India
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-[#1c2535] font-bold text-lg mb-3">Indigenous Manufacturing</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                All our equipment is designed and manufactured in India, contributing to the nation's self-reliance in critical infrastructure machinery. We source components locally wherever possible and maintain complete manufacturing control.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-[#1c2535] font-bold text-lg mb-3">Sustainable Development</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Our commitment to sustainable infrastructure development aligns with India's environmental goals. We focus on energy-efficient designs, reduced emissions, and environmentally responsible waste handling solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
