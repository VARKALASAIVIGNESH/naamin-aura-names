
import { useState } from 'react';
import { Sparkles, Wand2 } from 'lucide-react';

const DemoSection = () => {
  const [inputValue, setInputValue] = useState('');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const mockNames = [
    'Zenithia', 'Luminate', 'Vortexia', 'Astralux', 'Quantrix',
    'Ethereal', 'Nexusify', 'Prismata', 'Velocity', 'Innovex'
  ];

  const handleGenerate = () => {
    if (!inputValue.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation with delay
    setTimeout(() => {
      const shuffled = [...mockNames].sort(() => 0.5 - Math.random());
      setGeneratedNames(shuffled.slice(0, 5));
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section id="demo" className="py-20 bg-ancient-gradient dark:bg-dark-ancient min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-foreground mb-6">
            Try Our
            <span className="bg-gradient-to-r from-naamin-bronze to-naamin-gold bg-clip-text text-transparent"> AI Oracle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ✨ Experience the magic of AI-powered naming. Enter a word or theme and watch as ancient wisdom creates perfect names for you. ✨
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-naamin-bronze/30 ancient-scroll">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <label htmlFor="theme-input" className="block text-sm font-medium text-foreground mb-2">
                  🔍 Type a word or theme:
                </label>
                <input
                  id="theme-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="e.g., tech startup, baby girl, mystical coffee shop..."
                  className="w-full px-6 py-4 border-2 border-naamin-bronze/30 rounded-2xl focus:outline-none focus:border-naamin-gold focus:ring-4 focus:ring-naamin-gold/20 transition-all duration-300 text-lg bg-background text-foreground"
                  onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={!inputValue.trim() || isGenerating}
                className="bg-gradient-to-r from-naamin-bronze to-naamin-gold hover:from-naamin-gold hover:to-naamin-amber disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 min-w-[200px] border-2 border-naamin-gold/30"
              >
                {isGenerating ? (
                  <>
                    <Wand2 className="h-5 w-5 animate-spin" />
                    Conjuring...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    Generate Names
                  </>
                )}
              </button>
            </div>

            {generatedNames.length > 0 && (
              <div className="mt-8 animate-fade-in">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center font-merriweather">
                  ✨ Sacred Names for "{inputValue}" ✨
                </h3>
                <div className="grid md:grid-cols-5 gap-4">
                  {generatedNames.map((name, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-naamin-gold/20 to-naamin-bronze/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-naamin-bronze/30 hover:border-naamin-gold/50 ancient-scroll"
                    >
                      <span className="font-semibold text-foreground text-lg font-merriweather">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-muted-foreground">
                    🏺 Each name is crafted with meaning, memorability, and ancient wisdom 🏺
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
