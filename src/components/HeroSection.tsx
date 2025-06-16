
import { Sparkles, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-naamin-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-naamin-purple rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-merriweather font-bold text-gray-900 mb-6">
            Find the Perfect Name
            <br />
            <span className="bg-gradient-to-r from-naamin-gold via-naamin-purple to-naamin-gold bg-clip-text text-transparent">
              with AI & Numerology
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 font-light max-w-3xl mx-auto">
            Meaningful. Memorable. Magical.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToDemo}
              className="group bg-gradient-to-r from-naamin-gold to-yellow-500 hover:from-yellow-500 hover:to-naamin-gold text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 animate-glow"
            >
              <Sparkles className="h-5 w-5" />
              Try Name Generator
            </button>
            
            <button className="group bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-naamin-purple text-naamin-purple hover:text-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat with AI
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">For Startups</h3>
                <p className="text-gray-600">Powerful brand names that resonate</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">For Babies</h3>
                <p className="text-gray-600">Meaningful names with cultural depth</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">For Products</h3>
                <p className="text-gray-600">Memorable names that sell</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
