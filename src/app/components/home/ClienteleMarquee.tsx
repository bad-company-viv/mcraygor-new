const clients = [
  // Private Sector Clients
  { name: "Hindalco", type: "Private", logo: "/clients-logo/hindalco.jpg" },
  { name: "Reliance Industries", type: "Private", logo: "/clients-logo/reliance-industries.jpg" },
  { name: "Gannon Dunkerley", type: "Private", logo: "/clients-logo/gannon-dunkerley.jpg" },
  { name: "Unitech", type: "Private", logo: "/clients-logo/unitech.jpg" },
  { name: "JSW Steel", type: "Private", logo: "/clients-logo/jsw.jpg" },
  { name: "L&T", type: "Private", logo: "/clients-logo/l&t.jpg" },
  { name: "DLF", type: "Private", logo: "/clients-logo/dlf-building.jpg" },
  { name: "Genrobotics", type: "Private", logo: "/clients-logo/gemrobotics.jpg" },
  { name: "G3R", type: "Private", logo: "/clients-logo/g3r.jpg" },
  { name: "NCC", type: "Private", logo: "/clients-logo/ncc.jpg" },
  { name: "ANSAL", type: "Private", logo: "/clients-logo/ansal.jpg" },
  { name: "BTL EPC", type: "Private", logo: "/clients-logo/btl-epc.jpg" },
  { name: "ACC Cement", type: "Private", logo: "/clients-logo/acc-cement.jpg" },
  { name: "Shree Cement", type: "Private", logo: "/clients-logo/shree-cement.jpg" },
  { name: "Prism Johnson", type: "Private", logo: "/clients-logo/prism-johnson.jpg" },
  { name: "Bharat Petroleum", type: "Private", logo: "/clients-logo/bharat-petroleum.jpg" },
  { name: "Vizag Steel", type: "Private", logo: "/clients-logo/vizag-steel.jpg" },
  { name: "Industrial Infrastructure Partner", type: "Private", logo: "/clients-logo/12.jpg" },
  
  // Government Clients
  { name: "Delhi Municipal Council", type: "Government", logo: "/clients-logo/delhi-municipal-council.jpg" },
  { name: "Delhi PWD", type: "Government", logo: "/clients-logo/delhi-pwd.jpg" },
  { name: "Delhi Jal Board", type: "Government", logo: "/clients-logo/delhi-jal-board.jpg" },
  { name: "HWSSB", type: "Government", logo: "/clients-logo/hyderabad-metropolitan-water-supply-and-sewerage-board.jpg" },
  { name: "Vijayawada Municipal Corporation", type: "Government", logo: "/clients-logo/vijayawada.jpg" },
  { name: "Kalyan Dombivli Municipal Corporation", type: "Government", logo: "/clients-logo/kalyan-dombivili-municipal-corporation.jpg" },
  { name: "Kerala Water Authority", type: "Government", logo: "/clients-logo/kerela-water-authority.jpg" },
  { name: "BHEL", type: "Government", logo: "/clients-logo/bhel.jpg" },
  { name: "Indian Oil Corporation", type: "Government", logo: "/clients-logo/indian-oil.jpg" },
  { name: "Indian Army", type: "Government", logo: "/clients-logo/indian-army.jpg" },
  { name: "BMC", type: "Government", logo: "/clients-logo/bmc.jpg" },
  { name: "Gurugram Municipal Corporation", type: "Government", logo: "/clients-logo/gurugram-municipal-corporation.jpg" },
  { name: "GMDA", type: "Government", logo: "/clients-logo/gurugram-metropolitan-development-authority.jpg" },
  { name: "Vadodara Municipal Corporation", type: "Government", logo: "/clients-logo/vadodara-municipal-corporation.jpg" },
  { name: "Municipal Council Tadipatri", type: "Government", logo: "/clients-logo/municipal-council-tadipatri.jpg" },
  { name: "Jammu Municipal Corporation", type: "Government", logo: "/clients-logo/jammu-municipal.jpg" },
  { name: "RUIDP", type: "Government", logo: "/clients-logo/rajasthan-urban-infrastructure-development-project.png" },
  { name: "United Nations", type: "Government", logo: "/clients-logo/united-nations.jpg" },
  { name: "International Red Cross", type: "Private", logo: "/clients-logo/comite-international.jpg" },
];

function ClientCard({ name, type, logo }: { name: string; type: string; logo: string }) {
  return (
    <div className="flex-shrink-0 mx-2 md:mx-4 bg-white border border-gray-100 shadow-sm px-6 py-4 md:px-12 md:py-10 flex flex-col items-center justify-center w-[160px] h-[100px] md:w-[400px] md:h-[240px] hover:shadow-md transition-shadow">
      <div className="w-24 h-16 md:w-56 md:h-40 flex items-center justify-center">
        <img 
          src={logo} 
          alt={`McRAYGOR Client: ${name} logo`} 
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div 
          className="w-10 h-10 md:w-16 md:h-16 rounded-full hidden items-center justify-center text-white font-bold text-base md:text-2xl"
          style={{ backgroundColor: type === "Private" ? "#e8612c" : "#1c2535" }}
        >
          {name.slice(0, 2)}
        </div>
      </div>
    </div>
  );
}

export function ClienteleMarquee() {
  // Split clients into two rows for better variety
  const row1 = clients.slice(0, 19);
  const row2 = clients.slice(19);

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
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-[marquee_60s_linear_infinite] min-w-max flex-nowrap group-hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((client, i) => (
            <ClientCard key={`${client.name}-${i}`} name={client.name} type={client.type} logo={client.logo} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative mt-4 flex overflow-hidden group">
        <div className="flex animate-[marquee-reverse_70s_linear_infinite] min-w-max flex-nowrap group-hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((client, i) => (
            <ClientCard key={`rev-${client.name}-${i}`} name={client.name} type={client.type} logo={client.logo} />
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
