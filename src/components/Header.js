import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.overlay}></div>
    <div className={styles.container}>
      <h1 className={styles.title}>Roei Nizri</h1>
      <h2 className={styles.subtitle}>Full Stack Developer</h2>
      <p className={styles.description}>
        A highly motivated and skilled B.Sc Software Engineering student with hands-on experience in 
        developing a variety of projects including OpenGL, full-stack applications, and AI-based algorithms. 
        Proficient in multiple programming languages and technologies with a passion for technology and programming.
      </p>
      <p className={styles.description}>
        Experienced in customer service and management roles, capable of leading teams and delivering under pressure. 
        Looking forward to proving myself in the next step of my professional career, available 5 days a week.
      </p>
    </div>
  </header>
);

export default Header;
