import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, User } from 'lucide-react';
import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  designation?: string;
  department?: string;
  linkedinId?: string;
  image?: string;
  index: number;
  category: 'chairperson' | 'key-person' | 'staff' | 'student' | 'developer' | 'design';
}

const ProfileCard = ({ 
  name, 
  role, 
  designation, 
  department, 
  linkedinId, 
  image, 
  index, 
  category 
}: ProfileCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = () => {
    switch (category) {
      case 'chairperson': return 'bg-energy-yellow/20 text-energy-yellow border-energy-yellow/30';
      case 'key-person': return 'bg-time-portal/20 text-time-portal border-time-portal/30';
      case 'staff': return 'bg-time-glow/20 text-time-glow border-time-glow/30';
      case 'student': return 'bg-quantum-purple/20 text-quantum-purple border-quantum-purple/30';
      case 'developer': return 'bg-cosmic-blue/20 text-cosmic-blue border-cosmic-blue/30';
      case 'design': return 'bg-time-portal/20 text-time-portal border-time-portal/30';
      default: return 'bg-time-portal/20 text-time-portal border-time-portal/30';
    }
  };

  const handleLinkedInClick = () => {
    if (linkedinId) {
      window.open(`https://linkedin.com/in/${linkedinId}`, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="h-full bg-card/80 backdrop-blur-sm border-time-portal/20 hover:border-time-portal/40 transition-all duration-300 overflow-hidden relative">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-time-portal/5 via-transparent to-time-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-time-portal/30 rounded-full opacity-0 group-hover:opacity-100"
              initial={{ x: 0, y: 0 }}
              animate={{
                x: Math.random() * 200,
                y: Math.random() * 200,
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="p-6 text-center relative z-10">
          {/* Profile Image */}
          <div className="relative mb-4">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-time-portal to-time-glow rounded-full p-1">
              <div className="w-full h-full bg-card rounded-full flex items-center justify-center overflow-hidden">
                {image ? (
                  <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="text-time-portal" size={32} />
                )}
              </div>
            </div>
            
            {/* LinkedIn Indicator */}
            {linkedinId && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-1 -right-1 bg-time-portal rounded-full p-2 cursor-pointer"
                onClick={handleLinkedInClick}
              >
                <ExternalLink className="text-white" size={12} />
              </motion.div>
            )}
          </div>

          {/* Name */}
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-time-portal transition-colors duration-300">
            {name}
          </h3>

          {/* Role Badge */}
          <Badge className={`mb-3 ${getCategoryColor()}`}>
            {role}
          </Badge>

          {/* Additional Info */}
          {designation && (
            <p className="text-sm text-muted-foreground mb-1">
              {designation}
            </p>
          )}
          
          {department && (
            <p className="text-xs text-muted-foreground">
              {department}
            </p>
          )}

          {/* LinkedIn Info - Shows on Hover */}
          {linkedinId && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              className="mt-3 pt-3 border-t border-time-portal/20"
            >
              <p className="text-xs text-time-portal cursor-pointer hover:underline" onClick={handleLinkedInClick}>
                linkedin.com/in/{linkedinId}
              </p>
            </motion.div>
          )}

          {/* Hover Effect Border */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 time-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-lg shadow-lg shadow-time-portal/20" />
        </div>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;