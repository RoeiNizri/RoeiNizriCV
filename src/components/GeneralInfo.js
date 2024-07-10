import React from 'react';
import styles from './GeneralInfo.module.css';

const GeneralInfo = () => (
  <section className={styles.general}>
    <div className={styles.container}>
      <h2>Work Experience</h2>
      <div className={styles.section}>
        <h3>Manager at “Cofix”</h3>
        <p>2018-2020</p>
        <p>Responsible for day-to-day missions,
             staff members, 
             and connections with various suppliers.</p>
        <h3>Shift Manager at “Superpharm”</h3>
        <p>2022-present</p>
      </div>
      
      <h2>Military</h2>
      <div className={styles.section}>
        <h3>Rifleman 07 / Combat Medic</h3>
        <p>Israeli Combat Engineering Corps</p>
        <p>Combined combat engineering with high infantry skills. Experienced working under pressure and tight schedule restraints.</p>
      </div>
      
      <h2>Education</h2>
      <div className={styles.section}>
        <h3>Braude College of Engineering</h3>
        <p>2020 - present</p>
        <h3>High School: Ort Kiryat Bialik</h3>
        <p>2012-2014</p>
      </div>
    </div>
  </section>
);

export default GeneralInfo;
