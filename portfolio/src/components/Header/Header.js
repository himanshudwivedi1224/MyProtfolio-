import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Himanshu Dwivedi</h1>
        <p>Full Stack Developer</p>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
