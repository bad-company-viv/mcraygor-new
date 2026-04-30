import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import antiSmogVideo from "../../../assets/videos/anti-smog.mov";

const actionVideos = [
  {
    id: "anti-smog-gun",
    title: "Anti-Smog Gun (Mist Cannon)",
    category: "Environmental Control",
    video: antiSmogVideo,
    thumbnail: "/images/machines/anti-smog-thumb.jpg",
    description: "Advanced atmospheric misting technology for localized dust suppression and air quality management."
  },
  {
    id: "jetting-unit",
    title: "Combined Jetting Unit",
    category: "Municipal Waste",
    video: antiSmogVideo, // Placeholder
    thumbnail: "/images/machines/jetting-unit-thumb.jpg",
    description: "Simultaneous high-pressure jetting and vacuum suction for efficient sewer line maintenance."
  },
  {
    id: "refuse-compactor",
    title: "Refuse Compactor",
    category: "Solid Waste",
    video: antiSmogVideo, // Placeholder
    thumbnail: "/images/machines/compactor-thumb.jpg",
    description: "High-efficiency solid waste collection and compaction for urban environments."
  }
];

export function MachinesInAction() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    setIsPlaying(true); // Auto-play new slide
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === selectedIndex && isPlaying) {
          video.play().catch(() => setIsPlaying(false));
        } else {
          video.pause();
        }
      }
    });
  }, [selectedIndex, isPlaying]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <section className="py-24 bg-[#0a0f16] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8612c] px-6 py-2 rounded-full mb-8">
            <span className="text-white text-xs font-black uppercase tracking-[0.2em]">Live Demonstration</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none mb-8">
            Machines <span className="text-[#e8612c]">In Action</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Witness the raw power and precision of McRAYGOR engineering through our live operational demonstrations.
          </p>
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {actionVideos.map((video, index) => (
                <div key={video.id} className="relative flex-[0_0_100%] min-w-0">
                  <div className="relative aspect-video bg-black overflow-hidden group">
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={video.video}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={togglePlay}
                    />
                    
                    {/* Slide Specific Content Overlay (Optional, but keeping it clean) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Play/Pause indicator on click */}
                    {!isPlaying && index === selectedIndex && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center animate-pulse">
                          <Play size={48} className="text-white fill-white ml-2" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Persistent Controls (outside embla flex for stability) */}
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-6 pointer-events-auto">
              <button
                onClick={togglePlay}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#e8612c] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-2xl"
              >
                {isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" className="ml-1" />}
              </button>
              <div className="hidden sm:block">
                <span className="text-[#e8612c] text-[10px] font-black uppercase tracking-[0.3em] block mb-1">Demonstration 0{selectedIndex + 1}</span>
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-none">
                  {actionVideos[selectedIndex].title}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3 pointer-events-auto">
              <button
                onClick={toggleMute}
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              <button className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all hidden md:flex">
                <Maximize2 size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-[#e8612c] transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-[#e8612c] transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators and Info below */}
        <div className="max-w-[1200px] mx-auto mt-12">
          {/* Dots */}
          <div className="flex justify-center gap-3 mb-12">
            {actionVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === selectedIndex ? "w-12 bg-[#e8612c]" : "w-3 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>

          {/* Description */}
          <div className="text-center max-w-4xl mx-auto pt-8 border-t border-white/10">
            <p className="text-xl md:text-3xl font-medium text-gray-400 italic leading-snug mb-8">
              "{actionVideos[selectedIndex].description}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="text-[#e8612c] text-xs font-black uppercase tracking-[0.4em]">{actionVideos[selectedIndex].category}</span>
              <div className="h-[1px] w-8 bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
