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
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import cosmicPattern from '@/assets/cosmic-pattern.jpg';
import backgroundMusic from '@/assets/stay-zvbldinlalo_dr6Xiy9k.m4a';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  useEffect(() => {
    // Start background music after splash screen completes
    if (!showSplash && audioRef.current) {
      const playMusic = async () => {
        try {
          audioRef.current!.volume = 0.7; // Set volume to 70%
          await audioRef.current?.play();
          setIsMusicPlaying(true);
        } catch (error) {
          console.log('Audio autoplay prevented:', error);
          setIsMusicPlaying(false); // Ensure state reflects reality
          // Fallback: try to play on first user interaction
          const handleFirstInteraction = async () => {
            try {
              await audioRef.current?.play();
              setIsMusicPlaying(true);
              document.removeEventListener('click', handleFirstInteraction);
              document.removeEventListener('keydown', handleFirstInteraction);
            } catch (err) {
              console.log('Audio play failed:', err);
              setIsMusicPlaying(false);
            }
          };
          document.addEventListener('click', handleFirstInteraction);
          document.addEventListener('keydown', handleFirstInteraction);
        }
      };
      playMusic();
    }
  }, [showSplash]);

  // Add audio event listeners to sync state with actual playback
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handlePlay = () => setIsMusicPlaying(true);
      const handlePause = () => setIsMusicPlaying(false);
      
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      
      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

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
              
              {/* Background Music */}
              <audio
                ref={audioRef}
                src={backgroundMusic}
                loop
                autoPlay
                preload="auto"
                className="hidden"
              />
              
              {/* Music Control Button */}
              <button
                onClick={toggleMusic}
                className="fixed bottom-32 right-6 z-50 w-12 h-12 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/30 transition-all duration-300 group"
                title={isMusicPlaying ? "Pause Music" : "Play Music"}
              >
                {isMusicPlaying ? (
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              
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