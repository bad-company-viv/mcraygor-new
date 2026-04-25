import { useState } from "react";
import { Globe, ChevronDown, ArrowUpRight, Phone, Mail } from "lucide-react";

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
    <div className="bg-[#1c2535] text-white py-2 px-4 md:px-6 border-b border-white/5 relative z-[110]">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-4">
        {/* Left Side: Region & Global */}
        <div className="flex items-center gap-3 md:gap-4 ml-24">
          <a
            href="https://mcraygor-global-big-section.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white border border-white/30 px-2 md:px-3 py-1.5 rounded-none hover:bg-white/10 transition-all active:scale-95"
          >
            <span className="hidden md:inline">Visit Global Website</span>
            <span className="md:hidden">Global</span>
            <ArrowUpRight size={12} className="text-[#e8612c]" />
          </a>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white border border-white/30 px-2 md:px-3 py-1.5 rounded-none hover:bg-white/10 transition-all active:scale-95"
            >
              <Globe size={11} className="text-[#e8612c]" />
              <span>{region}</span>
              <ChevronDown size={10} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div className="absolute top-full left-0 mt-0 bg-[#1c2535]/95 backdrop-blur-md border border-white/10 rounded-none shadow-2xl z-[100] min-w-[160px]">
                {regions.map((r) => (
                  <button
                    key={r}
                    onClick={() => handleRegionChange(r)}
                    className={`block w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 ${region === r ? "text-[#e8612c]" : "text-gray-300"}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+918447445599" className="flex items-center gap-2 text-[10px] md:text-[11px] hover:text-[#e8612c] transition-colors">
            <Phone size={12} className="text-[#e8612c]" />
            <span className="font-bold">+91 8447445599</span>
          </a>
          <div className="h-3 w-px bg-white/10 hidden lg:block" />
          <a href="mailto:support@mcraygor.com" className="hidden lg:flex items-center gap-2 text-[11px] hover:text-[#e8612c] transition-colors">
            <Mail size={13} className="text-[#e8612c]" />
            <span className="font-bold">support@mcraygor.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
