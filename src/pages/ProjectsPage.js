import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';


function ProjectsPage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div>
      <Projects />
    </div>
    </motion.div>
  );
}

export default ProjectsPage;
