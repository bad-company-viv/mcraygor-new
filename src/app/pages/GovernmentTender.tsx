import { FileText, CheckCircle2, Download, Phone } from "lucide-react";
import { Link } from "react-router";

const gemBenefits = [
  "Tender-oriented technical specification support",
  "Product documentation pack for bid submission",
  "Structured response for government procurement enquiries",
  "Single-point coordination for technical clarifications",
  "Support for product-category mapping against tender requirements",
  "Fast escalation for urgent bid timelines",
  "Post-order spares and service coordination",
  "Dedicated government and institutional support desk",
];

export function GovernmentTender() {
  return (
    <>
      <section className="bg-[#1c2535] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Public Sector</p>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Government & Tender Support
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Focused support for government and institutional procurement workflows, from technical matching to documentation assistance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 mb-16">
            <div>
              <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="text-[#1c2535] mb-5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
                Your Trusted Government Procurement Partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This section is aligned to SRS expectations for dedicated government tender support with clear communication, fast follow-up, and technically relevant documentation.
              </p>
              <div className="space-y-3">
                {gemBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#1a5c3a] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: FileText,
                  title: "Tender Support",
                  desc: "Our dedicated team assists government buyers with technical specification matching, compliance documentation, and bid preparation support.",
                },
                {
                  icon: CheckCircle2,
                  title: "GeM Portal Registered",
                  desc: "Find our complete product catalog on the Government e-Marketplace (GeM) portal. Direct procurement available for all registered government entities.",
                },
                {
                  icon: Download,
                  title: "Technical Documents",
                  desc: "Detailed product specifications, test certificates, compliance documents available on request for tender submissions.",
                },
                {
                  icon: Phone,
                  title: "Dedicated Desk",
                  desc: "A senior technical sales manager is exclusively dedicated to government and institutional clients for prompt responses and support.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#e8612c]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#e8612c]" />
                  </div>
                  <div>
                    <div className="text-[#1c2535] font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}

              <Link
                to="/contact"
                className="block w-full text-center bg-[#e8612c] hover:bg-[#d4531f] text-white py-3.5 rounded-xl font-semibold transition-colors"
              >
                Contact Government Tender Desk →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
