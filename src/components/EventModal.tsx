import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ExternalLink, Users, Calendar, Trophy, User, Phone } from 'lucide-react';
import { useEffect } from 'react';

interface Coordinator {
  name: string;
  role: 'Lead' | 'Co-Lead';
  phone: string;
  image: string;
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    description: string;
    fullDescription: string;
    category: 'technical' | 'non-technical';
    participants: string;
    duration: string;
    prize: string;
    rules: string[];
    activities?: { name: string; description: string }[];
    coordinators: Coordinator[];
    registrationLink: string;
  } | null;
}

const EventModal = ({ isOpen, onClose, event }: EventModalProps) => {
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'; // Lock background scroll
  } else {
    document.body.style.overflow = ''; // Restore scroll
  }

  return () => {
    document.body.style.overflow = ''; // Cleanup on unmount
  };
}, [isOpen]);
if (!event) return null;
  const handleRegister = () => {
    if (event.registrationLink) {
      window.open(event.registrationLink, '_blank');
    } else {
      console.warn('No registration link found for event:', event.title);
    }
  };

  

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose} >
          <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-time-portal/20 overflow-hidden p-0">
            <div className="max-h-[80vh] overflow-y-auto pr-4 pl-4 py-6 custom-scrollbar" onWheel={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
              <DialogHeader className="pb-6 border-b border-time-portal/20 l">
                <div className="flex justify-between items-start">
                  <div>
                    <DialogTitle className="text-3xl font-bold text-glow mb-2">
                      {event.title}
                    </DialogTitle>
                    <Badge 
                      className={`${
                        event.category === 'technical' 
                          ? 'bg-time-portal/20 text-time-portal border-time-portal/30' 
                          : 'bg-time-glow/20 text-time-glow border-time-glow/30'
                      }`}
                    >
                      {event.category === 'technical' ? 'Technical Event' : 'Non-Technical Event'}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>

              <div className="py-6 space-y-8">
                {/* Event Details Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-time-portal/10 rounded-lg p-4 text-center">
                    <Users className="text-time-portal mx-auto mb-2" size={24} />
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-semibold">{event.participants}</p>
                  </div>
                  <div className="bg-time-glow/10 rounded-lg p-4 text-center">
                    <Calendar className="text-time-glow mx-auto mb-2" size={24} />
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{event.duration}</p>
                  </div>
                  <div className="bg-energy-yellow/10 rounded-lg p-4 text-center">
                    <Trophy className="text-energy-yellow mx-auto mb-2" size={24} />
                    <p className="text-sm text-muted-foreground">Prize</p>
                    <p className="font-semibold">{event.prize}</p>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-xl font-semibold text-time-portal mb-3">Event Description</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {event.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Activities (if available) */}
                {event.activities && (
                  <div>
                    <h3 className="text-xl font-semibold text-time-portal mb-3">Activities</h3>
                    <div className="space-y-4">
                      {event.activities.map((activity, index) => (
                        <div key={index} className="bg-muted/50 rounded-lg p-4">
                          <h4 className="font-semibold text-time-glow mb-2">{activity.name}</h4>
                          <p className="text-muted-foreground text-sm">{activity.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rules and Regulations */}
                <div>
                  <h3 className="text-xl font-semibold text-time-portal mb-3">Rules and Regulations</h3>
                  <ul className="space-y-2">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-time-glow rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coordinators */}
                <div>
                  <h3 className="text-xl font-semibold text-time-portal mb-4">Event Coordinators</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {event.coordinators.map((coordinator, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card/80 border border-time-portal/20 rounded-lg p-4 text-center"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-time-portal to-time-glow rounded-full mx-auto mb-3 flex items-center justify-center">
                          <User className="text-white" size={32} />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{coordinator.name}</h4>
                        <Badge 
                          className={`mb-2 ${
                            coordinator.role === 'Lead' 
                              ? 'bg-time-portal/20 text-time-portal' 
                              : 'bg-time-glow/20 text-time-glow'
                          }`}
                        >
                          {coordinator.role}
                        </Badge>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <Phone size={14} />
                          <span>{coordinator.phone}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Registration Button */}
                <div className="text-center pt-6 border-t border-time-portal/20">
                  <Button
                    onClick={handleRegister}
                    className="time-gradient hover:scale-105 transform transition-all duration-300 text-lg px-8 py-3"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Register Now
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Fill out our registration form
                  </p>
                </div>
              </div>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default EventModal;