import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/General">General</Link></li>
    </ul>
  </nav>
);

export default Navbar;
