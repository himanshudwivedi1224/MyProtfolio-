import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2> {/* Changed heading to "Projects" */}
        <div className="project-list">
          {/* AI Usecase Project */}
          <div className="project">
            <h3>AI-Powered Document Summarizer</h3>
            <h4>AI/ML Project</h4>
            <p>Developed a web application that leverages advanced NLP models (e.g., BERT, GPT-3) to summarize long documents efficiently. This project demonstrates expertise in machine learning, deep learning, and full-stack development.</p>
            <ul>
              <li>Implemented a Flask backend for model inference and API endpoints.</li>
              <li>Designed a React frontend for intuitive document upload and summary display.</li>
              <li>Utilized Hugging Face Transformers for state-of-the-art summarization.</li>
              <li>Deployed on a cloud platform (e.g., Azure/AWS) with Docker containers.</li>
            </ul>
            <div className="project-links">
              <button className="project-button" disabled>Live Demo (Coming Soon)</button>
              <a href="https://github.com/himanshudwivedi1224/AI-Powered-Document-Summarizer" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
