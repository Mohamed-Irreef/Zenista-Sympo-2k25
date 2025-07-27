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
      text: "Welcome to ZENISTA 2025! I'm your intelligent assistant. I can help you with real-time information about events, registration, team details, and much more. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Import dynamic services safely
  const getWebsiteData = () => {
    try {
      return {
        events: [
          {
            id: 'chess',
            title: 'CLOCKS AND KINGS',
            description: 'Step into the time portal where kings clash and seconds vanish! Our chess tournament combines strategy with time manipulation.',
            category: 'Technical',
            duration: '5 hours',
            teamSize: '1 (Individual)',
            prizes: '₹3,000',
            rules: ['Standard FIDE chess rules apply', 'Touch-move rule enforced', 'Round Robin format'],
            contactNumber: '+91 93617 57753'
          },
          {
            id: 'circuit-symphony',
            title: 'Circuit Symphony',
            description: 'Orchestrate the perfect circuit as time bends around your engineering prowess.',
            category: 'Technical',
            duration: '4 hours',
            teamSize: '2-4 members',
            prizes: '₹3,000',
            rules: ['Team-based circuit design challenge', 'Real-time problem solving'],
            contactNumber: '+91 99420 03192'
          },
          {
            id: 'code-chronos',
            title: 'Code Chronos',
            description: 'Race against time itself in this ultimate coding challenge.',
            category: 'Technical',
            duration: '3.5 hours',
            teamSize: '1-2 members',
            prizes: '₹3,000',
            rules: ['Multi-round coding competition', 'Time-based scoring system']
          },
          {
            id: 'signal-quest',
            title: 'Signal Quest',
            description: 'Navigate through the temporal frequency spectrum.',
            category: 'Technical',
            duration: '3 hours',
            teamSize: '2-3 members',
            prizes: '₹3,000',
            rules: ['Signal processing challenges', 'Frequency domain analysis']
          },
          {
            id: 'robo-temporal',
            title: 'Robo Temporal',
            description: 'Command robots that can bend time and space.',
            category: 'Technical',
            duration: '4.5 hours',
            teamSize: '3-4 members',
            prizes: '₹3,000',
            rules: ['Autonomous robot navigation', 'Time-based challenges']
          },
          {
            id: 'quantum-bridge',
            title: 'Quantum Bridge',
            description: 'Bridge the gap between classical and quantum realms.',
            category: 'Technical',
            duration: '4 hours',
            teamSize: '2-3 members',
            prizes: '₹3,000',
            rules: ['Quantum computing principles', 'Bridge design challenges']
          },
          {
            id: 'time-capsule-trivia',
            title: 'Time Capsule Trivia',
            description: 'Journey through different eras of knowledge.',
            category: 'Non-Technical',
            duration: '2.5 hours',
            teamSize: '3-4 members',
            prizes: '₹3,000',
            rules: ['Multi-era trivia questions', 'Team collaboration required']
          },
          {
            id: 'chrono-debates',
            title: 'Chrono Debates',
            description: 'Engage in debates that span across time periods.',
            category: 'Non-Technical',
            duration: '3 hours',
            teamSize: '2-3 members',
            prizes: '₹3,000',
            rules: ['Cross-temporal debate topics', 'Time-limited arguments']
          },
          {
            id: 'retro-gaming',
            title: 'Retro Gaming Arena',
            description: 'Battle through gaming history in this nostalgic tournament.',
            category: 'Non-Technical',
            duration: '4 hours',
            teamSize: '1-2 members',
            prizes: '₹3,000',
            rules: ['Classic arcade games', 'Tournament bracket system']
          }
        ],
        teamMembers: {
          studentCoordinators: [
            { name: 'Udaya MR', role: 'Chairperson', contact: '+91 99420 03192' },
            { name: 'Vivitha MG', role: 'Vice - Chairperson', contact: '+91 81488 02753' },
            { name: 'Arya Subramani S', role: 'Secretary', contact: '+91 99626 61505' },
            { name: 'Mirudhubasnee RS', role: 'Treasurer', contact: '+91 63821 63948' }
          ],
          webDevelopers: [
            { name: 'Mohamed Irreef S', role: 'Web Developer', contact: '+91 93617 57753' },
            { name: 'Thilak S', role: 'Web Developer', contact: '+91 93459 81303' }
          ]
        },
        eventDetails: {
          date: '8th August 2025',
          venue: 'Sri Sairam Engineering College, Sai Leo Nagar, West Tambaram, Chennai – 600044',
          level: 'National Level',
          department: 'ECE'
        },
        totalPrizePool: '₹24,000+'
      };
    } catch (error) {
      console.error('Error loading website data:', error);
      return null;
    }
  };

  const websiteData = getWebsiteData();

  // Add search and analysis functions
  const searchWebsiteData = (query: string) => {
    if (!websiteData) return [];
    
    const lowerQuery = query.toLowerCase();
    const results: any[] = [];
    
    // Search events
    websiteData.events.forEach(event => {
      if (event.title.toLowerCase().includes(lowerQuery) ||
          event.description.toLowerCase().includes(lowerQuery) ||
          event.category.toLowerCase().includes(lowerQuery)) {
        results.push({ type: 'event', data: event });
      }
    });
    
    // Search team members
    [...websiteData.teamMembers.studentCoordinators, ...websiteData.teamMembers.webDevelopers]
      .forEach(member => {
        if (member.name.toLowerCase().includes(lowerQuery) ||
            member.role.toLowerCase().includes(lowerQuery)) {
          results.push({ type: 'member', data: member });
        }
      });
    
    return results;
  };

  const analyzeQuery = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const intents = [];
    
    if (lowerQuery.includes('event') || lowerQuery.includes('competition') || lowerQuery.includes('contest')) {
      intents.push('event_info');
    }
    if (lowerQuery.includes('register') || lowerQuery.includes('registration')) {
      intents.push('registration');
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('call')) {
      intents.push('contact');
    }
    if (lowerQuery.includes('time') || lowerQuery.includes('duration') || lowerQuery.includes('when')) {
      intents.push('timing');
    }
    if (lowerQuery.includes('prize') || lowerQuery.includes('reward') || lowerQuery.includes('money')) {
      intents.push('prizes');
    }
    if (lowerQuery.includes('rule') || lowerQuery.includes('regulation') || lowerQuery.includes('how to')) {
      intents.push('rules');
    }
    if (lowerQuery.includes('team') || lowerQuery.includes('group') || lowerQuery.includes('member')) {
      intents.push('team_info');
    }
    if (lowerQuery.includes('venue') || lowerQuery.includes('location') || lowerQuery.includes('where')) {
      intents.push('venue');
    }
    
    return intents.length > 0 ? intents : ['general'];
  };

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
    "Show all events",
    "Registration help",
    "Prize information", 
    "Contact coordinators",
    "Event schedule",
    "Technical events",
    "Chess tournament",
    "Team requirements"
  ];

  // Dynamic response generator using real website data
  const generateDynamicResponse = (userMessage: string): string => {
    const query = userMessage.toLowerCase();
    const intents = analyzeQuery(query);
    const searchResults = searchWebsiteData(query);
    
    // Filter results by type
    const eventResults = searchResults.filter(r => r.type === 'event').map(r => r.data);
    const memberResults = searchResults.filter(r => r.type === 'member').map(r => r.data);
    
    // Event-specific queries
    if (eventResults.length > 0) {
      const event = eventResults[0];
      
      if (intents.includes('prizes')) {
        return `${event.title} offers ${event.prizes} in prizes! It's a ${event.category.toLowerCase()} event with ${event.teamSize} team size. Duration: ${event.duration}. Would you like registration details?`;
      }
      
      if (intents.includes('registration')) {
        return `To register for ${event.title}: This is a ${event.category.toLowerCase()} event (${event.teamSize}). Duration: ${event.duration}. Prize: ${event.prizes}. Contact: ${event.contactNumber || 'Available on event page'}. Click on the event card on our website to register!`;
      }
      
      if (intents.includes('rules')) {
        const rulesText = event.rules && event.rules.length > 0 ? event.rules.join('. ') : 'Rules available on registration page';
        return `${event.title} Rules: ${rulesText}. Prize: ${event.prizes}. Team size: ${event.teamSize}.`;
      }
      
      // General event info
      return `${event.title}: ${event.description} This ${event.category.toLowerCase()} event runs for ${event.duration} with team size of ${event.teamSize}. Prize pool: ${event.prizes}. Want to register?`;
    }
    
    // Team/Contact queries
    if (intents.includes('contact') || intents.includes('team')) {
      if (query.includes('coordinator') || query.includes('organizer')) {
        const coordinators = memberResults.filter(m => m.role.includes('Coordinator') || m.role.includes('Chairperson'));
        if (coordinators.length > 0) {
          const coordList = coordinators.map(c => `${c.name} (${c.role})${c.contact ? ' - ' + c.contact : ''}`).join(', ');
          return `Our coordinators: ${coordList}. For technical queries, also contact our web developers at +91 93617 57753.`;
        }
      }
      
      if (query.includes('web developer') || query.includes('technical support')) {
        const webDevs = websiteData.teamMembers.webDevelopers;
        const devList = webDevs.map(d => `${d.name} - ${d.contact}`).join(', ');
        return `Our web development team: ${devList}. They handle technical queries and website issues.`;
      }
      
      return `Main contacts: Udaya MR (Chairperson) - +91 99420 03192, Arya Subramani S (Secretary) - +91 9962661505. For staff queries: Ms. S. Gayathri (Assistant Professor).`;
    }
    
    // Date/Venue queries
    if (intents.includes('timing') || query.includes('when')) {
      return `ZENISTA 2025 is on ${websiteData.eventDetails.date} starting at 9:00 AM. It's a ${websiteData.eventDetails.level} technical symposium by the ${websiteData.eventDetails.department} Department.`;
    }
    
    if (intents.includes('venue') || query.includes('where')) {
      return `Venue: ${websiteData.eventDetails.venue}. The event is organized by the ECE Department. Need directions or transport info?`;
    }
    
    // Prize queries
    if (intents.includes('prizes') && eventResults.length === 0) {
      const technicalEvents = websiteData.events.filter(e => e.category === 'Technical');
      const nonTechnicalEvents = websiteData.events.filter(e => e.category === 'Non-Technical');
      
      return `Total prize pool: ${websiteData.totalPrizePool}! Technical events: ${technicalEvents.map(e => e.title + ' (' + e.prizes + ')').join(', ')}. Non-technical: ${nonTechnicalEvents.map(e => e.title + ' (' + e.prizes + ')').join(', ')}.`;
    }
    
    // Event listing
    if (query.includes('all events') || query.includes('event list') || query.includes('show events')) {
      const eventList = websiteData.events.map(e => `${e.title} (${e.category}, ${e.prizes})`).join(', ');
      return `Our ${websiteData.events.length} events: ${eventList}. Which event interests you most?`;
    }
    
    if (query.includes('technical events')) {
      const techEvents = websiteData.events.filter(e => e.category === 'Technical');
      return `Technical events (${techEvents.length}): ${techEvents.map(e => `${e.title} - ${e.prizes}`).join(', ')}. All require ECE/related background.`;
    }
    
    if (query.includes('non-technical')) {
      const nonTechEvents = websiteData.events.filter(e => e.category === 'Non-Technical');
      return `Non-technical events (${nonTechEvents.length}): ${nonTechEvents.map(e => `${e.title} - ${e.prizes}`).join(', ')}. Open to all streams!`;
    }
    
    // General queries
    if (query.includes('hello') || query.includes('hi')) {
      return `Hello! Welcome to ZENISTA 2025 - ${websiteData.eventDetails.level} Technical Symposium on ${websiteData.eventDetails.date}. We have ${websiteData.events.length} exciting events with ${websiteData.totalPrizePool} total prizes. How can I help?`;
    }
    
    if (query.includes('thank')) {
      return "You're welcome! Feel free to ask about any of our events, registration process, or contact details. See you at ZENISTA 2025! 🚀";
    }
    
    // Registration general
    if (intents.includes('registration')) {
      return `Registration is easy! Click on any event card on our website to get the registration link. Team sizes vary: Individual to 4 members depending on the event. Bring your college ID on event day. Need help with a specific event?`;
    }
    
    // Default intelligent response
    const suggestions = ['event details', 'registration process', 'prize information', 'contact coordinators', 'event schedule'];
    return `I'd be happy to help! I have real-time access to all ZENISTA 2025 information. Try asking about: ${suggestions.join(', ')}. Or mention a specific event name for detailed info!`;
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

    // Generate dynamic bot response with realistic typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateDynamicResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, Math.random() * 1000 + 1500); // Random delay between 1.5-2.5 seconds for realism
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
              <div 
                className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
                onWheel={(e) => {
                  e.stopPropagation();
                  const target = e.currentTarget;
                  const { scrollTop, scrollHeight, clientHeight } = target;
                  
                  // Check if we're at the top or bottom
                  const isAtTop = scrollTop === 0;
                  const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
                  
                  // Prevent default only if we're not at the boundaries
                  if ((!isAtTop && e.deltaY < 0) || (!isAtBottom && e.deltaY > 0)) {
                    e.preventDefault();
                  }
                }}
              >
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
                <div className="flex flex-wrap gap-1 mt-1">
                  {quickOptions.slice(4, 8).map((option) => (
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