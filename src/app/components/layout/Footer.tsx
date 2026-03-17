import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const logoImg = "/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-[#0d1a28] text-gray-300">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-1 inline-block mb-5 shadow-lg">
              <img src={logoImg} alt="McRAYGOR" className="h-24 w-60 " />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Manufacturer of municipal and industrial waste handling equipment
              focused on clean cities, safe workers, and mechanized sanitation.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/people/Mcraygor-Mechanicals-Haryana/pfbid0qWyumXgfzw28pQTw2CvvkwqBUdQ6MweAJJTC7LadtfL8SHgL25SQW4cgqSAcokiZl/" },
                { Icon: Twitter, href: "http://x.com/mcraygor" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mcraygor-mechanicals-p-ltd-b82399a3/" },
                { Icon: Instagram, href: "https://www.instagram.com/mcraygor" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/10 flex items-center justify-center hover:bg-[#e8612c] transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Vision & Mission", to: "/vision" },
                { label: "Legacy", to: "/legacy" },
                { label: "Products", to: "/products" },
                { label: "Spares", to: "/spares" },
                { label: "R&D", to: "/rd" },
                { label: "CSR Initiatives", to: "/csr" },
                { label: "Government & Tender", to: "/government-tender" },
                { label: "Projects / Applications", to: "/projects" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-[#e8612c] transition-colors flex items-center gap-1.5">
                    <span className="text-[#e8612c] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Products</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Liquid Waste", description: "Jetting-cum-suction, super sucker, sewer systems" },
                { name: "Solid Waste", description: "Refuse compactor, litter picker, road sweeper" },
                { name: "Industrial Vacuum", description: "IVC Super Sucker for high-intensity cleaning" },
                { name: "Special Purpose", description: "Anti-smog gun, skylift, oil spill recovery" },
              ].map((category) => (
                <li key={category.name}>
                  <Link to="/products" className="text-sm text-gray-400 hover:text-[#e8612c] transition-colors flex items-start gap-1.5 group">
                    <span className="text-[#e8612c] text-xs mt-0.5">›</span>
                    <div>
                      <div className="font-medium group-hover:text-[#e8612c]">{category.name}</div>
                      <div className="text-xs text-gray-500 leading-tight mt-0.5">{category.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-[#e8612c] mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Plot 14, Dhumaspur Road, Sector 67,<br />
                  Badshahpur, Gurugram, Haryana,<br />
                  India - 122101
                </p>
              </div>
              <a href="tel:+918447745599" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#e8612c] transition-colors">
                <Phone size={16} className="text-[#e8612c] flex-shrink-0" />
                <span className="break-words">+91 8447745599 / +91 9812001368</span>
              </a>
              <a href="mailto:support@mcraygor.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#e8612c] transition-colors">
                <Mail size={16} className="text-[#e8612c] flex-shrink-0" />
                <span className="break-all">support@mcraygor.com / system@mcraygor.com</span>
              </a>
            </div>
            <div className="mt-5 rounded overflow-hidden h-28 bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={20} className="text-[#e8612c] mx-auto mb-1" />
                <span className="text-xs text-gray-500">View on Google Maps</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© McRAYGOR Mechanicals Infrastructure. All Rights Reserved.</p>
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center md:justify-end gap-3 md:gap-5 md:ml-auto">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 md:pr-1">
              <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Use</a>
              <Link to="/sitemap" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Sitemap</Link>
            </div>
            <div className="rounded-full px-3 py-1.5 flex items-center gap-3 bg-[#0b1530]/65 border border-white/15 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.28)] md:self-center">
              <a href="https://fabulousmedia.in" target="_blank" rel="noopener noreferrer" aria-label="Visit Fabulous Media"
                className="inline-flex items-center opacity-95 hover:opacity-100 transition-opacity">
                <img src="/sitecredits/fabulous.png" alt="Fabulous Media" className="h-5 w-auto object-contain" />
              </a>
              <span className="h-5 w-px bg-white/25" aria-hidden />
              <a href="https://gocommercially.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Go Commercially"
                className="inline-flex items-center opacity-95 hover:opacity-100 transition-opacity">
                <img src="/sitecredits/gocommercially.webp" alt="Go Commercially" className="h-4 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
