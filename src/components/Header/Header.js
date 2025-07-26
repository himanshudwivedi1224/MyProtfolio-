import React from 'react';
import './Header.css';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons

const Header = ({ toggleTheme, currentTheme }) => {
  return (
    <header className="header">
      <div className="container">
        <div>
          <h1>Himanshu Dwivedi</h1>
          <p>Full Stack Developer</p>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a> {/* Added Blog link */}
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} className="theme-toggle-button">
            {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
