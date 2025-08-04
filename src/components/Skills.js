import React from 'react'; // Import React library
import styles from './Skills.module.css'; // Import CSS module for styling

/**
 * Skills Component
 * This component renders a section listing various skills, grouped into categories such as
 * programming languages, web development, database management, AI & ML, graphics programming,
 * software development, problem solving, soft skills, blockchain development, and automation.
 */
function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2>Skills</h2>
        <ul className={styles.skillList}>
          <li>
            <strong>Web Development:</strong>
            <details>
              <summary><strong>Frontend:</strong> Tools & frameworks for building beautiful, responsive UIs</summary>
              <p>
                Building modern, responsive UIs using <strong>HTML, CSS, Tailwind CSS, JavaScript, TypeScript</strong> and leading frameworks like <strong>React, Vue.js, Angular,</strong> and <strong>Next.js</strong>.
              </p>
            </details>
            <details>
              <summary><strong>Backend:</strong> Scalable servers, APIs, databases, and authentication</summary>
              <p>
                Developing scalable backends using <strong>Node.js, Express.js, NestJS</strong>, and real-time apps with <strong>Meteor</strong>. I build efficient APIs with <strong>REST</strong> and <strong>GraphQL</strong>, handle data with <strong>MongoDB, PostgreSQL,</strong> and <strong>MySQL</strong>, and enable real-time communication via <strong>WebSockets</strong> and <strong>Socket.io</strong>. I implement secure auth (<strong>JWT, OAuth</strong>), write tests using <strong>Jest</strong> and <strong>Mocha</strong>, and deploy via <strong>Docker, CI/CD</strong>, and cloud platforms like <strong>Vercel, Netlify</strong>, and <strong>AWS</strong>. I also build <strong>WebSDKs</strong> to integrate backend services with client apps.
              </p>
            </details>
          </li>
          <li>
            <strong>Artificial Intelligence & Machine Learning:</strong> From implementing smart algorithms to building intuitive <strong>AI</strong> projects, I’m passionate about pushing the boundaries of what machines can do.
          </li>
          <li>
            <strong>Blockchain Development:</strong> I develop secure and scalable <strong>smart contracts on Ethereum using Solidity</strong>. With hands-on experience in deploying DApps, managing gas optimizations, and working with <strong>web3.js</strong>, I bring decentralized solutions to life.
          </li>
          <li>
            <strong>Database Management:</strong> Whether it’s <strong>MongoDB</strong> or <strong>SQL</strong>, I know how to store, manage, and retrieve data efficiently to power robust applications.
          </li>
          <li>
            <strong>Programming Languages:</strong> I speak the languages of the digital world fluently - <strong>C, C#, Java, JavaScript, SQL, Python,</strong> and even <strong>Assembly</strong>. Each project is a new adventure in these languages!
          </li>
          <li>
            <strong>Software Development:</strong> Full-stack applications are my playground. With expertise in project management using <strong>Git, Jira</strong> and <strong>Monday</strong>, I ensure each project is a success from start to finish.
          </li>
          <li>
            <strong>Problem Solving:</strong> I thrive on challenges. <strong>Analyzing complex problems</strong> and <strong>developing effective solutions</strong> is what keeps me going.
          </li>
          <li>
            <strong>Soft Skills:</strong> Not just a techie, but <strong>a team player</strong> with excellent <strong>communication skills</strong>, <strong>attention to details</strong>, and the ability to <strong>prioritize tasks effectively</strong>.
          </li>
          <li>
            <strong>Graphics Programming:</strong> Using <strong>OpenGL</strong>, I transform code into stunning visual experiences, developing interactive and graphical applications that are both functional and beautiful.
          </li>
          <li>
            <strong>Automation:</strong> I specialize in automating business workflows using <strong>UiPath</strong> and <strong>Make (formerly Integromat)</strong>. From robotic process automation (RPA) to API-based integrations, I streamline processes to improve efficiency and save time.
          </li>
        </ul>
      </div>
    </section>
  );
}

// Export the Skills component as the default export
export default Skills;
