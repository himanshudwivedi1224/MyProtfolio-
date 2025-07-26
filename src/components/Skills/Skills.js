import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'C#', 'Data Structures', 'Angular', 'React', 'Algorithms',
    'Critical Thinking', 'Azure', 'JavaScript', 'TypeScript',
    '.NET Core', 'jQuery', 'SQL Server', 'System Design',
    'Git', 'JSX', 'AJAX', 'Postman', 'Machine Learning', 'Deep Learning', 'NLP', 'Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container"> {/* Added container class */}
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
