
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI naming assistant. How can I help you find the perfect name today? 🌟'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessages = [
      ...messages,
      { type: 'user', content: inputMessage },
      { 
        type: 'bot', 
        content: 'Thank you for your message! This is a demo chatbot. In the full version, I would help you brainstorm names, analyze their meanings, and provide personalized suggestions based on your specific needs. ✨' 
      }
    ];

    setMessages(newMessages);
    setInputMessage('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-naamin-purple to-purple-600 hover:from-purple-600 hover:to-naamin-purple text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-naamin-purple/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-naamin-purple to-purple-600 p-4 flex justify-between items-center">
            <div>
              <h3 className="text-white font-semibold">AI Naming Assistant</h3>
              <p className="text-purple-100 text-xs">Ask me about names! 🤖</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-naamin-purple text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about names..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-naamin-purple text-sm"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-naamin-purple hover:bg-purple-600 text-white p-2 rounded-full transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
