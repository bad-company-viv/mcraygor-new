import React from "react";
import { motion } from "framer-motion";

/**
 * Coordinates are manually calibrated (x%, y%) to align with
 * the artistic "india-industrial-map.png" background.
 */
const locations = [
  // ── North (Cleaned up cluster) ──
  { name: "Srinagar",    x: 28, y: 14 },
  { name: "Chandigarh",  x: 33, y: 25 },
  { name: "Gurugram",    x: 34, y: 31 },
  { name: "Kanpur",      x: 43, y: 36 },
  { name: "Gwalior",     x: 38, y: 40 },

  // ── West ──
  { name: "Jaipur",      x: 28, y: 38 },
  { name: "Surat",       x: 28, y: 54 },

  // ── Central / East ──
  { name: "Nagpur",      x: 43, y: 55 },
  { name: "Ranchi",      x: 57, y: 47 },
  { name: "Kolkata",     x: 61, y: 46 },

  // ── South ──
  { name: "Hyderabad",   x: 42, y: 65 },
  { name: "Chennai",     x: 46, y: 73 },
  { name: "Kochi",       x: 38, y: 75 },
];

export const InteractiveIndiaMap = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0f172a] shadow-2xl border border-gray-800">
        {/* Background Map */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/map/india-industrial-map.png"
            alt="India Map"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-50" />
        </div>

        {/* Markers */}
        <div className="absolute inset-0 z-10">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="absolute"
              style={{
                left: `${loc.x}%`,
                top: `${loc.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer radar ring */}
                <motion.div
                  animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (index * 0.4) % 2,
                  }}
                  className="absolute w-6 h-6 rounded-full bg-[#e8612c]"
                />
                {/* Core dot */}
                <div className="relative w-3 h-3 rounded-full bg-[#e8612c] shadow-[0_0_12px_rgba(232,97,44,0.9)] border border-white/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info badge moved below map */}
      <div className="mt-6 flex justify-center sm:justify-start">
        <div className="bg-black/20 backdrop-blur-md px-4 py-3 rounded-xl border border-white/5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#e8612c] animate-pulse" />
            <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.15em]">
              Active Support Hubs
            </span>
          </div>
          <div className="text-xl font-black text-white tracking-tighter leading-none">
            20+ <span className="text-[#e8612c]">CITIES</span>
          </div>
        </div>
      </div>
    </div>
  );
};