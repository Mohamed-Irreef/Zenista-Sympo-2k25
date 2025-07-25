import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/Layout'
import SplashScreen from '@/components/SplashScreen'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import EventsSection from '@/components/EventsSection'
import GallerySection from '@/components/GallerySection'
import TeamSection from '@/components/TeamSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import ContactForm from '@/components/ContactForm'
import WhatsAppButton from '@/components/WhatsAppButton'
import EventRegistrationPopup from '@/components/EventRegistrationPopup'
import timePortalBg from '@/assets/time-portal-bg.jpg', useEffect, useRef } from 'react';
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
import ScrollProvider from '@/components/ScrollProvider';
import EventRegistrationPopup from '@/components/EventRegistrationPopup';
import timePortalBg from '@/assets/time-portal-bg.jpg';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video end
  const handleVideoEnded = () => {
    setShowIntroVideo(false);
  };

  // Handle video loading and errors
  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down playback slightly for smoother performance
    }
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video loading error:', e);
    setShowIntroVideo(false); // Skip to main content if video fails
  };

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

    // Initialize video with low quality first
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', handleVideoLoaded);
      videoRef.current.addEventListener('error', handleVideoError);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
        videoRef.current.removeEventListener('error', handleVideoError);
      }
    };
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        {/* Background effects */}
        {!showSplash && !showIntroVideo && (
          <>
            {/* Cinematic Vignette and Overlay */}
            <div 
              className="fixed inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(0, 0, 30, 0.8) 100%)',
                mixBlendMode: 'multiply'
              }}
            />
            {/* Main animations */}
            {/* ... rest of your background effects ... */}
          </>
        )}
        
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" onComplete={() => {
              setShowSplash(false);
              setShowIntroVideo(true);
            }} />
          ) : showIntroVideo ? (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black"
            >
              <video
                ref={videoRef}
                autoPlay
                playsInline
                onEnded={handleVideoEnded}
                onLoadedData={handleVideoLoaded}
                onError={handleVideoError}
                className="w-full h-full object-cover"
                style={{ opacity: 1 }}
              >
                <source src="/src/assets/bg.mp4" type="video/mp4" />
              </video>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Cinematic Vignette and Overlay for better readability */}
              <div 
                className="fixed inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(0, 0, 30, 0.8) 100%)',
                  mixBlendMode: 'multiply'
                }}
              />

        {/* Main Vortex Spiral */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '400vh',
            height: '400vh',
            background: `
              conic-gradient(
                from 0deg at 50% 50%,
                hsla(276, 100%, 60%, 0) 0deg,
                hsla(276, 100%, 60%, 0.15) 60deg,
                hsla(240, 100%, 50%, 0.2) 180deg,
                hsla(195, 100%, 50%, 0.15) 240deg,
                hsla(276, 100%, 60%, 0) 360deg
              )
            `,
            transform: 'translate(-50%, -50%)',
            animation: 'vortexSpin 40s linear infinite',
            mixBlendMode: 'screen'
          }}
        />

        {/* Time Energy Waves */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '300vh',
            height: '300vh',
            background: `
              repeating-radial-gradient(
                circle at 50% 50%,
                transparent 0,
                transparent 80px,
                hsla(276, 100%, 60%, 0.1) 81px,
                hsla(240, 100%, 50%, 0) 82px,
                transparent 83px,
                hsla(195, 100%, 60%, 0.1) 84px,
                transparent 85px
              )
            `,
            transform: 'translate(-50%, -50%)',
            animation: 'timeWaves 25s ease-out infinite',
            filter: 'blur(1px)'
          }}
        />

        {/* Holographic Clock Elements */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              conic-gradient(from 0deg at 80% 20%, transparent 0%, hsla(195, 100%, 50%, 0.1) 5%, transparent 10%),
              conic-gradient(from 180deg at 20% 80%, transparent 0%, hsla(276, 100%, 60%, 0.1) 5%, transparent 10%),
              radial-gradient(circle at 50% 50%, hsla(240, 100%, 50%, 0.05) 30%, transparent 70%)
            `,
            animation: 'clockElements 30s linear infinite',
            opacity: 0.7,
            mixBlendMode: 'screen'
          }}
        />

        {/* Digital Grid Framework */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, transparent 49.9%, hsla(195, 100%, 50%, 0.03) 50%, transparent 50.1%) 0 0 / 100px 100px,
              linear-gradient(0deg, transparent 49.9%, hsla(276, 100%, 50%, 0.03) 50%, transparent 50.1%) 0 0 / 100px 100px,
              linear-gradient(45deg, hsla(240, 100%, 50%, 0.02) 25%, transparent 25.5%)
            `,
            animation: 'gridPulse 20s linear infinite',
            mixBlendMode: 'screen'
          }}
        />

        {/* Light Streaks */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(45deg, transparent 45%, hsla(195, 100%, 50%, 0.1) 50%, transparent 55%),
              linear-gradient(-45deg, transparent 45%, hsla(276, 100%, 60%, 0.1) 50%, transparent 55%)
            `,
            backgroundSize: '400% 400%',
            animation: 'lightStreaks 15s linear infinite',
            mixBlendMode: 'screen',
            opacity: 0.6
          }}
        />

        {/* Cinematic Vignette */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0, 0, 30, 0.97) 100%)',
            mixBlendMode: 'multiply'
          }}
        />


        
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen 
              key="splash" 
              onComplete={() => {
                setShowSplash(false);
                setShowIntroVideo(true);
              }} 
            />
          ) : showIntroVideo ? (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black"
            >
              <video
                ref={videoRef}
                autoPlay
                playsInline
                onEnded={handleVideoEnded}
                onLoadedData={handleVideoLoaded}
                onError={(e) => handleVideoError(e as unknown as Event)}
                className="w-full h-full object-cover"
                style={{ opacity: 1 }}
              >
                <source src="/src/assets/bg.mp4" type="video/mp4" />
              </video>
            </motion.div>
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
    </ScrollProvider>
  );
};

export default Index;