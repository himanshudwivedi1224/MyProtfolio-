import React from 'react';
import './About.css';
import profileImage from '../../assets/WhatsApp Image 2025-04-03 at 09.52.52_81dd09bf.jpg'; // Corrected import path after moving assets

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container about-content">
        <img src={profileImage} alt="Himanshu Dwivedi" className="about-image" />
        <h2>About Me</h2>
        <p>
          I am a passionate Full-Stack Developer with expertise in C#, .NET Core, Angular, React, and Azure. I specialize in designing, developing, and deploying scalable software solutions, with a focus on migrating monolithic architectures to microservices and optimizing performance.
        </p>
        <p>
          My experience includes leading projects, enhancing data processing with AI, and building fault-tolerant systems. I am committed to delivering high-quality products and collaborating effectively with cross-functional teams to achieve business objectives.
        </p>
      </div>
    </section>
  );
};

export default About;
