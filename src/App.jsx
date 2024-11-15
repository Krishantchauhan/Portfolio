import React from 'react';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Projects from './component/Projects';
import Footer from './component/Footer';
import Skills from './component/Skills';

function App() {
  return (
    <div className="bg-dark text-white font-sans">
      <Header />
      <HeroSection />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
