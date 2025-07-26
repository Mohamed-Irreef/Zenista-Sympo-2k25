import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProfileCard from './ProfileCard';
import { ExternalLink } from 'lucide-react';
import profile1 from '@/assets/profile-1.jpg';
import profile2 from '@/assets/profile-2.jpg';
import profile3 from '@/assets/profile-3.jpg';
import profile from '@/assets/member2.png';
import thilakImage from '@/assets/thilak.jpg';

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Team data
  const chairperson = {
    name: "Dr. Rajeshwari Pandey",
    role: "Chairperson",
    designation: "Professor & Head",
    department: "Department of ECE",
    linkedinId: "rajeshwari-pandey-ece",
    image: profile
  };

  const keyPersons = [
    {
      name: "Dr. Suresh Kumar Reddy",
      role: "Dean of Engineering",
      designation: "Professor",
      department: "Sri Sairam Engineering College",
      linkedinId: "suresh-kumar-reddy",
      image: profile
    },
    {
      name: "Dr. Priya Vasudevan",
      role: "Vice Principal",
      designation: "Associate Professor",
      department: "Academic Affairs",
      linkedinId: "priya-vasudevan-academics",
      image: profile
    },
    {
      name: "Dr. Arun Karthick",
      role: "Research Director",
      designation: "Professor",
      department: "Research & Development",
      linkedinId: "arun-karthick-research",
      image: profile
    }
  ];

  const staffCoordinators = [
    {
      name: "Dr. Lakshmi Narayanan",
      role: "Faculty Coordinator",
      designation: "Associate Professor",
      department: "ECE Department",
      linkedinId: "lakshmi-narayanan-ece",
      image: profile
    },
    {
      name: "Dr. Venkatesh Murthy",
      role: "Technical Coordinator",
      designation: "Assistant Professor",
      department: "ECE Department",
      linkedinId: "venkatesh-murthy-tech",
      image: profile3
    },
    {
      name: "Prof. Sangeetha Ravi",
      role: "Event Coordinator",
      designation: "Assistant Professor",
      department: "ECE Department",
      linkedinId: "sangeetha-ravi-events",
      image: profile
    }
  ];

  const studentCoordinators = [
    {
      name: "Karthik Subramanian",
      role: "Student Head",
      designation: "Final Year",
      department: "ECE Department",
      linkedinId: "karthik-subramanian-ece",
      image: profile3
    },
    {
      name: "Ananya Krishnan",
      role: "Technical Lead",
      designation: "Final Year",
      department: "ECE Department",
      linkedinId: "ananya-krishnan-tech",
      image: profile
    },
    {
      name: "Rahul Menon",
      role: "Operations Head",
      designation: "Third Year",
      department: "ECE Department",
      linkedinId: "rahul-menon-ops",
      image: profile
    }
  ];

  const webDeveloper = [
    {
      name: "Mohamed Irreef S",
      role: "Web Developer",
      designation: "Full Stack Developer",
      department: "Technology Team",
      image: profile3
    },
    {
      name: "Thilak S",
      role: "Web Developer", 
      designation: "Frontend Developer",
      department: "Technology Team",
      image: thilakImage
    }
  ];

  const designTeam = [
    {
      name: "Nisha Patel",
      role: "UI/UX Designer",
      designation: "Design Lead",
      department: "Creative Team",
      linkedinId: "nisha-patel-design",
      image: profile
    },
    {
      name: "Vikram Singh",
      role: "Graphic Designer",
      designation: "Visual Designer",
      department: "Creative Team",
      linkedinId: "vikram-singh-graphics",
      image: profile1
    },
    {
      name: "Kavya Nair",
      role: "Brand Designer",
      designation: "Brand Strategist",
      department: "Creative Team",
      linkedinId: "kavya-nair-brand",
      image: profile
    }
  ];

  const teamMembers = [
    { name: "Siddharth Agarwal", linkedinId: "siddharth-agarwal-ece" },
    { name: "Meera Rajesh", linkedinId: "meera-rajesh-ece" },
    { name: "Arjun Krishnamurthy", linkedinId: "arjun-krishnamurthy-ece" },
    { name: "Divya Sundaram", linkedinId: "divya-sundaram-ece" },
    { name: "Rohan Iyer", linkedinId: "rohan-iyer-ece" }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 time-portal opacity-5" />
        <div className="absolute bottom-20 right-10 w-96 h-96 time-portal opacity-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] time-portal opacity-5" />
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
            Our Team
          </h2>
          <div className="w-24 h-1 time-gradient mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the brilliant minds behind ZENISTA 2025 - a dedicated team of faculty, 
            students, and professionals working together to create an extraordinary experience.
          </p>
        </motion.div>

        {/* Chairperson */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-time-portal text-center mb-8">Chairperson</h3>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <ProfileCard
                {...chairperson}
                index={0}
                category="chairperson"
              />
            </div>
          </div>
        </motion.div>

        {/* Key Persons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-time-portal text-center mb-8">Key Persons</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPersons.map((person, index) => (
              <ProfileCard
                key={person.name}
                {...person}
                index={index}
                category="key-person"
              />
            ))}
          </div>
        </motion.div>

        {/* Staff Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-time-glow text-center mb-8">Staff Coordinators</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffCoordinators.map((person, index) => (
              <ProfileCard
                key={person.name}
                {...person}
                index={index}
                category="staff"
              />
            ))}
          </div>
        </motion.div>

        {/* Student Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-quantum-purple text-center mb-8">Student Coordinators</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentCoordinators.map((person, index) => (
              <ProfileCard
                key={person.name}
                {...person}
                index={index}
                category="student"
              />
            ))}
          </div>
        </motion.div>

        {/* Web Developer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-cosmic-blue text-center mb-8">Web Developer</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {webDeveloper.map((person, index) => (
              <ProfileCard
                key={person.name}
                {...person}
                index={index}
                category="developer"
              />
            ))}
          </div>
        </motion.div>

        {/* Design Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-time-portal text-center mb-8">Design Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTeam.map((person, index) => (
              <ProfileCard
                key={person.name}
                {...person}
                index={index}
                category="design"
              />
            ))}
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-energy-yellow mb-8">Team Members</h3>
          <div className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-time-portal/10 rounded-lg p-4 border border-time-portal/20 hover:border-time-portal/40 transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open(`https://linkedin.com/in/${member.linkedinId}`, '_blank')}
                >
                  <h4 className="font-semibold text-foreground group-hover:text-time-portal transition-colors duration-300 mb-2">
                    {member.name}
                  </h4>
                  <div className="flex items-center justify-center gap-2 text-sm text-time-portal group-hover:text-time-glow transition-colors duration-300">
                    <ExternalLink size={14} />
                    <span>LinkedIn Profile</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;