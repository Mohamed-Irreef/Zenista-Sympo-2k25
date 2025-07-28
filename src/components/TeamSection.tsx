import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProfileCard from './ProfileCard';
import { ExternalLink } from 'lucide-react';
import profile1 from '@/assets/profile-1.jpg';
import profile2 from '@/assets/profile-2.jpg';
import profile3 from '@/assets/profile-3.jpg';
import profile from '@/assets/member2.png';
import thilakImage from '@/assets/thilak.jpg';

import leader1 from '@/assets/organizers/ambassadors/person1.jpg';
import leader2 from '@/assets/organizers/ambassadors/VIVITHA M G.jpg';
import leader3 from '@/assets/organizers/ambassadors/Arya Subramani S.jpg';
import leader4 from '@/assets/organizers/ambassadors/MIRUDHUBASNEE R S.jpg';

import key1 from '@/assets/organizers/keypersons/ceo.jpg';
import key2 from '@/assets/organizers/keypersons/principal.jpg';
import key3 from '@/assets/organizers/keypersons/hod.jpg';

import staff2 from '@/assets/organizers/staffs/staff1.jpg';
import staff1 from '@/assets/organizers/staffs/staff2.jpg';

import design1 from '@/assets/organizers/design/DIKSHA RS.jpg'
import design2 from '@/assets/organizers/design/Gunavathi D.png';
import design3 from '@/assets/organizers/design/HARINI S.jpg';
import design4 from '@/assets/organizers/design/SAILENDRAVEL S.jpg';
import design5 from '@/assets/organizers/design/SRIVATSAN M.jpg';
import design6 from '@/assets/organizers/design/vikash.jpg';
import design7 from '@/assets/organizers/design/pavithran.jpg';

import media1 from '@/assets/organizers/media/senthur.jpg';
import media4 from '@/assets/organizers/media/Reshmen-ra.jpg';
import media3 from '@/assets/organizers/media/nithish-k-.jpg';
import media2 from '@/assets/organizers/media/akilan.jpg'; 
import media5 from '@/assets/organizers/media/sarvesh.jpg'; 

import dev1 from '@/assets/organizers/develpoers/dev1.png';
// import the correct image file
import dev2 from '@/assets/organizers/develpoers/dev2.jpg';



const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Team data
  // const chairperson = {
  //   name: "Dr. Rajeshwari Pandey",
  //   role: "Chairperson",
  //   designation: "Professor & Head",
  //   department: "Department of ECE",
  //   linkedinId: "rajeshwari-pandey-ece",
  //   image: profile
  // };

  const keyPersons = [
    {
      name: "Dr. Sai Prakash Leomuthu",
      role: "CEO - Sairam Institutions",
      
      linkedinId: " https://www.linkedin.com/in/sairamceo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: key1
    },
    {
      name: "Dr. J. Raja",
      role: "Principal - Sri Sairam Engineering College",
      
      linkedinId: "https://www.linkedin.com/in/raja-j-32b44164?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: key2
    },
    {
      name: "Dr. J. Thamilselvi",
      role: "HOD - ECE Department",
      department: "Sri Sairam Engineering College",
      linkedinId: " https://www.linkedin.com/in/jthamilselvi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      image: key3
    }
  ];

  const staffCoordinators = [
    {
      name: "Mr. K. Srinivasan ",
      role: "Associate Professor - ECE Department",
      department: "Sri Sairam Engineering College",
      linkedinId: "https://www.linkedin.com/in/srinivasanenoch?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: staff2
    },
    {
      name: "Ms. S. GAYATHRI",
      role: "Associate Professor - ECE Department",

      department: "Sri Sairam Engineering College",
      linkedinId: "https://in.linkedin.com/in/sgayathriece",
      image: staff1
    },
    
    // {
    //   name: "Prof. Sangeetha Ravi",
    //   role: "Event Coordinator",
    //   designation: "Assistant Professor",
    //   department: "ECE Department",
    //   linkedinId: "sangeetha-ravi-events",
    //   image: profile
    // }
  ];

  const studentCoordinators = [
    {
      name: "Udaya M R",
      role: "Chairperson",
      designation: "Final Year - ECE Department",
      department: "+91 9942003192",
      linkedinId: "https://www.linkedin.com/in/udaya-m-r-aa4600257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: leader1
    },
    {
      name: "Vivitha M G ",
      role: "Vice - Chairperson",
      designation: "Final Year - ECE Department",
      department: "+91 8148802753",
      linkedinId: "https://www.linkedin.com/in/vivitha-m-giriraj-102871259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: leader2
    },
    {
      name: "Arya Subramani S",
      role: "Secretary",
      designation: "Final Year - ECE Department",
      department: "+91 9962661505",
      linkedinId: "https://www.linkedin.com/in/arya-subramani-s-597663257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: leader3
    },
    {
      name: "Mirudhubasnee R S",
      role: "Treasurer",
      designation: "Final Year - ECE Department",
      department: "+91 6382163948",
      linkedinId: "https://www.linkedin.com/in/mirudhubasnee-r-s-4778b2255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: leader4
    }
  ];

  const webDeveloper = [
    {
      name: "Mohamed Irreef S",
      role: "Web Developer",
      designation: "Final Year - ECE Department",
      department: "+91 9361757753",
      linkedinId:"https://www.linkedin.com/in/-mohamed-ireef-s-23-/",
      image: dev1
    },
    {
      name: "Thilak S",
      role: "Web Developer", 
      designation: "Final Year - ECE Department",
      department: "+91 9345981303",
      linkedinId:"https://www.linkedin.com/in/thilak5746/",
      image: thilakImage
    },
    {
      name: "Ahamed",
      role: "Web Developer", 
      designation: "Final Year - ECE Department",
      department: "+91 88381 82609",
      linkedinId:"https://www.linkedin.com/in/thilak5746/",
      image: dev2
    }
  ];

  const designTeam = [
    {
      name: "Diksha R S",
      role: "Graphic Designer",
      designation: "Final Year - ECE Department",
      department: "Design Team",
      linkedinId: "/",
      image: design1
    },
    {
      name: "Gunavathi D",
      role: "Graphic Designer",
      designation: "Final Year - ECE Department",
      department: "Design Team",
      linkedinId: "/",
      image: design2
    },
    {
      name: "Harini S",
      role: "Graphic Designer",
      designation: "Final Year - ECE Department",
      department: "Design Team",
      linkedinId: "/",
      image: design3
    },


    {
      name: "Pavithran M",
      role: "Graphic Designer",
      designation: "3rd Year - ECE Department",
      department: "Design Team",
      linkedinId: "/",
      image: design7
    },
    {
      name: "Sailendravel S",
      role: "Graphic Designer",
      designation: "3rd Year - ECE Department",
      department: "Design Team",
      linkedinId: "/",
      image: design4
    },
    {
      name: "Srivatsan M",
      role: "Graphic Designer",
      designation: "3rd Year - ECE Department",
      department: "Design Team",
      linkedinId: "/",
      image: design5
    }
    ,
    {
      name: "Viaksh",
      role: "Graphic Designer",
      designation: "3rd Year - ECE Department",
      department: "Design Team",
      linkedinId: "/",
      image: design6
    }
  ];

   const mediaTeam = [
    {
      name: "Senthur Velan",
      role: "Media Team",
      designation: "Final Year - ECE Department",
      
      linkedinId: "/",
      image: media1
    },
    {
      name: "Akilan",
      role: "Media Team",
      designation: "3rd Year - ECE Department",
      
      linkedinId: "/",
      image: media2
    },
    {
      name: "Nithish K",
      role: "Media Team",
      designation: "3rd Year - ECE Department",
     
      linkedinId: "/",
      image: media3
    },


    {
      name: "Reshmen R A",
      role: "Media Team",
      designation: "3rd Year - ECE Department",
   
      linkedinId: "/",
      image: media4
    },
    {
      name: "Sarvesh",
      role: "Media Team",
      designation: "3rd Year - ECE Department",
    
      linkedinId: "/",
      image: media5
    },
    
  ];

  const magazeneTeam = [
  { name: "Gopika R N - IV Yr", linkedinId: "/" },
  { name: "Sasmitha - III Yr", linkedinId: "/" },
  { name: "Devadharshini S - III Yr", linkedinId: "/" },
  { name: "Vinothini - III Yr", linkedinId: "/" },
  { name: "Hemadharshani - III Yr", linkedinId: "/" },
  { name: "Deepa - III Yr", linkedinId: "/" },
  { name: "Nethiya Priya - III Yr", linkedinId: "/" },
  { name: "Hajira R N - III Yr", linkedinId: "/" }
];

