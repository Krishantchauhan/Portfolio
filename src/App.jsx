import React from 'react';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Projects from './component/Projects';
import Footer from './component/Footer';
import Skills from './component/Skills';
import Education from './component/Education';

function App() {
  return (
    <div className="bg-dark text-white font-sans">
      <Header />
      <HeroSection />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
