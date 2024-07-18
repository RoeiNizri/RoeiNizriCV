import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <span className={styles.navbarToggle} onClick={handleToggleClick}>
        &#9776;
      </span>
      <ul className={isMenuOpen ? `${styles.menu} ${styles.active}` : styles.menu}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/General" onClick={() => setIsMenuOpen(false)}>General</Link></li>
        <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
