import { Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function Breadcrumb({ items, title, subtitle, backgroundImage = "/images/manufacturing-facility.png" }: BreadcrumbProps) {
  return (
    <section 
      className="relative py-20 bg-gradient-to-r from-[#1c2535]/90 to-[#2d3748]/90 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c2535]/85 to-[#2d3748]/75"></div>
      
      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
          <Link 
            to="/" 
            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
          >
            <Home size={16} />
            Home
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-gray-400" />
              {item.href ? (
                <Link 
                  to={item.href} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Title Section */}
        <div className="max-w-4xl">
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-300 text-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#e8612c]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1a5c3a]/20 rounded-full blur-3xl"></div>
    </section>
  );
}