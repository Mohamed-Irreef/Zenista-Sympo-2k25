import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to ZENISTA 2025! I'm here to help you with information about our events, registration, and more. How can I assist you?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-3 justify-start"
    >
      <div className="w-8 h-8 bg-time-portal/20 rounded-full flex items-center justify-center flex-shrink-0">
        <Bot size={16} className="text-time-portal" />
      </div>
      <div className="bg-muted p-3 rounded-lg">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-time-portal rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  const quickOptions = [
    "Event details",
    "Registration process",
    "Prize information", 
    "Contact details",
    "Date & venue",
    "Technical events",
    "Non-technical events",
    "Team requirements",
    "Chess tournament",
    "Chess rules"
  ];

  const botResponses = {
    "event details": "ZENISTA 2025 features 9 exciting events: 6 technical (CLOCKS AND KINGS - Chess Tournament, Circuit Symphony, Code Chronos, Signal Quest, Robo Temporal, Quantum Bridge) and 3 non-technical (Time Capsule Trivia, Chrono Debates, Retro Gaming Arena). Each event has unique challenges and prizes!",
    "registration process": "Registration is simple! Click on any event card to view details and use the registration link. Make sure to register before the deadline and bring your college ID on the event day.",
    "prize information": "Total prizes worth ₹60,500+! Technical events offer ₹6,000-₹12,000 prizes, non-technical events offer ₹4,000-₹6,000. All participants receive certificates!",
    "contact details": "For queries, contact our coordinators at +91 93617 57753 or +91 99420 03192. You can also use the WhatsApp button for quick assistance.",
    "date & venue": "ZENISTA 2025 is on 8th August 2025 at Sri Sairam Engineering College, Sai Leo Nagar, West Tambaram, Chennai – 600044.",
    "technical events": "Technical events include: CLOCKS AND KINGS - Chess Tournament (₹10,000), Circuit Symphony (₹8,000), Code Chronos (₹7,500), Signal Quest (₹6,000), Robo Temporal (₹12,000), and Quantum Bridge (₹9,000).",
    "non-technical events": "Non-technical events include: Time Capsule Trivia (₹5,000), Chrono Debates (₹4,000), and Retro Gaming Arena (₹6,000).",
    "team requirements": "Team sizes vary by event: 1-4 members depending on the event. Check individual event details for specific team requirements.",
    "chess tournament": "CLOCKS AND KINGS is our chess tournament! Round 1: Blitz War (5+1 format), Round 2: Rapid Realm (10+0 format). Individual participation with Round Robin format. Prize: ₹10,000 + certificates!",
    "clocks and kings": "Step into the time portal where kings clash and seconds vanish! Our chess tournament features Blitz War (5+1) and Rapid Realm (10+0) rounds. Individual competition with ₹10,000 prize pool.",
    "chess rules": "Standard FIDE chess rules apply. Touch-move rule enforced. Round Robin format with scoring: Win=1 point, Draw=0.5, Loss=0. Arbiter's decision is final."
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Default responses for common patterns
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! Welcome to ZENISTA 2025. How can I help you today?";
    }
    if (lowerMessage.includes('thank')) {
      return "You're welcome! Feel free to ask if you need any more information about ZENISTA 2025.";
    }
    if (lowerMessage.includes('time') || lowerMessage.includes('when')) {
      return "ZENISTA 2025 is scheduled for 8th August 2025. Event timings vary from 2.5 to 5 hours depending on the event.";
    }
    
    return "I'd be happy to help! You can ask me about event details, registration, prizes, venue, or use the quick options below. For specific queries, contact our coordinators at +91 93617 57753.";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Generate and add bot response with typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 2000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-4 md:right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full time-gradient shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle size={20} className="md:hidden" />
          <MessageCircle size={24} className="hidden md:block" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-4 left-4 md:left-auto md:right-6 w-auto md:w-96 h-[500px] max-h-[80vh] z-50"
          >
            <Card className="h-full flex flex-col bg-card/95 backdrop-blur-md border-time-portal/30">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-time-portal/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-time-portal/20 rounded-full flex items-center justify-center">
                    <Bot className="text-time-portal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">ZENISTA Bot</h3>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X size={16} />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 bg-time-portal/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-time-portal" />
                      </div>
                    )}
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.isBot 
                          ? 'bg-muted text-foreground' 
                          : 'time-gradient text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </motion.div>
                    {!message.isBot && (
                      <div className="w-8 h-8 bg-time-glow/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-time-glow" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Options */}
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-1">
                  {quickOptions.slice(0, 4).map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7 px-2 border-time-portal/30 hover:bg-time-portal/10 flex-shrink-0"
                      onClick={() => handleSendMessage(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-3 md:p-4 border-t border-time-portal/20">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about ZENISTA 2025..."
                    className="flex-1 border-time-portal/30 focus:border-time-portal text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim()}
                    className="time-gradient px-3 flex-shrink-0"
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;