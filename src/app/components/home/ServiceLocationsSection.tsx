import { MapPin } from "lucide-react";
import { InteractiveIndiaMap } from "./InteractiveIndiaMap";

const coverageLocations = [
  {
    region: "North India",
    cities: "Gurugram, Noida, Chandigarh, Srinagar, Kanpur, Bahadurgarh, Amritsar, Dehradun",
    focus: "Sales, demos, commissioning and after-sales support",
  },
  {
    region: "West India",
    cities: "Mumbai, Nagpur, Gwalior, Jaipur, Surat",
    focus: "Industrial equipment support and municipal deployments",
  },
  {
    region: "South India",
    cities: "Hyderabad, Chennai, Kochi",
    focus: "Service response for utilities, plants and urban bodies",
  },
  {
    region: "East & Central India",
    cities: "Kolkata, Rourkela, Ranchi, Sikkim",
    focus: "Project execution support and service coordination",
  },
];

const supportHighlights = [
  {
    title: "Sales Support",
    description: "Application guidance, equipment selection and proposal support for municipal and industrial requirements.",
  },
  {
    title: "Service Support",
    description: "Installation assistance, breakdown response, maintenance planning and spare support across India.",
  },
  {
    title: "Head Office",
    description: "Plot 14, Dhumaspur Road, Sector 67, Badshahpur, Gurugram, Haryana - 122101",
  },
];

export function ServiceLocationsSection() {
  return (
    <section className="bg-white border-t border-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
        {/* Left Side: Network Visualization */}
        <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-auto bg-[#1c2535] overflow-hidden flex flex-col justify-center p-8 lg:p-12">
          <div className="relative z-10 mb-10">
            <div className="inline-block bg-[#e8612c] px-6 py-2 rounded-full mb-8">
              <span className="text-white text-xs font-black uppercase tracking-[0.2em]">Live Network</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              All India<br /><span className="text-[#e8612c]">Operational</span><br />Presence
            </h3>
            <p className="text-gray-400 max-w-sm text-base leading-relaxed font-medium">
              Real-time support and technical deployment across every major industrial hub in India.
            </p>
          </div>
          
          <div className="relative z-10 w-full">
            <InteractiveIndiaMap />
          </div>
        </div>

        {/* Right Side: Network Info */}

        <div className="w-full lg:w-[60%] flex flex-col justify-center bg-[#f8fafc] px-8 py-16 md:px-16 lg:px-24">
          <div className="max-w-[900px]">
            <h2 className="text-[#1c2535] text-4xl md:text-5xl font-black tracking-tighter uppercase mb-12">
              Regional Coverage
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 mb-16">
              {coverageLocations.map((loc) => (
                <div key={loc.region} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 rounded bg-[#e8612c]/10 flex items-center justify-center">
                      <MapPin size={12} className="text-[#e8612c]" />
                    </div>
                    <span className="text-[#e8612c] text-[10px] font-black uppercase tracking-[0.2em]">{loc.region}</span>
                  </div>
                  <h4 className="text-xl font-black text-[#1c2535] mb-2 group-hover:text-[#e8612c] transition-colors uppercase tracking-tight">
                    {loc.cities}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {loc.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {supportHighlights.map((item) => (
                  <div key={item.title}>
                    <h5 className="text-[#1c2535] font-black uppercase text-[10px] tracking-[0.2em] mb-3 flex items-center gap-2">
                      <div className="w-1 h-3 bg-[#e8612c] rounded-full" />
                      {item.title}
                    </h5>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
