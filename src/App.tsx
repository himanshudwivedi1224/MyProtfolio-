import React, { useState, useEffect, FC } from 'react';
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button
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
<div className="hero-section">
  <h1 className="text-4xl font-bold">Hi, I'm Himanshu 👋</h1>
  <p className="mt-2 text-lg">I build intelligent, scalable apps using .NET, Angular, and GenAI.</p>
  <Button>Download Resume</Button> <Button variant="ghost">View Projects</Button>
</div>
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
          <Route path="/MyPortfolio/blog/:slug" element={<BlogPost />} /> {/* Updated route to use slug */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
