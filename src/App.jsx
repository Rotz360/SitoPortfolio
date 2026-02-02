import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default App;
