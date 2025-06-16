
import { MessageCircle, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-merriweather font-bold bg-gradient-to-r from-naamin-gold to-naamin-purple bg-clip-text text-transparent mb-4">
              Naamin
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover meaningful, memorable, and magical names powered by AI and ancient numerological wisdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-naamin-gold/20 hover:bg-naamin-gold/30 p-3 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-naamin-gold/20 hover:bg-naamin-gold/30 p-3 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-naamin-gold/20 hover:bg-naamin-gold/30 p-3 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-300 hover:text-naamin-gold transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-naamin-gold transition-colors duration-300">
                  Name Generator
                </a>
              </li>
              <li>
                <a href="#numerology" className="text-gray-300 hover:text-naamin-gold transition-colors duration-300">
                  Numerology Tool
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-naamin-gold transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-naamin-gold transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <a 
                  href="https://wa.me/1234567890" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  WhatsApp Support
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-naamin-gold p-2 rounded-full">
                  <Mail className="h-4 w-4" />
                </div>
                <a 
                  href="mailto:hello@naamin.ai" 
                  className="text-gray-300 hover:text-naamin-gold transition-colors duration-300"
                >
                  hello@naamin.ai
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-naamin-purple p-2 rounded-full">
                  <Phone className="h-4 w-4" />
                </div>
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-300 hover:text-naamin-purple transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Naamin. All rights reserved. | Crafted with ❤️ for meaningful naming
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
