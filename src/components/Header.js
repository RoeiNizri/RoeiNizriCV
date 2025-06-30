import React from 'react'; // Import React library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'; // Import Bitcoin icon from FontAwesome
import styles from './Header.module.css'; // Import CSS module for styling
import plasbitLogo from '../Plasbit.webp';

/**
 * Header Component
 * This component renders the header section of the website, including the title, subtitle,
 * and a detailed description of the user. It provides an introduction to the user's
 * background, skills, and interests.
 */
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <h1 className={styles.title}>Roei Nizri</h1>
        <h2 className={styles.subtitle}>Full Stack Developer</h2>

        <p className={styles.description}>
          Hey there! I&apos;m Roei, a passionate <span className={styles.highlighted}>B.Sc Software Engineer</span> who loves diving into code like a kid into a candy store. I have hands-on experience in crafting <span className={styles.highlighted}>full-stack applications</span> from responsive frontends to efficient backend APIs using a whole toolbox of other goodies I’ve picked up along the way and occasionally had to debug at 2AM.<br />
          <br />
          I’m deeply curious about <span className={styles.highlighted}>AI</span> and enjoy developing clever algorithms that make machines think (almost) like humans. I also enjoy exploring the world of <span className={styles.highlighted}>blockchain</span>, building smart contracts, decentralized applications, and the infrastructure behind secure systems.<br />
          <br />
          I’ve built eye-popping <span className={styles.highlighted}>OpenGL</span> graphics and even some borderline magical <span className={styles.highlighted}>RPA automations</span> using <span className={styles.highlighted}>UiPath</span> (yes, I&apos;ve trained bots to do my boring tasks while I sip coffee and look important). I&apos;m always up for a coding challenge.
        </p>

        <p className={styles.description}>
          I&apos;m a tech enthusiast with a knack for multiple programming languages and technologies. My areas of interest
          span across <span className={styles.highlighted}>medical solutions</span>, <span className={styles.highlighted}>financial solutions</span>, <span className={styles.highlighted}>artificial intelligence</span>, and <span className={styles.highlighted}>blockchain</span> – yes, I&apos;m a bit of
          a blockchain expert too! Whether it&apos;s building a life-saving app, optimizing financial transactions, creating
          smart AI systems, or exploring the future of decentralized tech, I&apos;m your go-to developer.
        </p>


        <p className={styles.description}>
          Currently, I&apos;m working at<a href="https://plasbit.com" target="_blank" rel="noopener noreferrer" className={styles.highlighted}> PlasBit<img src={plasbitLogo} alt="PlasBit Logo" className={styles.logoc} /> </a>
          a leading cryptocurrency exchange platform that simplifies the trading experience by enabling users to buy, sell, transfer, and securely store both Bitcoin and altcoins.
          PlasBit is committed to providing a safe and trustworthy crypto exchange platform, holding 100% of customer assets in cold storage, ensuring funds are responsibly backed 1:1 and accessible at customers&apos; convenience.
        </p>

        <p className={styles.description}>
          Beyond coding, I bring a wealth of experience from customer service and management roles. I know how to <span className={styles.highlighted}>lead teams</span>,
          keep projects on track, and deliver <span className={styles.highlighted}>results under pressure</span>. When I&apos;m not coding, you might find me
          brainstorming the next big idea or enjoying some quality downtime. By the way, when I&apos;m not buried in code, I&apos;m either hitting the gym, getting lost in a good book, playing the piano, or just enjoying life&apos;s simple pleasures. Curious to know more? <span className={styles.highlighted}>Keep browsing!</span>
        </p>

        <div className={styles.headerBox}>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>Ready to see more?</h1>
            <p className={styles.subtitle}>Why stop here? Explore the site, there are more surprises than finding Satoshi Nakamoto!</p>
            <a href="https://bts.dr-brokers.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.highlight}>
                Discover Now <FontAwesomeIcon icon={faBitcoin} className={styles.icon} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;