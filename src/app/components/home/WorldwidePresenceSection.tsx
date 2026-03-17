import { MapPin } from "lucide-react";

type PresenceRegion = {
  name: string;
  note: string;
  top: string;
  left: string;
};

// Regions defined in SRS pre-header requirements.
const presenceRegions: PresenceRegion[] = [
  { name: "Asia Pacific", note: "Regional Coverage", top: "45%", left: "73%" },
  { name: "Europe", note: "Regional Coverage", top: "36%", left: "52%" },
  { name: "USA", note: "Regional Coverage", top: "38%", left: "22%" },
  { name: "South America", note: "Regional Coverage", top: "66%", left: "30%" },
  { name: "Gulf", note: "Regional Coverage", top: "50%", left: "58%" },
  { name: "Australia", note: "Regional Coverage", top: "76%", left: "84%" },
  { name: "UK", note: "Regional Coverage", top: "33%", left: "49%" },
  { name: "India", note: "Regional Coverage", top: "52%", left: "67.5%" },
];

const WORLD_MAP_IMAGE = "/images/map/map.jpeg";

export function WorldwidePresenceSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f7f8fa]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-[#1c2535] mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Our <span className="text-[#1a5c3a]">Worldwide Presence</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Serving clients across continents with local expertise and global standards.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-[#1c2535]/10 shadow-xl bg-[#0f172a] relative aspect-[1408/633]">
          <img
            src={WORLD_MAP_IMAGE}
            alt="World map showing McRAYGOR market presence"
            className="w-full h-full object-cover opacity-85"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320]/40 via-transparent to-[#0b1320]/20" />

          {presenceRegions.map((region) => (
            <div
              key={region.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: region.top, left: region.left }}
            >
              {/* Concentric pulse rings */}
              <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute w-5 h-5 rounded-full bg-[#1a5c3a]/30 animate-ping" style={{ animationDuration: '2s' }}></div>
                <div className="absolute w-5 h-5 rounded-full bg-[#1a5c3a]/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}></div>
              </div>
              
              {/* Main pin */}
              <div className="relative w-5 h-5 rounded-full bg-[#1a5c3a] border-2 border-white shadow-lg flex items-center justify-center animate-pulse">
                <MapPin size={11} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {presenceRegions.map((region) => (
            <div key={region.name} className="bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <div className="inline-flex items-center text-[#1a5c3a]">
                  <MapPin size={14} />
                </div>
                <span className="w-2 h-2 rounded-full bg-[#86efac]" />
              </div>
              <p className="text-[#1c2535] font-semibold text-sm">{region.name}</p>
              <p className="text-gray-500 text-xs mt-1">{region.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
