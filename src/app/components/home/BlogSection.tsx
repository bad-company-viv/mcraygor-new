import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Mechanized Sanitation and Worker Safety",
    excerpt:
      "How machine-led operations reduce hazardous manual interventions and improve sanitation worker dignity.",
  },
  {
    title: "Choosing the Right Jetting-Cum-Suction Configuration",
    excerpt:
      "A practical guide for municipalities and industrial teams selecting the right capacity and use-case fit.",
  },
  {
    title: "Spares Planning for High-Uptime Fleet Operations",
    excerpt:
      "Essential spare categories and service planning checkpoints to keep waste-handling fleets operational.",
  },
];

export function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#e8612c] text-sm font-semibold uppercase tracking-widest mb-2">Knowledge Center</p>
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
            <article key={post.title} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#1c2535] font-bold text-lg mb-3" style={{ lineHeight: 1.35 }}>
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
              <a href="#" className="text-[#e8612c] text-sm font-semibold inline-flex items-center gap-1.5">
                Read More <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
