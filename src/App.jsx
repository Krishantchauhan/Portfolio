import React from 'react';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Projects from './component/Projects';
import Footer from './component/Footer';

function App() {
  return (
    <div className="bg-dark text-white font-sans">
      <Header />
      <HeroSection />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
