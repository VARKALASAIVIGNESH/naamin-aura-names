
import { Brain, MessageCircle, Calculator } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Name Generator",
      description: "Advanced AI algorithms analyze meaning, sound, and cultural significance to generate perfect names tailored to your needs.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot",
      description: "24/7 intelligent assistant to help you brainstorm, refine, and perfect your naming choices with personalized guidance.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Calculator,
      title: "Name Numerology Tool",
      description: "Discover the hidden power and energy behind names using ancient numerological wisdom combined with modern analysis.",
      gradient: "from-gold to-yellow-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-naamin-gold to-naamin-purple bg-clip-text text-transparent"> Perfect Names</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of AI and ancient wisdom to discover names that truly resonate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-naamin-gold/20"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-merriweather">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
