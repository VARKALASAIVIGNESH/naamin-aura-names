
import { useState } from 'react';
import { Hash, Star, Zap } from 'lucide-react';

const NumerologySection = () => {
  const [nameInput, setNameInput] = useState('');
  const [numerologyResult, setNumerologyResult] = useState<{
    number: number;
    meaning: string;
    traits: string[];
    suggestion: string;
  } | null>(null);

  const numerologyMeanings = {
    1: {
      meaning: "Leadership and Independence",
      traits: ["Natural leader", "Independent", "Innovative", "Ambitious"],
      suggestion: "Perfect for strong, pioneering brands and confident individuals"
    },
    2: {
      meaning: "Cooperation and Harmony",
      traits: ["Diplomatic", "Cooperative", "Sensitive", "Peaceful"],
      suggestion: "Ideal for collaborative ventures and harmonious relationships"
    },
    3: {
      meaning: "Creativity and Expression",
      traits: ["Creative", "Expressive", "Optimistic", "Social"],
      suggestion: "Excellent for artistic endeavors and communication-focused brands"
    },
    4: {
      meaning: "Stability and Hard Work",
      traits: ["Practical", "Reliable", "Organized", "Determined"],
      suggestion: "Great for established businesses and dependable products"
    },
    5: {
      meaning: "Freedom and Adventure",
      traits: ["Adventurous", "Dynamic", "Curious", "Versatile"],
      suggestion: "Perfect for travel, tech, and innovation-focused ventures"
    },
    6: {
      meaning: "Nurturing and Responsibility",
      traits: ["Caring", "Responsible", "Protective", "Compassionate"],
      suggestion: "Ideal for healthcare, family, and service-oriented businesses"
    },
    7: {
      meaning: "Spirituality and Wisdom",
      traits: ["Spiritual", "Analytical", "Introspective", "Wise"],
      suggestion: "Excellent for educational, spiritual, and research-focused names"
    },
    8: {
      meaning: "Material Success and Power",
      traits: ["Ambitious", "Business-minded", "Authoritative", "Efficient"],
      suggestion: "Perfect for financial, corporate, and luxury brands"
    },
    9: {
      meaning: "Universal Love and Completion",
      traits: ["Humanitarian", "Generous", "Compassionate", "Universal"],
      suggestion: "Great for global brands and charitable organizations"
    }
  };

  const calculateNumerology = (name: string): number => {
    const letters = name.toLowerCase().replace(/[^a-z]/g, '');
    let sum = 0;
    
    for (let char of letters) {
      sum += char.charCodeAt(0) - 96;
    }
    
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    
    return sum;
  };

  const analyzeName = () => {
    if (!nameInput.trim()) return;
    
    const number = calculateNumerology(nameInput);
    const analysis = numerologyMeanings[number as keyof typeof numerologyMeanings];
    
    setNumerologyResult({
      number,
      ...analysis
    });
  };

  return (
    <section id="numerology" className="py-20 bg-gradient-to-br from-naamin-lavender to-naamin-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-gray-900 mb-6">
            Name
            <span className="bg-gradient-to-r from-naamin-purple to-naamin-gold bg-clip-text text-transparent"> Numerology Tool</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the hidden power and energy behind any name using ancient numerological wisdom
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-naamin-purple/20">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <label htmlFor="name-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter a name to check its numerology:
                </label>
                <input
                  id="name-input"
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="e.g., Naamin, Tesla, Isabella..."
                  className="w-full px-6 py-4 border-2 border-naamin-purple/30 rounded-2xl focus:outline-none focus:border-naamin-gold focus:ring-4 focus:ring-naamin-gold/20 transition-all duration-300 text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && analyzeName()}
                />
              </div>
              <button
                onClick={analyzeName}
                disabled={!nameInput.trim()}
                className="bg-gradient-to-r from-naamin-purple to-purple-600 hover:from-purple-600 hover:to-naamin-purple disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 min-w-[200px]"
              >
                <Hash className="h-5 w-5" />
                Analyze Name
              </button>
            </div>

            {numerologyResult && (
              <div className="mt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-naamin-gold/20 to-naamin-purple/20 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-naamin-gold to-yellow-500 rounded-full mb-4">
                      <span className="text-3xl font-bold text-white">{numerologyResult.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      "{nameInput}" = Number {numerologyResult.number}
                    </h3>
                    <p className="text-lg text-naamin-purple font-semibold">
                      {numerologyResult.meaning}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/60 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-5 w-5 text-naamin-gold" />
                        <h4 className="font-semibold text-gray-800">Key Traits</h4>
                      </div>
                      <ul className="space-y-2">
                        {numerologyResult.traits.map((trait, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-naamin-purple rounded-full"></div>
                            {trait}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/60 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="h-5 w-5 text-naamin-purple" />
                        <h4 className="font-semibold text-gray-800">Perfect For</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {numerologyResult.suggestion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumerologySection;
