import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section container" style={{ marginTop: '4rem', padding: '6rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'transparent' }}>
      <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '500px', height: '500px', background: 'rgba(255,255,255,0.05)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
        <img src="/logo.jpg" alt="Lawyernet Logo" className="animate-fade-in" style={{ width: '100%', maxWidth: '200px', margin: '0 auto 2rem', display: 'block' }} />
        <div style={{ width: '80px', height: '1px', background: 'rgba(255,255,255,0.5)', margin: '0 auto 2.5rem', borderRadius: '2px' }}></div>
        <p className="animate-fade-in" style={{ fontSize: '1.6rem', color: '#cbd5e1', opacity: 0.95, lineHeight: '1.6', animationDelay: '0.2s', animationFillMode: 'both', fontWeight: 300 }}>
          Lawyernet is a legal sector initiative focusing on pro bono services for socially sensitive cases and activism on issues of contemporary political, technological and cultural interest.
        </p>
      </div>
    </section>
  );
};

export default Hero;
