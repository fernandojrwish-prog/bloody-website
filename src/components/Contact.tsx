import { motion } from "motion/react";
import { Instagram, Youtube, Music, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              FALE <span className="text-neon-red neon-text">CONOSCO</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 font-light max-w-md">
              Interessado em contratar a Blood Dragon para seu evento ou festival? 
              Entre em contato diretamente com nossa produção.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-neon-red/10 flex items-center justify-center border border-neon-red/20 group-hover:bg-neon-red group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-display font-bold text-neon-red uppercase tracking-widest mb-1">Telefone</p>
                  <a href="tel:+5584981191017" className="text-xl text-white hover:text-neon-red transition-colors">+55 (84) 98119-1017</a>
                  <p className="text-xs text-white/40 mt-1">Falar com Nando Lima</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-neon-red/10 flex items-center justify-center border border-neon-red/20 group-hover:bg-neon-red group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-display font-bold text-neon-red uppercase tracking-widest mb-1">E-mail</p>
                  <a href="mailto:bloodydragonband@gmail.com" className="text-xl text-white hover:text-neon-red transition-colors">bloodydragonband@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{ 
                backgroundImage: "url('/banda-bd-3.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            />
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <h3 className="text-2xl font-display font-bold mb-8 uppercase tracking-widest">Siga a Banda</h3>
              <div className="flex gap-8">
                <a 
                  href="https://www.instagram.com/bloodydragonband/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-red hover:text-neon-red hover:shadow-[0_0_20px_rgba(255,49,49,0.3)] transition-all duration-300 bg-absolute-black/40 backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a 
                  href="https://www.youtube.com/@bloodydragonband" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-red hover:text-neon-red hover:shadow-[0_0_20px_rgba(255,49,49,0.3)] transition-all duration-300 bg-absolute-black/40 backdrop-blur-sm"
                  aria-label="YouTube"
                >
                  <Youtube size={28} />
                </a>
                <a 
                  href="https://open.spotify.com/intl-pt/artist/1lfoG0BMWiKcvMY4nh4666?si=bRBOufABQPejcHh4od7rCA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-red hover:text-neon-red hover:shadow-[0_0_20px_rgba(255,49,49,0.3)] transition-all duration-300 bg-absolute-black/40 backdrop-blur-sm"
                  aria-label="Spotify"
                >
                  <Music size={28} />
                </a>
              </div>
              
              <div className="mt-12 p-6 border border-neon-red/20 rounded-xl bg-absolute-black/60 backdrop-blur-md">
                <p className="text-sm font-display font-bold text-neon-red uppercase tracking-widest mb-2">Novo Álbum em Breve</p>
                <p className="text-white/60 text-xs">FURIOUS FIRE FORCE - Lançamento 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
