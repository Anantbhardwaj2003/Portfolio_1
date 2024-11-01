import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import image1 from '../assets/about.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="relative flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center pt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
              }
            }}
            className="mb-8"
          >
            <div className="w-60 h-60 mx-auto mb-10 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
              <img
                src={image1}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent to-blue-600 text-transparent bg-clip-text animate-gradient"
          >
            Hi, I'm ANANT BHARDWAJ
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative mb-8"
          >
            <p className="text-xl md:text-2xl text-secondary">
              Full Stack Developer
            </p>
            <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { Icon: FaGithub, href: "https://github.com/Anantbhardwaj2003", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/anant-bhardwaj-b34417292/", label: "LinkedIn" },
              { Icon: FaEnvelope, href: "mailto:araabh6565@gmail.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-accent rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative p-3 bg-card rounded-lg shadow-lg group-hover:shadow-xl transition-all">
                  <Icon className="text-2xl text-accent" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}