import { useParams, Link } from "react-router";
import {
  ArrowLeft, Calendar, Clock, Tag, Share2,
  Linkedin, Twitter, Facebook, MessageCircle,
  ChevronRight, Bookmark, ThumbsUp, ArrowRight
} from "lucide-react";
import { blogPosts } from "../data/blogData";
import { SEO } from "../components/SEO";
import { useEffect, useState, useMemo } from "react";

export function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (window.scrollY / totalHeight) * 100;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-4xl font-black text-[#1c2535] mb-6">Article Not Found</h1>
        <Link
          to="/"
          className="bg-[#e8612c] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#1c2535] transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#0077b5]"
    },
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: "hover:bg-[#1da1f2]"
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#4267B2]"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={18} />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
      color: "hover:bg-[#25d366]"
    },
  ];

  const seoMetadata = useMemo(() => ({
    title: `${post.title} | McRAYGOR® Insights`,
    description: post.excerpt,
    keywords: `McRAYGOR, ${post.category}, industrial cleaning, waste management, municipal engineering`,
    ogTitle: `${post.title} | McRAYGOR® Insights`,
    ogDescription: post.excerpt,
    ogImage: post.image,
    ogType: 'article',
    canonical: `https://www.mcraygor.com/blog/${post.slug}`
  }), [post.title, post.excerpt, post.category, post.image, post.slug]);

  // JSON-LD Structured Data for Blog Post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": [{
        "@type": "Organization",
        "name": "McRAYGOR® Mechanicals",
        "url": "https://www.mcraygor.com"
      }],
    "description": post.excerpt,
    "publisher": {
      "@type": "Organization",
      "name": "McRAYGOR®",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mcraygor.com/mcraygor-logo.jpeg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : `https://www.mcraygor.com/blog/${post.slug}`
    }
  };

  return (
    <div className="bg-white">
      <SEO metadata={seoMetadata} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-[#e8612c] z-[110] transition-transform duration-150 ease-out origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})`, width: '100%' }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a0f18]">
        <div className="absolute inset-0 opacity-40">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/80 to-transparent" />
        </div>

        <div className="max-w-[1100px] mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#e8612c] mb-10 transition-all text-xs font-black uppercase tracking-[0.2em] group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Insights & Engineering News
          </Link>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="bg-[#e8612c] text-white px-5 py-2 rounded-lg text-[10px] font-black tracking-[0.25em] uppercase shadow-lg shadow-orange-500/20">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <Calendar size={14} className="text-[#e8612c]" />
              {post.date}
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <Clock size={14} className="text-[#e8612c]" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-white text-4xl md:text-7xl font-black leading-[1.05] mb-10 tracking-tighter uppercase max-w-4xl">
            {post.title}
          </h1>

          <p className="text-gray-300 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl border-l-4 border-[#e8612c] pl-8">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-28 bg-[#fdfdfd]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 xl:gap-24">

            {/* Article Content */}
            <div className="relative">
              {/* Floating Social Sidebar */}
              <div className="hidden lg:block absolute -left-28 top-0 h-full">
                <div className="sticky top-32 space-y-4 flex flex-col items-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 vertical-text mb-6">Share</p>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 ${social.color} hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white`}
                      title={`Share on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <article className="prose prose-lg md:prose-xl max-w-none 
                prose-headings:text-[#1c2535] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
                prose-p:text-[#374151] prose-p:leading-[1.9] prose-p:font-medium
                prose-strong:text-[#1c2535] prose-strong:font-black
                prose-blockquote:border-[#e8612c] prose-blockquote:bg-gray-50 prose-blockquote:rounded-2xl prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:not-italic prose-blockquote:text-[#1c2535] prose-blockquote:font-bold
                prose-li:text-[#374151] prose-li:font-medium
                prose-img:rounded-3xl prose-img:shadow-2xl">

                <div
                  className="blog-rich-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Footer - Consolidated */}
                <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
                  <div className="lg:hidden flex flex-col gap-6">
                    <span className="text-[#1c2535] font-black text-xs uppercase tracking-widest">Share this insight:</span>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 ${social.color} hover:text-white hover:border-transparent transition-all bg-white`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                    <button className="flex items-center gap-3 text-[#1c2535] hover:text-[#e8612c] transition-colors font-black text-xs uppercase tracking-widest group">
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#e8612c]/10 transition-colors">
                        <ThumbsUp size={18} />
                      </div>
                      Helpful
                    </button>
                    <button className="flex items-center gap-3 text-[#1c2535] hover:text-[#e8612c] transition-colors font-black text-xs uppercase tracking-widest group">
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#e8612c]/10 transition-colors">
                        <Bookmark size={18} />
                      </div>
                      Save Insight
                    </button>
                  </div>
                </div>
              </article>

              {/* Related Posts Bottom Section */}
              <div className="mt-32 pt-20 border-t border-gray-100">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-[#1c2535] text-3xl font-black uppercase tracking-tighter">Recommended <span className="text-[#e8612c]">Reading</span></h3>
                  <Link to="/" className="text-[#e8612c] font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-3 transition-all">
                    View All Insights <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map((related) => (
                    <Link key={related.slug} to={`/blog/${related.slug}`} className="group">
                      <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                        <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-md text-[#e8612c] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">{related.category}</span>
                        </div>
                      </div>
                      <h4 className="text-[#1c2535] font-black text-xl uppercase leading-tight group-hover:text-[#e8612c] transition-colors line-clamp-2">{related.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">


              {/* Related Posts Sidebar */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                <h4 className="text-[#1c2535] font-black text-xs uppercase tracking-[0.2em] mb-8 pb-4 border-b border-gray-50 flex items-center justify-between">
                  Recent Insights
                  <Clock size={14} className="text-gray-300" />
                </h4>
                <div className="space-y-8">
                  {blogPosts.filter(p => p.slug !== post.slug).map((related) => (
                    <Link key={related.slug} to={`/blog/${related.slug}`} className="group flex gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={related.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[#e8612c] text-[9px] font-black uppercase tracking-widest mb-1.5">{related.category}</span>
                        <h5 className="text-[#1c2535] font-bold text-sm leading-snug group-hover:text-[#e8612c] transition-colors line-clamp-2 uppercase">{related.title}</h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Callout */}
              <div className="bg-[#f8fafc] rounded-[2rem] p-8 border border-gray-100 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#e8612c]/10 flex items-center justify-center text-[#e8612c] mb-6">
                    <MessageCircle size={24} />
                  </div>
                  <h4 className="text-[#1c2535] font-black text-xl uppercase tracking-tight mb-4">Stay Informed</h4>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">Join 5,000+ industry professionals receiving our monthly technical updates.</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:border-[#e8612c] outline-none transition-all shadow-sm"
                    />
                    <button className="w-full bg-[#1c2535] text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-[#e8612c] transition-all shadow-lg">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
