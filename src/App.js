import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProfilePicture  from './components/ProfilePicture';    
import './index.css';

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Header />
        <main>
          <ProfilePicture />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </PortfolioProvider>
  );
}

export default App;
