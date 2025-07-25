import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const EventRegistrationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 10 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      toast({
        title: "🎉 Special Event Registration!",
        description: "Don't miss out on ZENISTA 2025 - Limited time registration now open!"
      });
    }, 10000);

    return () => clearTimeout(showTimer);
  }, [toast]);

  useEffect(() => {
    if (isVisible) {
      // Auto close after 5 seconds
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(closeTimer);
    }
  }, [isVisible]);

  

  const handleRegisterNow = () => {
    // Open registration link (you can replace with actual registration URL)
    window.open('', '_blank');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
            transition={{ 
              type: "spring", 
              damping: 20, 
              stiffness: 300,
              duration: 0.6 
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full"
          >
            <Card className="relative overflow-hidden bg-card/95 backdrop-blur-md border-2 border-time-portal/40 shadow-2xl">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 20%, hsl(276 100% 70% / 0.2), transparent 50%)',
                      'radial-gradient(circle at 80% 80%, hsl(188 100% 60% / 0.2), transparent 50%)',
                      'radial-gradient(circle at 80% 20%, hsl(276 100% 70% / 0.2), transparent 50%)',
                      'radial-gradient(circle at 20% 80%, hsl(188 100% 60% / 0.2), transparent 50%)',
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0"
                />
                
                {/* Floating particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-time-portal/40 rounded-full"
                    animate={{
                      x: [0, Math.random() * 100, 0],
                      y: [0, Math.random() * 100, 0],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center border border-time-portal/30 hover:border-time-portal"
              >
                <X size={16} className="text-foreground" />
              </motion.button>

              <div className="relative z-10 p-6">
                {/* Header */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-6"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="inline-block mb-3"
                  >
                    {/* <Clock size={48} className="text-time-portal time-shadow" /> */}
                  </motion.div>
                  
                  <motion.h2
                    animate={{
                      textShadow: [
                        '0 0 10px hsl(276 100% 70% / 0.5)',
                        '0 0 20px hsl(188 100% 60% / 0.7)',
                        '0 0 10px hsl(276 100% 70% / 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl font-bold text-glow mb-2"
                  >
                    ⚡ ZENISTA 2025 ⚡
                  </motion.h2>
                  
                  <p className="text-time-glow font-semibold">Limited Time Registration</p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3 mb-6"
                >
                  <div className="flex items-center gap-3 p-3 bg-time-portal/10 rounded-lg">
                    <Star className="text-energy-yellow" size={20} />
                    <span className="text-sm text-foreground">₹60,500+ Total Prize Pool</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-time-glow/10 rounded-lg">
                    <Users className="text-time-glow" size={20} />
                    <span className="text-sm text-foreground">9 Exciting Events</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-energy-yellow/10 rounded-lg">
                    {/* <Clock className="text-time-portal" size={20} /> */}
                    <span className="text-sm text-foreground">August 8th, 2025</span>
                  </div>
                </motion.div>

                {/* Special Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="text-center mb-4"
                >
                  <Badge className="bg-gradient-to-r from-time-portal to-time-glow text-white px-4 py-2 text-sm font-bold animate-pulse">
                    🎯 Early Bird Registration Open!
                  </Badge>
                </motion.div>

                {/* Action Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-center"
                >
                  <Button
                    onClick={handleRegisterNow}
                    className="w-full time-gradient hover:scale-105 transform transition-all duration-300 text-lg py-6 font-bold shadow-xl"
                  >
                    🚀 Register Now - Don't Miss Out!
                  </Button>
                  
                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xs text-muted-foreground mt-2"
                  >
                    Auto-closing in few seconds...
                  </motion.p>
                </motion.div>
              </div>

              {/* Glowing border effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(276 100% 70% / 0.5)',
                    '0 0 40px hsl(188 100% 60% / 0.7)',
                    '0 0 20px hsl(276 100% 70% / 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-lg pointer-events-none"
              />
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventRegistrationPopup;