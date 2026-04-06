import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const logoImg = "/logo.jpg";

export function Footer() {

  return (
    <footer className="bg-[#f8f9fa] text-[#1c2535] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-bold text-base tracking-tight">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About McRAYGOR", to: "/about" },
                { label: "Vision & Mission", to: "/vision" },
                { label: "Legacy", to: "/legacy" },
                { label: "R&D Center", to: "/rd" },
                { label: "CSR Initiatives", to: "/csr" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-gray-600 hover:text-[#e8612c] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="font-bold text-base tracking-tight">Social Media</h4>
            <ul className="space-y-4">
              {[
                { Icon: Facebook, label: "McRAYGOR Facebook", href: "https://www.facebook.com/people/Mcraygor-Mechanicals-Haryana/pfbid0qWyumXgfzw28pQTw2CvvkwqBUdQ6MweAJJTC7LadtfL8SHgL25SQW4cgqSAcokiZl/" },
                { Icon: Twitter, label: "McRAYGOR Twitter", href: "http://x.com/mcraygor" },
                { Icon: Linkedin, label: "McRAYGOR LinkedIn", href: "https://www.linkedin.com/in/mcraygor-mechanicals-p-ltd-b82399a3/" },
                { Icon: Instagram, label: "McRAYGOR Instagram", href: "https://www.instagram.com/mcraygor" },
              ].map(({ Icon, label, href }, i) => (
                <li key={i}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#e8612c] transition-colors">
                    <Icon size={18} className="text-gray-400" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals / Products */}
          <div className="space-y-6">
            <h4 className="font-bold text-base tracking-tight">Quick Portals</h4>
            <ul className="space-y-3">
              {[
                { label: "Liquid Waste Handling", to: "/products" },
                { label: "Solid Waste Handling", to: "/products" },
                { label: "Industrial Vacuum Systems", to: "/products" },
                { label: "Special Purpose Equipment", to: "/products" },
                { label: "Spares & Service", to: "/spares" },
                { label: "Govt. Tender Support", to: "/government-tender" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-gray-600 hover:text-[#e8612c] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h4 className="font-bold text-base tracking-tight">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 leading-relaxed">
                  Plot 14, Dhumaspur Road, Sector 67,<br />
                  Badshahpur, Gurugram, Haryana,<br />
                  India - 122101
                </span>
              </li>
              <li>
                <a href="tel:+918447745599" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#e8612c] transition-colors">
                  <Phone size={18} className="text-gray-400 flex-shrink-0" />
                  <span>+91 8447745599</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@mcraygor.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#e8612c] transition-colors font-medium">
                  <Mail size={18} className="text-gray-400 flex-shrink-0" />
                  <span className="break-all">support@mcraygor.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>



        {/* Legal Links */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms of Use", to: "/terms-of-use" },
              { label: "Sitemap", to: "/sitemap" },
            ].map((link) => (
              <Link key={link.label} to={link.to} className="text-xs font-medium text-gray-500 hover:text-[#1c2535] transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        {/* Final Row: Logo & Copyright + Site Credits */}
        <div className="border-t border-gray-200 mt-6 pt-8 pb-4 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:pr-8">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <Link to="/">
                <img src={logoImg} alt="McRAYGOR" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all mx-auto md:mx-0" />
              </Link>
              <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">© McRAYGOR Mechanicals Infrastructure. All Rights Reserved.</span>
            </div>
          </div>

          <div className="flex justify-end md:pr-8">
            <div className="flex items-center gap-6 bg-white/40 border border-white/80 backdrop-blur-md rounded-full px-6 py-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] scale-90 md:scale-100">
              <a href="https://fabulousmedia.in" target="_blank" rel="noopener noreferrer" className="block hover:scale-110 transition-transform">
                <img src="/sitecredits/fabulous.png" alt="Fabulous Media" className="h-5 w-auto object-contain" />
              </a>
              <span className="h-3 w-px bg-gray-200/50" />
              <a href="https://gocommercially.com" target="_blank" rel="noopener noreferrer" className="block hover:scale-110 transition-transform">
                <img src="/sitecredits/gocommercially.svg" alt="Go Commercially" className="h-4 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
