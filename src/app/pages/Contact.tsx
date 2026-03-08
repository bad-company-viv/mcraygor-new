import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <>
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
                  lines: ["+91 8447745599", "+91 9812001368"],
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
                  <label className="block text-sm font-medium text-[#1c2535] mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#e8612c] bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c2535] mb-1.5">Brief Requirement *</label>
                  <textarea
                    placeholder="Describe your requirement or query in brief..."
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

      <section className="h-80 bg-gray-200 relative overflow-hidden">
        <iframe
          title="McRAYGOR Plant Location"
          src="https://maps.google.com/maps?q=Plot%2014,%20Dhumaspur%20Road,%20Sector%2067,%20Badshahpur,%20Gurugram,%20Haryana,%20122101&z=14&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
