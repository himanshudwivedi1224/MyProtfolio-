import React, { useState, useEffect, FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost'; // Import the new BlogPost component
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';

const App: FC = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router> {/* Removed basename */}
      <div className="App">
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Routes>
          <Route path="/MyPortfolio" element={
            <> {/* Using React Fragment */}
              <About />
              <Experience />
              <Projects />
              <Blog />
              <Education />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="/MyPortfolio/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
