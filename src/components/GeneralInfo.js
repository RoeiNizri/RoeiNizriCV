import React from 'react';
import styles from './GeneralInfo.module.css';

const GeneralInfo = () => (
  <section className={styles.general}>
    <div className={styles.container}>
      <h2>Education</h2>
      <div className={styles.section}>
        <h3>Ort Braude – Braude Academic College of Engineering</h3>
        <p>2020-2024: BSc Software Engineering – Fourth-year student, expected graduation: March 2025</p>
        <h3>High School Education - Full Matriculation in Computer Science and Physics, Ort Motzkin High School</h3>
        <p>2013-2015: 10 study units in Computer Science,</p> 
        <p>5 study units in Physics</p> 
        <p>Provided assistance to struggling students </p>
        <p>Notable achievements in leadership</p>
      </div>

      <h2>Courses</h2>
      <div className={styles.section}>
        <h3>Capital Market Introduction Course</h3>
        <p>Meitav Dash | 2020</p>
        <h3>Barista Course</h3>
        <p>Biga | 2017</p>
      </div>

      <h2>Work Experience</h2>
      <div className={styles.section}>
        <h3>Ten Gas Station</h3>
        <p>2019 - 2020</p>
        <p>Provided excellent customer service, handled transactions, and maintained a clean and safe environment.</p>
        <h3>Greg, Landwer, Biga Barista -{'>'} Bar Manager</h3>
        <p>2017 - 2018</p>
        <p>Managed staff, ensured high-quality customer service, and maintained inventory and supplies.</p>
        <h3>Nir Ezion Food Company</h3>
        <p>2012 - 2014</p>
        <p>Worked in various capacities including production and quality control.</p>
        <h3>Coca Cola</h3>
        <p>2012 - 2014</p>
        <p>Handled logistics and supply chain management, ensuring timely delivery of products.</p>
      </div>
      
      <h2>Military</h2>
      <div className={styles.section}>
        <h3>Combat & Commanded camp security </h3>
        <p>2015 - 2018</p>
        <p>Served for a year and a half as a combat soldier and subsequently as a Command Center Commander.</p>
        <p>Completed the Intelligence Commanders Course</p>
        <p>Held a Security Clearance Level 2 within the Intelligence Community</p>
        <p>Commanded camp security, including oversight of facility guards, managing duty rosters, and controlling command center systems</p>
      </div>
    </div>
  </section>
);

export default GeneralInfo;
