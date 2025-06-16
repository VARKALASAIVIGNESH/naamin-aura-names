
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
    <section id="demo" className="py-20 bg-gradient-to-br from-naamin-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-gray-900 mb-6">
            Try Our
            <span className="bg-gradient-to-r from-naamin-gold to-naamin-purple bg-clip-text text-transparent"> AI Generator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the magic of AI-powered naming. Enter a word or theme and watch as we create perfect names for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-naamin-gold/20">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <label htmlFor="theme-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Type a word or theme:
                </label>
                <input
                  id="theme-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="e.g., tech startup, baby girl, coffee shop..."
                  className="w-full px-6 py-4 border-2 border-naamin-gold/30 rounded-2xl focus:outline-none focus:border-naamin-purple focus:ring-4 focus:ring-naamin-purple/20 transition-all duration-300 text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={!inputValue.trim() || isGenerating}
                className="bg-gradient-to-r from-naamin-gold to-yellow-500 hover:from-yellow-500 hover:to-naamin-gold disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 min-w-[200px]"
              >
                {isGenerating ? (
                  <>
                    <Wand2 className="h-5 w-5 animate-spin" />
                    Generating...
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  ✨ Generated Names for "{inputValue}"
                </h3>
                <div className="grid md:grid-cols-5 gap-4">
                  {generatedNames.map((name, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-naamin-lavender to-white p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-naamin-purple/20"
                    >
                      <span className="font-semibold text-gray-800 text-lg">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    💡 Each name is crafted with meaning, memorability, and cultural significance in mind
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
