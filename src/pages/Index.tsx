import { useState, useEffect, useRef } from 'react';
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
import WhatsAppButton from '@/components/WhatsAppButton';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import EventRegistrationPopup from '@/components/EventRegistrationPopup';
const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Start with the intro video
    if (videoRef.current) {
      // Set playback speed to make video last exactly 15 seconds
      videoRef.current.playbackRate = 1.5; // Adjust this value based on original video length
      videoRef.current.play();

      // Force end after 15 seconds regardless of video length
      const timer = setTimeout(() => {
        setShowIntro(false);
        setShowSplash(true);
        setIsLoaded(true);
      }, 15000);
      
      // Listen for video end (backup)
      videoRef.current.addEventListener('ended', () => {
        setShowIntro(false);
        setShowSplash(true);
        setIsLoaded(true);
      });

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-black">
        <video 
          ref={videoRef}
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.8) contrast(1.2)'
          }}
        >
          <source src="/src/assets/bg.mp4" type="video/mp4" />
        </video>
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0, 0, 25, 0.97) 100%)',
            mixBlendMode: 'multiply'
          }}
        />
      </div>
    );
  }

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        {/* Deep Space Background */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at center,
                hsl(250, 70%, 8%) 0%,
                hsl(245, 70%, 6%) 50%,
                hsl(240, 70%, 4%) 100%
              )
            `,
            zIndex: -6
          }}
        />

        {/* Starfield Layer */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(1px 1px at 20% 30%, white 0%, transparent 100%),
              radial-gradient(1px 1px at 40% 70%, white 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 60% 40%, white 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 80% 60%, white 0%, transparent 100%),
              radial-gradient(2px 2px at 50% 50%, white 0%, transparent 100%)
            `,
            opacity: 0.4,
            animation: 'twinkle 4s ease-in-out infinite alternate',
            zIndex: -5
          }}
        />

        {/* Time Spiral */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '200vh',
            height: '200vh',
            background: `
              conic-gradient(
                from 0deg at 50% 50%,
                hsla(240, 100%, 50%, 0) 0%,
                hsla(240, 100%, 60%, 0.2) 20%,
                hsla(240, 100%, 70%, 0.4) 40%,
                hsla(260, 100%, 70%, 0.6) 60%,
                hsla(280, 100%, 60%, 0.4) 80%,
                hsla(280, 100%, 50%, 0) 100%
              )
            `,
            transform: 'translate(-50%, -50%)',
            animation: 'timeSpiral 20s linear infinite',
            mixBlendMode: 'screen',
            filter: 'blur(4px) brightness(1.5)',
            zIndex: -4
          }}
        />

        {/* Digital Circuit Patterns */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg,
                transparent 49.5%,
                hsla(240, 100%, 80%, 0.05) 49.5%,
                hsla(240, 100%, 80%, 0.05) 50.5%,
                transparent 50.5%
              ),
              linear-gradient(0deg,
                transparent 49.5%,
                hsla(240, 100%, 80%, 0.05) 49.5%,
                hsla(240, 100%, 80%, 0.05) 50.5%,
                transparent 50.5%
              )
            `,
            backgroundSize: '60px 60px',
            animation: 'circuitFlow 15s linear infinite',
            zIndex: -3
          }}
        />

        {/* Floating Time Elements */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '150vh',
            height: '150vh',
            background: `
              radial-gradient(circle at 75% 25%, hsla(240, 100%, 70%, 0.2) 0%, transparent 20%),
              radial-gradient(circle at 25% 75%, hsla(260, 100%, 70%, 0.2) 0%, transparent 20%),
              radial-gradient(circle at 85% 85%, hsla(280, 100%, 70%, 0.2) 0%, transparent 20%),
              radial-gradient(circle at 15% 15%, hsla(220, 100%, 70%, 0.2) 0%, transparent 20%)
            `,
            transform: 'translate(-50%, -50%)',
            animation: 'timeElements 30s ease-in-out infinite',
            mixBlendMode: 'screen',
            zIndex: -2
          }}
        />

        {/* Energy Waves */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 200px,
                hsla(240, 100%, 70%, 0.03) 200px,
                hsla(240, 100%, 70%, 0.03) 400px
              )
            `,
            animation: 'energyWaves 10s linear infinite',
            zIndex: -1
          }}
        />

        {/* Cinematic Vignette */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 20, 0.97) 100%)',
            mixBlendMode: 'multiply',
            zIndex: -1
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
              <WhatsAppButton />
              <EventRegistrationPopup />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SmoothScrollProvider>
  );
};

export default Index;