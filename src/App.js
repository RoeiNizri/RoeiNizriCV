import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import GeneralInfoPage from './pages/GeneralInfoPage';
import Navbar from './components/Navbar';
import Popup from './components/Popup';

function App() {
  const location = useLocation();

  return (
 /*       <!Structured Data for Logo   
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://roeinizri.com",
        "logo": "https://roeinizri.com/android-chrome-512x512.png",
        "favicon": "https://roeinizri.com/favicon.ico",
        "name": "Roei Nizri",
        "sameAs": [
          "https://www.linkedin.com/in/roeinizri",
          "https://github.com/roeinizri",
          "https://www.instagram.com/roeinizri/",
          "https://www.facebook.com/roeinizri/"
        ]
      }
*/
    <div className="App">
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/general" element={<GeneralInfoPage />} />
        </Routes>
      </AnimatePresence>
      <Popup />
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
