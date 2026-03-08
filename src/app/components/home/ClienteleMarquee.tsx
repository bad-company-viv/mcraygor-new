const clients = [
  { name: "Hindalco", type: "Private" },
  { name: "Reliance", type: "Private" },
  { name: "Gannon Dunkerley", type: "Private" },
  { name: "Unitech", type: "Private" },
  { name: "Jindal Steel & Power", type: "Private" },
  { name: "International Red Cross Society", type: "Private" },
  { name: "L&T", type: "Private" },
  { name: "DLF", type: "Private" },
  { name: "Genrobotics", type: "Private" },
  { name: "NCC", type: "Private" },
  { name: "NDMC", type: "Government" },
  { name: "PWSSB", type: "Government" },
  { name: "Delhi Jal Board", type: "Government" },
  { name: "PHED Haryana", type: "Government" },
  { name: "Kerala Water Authority", type: "Government" },
  { name: "Ministry of Defence", type: "Government" },
  { name: "Indian Army", type: "Government" },
  { name: "BHEL", type: "Government" },
  { name: "IOCL", type: "Government" },
  { name: "BMC", type: "Government" },
];

function ClientCard({ name, type }: { name: string; type: string }) {
  const typeColors: Record<string, string> = {
    Private: "#e8612c",
    Government: "#1c2535",
  };
  return (
    <div className="flex-shrink-0 mx-4 bg-white border border-gray-100 rounded-xl shadow-sm px-7 py-5 flex flex-col items-center justify-center min-w-[160px] hover:shadow-md transition-shadow">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-2 text-white font-bold text-lg"
        style={{ backgroundColor: typeColors[type] || "#1c2535" }}
      >
        {name.slice(0, 2)}
      </div>
      <span className="text-[#1c2535] font-semibold text-sm text-center leading-tight">{name}</span>
      <span className="text-gray-400 text-xs mt-0.5">{type}</span>
    </div>
  );
}

export function ClienteleMarquee() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-[#1c2535]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
            Our Esteemed Clientele
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Trusted by top-tier private sector leaders and major government institutions.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-0">
          {[...clients, ...clients].map((client, i) => (
            <ClientCard key={`${client.name}-${i}`} name={client.name} type={client.type} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative mt-4">
        <div className="flex animate-[marquee-reverse_35s_linear_infinite] gap-0">
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
            <ClientCard key={`rev-${client.name}-${i}`} name={client.name} type={client.type} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
