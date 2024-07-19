import React from 'react';
import styles from './Skills.module.css';

const Skills = () => (
  <section className={styles.skills}>
    <div className={styles.container}>
      <h2>Skills</h2>
      <ul className={styles.skillList}>
        <li>
          <strong>Programming Languages:</strong> I speak the languages of the digital world fluently – C, C#, Java, JavaScript, SQL, Python, and even Assembly. Each project is a new adventure in these languages!
        </li>
        <li>
          <strong>Web Development:</strong> Crafting beautiful, responsive websites with HTML, CSS, and React. I bring server-side magic with Node.js to create seamless user experiences.
        </li>
        <li>
          <strong>Database Management:</strong> Whether it’s MongoDB or SQL, I know how to store, manage, and retrieve data efficiently to power robust applications.
        </li>
        <li>
          <strong>Artificial Intelligence & Machine Learning:</strong> From implementing smart algorithms to building intuitive AI projects, I’m passionate about pushing the boundaries of what machines can do.
        </li>
        <li>
          <strong>Graphics Programming:</strong> Using OpenGL, I transform code into stunning visual experiences, developing interactive and graphical applications that are both functional and beautiful.
        </li>
        <li>
          <strong>Software Development:</strong> Full-stack applications are my playground. With expertise in project management using Git, Excel, and Power BI, I ensure each project is a success from start to finish.
        </li>
        <li>
          <strong>Problem Solving:</strong> I thrive on challenges. Analyzing complex problems and developing effective solutions is what keeps me going.
        </li>
        <li>
          <strong>Soft Skills:</strong> Not just a techie, but a team player with excellent communication skills, attention to detail, and the ability to prioritize tasks effectively.
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
