import { Link } from "react-router";
import { ArrowRight, Award, Globe, Wrench, Users, Factory, Shield, Target, Zap } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#e8612c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1a5c3a] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#e8612c]/10 text-[#e8612c] text-sm font-bold px-6 py-3 rounded-full mb-6 uppercase tracking-wider">
            Who We Are
          </div>
          <h2 className="text-[#1c2535] mb-6 max-w-4xl mx-auto" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1 }}>
            Manufacturing Excellence.{" "}
            <span className="text-[#1a5c3a] block sm:inline">Global Reliability.</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Leading Indian manufacturer of specialized waste handling and industrial cleaning equipment, 
            serving municipal and industrial sectors across 45+ countries with over two decades of engineering excellence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mb-20">
          {/* Left: Company Story */}
          <div className="xl:col-span-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#e8612c] to-[#d4531f] rounded-2xl flex items-center justify-center mb-6">
              <Factory size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1c2535] mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              With over two decades of engineering expertise, we design, manufacture, and export 
              high-performance vacuum trucks, road sweepers, sewer cleaning machines, and specialized 
              industrial equipment built to meet the most demanding international standards.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#e8612c] hover:bg-[#d4531f] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:gap-3 shadow-lg"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Features Grid */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manufacturing Excellence */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1a5c3a]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1a5c3a] to-[#166534] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench size={28} className="text-white" />
              </div>
              <h3 className="text-[#1c2535] font-bold text-xl mb-4">Manufacturing Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art production facilities with advanced CNC machining, robotic welding, and comprehensive quality testing protocols.
              </p>
            </div>

            {/* Global Reach */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#e8612c]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#e8612c] to-[#d4531f] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-[#1c2535] font-bold text-xl mb-4">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Products engineered to meet international standards and specifications for reliable deployment across diverse global markets.
              </p>
            </div>

            {/* Innovation Focus */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#7c3aed]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-[#1c2535] font-bold text-xl mb-4">Innovation Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous R&D investment in cutting-edge technologies and sustainable solutions for next-generation equipment.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#059669]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-[#1c2535] font-bold text-xl mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous quality control processes and dedicated after-sales support ensuring maximum equipment reliability and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-[#1c2535] via-[#1e293b] to-[#1c2535] rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-white text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-gray-300 text-lg">Delivering excellence across the globe with measurable results</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#e8612c] to-[#d4531f] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-[#e8612c] to-[#d4531f] bg-clip-text text-transparent">25+</div>
              <div className="text-gray-300 font-medium">Years of Excellence</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a5c3a] to-[#166534] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-[#1a5c3a] to-[#166534] bg-clip-text text-transparent">45+</div>
              <div className="text-gray-300 font-medium">Countries Served</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent">500+</div>
              <div className="text-gray-300 font-medium">Projects Delivered</div>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-[#059669] to-[#047857] bg-clip-text text-transparent">100%</div>
              <div className="text-gray-300 font-medium">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}