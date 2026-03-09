import { Wrench, Package, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

const spareCategories = [
  { title: "Sewer Cleaning Rods", items: ["Flexible Rod Sets", "Joint Couplers", "Drive Connectors", "Model-wise Length Options"] },
  { title: "Jetting Nozzles", items: ["Standard Nozzles", "Desilting Nozzles", "Root-Cutting Nozzles", "Custom Flow Patterns"] },
  { title: "Jetting Hoses", items: ["High-Pressure Hoses", "Reinforced Hose Assemblies", "End Fittings", "Application-based Sizes"] },
  { title: "Wear Parts", items: ["Seals", "Bushes", "Wear Plates", "Fast-Moving Service Parts"] },
  { title: "Accessories", items: ["Couplings", "Adapters", "Tool Kits", "Maintenance Support Items"] },
];

export function Spares() {
  return (
    <>
      <SEO pageKey="spares" />
      <section className="bg-[#1c2535] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">After-Sales</p>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Spares & Service
          </h1>
          <p className="text-gray-400 max-w-xl">
            Comprehensive spare part catalog with optimized logistics and direct enquiry support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Package, title: "Dedicated Spare Categories", desc: "Structured spare catalog across sewer rods, jetting nozzles, jetting hoses, wear parts, and accessories." },
              { icon: Wrench, title: "Application-Aligned Support", desc: "Spares guidance mapped to machine model, usage condition, and operational urgency." },
              { icon: Phone, title: "Fast Enquiry Response", desc: "Direct support for spare identification, availability checks, and dispatch coordination." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#e8612c]/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={26} className="text-[#e8612c]" />
                </div>
                <h3 className="text-[#1c2535] font-bold text-lg mb-3" style={{ lineHeight: 1.3 }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-[#1c2535] px-7 py-5">
              <h2 className="text-white font-bold text-xl" style={{ lineHeight: 1.3 }}>Spare Parts Categories</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0">
              {spareCategories.map((cat, i) => (
                <div key={cat.title} className={`p-6 ${i < spareCategories.length - 1 ? "border-r border-gray-100" : ""}`}>
                  <h4 className="text-[#1a5c3a] font-bold text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">
                    {cat.title}
                  </h4>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={13} className="text-[#e8612c] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block bg-[#e8612c] hover:bg-[#d4531f] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Request Spare Parts or Service →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
