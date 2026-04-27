import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Media from "./components/Media";
import Videos from "./components/Videos";
import Shows from "./components/Shows";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-absolute-black min-h-screen selection:bg-neon-red selection:text-white">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(153,0,0,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10" />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Videos />
          <Media />
          <Shows />
          <News />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
