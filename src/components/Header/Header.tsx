import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import './Header.css';
import { FaSun, FaMoon } from 'react-icons/fa6'; // Import icons

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const location = useLocation();
  const isBlogPostPage = location.pathname.startsWith('/MyPortfolio/blog/');

  return (
    <header className="header">
      <div className="container">
        <div>
          <h1>Himanshu Dwivedi</h1>
          <p>Full Stack Developer</p>
        </div>
        <nav>
          {isBlogPostPage ? (
            <>
              <Link to="/MyPortfolio">About</Link>
              <Link to="/MyPortfolio">Experience</Link>
              <Link to="/MyPortfolio">Projects</Link>
              <Link to="/MyPortfolio">Blog</Link>
              <Link to="/MyPortfolio">Education</Link>
              <Link to="/MyPortfolio">Skills</Link>
              <Link to="/MyPortfolio">Contact</Link>
            </>
          ) : (
            <>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#blog">Blog</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </>
          )}
          <button onClick={toggleTheme} className="theme-toggle-button">
            {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
