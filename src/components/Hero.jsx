import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section glass container" style={{ marginTop: '4rem', padding: '6rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '500px', height: '500px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.15, borderRadius: '50%', zIndex: 0 }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="animate-fade-in" style={{ marginBottom: '1.5rem', fontSize: '4.5rem', letterSpacing: '-2px' }}>
          LawyerNet
        </h1>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #60a5fa, #c084fc)', margin: '0 auto 2.5rem', borderRadius: '2px' }}></div>
        <p className="animate-fade-in" style={{ fontSize: '1.6rem', color: '#fff', opacity: 0.95, lineHeight: '1.6', animationDelay: '0.2s', animationFillMode: 'both', fontWeight: 500 }}>
          Lawyernet is a legal sector initiative focusing on pro bono services for socially sensitive cases and activism on issues of contemporary political, technological and cultural interest.
        </p>
      </div>
    </section>
  );
};

export default Hero;
