import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    author: "Heavy Talk",
    image: "https://groover-images.s3.eu-west-3.amazonaws.com/prod/influencer/0.heavy-talk/profile_picture/400_400?cacheId=1775742386030",
    text: "Muito boa a música! Muito bem produzido, o vídeo é bem legal, é um hard rock bem desenvolvido e as guitarras são o ponto alto. Mas tudo é muito coeso e com a atmosfera da década que consagrou o estilo.",
    size: "large"
  },
  {
    id: 2,
    author: "O Subsolo",
    image: "https://groover-images.s3.eu-west-3.amazonaws.com/prod/influencer/0.o-subsolo/profile_picture/40_40",
    text: "Vocês capturam perfeitamente a essência do Rock com riffs poderosos que ficam na cabeça, batidas que mantêm o ritmo intenso do início ao fim e letras que exalam resistência e liberdade.",
    size: "medium"
  },
  {
    id: 3,
    author: "Programa Made in Brazil",
    image: "https://groover-images.s3.eu-west-3.amazonaws.com/prod/influencer/0.programa-made-in-brazil/profile_picture/40_40",
    text: "We Are Free é um bálsamo para os amantes do hard rock, especialmente pela sonoridade, que remete aos anos 80, da fase mais visceral de bandas como Saxon, Ratt, Motley Crue e Van Halen.",
    size: "medium"
  }
];

export default function Media() {
  return (
    <section id="media" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
          O QUE A <span className="text-neon-red neon-text">MÍDIA</span> DIZ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass-card p-8 relative group hover:border-neon-red/50 transition-all duration-500 ${
                item.size === 'large' ? 'lg:col-span-2' : ''
              }`}
            >
              <Quote className="absolute top-6 right-6 text-neon-red/20 group-hover:text-neon-red/40 transition-colors" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neon-red/30">
                  <img 
                    src={item.image} 
                    alt={item.author} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-neon-red uppercase tracking-wider">
                  {item.author}
                </h3>
              </div>

              <p className="text-white/70 italic leading-relaxed font-light">
                "{item.text}"
              </p>
              
              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-neon-red/10 group-hover:bg-neon-red/20 transition-colors" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
