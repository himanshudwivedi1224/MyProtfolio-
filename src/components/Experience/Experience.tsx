import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-list">
          {/* Professional Experience - Ernst & Young */}
          <div className="experience-item">
            <h3>Ernst & Young (Feb 2024 — Present)</h3>
            <h4>Full-Stack Developer</h4>
            <p>Working with the payment team for the integration of loan disbursement of an NBFC company.</p>
            <ul>
              <li>Led collaboration between engineering and product teams, reducing feature delivery time by 15%.</li>
              <li>Commanded 5 projects, delivering ahead of schedule, resulting in a 25% bug reduction.</li>
              <li>Harnessed AI to boost data processing efficiency by 40%, leading to significant annual cost savings.</li>
              <li>Led migration of monolithic architectures to microservices, enhancing reliability and reducing downtime by 30%.</li>
              <li>Deployed Large Language Models (LLM) algorithms, amplifying accuracy by 95%.</li>
              <li>Designed and optimized microservices architecture, reducing API response time by 40% and scaling to 1M+ requests per day.</li>
            </ul>
          </div>

          {/* Professional Experience - LTI Mindtree */}
          <div className="experience-item">
            <h3>LTI Mindtree (Oct 2021 — Jan 2024)</h3>
            <h4>Full Stack Developer</h4>
            <p>Proficient in C#, Angular, Git, Azure, and SQL Server, contributing to a 30% reduction in project development time.</p>
            <ul>
              <li>Implemented automated testing frameworks, reducing testing time by 20%.</li>
              <li>Enhanced user efficiency with a Drag & Drop API, resulting in a 30% increase in productivity.</li>
              <li>Increased client satisfaction by 11.99% through personalized service.</li>
              <li>Conducted performance tuning, optimizing database queries and improving system responsiveness by 50%.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
