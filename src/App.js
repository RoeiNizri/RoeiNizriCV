import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import GeneralInfoPage from './pages/GeneralInfoPage';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Popup from './components/Popup';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/general" element={<GeneralInfoPage />} />
        </Routes>
        <Popup /> {/* Add the Popup component here */}
      </div>
    </Router>
  );
}

export default App;
