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
<<<<<<< HEAD
import EventRegistrationPopup from '@/components/EventRegistrationPopup';
import timePortalBg from '@/assets/time-portal-bg.jpg';
=======
import cosmicPattern from '@/assets/cosmic-pattern.jpg';
>>>>>>> changes1

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const images = [timePortalBg];
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
        {/* Lab Background */}
        <div 
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #000510 0%, #000B2E 50%, #000510 100%)',
            opacity: 0.98
          }}
        />

        {/* Floor Grid */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px) 0 0 / 100px 100px,
              linear-gradient(0deg, rgba(0,212,255,0.05) 1px, transparent 1px) 0 0 / 100px 100px,
              radial-gradient(circle at 50% 50%, rgba(0,0,20,0.3) 0%, rgba(0,0,40,0.6) 100%)
            `,
            animation: 'circuitPower 15s infinite linear',
            mixBlendMode: 'screen'
          }}
        />

        {/* Time Machine Core */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            background: `
              radial-gradient(circle at 50% 50%, 
                rgba(0,255,255,0.4) 0%,
                rgba(128,0,255,0.3) 30%,
                transparent 70%
              )
            `,
            animation: 'machinePulse 4s infinite ease-in-out',
            mixBlendMode: 'screen',
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Energy Rings */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '400px',
            height: '400px',
            background: `
              repeating-radial-gradient(circle at 50% 50%,
                rgba(0,255,255,0.1) 0px,
                transparent 2px,
                rgba(128,0,255,0.1) 4px,
                transparent 6px
              )
            `,
            animation: 'energyRing 20s infinite linear',
            mixBlendMode: 'screen',
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Mechanical Gears */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '350px',
            height: '350px',
            background: `
              conic-gradient(from 0deg at 50% 50%,
                rgba(255,215,0,0.15) 0deg 10deg,
                transparent 10deg 30deg,
                rgba(255,215,0,0.15) 30deg 40deg,
                transparent 40deg 60deg,
                rgba(255,215,0,0.15) 60deg 70deg,
                transparent 70deg 360deg
              )
            `,
            animation: 'gearSystem 30s infinite linear',
            mixBlendMode: 'screen',
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Temporal Energy Waves */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            background: `
              radial-gradient(circle at 50% 50%,
                rgba(0,255,255,0.2) 0%,
                rgba(128,0,255,0.1) 30%,
                transparent 70%
              )
            `,
            animation: 'temporalWave 8s infinite ease-out',
            mixBlendMode: 'screen',
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Floating Time Symbols */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(0,255,255,0.15) 0%, transparent 5%),
              radial-gradient(circle at 70% 60%, rgba(128,0,255,0.15) 0%, transparent 5%),
              radial-gradient(circle at 20% 20%, rgba(255,215,0,0.1) 0%, transparent 5%),
              radial-gradient(circle at 80% 80%, rgba(0,255,255,0.15) 0%, transparent 5%)
            `,
            animation: 'clockFloat 10s infinite ease-in-out',
            mixBlendMode: 'screen'
          }}
        />

        {/* Circuit Details */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(45deg, transparent 48%, rgba(0,212,255,0.1) 49%, rgba(128,0,255,0.1) 51%, transparent 52%) 0 0 / 100px 100px,
              linear-gradient(-45deg, transparent 48%, rgba(0,212,255,0.1) 49%, rgba(128,0,255,0.1) 51%, transparent 52%) 0 0 / 100px 100px
            `,
            animation: 'symbolGlow 6s infinite ease-in-out',
            mixBlendMode: 'screen'
          }}
        />

        {/* Lab Atmosphere */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,40,0.8) 100%)',
            mixBlendMode: 'multiply'
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