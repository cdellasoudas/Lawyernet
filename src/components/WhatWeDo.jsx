import React, { useState } from 'react';

const WhatWeDo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="what-we-do" className="container" style={{ padding: isOpen ? '6rem 2rem' : '2rem 2rem', transition: 'padding 0.3s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: isOpen ? '4rem' : '0' }}>
        <h2 
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', fontSize: '2.4rem', marginBottom: isOpen ? '1.5rem' : '0', color: '#ffffff', textShadow: '1px 1px 2px rgba(255,255,255,0.4), -1px -1px 2px rgba(0,0,0,0.5)', letterSpacing: '2px', fontWeight: 300, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', transition: 'all 0.3s ease' }}>
          What Do We Do?
          <span style={{ fontSize: '2.4rem', color: '#ffffff', fontWeight: 200 }}>{isOpen ? '−' : '+'}</span>
        </h2>
        {isOpen && <div style={{ width: '80px', height: '1px', background: 'rgba(255,255,255,0.5)', margin: '0 auto 3rem' }}></div>}
      </div>
      
      {isOpen && (
      <div className="animate-fade-in" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '4rem', borderRadius: '16px', marginBottom: '3rem', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
        <p style={{ fontSize: '1.6rem', lineHeight: '1.6', color: '#cbd5e1', textAlign: 'center', fontWeight: 300, maxWidth: '900px', margin: '0 auto 4rem' }}>
          We are firm believers that denoting yourself a «think tank» also requires you to take action. As a result, this is what we do:
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '12px', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 400, color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We host Meetups
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '12px', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 400, color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We speak
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '12px', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 400, color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We ask questions
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '12px', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 400, color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We listen
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '12px', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 400, color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            We write and research
          </div>
        </div>
      </div>
      )}
    </section>
  );
};

export default WhatWeDo;
