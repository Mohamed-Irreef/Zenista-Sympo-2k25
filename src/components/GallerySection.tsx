import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import gall0 from '@/assets/gallery/msme.jpg';
import gall1 from '@/assets/gallery/gallery1.jpg';
import gall2 from '@/assets/gallery/gallery3.jpg';
import gall3 from '@/assets/gallery/yashica.jpeg';

import gall4 from '@/assets/gallery/sight.jpg';
import gall5 from '@/assets/gallery/gate.jpg';
import gall6 from '@/assets/gallery/isro.jpeg';
import gall7 from '@/assets/gallery/prototype.jpg';
import gall8 from '@/assets/gallery/scouts.jpg';
import gall9 from '@/assets/gallery/gallery5.jpg';
import gall10 from '@/assets/gallery/gallery10.jpg';

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gallery images - using local and department images for better performance
  // const galleryImages = [
  //   { src: gall1, alt: "ECE Department - Sympo", title: "Zenista 2024" },
  //   { src: gall2, alt: "ECE Department - Sympo", title: "Zenista 2023" },
  //   { src: gall3, alt: "ECE Department - Sympo", title: "Zenista 2022" },
  //   { src: gall8, alt: "ECE Department - Sympo", title: "Zenista 2019" },
  //   { src: gall9, alt: "ECE Department - Sympo", title: "Zenista 2017" },
  //   { src: gall10, alt: "ECE Department - Sympo", title: "Zenista 2015" },

  //   { src: gall4, alt: "ECE Department", title: "4th International Conference on Communication" },
  //   { src: gall5, alt: "ECE Department", title: "Meeting" },
  //   { src: gall6, alt: "ECE Department", title: "Placement Training" },
  //   { src: gall7, alt: "ECE Department", title: "Meeting" },

  // ];

   const galleryImages = [
    { src: gall0, alt: "ECE Department", title: "MSME Idea Hackathon 2.0" },
    { src: gall1, alt: "ECE Department", title: "4th International Conference on Communication" },
    { src: gall2, alt: "ECE Department", title: "Placement Training" },
    { src: gall3, alt: "ECE Department", title: "Scholorship Awarded" },
    { src: gall4, alt: "ECE Department", title: "IEEE Sight" },
    { src: gall5, alt: "ECE Department", title: "Jamboree Event" },
    { src: gall6, alt: "ECE Department", title: "Isro Rover Challenge" },

    { src: gall7, alt: "ECE Department", title: "Best Prototype Award" },
    { src: gall8, alt: "ECE Department", title: "Gate Toppers" },
    { src: gall9, alt: "ECE Department", title: "Zenista 24" },
    { src: gall10, alt: "ECE Department", title: "Meeting" },

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
                className="absolute top-4 right-4 bg-background/80 hover:bg-background/90 p-2  rounded-full transition-colors"
              >
                {/* <X className="text-foreground" size={20} /> */}
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