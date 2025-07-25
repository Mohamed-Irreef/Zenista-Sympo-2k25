import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import eceDept1 from '@/assets/ece-dept-1.jpg';
import eceDept2 from '@/assets/ece-dept-2.jpg';
import eceDept3 from '@/assets/ece-dept-3.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gallery images - using local and department images for better performance
  const galleryImages = [
    { src: eceDept1, alt: "ECE Department Lab - Circuit Analysis", title: "Advanced Circuit Analysis Lab" },
    { src: eceDept2, alt: "Electronics Lab - Students Working", title: "Students Working on Projects" },
    { src: eceDept3, alt: "Communication Lab Equipment", title: "Communication Systems Lab" },
    { src: gallery1, alt: "Modern Computer Lab", title: "Computer Programming Lab" },
    { src: gallery2, alt: "Circuit Board Design", title: "PCB Design & Testing" },
    { src: gallery3, alt: "Java Programming Session", title: "Software Development Workshop" },
    { src: gallery4, alt: "Students Collaborating", title: "Team Project Session" },
    { src: gallery5, alt: "Electronics Workshop", title: "Hardware Development Lab" },
    { src: gallery6, alt: "AI & Robotics Lab", title: "Artificial Intelligence Research" },
    { src: gallery7, alt: "Digital Matrix Display", title: "Digital Systems Lab" },
    { src: gallery8, alt: "Code Development", title: "Programming & Development" },
    { src: gallery9, alt: "Tech Conference", title: "Technical Symposium Events" },
    { src: gallery10, alt: "Engineering Workspace", title: "Modern Engineering Facility" }
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 time-portal opacity-5" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 time-portal opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-glow mb-6">
            Department Gallery
          </h2>
          <div className="w-24 h-1 time-gradient mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the state-of-the-art facilities and vibrant learning environment of our 
            Electronics and Communication Engineering Department.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer relative overflow-hidden rounded-lg aspect-square"
              onClick={() => openImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-time-portal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm font-semibold text-white text-center">
                  {image.title}
                </h3>
              </div>

              {/* Click Indicator */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-time-portal/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-time-portal mb-4">
              World-Class Infrastructure
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our Department of Electronics and Communication Engineering features cutting-edge laboratories, 
              advanced research facilities, and modern equipment that provide students with hands-on experience 
              in the latest technologies. From VLSI design labs to communication systems testing facilities, 
              we ensure our students are well-prepared for the challenges of tomorrow.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] p-0 border-time-portal/20 bg-background/95 backdrop-blur-md">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="text-time-portal" size={24} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 p-2 rounded-full transition-colors"
              >
                <ChevronRight className="text-time-portal" size={24} />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background/90 p-2 rounded-full transition-colors"
              >
                <X className="text-foreground" size={20} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;