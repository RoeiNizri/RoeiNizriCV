import React from 'react';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';


function SkillsPage() {
  return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <div>
      <Skills />
    </div>
    </motion.div>
  );
}

export default SkillsPage;
