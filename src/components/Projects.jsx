import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes } from 'react-icons/fa';
import image2 from '../assets/header_img.png';
import image3 from '../assets/dashboard.png';
import image4 from '../assets/Portfolio.png';

const projects = [
  {
    title: "Food-Website",
    description: "A full-featured Food-Website with proper menu, cart system and payment method",
    image: image2,
    tags: ["React", "Tailwind.Css"],
    github: "https://github.com/Anantbhardwaj2003/Food-delivery-website",
    live: "https://food-pieces.netlify.app/",
    highlights: [
      "Implemented well-developed frontend",
      "Add to Cart Functionality",
      "Payment Interface"
    ],
    longDescription: `
      A well defind food-website using multiple functionalities and user interactive website which is easy to use and interact with it more effciently.
    `
  },
  {
    title: "Ezymetrics-Dashboard",
    description: "A Dashboard system with real-time updates of stocks,lifetime revenue,orders and charts using recharts with interactive dashboard2",
    image: image3,
    tags: ["React", "Tailwind","Recharts"],
    github: "https://github.com/Anantbhardwaj2003/frontend",
    live: "https://dashboard-ezymetrics.netlify.app/",
    highlights: [
      "Real-time collaboration",
      "Appealing Dashboard",
      "Team chat functionality",
      "Performance optimization"
    ],
    longDescription: `
      A powerful task management system designed for remote teams.
      Includes features like real-time updates, revenue,
      team chat, and orders. The system is optimized
      for performance and scalability.
    `
  },
  {
    title: "Portfolio",
    description: "A descriptive portfolio with all skills and projects.",
    image: image4,
    tags: [ "React", "Tailwind"],
    github: "https://github.com/Anantbhardwaj2003/Portfolio",
    live: "https://portfolio-ab-1.netlify.app/",
    highlights: [
      "User friendly website",
      "Skills and Projects Showcase",
    ],
    longDescription: `
      A well-designed portfolio using React.js, animations and Tailwind
    `
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(filter.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <section id="projects" className="py-20 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-secondary max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and experience in
            building complex applications with modern technologies.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search projects by name or technology..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            {filter ? (
              <FaTimes
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setFilter('')}
              />
            ) : (
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-0 top-0 p-2 hover:text-accent transition-colors"
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-secondary mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-accent mr-2">•</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          animate={{
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-accent/20 flex items-center justify-center"
        >
          <span className="text-white bg-black/50 px-4 py-2 rounded-lg">
            View Details
          </span>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-secondary mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1 bg-hover rounded-full text-sm text-accent"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}