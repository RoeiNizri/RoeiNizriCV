import React from 'react';
import styles from './Contact.module.css';
import profilePicture from '../RoeiNizriImg.jpg'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.container}>
      <h2>Let's Get in Touch</h2>
      <img src={profilePicture} alt="Profile" className={styles['profile-picture']} />
      <div className={styles.contactInfo}>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/RoeiNizri" target="_blank" rel="noopener noreferrer">Roei Nizri</a></p>
        <p><strong>Email:</strong> <a href="mailto:roeinizri1@gmail.com">roeinizri1@gmail.com</a></p>
        <p>
          <strong>WhatsApp:</strong> <a href="https://wa.me/0546945333" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ marginRight: '8px', color: '#25D366' }} />
            Send me a message
          </a>
          <p><strong>Phone:</strong> <a href="tel:054-694-5333">054-694-5333</a></p>
        </p>
      </div>
      <div className={styles.resumeSection}>
        <h3>Download My Resume</h3>
        <p>
          <a href="/RoeiNizri_Resume.pdf" download="RoeiNizri_Resume.pdf">Download Resume</a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
