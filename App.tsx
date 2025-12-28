import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;