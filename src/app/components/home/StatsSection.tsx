import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years in Business", description: "Since 2000" },
  { value: 40000, suffix: "+", label: "Total Machines Manufactured", description: "Municipal and Industrial Segments" },
  { value: 500, suffix: "+", label: "Machines Running Worldwide", description: "Active Fleet" },
  { value: 18, suffix: "+", label: "Countries Served", description: "Global Presence" },
  { value: 1200, suffix: "+", label: "Projects Completed", description: "Municipal & Industrial" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="bg-[#0d1117] py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
            McRAYGOR by the Numbers: Scale & Global Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-8 px-4 ${i < stats.length - 1 ? "border-r border-white/10 last:border-r-0" : ""} relative group`}
            >
              <div className="absolute inset-0 bg-[#e8612c]/0 group-hover:bg-[#e8612c]/5 transition-colors rounded" />
              <div
                className="text-[#e8612c] mb-2 relative"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1 }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-sm mb-1 relative">{stat.label}</div>
              <div className="text-gray-500 text-xs relative">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
