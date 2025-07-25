import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const phoneNumbers = ['+91 99420 03192', '+91 99420 03192'];
  
  const handleWhatsAppClick = () => {
    // Create a message with both numbers
    const message = encodeURIComponent(
      `Hello! I'm interested in ZENISTA 2025. Please provide more information about the events and registration process.`
    );
    
    //  first number as primary contact
    const phoneNumber = phoneNumbers[0].replace(/\s+/g, '').replace('+', '');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 2, duration: 0.8, type: "spring" }}
      className="fixed bottom-6 left-6 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgb(0, 0, 0, 0.7)",
            "0 0 0 10px rgb(37, 0, 102, 0)",
            "0 0 0 20px rgb(37, 211, 102, 0)"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="relative"
      >
        <Button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg transition-all duration-300 border-0"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={28} className="text-white" />
        </Button>
        
        {/* Notification badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
        >
          !
        </motion.div>
      </motion.div>
      
      {/* Tooltip */}
      
    </motion.div>
  );
};

export default WhatsAppButton;