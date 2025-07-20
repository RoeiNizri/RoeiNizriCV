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
          Beyond coding, I bring a wealth of experience from customer service and management roles. I know how to <span className={styles.highlighted}>lead teams</span>,
          keep projects on track, and deliver <span className={styles.highlighted}>results under pressure</span>. When I&apos;m not coding, you might find me
          brainstorming the next big idea or enjoying some quality downtime. By the way, when I&apos;m not buried in code, I&apos;m either hitting the gym, getting lost in a good book, playing the piano, or just enjoying life&apos;s simple pleasures.
        </p>

        <p className={styles.description}>
          Currently, I&apos;m working at<a href="https://plasbit.com" target="_blank" rel="noopener noreferrer" className={styles.highlighted}> PlasBit<img src={plasbitLogo} alt="PlasBit Logo" className={styles.logoc} /> </a>
          a leading cryptocurrency exchange platform that simplifies the trading experience by enabling users to buy, sell, transfer, and securely store both Bitcoin and altcoins.
          PlasBit is committed to providing a safe and trustworthy crypto exchange platform, holding 100% of customer assets in cold storage, ensuring funds are responsibly backed 1:1 and accessible at customers&apos; convenience.
        </p>


        <details className={styles.detailsSection}>
          <summary className={styles.summaryTitle}>
            What I&apos;ve Built at PlasBit 💼
          </summary>
          <ul className={styles.projectList}>
            <li>
              <strong>Sumsub API Integration</strong> – Implemented advanced KYC/AML verification flows using Sumsub SDK and REST API, including applicant creation, review cycles, IP/country-based risk scoring, and re-verification logic.
            </li>
            <li>
             <strong>Travel Rule Compliance</strong> – Built and integrated a fully compliant Travel Rule flow (per FATF guidelines), including transaction initiation, beneficiary verification, transaction status updates, and wallet ownership confirmation using Sumsub&apos;s Travel Rule endpoints.
            </li>
            <li>
              <strong>Risk Assessment System</strong> – Developed a modular risk scoring engine with dynamic configurations based on criteria like country of residence, IP origin, transaction patterns, and adverse media screening — visualized in an intuitive admin panel.
            </li>
            <li>
              <strong>Transak API Integration</strong> – Integrated Transak&apos;s fiat-to-crypto on-ramp service, enabling seamless purchases directly from the platform with localized KYC and transaction tracking.
            </li>
            <li>
              <strong>Admin Panel Configuration Tools</strong> – Engineered flexible, React-based configuration interfaces for managing KYC levels, provider flows, verification thresholds, and transaction rules — all backed by secure Meteor methods.
            </li>
            <li>
              <strong>Crypto Transaction Monitoring</strong> – Built real-time transaction dashboards with filtering, sorting, and export capabilities, supporting BTC, ETH, XMR, and altcoins with full explorer integration and risk tagging.
            </li>
            <li>
              <strong>Dispute & Enhanced Due Diligence Flows</strong> – Designed and implemented multi-step card dispute forms and enhanced verification interfaces, fully integrated with backend workflows and styled to match compliance standards.
            </li>
            <li>
              <strong>Automated Review Cycles</strong> – Scheduled and triggered automatic KYC re-verifications based on user risk levels and expiration timelines, using Sumsub&apos;s <code>resetApplicant</code> and dynamic questionnaire flow switching.
            </li>
            <li>
             <strong>WebSDKs and Public Configs</strong> – Developed reusable frontend SDK components and dynamic configuration management logic (e.g., public KYC flow IDs, enums, labels) for seamless deployment and maintainability.
            </li>
            <li>
              <strong>2FA-Enabled Admin Actions</strong> – Secured sensitive admin-side updates (e.g., email changes, KYC overrides) with modal-based two-factor authentication and role-based access controls.
            </li>
            <li>
              <strong>i18n + UI/UX Enhancements</strong> – Refactored multiple components to support localization, responsive layouts, dynamic risk visuals, and rich FAQ/help modals with styled markdown and JSX formatting.
            </li>
          </ul>
        </details>

        <div className={styles.headerBox}>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>Ready to know more?</h1>
            <p className={styles.subtitle}>There are more surprises than finding Satoshi Nakamoto!</p>
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