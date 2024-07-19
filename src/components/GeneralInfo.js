import React from 'react';
import styles from './GeneralInfo.module.css';

const GeneralInfo = () => (
  <section className={styles.general}>
    <div className={styles.container}>
      <h2>Education</h2>
      <div className={styles.section}>
        <h3>Ort Braude – Braude Academic College of Engineering</h3>
        <p>2020-2024: BSc in Software Engineering – Currently in my fourth year, and I'm excited to graduate in March 2025. My journey here has been a mix of rigorous learning and hands-on projects that have honed my skills and passion for technology.</p>
        <h3>High School Education - Ort Motzkin High School</h3>
        <p>2013-2015: Achieved full matriculation in Computer Science and Physics. I completed 10 study units in Computer Science and 5 study units in Physics, which laid a solid foundation for my engineering studies.</p>
        <p>During high school, I provided assistance to struggling students and achieved notable leadership milestones.</p>
      </div>

      <h2>Courses</h2>
      <div className={styles.section}>
        <h3>Capital Market Introduction Course</h3>
        <p>Meitav Dash | 2020</p>
        <p>This course gave me a solid understanding of the capital markets, enhancing my analytical skills and financial acumen.</p>
        <h3>Barista Course</h3>
        <p>Biga | 2017</p>
        <p>I learned the art of coffee making, which taught me patience, precision, and the importance of delivering quality – skills I carry into my tech projects.</p>
      </div>

      <h2>Work Experience</h2>
      <div className={styles.section}>
        <h3>Ten Gas Station</h3>
        <p>2019 - 2020</p>
        <p>Provided top-notch customer service, handled transactions efficiently, and maintained a clean and safe environment. This role taught me the value of responsibility and customer satisfaction.</p>
        <h3>Greg, Landwer, Biga Barista -{'>'} Bar Manager</h3>
        <p>2017 - 2018</p>
        <p>Started as a Barista and quickly rose to Bar Manager. I managed staff, ensured high-quality customer service, and maintained inventory and supplies. This experience strengthened my leadership and organizational skills.</p>
        <h3>Nir Ezion Food Company</h3>
        <p>2012 - 2014</p>
        <p>Worked in various capacities including production and quality control, which taught me the importance of attention to detail and maintaining high standards.</p>
        <h3>Coca Cola</h3>
        <p>2012 - 2014</p>
        <p>Handled logistics and supply chain management, ensuring timely delivery of products. This role enhanced my problem-solving skills and ability to work under pressure.</p>
      </div>
      
      <h2>Military Service</h2>
      <div className={styles.section}>
        <h3>Combat & Commanded Camp Security</h3>
        <p>2015 - 2018</p>
        <p>Served as a combat soldier for a year and a half, followed by a role as a Command Center Commander. I completed the Intelligence Commanders Course and held a Security Clearance Level 2 within the Intelligence Community.</p>
        <p>As a commander, I oversaw camp security, managed facility guards, created duty rosters, and controlled command center systems. This experience instilled in me a strong sense of duty, leadership, and strategic thinking.</p>
      </div>
    </div>
  </section>
);

export default GeneralInfo;
