import { Shield, AlertCircle } from "lucide-react";
import { SEO } from "../components/SEO";

// Legal disclaimer text constant matching SRS Section 14
const LEGAL_DISCLAIMER = {
  heading: "Intellectual Property & Legal Notice",
  text: "Unauthorized reproduction, modification, or misuse of McRAYGOR equipment, designs, or intellectual property without written permission is a punishable offense. Certain products and technologies are patented."
};

export function PrivacyPolicy() {
  return (
    <>
      <SEO pageKey="privacyPolicy" />
      
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
            Privacy Policy & Legal Disclaimer
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Information about our privacy practices and intellectual property protections.
          </p>
        </div>
      </section>

      {/* Legal Disclaimer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Legal Disclaimer Container */}
            <div className="bg-[#fff7ed] border-l-4 border-[#e8612c] rounded-xl p-8 md:p-10 mb-12 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e8612c]/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-[#e8612c]" />
                </div>
                <div>
                  <h2 className="text-[#1c2535] text-2xl font-bold mb-2">{LEGAL_DISCLAIMER.heading}</h2>
                  <div className="w-16 h-1 bg-[#e8612c] rounded-full" />
                </div>
              </div>
              
              <p className="text-[#1c2535] text-base md:text-lg leading-relaxed font-medium">
                {LEGAL_DISCLAIMER.text}
              </p>
            </div>

            {/* Additional Privacy Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-[#1c2535] text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertCircle size={24} className="text-[#e8612c]" />
                  Privacy & Data Protection
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  McRAYGOR Mechanicals Infrastructure is committed to protecting your privacy and ensuring the security of any information you share with us.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you contact us through our website forms or email, we collect only the information necessary to respond to your inquiries and provide you with the services you request.
                </p>
              </div>

              <div>
                <h3 className="text-[#1c2535] text-xl font-bold mb-3">Information We Collect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span>Contact information (name, email, phone number) when you submit inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span>Business information relevant to your equipment requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span>Technical information about your visit (IP address, browser type) for website improvement</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#1c2535] text-xl font-bold mb-3">How We Use Your Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span>To respond to your inquiries and provide product information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span>To process quotation requests and tender support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span>To improve our website and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e8612c] mt-1">•</span>
                    <span>To comply with legal obligations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#1c2535] text-xl font-bold mb-3">Data Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-[#1c2535] text-xl font-bold mb-3">Contact Us</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <p className="text-gray-700 font-semibold mb-2">McRAYGOR Mechanicals Infrastructure</p>
                  <p className="text-gray-600 text-sm mb-1">Email: support@mcraygor.com</p>
                  <p className="text-gray-600 text-sm mb-1">Phone: +91 8447445599</p>
                  <p className="text-gray-600 text-sm">Address: Plot 14, Dhumaspur Road, Sector 67, Badshahpur, Gurugram, Haryana, India - 122101</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
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
