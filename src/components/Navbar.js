import React, { useState, useEffect } from 'react'; // Import React and hooks
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import styles from './Navbar.module.css'; // Import CSS module for styling
import logo from './logo192.png'; // Import logo image, adjust path as needed

/**
 * Navbar Component
 * This component renders a responsive navigation bar with links to different sections
 * of the website. It includes a logo, navigation links, and a menu toggle for mobile view.
 */
const Navbar = () => {
  // State to track if the menu is open (for mobile view)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  // Function to handle the menu toggle click
  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // useEffect hook to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <nav className={styles.nav}>
          <ul className={isMenuOpen ? `${styles.navList} ${styles.active}` : styles.navList}>
            <li className={styles.navItem}>
              <Link to="/skills" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Skills</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/general" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>General</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
        
        {/* Menu Toggle Button */}
        <div className={styles.menuToggle} onClick={handleToggleClick}>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

// Export the Navbar component as the default export
export default Navbar;
