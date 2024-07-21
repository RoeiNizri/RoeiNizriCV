import React from 'react'; // Import React library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'; // Import Bitcoin icon from FontAwesome
import styles from './Header.module.css'; // Import CSS module for styling

/**
 * Header Component
 * This component renders the header section of the website, including the title, subtitle,
 * and a detailed description of the user. It provides an introduction to the user's
 * background, skills, and interests.
 */
function Header() {
  return (
    <header className={styles.header}>
      {/* Overlay for visual effect */}
      <div className={styles.overlay} />

      {/* Container for the header content */}
      <div className={styles['header-container']}>
        {/* Title */}
        <h1 className={styles.title}>Roei Nizri</h1>

        {/* Subtitle */}
        <h2 className={styles.subtitle}>Full Stack Developer</h2>

        {/* Description Paragraphs */}
        <p className={styles.description}>
          Hey there! I&apos;m Roei, a passionate B.Sc Software Engineering student who loves diving into code
          like a kid into a candy store. With hands-on experience in crafting everything from eye-popping OpenGL
          graphics to robust full-stack applications and clever AI algorithms, I&apos;m always up for a coding challenge.
        </p>
        <p className={styles.description}>
          I&apos;m a tech enthusiast with a knack for multiple programming languages and technologies. My areas of interest
          span across medical solutions, financial solutions, artificial intelligence, and blockchain – yes, I&apos;m a bit of
          a blockchain expert too! Whether it&apos;s building a life-saving app, optimizing financial transactions, creating
          smart AI systems, or exploring the future of decentralized tech, I&apos;m your go-to developer.
        </p>
        <p className={styles.description}>
          Beyond coding, I bring a wealth of experience from customer service and management roles. I know how to lead
          teams, keep projects on track, and deliver results under pressure. When I&apos;m not coding, you might find me
          brainstorming the next big idea or enjoying some quality downtime. By the way, when I&apos;m not buried in code, I&apos;m either hitting the gym, getting lost in a good book, playing the piano, or just enjoying life&apos;s simple pleasures. Curious to know more? Keep browsing!
          Ready to see more? 
          <span className={styles.highlight}>
            Why stop here? Explore the site, there are more surprises than finding Satoshi Nakamoto!
            <FontAwesomeIcon icon={faBitcoin} className={styles.icon} />
          </span>
        </p>
      </div>
    </header>
  );
}

// Export the Header component as the default export
export default Header;
