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
      title: "GENZVERSE",
      description: "A Trend-Tech Puzzle Showdown - Battle through tech + trend-based quizzes, tackle memory challenges, and justify tech logic through debates.",
      logo: circuitSymphonyLogo,
      fullDescription: `GenZverse is your ticket to a wild ride through the world of trends, tech, and time! Get ready to flex your brain, test your memory, and outsmart your peers in this high-energy, non-technical challenge inspired by the coolest innovations and pop culture of the decade.

In this electrifying experience, participants will:
🧠 Battle through tech + trend-based quizzes
🔒 Tackle memory and timeline challenges  
💬 Justify tech logic through debates

A perfect blend of retro nostalgia and futuristic chaos, GenZverse is more than just a quiz — it's a vibe.

Think logic, memes, memory games, debates, and a sprinkle of timeline turbulence!

ROUND 1: GenZ Intellect
"Swipe Smart or Scroll Out!"
📱 Mode: Online
🧩 Type: Objective Quiz
🎯 Objective: Score high and qualify for the offline twisty rounds!

ROUND 2: GenZ ChronoCache
"Memory is Your Power. Time is Your Puzzle."
📱 Mode: Offline
🧠 Challenges:
• 3 memory-based visual & verbal recall tasks
• 1 thematic timeline question (arrange key GenZ events/tech in order)
🎯 Objective: Tap into your memory and pattern skills to keep your timeline intact.

ROUND 3: GenZ Decrypt
"Decode, Decide, Defend."
📱 Mode: Offline
🧩 Task: Given two tech-related statements, teams must choose the correct one and justify their reasoning with logic and flair.
🎯 Focus: Critical thinking + communication + trend awareness

Why Join GenZverse?
🎮 Blend of tech, memory, and pop culture fun
🔥 Compete like never before with your bestie
🏆 Win exciting prizes and street cred as the ultimate GenZ champs
⚡ Experience the perfect mix of brain and buzz

Ready to rise, recall, and rule the GenZverse?
💡 Buzz in. Think fast. Rule smart.
Let the timeline chaos begin!`,
      category: 'technical' as const,
      participants: "2 members",
      duration: "4 hours",
      prize: "₹8,000 + Certificates",
      rules: [
        "Teams must have exactly 2 members",
        "Open to all departments - It's all about that GenZ energy!",
        "Round 1: Online objective quiz to qualify",
        "Round 2: Offline memory and timeline challenges",
        "Round 3: Tech logic justification with debates",
        "Focus on critical thinking, communication, and trend awareness"
      ],
      coordinators: [
        {
          name: "Varshini G",
          role: "Lead" as const,
          phone: "+91 8754599496",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Vidhyashree V",
          role: "Lead" as const,
          phone: "+91 7708554298",
          image: "/api/placeholder/100/100"
        }
      ],
      volunteers: [
        {
          name: "Keerthika B",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Surekha E",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Nivetha S",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Mithula R",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Madhavan V",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: import.meta.env.VITE_GENVERSE_FORM_URL || "https://forms.gle/YOUR_GENVERSE_FORM_ID"
    },
    {
      title: "TESSERACT",
      description: "Enter the Fourth Dimension of Tech Challenges - A Multi-Domain Tech Gauntlet across ECE, Physics, and Computer Science.",
      logo: codeChronosLogo,
      fullDescription: `TESSERACT is not just a competition — it's a three-dimensional technical odyssey crafted to push the boundaries of logic, analysis, and applied skills across domains like ECE, Physics, and Computer Science.

In this challenge, teams will transition through time-locked quizzes, encrypted clues, and circuit battles - where only the most versatile minds will break through the dimensional layers to emerge victorious.

ROUND 1: Mentimeter Mania
"Fast Minds, Faster Fingers"
📱 Online MCQ Round via Mentimeter
📚 Subjects Covered: ECE, Physics, Computer Science
🎯 Description: A fast-paced, timed quiz designed to test your core understanding of multiple technical domains. Only those with both speed and precision will qualify.

✅ Shortlisting Criteria:
Top 10 teams based on accuracy + response time

ROUND 2: Crack-a-Doc
"Decode. Unlock. Advance."
📱 Encryption-Decryption Challenge with Sequential PDFs
🧩 Description: Each team starts with an initial PDF. Solving the embedded challenge reveals the key to access the next encrypted file. Continue the chain using logic, teamwork, and analytical decoding.

⏱️ Scoring: Based on the number of PDFs decrypted within the time limit

ROUND 3: Circuit Clash
"Replicate. Race. Rule."
📱 Offline Circuit Design Face-Off

🔧 Format:
• Two teams compete side-by-side
• A circuit diagram is displayed for 30 seconds
• Teams must replicate the circuit in 3 minutes

🏆 Scoring:
• First correct circuit earns highest points
• Accuracy > Speed if both teams finish close

Why Join TESSERACT?
🧠 Multidisciplinary tech challenge across theory and application
💡 Build problem-solving and collaboration skills under pressure
🔥 Prizes for the sharpest minds and most versatile teams
⚡ Engage in a dynamic mix of quiz, code, and circuitry!

Are you ready to crack codes, clash circuits, and collapse timelines?
Step into the TESSERACT — where logic defies dimensions.`,
      category: 'technical' as const,
      participants: "2 to 3 members",
      duration: "4 hours",
      prize: "₹9,000 + Certificates",
      rules: [
        "Teams must have 2-3 members per team",
        "Open to all departments",
        "Round 1: Online MCQ via Mentimeter covering ECE, Physics, Computer Science",
        "Round 2: Encryption-Decryption challenge with sequential PDFs",
        "Round 3: Offline circuit design face-off",
        "Top 10 teams from Round 1 advance based on accuracy + response time",
        "Final scoring based on problem-solving speed and technical accuracy"
      ],
      coordinators: [
        {
          name: "Varsha R",
          role: "Lead" as const,
          phone: "+91 9843929112",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Cyril Bendict P S",
          role: "Lead" as const,
          phone: "+91 9345309818",
          image: "/api/placeholder/100/100"
        }
      ],
      volunteers: [
        {
          name: "NARMATHA V",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Daranya R",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Sruthi R",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Vijayan S",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "PACKIYA NISHMITHA J",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "ANU SHREE M",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        }

      ],
      registrationLink: import.meta.env.VITE_TESSERACT_FORM_URL || "https://forms.gle/YOUR_TESSERACT_FORM_ID"
    },
    {
      title: "CIRCUTRICKS",
      description: "Let Your Circuits Speak Louder Than Words! - The Ultimate Tech + Logic Challenge where wires twist, logic sparks, and your brain becomes the circuit breaker!",
      logo: signalQuestLogo,
      fullDescription: `Welcome to CircuTricks, where wires twist, logic sparks, and your brain becomes the circuit breaker!

This electrifying, non-stop logic event tests your engineering instincts through three thrilling rounds. From tracking down glitches in virtual circuits to simulating designs on Tinkercad and building real-time prototypes, CircuTricks is the ultimate playground for all logic lovers, tinkerers, and hardware hustlers.

If you're someone who can sniff out a short circuit from a mile away, or if simulation feels like second nature — this is your arena to outwit, outbuild, and outshine.

ROUND 1: GlitchQuest
"Decode the Glitch. Save the Circuit."
📱 Mode: Online
🔍 Task: Participants will be presented with faulty or buggy circuit problems. You must analyze, debug, and identify the glitch using logic and deduction.

🧠 Skills Tested:
• Circuit diagnosis
• Logical thinking
• Error spotting under time pressure

ROUND 2: SimuLogic
"Design with Precision. Simulate with Vision."
📱 Mode: Offline
🖥️ Platform: Tinkercad
🔧 Task: Teams will simulate real-world electronic circuits using Tinkercad based on given design prompts.

🧠 Skills Tested:
• Circuit design logic
• Simulation accuracy
• Component familiarity

ROUND 3: ProtoPlay
"Think. Build. Power it Up!"
📱 Mode: Offline
🔨 Task: This is the ultimate hands-on prototyping challenge. Teams must build a functional mini-circuit model based on the problem statement using provided basic materials.

🧠 Skills Tested:
• Practical electronics
• Creativity & implementation
• Team coordination

Why Join CircuTricks?
💡 A complete journey from thinking to tinkering
🎯 Showcase your debugging, designing, and building skills
🏆 Win cool prizes and get recognized as the circuit champions
🤝 Collaborate, create, and compete with fellow enthusiasts

Do you have what it takes to beat the glitch and build brilliance?
Get ready to spark the circuit inside you.
Join CircuTricks – Where Logic Comes to Life!`,
      category: 'technical' as const,
      participants: "2 to 3 members",
      duration: "4 hours",
      prize: "₹7,000 + Certificates",
      rules: [
        "Teams must have 2-3 members per team",
        "Open to all tech enthusiasts - Circuits don't discriminate!",
        "Round 1: Online circuit debugging and glitch identification",
        "Round 2: Offline circuit simulation using Tinkercad platform",
        "Round 3: Hands-on prototyping challenge with provided materials",
        "Skills tested: Circuit diagnosis, logical thinking, simulation accuracy, practical implementation",
        "Final judging based on problem-solving approach, creativity, and technical execution"
      ],
      coordinators: [
        {
          name: "Nivetha G",
          role: "Lead" as const,
          phone: "+91 8925067560",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Priyanka S",
          role: "Lead" as const,
          phone: "+91 8248756885",
          image: "/api/placeholder/100/100"
        }
      ],
      volunteers: [
        {
          name: "Aarthi K",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Nirupama M ",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "SUJITHA E",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Jenita regi KG",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "DEVENDRANATH G",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Muthu Selvi S",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: import.meta.env.VITE_CIRCUTRICKS_FORM_URL || "https://forms.gle/YOUR_CIRCUTRICKS_FORM_ID"
    },
    {
      title: "TIMECYPHER",
      description: "Travel Through Time. Decode with Mind. - A Time-Travel Adventure Through ECE designed to test your technical knowledge, logical reasoning, and team coordination.",
      logo: roboTemporalLogo,
      fullDescription: `TimeCypher is a fun-filled, brain-teasing three-round event designed to test your technical knowledge, logical reasoning, and team coordination — all set within the thrilling backdrop of time travel in the ECE domain.

Gear up to jump across timelines — from ancient communication methods to futuristic tech puzzles — in a quest to prove your team's synergy and smarts!

ROUND 1: TimeQuizzer
"Think Fast. Travel Far."
📱 Mode: Online
🧩 Type: Objective Quiz
🎯 Goal: Score high to enter the portal to the next round!

ROUND 2: Connection Craze
"Link the Clues. Unlock the Time."
📱 Mode: Offline
🔗 Type: Connections Game
🔧 Task: Identify the common link between a set of clues (images, symbols, components, or terms) — all related to ECE and time-travel concepts.
🎯 Goal: Spot patterns, form logical links, and decode the hidden theme.

ROUND 3: Cypher Jam
"Decode the Past. Act the Future."
📱 Mode: Offline
🎭 Activities:
• Morse Code Decode — Interpret and translate hidden messages
• Tech Dumb Charades — Act out and guess technical terms without words!
🎯 Goal: Showcase teamwork, creativity, and technical understanding in this dynamic, high-energy round.

Why Join TimeCypher?
🧠 A unique blend of tech, time, and teamwork
⚡ Sharpen your logic and communication skills
🏆 Win exciting prizes and recognition
🤝 Bond with fellow time-traveling techies

Time is ticking... Do you have the code to crack it?
Join TimeCypher and embark on a journey where logic transcends time!`,
      category: 'technical' as const,
      participants: "3 members",
      duration: "4 hours",
      prize: "₹8,500 + Certificates",
      rules: [
        "Teams must have exactly 3 members per team",
        "Open to all ECE enthusiasts & logic lovers",
        "Round 1: Online objective quiz on ECE and time-travel concepts",
        "Round 2: Offline connections game linking ECE concepts and symbols",
        "Round 3: Dynamic activities including Morse code decoding and tech charades",
        "Skills tested: Technical knowledge, logical reasoning, pattern recognition, teamwork",
        "Final scoring based on speed, accuracy, creativity, and team coordination"
      ],
      coordinators: [
        {
          name: "Bhavadharene M",
          role: "Lead" as const,
          phone: "+91 9444521120",
          image: "/api/placeholder/100/100"
        },
        {
          name: "DHAANISH AHMED J",
          role: "Lead" as const,
          phone: "+91 7305811665",
          image: "/api/placeholder/100/100"
        }
      ],
      volunteers: [
        {
          name: "ASHWATHY S",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "DEEPIKA D",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "SWETHA A",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "ANANDRAJ N",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "SHANMATHI SN",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "GAYATHRI C",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: import.meta.env.VITE_TIMECYPHER_FORM_URL || "https://forms.gle/YOUR_TIMECYPHER_FORM_ID"
    },
    {
      title: "PAST FORWARD",
      description: "Innovate Across Timelines. Present Beyond Time. - A Paper-Cum-Project Presentation on Time-Altering Tech where visionaries bend time with their ideas.",
      logo: quantumBridgeLogo,
      fullDescription: `Past Forward invites visionaries and innovators to bend time with their ideas. In this paper-cum-project presentation, participants will explore the untapped potential of technology across past timelines.

Use your technical knowledge and creative thinking to present innovations that could have rewritten history, solved age-old challenges, or reshaped the future. Whether it's introducing AI during the Industrial Revolution or equipping Nikola Tesla with Arduino, this is your chance to blur the lines between what was, what is, and what could have been.

Bring stories to life. Let your ideas ripple across centuries.

EVENT FORMAT:
📝 Single Round – Presentation Round (Offline)
📋 Type: Paper with optional prototype or visual aid (model, simulation, or storyboard)
⏰ Presentation time: ~6-8 minutes per team
📢 No filtration or prelims

SAMPLE CONCEPTS:
• GPS in World War II
• AI during the Industrial Revolution
• Arduino kits for Tesla
• Drones in ancient architecture
• Blockchain in early trade systems

JUDGING CRITERIA:
⭐ Originality & Creativity
🔧 Technical Feasibility
🕰️ Relevance to Time Travel Theme
📢 Presentation Clarity
💡 Innovation Impact

Why Participate?
🌍 Explore the unexplored possibilities of time & tech
🎤 Present in front of an engaged, tech-driven audience
🏆 Prizes, recognition, and the thrill of being a time-traveling innovator
🤝 Collaborate with like-minded thinkers and creators

Ready to send your tech through time?
Present the project that could've changed history — only at Past Forward.`,
      category: 'technical' as const,
      participants: "2 to 4 members",
      duration: "3 hours",
      prize: "₹10,000 + Certificates",
      rules: [
        "Teams must have 2-4 members per team",
        "Open to all departments - Interdisciplinary & creative teams encouraged",
        "Single presentation round - No preliminary filtering required",
        "Presentation duration: 6-8 minutes per team",
        "Paper presentation with optional prototype/visual aid (model, simulation, storyboard)",
        "Registration fee: ₹100 per team",
        "Online registration open until slots fill",
        "Focus on technical feasibility, creativity, and time-travel theme relevance"
      ],
      coordinators: [
        {
          name: "Thenmozhi A",
          role: "Lead" as const,
          phone: "+91 7200248449",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Solai Ganesh",
          role: "Lead" as const,
          phone: "+91 7904857230",
          image: "/api/placeholder/100/100"
        }
      ],
      volunteers: [
        {
          name: "Thiriphura Sundari C S",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "THRISHA SRI C",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "NITHYA  SHREE L",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Sai sandhiya G",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Tharani V",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Suguna A K",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: import.meta.env.VITE_PAST_FORWARD_FORM_URL || "https://forms.gle/YOUR_PAST_FORWARD_FORM_ID"
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "CLOCKS AND KINGS",
      description: "Every Move Matters. Every Second Counts. - The ultimate time-travel-themed chess battle where strategy meets speed across the 64-square timeline.",
      logo: strikeItLogo,
      fullDescription: `Welcome to Clocks & Kings, the ultimate time-travel-themed chess battle where strategy meets speed across the 64-square timeline.

This isn't just chess, it's a race against the clock and a duel across centuries. With each move, you shift the course of time, testing not just your skills but your ability to stay calm under pressure. From lightning-fast blitz battles to intense rapid matches, this event will crown only the most focused and fearless chess master.

Will you reign on the board — or be lost to time?

ROUND 1: The Speed Loop
"Fast, Fierce, and Relentless."
⚡ Online Blitz Chess
🎯 Goal: Secure points through fast-paced matchups to qualify for the final timeline.

ROUND 2: The Long Turn
"Think Deep. Play Bold."
⚡ Offline Rapid Chess
🎯 Goal: Outthink your opponent in a pure strategy battle to claim the Time Crown.

RULES & REGULATIONS:
♟️ Standard FIDE Chess Rules apply
♟️ Touch-move rule is enforced – if you touch, you move
♟️ Use the same hand to move and press the clock
♟️ 2 Illegal moves lead to loss
♟️ Win = 1, Draw = 0.5, Loss = 0
♟️ Arbiter's decision is final in all disputes

Why Join Clocks & Kings?
🧠 Put your strategy and reflexes to the ultimate test
⏰ Experience the thrill of time-bound chess battles
🏆 Win exciting rewards and the Crown of the Board
👑 Become the king of minds in a battlefield where each second shapes your fate

Prepare your board, ready your mind —
Enter the Clocks & Kings arena and battle through timelines for glory.`,
      category: 'non-technical' as const,
      participants: "Solo Event",
      duration: "4 hours",
      prize: "₹10,000 + Certificates",
      rules: [
        "Solo Event - Individual participation only",
        "Open to all strategists & chess enthusiasts",
        "Swiss Mode tournament format",
        "Standard FIDE Chess Rules apply",
        "Touch-move rule enforced – if you touch, you move",
        "Use the same hand to move and press the clock",
        "2 illegal moves lead to loss",
        "Win = 1 point, Draw = 0.5 points, Loss = 0 points",
        "Arbiter's decision is final in all disputes"
      ],
      activities: [
        {
          name: "Round 1: The Speed Loop",
          description: "Online Blitz Chess - Fast, fierce, and relentless matchups to qualify for the final timeline"
        },
        {
          name: "Round 2: The Long Turn", 
          description: "Offline Rapid Chess - Think deep, play bold in pure strategy battles to claim the Time Crown"
        }
      ],
      coordinators: [
        {
          name: "Kaviya I",
          role: "Lead" as const,
          phone: "+91 9342455315",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Kishore Kumar D",
          role: "Lead" as const,
          phone: "+91 7358647144",
          image: "/api/placeholder/100/100"
        }
      ],
      volunteers: [
        {
          name: "Kavya S K",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Monika M",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Sana Fathima S",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Shakthi V",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Porkodi P",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Malini K",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: import.meta.env.VITE_CLOCKS_AND_KINGS_FORM_URL || "https://forms.gle/YOUR_CLOCKS_AND_KINGS_FORM_ID"
    },
    {
      title: "CHRONOS MANDATE",
      description: "Rewrite the Past. Decode the Future. - A mission through fractured time where Temporal Agents restore balance to broken timelines through logic, storytelling, and creativity.",
      logo: timeCapsuleTriviaLogo,
      fullDescription: `Chronos Mandate isn't just an event — it's a mission through fractured time!

Step into the boots of a Temporal Agent, assigned with the daunting task of restoring balance to broken timelines. Whether it's decoding cryptic present-day anomalies or reimagining the rise and fall of civilizations, this non-technical, immersive adventure challenges your logic, storytelling, and creativity like never before.

In this dimension-bending quest, participants will:
🧠 Crack codes from the present
🔧 Reconstruct alternate timelines
🎨 Build symbolic props from basic materials
📖 Craft tales that stitch time back together

ROUND 1: ChronoPulse
"Decipher the Now to Save Tomorrow"
📱 Type: Logic + Quiz Round
🧩 Challenges Include:
• Time-based decoding puzzles
• Present-era paradox questions
• Logic-driven brain teasers
• Visual + textual clues

🎯 Objective: Decode the signals from the present to identify the source of timeline disturbances. Only teams with quick minds and sharper instincts will qualify for the next mission phase.

ROUND 2: ChronosCraft
"Build the Story. Repair the Rift."
📱 Type: Creative Simulation Round
🏗️ Scenario Types:
• PAST PARADOX – Fix a historical event gone wrong
• FUTURE FRACTURE – Solve a crisis yet to come

🎭 Tasks:
• Develop a creative, logical story-driven solution to the scenario
• Design and present a symbolic prop or object using basic provided materials (e.g., paper, cardboard, thread, plastic items)

🏆 Judging Criteria:
⭐ Creativity & Originality
🧠 Logical Consistency
📚 Storytelling Clarity & Immersion
🎯 Relevance of the Prop to the Scenario

⚡ Bonus: Points for team synergy and presentation flair!

Why Join Chronos Mandate?
🌌 Unique blend of logic + storytelling + design
🚀 Travel through imagination and intellect
🏆 Win exciting prizes and eternal Temporal Agent glory

Ready to fix time?
🔓 Unlock the anomalies. 📜 Rewrite history. 🌟 Shape the future.
Join the mandate — Chronos awaits.`,
      category: 'non-technical' as const,
      participants: "3 to 4 members",
      duration: "3.5 hours",
      prize: "₹7,500 + Certificates",
      rules: [
        "Teams must have 3-4 members per team",
        "Open to all departments - Unleash the power of interdisciplinary minds!",
        "Round 1: Logic + Quiz round with time-based puzzles and paradox questions",
        "Round 2: Creative simulation with story-driven solutions and prop design",
        "Materials provided for prop creation (paper, cardboard, thread, plastic items)",
        "Skills tested: Logic, creativity, storytelling, teamwork, presentation",
        "Judging based on creativity, logical consistency, storytelling clarity, prop relevance",
        "Bonus points for team synergy and presentation flair"
      ],
      coordinators: [
        {
          name: "Aarthi V S",
          role: "Lead" as const,
          phone: "+91 9384842346",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Aakash P S",
          role: "Lead" as const,
          phone: "+91 7358107416",
          image: "/api/placeholder/100/100"
        }
      ],
      volunteers: [
        {
          name: "HAMSIKHA RAJAGOPAL",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "ATCHAYA R",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "SANTHOSH S",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "DIVYA A",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "VIJAYALAKSHMI D S",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "DEEPTHI P",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "MANEESHA S",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: import.meta.env.VITE_CHRONOS_MANDATE_FORM_URL || "https://forms.gle/YOUR_CHRONOS_MANDATE_FORM_ID"
    },
    {
      title: "ACT 0'CLOCK",
      description: "Relive the Reels. Race Against Time. - A Time-Hopping Cinematic Challenge where you race through time and cinema in a thrilling 3-round challenge.",
      logo: retroGamingLogo,
      fullDescription: `Lights, camera... rewind!

Act 0'Clock throws you into a whirlwind of Bollywood & Kollywood nostalgia, challenging your memory, movie knowledge, and acting chops in a time-ticking setup.

From legendary classics to box-office bangers, it's a race through time and cinema, where each second counts and every performance brings you closer to victory.

Decode the hero, describe the flick, and dramatize without a script — all in this thrilling 3-round challenge designed for film buffs and performers alike!

ROUND 1: Star Sprint – Name the Films
"Know the Star, List the Art."
🎬 Task: A popular actor's name is given. Your team must list 4 movies they've acted in within 10 seconds.
🎯 Focus: Speed, accuracy, film knowledge

ROUND 2: Silent Script – Guess the Movie by Clue
"Speak, But Don't Act!"
🎬 Task: One member gives verbal-only clues (no actions or gestures) to describe a movie. The other teammate must guess the movie within 30 seconds.
🎯 Focus: Communication skills, cinematic recall

ROUND 3: Drama Decode – Act It Out
"Act Without Words. Let Them Guess."
🎬 Task: One member silently acts out a scene or iconic moment from a movie. The other member must guess it correctly within 45 seconds.
🎯 Focus: Expressiveness, teamwork, Bollywood/Kollywood knowledge

Why Join Act 0'Clock?
🎬 Celebrate the magic of Indian cinema
⏰ Thrill of acting, guessing, and thinking on your feet
🏆 Win exciting prizes and applause-worthy glory
🤝 Strengthen your team bond with fun and drama!

Are you ready to rewind, perform, and conquer the clock?
Step into the Act 0'Clock time machine — where every second is a scene to remember!`,
      category: 'non-technical' as const,
      participants: "2 members",
      duration: "3 hours",
      prize: "₹6,500 + Certificates",
      rules: [
        "Teams must have exactly 2 members per team",
        "Open to all departments - Movie lovers, actors, mimers — this one's for you!",
        "Round 1: Name 4 movies of a given actor within 10 seconds",
        "Round 2: Verbal-only movie description clues (no actions/gestures)",
        "Round 3: Silent acting of movie scenes or iconic moments",
        "Focus on Bollywood/Kollywood cinema knowledge",
        "Skills tested: Film knowledge, communication, expressiveness, teamwork",
        "Time limits strictly enforced for each round"
      ],
      coordinators: [
        {
          name: "Sasi kumar S",
          role: "Lead" as const,
          phone: "+91 8110970109",
          image: "/api/placeholder/100/100"
        },
        {
          name: "Lochan Narayanan",
          role: "Lead" as const,
          phone: "+91 9940321809",
          image: "/api/placeholder/100/100"
        }
      ],
      volunteers: [
        {
          name: "Meenaloshni.E",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Monikha .k",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "ABHINESH V",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Praneet M S",
          role: "3rd Year" as const,
          image: "/api/placeholder/100/100"
        },
        {
          name: "Rudramoorthy L",
          role: "4th Year" as const,
          image: "/api/placeholder/100/100"
        }
      ],
      registrationLink: import.meta.env.VITE_ACT_OCLOCK_FORM_URL || "https://forms.gle/YOUR_ACT_OCLOCK_FORM_ID"
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