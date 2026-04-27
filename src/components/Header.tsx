import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "A Banda", href: "#about" },
  { name: "Vídeos", href: "#videos" },
  { name: "Mídia", href: "#media" },
  { name: "Shows", href: "#shows" },
  { name: "Matérias", href: "#news" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-absolute-black/80 backdrop-blur-lg border-b border-neon-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-neon-red/30 shadow-[0_0_15px_rgba(255,49,49,0.2)] flex items-center justify-center bg-absolute-black">
                <img 
                  src="/logo.png" 
                  alt="Blood Dragon Logo" 
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <img 
              src="/bloodysite.png" 
              alt="Bloody Dragon" 
              className="h-8 md:h-10 object-contain"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-display font-medium text-white/70 hover:text-neon-red transition-colors duration-300 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-red transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-absolute-black border-b border-neon-red/20 px-4 pt-2 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-display font-medium text-white hover:text-neon-red transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
