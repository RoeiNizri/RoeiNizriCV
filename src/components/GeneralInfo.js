import styles from './GeneralInfo.module.css'; // Import CSS module for styling
import bachelorImage from '../BachelorDegree.jpg';
import plasbitLogo from '../Plasbit.webp';
/**
 * GeneralInfo Component
 * This component renders general information including education, courses,
 * work experience, and military service. It provides a detailed overview
 * of the user's background and achievements.
 */
function GeneralInfo() {
  return (
    
    <section className={styles.general}>
      <div className={styles.container}>
        {/* Education Section */}
        <h2>Education</h2>
        <div className={styles.section}>
          <h3>Ort Braude – Braude Academic College of Engineering</h3>
          <p>2020-2025: BSc in Software Engineering
            <span className={styles.italic}>My journey here has been a mix of rigorous learning and hands-on projects that have honed my skills and passion for technology.</span></p>
          <div className={styles.resumeSection}>
            <img src={bachelorImage} alt="Bachelor&apos;s Degree" className={styles.bachelorImage} />
          </div>
          <h3>High School Education - Ort Motzkin High School</h3>
          <p>2013-2015: <span className={styles.italic}>Achieved full matriculation in Computer Science and Physics. I completed 10 study units in Computer Science and 5 study units in Physics, which laid a solid foundation for my engineering studies.</span></p>
          <p><span className={styles.italic}>During high school, I provided assistance to struggling students and achieved notable leadership milestones.</span></p>
        </div>

                {/* Work Experience Section */}
        <h2>Work Experience</h2>
        <div className={styles.section}>
          <h3>PlasBit – Full Stack and Blockchain Developer</h3>
          <p>2025</p>
          <p className={styles.italic}>
          My time at PlasBit <img src={plasbitLogo} alt="PlasBit Logo" className={styles.logoc} /> was both professionally fulfilling and personally meaningful.
          I believed in what we were building, and I gave it my all.
          However, I found myself at a difficult turning point when it became clear that certain practices at the ownership level did not align with legal or ethical expectations.
          Staying true to my ethical principles, I made the hard but necessary decision to move on and continue my journey with integrity at the forefront.
        </p>
        
        <details className={styles.detailsSection}>
          <summary className={styles.summaryTitle}>
            What I&apos;ve Built at PlasBit 💼
          </summary>
          <ul className={styles.projectList}>
            <p>
              <strong>Sumsub API Integration</strong> – Implemented advanced KYC/AML verification flows using Sumsub SDK and REST API, including applicant creation, review cycles, IP/country-based risk scoring, and re-verification logic.
            </p>
            <p>
              <strong>Travel Rule Compliance</strong> – Built and integrated a fully compliant Travel Rule flow (per FATF guidelines), including transaction initiation, beneficiary verification, transaction status updates, and wallet ownership confirmation using Sumsub&apos;s Travel Rule endpoints.
            </p>
            <p>
              <strong>Risk Assessment System</strong> – Developed a modular risk scoring engine with dynamic configurations based on criteria like country of residence, IP origin, transaction patterns, and adverse media screening — visualized in an intuitive admin panel.
            </p>
            <p>
              <strong>Transak API Integration</strong> – Integrated Transak&apos;s fiat-to-crypto on-ramp service, enabling seamless purchases directly from the platform with localized KYC and transaction tracking.
            </p>
            <p>
              <strong>Admin Panel Configuration Tools</strong> – Engineered flexible, React-based configuration interfaces for managing KYC levels, provider flows, verification thresholds, and transaction rules — all backed by secure Meteor methods.
            </p>
            <p>
              <strong>Crypto Transaction Monitoring</strong> – Built real-time transaction dashboards with filtering, sorting, and export capabilities, supporting BTC, ETH, XMR, and altcoins with full explorer integration and risk tagging.
            </p>
            <p>
              <strong>Dispute & Enhanced Due Diligence Flows</strong> – Designed and implemented multi-step card dispute forms and enhanced verification interfaces, fully integrated with backend workflows and styled to match compliance standards.
            </p>
            <p>
              <strong>Automated Review Cycles</strong> – Scheduled and triggered automatic KYC re-verifications based on user risk levels and expiration timelines, using Sumsub&apos;s <code>resetApplicant</code> and dynamic questionnaire flow switching.
            </p>
            <p>
              <strong>WebSDKs and Public Configs</strong> – Developed reusable frontend SDK components and dynamic configuration management logic (e.g., public KYC flow IDs, enums, labels) for seamless deployment and maintainability.
            </p>
            <p>
              <strong>2FA-Enabled Admin Actions</strong> – Secured sensitive admin-side updates (e.g., email changes, KYC overrides) with modal-based two-factor authentication and role-based access controls.
            </p>
            <p>
              <strong>i18n + UI/UX Enhancements</strong> – Refactored multiple components to support localization, responsive layouts, dynamic risk visuals, and rich FAQ/help modals with styled markdown and JSX formatting.
            </p>
          </ul>
        </details>

          <h3>Ten Gas Station</h3>
          <p>2019 - 2020</p>
          <p><span className={styles.italic}>Provided top-notch customer service, handled transactions efficiently, and maintained a clean and safe environment. This role taught me the value of responsibility and customer satisfaction.</span></p>

          <h3>Greg, Landwer, Biga Barista -&gt; Bar Manager</h3>
          <p>2017 - 2018</p>
          <p><span className={styles.italic}>Started as a Barista and quickly rose to Bar Manager. I managed staff, ensured high-quality customer service, and maintained inventory and supplies. This experience strengthened my leadership and organizational skills.</span></p>

          <h3>Nir Ezion Food Company</h3>
          <p>2012 - 2014</p>
          <p><span className={styles.italic}>Worked in various capacities including production and quality control, which taught me the importance of attention to detail and maintaining high standards.</span></p>

          <h3>Coca Cola</h3>
          <p>2012 - 2014</p>
          <p><span className={styles.italic}>Handled logistics and supply chain management, ensuring timely delivery of products. This role enhanced my problem-solving skills and ability to work under pressure.</span></p>
        </div>

        {/* Courses Section */}
        <h2>Courses</h2>
        <div className={styles.section}>
          <h3>Capital Market Introduction Course</h3>
          <p>Meitav Dash | 2020</p>
          <p><span className={styles.italic}>This course gave me a solid understanding of the capital markets, enhancing my analytical skills and financial acumen.</span></p>
          <h3>Barista Course</h3>
          <p>Biga | 2017</p>
          <p><span className={styles.italic}>I learned the art of coffee making, which taught me patience, precision, and the importance of delivering quality – skills I carry into my tech projects.</span></p>
        </div>

        {/* Military Service Section */}
        <h2>Military Service</h2>
        <div className={styles.section}>
          <h3>Combat & Commanded Camp Security</h3>
          <p>2015 - 2018</p>
          <p><span className={styles.italic}>Served as a combat soldier for a year and a half, followed by a role as a Command Center Commander. I completed the Intelligence Commanders Course and held a Security Clearance Level 2 within the Intelligence Community.</span></p>
          <p><span className={styles.italic}>As a commander, I oversaw camp security, managed facility guards, created duty rosters, and controlled command center systems. This experience instilled in me a strong sense of duty, leadership, and strategic thinking.</span></p>
        </div>
      </div>
    </section>
  );
}

// Export the GeneralInfo component as the default export
export default GeneralInfo;
