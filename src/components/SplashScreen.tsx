import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import zenistaLogo from '@/assets/zenista1.png';
import loadingVideo from '@/assets/Video_Generation_Complete_Link.mp4';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        ref={(video) => {
          if (video) {
            video.playbackRate = 1.75;
          }
        }}
      >
        <source src={loadingVideo} type="video/mp4" />
      </video>

      {/* Video Overlay for better logo visibility */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Main Content */}
      <div className="relative z-20 text-center">
        {/* Zenista Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-0"
        >
          <div className="w-40 h-40 mb-4">
            <motion.img
            src={zenistaLogo}
            alt="Zenista Logo"
            className="w-64 h-64 md:w-48 md:h-48 object-contain drop-shadow-2xl"
            animate={{
              filter: [
                'drop-shadow(0 0 20px hsl(188 100% 60% / 0.8))',
                'drop-shadow(0 0 30px hsl(276 100% 70% / 1))',
                'drop-shadow(0 0 20px hsl(188 100% 60% / 0.8))'
              ]
            }}
            transition={{ 
              filter: { duration: 3, repeat: Infinity }
            }}
          />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-glow mb-0"
        >
          ZENISTA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-xl text-time-glow mb-2"
        >
          2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-muted-foreground mb-8"
        >
          National Level Technical Symposium
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-64 mx-auto"
        >
          <div className="bg-black/60 backdrop-blur-sm rounded-full h-2 mb-4 border border-time-portal/30">
            <motion.div
              className="h-full time-gradient rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Initializing Time Portal... {progress}%
          </p>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-time-portal text-sm"
          >
            Synchronizing temporal coordinates...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;