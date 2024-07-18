import React from 'react';
import styles from './Skills.module.css';

const Skills = () => (
  <section className={styles.skills}>
    <div className={styles.container}>
      <h2>Skills</h2>
      <ul className={styles.skillList}>
        <li>
          <strong>Programming Languages:</strong> C, C#, Java, JavaScript, SQL, Python, Assembly.
        </li>
        <li>
          <strong>Web Development:</strong> HTML, CSS, React, Node.js.
        </li>
        <li>
          <strong>Database Management:</strong> MongoDB, SQL.
        </li>
        <li>
          <strong>Artificial Intelligence & Machine Learning:</strong> Implemented algorithms and projects involving AI and ML.
        </li>
        <li>
          <strong>Graphics Programming:</strong> OpenGL, developed interactive and graphical applications.
        </li>
        <li>
          <strong>Software Development:</strong> Expertise in developing full-stack applications, managing projects using Git, Excel, and Power BI.
        </li>
        <li>
          <strong>Problem Solving:</strong> Ability to analyze complex problems and develop effective solutions.
        </li>
        <li>
          <strong>Soft Skills:</strong> Problem-solving, Communication, Teamwork, Attention to detail, Prioritization.
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
