import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

type HighlightsPayload = {
  title?: string;
  metrics?: Stat[];
};

const fallbackTitle = "Quantifying Excellence: Operational & Manufacturing Highlights";

const fallbackStats: Stat[] = [
  { value: 25, suffix: "+", label: "Years in Business", description: "Manufacturing Legacy" },
  { value: 1200, suffix: "+", label: "Tenders Executed", description: "Government & Institutional" },
  { value: 40000, suffix: "+", label: "Machines Manufactured", description: "Municipal & Industrial" },
  { value: 500, suffix: "+", label: "Machines Running Worldwide", description: "Active Fleet" },
  { value: 18, suffix: "+", label: "Countries Served", description: "Global Presence" },
  { value: 1200, suffix: "+", label: "Projects Completed", description: "Public & Private Sectors" },
];

function isValidStat(value: unknown): value is Stat {
  if (!value || typeof value !== "object") return false;
  const stat = value as Partial<Stat>;
  return (
    typeof stat.value === "number" &&
    typeof stat.suffix === "string" &&
    typeof stat.label === "string" &&
    typeof stat.description === "string"
  );
}

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
  const [sectionTitle, setSectionTitle] = useState(fallbackTitle);
  const [stats, setStats] = useState<Stat[]>(fallbackStats);

  useEffect(() => {
    let active = true;

    async function loadHighlights() {
      try {
        const response = await fetch("/data/operational-highlights.json");
        if (!response.ok) return;
        const payload = (await response.json()) as HighlightsPayload;

        if (!active) return;

        if (typeof payload.title === "string" && payload.title.trim().length > 0) {
          setSectionTitle(payload.title.trim());
        }

        if (Array.isArray(payload.metrics)) {
          const nextStats = payload.metrics.filter(isValidStat);
          if (nextStats.length > 0) {
            setStats(nextStats);
          }
        }
      } catch {
        // Keep fallback values when external content isn't available.
      }
    }

    loadHighlights();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="bg-[#0d1117] -mt-px pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 xl:px-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-white" style={{ fontSize: "clamp(1.25rem, 5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.3 }}>
            {sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 xl:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-8 px-4 xl:px-5 border border-white/10 relative group rounded-xl"
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
