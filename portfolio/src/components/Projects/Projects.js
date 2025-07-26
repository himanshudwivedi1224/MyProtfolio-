import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Professional Experience</h2>
      <div className="project-list">
        <div className="project">
          <h3>Ernst & Young (Feb 2024 — Present)</h3>
          <h4>Full-Stack Developer</h4>
          <p>Working with the payment team for the integration of loan disbursement of an NBFC company.</p>
          <ul>
            <li>Led collaboration between engineering and product teams, reducing feature delivery time by 15% and increasing user engagement by 30%.</li>
            <li>Commanded the charge on 5 projects, delivering ahead of schedule, resulting in a 25% bug reduction.</li>
            <li>Harnessed AI to boost data processing efficiency by 40%, leading to significant annual cost savings.</li>
            <li>Led the migration of monolithic architectures to microservices-based cloud solutions, enhancing reliability and reducing downtime by 30%.</li>
            <li>Deployed Large Language Models (LLM) algorithms, amplifying accuracy by 95% and efficiency by 20%.</li>
            <li>Designed and optimized microservices architecture, reducing API response time by 40% and scaling to 1M+ requests per day.</li>
            <li>Engineered fault-tolerant distributed caching mechanisms with Redis and Kafka, reducing API response times by 35%.</li>
            <li>Built and optimized real-time data streaming services handling millions of events per second.</li>
            <li>Experience in building microservices with .NET Core and deploying on Kubernetes.</li>
          </ul>
        </div>
        <div className="project">
          <h3>LTI Mindtree (Oct 2021 — Jan 2024)</h3>
          <h4>Full Stack Developer</h4>
          <p>Proficient in C#, Angular, Git, Azure, and SQL Server, contributing to a 30% reduction in project development time through streamlined technology utilization.</p>
          <ul>
            <li>Implemented automated testing frameworks, reducing testing time by 20% and improving test coverage.</li>
            <li>Enhanced user efficiency with the creation of a Drag & Drop API, resulting in a 30% increase in productivity.</li>
            <li>Increased client satisfaction by 11.99% through personalized service and technical proficiency.</li>
            <li>Conducted performance tuning exercises, optimizing database queries and improving system responsiveness by 50%, resulting in a smoother user experience and increased customer satisfaction.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
