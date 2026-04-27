import { motion } from "motion/react";
import { Play } from "lucide-react";

const videoList = [
  {
    id: "oeSgEqyV2o8",
    title: "We Are Free",
    thumbnail: "https://img.youtube.com/vi/oeSgEqyV2o8/maxresdefault.jpg"
  },
  {
    id: "e55tqwbkeLA",
    title: "Live Honestly",
    thumbnail: "https://img.youtube.com/vi/e55tqwbkeLA/maxresdefault.jpg"
  }
];

export default function Videos() {
  return (
    <section id="videos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
          VÍDEOS <span className="text-neon-red neon-text">OFICIAIS</span>
        </h2>

        <div className="flex flex-col items-center gap-16 max-w-4xl mx-auto">
          {videoList.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative w-full"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-red/20 to-blood-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card overflow-hidden aspect-video border border-white/10 group-hover:border-neon-red/50 transition-all duration-500">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Custom Overlay (Optional, but let's keep it simple with standard iframe for better UX) */}
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-red transition-colors uppercase tracking-widest">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-neon-red/60 group-hover:text-neon-red transition-colors">
                  <Play size={16} fill="currentColor" />
                  <span className="text-xs font-display font-bold uppercase">Assista Agora</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blood-red/5 rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  );
}
