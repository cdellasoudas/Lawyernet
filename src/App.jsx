import React from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import WhatWeDo from './components/WhatWeDo';
import Projects from './components/Projects';
import Footer from './components/Footer';
import UbiPilot from './components/UbiPilot';

function App() {
  React.useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="app-container">
      <header style={{ padding: '1.5rem 2rem', position: 'sticky', top: 0, zIndex: 10, background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Lawyernet" style={{ height: '40px', width: 'auto' }} />
          </a>
          <nav>
            <a href="#manifesto" style={{ marginLeft: '1.5rem', color: 'var(--text-dark)', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase', transition: 'var(--transition)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-light)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>Manifesto</a>
            <a href="#projects" style={{ marginLeft: '1.5rem', color: 'var(--text-dark)', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase', transition: 'var(--transition)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-light)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>Current Focus</a>
            <a href="#what-we-do" style={{ marginLeft: '1.5rem', color: 'var(--text-dark)', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase', transition: 'var(--transition)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-light)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>What We Do</a>
            <a href="#ubi-pilot" style={{ marginLeft: '1.5rem', color: 'var(--text-dark)', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase', transition: 'var(--transition)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-light)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>Our UBI Pilot</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Manifesto />
        <Projects />
        <WhatWeDo />
        <UbiPilot />
      </main>

      <Footer />
    </div>
  );
}

export default App;
