import { Link } from "react-router";
import { FileText, Package, Wrench, Building2, Home } from "lucide-react";
import { SEO } from "../components/SEO";

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Products",
    icon: Package,
    links: [
      { label: "All Products", to: "/products" },
      { label: "Combined Jetting Cum Suction Machine", to: "/products/combined-jetting-cum-suction-machine" },
      { label: "Super Sucker Machine", to: "/products/super-sucker-machine" },
      { label: "Sewer Grabbing / Manhole Desilting Machine", to: "/products/sewer-grabbing-manhole-desilting-machine" },
      { label: "Gully Suction Emptier (Trailer Mounted)", to: "/products/gully-suction-emptier-trailer-mounted" },
      { label: "Bucket Type Sewer Cleaning Machine", to: "/products/bucket-type-sewer-cleaning-machine" },
      { label: "Sewer Rodding Machine", to: "/products/sewer-rodding-machine" },
      { label: "Litter Picker", to: "/products/litter-picker" },
      { label: "Refuse / Garbage Compactor", to: "/products/refuse-garbage-compactor" },
      { label: "Road Sweeper", to: "/products/road-sweeper" },
      { label: "Industrial Vacuum Cleaning Machine (IVC - Super Sucker)", to: "/products/industrial-vacuum-cleaning-machine-ivc-super-sucker" },
      { label: "Anti Smog Gun / Fogging System", to: "/products/anti-smog-gun-fogging-system" },
      { label: "Skylift Working Platforms", to: "/products/skylift-working-platforms" },
      { label: "Mobile Oil Spill Recovery Unit (MOSR)", to: "/products/mobile-oil-spill-recovery-unit-mosr" },
      { label: "Projects / Applications", to: "/projects" },
    ],
  },
  {
    title: "Services",
    icon: Wrench,
    links: [
      { label: "Spares & Service", to: "/spares" },
      { label: "Government & Tender Support", to: "/government-tender" },
    ],
  },
  {
    title: "Company",
    icon: Building2,
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
    ],
  },
];

export function Sitemap() {
  return (
    <>
      <SEO pageKey="sitemap" />
      <section className="bg-[#1c2535] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-3">Navigation</p>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Sitemap
          </h1>
          <p className="text-gray-400 max-w-xl">
            Complete overview of all pages and sections on the McRAYGOR website.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sitemapSections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e8612c]/10 flex items-center justify-center">
                    <section.icon size={24} className="text-[#e8612c]" />
                  </div>
                  <h2 className="text-[#1c2535] font-bold text-xl" style={{ lineHeight: 1.3 }}>
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-gray-600 hover:text-[#e8612c] transition-colors flex items-center gap-2 text-sm py-1"
                      >
                        <span className="text-[#e8612c] text-xs">›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1a5c3a]/10 flex items-center justify-center">
                <FileText size={24} className="text-[#1a5c3a]" />
              </div>
              <h2 className="text-[#1c2535] font-bold text-xl" style={{ lineHeight: 1.3 }}>
                Additional Resources
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#e8612c] transition-colors text-sm bg-gray-50 px-4 py-3 rounded-lg border border-gray-100"
              >
                <FileText size={16} className="text-[#e8612c]" />
                XML Sitemap
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#e8612c] transition-colors text-sm bg-gray-50 px-4 py-3 rounded-lg border border-gray-100"
              >
                <FileText size={16} className="text-[#e8612c]" />
                Robots.txt
              </a>
              <a
                href="/Brochure.pdf"
                download
                className="flex items-center gap-2 text-gray-600 hover:text-[#e8612c] transition-colors text-sm bg-gray-50 px-4 py-3 rounded-lg border border-gray-100"
              >
                <FileText size={16} className="text-[#e8612c]" />
                Company Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
