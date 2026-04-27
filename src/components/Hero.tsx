import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-40 pointer-events-none">
          <img 
            src="/only-dragon.png" 
            alt="" 
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blood-red/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex justify-center">
            <img 
              src="/bloodysite.png" 
              alt="Bloody Dragon" 
              className="h-20 md:h-32 lg:h-40 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h1 className="mb-6 leading-none">
            <span className="block text-2xl md:text-3xl mt-4 font-light tracking-[0.3em] text-white/80 font-display">
              O HARD ROCK OITENTISTA <br />RENASCE NO FUTURO
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 font-light leading-relaxed">
            Riffs poderosos, solos incendiários e a energia visceral do rock.
          </p>

          <div className="flex flex-col items-center justify-center gap-8">
            <a 
              href="#shows"
              className="px-8 py-3 text-sm font-display font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 border-b border-white/10 hover:border-neon-red"
            >
              Ver Agenda de Shows
            </a>
            <a 
              href="https://open.spotify.com/intl-pt/artist/1lfoG0BMWiKcvMY4nh4666?si=bRBOufABQPejcHh4od7rCA"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button group"
            >
              Ouça Agora no Spotify
            </a>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 max-w-xs w-full"
            >
              <img 
                src="/ep-nightmare.jpg" 
                alt="EP Nightmare Cover" 
                className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(255,49,49,0.3)] border border-neon-red/20"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neon-red to-transparent animate-bounce" />
    </section>
  );
}
