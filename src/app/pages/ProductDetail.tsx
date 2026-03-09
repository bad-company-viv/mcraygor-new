import { Link, useParams } from "react-router";
import { Download, MessageSquare, CheckCircle2, ChevronRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { getProductSEO } from "../utils/seo";

type ProductProfile = {
  name: string;
  category: string;
  desc: string;
  overview: string;
  image: string;
  specs: { key: string; value: string }[];
  applications: string[];
};

const commonSpecs = [
  { key: "Configuration", value: "As per model and application" },
  { key: "Build", value: "Heavy-duty engineering construction" },
  { key: "Deployment", value: "Municipal / Industrial / Utility" },
  { key: "Customization", value: "Available as per requirement" },
  { key: "Documentation", value: "Technical datasheet and brochure available" },
  { key: "Service Support", value: "Spares and support assistance available" },
];

const productData: Record<string, ProductProfile> = {
  "combined-jetting-cum-suction-machine": {
    name: "Combined Jetting Cum Suction Machine",
    category: "Liquid Waste",
    desc: "Integrated jetting and suction platform for comprehensive sewer maintenance.",
    overview: "Designed for simultaneous jetting and suction operations to handle choking, desilting, and liquid waste evacuation in one workflow.",
    image: "/images/products/sewer-jetting-suction-machine2.jpeg",
    specs: commonSpecs,
    applications: ["Municipal sewer cleaning", "Drain desilting operations", "Emergency blockage response", "Industrial utility cleaning"],
  },
  "super-sucker-machine": {
    name: "Super Sucker Machine",
    category: "Liquid Waste",
    desc: "High-suction machine for demanding sludge and slurry handling.",
    overview: "Built for deep suction and rapid evacuation in severe operating conditions where conventional systems are insufficient.",
    image: "/images/products/super-sucker-machine2.jpeg",
    specs: commonSpecs,
    applications: ["Heavy sludge suction", "Industrial pit cleaning", "Municipal emergency services", "Large-volume recovery tasks"],
  },
  "sewer-grabbing-manhole-desilting-machine": {
    name: "Sewer Grabbing / Manhole Desilting Machine",
    category: "Liquid Waste",
    desc: "Mechanical desilting support for manholes and sewer chambers.",
    overview: "Developed for safer removal of settled silt and debris from manholes with reduced manual intervention.",
    image: "/images/products/desilting-machine-grab-bucket.jpeg",
    specs: commonSpecs,
    applications: ["Manhole desilting", "Sewer chamber cleaning", "Urban sanitation drives", "Preventive maintenance programs"],
  },
  "gully-suction-emptier-trailer-mounted": {
    name: "Gully Suction Emptier (Trailer Mounted)",
    category: "Liquid Waste",
    desc: "Trailer-mounted suction solution for narrow and constrained spaces.",
    overview: "A compact configuration for zones where larger truck-mounted systems cannot be deployed effectively.",
    image: "/images/products/gully-suction-emptier.jpeg",
    specs: commonSpecs,
    applications: ["Narrow-lane maintenance", "Gully pit cleaning", "Semi-urban sanitation work", "Localized liquid waste suction"],
  },
  "bucket-type-sewer-cleaning-machine": {
    name: "Bucket Type Sewer Cleaning Machine",
    category: "Liquid Waste",
    desc: "Mechanical bucket-type arrangement for sewer waste extraction.",
    overview: "Practical machine architecture for repetitive extraction and cleaning tasks in municipal drainage networks.",
    image: "/images/products/power-bucket-machine2.jpeg",
    specs: commonSpecs,
    applications: ["Sewer pit extraction", "Drain maintenance", "Municipal cleaning fleets", "Periodic sanitation tasks"],
  },
  "sewer-rodding-machine": {
    name: "Sewer Rodding Machine",
    category: "Liquid Waste",
    desc: "Pipeline rodding machine for clearing underground choke points.",
    overview: "Used for resolving line blockages through controlled rodding operations in municipal and facility networks.",
    image: "/images/products/sewer-rodding-machine.jpeg",
    specs: commonSpecs,
    applications: ["Underground choke removal", "Drain line restoration", "Preventive line cleaning", "Public utility maintenance"],
  },
  "litter-picker": {
    name: "Litter Picker",
    category: "Solid Waste",
    desc: "Collection system for surface litter handling in public spaces.",
    overview: "Built for structured litter collection workflows in municipal and institutional cleaning operations.",
    image: "/images/products/dumper-placer-container.jpeg",
    specs: commonSpecs,
    applications: ["Roadside litter collection", "Campus cleaning", "Municipal route operations", "Public-event cleanup support"],
  },
  "refuse-garbage-compactor": {
    name: "Refuse / Garbage Compactor",
    category: "Solid Waste",
    desc: "Compactor solution for efficient high-volume waste handling.",
    overview: "Designed to optimize waste transport efficiency with compaction support for daily municipal collection routes.",
    image: "/images/products/refuse-compactor2.jpeg",
    specs: commonSpecs,
    applications: ["Door-to-door collection support", "Urban transfer operations", "Municipal fleet deployment", "Commercial waste handling"],
  },
  "road-sweeper": {
    name: "Road Sweeper",
    category: "Solid Waste",
    desc: "Road sweeping machine for urban and industrial environments.",
    overview: "Configured for regular sweeping cycles to improve city cleanliness and dust control outcomes.",
    image: "/images/products/refuse-compactor.jpeg",
    specs: commonSpecs,
    applications: ["Municipal roads", "Industrial corridors", "Transit zones", "Large-complex maintenance"],
  },
  "industrial-vacuum-cleaning-machine-ivc-super-sucker": {
    name: "Industrial Vacuum Cleaning Machine (IVC - Super Sucker)",
    category: "Industrial Vacuum",
    desc: "Industrial-grade vacuum cleaning machine for heavy-duty suction needs.",
    overview: "A specialized system for industrial cleaning and material suction use cases where continuous performance is required.",
    image: "/images/products/mm-suction-vacuum-pump.jpeg",
    specs: commonSpecs,
    applications: ["Factory cleaning", "Material recovery", "Plant housekeeping", "Industrial utility maintenance"],
  },
  "anti-smog-gun-fogging-system": {
    name: "Anti Smog Gun / Fogging System",
    category: "Special Purpose",
    desc: "Fogging-based dust suppression and air quality control system.",
    overview: "Application-driven anti-smog and fogging unit designed for construction, municipal, and industrial dust environments.",
    image: "/images/products/oil-suction-machine.jpeg",
    specs: commonSpecs,
    applications: ["Dust suppression", "Construction corridors", "Pollution control drives", "Industrial zones"],
  },
  "skylift-working-platforms": {
    name: "Skylift Working Platforms",
    category: "Special Purpose",
    desc: "Elevated platform system for safe access and utility maintenance.",
    overview: "Purpose-built lifting platform for overhead servicing, maintenance, and municipal utility work.",
    image: "/images/products/mobile-toilets.jpeg",
    specs: commonSpecs,
    applications: ["Street-light maintenance", "Public utility access", "Plant maintenance", "Safe elevated operations"],
  },
  "mobile-oil-spill-recovery-unit-mosr": {
    name: "Mobile Oil Spill Recovery Unit (MOSR)",
    category: "Special Purpose",
    desc: "Mobile response unit for containment and recovery of oil spills.",
    overview: "Designed for rapid deployment during spill incidents with practical mobility and response-focused design.",
    image: "/images/products/sewage-suction-tanker.jpeg",
    specs: commonSpecs,
    applications: ["Spill response", "Industrial safety operations", "Emergency cleanup", "Environmental protection programs"],
  },
};

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold text-[#1c2535]">Product Not Found</h2>
        <p className="text-gray-500">This product page is coming soon.</p>
        <Link to="/products" className="bg-[#e8612c] text-white px-6 py-3 rounded-lg font-semibold">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      {product && <SEO metadata={getProductSEO(slug!, product.name, product.category, product.desc)} />}
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#e8612c]">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-[#e8612c]">Products</Link>
          <ChevronRight size={14} />
          <span className="text-[#1c2535] font-medium">{product.name}</span>
        </div>
      </div>

      <section className="py-12 bg-white min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[480px_1fr] gap-10">
            {/* Left Column - Image and CTAs */}
            <div>
              <div className="sticky top-24">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-2xl w-full h-[360px] object-cover shadow-lg border border-gray-100"
                />
                
                {/* CTA Buttons */}
                <div className="flex gap-3 mt-5">
                  <a
                    href="/Brochure.pdf"
                    download
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1a5c3a] text-white py-3 rounded-lg font-semibold hover:bg-[#14532d] transition-colors text-sm"
                  >
                    <Download size={16} /> Download Brochure
                  </a>
                  <a
                    href="#quote"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#e8612c] text-white py-3 rounded-lg font-semibold hover:bg-[#d4531f] transition-colors text-sm"
                  >
                    <MessageSquare size={16} /> Request a Quote
                  </a>
                </div>
              </div>

              {/* Product Schema */}
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Product",
                  "name": product.name,
                  "description": product.overview,
                  "brand": {
                    "@type": "Brand",
                    "name": "McRAYGOR"
                  },
                  "category": product.category,
                  "image": `https://www.mcraygor.com${product.image}`
                })}
              </script>
            </div>

            {/* Right Column - Content */}
            <div>
              {/* Category Badge */}
              <div className="inline-block border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                {product.category.toUpperCase()}
              </div>

              {/* Product Description */}
              <p className="text-gray-700 leading-relaxed mb-8 text-base">
                {product.overview}
              </p>

              {/* Industrial Grade Performance Badge */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#1c2535] font-bold text-base mb-1">Industrial Grade Performance</h4>
                    <p className="text-gray-600 text-sm">Engineered for extreme durability and continuous operation.</p>
                  </div>
                </div>
              </div>

              {/* Key Specifications */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} className="text-[#1a5c3a]" />
                  <h3 className="text-[#1c2535] font-bold text-lg">Key Specifications</h3>
                </div>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.key}
                      className={`grid grid-cols-[180px_1fr] gap-4 px-5 py-3.5 ${i !== product.specs.length - 1 ? "border-b border-gray-200" : ""}`}
                    >
                      <span className="text-gray-600 text-sm font-medium">{spec.key}</span>
                      <span className="text-[#1c2535] text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} className="text-[#1a5c3a]" />
                  <h3 className="text-[#1c2535] font-bold text-lg">Applications</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {product.applications.map((app) => (
                    <div key={app} className="bg-[#1a5c3a] text-white px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
                      <CheckCircle2 size={14} className="flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-14 bg-gray-50" id="quote">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-[#1c2535] font-bold text-2xl mb-2">Request a Quote</h2>
            <p className="text-gray-500 text-sm mb-7">Our experts will get back to you with the best configuration for your needs.</p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-[#1c2535] mb-2">FULL NAME</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e8612c] focus:ring-1 focus:ring-[#e8612c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1c2535] mb-2">PHONE NUMBER</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e8612c] focus:ring-1 focus:ring-[#e8612c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1c2535] mb-2">BRIEF REQUIREMENT</label>
                <textarea
                  placeholder="Details about your project..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e8612c] focus:ring-1 focus:ring-[#e8612c] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#e8612c] hover:bg-[#d4531f] text-white py-3.5 rounded-lg font-semibold text-base transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} /> Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
