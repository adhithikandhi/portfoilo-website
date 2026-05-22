import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient Glowing Background Blobs */}
      <div className="glow-blob top-[-10%] left-[10%] w-[500px] h-[500px] bg-brand-200/35"></div>
      <div className="glow-blob bottom-[10%] right-[10%] w-[450px] h-[450px] bg-brand-100/40"></div>
      <div className="glow-blob top-[40%] left-[60%] w-[400px] h-[400px] bg-mag-yellow-100/30"></div>
      <div className="glow-blob top-[80%] left-[20%] w-[600px] h-[600px] bg-mag-blue-100/20"></div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="relative z-10 pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
