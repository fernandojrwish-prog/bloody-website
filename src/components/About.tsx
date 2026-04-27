import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-neon-red" />
              A HISTÓRIA 
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>
                A Bloody Dragon é uma banda sediada em Natal, Rio Grande do Norte. Surgida inicialmente no início dos anos 2000, a primeira formação de membros não durou muito tempo mas deixou de legado uma série de canções que traziam, já naquela época, um resgate ao hard rock agressivo e pulsante.
              </p>
              <p>
                Com riffs enérgicos, harmônicos artificiais nas guitarras, solos cantantes e uma cozinha ágil e pesada, a banda entrega um groove dinâmico e cheio de carisma. A nova formação conta com Nando Lima (vocais), Péricles Costa e Wesley (guitarras e vocais de apoio), Tonny (contrabaixo) e Guilherme (bateria).
              </p>
              <p>
                O EP "Nightmare" já está disponível em todas as plataformas. Atualmente, a banda trabalha na gravação do seu primeiro álbum completo, intitulado "Furious Fire Force", com lançamento previsto para o final de 2026.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-neon-red/30 shadow-[0_0_50px_rgba(255,49,49,0.2)] bg-absolute-black/50">
              <img 
                src="/band-photo.jpg" 
                alt="Blood Dragon Band" 
                className="w-full h-auto hover:scale-105 transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Cyberpunk Accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-neon-red" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-neon-red" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
