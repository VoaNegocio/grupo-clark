import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identification from './components/Identification';
import Differential from './components/Differential';
import Process from './components/Process';
import SecondaryDifferentials from './components/SecondaryDifferentials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-green selection:text-white">
      <Header />
      <Hero />
      <Identification />
      <Differential />
      <Process />
      <SecondaryDifferentials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
