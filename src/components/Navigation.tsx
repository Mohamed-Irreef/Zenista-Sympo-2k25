import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Clock } from 'lucide-react';
<<<<<<< HEAD
import logo from '@/assets/zenista.png';
=======
import logo from '@/assets/Zenista.png';
>>>>>>> changes1

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Team', href: '#team' },
    { name: 'FAQs', href: '#faqs' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-time-portal/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
<<<<<<< HEAD
            {/* <Clock className="text-time-portal" size={24} /> */}
            <span className="text-2xl font-bold text-glow">ZENISTA</span>
            <span className="text-time-glow text-sm">2025</span>
            {/* <img className='w-20 h-20 rounded-full' src={logo} alt="" /> */}
=======
            {/* <img 
              src={logo} 
              alt="Zenista 2025 Logo" 
              className="h-16 w-16 object-contain"
            /> */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-glow leading-none">ZENISTA</span>
              <span className="text-time-glow text-sm leading-none">2025</span>
            </div>
>>>>>>> changes1
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-time-portal transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-time-portal group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-time-portal transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-card/95 backdrop-blur-md border-b border-time-portal/20"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-time-portal transition-colors duration-200"
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;