import React from 'react';
import './Contact.css';
// You might need to install react-icons: npm install react-icons
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container"> {/* Added container class */}
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the following channels:</p>
        <p>Email: <a href="mailto:himanshudwivedi11111@gmail.com">himanshudwivedi11111@gmail.com</a></p>
        <p>Phone: +91-7021805724</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/himanshu-dwivedi-625249190/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/himanshudwivedi1224" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          {/* Assuming you want to add a general email icon as well */}
          <a href="mailto:himanshudwivedi11111@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
