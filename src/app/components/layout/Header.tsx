import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Phone, Mail, Download, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const productCategories = [
  {
    title: "Liquid Waste Handling",
    items: [
      "Combined Jetting Cum Suction Machine",
      "Super Sucker Machine",
      "Sewer Grabbing / Manhole Desilting Machine",
      "Gully Suction Emptier (Trailer Mounted)",
      "Bucket Type Sewer Cleaning Machine",
      "Sewer Rodding Machine",
    ],
  },
  {
    title: "Solid Waste Handling",
    items: ["Litter Picker", "Refuse / Garbage Compactor", "Road Sweeper"],
  },
  {
    title: "Industrial Vacuum",
    items: [
      "Industrial Vacuum Cleaning Machine (IVC - Super Sucker)",
      "Chassis Mounted Industrial Vacuum Cleaner",
      "ATEX Compliant Vacuum Systems",
      "Material Recovery Systems",
    ],
  },
  {
    title: "Special Purpose Equipment",
    items: ["Anti Smog Gun / Fogging System", "Skylift Working Platforms", "Mobile Oil Spill Recovery Unit (MOSR)"],
  },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vision & Mission", to: "/vision" },
  { label: "Legacy", to: "/legacy" },
  { label: "Products", to: "/products", hasMega: true },
  { label: "Spares", to: "/spares" },
  { label: "Government & Tender Support", to: "/government-tender" },
  { label: "Projects / Applications", to: "/projects" },
  { label: "R&D", to: "/rd" },
  { label: "CSR Initiatives", to: "/csr" },
  { label: "Contact Us", to: "/contact" },
];

function toProductSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const megaMenuCards = [
  {
    title: "Vacuum Trucks",
    description: "High-capacity sewer and industrial vacuum trucks for heavy-duty operations.",
    image: "/images/products/sewage-suction-tanker.jpeg",
    slug: "super-sucker-machine",
  },
  {
    title: "Road Sweepers",
    description: "Truck-mounted and compact sweeping solutions for roads and utility zones.",
    image: "/images/products/refuse-compactor2.jpeg",
    slug: "road-sweeper",
  },
  {
    title: "Jetting Machines",
    description: "High-pressure jetting systems for sewer and drain cleaning workflows.",
    image: "/images/products/sewer-jetting-suction-machine.jpeg",
    slug: "combined-jetting-cum-suction-machine",
  },
  {
    title: "Combination Units",
    description: "Vacuum and jetting combinations for desilting and blockage removal.",
    image: "/images/products/sewer-jetting-suction-machine2.jpeg",
    slug: "combined-jetting-cum-suction-machine",
  },
  {
    title: "Industrial Cleaners",
    description: "Specialized industrial vacuum cleaning platforms for demanding use cases.",
    image: "/images/products/mm-suction-vacuum-pump.jpeg",
    slug: "industrial-vacuum-cleaning-machine-ivc-super-sucker",
  },
  {
    title: "Custom Solutions",
    description: "Application-specific equipment tailored for municipal and industrial requirements.",
    image: "/images/products/desilting-machine-grab-bucket.jpeg",
    slug: "mobile-oil-spill-recovery-unit-mosr",
  },
];

