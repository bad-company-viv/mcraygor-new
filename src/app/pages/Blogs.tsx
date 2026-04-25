import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Search, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { blogPosts } from "../data/blogData";
import { SEO } from "../components/SEO";
import { Breadcrumb } from "../components/common/Breadcrumb";

export function Blogs() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="bg-white">
      <SEO 
        metadata={{
          title: "Industrial Insights & Engineering News | McRAYGOR",
          description: "Explore the latest updates in waste management technology, municipal engineering, and sustainable sanitation solutions from India's leading OEM.",
          keywords: "McRAYGOR blog, sanitation technology, municipal waste news, engineering insights",
          canonical: "https://www.mcraygor.com/blog"
        }}
      />

      <Breadcrumb 
        items={[{ label: "Insights" }]}
        title="Insights & Engineering News"
        subtitle="Deep dives into industrial technology, municipal waste management, and engineering excellence."
        backgroundImage="/images/manufacturing-facility-india.png"
      />

      <section className="py-20 md:py-32 bg-[#fdfdfd]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 mb-20">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    selectedCategory === cat 
                      ? "bg-[#1c2535] text-white shadow-xl shadow-slate-900/10" 
                      : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative min-w-[300px]">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search insights..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e8612c]/20 focus:border-[#e8612c] transition-all text-sm"
              />
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-3"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-[#e8612c] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-6 mb-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#e8612c]" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#e8612c]" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-[#1c2535] text-2xl font-black leading-tight mb-5 group-hover:text-[#e8612c] transition-colors uppercase tracking-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-[#1c2535] font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                        Read Insight <ArrowRight size={16} className="text-[#e8612c]" />
                      </span>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#e8612c] group-hover:text-white transition-all">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
              <Search size={48} className="mx-auto mb-6 text-gray-200" />
              <h3 className="text-2xl font-black text-[#1c2535] uppercase mb-2">No Insights Found</h3>
              <p className="text-gray-500">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => {setSearch(""); setSelectedCategory("All");}}
                className="mt-8 text-[#e8612c] font-black text-xs uppercase tracking-widest border-b-2 border-[#e8612c] pb-1"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-32 relative rounded-[3.5rem] bg-[#1c2535] p-10 md:p-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#e8612c] opacity-5 rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                  Subscribe to <span className="text-[#e8612c]">Technical</span> Updates
                </h2>
                <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
                  Join 5,000+ industry professionals receiving our monthly analysis on municipal engineering and waste handling technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your professional email"
                  className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-[#e8612c] focus:bg-white/10 transition-all"
                />
                <button className="bg-[#e8612c] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#1c2535] transition-all shadow-2xl shadow-orange-500/20 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
