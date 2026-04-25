import { useState } from "react";
import { Link } from "react-router";
import { Search, Filter, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumb } from "../components/common/Breadcrumb";

const allProducts = [
  // Liquid Waste
  { id: 1, slug: "COMBINATOR", name: "Combined Jetting Cum Suction Machine – COMBINATOR™", category: "liquid-waste", categoryLabel: "Liquid Waste", image: "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-1.jpg", desc: "Truck chassis mounted suction-cum-jetting combination machine for trunk sewer maintenance.", capacity: "Model Dependent", featured: true },
  { id: 2, slug: "HYPERVAC", name: "Super Sucker Machine – HYPERVAC™", category: "liquid-waste", categoryLabel: "Liquid Waste", image: "/images/products/super-sucker-machine/super-sucker-1.jpg", desc: "High suction performance machine for sludge, slurry, and heavy waste evacuation.", capacity: "Model Dependent", featured: true },
  { id: 3, slug: "McGRAB", name: "Sewer Grabbing / Manhole Desilting Machine – McGRAB™", category: "liquid-waste", categoryLabel: "Liquid Waste", image: "/images/products/desilting-machine-grab-bucket.jpeg", desc: "Designed for desilting manholes and grabbing settled sewer waste safely.", capacity: "Model Dependent", featured: false },
  { id: 4, slug: "GULLY-SUCTION-EMPTIER", name: "Gully Suction Emptier – McVAC™", category: "liquid-waste", categoryLabel: "Liquid Waste", image: "/images/products/gully-suction-emptier/gully-suction-emptier-1.png", desc: "Trailer-mounted suction unit for compact and narrow-access operations.", capacity: "Model Dependent", featured: false },
  { id: 5, slug: "TRAILER-JETTING-SUCTION", name: "Sewer Jetting Machine / Jetting Suction Machine (Trailer Mounted)", category: "liquid-waste", categoryLabel: "Liquid Waste", image: "/images/products/sewer-jetting-suction-machine.jpeg", desc: "Compact trailer-mounted jetting and suction solution.", capacity: "Model Dependent", featured: false },
  { id: 6, slug: "McJET", name: "Sewer Jetting Machine – McJET™", category: "liquid-waste", categoryLabel: "Liquid Waste", image: "/images/products/sewer-jetting-machine/sewer-jetting-machine-1.png", desc: "Truck-mounted high-pressure jetting system for dislodging and removing sewer line obstructions.", capacity: "Model Dependent", featured: false },
  { id: 7, slug: "POWERBUCKET", name: "Bucket Type Sewer Cleaning Machines – POWERBUCKET™", category: "liquid-waste", categoryLabel: "Liquid Waste", image: "/images/products/power-bucket/power-bucket-machine-1.jpeg", desc: "Mechanical bucket-based cleaning solution for sewer line maintenance.", capacity: "Model Dependent", featured: false },
  { id: 8, slug: "McRODDER", name: "Sewer Rodding Machines – McRODDER™", category: "liquid-waste", categoryLabel: "Liquid Waste", image: "/images/products/sewer-rodding-machine/sewer-rodding-machine.png", desc: "Rodding machine for blockage removal in sewer and drain pipelines.", capacity: "Model Dependent", featured: false },
  
  // Solid Waste
  { id: 9, slug: "VYUK", name: "Litter Picker – VYUK™", category: "solid-waste", categoryLabel: "Solid Waste", image: "/images/products/dumper-placer-container.jpeg", desc: "Efficient litter collection system for urban cleaning applications.", capacity: "Model Dependent", featured: false },
  { id: 10, slug: "PAC", name: "Refuse / Garbage Compactor – PAC™", category: "solid-waste", categoryLabel: "Solid Waste", image: "/images/products/garbage-refuse-compactor/garbage-refuse-compactor-1.jpeg", desc: "Compactor solution for high-volume municipal solid waste collection.", capacity: "Model Dependent", featured: true },
  { id: 11, slug: "McCLEAN", name: "Road Sweeper – McCLEAN™", category: "solid-waste", categoryLabel: "Solid Waste", image: "/images/products/refuse-compactor2.jpeg", desc: "Road sweeping machine for municipal roads and industrial campuses.", capacity: "Model Dependent", featured: true },
  
  // Industrial Vacuum
  { id: 12, slug: "HYPERVAC-IVC", name: "Industrial Vacuum Cleaner (IVC – Super Sucker) – HYPERVAC™ IVC", category: "industrial-vacuum", categoryLabel: "Industrial Vacuum", image: "/images/products/vaccum.png", desc: "Heavy-duty industrial vacuum cleaning platform for demanding suction jobs.", capacity: "Model Dependent", featured: true },
  { id: 16, slug: "CHASSIS-VACUUM-CLEANER", name: "Chassis Mounted Industrial Vacuum Cleaner", category: "industrial-vacuum", categoryLabel: "Industrial Vacuum", image: "/images/products/vaccum.png", desc: "Truck-mounted vacuum cleaner for industrial and municipal cleaning.", capacity: "Model Dependent", featured: false },
  { id: 17, slug: "ATEX-VACUUM-SYSTEMS", name: "ATEX Compliant Vacuum Systems", category: "industrial-vacuum", categoryLabel: "Industrial Vacuum", image: "/images/products/vaccum.png", desc: "Explosion-proof vacuum systems for hazardous industrial environments.", capacity: "Model Dependent", featured: false },
  { id: 18, slug: "MATERIAL-RECOVERY-SYSTEMS", name: "Material Recovery Systems", category: "industrial-vacuum", categoryLabel: "Industrial Vacuum", image: "/images/products/vaccum.png", desc: "Industrial systems designed for the recovery and recycling of materials.", capacity: "Model Dependent", featured: false },
  
  // Special Purpose
  { id: 13, slug: "McFOGGER", name: "Anti Smog Gun / Fogging System – McFOGGER™", category: "special-purpose", categoryLabel: "Special Purpose", image: "/images/products/anti-smog/anti-smog.png", desc: "Fogging system for dust suppression and environment control applications.", capacity: "Model Dependent", featured: true },
  { id: 14, slug: "McLIFT", name: "Skylift Working Platform – McLIFT™", category: "special-purpose", categoryLabel: "Special Purpose", image: "/images/products/sky-lift/skylift-working-platform.png", desc: "Elevated working platforms for maintenance and utility operations.", capacity: "Model Dependent", featured: false },
  { id: 15, slug: "MOSRU", name: "Mobile Oil Spill Recovery Unit – MOSRU™", category: "special-purpose", categoryLabel: "Special Purpose", image: "/images/products/mobile-oil-spill-recovery-unit/mobile-oil-spill-recovery-unit-1.png", desc: "Mobile solution for rapid oil spill containment and recovery operations.", capacity: "Model Dependent", featured: false },
];

