
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-naamin-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-merriweather font-bold bg-gradient-to-r from-naamin-gold to-naamin-purple bg-clip-text text-transparent">
              Naamin
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-naamin-purple px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-naamin-purple px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="text-gray-700 hover:text-naamin-purple px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Try Generator
              </button>
              <button
                onClick={() => scrollToSection('numerology')}
                className="text-gray-700 hover:text-naamin-purple px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Numerology
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-naamin-purple px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-naamin-purple hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-naamin-purple"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-naamin-purple block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-naamin-purple block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="text-gray-700 hover:text-naamin-purple block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                Try Generator
              </button>
              <button
                onClick={() => scrollToSection('numerology')}
                className="text-gray-700 hover:text-naamin-purple block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                Numerology
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-naamin-purple block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
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
