import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import StrengthsAndEducation from './components/StrengthsAndEducation';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Developer Terminal Boot Loading Screen */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      <div className={`min-h-screen bg-[#050711] text-slate-100 relative selection:bg-cyan-500 selection:text-black transition-opacity duration-1000 ${
        loading ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Dynamic Animated Particles/Matrix Grid Canvas Background */}
        <CyberBackground />

        {/* Main Content Container */}
        <div className="relative z-10">
          <Navbar personal={portfolioData.personal} />
          
          <main>
            <Hero data={portfolioData.personal} />
            <About data={portfolioData.personal} />
            <Skills skills={portfolioData.skills} languages={portfolioData.languages} />
            <Projects 
              projects={portfolioData.projects} 
              userGithub={portfolioData.personal.github} 
            />
            <StrengthsAndEducation 
              strengths={portfolioData.strengths} 
              education={portfolioData.education} 
            />
            <Contact personal={portfolioData.personal} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
