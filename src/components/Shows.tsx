import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

const shows = [
  { date: "18 de Abril", venue: "Eletromusic Pub", city: "Natal-RN", ticketUrl: "https://outgo.com.br/bloody-dragon-ao-vivo-no-eletromusic-pub1" },
  { date: "23 de Maio", venue: "Rock na Praça", city: "Currais Novos-RN" },
  { date: "06 de Junho", venue: "Caravela Cultural", city: "João Pessoa-PB" },
  { date: "20 de Junho", venue: "Darkside Studio", city: "Recife-PE" },
];

export default function Shows() {
  return (
    <section id="shows" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
          PRÓXIMOS <span className="text-neon-red neon-text">SHOWS</span>
        </h2>

        <div className="space-y-4">
          {shows.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-center justify-between p-6 glass-card hover:bg-neon-red/5 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-neon-red"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-neon-red/10 rounded-lg border border-neon-red/20 group-hover:bg-neon-red group-hover:text-white transition-all duration-300">
                  <Calendar size={20} className="mb-1" />
                  <span className="text-xs font-display font-bold uppercase text-center leading-tight">
                    {show.date.split(' de ')[0]}<br/>{show.date.split(' de ')[1]}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-red transition-colors">
                    {show.venue}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 text-sm mt-1">
                    <MapPin size={14} />
                    <span>{show.city}</span>
                  </div>
                </div>
              </div>

              {show.ticketUrl ? (
                <a 
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button text-xs py-2 px-6 text-center"
                >
                  Ingressos
                </a>
              ) : (
                <button className="cyber-button text-xs py-2 px-6 opacity-50 cursor-not-allowed">
                  Em Breve
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
