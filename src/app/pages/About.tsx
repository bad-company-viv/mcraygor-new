import { ShieldCheck, Building2, Users, Globe, Factory, Target, Award } from "lucide-react";
import { SEO } from "../components/SEO";

export function About() {
  return (
    <div className="bg-white">
      <SEO pageKey="about" />
      
      {/* Premium Hero Section */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        {/* Background Sophistication */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#e8612c]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#1a5c3a]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative text-center">
          <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#1a5c3a]" />
            <span className="text-xs font-bold text-[#1c2535] uppercase tracking-[0.2em]">Our Legacy</span>
          </div>
          
          <h1 className="text-[#1c2535] font-black leading-[1.1] tracking-tight mb-10" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Engineering Reliability. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a5c3a] to-[#166534]">Defining Infrastructure.</span>
          </h1>
          
          <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto mb-16">
            Manufacturer of municipal and industrial waste handling equipment, with a brand legacy serving global markets since 2007.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { val: "2007", label: "Brand Established", icon: Award },
              { val: "2019", label: "Current Operations", icon: Factory },
              { val: "25+", label: "Years Legacy", icon: Target }
            ].map((item) => (
              <div key={item.label} className="bg-gray-50/50 backdrop-blur-sm rounded-[2.5rem] p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <item.icon size={24} className="text-[#e8612c]" />
                </div>
                <div className="text-[#1c2535] font-black text-4xl mb-1">{item.val}</div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#e8612c]/10 rounded-full blur-3xl" />
              <img
                src="/images/manufacturing-facility-branded.png"
                alt="McRAYGOR Advanced Manufacturing Operations"
                className="rounded-[3rem] w-full h-[400px] lg:h-[600px] object-cover shadow-2xl relative z-10"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#e8612c]" />
                <span className="text-xs font-bold text-[#1c2535] uppercase tracking-[0.2em]">Who We Are</span>
              </div>
              <h2 className="text-[#1c2535] font-black leading-[1.2] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Legacy Brand, <br />
                <span className="text-[#1a5c3a]">Independent Force.</span>
              </h2>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-10">
                <p>
                  The McRAYGOR brand has long-standing visibility across municipal and industrial sectors. We maintain a clear distinction between our legacy and our current independent operational structure.
                </p>
                <p>
                  The current legal and operational entity is <strong>McRAYGOR Mechanicals Infrastructure</strong>, active since 2019, with a clear focus on reliability, safety, and technology-led mechanized sanitation.
                </p>
              </div>
              
              <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <h4 className="text-[#1c2535] font-bold text-xl mb-4">Our Commitment</h4>
                <p className="text-gray-500 leading-relaxed">
                  Building trust through quality. We are instrumental in transforming India's sanitation infrastructure through advanced mechanization and worker safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Bento Grid */}
      <section className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <p className="text-[#e8612c] text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Expertise</p>
            <h2 className="text-[#1c2535] font-black" style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}>
              Specialized Infrastructure Solutions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Municipal Equipment",
                desc: "Comprehensive waste handling solutions for municipal corporations and government bodies",
                color: "#1a5c3a"
              },
              {
                icon: Globe,
                title: "Industrial Solutions",
                desc: "Specialized equipment for industrial waste management and facility maintenance",
                color: "#e8612c"
              },
              {
                icon: Users,
                title: "Custom Engineering",
                desc: "Tailored solutions designed to meet specific operational requirements",
                color: "#1c2535"
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Rigorous testing and quality control ensuring reliable field performance",
                color: "#6b7280"
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}10`, color: item.color }}
                >
                  <item.icon size={28} />
                </div>
                <h3 className="text-[#1c2535] font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="bg-[#1c2535] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#e8612c]/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-white font-black mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Core Focus Areas
              </h2>
              
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  { title: "Engineering Excellence", desc: "Continuous innovation in product design and manufacturing processes." },
                  { title: "Customer Trust", desc: "Building long-term relationships through reliable equipment and responsive service." },
                  { title: "Social Impact", desc: "Contributing to cleaner cities and safer sanitation practices through mechanization." },
                  { title: "Make in India", desc: "Supporting indigenous manufacturing and sustainable infrastructure development." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a5c3a] flex items-center justify-center text-white font-bold text-xs">✓</div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
