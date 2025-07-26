import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Mail, ExternalLink, Calendar, Users, Award, MessageCircle } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Sri Sairam Engineering College",
        "Sai Leo Nagar, West Tambaram",
        "Chennai - 600044, Tamil Nadu"
      ]
    },
    {
      icon: Phone,
      title: "Contact",
      details: [
        "+91 98765 43210",
        "+91 98765 43211",
        "Reception: +91 44 2251 2345"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "zenista2025@sairam.edu.in",
        "ece.department@sairam.edu.in",
        "info@sairam.edu.in"
      ]
    }
  ];

  const quickLinks = [
    { name: "About ZENISTA", href: "#about" },
    { name: "Technical Events", href: "#events" },
    { name: "Non-Technical Events", href: "#events" },
    { name: "Department Gallery", href: "#gallery" },
    { name: "Our Team", href: "#team" },
    { name: "FAQs", href: "#faqs" }
  ];

  const importantLinks = [
    { name: "Sri Sairam Engineering College", href: "https://sairam.edu.in", external: true },
    { name: "ECE Department", href: "https://sairam.edu.in/ece", external: true },
    { name: "Academic Calendar", href: "https://sairam.edu.in/calendar", external: true },
    { name: "Student Portal", href: "https://sairam.edu.in/student", external: true },
    { name: "Alumni Network", href: "https://sairam.edu.in/alumni", external: true },
    { name: "Placement Cell", href: "https://sairam.edu.in/placements", external: true }
  ];

  const eventHighlights = [
    { icon: Calendar, text: "8th August 2025" },
    { icon: Users, text: "National Level Symposium" },
    { icon: Award, text: "Cash Prizes & Certificates" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "919942003192"; // Remove + and spaces
    const message = "Hi! I'm interested in ZENISTA 2025. Can you help me with information about the events?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-time-portal/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 time-portal opacity-5" />
        <div className="absolute bottom-10 right-10 w-80 h-80 time-portal opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <Clock className="text-time-portal" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold text-glow">ZENISTA</h3>
                    <p className="text-time-glow">2025</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  National Level Technical Symposium by Department of Electronics 
                  and Communication Engineering
                </p>
                
                {/* Event Highlights */}
                <div className="space-y-3">
                  {eventHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center justify-center lg:justify-start gap-2">
                      <highlight.icon className="text-time-portal" size={16} />
                      <span className="text-sm text-muted-foreground">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-xl font-bold text-time-portal mb-6">Quick Links</h4>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(link.href)}
                      className="block text-muted-foreground hover:text-time-portal transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-time-glow mb-6">Important Links</h4>
                <div className="space-y-3">
                  {importantLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="flex items-center gap-2 text-muted-foreground hover:text-time-glow transition-colors duration-200"
                    >
                      <span>{link.name}</span>
                      {link.external && <ExternalLink size={14} />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {contactInfo.map((contact, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-4">
                    <contact.icon className="text-time-portal" size={20} />
                    <h4 className="text-lg font-semibold text-foreground">{contact.title}</h4>
                  </div>
                  <div className="space-y-1 ml-8">
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Emergency Contact */}
              <div className="bg-time-portal/10 rounded-lg p-4 border border-time-portal/20">
                <h5 className="font-semibold text-time-portal mb-2">Emergency Contact</h5>
                <p className="text-sm text-muted-foreground">
                  For urgent queries during the event
                </p>
                <p className="text-sm font-semibold text-foreground">
                  +91 98765 43210 (24/7)
                </p>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="text-green-500" size={20} />
                  <h5 className="font-semibold text-green-500">WhatsApp Support</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Get instant help for ZENISTA 2025 queries
                </p>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  +91 99420 03192
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-time-portal/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 ZENISTA. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Department of Electronics and Communication Engineering, Sri Sairam Engineering College
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Powered by</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-time-portal rounded-full animate-pulse" />
                <span className="text-time-portal font-semibold">Zenista</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 time-gradient opacity-50" />
      </div>
    </footer>
  );
};

export default Footer;