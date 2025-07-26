import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
