import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Mechanized Sanitation and Worker Safety",
    excerpt: "How machine-led operations reduce hazardous manual interventions and improve sanitation worker dignity.",
    category: "TECHNOLOGY",
  },
  {
    title: "Choosing the Right Jetting-Cum-Suction Configuration",
    excerpt: "A practical guide for municipalities and industrial teams selecting the right capacity and use-case fit.",
    category: "GUIDE",
  },
  {
    title: "Spares Planning for High-Uptime Fleet Operations",
    excerpt: "Essential spare categories and service planning checkpoints to keep waste-handling fleets operational.",
    category: "MAINTENANCE",
  },
];

export function BlogSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
              Latest Insights
            </h2>
          </div>
          <a href="#" className="text-[#e8612c] font-semibold text-sm flex items-center gap-2">
            View All Articles <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                {/* Image placeholder - keeping space for future blog images */}
              </div>
              <div className="p-5 sm:p-7 bg-[#1c2535] flex-1 flex flex-col">
                <p className="text-[#e8612c] text-[0.75rem] font-black tracking-[0.1em] uppercase mb-4">
                  {post.category}
                </p>
                <h3 className="text-white font-bold text-xl mb-3 leading-[1.25] group-hover:text-[#e8612c] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-[0.95rem] leading-[1.6] mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <ArrowRight size={20} className="text-[#e8612c]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
