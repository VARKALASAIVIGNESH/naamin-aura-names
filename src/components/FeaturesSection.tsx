
import { Brain, MessageCircle, Calculator } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Name Oracle",
      description: "Ancient wisdom meets modern AI to analyze meaning, sound, and cultural significance for perfect names.",
      gradient: "from-naamin-gold to-naamin-purple",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=80&h=80&fit=crop&crop=center"
    },
    {
      icon: MessageCircle,
      title: "Mystical AI Guide",
      description: "24/7 intelligent companion to help you discover, refine, and perfect your naming journey with ancient guidance.",
      gradient: "from-naamin-purple to-naamin-amber",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=80&h=80&fit=crop&crop=center"
    },
    {
      icon: Calculator,
      title: "Sacred Numerology",
      description: "Unlock the hidden power and energy behind names using timeless numerological wisdom and sacred mathematics.",
      gradient: "from-naamin-amber to-naamin-gold",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=80&h=80&fit=crop&crop=center"
    }
  ];

  return (
    <section id="features" className="py-20 bg-card/30 dark:bg-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-foreground mb-6">
            Ancient Powers for
            <span className="bg-gradient-to-r from-naamin-gold to-naamin-purple bg-clip-text text-transparent"> Perfect Names</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🔮 Harness the power of AI and timeless wisdom to discover names that truly resonate 🔮
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card/80 backdrop-blur-sm rounded-3xl p-8 hover:bg-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-naamin-gold/30 hover:border-naamin-purple/50 ancient-scroll"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-naamin-gold/30">
                  <img 
                    src={feature.image} 
                    alt={`${feature.title} companion`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-merriweather">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
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
