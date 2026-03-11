import { Link } from "react-router";
import { Download, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1764115424793-063c2a8b61f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')` }}
      />
      <div className="absolute inset-0 bg-[#1a5c3a]/90" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 xl:px-10 text-center">
        <h2 className="text-white mb-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
          Ready to Discuss Machines, Spares, or Tender Requirements?
        </h2>
        <p className="text-green-100/80 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
          Connect with McRAYGOR for product enquiries, government tender support, and service requirements.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#"
            className="flex items-center justify-center gap-2.5 bg-[#e8612c] hover:bg-[#d4531f] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all hover:shadow-xl w-full sm:w-auto"
          >
            <Download size={18} />
            Download Company Profile
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2.5 border-2 border-white text-white hover:bg-white hover:text-[#1a5c3a] px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all w-full sm:w-auto"
          >
            <MessageSquare size={18} />
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
