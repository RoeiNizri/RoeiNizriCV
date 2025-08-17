import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import GeneralInfoPage from './pages/GeneralInfoPage';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import { useLoading, LoadingProvider } from './pages/LoadingProvider';
import BitcoinLoader from './components/BitcoinLoader';
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, [location.pathname, setLoading]);

  return (
    <div className="App">
      <Navbar />
      {loading && <BitcoinLoader />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/general" element={<GeneralInfoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Popup />
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </Router>
  );
}
