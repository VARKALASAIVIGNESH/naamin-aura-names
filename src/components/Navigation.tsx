
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="fixed top-0 w-full bg-card/90 backdrop-blur-md z-50 border-b border-naamin-bronze/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-merriweather font-bold bg-gradient-to-r from-naamin-bronze to-naamin-gold bg-clip-text text-transparent">
              ⚱️ Naamin
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-naamin-gold transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-foreground hover:text-naamin-gold transition-colors duration-300 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="text-foreground hover:text-naamin-gold transition-colors duration-300 font-medium"
              >
                Try Generator
              </button>
              <button
                onClick={() => scrollToSection('numerology')}
                className="text-foreground hover:text-naamin-gold transition-colors duration-300 font-medium"
              >
                Numerology
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-naamin-gold transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-naamin-gold/20 hover:bg-naamin-gold/30 transition-colors duration-300"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-naamin-bronze" />
                ) : (
                  <Sun className="h-5 w-5 text-naamin-gold" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-naamin-gold/20 hover:bg-naamin-gold/30 transition-colors duration-300"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-naamin-bronze" />
              ) : (
                <Sun className="h-5 w-5 text-naamin-gold" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-naamin-gold transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-sm rounded-lg mt-2 border border-naamin-bronze/30">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-naamin-gold hover:bg-naamin-gold/10 rounded-md transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-naamin-gold hover:bg-naamin-gold/10 rounded-md transition-colors duration-300"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-naamin-gold hover:bg-naamin-gold/10 rounded-md transition-colors duration-300"
              >
                Try Generator
              </button>
              <button
                onClick={() => scrollToSection('numerology')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-naamin-gold hover:bg-naamin-gold/10 rounded-md transition-colors duration-300"
              >
                Numerology
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-naamin-gold hover:bg-naamin-gold/10 rounded-md transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
