import React from 'react';
import styles from './Skills.module.css';

const Skills = () => (
  <section className={styles.skills}>
    <div className={styles.container}>
      <h2>Skills</h2>
      <ul className={styles.skillList}>
        <li>
          <strong>Programming Languages:</strong> proficient in Python, C, Java (OOP), and JavaScript.
        </li>
        <li>
          <strong>Web Development:</strong> skilled with building web applications using HTML, CSS, React, and Node.js.
        </li>
        <li>
          <strong>Database Management:</strong> familiar with SQL, MySQL, and noSQL databases.
        </li>
        <li>
          <strong>Software Architecture:</strong> knowledgeable in OPM, UML, and ERD with expertise in characterizing systems optimally to meet customer needs.
        </li>
        <li>
          <strong>Development Skills:</strong> skilled in using Git, Excel, and Power BI for project management.
        </li>
        <li>
          <strong>Problem Solving:</strong> ability to analyze complex problems and develop effective solutions.
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
