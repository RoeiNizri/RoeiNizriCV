import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './logo192.png'; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.nav}>
          <ul className={isMenuOpen ? `${styles.navList} ${styles.active}` : styles.navList}>
            <li className={styles.navItem}><Link to="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
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
