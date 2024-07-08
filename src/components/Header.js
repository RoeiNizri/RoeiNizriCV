import React, { useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector(`.${styles.header}`);
    header.classList.add(styles.animate);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Ran Polac</h1>
        <h2>B.Sc Information Systems Engineering Student</h2>
        <p>
          A team player with a can-do attitude. Highly passionate about technology and programming.
          Eager to explore new fields and improve existing skills. Experienced in leading teams and
          working under pressure.
        </p>
        <p>Seeking junior positions in relevant fields, available 5 days a week.</p>
      </div>
    </header>
  );
};

export default Header;
