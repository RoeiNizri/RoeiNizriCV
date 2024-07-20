import React from 'react'; // Import React library
import styles from './Contact.module.css'; // Import CSS module for styling
import profilePicture from '../RoeiNizriImg.jpg'; // Import profile picture, adjust path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import specific icon from FontAwesome
import downloadIcon from '../logo512.png'; // Import the image for the download icon

// Google Drive link to the resume file
const googleDriveLink = "https://drive.google.com/file/d/15oYohbsLVEd8UBZfw6Dh61pzELFbPARI/view?usp=drive_link";

/**
 * Contact Component
 * This component renders the contact section with personal information,
 * profile picture, links to LinkedIn, email, WhatsApp, and phone number,
 * along with a section to download the resume.
 */
const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.container}>
      <h2>Let's Get in Touch</h2>
      {/* Profile Picture */}
      <img src={profilePicture} alt="Profile" className={styles['profile-picture']} />
      
      {/* Contact Information */}
      <div className={styles.contactInfo}>
        <p>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/RoeiNizri" target="_blank" rel="noopener noreferrer">Roei Nizri</a>
        </p>
        <p>
          <strong>Email:</strong> 
          <a href="mailto:roeinizri1@gmail.com">roeinizri1@gmail.com</a>
        </p>
        <p>
          <strong>WhatsApp:</strong> 
          <a href="https://wa.me/972546945333" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ marginRight: '8px', color: '#25D366' }} />
            Send me a message
          </a>
        </p>
        <p>
          <strong>Phone:</strong> 
          <a href="tel:054-694-5333">054-694-5333</a>
        </p>
      </div>
      
      {/* Resume Download Section */}
      <div className={styles.resumeSection}>
        <h3>Download My Resume</h3>
        <p>
          <a href={googleDriveLink} download="RoeiNizri_Resume.pdf">
            <img src={downloadIcon} alt="Download Resume" className={styles.downloadIcon} />
          </a>
        </p>
      </div>
    </div>
  </section>
);

// Export the Contact component as the default export
export default Contact;