export function Products() {
  const [search, setSearch] = useState("");

  const filtered = allProducts.filter((p) => {
    const matchSearch = search === "" || p.name.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  return (
    <>
      <SEO pageKey="products" />

      {/* Breadcrumb Section */}
      <Breadcrumb
        items={[{ label: "Products" }]}
        title="Our Product Range"
        subtitle="Comprehensive equipment portfolio across liquid waste, solid waste, industrial vacuum cleaning, and special purpose applications."
        backgroundImage="/images/manufacturing-facility.png"
      />

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="flex justify-end mb-10">
            <div className="relative md:ml-auto w-full md:w-auto">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#e8612c] bg-white w-full md:w-auto"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={`McRAYGOR ${product.name} - ${product.categoryLabel} Equipment`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#e8612c] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-[#1c2535] font-bold mb-2" style={{ fontSize: "1rem", lineHeight: 1.4 }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                      Capacity: {product.capacity}
                    </span>
                    <span className="flex items-center gap-1 text-[#e8612c] text-sm font-semibold">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <Filter size={40} className="mx-auto mb-3 opacity-30" />
              <p>No products found matching your search.</p>
            </div>
          )}

          <div id="applications" className="mt-16 bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-[#1c2535] font-bold text-2xl mb-3" style={{ lineHeight: 1.3 }}>
              Projects / Applications
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Proven deployment configurations across municipal and industrial sectors.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Municipal sewer cleaning and desilting operations",
                "Solid waste collection and transportation workflows",
                "Industrial vacuum and heavy-duty suction requirements",
                "Special-purpose deployments such as anti-smog and utility access",
              ].map((item) => (
                <div key={item} className="text-sm text-gray-600 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
