import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './logo192.png'; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={isMenuOpen ? `${styles.navList} ${styles.active}` : styles.navList}>
            <li className={styles.navItem}><Link to="/skills" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li className={styles.navItem}><Link to="/general" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>General</Link></li>
            <li className={styles.navItem}><Link to="/projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
            <li className={styles.navItem}><Link to="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.menuToggle} onClick={handleToggleClick}>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
