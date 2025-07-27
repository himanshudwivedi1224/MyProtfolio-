import React, { useState, useEffect, FC } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience'; // Import new Experience component
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog'; // Import new Blog component
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
    <div className="App">
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <About />
      <Experience /> {/* Add Experience component */}
      <Projects />
      <Blog /> {/* Add Blog component */}
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
