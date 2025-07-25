import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Trophy, Clock, Eye } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  category: 'technical' | 'non-technical';
  participants: string;
  duration: string;
  prize: string;
  logo?: string;
  onClick: () => void;
  index: number;
}

const EventCard = ({ 
  title, 
  description, 
  category, 
  participants, 
  duration, 
  prize, 
  logo,
  onClick, 
  index 
}: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card className="h-full bg-card/80 backdrop-blur-sm border-time-portal/20 hover:border-time-portal/60 hover:shadow-2xl hover:shadow-time-portal/20 transition-all duration-500 overflow-hidden relative group transform hover:scale-[1.03]">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-time-portal/10 via-transparent to-time-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Energy Wave Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{
            background: [
              'linear-gradient(0deg, transparent, hsl(276 100% 70% / 0.1), transparent)',
              'linear-gradient(90deg, transparent, hsl(188 100% 60% / 0.1), transparent)',
              'linear-gradient(180deg, transparent, hsl(276 100% 70% / 0.1), transparent)',
              'linear-gradient(270deg, transparent, hsl(188 100% 60% / 0.1), transparent)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
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

        <div className="p-6 relative z-10">
          {/* Logo and Category */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              {logo && (
                <motion.div className="relative">
                  <motion.img
                    src={logo}
                    alt={`${title} logo`}
                    className="w-16 h-16 rounded-full object-cover border-3 border-time-portal/40 group-hover:border-time-portal/80 transition-all duration-300 time-shadow"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-time-glow/30 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              )}
              <Badge 
                className={`${
                  category === 'technical' 
                    ? 'bg-time-portal/20 text-time-portal border-time-portal/30 hover:bg-time-portal/30' 
                    : 'bg-time-glow/20 text-time-glow border-time-glow/30 hover:bg-time-glow/30'
                } hover:scale-110 transform transition-all duration-300 px-3 py-1 text-sm font-semibold`}
              >
                {category === 'technical' ? 'Technical' : 'Non-Technical'}
              </Badge>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Clock className="text-time-portal group-hover:text-time-glow transition-colors duration-300" size={24} />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-time-portal transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Event Details */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-sm bg-time-portal/5 rounded-lg p-3 group-hover:bg-time-portal/10 transition-colors">
              <Users className="text-time-glow" size={18} />
              <span className="text-muted-foreground font-medium">Team Size: <span className="text-foreground font-semibold">{participants}</span></span>
            </div>
            <div className="flex items-center gap-3 text-sm bg-time-glow/5 rounded-lg p-3 group-hover:bg-time-glow/10 transition-colors">
              <Calendar className="text-time-portal" size={18} />
              <span className="text-muted-foreground font-medium">Duration: <span className="text-foreground font-semibold">{duration}</span></span>
            </div>
            <div className="flex items-center gap-3 text-sm bg-energy-yellow/5 rounded-lg p-3 group-hover:bg-energy-yellow/10 transition-colors">
              <Trophy className="text-energy-yellow" size={18} />
              <span className="text-muted-foreground font-medium">Prize: <span className="text-foreground font-semibold">{prize}</span></span>
            </div>
          </div>

          {/* Read More Button - Only visible on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4"
          >
            <Button
              className="w-full time-gradient hover:scale-105 transform transition-all duration-300 text-sm py-3 font-semibold"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <Eye className="mr-2" size={16} />
              Read More Details
            </Button>
          </motion.div>

          {/* Hover Effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 time-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Click Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-time-portal/20 rounded-full p-2">
            <div className="w-2 h-2 bg-time-portal rounded-full animate-pulse" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default EventCard;