const artTeam = [
  { name: "Sahana V - IV Yr", linkedinId: "/" },
  { name: "Kaviyarasi - IV Yr", linkedinId: "/" },
  { name: "Hare Varshan J - IV Yr", linkedinId: "/" },
  { name: "Charan K - IV Yr", linkedinId: "/" },
  { name: "Yugenther A P - III Yr", linkedinId: "/" },
  { name: "Nithya Sri S - III Yr", linkedinId: "/" },
  { name: "Aburva V - III Yr", linkedinId: "/" },
  { name: "Godlin Ashika V A - III Yr", linkedinId: "/" },
  { name: "Yogeshwari J - III Yr", linkedinId: "/" },
  { name: "Poovizhi E - III Yr", linkedinId: "/" },
  { name: "Priyanka B - III Yr", linkedinId: "/" },
  { name: "Parvadha V K - III Yr", linkedinId: "/" }
];

const logisticsTeam = [
  { name: "Hasmitha Ogi - IV Yr", linkedinId: "/" },
  { name: "Anaswara A K - IV Yr", linkedinId: "/" },
  { name: "Madhan Kumar S - IV Yr", linkedinId: "/" },
  { name: "Madhvesh R - IV Yr", linkedinId: "/" },
  { name: "Melvin Joel K - IV Yr", linkedinId: "/" },
  { name: "Sreenethi E - IV Yr", linkedinId: "/" },
  { name: "Madhu Mitha N - IV Yr", linkedinId: "/" }
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
        {/* <motion.div
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
        </motion.div> */}

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
          <div className="grid md:grid-cols-3 md:justify-center  md:items-center lg:grid-cols-3 md gap-6">
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
          <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
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


        {/* Media Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-time-portal text-center mb-8">Media Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaTeam.map((person, index) => (
              <ProfileCard
                key={person.name}
                {...person}
                index={index}
                category="design"
              />
            ))}
          </div>
        </motion.div>

        {/* Magazene Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-energy-yellow mb-8">Magazine Team </h3>
          <div className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {magazeneTeam.map((member, index) => (
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

        {/* Art Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-energy-yellow mb-8">Art And Model Team </h3>
          <div className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artTeam.map((member, index) => (
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


        {/* Logistic Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-energy-yellow mb-8">Logistic Team </h3>
          <div className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logisticsTeam.map((member, index) => (
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