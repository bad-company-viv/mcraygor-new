import { Phone, Mail, MapPin, Clock, Download, ArrowRight } from "lucide-react";

const infoCards = [
    {
        icon: Phone,
        label: "PHONE",
        values: ["+91 98120 01368", "+91 85878 29000"],
    },
    {
        icon: Mail,
        label: "EMAIL",
        values: ["info@mcraygor.com"],
    },
    {
        icon: MapPin,
        label: "HEAD OFFICE",
        values: ["Sector 67, Gurugram,", "Haryana, India"],
    },
    {
        icon: Clock,
        label: "HOURS",
        values: ["Mon-Sat: 9AM - 8:30PM", "Sunday: Closed"],
    },
];

export function QuotationSection() {
    return (
        <section className="py-16 md:py-24 bg-white text-[#1c2535]">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start">
                    {/* Left Side: Info */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 sm:mb-6 leading-tight">
                            Request a Quotation
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-2xl leading-relaxed">
                            Get in touch with our expert team for customized solutions tailored to your industrial needs. We'll respond within 24 hours.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {infoCards.map((card) => (
                                <div key={card.label} className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-5 sm:p-6 flex gap-4 hover:bg-[#f0f2f5] transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-[#e8612c]/10 flex items-center justify-center flex-shrink-0 text-[#e8612c]">
                                        <card.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[0.7rem] font-black tracking-widest text-[#e8612c] mb-1">{card.label}</p>
                                        {card.values.map((v, i) => (
                                            <p key={i} className="text-[#1c2535] text-sm font-semibold">{v}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/Brochure.pdf"
                            download
                            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-gray-200 rounded-xl font-bold bg-[#f8f9fa] hover:bg-gray-100 transition-all text-sm mb-8 md:mb-12 group text-[#1c2535]"
                        >
                            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                            Download Company Brochure
                        </a>

                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-5">
                        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                            <h3 className="text-2xl font-bold mb-6 sm:mb-8 text-[#1c2535]">Inquiry Form</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2 tracking-wider">Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#e8612c] rounded-xl px-5 py-4 text-[#1c2535] placeholder:text-gray-400 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2 tracking-wider">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="you@company.com"
                                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#e8612c] rounded-xl px-5 py-4 text-[#1c2535] placeholder:text-gray-400 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2 tracking-wider">Message *</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Machine enquiry / Tender / Service requirement"
                                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#e8612c] rounded-xl px-5 py-4 text-[#1c2535] placeholder:text-gray-400 outline-none transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#ff7a21] hover:bg-[#e86d1a] text-white font-black py-4 sm:py-5 rounded-2xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            <p className="mt-8 text-center text-xs text-gray-400 leading-relaxed">
                                By submitting, you agree to our <a href="#" className="underline hover:text-[#1c2535]">Privacy Policy</a> and <a href="#" className="underline hover:text-[#1c2535]">Terms of Service</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
