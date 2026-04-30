import { useMemo, useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { projectsData } from "../../data/projectsData";

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProjectsInstallationsSection() {
  const projects = useMemo(() => projectsData.slice(0, 6), []);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  if (!activeProject) return null;

  const goToPrev = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  }, [projects.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  }, [projects.length]);

  useEffect(() => {
    const timer = setInterval(goToNext, 6000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section
      className="py-16 md:py-20 bg-[#f5f6f7] relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(28,37,53,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,37,53,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="text-[#1a5c3a] text-xs sm:text-sm font-bold uppercase tracking-[0.14em] mb-3">
            Projects & Applications
          </p>
          <h2 className="text-[#1c2535] mb-4" style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>
            Landmark <span className="text-[#1a5c3a]">Projects</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Selected applications and installations showcasing McRAYGOR equipment in action across various industrial hubs.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 lg:gap-5 items-start">
          <div className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] md:min-h-[500px] border border-[#1c2535]/10 shadow-xl bg-[#1c2535]">
            <img
              key={activeIndex}
              src={activeProject.images[0]?.url}
              alt={activeProject.images[0]?.alt || activeProject.title}
              className="absolute inset-0 w-full h-full object-cover animate-[fadeIn_0.6s_ease-in-out]"
            />
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>
            <div className="absolute inset-0 bg-gradient-to-t from-[#081421]/90 via-[#081421]/55 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <div className="hidden sm:inline-flex bg-[#e8612c] text-white items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                Landmark
              </div>
              <div className="bg-[#1a5c3a] text-white inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                <CalendarDays size={14} />
                {activeProject.year}
              </div>
            </div>

            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous project"
              className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-[#1c2535] flex items-center justify-center transition-colors z-30"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project"
              className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-[#1c2535] flex items-center justify-center transition-colors z-30"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute left-5 right-5 sm:left-8 sm:right-8 bottom-5 sm:bottom-8 text-white">
              <div className="inline-flex items-center gap-2 text-sm text-white/85 mb-3">
                <MapPin size={14} className="text-[#e8612c]" />
                {activeProject.location}
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
                {activeProject.title}
              </h3>
              <p className="hidden sm:block text-sm sm:text-lg text-gray-200 max-w-3xl leading-relaxed mb-4 sm:mb-5">
                {activeProject.description}
              </p>
              <Link
                to={`/projects/${activeProject.slug}`}
                className="inline-flex items-center gap-2 text-[#4ade80] font-semibold hover:gap-3 transition-all"
              >
                View Project Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <aside className="bg-white/90 backdrop-blur-sm border border-[#1c2535]/10 shadow-sm p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs sm:text-sm font-black text-gray-500 uppercase tracking-[0.12em]">All Projects</p>
              <Link to="/projects" className="text-xs sm:text-sm font-semibold text-[#1a5c3a] hover:text-[#14532d]">
                View All
              </Link>
            </div>

            <div className="space-y-2">
              {projects.map((project, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left rounded-xl px-3 py-3 transition-all border ${selected
                        ? "bg-[#136f3a] text-white border-[#136f3a] shadow-md"
                        : "bg-white text-[#1c2535] border-gray-100 hover:border-[#1a5c3a]/30"
                      }`}
                  >
                    <div className={`text-sm font-black mb-1 ${selected ? "text-[#a7f3d0]" : "text-[#1a5c3a]"}`}>
                      {formatIndex(index)}
                    </div>
                    <div className="font-semibold text-sm leading-snug mb-1.5">
                      {project.title}
                    </div>
                    <div className={`inline-flex items-center gap-1.5 text-xs ${selected ? "text-green-100" : "text-gray-500"}`}>
                      <MapPin size={12} />
                      {project.location}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
