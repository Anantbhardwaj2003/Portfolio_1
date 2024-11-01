import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaServer, FaMobile, FaDatabase, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "Expertise in React, Tailwind and modern JavaScript. Creating responsive and interactive user interfaces.",
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Building scalable server-side applications and RESTful APIs.",
    technologies: ["Python", "Java"]
  },
  {
    icon: <FaMobile />,
    title: "Mobile-Development",
    description: "Developing cross-platform mobile applications with modern frameworks.",
    technologies: ["Flutter"]
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Designing and optimizing database structures for performance.",
    technologies: ["PostgreSQL", "MySQL"]
  }
];

const timeline = [
  {
    icon: <FaGraduationCap />,
    year: "2018-2019",
    title: "10th Class",
    description: "Completed 10th class from Modern International Sr. Sec. School"
  },
  {
    icon: <FaBriefcase />,
    year: "2020-2021",
    title: "12th Class",
    description: "Completed 12th class from Modern International Sr. Sec. School"
  },
  {
    icon: <FaAward />,
    year: "2021-2024",
    title: "Bachelor Degree in Computer Science",
    description: "Completed graduation from Bhaskaracharya College of Applied Sciences (DU)"
  },
  {
    icon: <FaAward />,
    year: "2024-2025",
    title: "Minor in AI",
    description: "Pursuing Course from IIT ROPAR"
  },

];

export default function About() {
  const [activeTab, setActiveTab] = useState('journey');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const tabVariants = {
    inactive: { opacity: 0.6 },
    active: { opacity: 1, scale: 1.05 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-secondary max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with 1 year of experience in building web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {['journey', 'skills'].map((tab) => (
            <motion.button
              key={tab}
              variants={tabVariants}
              animate={activeTab === tab ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full ${
                activeTab === tab
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-gray-100 text-secondary hover:bg-gray-200'
              } transition-all duration-300`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Journey Content */}
        <motion.div
          initial="hidden"
          animate={activeTab === 'journey' ? 'visible' : 'hidden'}
          variants={contentVariants}
          className={`space-y-8 ${activeTab !== 'journey' ? 'hidden' : ''}`}
        >
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start mb-8 relative"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <span className="text-sm text-accent font-semibold">{item.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                </div>
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-accent/20" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Content */}
        <motion.div
          initial="hidden"
          animate={activeTab === 'skills' ? 'visible' : 'hidden'}
          variants={contentVariants}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
            activeTab !== 'skills' ? 'hidden' : ''
          }`}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                animate={{
                  scale: hoveredSkill === index ? 1.2 : 1,
                  rotate: hoveredSkill === index ? 360 : 0
                }}
                transition={{ duration: 0.3 }}
                className="text-3xl text-accent mb-4"
              >
                {skill.icon}
              </motion.div>
              <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
              <p className="text-secondary mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-sm px-2 py-1 bg-white rounded-full shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}