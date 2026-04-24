import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { blogPosts } from "../../data/blogData";

export function BlogSection() {
  const posts = blogPosts;
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-[#fff7ed] px-6 py-2 rounded-full mb-8">
            <span className="text-[#e8612c] text-xs font-black uppercase tracking-[0.2em]">Latest Updates</span>
          </div>
          <h2 className="text-[#1c2535] text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
            Insights & <span className="text-[#e8612c]">News</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Deep dives into industrial cleaning technology, municipal waste management strategies, and engineering excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              to={`/blog/${post.slug}`} 
              className="group relative bg-[#f8fafc] overflow-hidden border border-gray-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-[#e8612c] text-[10px] font-black tracking-[0.2em] uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <h3 className="text-[#1c2535] font-black text-2xl mb-4 leading-tight group-hover:text-[#e8612c] transition-colors uppercase tracking-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3 text-[#1c2535] font-black uppercase text-xs tracking-widest group/btn">
                    Read Article
                    <div className="w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover/btn:bg-[#e8612c] group-hover/btn:border-[#e8612c] group-hover/btn:text-white transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  <span className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-4 bg-[#1c2535] text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-[#e8612c] transition-all shadow-xl"
          >
            Explore All Insights
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
