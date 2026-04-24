import { ShieldCheck, Building2, Users, Globe, Factory, Target, Award, Eye, Lightbulb, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { Link } from "react-router";

const legacyMilestones = [
  {
    year: "2007",
    title: "Brand Presence Established",
    desc: "The McRAYGOR brand built strong recall among municipal bodies, contractors and industrial buyers through dependable waste handling equipment.",
  },
  {
    year: "2010-2018",
    title: "Market Expansion",
    desc: "The brand footprint expanded across government, private sector and export-oriented assignments with a growing project portfolio.",
  },
  {
    year: "2019",
    title: "Independent Operations",
    desc: "McRAYGOR Mechanicals Infrastructure continued as the current legal and operational entity with a sharper focus on reliability, safety and mechanized sanitation.",
  },
  {
    year: "Present",
    title: "Technology-Led Growth",
    desc: "The business continues to strengthen product quality, customization and support for cleaner cities and safer sanitation practices.",
  },
];

const visionBlocks = [
  {
    icon: Eye,
    title: "Vision",
    content: "Cleaner cities and safer sanitation practices enabled through mechanized infrastructure, with the long-term aim of eliminating hazardous manual intervention.",
    color: "#1a5c3a",
  },
  {
    icon: Target,
    title: "Mission",
    content: "Deliver dependable municipal and industrial waste handling solutions with practical, field-ready engineering and responsive support.",
    color: "#e8612c",
  },
  {
    icon: Lightbulb,
    title: "Alignment",
    content: "Support Make in India, indigenous manufacturing and sustainable infrastructure development through locally engineered equipment.",
    color: "#1c2535",
  },
];

export function About() {
  return (
    <div className="bg-white font-sans">
      <SEO pageKey="about" />
      
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image for Mobile/Desktop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero/hero1.jpeg"
            alt="McRAYGOR Advanced Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1c2535]/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#1c2535] lg:via-[#1c2535]/80 lg:to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-20 lg:py-24 relative z-10">
          <div className="max-w-[650px]">
            <div className="inline-block bg-[#e8612c] px-6 py-2 mb-8 md:mb-10">
              <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Our Legacy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8 md:mb-12 text-white">
              Engineering <br />
              <span className="text-[#e8612c]">Reliability</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 md:text-gray-400 leading-relaxed mb-10 md:mb-12 font-medium">
              A heritage of industrial strength. A future defined by precision engineering. 
              McRAYGOR® has been the benchmark for specialized waste handling since 2007.
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#e8612c]">2007</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Established</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#e8612c]">25+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Years Legacy</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#e8612c]">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Built in India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Narrative: Alternating Layout */}
      <section className="bg-white">
        {/* Story Block 1 */}
        <div className="flex flex-col md:flex-row-reverse items-stretch min-h-[700px]">
          <div className="w-full md:w-[50%] relative overflow-hidden min-h-[400px]">
            <img
              src="/images/manufacturing-facility-branded.png"
              alt="McRAYGOR Operations"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
            <div className="max-w-[550px]">
              <div className="text-[#e8612c] text-sm font-black uppercase tracking-[0.2em] mb-6">Who We Are</div>
              <h2 className="text-[#1c2535] text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1] mb-8">
                Legacy Brand, <br />
                <span className="text-[#1a5c3a]">Independent Force</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  The McRAYGOR brand has long-standing visibility across municipal and industrial sectors. 
                  We maintain a clear distinction between our legacy and our current independent operational structure.
                </p>
                <p>
                  Our focus is on <strong>Mechanized Infrastructure</strong>, providing solutions that eliminate 
                  hazardous manual intervention while maximizing operational safety and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Block 2 */}
        <div className="flex flex-col md:flex-row items-stretch min-h-[700px] bg-[#f8fafc]">
          <div className="w-full md:w-[50%] relative overflow-hidden min-h-[400px]">
            <img
              src="/hero/hero2.png"
              alt="Infrastructure Impact"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
            <div className="max-w-[550px]">
              <div className="text-[#e8612c] text-sm font-black uppercase tracking-[0.2em] mb-6">Our Commitment</div>
              <h2 className="text-[#1c2535] text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1] mb-8">
                Building Trust <br />
                <span className="text-[#1a5c3a]">Through Quality</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The current legal and operational entity is <strong>McRAYGOR Mechanicals Infrastructure</strong>, 
                active since 2019. We are instrumental in transforming India's sanitation infrastructure 
                through advanced mechanization and worker safety protocols.
              </p>
              <div className="bg-[#1c2535] p-8 text-white">
                <p className="italic text-gray-400 font-medium">
                  "Our engineering is built for the field. We don't just manufacture machines; 
                  we build the backbone of cleaner, safer cities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission: High Contrast Bar */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {visionBlocks.map((item, index) => (
              <div 
                key={item.title} 
                className={`p-12 border-b md:border-b-0 ${index !== visionBlocks.length - 1 ? "md:border-r border-gray-100" : ""} hover:bg-gray-50 transition-colors group`}
              >
                <div 
                  className="w-14 h-14 flex items-center justify-center mb-8 bg-black text-white group-hover:bg-[#e8612c] transition-colors"
                >
                  <item.icon size={24} />
                </div>
                <h3 className="text-[#1c2535] font-black uppercase tracking-tighter text-3xl mb-6">{item.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section: Sharp Grid */}
      <section className="py-24 md:py-32 bg-[#1c2535]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="text-[#e8612c] text-sm font-black uppercase tracking-[0.2em] mb-6">Our Expertise</div>
              <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[1]">
                Specialized <br /> Infrastructure <br /> Solutions
              </h2>
            </div>
            <div className="text-gray-400 text-lg max-w-sm mb-2">
              From municipal corridors to industrial facilities, we deliver high-performance equipment 
              built for the nation's most demanding environments.
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              {
                icon: Building2,
                title: "Municipal",
                desc: "Comprehensive waste handling solutions for government bodies.",
                color: "#e8612c"
              },
              {
                icon: Globe,
                title: "Industrial",
                desc: "Specialized equipment for heavy-duty facility maintenance.",
                color: "#e8612c"
              },
              {
                icon: Users,
                title: "Customized",
                desc: "Tailored engineering for specific operational requirements.",
                color: "#e8612c"
              },
              {
                icon: ShieldCheck,
                title: "Quality",
                desc: "Rigorous testing ensuring reliable field performance.",
                color: "#e8612c"
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1c2535] p-12 hover:bg-[#1a2e44] transition-all group">
                <item.icon size={32} className="text-[#e8612c] mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-2xl uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-24">
            <h2 className="text-[#1c2535] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              The <span className="text-[#e8612c]">Timeline</span>
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[45px] left-0 w-full h-1 bg-gray-100" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
              {legacyMilestones.map((item, index) => (
                <div key={item.year} className="relative pt-16">
                  {/* Marker */}
                  <div className="absolute top-0 left-0 lg:left-0 w-12 h-12 bg-[#1c2535] text-white flex items-center justify-center font-black text-xs z-10">
                    0{index + 1}
                  </div>
                  <div className="text-[#e8612c] font-black text-4xl mb-4 tracking-tighter uppercase">{item.year}</div>
                  <h3 className="text-[#1c2535] font-black text-xl mb-4 uppercase leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Focus Area */}
      <section className="bg-black py-24 md:py-32 text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-[#e8612c] text-sm font-black uppercase tracking-[0.2em] mb-8">Core Focus</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
                Engineering <br /> The <span className="text-[#e8612c]">Future</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed max-w-lg">
                We are committed to delivering engineering excellence that supports the 'Make in India' 
                initiative while transforming urban sanitation landscapes.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Engineering Excellence", desc: "Innovation in product design and manufacturing." },
                { title: "Customer Trust", desc: "Reliable equipment and responsive service." },
                { title: "Social Impact", desc: "Cleaner cities and safer sanitation practices." },
                { title: "Make in India", desc: "Sustainable infrastructure development." }
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 p-8 hover:bg-[#e8612c] transition-all group">
                  <h4 className="text-white font-black uppercase tracking-tighter text-xl mb-4 group-hover:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 group-hover:text-white/80 transition-colors text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

