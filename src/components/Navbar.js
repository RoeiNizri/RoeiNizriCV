import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './logo192.png';

function Navbar() {
  return (
    <header className={`${styles.navbar} $`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
        <Link to="/">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/skills" className={styles.navLink}>Skills</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/general" className={styles.navLink}>General</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/projects" className={styles.navLink}>Portfolio</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
