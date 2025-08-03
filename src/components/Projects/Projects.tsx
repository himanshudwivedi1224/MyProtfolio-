import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2> {/* Changed heading to "Projects" */}
        <div className="project-list">
          {/* AI Usecase Project */}
          <div className="project">
            <h3>AI-Powered Document Summarizer</h3>
            <h4>AI/ML Project</h4>
            <ul>
              <li>Developed using React for a dynamic and responsive user interface.</li>
              <li>Features an AI/ML model for efficient text summarization.</li>
              <li>Allows users to input text and receive concise summaries.</li>
            </ul>
            <div className="project-links">
              <a className="project-button" href="https://himanshudwivedi1224.github.io/AI_Summarizer_React/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/himanshudwivedi1224/AI_Summarizer_React" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
