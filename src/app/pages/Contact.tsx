import { Phone, Mail, MapPin, Clock, Headphones, Wrench } from "lucide-react";
import { SEO } from "../components/SEO";

const indiaLocations = [
  {
    region: "North India",
    cities: ["Gurugram", "Delhi NCR", "Chandigarh", "Jaipur"],
  },
  {
    region: "West India",
    cities: ["Mumbai", "Pune", "Ahmedabad", "Vadodara"],
  },
  {
    region: "South India",
    cities: ["Hyderabad", "Bengaluru", "Chennai", "Kochi"],
  },
  {
    region: "East & Central India",
    cities: ["Kolkata", "Bhubaneswar", "Patna", "Raipur"],
  },
];

export function Contact() {
  return (
    <>
      <SEO pageKey="contact" />
      <section className="bg-[#1c2535] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-xl">
            Reach us for machine enquiries, tender support, spares, and service requirements.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-[#1c2535] font-bold text-xl mb-6" style={{ lineHeight: 1.3 }}>Contact Information</h2>

              {[
                {
                  icon: MapPin,
                  title: "Office & Plant",
                  lines: ["Plot 14, Dhumaspur Road, Sector 67,", "Badshahpur, Gurugram, Haryana,", "India – 122101"],
                },
                {
                  icon: Phone,
                  title: "Phone",
                  lines: ["+91 8447445599", "+91 9812001368"],
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: ["support@mcraygor.com", "system@mcraygor.com"],
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
                },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#e8612c]/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-[#e8612c]" />
                  </div>
                  <div>
                    <div className="text-[#1c2535] font-semibold text-sm mb-1">{info.title}</div>
                    {info.lines.map((line, i) => (
                      <div key={i} className="text-gray-500 text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-[#1c2535] font-bold text-xl mb-2" style={{ lineHeight: 1.3 }}>Send us a Message</h2>
              <p className="text-gray-500 text-sm mb-7">Please fill out your details and we'll respond within 24 hours.</p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-[#1c2535] mb-1.5">Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#e8612c] bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c2535] mb-1.5">Email *</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#e8612c] bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c2535] mb-1.5">Message *</label>
                  <textarea
                    placeholder="Machine enquiry / Tender / Service requirement"
                    rows={5}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#e8612c] bg-gray-50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#e8612c] hover:bg-[#d4531f] text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-colors w-full md:w-auto"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">India Coverage</p>
              <h2 className="text-[#1c2535] font-bold text-2xl md:text-3xl">Sales & Service Locations</h2>
              <p className="text-gray-500 mt-3 max-w-2xl text-sm md:text-base">
                Regional support coverage for machine enquiries, project coordination, commissioning and service response across India.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e8612c]/10 px-4 py-2 text-sm font-semibold text-[#e8612c]">
                <Headphones size={16} />
                Sales Support
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1a5c3a]/10 px-4 py-2 text-sm font-semibold text-[#1a5c3a]">
                <Wrench size={16} />
                Service Support
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {indiaLocations.map((location) => (
              <article key={location.region} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-[#e8612c] font-semibold mb-4">
                  <MapPin size={16} />
                  {location.region}
                </div>
                <div className="space-y-2">
                  {location.cities.map((city) => (
                    <div key={city} className="text-sm text-gray-600">
                      {city}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
