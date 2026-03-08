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
        <section className="py-24 bg-[#1c2535] text-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Side: Info */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Request a Quotation
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl leading-relaxed">
                            Get in touch with our expert team for customized solutions tailored to your industrial needs. We'll respond within 24 hours.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {infoCards.map((card) => (
                                <div key={card.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-[#e8612c]/20 flex items-center justify-center flex-shrink-0 text-[#e8612c]">
                                        <card.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[0.7rem] font-black tracking-widest text-[#e8612c] mb-1">{card.label}</p>
                                        {card.values.map((v, i) => (
                                            <p key={i} className="text-gray-200 text-sm font-medium">{v}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/Brochure.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl font-bold bg-white/5 hover:bg-white/10 transition-all text-sm mb-12 group"
                        >
                            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                            Download Company Brochure
                        </a>

                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/industrial-facility.png"
                                alt="McRAYGOR Industrial Manufacturing Facility"
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#242e42] p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8">Inquiry Form</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-2 tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-[#1c2535]/50 border border-white/10 focus:border-[#e8612c] rounded-xl px-5 py-4 text-white placeholder:text-gray-600 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-2 tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-[#1c2535]/50 border border-white/10 focus:border-[#e8612c] rounded-xl px-5 py-4 text-white placeholder:text-gray-600 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-2 tracking-wider">Brief Requirement</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your industrial needs..."
                                        className="w-full bg-[#1c2535]/50 border border-white/10 focus:border-[#e8612c] rounded-xl px-5 py-4 text-white placeholder:text-gray-600 outline-none transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#ff7a21] hover:bg-[#e86d1a] text-white font-black py-5 rounded-2xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group"
                                >
                                    Submit Inquiry
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            <p className="mt-8 text-center text-xs text-gray-500 leading-relaxed">
                                By submitting, you agree to our <a href="#" className="underline hover:text-gray-300">Privacy Policy</a> and <a href="#" className="underline hover:text-gray-300">Terms of Service</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
