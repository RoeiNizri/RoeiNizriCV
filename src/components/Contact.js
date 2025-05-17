import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';
import profilePicture from '../RoeiNizriImg.jpg'; // Adjust the path as needed
import downloadIcon from '../logo512.png'; // Import the new image
import RoeiNizriResume from '../Roei-Nizri-CV.pdf';


// const googleDriveLink = "https://drive.google.com/file/d/1SvNdWAabkUPODBYNBJIHJb0KOmNmCKsy/view";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Let&apos;s Get in Touch</h2>
        <img src={profilePicture} alt="Profile" className={styles['profile-picture']} />
        <div className={styles.contactInfo}>
          <ContactItem
            href="https://www.linkedin.com/in/RoeiNizri"
            icon={faLinkedin}
            color="#0073b1"
            text="Roei Nizri"
          />
          <ContactItem
            href="mailto:roeinizri1@gmail.com"
            icon={faEnvelope}
            color="#D44638"
            text="roeinizri1@gmail.com"
          />
          <ContactItem
            href="https://wa.me/972546945333"
            icon={faWhatsapp}
            color="#25D366"
            text="Send me a message"
          />
          <ContactItem
            href="tel:054-694-5333"
            icon={faPhone}
            color="#000"
            text="054-694-5333"
          />
        </div>
        <div className={styles.resumeContainer}>
          <div className={styles.resumeSection}>
            <h3>Download My Resume</h3>
            {/* Optional: replace with Google Drive if needed href={googleDriveLink} download="RoeiNizri_Resume.pdf */}
            <p>
              <a href={RoeiNizriResume} target="_blank" rel="noopener noreferrer">
                <img src={downloadIcon} alt="Download Resume" className={styles.downloadIcon} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ href, icon, color, text }) {
  return (
    <p>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} size="lg" style={{ marginRight: '2px', color }} />
        {text}
      </a>
    </p>
  );
}

ContactItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Contact;
