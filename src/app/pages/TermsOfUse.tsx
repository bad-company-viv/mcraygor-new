import { FileText, AlertCircle, Scale, ShieldAlert } from "lucide-react";
import { SEO } from "../components/SEO";

export function TermsOfUse() {
  return (
    <>
      <SEO pageKey="termsOfUse" />
      
      {/* Hero Section */}
      <section className="bg-[#1c2535] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Legal Information</p>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Terms of Use
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Please read these terms and conditions carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="space-y-12">
              <div>
                <h2 className="text-[#1c2535] text-2xl font-bold mb-6 flex items-center gap-3">
                  <FileText size={24} className="text-[#e8612c]" />
                  Agreement to Terms
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    By accessing or using the McRAYGOR Mechanicals Infrastructure website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-[#1c2535] text-xl font-bold mb-4 flex items-center gap-3">
                  <ShieldAlert size={24} className="text-[#e8612c]" />
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on this website, including but not limited to equipment designs, specifications, technical drawings, trademarks, logos, images, and text, is the property of McRAYGOR Mechanicals Infrastructure. Unauthorized use, reproduction, or distribution of these materials without explicit written consent is strictly prohibited and protected by international copyright and patent laws.
                </p>
              </div>

              <div>
                <h2 className="text-[#1c2535] text-2xl font-bold mb-6 flex items-center gap-3">
                  <AlertCircle size={24} className="text-[#e8612c]" />
                  User Conduct & Use License
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>Permission is granted to temporarily download one copy of the materials on McRAYGOR's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or copy the materials.</li>
                    <li>Use the materials for any commercial purpose, or for any public display.</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                    <li>Remove any copyright or other proprietary notations from the materials.</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-[#1c2535] text-2xl font-bold mb-6 flex items-center gap-3">
                  <Scale size={24} className="text-[#e8612c]" />
                  Governing Law
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Any claim relating to McRAYGOR Mechanicals Infrastructure's website shall be governed by the laws of the State of Haryana, India, without regard to its conflict of law provisions. All legal proceedings shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.
                </p>
              </div>

              <div className="pt-10 border-t border-gray-100">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 italic text-sm text-gray-500">
                  McRAYGOR reserves the right to revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Use.
                </div>
                <p className="text-gray-400 text-xs mt-6">
                  Last Updated: January 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
