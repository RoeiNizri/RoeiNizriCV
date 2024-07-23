import React from 'react';
import { motion } from 'framer-motion';
import GeneralInfo from '../components/GeneralInfo';

function GeneralInfoPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <div>
      <GeneralInfo />
    </div>
     </motion.div>
  );
}

export default GeneralInfoPage;
