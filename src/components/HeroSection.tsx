
import { Sparkles, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      const navHeight = 80; // Account for navigation height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-ancient-gradient dark:bg-dark-ancient overflow-hidden">
      {/* Ancient background decorations */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-naamin-gold rounded-full blur-3xl animate-ancient-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-naamin-purple rounded-full blur-3xl animate-ancient-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-naamin-amber rounded-full blur-2xl animate-ancient-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Ancient scroll illustrations */}
      <div className="absolute top-20 left-10 w-20 h-32 opacity-30 dark:opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=100&h=160&fit=crop&crop=center" 
          alt="Ancient scroll" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-36 opacity-30 dark:opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=120&h=180&fit=crop&crop=center" 
          alt="Ancient architecture" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in ancient-scroll">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-merriweather font-bold text-foreground mb-6">
            Find the Perfect Name
            <br />
            <span className="bg-gradient-to-r from-naamin-gold via-naamin-purple to-naamin-amber bg-clip-text text-transparent">
              with Ancient Wisdom & AI
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto">
            ⚱️ Meaningful. Memorable. Mystical. ⚱️
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToDemo}
              className="group bg-gradient-to-r from-naamin-gold to-naamin-purple hover:from-naamin-purple hover:to-naamin-amber text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 animate-ancient-pulse border-2 border-naamin-gold/30"
            >
              <Sparkles className="h-5 w-5" />
              Try Name Generator
            </button>
            
            <button className="group bg-card/80 backdrop-blur-sm hover:bg-card border-2 border-naamin-gold text-naamin-gold hover:text-naamin-purple px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat with AI Oracle
            </button>
          </div>

          {/* Feature highlights with cartoon animals */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 border border-naamin-gold/30">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=64&h=64&fit=crop&crop=center" 
                    alt="Wise deer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">For Startups</h3>
                <p className="text-muted-foreground">Powerful brand names that resonate</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 border border-naamin-gold/30">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=64&h=64&fit=crop&crop=center" 
                    alt="Cute kitten" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">For Babies</h3>
                <p className="text-muted-foreground">Meaningful names with cultural depth</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 border border-naamin-gold/30">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=64&h=64&fit=crop&crop=center" 
                    alt="Busy bees" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">For Products</h3>
                <p className="text-muted-foreground">Memorable names that sell</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
