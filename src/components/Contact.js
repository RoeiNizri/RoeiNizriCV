import React from 'react';
import styles from './Contact.module.css';
import profilePicture from '../ran_photo.jpeg'; // Adjusted path to src folder

const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.container}>
      <h2>Contact</h2>
      <img src={profilePicture} alt="Profile" className={styles['profile-picture']} />
      <p>Email: <a href="mailto:ranpolac@gmail.com">ranpolac@gmail.com</a></p>
      <p>Phone: <a href="tel:054-5217456">054-5217456</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ran-polac" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/ran-polac</a></p>
      <p>GitHub: <a href="https://github.com/Ranash12P" target="_blank" rel="noopener noreferrer">https://github.com/Ranash12P</a></p>
    </div>
  </section>
);

export default Contact;
