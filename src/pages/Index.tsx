
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoSection from '../components/DemoSection';
import NumerologySection from '../components/NumerologySection';
import ContactFooter from '../components/ContactFooter';
import ChatbotButton from '../components/ChatbotButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-naamin-gradient font-inter">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <NumerologySection />
      <ContactFooter />
      <ChatbotButton />
    </div>
  );
};

export default Index;
