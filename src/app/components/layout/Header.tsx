import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  Menu, X, ChevronDown, Phone, Mail, Globe, ExternalLink, Download,
  ArrowRight, Building2, Droplets, Trash2, Zap, Settings, ShieldCheck, MapPin
} from "lucide-react";

const productCategories = [
  {
    title: "Liquid Waste Handling",
    items: [
      { name: "Combined Jetting Cum Suction Machine – COMBINATOR™", slug: "COMBINATOR" },
      { name: "Super Sucker Machine – HYPERVAC™", slug: "HYPERVAC" },
      { name: "Sewer Grabbing / Manhole Desilting Machine – McGRAB™", slug: "McGRAB" },
      { name: "Gully Suction Emptier (Trailer Mounted)", slug: "GULLY-SUCTION-EMPTIER" },
      { name: "Sewer Jetting Machine / Jetting Suction Machine (Trailer Mounted)", slug: "TRAILER-JETTING-SUCTION" },
      { name: "Sewer Jetting Machine – McJET™", slug: "McJET" },
      { name: "Bucket Type Sewer Cleaning Machines – POWERBUCKET™", slug: "POWERBUCKET" },
      { name: "Sewer Rodding Machines – McRODDER™", slug: "McRODDER" },
    ],
  },
  {
    title: "Solid Waste Handling",
    items: [
      { name: "Litter Picker – VYUK™", slug: "VYUK" },
      { name: "Refuse / Garbage Compactor – PAC™", slug: "PAC" },
      { name: "Road Sweeper – McCLEAN™", slug: "McCLEAN" }
    ],
  },
  {
    title: "Industrial Vacuum",
    items: [
      { name: "Industrial Vacuum Cleaner (IVC – Super Sucker) – HYPERVAC™ IVC", slug: "HYPERVAC-IVC" },
      { name: "Chassis Mounted Industrial Vacuum Cleaner", slug: "CHASSIS-VACUUM-CLEANER" },
      { name: "ATEX Compliant Vacuum Systems", slug: "ATEX-VACUUM-SYSTEMS" },
      { name: "Material Recovery Systems", slug: "MATERIAL-RECOVERY-SYSTEMS" },
    ],
  },
  {
    title: "Special Purpose Equipment",
    items: [
      { name: "Anti Smog Gun / Fogging System – McFOGGER™", slug: "McFOGGER" },
      { name: "Skylift Working Platform – McLIFT™", slug: "McLIFT" },
      { name: "Mobile Oil Spill Recovery Unit – MOSRU™", slug: "MOSRU" }
    ],
  },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products", hasMega: true },
  { label: "Spares", to: "/spares" },
  { label: "Government & Tender Support", to: "/government-tender" },
  { label: "Projects / Applications", to: "/projects" },
  { label: "Insights", to: "/blog" },
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
    slug: "HYPERVAC",
  },
  {
    title: "Road Sweepers",
    description: "Truck-mounted and compact sweeping solutions for roads and utility zones.",
    image: "/images/products/refuse-compactor2.jpeg",
    slug: "McCLEAN",
  },
  {
    title: "Jetting Machines",
    description: "High-pressure jetting systems for sewer and drain cleaning workflows.",
    image: "/images/products/sewer-jetting-suction-machine.jpeg",
    slug: "McJET",
  },
  {
    title: "Combination Units",
    description: "Vacuum and jetting combinations for desilting and blockage removal.",
    image: "/images/products/sewer-jetting-suction-machine2.jpeg",
    slug: "COMBINATOR",
  },
  {
    title: "Industrial Cleaners",
    description: "Specialized industrial vacuum cleaning platforms for demanding use cases.",
    image: "/images/products/mm-suction-vacuum-pump.jpeg",
    slug: "HYPERVAC-IVC",
  },
  {
    title: "Custom Solutions",
    description: "Application-specific equipment tailored for municipal and industrial requirements.",
    image: "/images/products/desilting-machine-grab-bucket.jpeg",
    slug: "MOSRU",
  },
];

const logoImg = "/mcraygor-header-logo.png";

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
    <header ref={megaRef} className="bg-white shadow-sm relative z-[100]">
      {/* Main Header Row */}
      <div className="max-w-[1700px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4 lg:gap-8">
        {/* Left: Logos */}
        <div className="flex items-center gap-3 md:gap-4 py-2">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src={logoImg}
              alt="McRAYGOR Mechanicals Infrastructure"
              className="h-14 md:h-20 lg:h-24 w-auto object-contain"
            />
          </Link>
          <div className="h-10 md:h-14 w-px bg-gray-200 hidden sm:block" />
          <div className="flex items-center h-full">
            <img src="/celebration.jpg" alt="25 Years Celebration" className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto object-contain" />
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:block flex-1">
          <ul className="flex items-center justify-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.hasMega ? (
                  <button
                    onClick={() => setMegaOpen(!megaOpen)}
                    className={`flex items-center gap-1 px-2 xl:px-3 py-5 text-[12px] xl:text-sm font-bold transition-all whitespace-nowrap border-b-2
                      ${megaOpen ? "text-[#e8612c] border-[#e8612c] bg-orange-50/50" : "text-[#1c2535] border-transparent hover:text-[#e8612c]"}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className="block px-2 xl:px-3 py-5 text-[12px] xl:text-sm font-bold text-[#1c2535] hover:text-[#e8612c] border-b-2 border-transparent hover:border-[#e8612c] transition-all whitespace-nowrap"
                    onClick={() => setMegaOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="/Brochure.pdf"
            download
            className="hidden xl:flex items-center gap-2 bg-[#e8612c] hover:bg-[#d4531f] text-white px-4 py-2.5 rounded-none text-[10px] font-black uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download size={14} />
            Download Profile
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#1c2535]"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
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
                          <li key={item.slug}>
                            <Link
                              to={`/products/${item.slug}`}
                              onClick={() => setMegaOpen(false)}
                              className="text-gray-700 hover:text-[#e8612c] transition-colors text-sm flex items-start gap-2 group leading-snug"
                            >
                              <span className="text-[#e8612c] text-xs group-hover:translate-x-1 transition-transform">›</span>
                              {item.name}
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
                                key={item.slug}
                                to={`/products/${item.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[#e8612c] leading-snug"
                              >
                                {item.name}
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
              <a href="tel:+918447445599" className="flex items-center gap-2 px-3 py-2 text-sm text-[#1c2535]">
                <Phone size={16} className="text-[#e8612c]" />+91 8447445599
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
