import { Link } from "react-router";
import { SEO } from "../components/SEO";
import { projectsData } from "../data/projectsData";

export function Projects() {
  return (
    <>
      <SEO pageKey="projects" />
      
      {/* Header Section */}
      <section className="bg-[#1c2535] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 
            className="text-white mb-2" 
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            Global Impact Cases
          </h1>
          <div className="w-24 h-1 bg-[#1a5c3a] mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            Discover how McRAYGOR's equipment has been deployed across government, private, and international sectors to solve critical infrastructure challenges worldwide.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={project.images[0].url}
                    alt={project.images[0].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span 
                      className={`text-white text-xs font-semibold px-2.5 py-1 rounded-full ${
                        project.projectType === 'GOVERNMENT' ? 'bg-[#1a5c3a]' :
                        project.projectType === 'PRIVATE' ? 'bg-[#e8612c]' :
                        'bg-[#1c2535]'
                      }`}
                    >
                      {project.categoryBadge}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Client Name */}
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {project.client}
                  </p>
                  
                  {/* Project Title with Year */}
                  <h3 className="text-[#1c2535] font-bold mb-2" style={{ fontSize: "1rem", lineHeight: 1.4 }}>
                    {project.title}
                  </h3>
                  
                  {/* Description (truncated to 150 chars) */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {project.description.length > 150 
                      ? `${project.description.substring(0, 150)}...` 
                      : project.description}
                  </p>
                  
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categoryTags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link Button - pushed to bottom */}
                  <div className="flex items-center gap-2 text-[#e8612c] text-sm font-semibold group-hover:gap-3 transition-all mt-auto">
                    FULL CASE STUDY →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
