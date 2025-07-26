import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "What is ZENISTA 2025?",
      answer: "ZENISTA 2025 is a National Level Technical Symposium organized by the Department of Electronics and Communication Engineering at Sri Sairam Engineering College. It's a comprehensive event featuring technical competitions, workshops, seminars, and networking opportunities for engineering students across India."
    },
    {
      question: "Who can participate in ZENISTA 2025?",
      answer: "Engineering students from any discipline and any year from recognized institutions across India are eligible to participate. Both undergraduate and postgraduate students can register for the events. Participants must bring their valid college ID for verification."
    },
    {
      question: "How can I register for the events?",
      answer: "Registration for each event is done through our integrated registration forms. You can find the registration forms by clicking on the event cards on our website. Early registration is recommended as seats are limited for most events."
    },
    {
      question: "What are the participation fees?",
      answer: "Participation fees vary for different events. Technical events generally have a registration fee of ₹200-500 per team, while non-technical events have fees ranging from ₹100-300 per team. Some workshops may have separate fees. Detailed fee structure is available in the registration forms."
    },
    {
      question: "Are there any prizes for winners?",
      answer: "Yes! We have exciting cash prizes for winners of all events. Technical events offer prizes ranging from ₹5,000 to ₹12,000, while non-technical events offer prizes from ₹4,000 to ₹6,000. All participants receive certificates, and winners get additional winner certificates and trophies."
    },
    {
      question: "Will accommodation be provided?",
      answer: "Limited accommodation can be arranged for outstation participants. Please contact our organizing committee at least one week in advance to make arrangements. We'll help you find suitable accommodation near the college campus at reasonable rates."
    },
    {
      question: "What should I bring on the event day?",
      answer: "Participants should bring their college ID card (mandatory), laptop/notebook if required for technical events, writing materials, and any specific items mentioned in the event descriptions. We recommend bringing a power bank and water bottle for your convenience."
    }
  ];

  return (
    <section id="faqs" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 time-portal opacity-10" />
        <div className="absolute bottom-20 left-20 w-96 h-96 time-portal opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-glow mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 time-gradient mx-auto mb-8" />
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about ZENISTA 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-lg px-6 hover:border-time-portal/40 transition-all duration-300 group"
                >
                  <AccordionTrigger className="text-left hover:no-underline group-hover:text-time-portal transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="text-time-glow flex-shrink-0" size={20} />
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4 ml-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact for More Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-time-portal/10 via-time-glow/10 to-time-portal/10 rounded-xl p-8 border border-time-portal/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help! Feel free to reach out to us for any additional information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="bg-time-portal/10 px-6 py-3 rounded-lg">
                <p className="text-time-portal font-semibold">Email</p>
                <p className="text-muted-foreground">zenista2025@sairam.edu.in</p>
              </div>
              <div className="bg-time-glow/10 px-6 py-3 rounded-lg">
                <p className="text-time-glow font-semibold">Phone</p>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;