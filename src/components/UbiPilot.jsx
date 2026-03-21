import React, { useState } from 'react';

const UbiPilot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="ubi-pilot" className="container" style={{ padding: isOpen ? '6rem 2rem' : '2rem 2rem', transition: 'padding 0.3s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: isOpen ? '4rem' : '0' }}>
        <h2 
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', fontSize: '3.5rem', marginBottom: isOpen ? '1.5rem' : '0', background: 'linear-gradient(to right, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', color: 'transparent', letterSpacing: '-1px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', transition: 'all 0.3s ease' }}>
          Our UBI Pilot
          <span style={{ fontSize: '2.5rem', color: '#fbbf24', fontWeight: 400 }}>{isOpen ? '−' : '+'}</span>
        </h2>
        {isOpen && <div style={{ width: '80px', height: '4px', background: '#fbbf24', margin: '0 auto', borderRadius: '2px' }}></div>}
      </div>
      
      {isOpen && (
      <div className="glass animate-fade-in" style={{ padding: '2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden', marginBottom: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#fff', fontWeight: 500, lineHeight: '1.6' }}>
          Read the EDBIC Marketplace Whitepaper below to learn about our comprehensive Universal Basic Income pilot.
        </p>
        
        <div style={{ width: '100%', height: '800px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)', marginBottom: '2rem' }}>
          <iframe 
            src="/EDBIC_Marketplace_Whitepaper.pdf" 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
            title="EDBIC Marketplace Whitepaper"
          />
        </div>

        <a 
          href="/EDBIC_Marketplace_Whitepaper.pdf" 
          download 
          className="btn btn-primary"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', padding: '1rem 2rem', fontSize: '1.1rem', color: '#fff', textDecoration: 'none' }}
        >
          Download PDF Document
        </a>
      </div>
      )}
    </section>
  );
};

export default UbiPilot;
