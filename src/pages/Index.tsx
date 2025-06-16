
import { ThemeProvider } from '../components/ThemeProvider';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoSection from '../components/DemoSection';
import NumerologySection from '../components/NumerologySection';
import ContactFooter from '../components/ContactFooter';
import ChatbotButton from '../components/ChatbotButton';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-ancient-gradient dark:bg-dark-ancient font-inter papyrus-texture">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <NumerologySection />
        <ContactFooter />
        <ChatbotButton />
      </div>
    </ThemeProvider>
  );
};

export default Index;
