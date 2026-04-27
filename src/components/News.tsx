import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const newsLinks = [
  { title: "Blood Dragon lança EP Nightmare e mostra a força do hard rock nacional", url: "https://metalneverdie.com.br/blood-dragon-lanca-ep-nighmare-e-mostra-a-forca-do-hard-rock-nacional" },
  { title: "Bloody Dragon lança primeiro EP Nightmare nas plataformas digitais", url: "https://www.pautalocal.com.br/post/m%C3%BAsica-bloody-dragon-lan%C3%A7a-primeiro-ep-nigthmare-nas-plataformas-digitais" },
  { title: "Bloody Dragon renasce em Natal com o EP Nightmare", url: "https://bolsadediscos.com.br/bloody-dragon-renasce-em-natal-com-o-ep-nightmare-e-o-mesmo-espirito-agressivo/" },
  { title: "Entrevista Exclusiva: Bloody Dragon", url: "https://www.reidjou.com/entrevistas/entrevista-bloody-dragon" },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-16">
          BLOOD DRAGON NA <span className="text-neon-red neon-text">MÍDIA</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative aspect-video bg-gradient-to-br from-blood-red to-black flex items-center justify-center p-8">
              {/* Real Roadie Crew Cover Image */}
              <div className="relative w-48 h-64 bg-black border-2 border-neon-red shadow-[0_0_30px_rgba(255,49,49,0.3)] overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/roadie-crew-photo.jpg" 
                  alt="Roadie Crew Cover" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4 text-neon-red uppercase">
                Destaque na Revista Roadie Crew
              </h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                A cena do rock nacional segue revelando nomes promissores, e a banda Bloody Dragon é um dos grandes destaques do momento. Em uma entrevista recente à tradicional Revista Roadie Crew, o grupo potiguar abriu o jogo sobre sua trajetória, influências e planos para o futuro.
              </p>
              <div className="flex items-center gap-2 text-xs font-display font-bold text-white/40 uppercase tracking-widest">
                <span>Edição #290</span>
                <span className="w-8 h-px bg-white/20" />
                <span>Cenário</span>
              </div>
            </div>
          </motion.article>

          {/* Links List */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white/80 mb-8 flex items-center gap-4">
              Últimas Matérias
              <span className="flex-1 h-px bg-white/10" />
            </h3>
            
            {newsLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-5 glass-card hover:border-neon-red/40 group transition-all duration-300"
              >
                <span className="text-white/80 group-hover:text-white transition-colors pr-4">
                  {link.title}
                </span>
                <ExternalLink size={18} className="text-neon-red/40 group-hover:text-neon-red transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
