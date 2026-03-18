import React from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import WhatWeDo from './components/WhatWeDo';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
            <span style={{ color: 'var(--primary)' }}>Lawyer</span>Net
          </div>
          <nav>
            <a href="#manifesto" style={{ marginLeft: '1.5rem', color: 'var(--text-dark)', fontWeight: 500, transition: 'var(--transition)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>Manifesto</a>
            <a href="#projects" style={{ marginLeft: '1.5rem', color: 'var(--text-dark)', fontWeight: 500, transition: 'var(--transition)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>Projects</a>
            <a href="#what-we-do" style={{ marginLeft: '1.5rem', color: 'var(--text-dark)', fontWeight: 500, transition: 'var(--transition)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>What We Do</a>
          </nav>
        </div>
      </header>
      
      <main>
        <Hero />
        <Manifesto />
        <Projects />
        <WhatWeDo />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
