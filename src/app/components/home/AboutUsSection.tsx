import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Globe, Factory, Shield, Zap, Wrench } from "lucide-react";

const storyImages = [
  "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-1.jpg",
  "/images/products/bucket-type-sewer-cleaning-machine/bucket-type-sewer-cleaning-machine-2.jpg",
  "/images/products/super-sucker-machine/13598b45-a0d3-4ee2-a999-15bf1c05f413.jpg",
];

export function AboutUsSection() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % storyImages.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Sophistication */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#e8612c]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#1a5c3a]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-24 md:mb-32">
          <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full mb-10">
            <span className="w-2 h-2 rounded-full bg-[#1a5c3a]" />
            <span className="text-xs font-bold text-[#1c2535] uppercase tracking-[0.2em]">Who We Are</span>
          </div>

          <div className="w-full flex flex-col items-center gap-12 mb-16">
            <img src="/logo.jpg" alt="McRAYGOR" className="h-24 md:h-36 w-auto object-contain" />
            
            <h2 className="text-[#1c2535] font-black leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Manufacturing Excellence. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a5c3a] to-[#166534]">Global Reliability.</span>
            </h2>

            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl">
              Leading Indian manufacturer of specialized waste handling and industrial cleaning equipment, 
              serving municipal and industrial sectors across 45+ countries.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="bg-gray-50 border border-gray-100 px-10 py-8 rounded-[2rem] text-center min-w-[240px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#e8612c] font-black text-5xl mb-2">25+</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest whitespace-nowrap">Years of Trust</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 px-10 py-8 rounded-[2rem] text-center min-w-[240px] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#1a5c3a] font-black text-5xl mb-2">45+</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-widest whitespace-nowrap">Global Markets</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars: Restored Full Background Story Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-[#1c2535] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group shadow-2xl min-h-[600px] flex flex-col justify-end">
            {/* Full Image Background w/ Intelligent Masking */}
            <div className="absolute inset-0 pointer-events-none transition-all duration-1000">
              {storyImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImg ? 'opacity-40' : 'opacity-0'}`}
                >
                  <img 
                    src={img} 
                    alt="McRAYGOR Showcase" 
                    className={`w-full h-full object-cover object-center md:object-right transition-transform duration-[5000ms] ease-linear ${index === currentImg ? 'scale-105' : 'scale-100'}`} 
                  />
                </div>
              ))}
              {/* Complex Gradient Mask: Dark on left for text, fades to show product on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c2535] via-[#1c2535]/80 to-transparent opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c2535] via-transparent to-transparent opacity-60" />
            </div>

            <div className="relative z-10 w-full max-w-xl">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-10 border border-white/10 shadow-lg">
                <Factory size={32} className="text-[#e8612c]" />
              </div>
              <h3 className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tight">Our Story</h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-10 font-medium drop-shadow-sm">
                With over two decades of engineering expertise, we design, manufacture, and export 
                high-performance vacuum Trucks, road sweepers, and specialized industrial equipment 
                built to meet the most demanding international standards.
              </p>
              <Link
                to="/about"
                className="group/btn inline-flex items-center gap-3 bg-white text-[#1c2535] px-8 py-4 rounded-2xl font-bold transition-all hover:bg-[#e8612c] hover:text-white shadow-xl hover:shadow-[#e8612c]/20"
              >
                Learn More About Us <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <div className="bg-[#f8fafc] border border-gray-100 rounded-[2.5rem] p-8 group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl flex items-center">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-gray-50">
                  <Wrench size={24} className="text-[#1a5c3a]" />
                </div>
                <div>
                  <h4 className="text-[#1c2535] font-bold text-xl mb-3">Manufacturing Excellence</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    State-of-the-art production facilities with advanced CNC machining and robotic welding.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] border border-gray-100 rounded-[2.5rem] p-8 group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl flex items-center">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-gray-50">
                  <Globe size={24} className="text-[#1a5c3a]" />
                </div>
                <div>
                  <h4 className="text-[#1c2535] font-bold text-xl mb-3">Global Reach</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Products engineered to meet international standards for reliable deployment globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] border border-gray-100 rounded-[2.5rem] p-8 group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl flex items-center">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-gray-50">
                  <Zap size={24} className="text-[#e8612c]" />
                </div>
                <div>
                  <h4 className="text-[#1c2535] font-bold text-xl mb-3">Innovation Focus</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Continuous R&D investment in cutting-edge technologies and sustainable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] border border-gray-100 rounded-[2.5rem] p-8 group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl flex items-center lg:hidden xl:flex">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-gray-50">
                  <Shield size={24} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="text-[#1c2535] font-bold text-xl mb-3">Quality Assurance</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Rigorous testing protocols ensuring 100% equipment reliability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}