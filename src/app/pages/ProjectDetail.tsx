import { Link, useParams } from "react-router";
import { AlertCircle, CheckCircle, TrendingUp, Wrench } from "lucide-react";
import { getProjectBySlug, validateProductLink } from "../data/projectsData";


export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  // Handle 404 state for invalid slugs
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold text-[#1c2535]">Project Not Found</h2>
        <p className="text-gray-500">This project page doesn't exist or has been removed.</p>
        <Link 
          to="/projects" 
          className="bg-[#e8612c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d4531f] transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  // Get category badge color based on project type
  const getBadgeColor = () => {
    switch (project.projectType) {
      case 'GOVERNMENT':
        return 'bg-[#e8612c]';
      case 'PRIVATE':
        return 'bg-[#e8612c]';
      case 'INTERNATIONAL':
        return 'bg-[#e8612c]';
      default:
        return 'bg-[#e8612c]';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Title and Metadata */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Category Badge */}
          <div className="mb-4">
            <span className={`inline-block ${getBadgeColor()} text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider`}>
              {project.categoryBadge}
            </span>
          </div>

          {/* Project Title */}
          <h1 className="text-[#1c2535] mb-6" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
            {project.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1c2535]">{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.images && project.images.length > 0 && (
        <section className="bg-white py-8">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.images[0].url}
                alt={project.images[0].alt}
                loading="eager"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          {/* Challenge Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-[#e8612c]" />
              <h2 className="text-xl font-bold text-[#1c2535]">The Challenge</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-[15px]">
              {project.challenge}
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-[#1a5c3a]" />
              <h2 className="text-xl font-bold text-[#1c2535]">Our Solution</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-[15px]">
              {project.solution}
            </div>
          </div>

          {/* Equipment Used Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-[#e8612c]" />
              <h2 className="text-xl font-bold text-[#1c2535]">Equipment Used</h2>
            </div>
            <ul className="space-y-2">
              {project.equipmentUsed.map((equipment, index) => (
                <li key={index} className="flex items-start gap-2 text-[15px]">
                  <span className="text-[#e8612c] mt-1">•</span>
                  {equipment.productSlug && validateProductLink(equipment.productSlug) ? (
                    <Link 
                      to={`/products/${equipment.productSlug}`}
                      className="text-gray-700 hover:text-[#e8612c] transition-colors"
                    >
                      {equipment.name}
                    </Link>
                  ) : (
                    <span className="text-gray-700">{equipment.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Results Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-[#1a5c3a]" />
              <h2 className="text-xl font-bold text-[#1c2535]">Results & Impact</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-[15px]">
              {project.results}
            </div>
          </div>

          {/* Category Tags */}
          {project.categoryTags && project.categoryTags.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#1c2535] mb-4">Project Categories</h2>
              <div className="flex flex-wrap gap-2">
                {project.categoryTags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-white border border-gray-300 text-gray-700 text-xs font-medium px-3 py-1.5 rounded"
                    aria-label={`Category: ${tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
