import React from 'react';
import styles from './Contact.module.css';
import profilePicture from '../RoeiNizriImg.jpg'; // Adjusted path to src folder

const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.container}>
      <h2>Let's Get in Touch</h2>
      <img src={profilePicture} alt="Profile" className={styles['profile-picture']} />
      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> <a href="mailto:roeinizri1@gmail.com">roeinizri1@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:054-694-5333">054-694-5333</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/RoeiNizri" target="_blank" rel="noopener noreferrer">Roei Nizri</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/RoeiNizri" target="_blank" rel="noopener noreferrer">RoeiNizri</a></p>
      </div>
    </div>
  </section>
);

export default Contact;
