import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, Target, Award } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: "Innovation Hub",
      description: "Fostering cutting-edge ideas and technological breakthroughs in Electronics & Communication Engineering"
    },
    {
      icon: Users,
      title: "National Platform",
      description: "Bringing together brilliant minds from engineering colleges across the nation for knowledge exchange"
    },
    {
      icon: Target,
      title: "Skill Enhancement",
      description: "Comprehensive events designed to challenge and enhance technical and soft skills of participants"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Celebrating excellence through awards, certificates, and networking opportunities with industry experts"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 time-portal opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 time-portal opacity-10" />
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
            About ZENISTA 2025
          </h2>
          <div className="w-24 h-1 time-gradient mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ZENISTA 2025 is a prestigious national-level technical symposium organized by the Department of 
            Electronics and Communication Engineering at Sri Sairam Engineering College. This extraordinary 
            event serves as a confluence of innovation, technology, and academic excellence, bringing together 
            the brightest minds from across the nation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Mission */}
          <div className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-xl p-8 time-warp">
            <h3 className="text-2xl font-bold text-time-portal mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create an inspiring platform where engineering students can showcase their technical prowess, 
              engage in meaningful discussions, and collaborate on innovative solutions that address real-world 
              challenges. ZENISTA aims to bridge the gap between academic learning and industry requirements, 
              fostering a culture of continuous learning and innovation.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-xl p-8 time-warp">
            <h3 className="text-2xl font-bold text-time-glow mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To establish ZENISTA as the premier technical symposium in South India, known for its excellence 
              in organizing world-class events that inspire innovation, promote technical knowledge sharing, 
              and create lasting professional networks among future engineers and technology leaders.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-xl p-6 hover:border-time-portal/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="bg-time-portal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-time-portal/20 transition-colors duration-300">
                  <feature.icon className="text-time-portal" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-time-portal/10 via-time-glow/10 to-time-portal/10 rounded-xl p-8 border border-time-portal/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Join the Time Travel Experience
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Be part of an extraordinary journey where past innovations meet future possibilities. 
              ZENISTA 2025 promises to be an unforgettable experience that will shape your engineering journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-time-portal">
              <span className="bg-time-portal/10 px-4 py-2 rounded-full">Technical Competitions</span>
              <span className="bg-time-glow/10 px-4 py-2 rounded-full">Workshops</span>
              <span className="bg-time-portal/10 px-4 py-2 rounded-full">Industry Talks</span>
              <span className="bg-time-glow/10 px-4 py-2 rounded-full">Networking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;