const logoImg = "/logo.jpg";

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Main Header Row */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left: Logos */}
        <div className="flex items-center gap-1 pl-24">
          <Link to="/" className="flex-shrink-0">
            <img src={logoImg} alt="McRAYGOR Mechanicals Infrastructure" className="h-20 md:h-24 w-auto object-contain" />
          </Link>
          <img src="/celebration.jpg" alt="Celebration" className="h-8 md:h-10 w-auto object-contain" />
        </div>

        {/* Center: Contact Info */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          <a href="tel:+918447745599" className="flex items-center gap-2 text-[#1c2535] hover:text-[#e8612c] transition-colors">
            <Phone size={18} className="text-[#e8612c]" />
            <div>
              <div className="text-xs text-gray-500">Call Us:</div>
              <div className="text-sm font-semibold">+91 8447745599</div>
            </div>
          </a>
          <a href="mailto:support@mcraygor.com" className="flex items-center gap-2 text-[#1c2535] hover:text-[#e8612c] transition-colors">
            <Mail size={18} className="text-[#e8612c]" />
            <div>
              <div className="text-xs text-gray-500">Email Us:</div>
              <div className="text-sm font-semibold">support@mcraygor.com</div>
            </div>
          </a>
        </div>

        {/* Right: CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="/Brochure.pdf"
            download
            className="hidden md:flex items-center gap-2 bg-[#e8612c] hover:bg-[#d4531f] text-white px-4 py-2.5 rounded text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <Download size={16} />
            Download 2026 Company Profile
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#1c2535]"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile quick contact strip */}
      <div className="lg:hidden border-t border-gray-100 bg-[#f8fafc]">
        <div className="max-w-[1600px] mx-auto px-4 py-2 flex items-center justify-between gap-3">
          <a href="tel:+918447745599" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1c2535] hover:text-[#e8612c] transition-colors">
            <Phone size={14} className="text-[#e8612c]" />
            +91 8447745599
          </a>
          <a href="mailto:support@mcraygor.com" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1c2535] hover:text-[#e8612c] transition-colors">
            <Mail size={14} className="text-[#e8612c]" />
            support@mcraygor.com
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav ref={megaRef} className="hidden lg:block border-t border-gray-100 bg-white relative">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <ul className="flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.hasMega ? (
                  <button
                    onClick={() => setMegaOpen(!megaOpen)}
                    className={`flex items-center gap-1 px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap
                      ${megaOpen ? "text-[#e8612c] bg-orange-50" : "text-[#1c2535] hover:text-[#e8612c] hover:bg-gray-50"}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className="block px-4 py-4 text-sm font-medium text-[#1c2535] hover:text-[#e8612c] hover:bg-gray-50 transition-colors whitespace-nowrap"
                    onClick={() => setMegaOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {megaOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[min(96vw,1700px)] bg-[#f1f2f5] border border-gray-200 z-50 rounded-b-2xl shadow-[0_22px_48px_rgba(0,0,0,0.16)] overflow-hidden">
            <div className="p-6 xl:p-8">
              <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] gap-6 xl:gap-7 items-start">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <p className="text-sm font-bold tracking-wider text-gray-500 uppercase">Product Categories</p>
                    <Link
                      to="/products"
                      onClick={() => setMegaOpen(false)}
                      className="inline-flex items-center gap-2 text-[#166534] text-[1.2rem] leading-none font-semibold hover:text-[#14532d] transition-colors"
                    >
                      View All Products <ArrowRight size={22} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                    {productCategories.map((category) => (
                      <div key={category.title} className="min-w-0">
                        <h4 className="text-[#1a5c3a] font-bold text-base mb-4 pb-2 border-b-2 border-[#1a5c3a]/20">
                          {category.title}
                        </h4>
                        <ul className="space-y-2.5">
                          {category.items.map((item) => (
                            <li key={item}>
                              <Link
                                to={`/products/${toProductSlug(item)}`}
                                onClick={() => setMegaOpen(false)}
                                className="text-gray-700 hover:text-[#e8612c] transition-colors text-sm flex items-start gap-2 group leading-snug"
                              >
                                <span className="text-[#e8612c] text-xs group-hover:translate-x-1 transition-transform">›</span>
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0a2540] rounded-3xl p-5 xl:p-6 text-white flex flex-col shadow-xl w-full xl:max-w-[320px] xl:justify-self-end">
                  <h3 className="text-[1.75rem] xl:text-[2.1rem] font-bold mb-3 xl:mb-4 leading-tight">Need Help Choosing?</h3>
                  <p className="text-[0.98rem] xl:text-base text-gray-300 leading-relaxed mb-5 xl:mb-6">
                    Our experts can help you find the right equipment for your specific requirements.
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setMegaOpen(false)}
                    className="w-full bg-[#ff6b35] hover:bg-[#ff7a4d] text-white rounded-xl py-3 xl:py-3.5 text-base xl:text-lg font-semibold inline-flex items-center justify-center gap-2.5 transition-all hover:shadow-lg"
                  >
                    Contact Sales <ArrowRight size={22} />
                  </Link>
                  <div className="mt-5 xl:mt-6 pt-4 xl:pt-5 border-t border-white/10 flex justify-center">
                    <a href="/Brochure.pdf" download className="text-white text-base xl:text-[1.02rem] font-medium hover:text-gray-200 transition-colors inline-block text-center">
                      Download Product Catalog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasMega ? (
                  <>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-[#1c2535] hover:text-[#e8612c]"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="pl-4 pb-2 space-y-2">
                        {productCategories.map((cat) => (
                          <div key={cat.title}>
                            <div className="text-xs font-bold text-[#1a5c3a] uppercase tracking-wide px-3 py-1">{cat.title}</div>
                            {cat.items.map((item) => (
                              <Link
                                key={item}
                                to={`/products/${toProductSlug(item)}`}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[#e8612c] leading-snug"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-[#1c2535] hover:text-[#e8612c] leading-snug"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a href="tel:+918447745599" className="flex items-center gap-2 px-3 py-2 text-sm text-[#1c2535]">
                <Phone size={16} className="text-[#e8612c]" />+91 8447745599
              </a>
              <a href="mailto:support@mcraygor.com" className="flex items-center gap-2 px-3 py-2 text-sm text-[#1c2535] break-all">
                <Mail size={16} className="text-[#e8612c]" />support@mcraygor.com
              </a>
              <a href="/Brochure.pdf" download className="flex items-center justify-center gap-2 bg-[#e8612c] text-white px-4 py-2.5 rounded text-sm font-semibold mx-3 text-center leading-snug">
                <Download size={16} />Download 2026 Company Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}