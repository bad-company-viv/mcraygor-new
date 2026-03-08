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
    title: "Industrial Vacuum Cleaning",
    items: ["Industrial Vacuum Cleaning Machine (IVC - Super Sucker)"],
  },
  {
    title: "Special Purpose Equipment",
    items: ["Anti Smog Gun / Fogging System", "Skylift Working Platforms", "Mobile Oil Spill Recovery Unit (MOSR)"],
  },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vision & Mission", to: "/about#vision" },
  { label: "Legacy", to: "/about#legacy" },
  { label: "Products", to: "/products", hasMega: true },
  { label: "Spares", to: "/spares" },
  { label: "Government & Tender Support", to: "/government-tender" },
  { label: "Projects / Applications", to: "/products#applications" },
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

const logoImg = "/mcraygor-logo.jpeg";

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
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logoImg} alt="McRAYGOR Mechanicals Infrastructure" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Center: Contact Info */}
        <div className="hidden lg:flex items-center gap-8">
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

        {/* Right: CTA + Mobile toggle */}
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

      {/* Navigation Bar */}
      <nav ref={megaRef} className="hidden lg:block border-t border-gray-100 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <ul className="flex items-center gap-1">
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
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[min(94vw,1640px)] bg-[#f1f2f5] border border-gray-200 z-50 rounded-b-2xl shadow-[0_22px_48px_rgba(0,0,0,0.16)] overflow-hidden">
            <div className="p-8 xl:p-10">
              <div className="grid grid-cols-[1fr_360px] gap-8">
                <div>
                  <div className="flex items-center justify-between mb-9">
                    <p className="text-sm font-bold tracking-wider text-gray-500 uppercase">Product Categories</p>
                    <Link
                      to="/products"
                      onClick={() => setMegaOpen(false)}
                      className="inline-flex items-center gap-2 text-[#166534] text-[1.2rem] leading-none font-semibold hover:text-[#14532d] transition-colors"
                    >
                      View All Products <ArrowRight size={22} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-x-10 gap-y-8">
                    {megaMenuCards.map((card) => (
                      <Link
                        key={card.title}
                        to={`/products/${card.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className="group grid grid-cols-[156px_1fr] gap-4 min-h-[112px]"
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-[156px] h-[92px] rounded-xl object-cover flex-shrink-0 shadow-sm border border-gray-200 bg-white"
                        />
                        <div className="min-w-0">
                          <h4 className="text-[1.05rem] leading-tight font-semibold text-[#1f2937] group-hover:text-[#e8612c] transition-colors mb-1.5">
                            {card.title}
                          </h4>
                          <p
                            className="text-[0.96rem] leading-[1.35] text-gray-500 overflow-hidden"
                            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
                          >
                            {card.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-[#072349] rounded-2xl p-7 text-white flex flex-col">
                  <h3 className="text-[2.35rem] font-extrabold mb-4 leading-[0.95]">Need Help Choosing?</h3>
                  <p className="text-[1.05rem] text-blue-100/85 leading-[1.45]">
                    Our experts can help you find the right equipment for your specific requirements.
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setMegaOpen(false)}
                    className="mt-6 w-full bg-[#ff7a12] hover:bg-[#ea6f10] text-white rounded-xl h-12 text-[1.1rem] font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    Contact Sales <ArrowRight size={20} />
                  </Link>
                  <div className="mt-6 pt-5 border-t border-white/15">
                    <a href="/Brochure.pdf" download className="text-white/90 hover:text-white text-[1.1rem] leading-snug transition-colors">
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
                                className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[#e8612c]"
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
                    className="block px-3 py-2.5 text-sm font-medium text-[#1c2535] hover:text-[#e8612c]"
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
              <a href="mailto:support@mcraygor.com" className="flex items-center gap-2 px-3 py-2 text-sm text-[#1c2535]">
                <Mail size={16} className="text-[#e8612c]" />support@mcraygor.com
              </a>
              <a href="/Brochure.pdf" download className="flex items-center gap-2 bg-[#e8612c] text-white px-4 py-2.5 rounded text-sm font-semibold mx-3">
                <Download size={16} />Download 2026 Company Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
