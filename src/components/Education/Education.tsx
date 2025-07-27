import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <div className="container"> {/* Added container class */}
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bharati Vidyapeeth University, Pune, IN</h3>
          <p>Bachelor of Technology (B.Tech) in Computer Science</p>
          <p>Graduated: June 2021</p>
          <ul>
            <li>Developed a scalable recommendation engine, improving personalization by 20% in final-year project.</li>
            <li>Ranked top 5% in Algorithms & Data Structures coursework.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
