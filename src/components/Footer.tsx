export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="py-12 border-t border-white/5 bg-absolute-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-left">
            <img 
              src="/bloodysite.png" 
              alt="Bloody Dragon" 
              className="h-10 object-contain mx-auto md:mx-0"
              loading="lazy"
              decoding="async"
            />
            <p className="text-white/40 text-xs mt-2 uppercase tracking-[0.2em]">Hard Rock From Brazil</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-xs font-display font-bold uppercase tracking-widest text-white/40 hover:text-neon-red transition-colors">A Banda</a>
            <a href="#shows" className="text-xs font-display font-bold uppercase tracking-widest text-white/40 hover:text-neon-red transition-colors">Shows</a>
            <a href="#media" className="text-xs font-display font-bold uppercase tracking-widest text-white/40 hover:text-neon-red transition-colors">Mídia</a>
            <a href="#contact" className="text-xs font-display font-bold uppercase tracking-widest text-white/40 hover:text-neon-red transition-colors">Contato</a>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-white/40 text-[10px] uppercase tracking-widest">
              © {currentYear} Bloody Dragon Band.<br/>Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
