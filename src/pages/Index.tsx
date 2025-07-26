import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from '@/components/SplashScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import GallerySection from '@/components/GallerySection';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import ContactForm from '@/components/ContactForm';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import cosmicPattern from '@/assets/cosmic-pattern.jpg';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const images = [cosmicPattern];
    let loadedCount = 0;
    
    images.forEach(src => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setIsLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        {/* Background Pattern */}
        <div 
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url(${cosmicPattern})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
        />
        
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" onComplete={handleSplashComplete} />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Navigation />
              <HeroSection />
              <AboutSection />
              <EventsSection />
              <GallerySection />
              <TeamSection />
              <FAQSection />
              <ContactForm />
              <Footer />
              
              {/* Interactive Components */}
              <ChatBot />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SmoothScrollProvider>
  );
};

export default Index;