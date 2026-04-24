import { useEffect } from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const logoImg = "/mcraygor-header-logo.png";

export function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//images.dmca.com/Badges/DMCABadgeHelper.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-[#f8f9fa] text-[#1c2535] pt-16 pb-8 border-t border-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-bold text-base tracking-tight">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About McRAYGOR", to: "/about" },
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
                <a href="tel:+918447445599" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#e8612c] transition-colors">
                  <Phone size={18} className="text-gray-400 flex-shrink-0" />
                  <span>+91 8447445599</span>
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
        <div className="border-t border-white py-6">
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

        {/* Final Row: Copyright & Legal */}
        <div className="border-t border-white mt-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="/mcraygor-header-logo.png" 
              alt="McRAYGOR" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">
              © McRAYGOR Mechanicals Infrastructure. All Rights Reserved.
            </span>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 pt-12 border-t border-white">
          <div className="space-y-10 text-[11px] leading-[1.8] text-gray-500 font-light">
            <div className="space-y-4">
              <h5 className="font-bold text-[#1c2535] text-xs">INTELLECTUAL PROPERTY & WEBSITE USE</h5>
              <div className="space-y-3">
                <p>
                  All content, materials, and intellectual property displayed on this website of McRAYGOR®—including, without limitation, text, graphics, logos, trademarks, service marks, photographs, videos, designs, layouts, technical data, documentation, software, proprietary processes, and related materials (collectively, the "Content")—are the exclusive property of McRAYGOR® or its duly authorized licensors. Such Content is protected under the applicable laws of India, including the Copyright Act, 1957, the Trade Marks Act, 1999, and the Information Technology Act, 2000.
                </p>
                <p>
                  The Content may not be reproduced, copied, modified, adapted, transmitted, published, displayed, distributed, or otherwise exploited, in whole or in part, in any form or by any means, without the prior written consent of McRAYGOR®. This includes, without limitation, the use of images, project references, engineering designs, specifications, and technical materials for any purpose.
                </p>
                <p>
                  Access to this website does not confer any license or right, express or implied, in or to the Content. Any unauthorized use, including data scraping, automated extraction, or systematic reproduction of Content, may give rise to legal action.
                </p>
                <p>
                  Any third-party trademarks, materials, or content appearing on this website remain the property of their respective owners and are used where applicable with appropriate authorization.
                </p>
                <p>
                  By accessing or using this website, users agree to comply with all applicable laws. Any disputes arising in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in India.
                </p>
              </div>
            </div>

            <div className="h-px bg-white w-full" />

            <div className="space-y-4">
              <h5 className="font-bold text-[#1c2535] text-xs">GENERAL & TECHNICAL INFORMATION</h5>
              <div className="space-y-3">
                <p>
                  The products and services described on this website, including truck-mounted sewer cleaning machines and related infrastructure equipment, are provided for general informational purposes only. Specifications, configurations, and availability may vary depending on regulatory requirements, operating conditions, and product updates.
                </p>
                <p>
                  All images, illustrations, and technical representations are indicative in nature and may differ from the actual product in terms of design, configuration, features, and scope of supply. Certain elements shown may include optional equipment or accessories that are not part of the standard offering.
                </p>
                <p>
                  McRAYGOR® reserves the right to modify, update, or discontinue product specifications, design elements, components, and service offerings at any time without prior notice, as part of its ongoing product development and improvement process.
                </p>
              </div>
            </div>

            <div className="h-px bg-white w-full" />

            <div className="space-y-4">
              <h5 className="font-bold text-[#1c2535] text-xs">SCOPE OF SUPPLY & PERFORMANCE DISCLAIMER</h5>
              <div className="space-y-3">
                <p>
                  For truck-mounted equipment, McRAYGOR® may provide guidance regarding suitable vehicle or chassis selection based on technical compatibility and operational requirements. However, unless expressly agreed in writing, the vehicle or chassis is not included within the standard scope of supply.
                </p>
                <p>
                  The procurement, registration, regulatory compliance, and performance of the vehicle remain the sole responsibility of the client or the third-party supplier.
                </p>
                <p>
                  The performance, efficiency, and operational output of the equipment are influenced by multiple external factors, including the specifications, condition, compatibility, and maintenance of the selected chassis, as well as operating practices. McRAYGOR® shall not be liable for variations in performance arising from such factors.
                </p>
                <p>
                  Users and clients are advised to undertake independent evaluation and due diligence prior to relying on any information provided on this website.
                </p>
              </div>
            </div>

            <div className="h-px bg-white w-full" />

            <div className="space-y-4">
              <h5 className="font-bold text-[#1c2535] text-xs">OEM AUTHORIZATION & REPRESENTATION</h5>
              <div className="space-y-3">
                <p>
                  McRAYGOR® operates solely as an independent Original Equipment Manufacturer (OEM) and does not maintain publicly represented branches, subsidiaries, or general partner networks.
                </p>
                <p>
                  Any third party claiming to represent, be affiliated with, or act on behalf of McRAYGOR® must possess explicit written authorization issued directly by McRAYGOR®. In certain cases, the company may grant limited, project-specific authorizations to select entities for participation in tenders or defined commercial engagements. Such authorizations are strictly non-transferable and do not establish any ongoing representation, partnership, or distributorship.
                </p>
                <p>
                  McRAYGOR® assumes no responsibility or liability for any commitments, representations, or transactions made by unauthorized parties. Users and stakeholders are strongly advised to verify any such claims directly with McRAYGOR® prior to entering into any engagement.
                </p>
                <p>
                  McRAYGOR® reserves the right to take appropriate action in response to any instance of misrepresentation, unauthorized use of its name, or misuse of its brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DMCA Badge & Credits */}
        <div className="mt-12 pt-8 border-t border-white flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <a 
            href="//www.dmca.com/Protection/Status.aspx?ID=3eb5be5b-fd39-481b-8fcd-d9a1ac6fe566" 
            title="DMCA.com Protection Status" 
            className="dmca-badge block hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=3eb5be5b-fd39-481b-8fcd-d9a1ac6fe566" 
              alt="DMCA.com Protection Status" 
              className="h-6 w-auto"
            />
          </a>

          <div className="hidden md:block h-4 w-px bg-gray-200" />

          {/* Credit Section */}
          <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <a
              href="https://fabulousmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="FabulousMedia"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                alt="FabulousMedia"
                className="h-3 w-auto"
                loading="lazy"
                width="80"
                height="12"
              />
            </a>
            <div className="h-3 w-px bg-gray-200 transition-colors duration-300"></div>
            <a
              href="https://gocommercially.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="GoCommercially"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                alt="GoCommercially"
                className="h-3 w-auto"
                loading="lazy"
                width="80"
                height="12"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
