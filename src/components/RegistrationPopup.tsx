import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useCountdown } from '@/hooks/use-countdown';
import { toast } from 'sonner';

const RegistrationPopup = () => {
  const { days, hours, minutes, seconds } = useCountdown('2025-08-08T09:00:00');
  const [isOpen, setIsOpen] = useState(false);



  // Effect for auto-closing the popup
  useEffect(() => {
    if (isOpen) {
      console.log('Starting auto-close timer');
      const closeTimer = setTimeout(() => {
        console.log('Auto-closing popup');
        setIsOpen(false);
      }, 10000); // 10 seconds

      return () => {
        console.log('Cleaning up auto-close timer');
        clearTimeout(closeTimer);
      };
    }
  }, [isOpen]);

  // Effect for showing popup and toast
  useEffect(() => {
    console.log('RegistrationPopup mounted');
    
    // Remove this line in production
    localStorage.removeItem('popupShown');
    
    if (!localStorage.getItem('popupShown')) {
      const popupTimer = setTimeout(() => {
        console.log('Timer finished, showing popup');
        setIsOpen(true);
        localStorage.setItem('popupShown', 'true');
      }, 7000);

      // Show support toast after 20 seconds
      const toastTimer = setTimeout(() => {
        toast('Need Help?', {
          description: (
            <div className="space-y-2">
              <p className="font-medium text-time-portal">Our support team is here for you!</p>
              <p className="text-sm text-muted-foreground">Event leads and organizing team available 24/7 to assist with your queries.</p>
            </div>
          ),
          duration: 10000,
          className: 'bg-background/95 border-2 border-time-portal/20 backdrop-blur-md',
          position: 'bottom-right',
          action: {
            label: (
              <span className="flex items-center gap-2 text-time-portal hover:text-time-portal/80">
                <span className="font-semibold">Contact Support</span>
              </span>
            ),
            onClick: () => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            },
          },
        });
      }, 20000);

      return () => {
        clearTimeout(popupTimer);
        clearTimeout(toastTimer);
      };
    }
  }, []);

  const handleDownloadBrochure = () => {
    const brochureUrl = '/brochure.pdf';
    window.open(brochureUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => setIsOpen(false)} 
      />
      <div className="relative z-[101] bg-background/95 backdrop-blur-md p-6 rounded-lg shadow-xl max-w-md mx-4 border border-purple-300">
        <div className="absolute top-0 left-0 h-1 bg-time-portal/20 w-full overflow-hidden">
          <div 
            className="h-full bg-time-portal w-full animate-progress"
            style={{ 
              transformOrigin: 'left',
            }}
          />
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 p-2 hover:bg-muted rounded-full"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Registrations Closed
          </h2>
          
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
          
          <p className="text-muted-foreground mb-4">
            Thank you for your interest in ZENISTA 2025! Registration for all events has been closed.
          </p>

          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-sm font-semibold text-red-500">
              ⚠️ Registration has been closed. For further details, contact Admins
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-background/50 rounded-lg border border-time-portal/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-time-portal">{days}</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-time-portal">{hours}</div>
              <div className="text-xs text-muted-foreground">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-time-portal">{minutes}</div>
              <div className="text-xs text-muted-foreground">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-time-portal">{seconds}</div>
              <div className="text-xs text-muted-foreground">Seconds</div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              className="w-full py-2 px-4 bg-gray-500 text-white rounded-lg cursor-not-allowed opacity-50"
              disabled
            >
              Registration Closed
            </button>

            <button
              className="w-full py-2 px-4 bg-time-portal text-white rounded-lg hover:bg-time-portal/90 transition-colors"
              onClick={() => {
                setIsOpen(false);
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Admins
            </button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Event starts in {days} days. Contact admins for any queries!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;
