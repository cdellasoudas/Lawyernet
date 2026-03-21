import React, { useState } from 'react';

const WhatWeDo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="what-we-do" className="container" style={{ padding: isOpen ? '6rem 2rem' : '2rem 2rem', transition: 'padding 0.3s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: isOpen ? '4rem' : '0' }}>
        <h2 
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', fontSize: '3rem', marginBottom: isOpen ? '1.5rem' : '0', color: '#f8fafc', letterSpacing: '-1px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', transition: 'all 0.3s ease' }}>
          What Do We Do?
          <span style={{ fontSize: '2.5rem', color: '#f8fafc', fontWeight: 400 }}>{isOpen ? '−' : '+'}</span>
        </h2>
        {isOpen && <div style={{ width: '80px', height: '4px', background: 'var(--secondary)', margin: '0 auto 3rem', borderRadius: '2px' }}></div>}
      </div>
      
      {isOpen && (
      <div className="glass animate-fade-in" style={{ padding: '4rem', borderRadius: '24px', marginBottom: '3rem' }}>
        <p style={{ fontSize: '1.6rem', lineHeight: '1.6', color: '#fff', textAlign: 'center', fontWeight: 500, maxWidth: '900px', margin: '0 auto 4rem' }}>
          We are firm believers that denoting yourself a «think tank» also requires you to take action. As a result, this is what we do:
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div style={{ background: 'rgba(64,196,255,0.1)', padding: '2rem', borderRadius: '16px', fontSize: '1.25rem', fontWeight: 600, color: '#40c4ff', border: '1px solid rgba(64,196,255,0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We host Meetups
          </div>
          <div style={{ background: 'rgba(64,196,255,0.1)', padding: '2rem', borderRadius: '16px', fontSize: '1.25rem', fontWeight: 600, color: '#40c4ff', border: '1px solid rgba(64,196,255,0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We speak
          </div>
          <div style={{ background: 'rgba(64,196,255,0.1)', padding: '2rem', borderRadius: '16px', fontSize: '1.25rem', fontWeight: 600, color: '#40c4ff', border: '1px solid rgba(64,196,255,0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We ask questions
          </div>
          <div style={{ background: 'rgba(64,196,255,0.1)', padding: '2rem', borderRadius: '16px', fontSize: '1.25rem', fontWeight: 600, color: '#40c4ff', border: '1px solid rgba(64,196,255,0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We listen
          </div>
          <div style={{ background: 'rgba(64,196,255,0.1)', padding: '2rem', borderRadius: '16px', fontSize: '1.25rem', fontWeight: 600, color: '#40c4ff', border: '1px solid rgba(64,196,255,0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We write and research
          </div>
        </div>
      </div>
      )}
    </section>
  );
};

export default WhatWeDo;
