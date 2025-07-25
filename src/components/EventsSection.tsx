import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EventCard from './EventCard';
import EventModal from './EventModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import event logos
import strikeItLogo from '@/assets/event-strike-it.jpg';
import circuitSymphonyLogo from '@/assets/event-circuit-symphony.jpg';
import codeChronosLogo from '@/assets/event-code-chronos.jpg';
import signalQuestLogo from '@/assets/event-signal-quest.jpg';
import roboTemporalLogo from '@/assets/event-robo-temporal.jpg';
import quantumBridgeLogo from '@/assets/event-quantum-bridge.jpg';
import timeCapsuleTriviaLogo from '@/assets/event-time-capsule-trivia.jpg';
import chronoDebatesLogo from '@/assets/event-chrono-debates.jpg';
import retroGamingLogo from '@/assets/event-retro-gaming.jpg';

const EventsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const technicalEvents = [
    {
      title: "STRIKE-IT!!",
      description: "An exciting dual-challenge event combining BingoBlitz and Debug Duel to test your knowledge and debugging skills.",
      logo: strikeItLogo,
      fullDescription: `STRIKE-IT!! is an innovative event that combines the thrill of bingo with the challenge of debugging. This event includes two major activities:

BingoBlitz: Participants answer questions to complete the word ZENISTA on a 7x7 bingo grid. Questions cover Electronics, Programming, Sustainable Development Goals (SDG), and Space topics.

Debug Duel: Participants choose either the electronics or coding stream to debug circuits or code respectively. This tests practical problem-solving skills and technical expertise.

The event is designed to test both theoretical knowledge and practical application skills, making it a comprehensive challenge for engineering students.`,
      category: 'technical' as const,
      participants: "Maximum 2 members",
      duration: "3 hours",
      prize: "₹10,000 + Certificates",
      rules: [
        "A team can have a maximum of 2 members",
        "Engineering students from any discipline and year can participate",
        "Participants must bring their college ID",
        "The judges' decisions will be final and binding",
        "Any form of cheating will result in disqualification",
        "All participants will receive participation certificates",
        "Winners will be awarded cash prizes and certificates"
      ],
      activities: [
        {
          name: "BingoBlitz",
          description: "Answer questions to complete ZENISTA on a 7x7 bingo grid covering Electronics, Programming, SDG, and Space topics"
        },
        {
          name: "Debug Duel", 
          description: "Choose electronics or coding stream to debug circuits or code respectively"
        }
      ],
      coordinators: [
        {
          name: "Arjun Krishnan",
          role: "Lead" as const,
          phone: "+91 9876543210",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Priya Sharma",
          role: "Co-Lead" as const,
          phone: "+91 9876543211",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/strike-it"
    },
    {
      title: "CIRCUIT SYMPHONY",
      description: "Design and simulate complex electronic circuits with real-world applications in this hands-on technical challenge.",
      logo: circuitSymphonyLogo,
      fullDescription: `Circuit Symphony challenges participants to design, simulate, and optimize electronic circuits for real-world applications. This event tests your understanding of circuit analysis, component selection, and system optimization.

Participants will work on progressive challenges starting from basic circuits to complex systems. The event combines theoretical knowledge with practical implementation skills, making it perfect for electronics enthusiasts.`,
      category: 'technical' as const,
      participants: "1-3 members",
      duration: "4 hours",
      prize: "₹8,000 + Certificates",
      rules: [
        "Teams can have 1-3 members",
        "Basic knowledge of circuit analysis required",
        "Simulation software will be provided",
        "Original designs only - plagiarism will lead to disqualification",
        "Participants must present their solutions",
        "Time management is crucial for completion"
      ],
      coordinators: [
        {
          name: "Rajesh Kumar",
          role: "Lead" as const,
          phone: "+91 9876543212",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Anjali Reddy",
          role: "Co-Lead" as const,
          phone: "+91 9876543213",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/circuit-symphony"
    },
    {
      title: "CODE CHRONOS",
      description: "Travel through different programming paradigms and solve algorithmic challenges across multiple time periods.",
      logo: codeChronosLogo,
      fullDescription: `Code Chronos takes you on a journey through the evolution of programming. Participants solve challenges that represent different eras of computing, from basic algorithms to modern AI implementations.

This event tests algorithmic thinking, code optimization, and adaptability to different programming paradigms. Perfect for those who love coding challenges and want to test their skills across various domains.`,
      category: 'technical' as const,
      participants: "1-2 members",
      duration: "3.5 hours",
      prize: "₹7,500 + Certificates",
      rules: [
        "Individual or pair participation allowed",
        "Any programming language can be used",
        "Internet access for documentation only",
        "Code must be original and written during the event",
        "Judging based on correctness, efficiency, and code quality",
        "Time penalties for late submissions"
      ],
      coordinators: [
        {
          name: "Vikram Patel",
          role: "Lead" as const,
          phone: "+91 9876543214",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Sneha Gupta",
          role: "Co-Lead" as const,
          phone: "+91 9876543215",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/code-chronos"
    },
    {
      title: "SIGNAL QUEST",
      description: "Explore the world of signal processing and communication systems through practical experiments and simulations.",
      logo: signalQuestLogo,
      fullDescription: `Signal Quest dives deep into the fascinating world of signal processing and communication systems. Participants work with real signals, implement filters, and design communication protocols.

The event covers analog and digital signal processing, modulation techniques, and communication system design. It's perfect for students interested in telecommunications and signal processing applications.`,
      category: 'technical' as const,
      participants: "2-3 members",
      duration: "4 hours",
      prize: "₹6,000 + Certificates",
      rules: [
        "Teams must have 2-3 members",
        "Basic knowledge of signals and systems required",
        "MATLAB/Python will be available for simulations",
        "Report submission along with implementation",
        "Presentation of results is mandatory",
        "Innovation in approach will be rewarded"
      ],
      coordinators: [
        {
          name: "Deepak Nair",
          role: "Lead" as const,
          phone: "+91 9876543216",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Kavya Krishnan",
          role: "Co-Lead" as const,
          phone: "+91 9876543217",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/signal-quest"
    },
    {
      title: "ROBO TEMPORAL",
      description: "Build and program robots to navigate through time-based challenges and autonomous missions.",
      logo: roboTemporalLogo,
      fullDescription: `Robo Temporal challenges teams to build and program robots capable of navigating complex time-based scenarios. Robots must complete autonomous missions while adapting to changing environmental conditions.

This event combines mechanical design, electronics integration, and programming skills. Teams will face challenges that test their robot's ability to make decisions and complete tasks in dynamic environments.`,
      category: 'technical' as const,
      participants: "3-4 members",
      duration: "5 hours",
      prize: "₹12,000 + Certificates",
      rules: [
        "Teams must have 3-4 members",
        "Basic robotics knowledge required",
        "Standard robotics kits will be provided",
        "Robots must be autonomous during missions",
        "Safety protocols must be followed",
        "Innovative solutions will receive bonus points"
      ],
      coordinators: [
        {
          name: "Arun Sagar",
          role: "Lead" as const,
          phone: "+91 9876543218",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Meera Joshi",
          role: "Co-Lead" as const,
          phone: "+91 9876543219",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/robo-temporal"
    },
    {
      title: "QUANTUM BRIDGE",
      description: "Explore quantum computing concepts and implement quantum algorithms in simulation environments.",
      logo: quantumBridgeLogo,
      fullDescription: `Quantum Bridge introduces participants to the fascinating world of quantum computing. Teams work with quantum simulators to implement quantum algorithms and solve complex computational problems.

This cutting-edge event covers quantum gates, quantum circuits, and quantum algorithms. Perfect for students interested in the future of computing and quantum technologies.`,
      category: 'technical' as const,
      participants: "2-3 members",
      duration: "4 hours",
      prize: "₹9,000 + Certificates",
      rules: [
        "Teams can have 2-3 members",
        "Basic knowledge of quantum mechanics helpful",
        "Quantum simulators will be provided",
        "Theoretical understanding will be tested",
        "Implementation of quantum circuits required",
        "Documentation of approach necessary"
      ],
      coordinators: [
        {
          name: "Karthik Menon",
          role: "Lead" as const,
          phone: "+91 9876543220",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Divya Pillai",
          role: "Co-Lead" as const,
          phone: "+91 9876543221",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/quantum-bridge"
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "TIME CAPSULE TRIVIA",
      description: "A thrilling quiz competition covering general knowledge, current affairs, and historical events across different time periods.",
      logo: timeCapsuleTriviaLogo,
      fullDescription: `Time Capsule Trivia is an engaging quiz competition that tests participants' knowledge across various domains and time periods. From ancient civilizations to modern technology, this quiz covers it all.

The competition includes multiple rounds with increasing difficulty levels. Participants will face questions on history, science, literature, current affairs, and pop culture. It's the perfect event for knowledge enthusiasts and quiz lovers.`,
      category: 'non-technical' as const,
      participants: "2-3 members",
      duration: "2.5 hours",
      prize: "₹5,000 + Certificates",
      rules: [
        "Teams must have 2-3 members",
        "No electronic devices allowed during quiz",
        "Questions cover multiple domains and time periods",
        "Tie-breaker rounds will determine winners",
        "Fair play and sportsmanship expected",
        "Quiz master's decision is final"
      ],
      coordinators: [
        {
          name: "Rohit Aggarwal",
          role: "Lead" as const,
          phone: "+91 9876543222",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Pooja Bhatt",
          role: "Co-Lead" as const,
          phone: "+91 9876543223",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/time-capsule-trivia"
    },
    {
      title: "CHRONO DEBATES",
      description: "Engage in thought-provoking debates on topics spanning past, present, and future scenarios.",
      logo: chronoDebatesLogo,
      fullDescription: `Chrono Debates brings together the art of argumentation with fascinating topics that span across time. Participants engage in structured debates on historical decisions, current dilemmas, and future possibilities.

This event tests communication skills, critical thinking, and the ability to present compelling arguments. Topics range from historical what-ifs to future technology ethics, making it intellectually stimulating for all participants.`,
      category: 'non-technical' as const,
      participants: "2 members",
      duration: "3 hours",
      prize: "₹4,000 + Certificates",
      rules: [
        "Teams must have exactly 2 members",
        "Topics will be revealed 30 minutes before debates",
        "Standard debate format will be followed",
        "Both participants must speak in each round",
        "Judging based on content, delivery, and rebuttal skills",
        "Respectful discourse is mandatory"
      ],
      coordinators: [
        {
          name: "Siddhant Rao",
          role: "Lead" as const,
          phone: "+91 9876543224",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Riya Malhotra",
          role: "Co-Lead" as const,
          phone: "+91 9876543225",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/chrono-debates"
    },
    {
      title: "RETRO GAMING ARENA",
      description: "Compete in classic games and modern esports tournaments while experiencing gaming evolution through different eras.",
      logo: retroGamingLogo,
      fullDescription: `Retro Gaming Arena celebrates the evolution of gaming from classic arcade games to modern esports. Participants compete in tournaments featuring games from different gaming eras.

The event includes retro arcade games, classic console games, and modern competitive gaming. It's a nostalgic journey through gaming history while showcasing skills in various gaming genres.`,
      category: 'non-technical' as const,
      participants: "1-2 members",
      duration: "4 hours",
      prize: "₹6,000 + Certificates",
      rules: [
        "Individual or pair participation allowed",
        "Multiple gaming categories available",
        "Fair play and sportsmanship required",
        "No external gaming peripherals allowed",
        "Tournament bracket system will be used",
        "Gaming experience across eras preferred"
      ],
      coordinators: [
        {
          name: "Aryan Kapoor",
          role: "Lead" as const,
          phone: "+91 9876543226",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Aditi Singh",
          role: "Co-Lead" as const,
          phone: "+91 9876543227",
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: "https://forms.google.com/retro-gaming"
    }
  ];

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 time-portal opacity-10" />
        <div className="absolute bottom-10 left-20 w-80 h-80 time-portal opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-glow mb-6">
            Temporal Events
          </h2>
          <div className="w-24 h-1 time-gradient mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through time with our carefully curated events that challenge your skills, 
            expand your knowledge, and create unforgettable experiences.
          </p>
        </motion.div>

        <Tabs defaultValue="technical" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-card/80 border border-time-portal/20">
            <TabsTrigger 
              value="technical"
              className="data-[state=active]:bg-time-portal/20 data-[state=active]:text-time-portal"
            >
              Technical Events
            </TabsTrigger>
            <TabsTrigger 
              value="non-technical"
              className="data-[state=active]:bg-time-glow/20 data-[state=active]:text-time-glow"
            >
              Non-Technical Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {technicalEvents.map((event, index) => (
                <EventCard
                  key={event.title}
                  {...event}
                  onClick={() => handleEventClick(event)}
                  index={index}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="non-technical" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {nonTechnicalEvents.map((event, index) => (
                <EventCard
                  key={event.title}
                  {...event}
                  onClick={() => handleEventClick(event)}
                  index={index}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={selectedEvent}
      />
    </section>
  );
};

export default EventsSection;