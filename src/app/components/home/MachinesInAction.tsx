import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeVideo] = useState(actionVideos[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(error => {
          console.log("Video play failed:", error);
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-24 bg-[#1c2535] text-white overflow-hidden">
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

        <div className="max-w-[1200px] mx-auto">
          {/* Main Video Player - Full Width */}
          <div className="relative overflow-hidden bg-black shadow-2xl group mb-12">
            <video
              ref={videoRef}
              src={activeVideo.video}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover aspect-video cursor-pointer"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#e8612c] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-xl"
                  >
                    {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                  </button>
                  <div>
                    <span className="text-[#e8612c] text-xs font-black uppercase tracking-widest block mb-1">Now Playing</span>
                    <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight">{activeVideo.title}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                  <button className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors hidden md:flex">
                    <Maximize2 size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quote / Description below video */}
          <div className="text-center max-w-4xl mx-auto pt-8 border-t border-white/10">
            <p className="text-2xl md:text-4xl font-medium text-gray-300 italic leading-snug mb-8">
              "{activeVideo.description}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[#e8612c]" />
              <span className="text-[#e8612c] text-xs font-black uppercase tracking-[0.3em]">{activeVideo.category}</span>
              <div className="h-[2px] w-12 bg-[#e8612c]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
