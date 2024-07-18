import React from 'react';
import styles from './Projects.module.css';

const Projects = () => (
  <section className={styles.projects}>
    <div className={styles.container}>
      <h2>Portfolio</h2>
      <div className={styles.project}>
        <h3>Kids' Playground Written in OpenGL</h3>
        <p>Created an interactive kids' park using OpenGL, incorporating animations, to enhance textures, and various visual effects user experience.</p>
      </div>
      <div className={styles.project}>
        <h3>Mini Project Application for Managing a Drinking System</h3>
        <p>Developed a full-stack application for managing a drinking machine system, integrating database management with frontend and backend development.</p>
      </div>
      <div className={styles.project}>
        <h3>Restaurant and Shell Menu Programming & ADT Programming</h3>
        <p>Programmed a user-friendly shell menu interface for a restaurant, facilitating order management and streamlining operations. Designed and implemented a restaurant management system leveraging ADT and file storage.</p>
      </div>
      <div className={styles.project}>
        <h3>Student Management System Using Files</h3>
        <p>Developed a file-based system to efficiently manage student records, including data entry, updating, and retrieval processes.</p>
      </div>
      <div className={styles.project}>
        <h3>Minefield Game</h3>
        <p>Developed a Java-based object-oriented programming Minefield game, focusing on game logic, graphical user interface, and user experience enhancements.</p>
      </div>
      <div className={styles.project}>
        <h3>MDP Search Algorithm - Artificial Intelligence</h3>
        <p>Implemented a Markov Decision Process (MDP) search algorithm to solve complex decision-making problems, applying AI principles.</p>
      </div>
      <div className={styles.project}>
        <h3>Digress</h3>
        <p>Conducted a data mining project to analyze and extract meaningful patterns from large datasets, utilizing advanced data mining techniques.</p>
      </div>
      <div className={styles.project}>
        <h3>Message Encryption System</h3>
        <p>Designed a secure system for encrypting messages using a combination of SALSA20, RSA, and EC ELGAMAL encryption algorithms to ensure data confidentiality and integrity.</p>
      </div>
      <div className={styles.project}>
        <h3>Real-Time Programming Game</h3>
        <p>Created a real-time version of the classic game "SPACE INVADERS", implementing game mechanics, graphics, and user interactions.</p>
      </div>
    </div>
  </section>
);

export default Projects;
