import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <main>
        {/* Removed the ResumeSection component */}
      </main>
    </motion.div>
  );
}

export default Home;
