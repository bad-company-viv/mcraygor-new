import { useState } from "react";
import { Globe, ChevronDown, ArrowUpRight } from "lucide-react";

const regions = ["Asia Pacific", "Europe", "USA", "South America", "Gulf", "Australia", "UK", "India"];

export function PreHeader() {
  const [region, setRegion] = useState(() => localStorage.getItem("mcraygor-region") || "India");
  const [open, setOpen] = useState(false);

  const handleRegionChange = (r: string) => {
    setRegion(r);
    setOpen(false);
    localStorage.setItem("mcraygor-region", r);
  };

  return (
    <div className="bg-[#1c2535] text-white py-2 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <Globe size={14} />
            <span>Region: {region}</span>
            <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <div className="absolute top-full left-0 mt-1 bg-[#263045] border border-white/10 rounded shadow-xl z-50 min-w-[180px]">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => handleRegionChange(r)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${region === r ? "text-[#e8612c]" : "text-gray-300"}`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>

        <a
          href="https://mcraygor-global-big-section.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors group"
        >
          Visit Global Website
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
