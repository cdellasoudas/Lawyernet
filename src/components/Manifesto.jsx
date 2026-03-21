import React, { useState } from 'react';

const Manifesto = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="manifesto" className="container" style={{ padding: isOpen ? '6rem 2rem' : '2rem 2rem', transition: 'padding 0.3s ease' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', fontSize: '3rem', marginBottom: isOpen ? '2rem' : '0', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', color: 'transparent', letterSpacing: '-1.5px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', transition: 'all 0.3s ease' }}
        >
          Every Man Manifesto
          <span style={{ fontSize: '2.5rem', color: '#c084fc', fontWeight: 400 }}>{isOpen ? '−' : '+'}</span>
        </h2>

        {isOpen && (
        <div className="glass animate-fade-in" style={{ padding: '4rem', borderRadius: '24px', textAlign: 'left', position: 'relative' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#fff', opacity: 0.95, marginBottom: '3rem' }}>
            Ferdinand von Schirach, currently the most successful writer in the German language, has written a new book. It is called "Every Man" and is hardly bigger and more extensive than a passport. In it are written six European fundamental rights, which concern the great challenges of our time:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.1rem' }}>Article 1 - Environment</h4>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Everyone has the right to live in a healthy and protected environment.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.1rem' }}>Article 2 - Digital self-determination</h4>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Everyone has the right to digital self-determination. The spying on or manipulation of people is prohibited.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.1rem' }}>Article 3 - Artificial Intelligence</h4>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Every human being has the right to have algorithms that burden him or her be transparent, verifiable and fair. Essential decisions must be made by a human being.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.1rem' }}>Article 4 - Truth</h4>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Everyone has the right to know that statements made by public officials are true.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.1rem' }}>Article 5 - Globalization</h4>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Everyone has the right to be offered only those goods and services that are produced and provided with respect for universal human rights.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.1rem' }}>Article 6 - Action on fundamental rights</h4>
              <p style={{ color: 'var(--text-dark)', lineHeight: '1.6' }}>Everyone may bring an action on fundamental rights before the European Courts for systematic violations of this Charter.</p>
            </div>
          </div>

          <div style={{ height: '1px', background: 'var(--glass-border)', margin: '3rem 0' }}></div>

          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#fff', fontWeight: 600, marginBottom: '2.5rem', borderLeft: '4px solid #c084fc', paddingLeft: '1.5rem' }}>
            We support the above manifesto and propose the following additions:
          </p>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ background: 'rgba(192,132,252,0.1)', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(192,132,252,0.3)', marginBottom: '1rem' }}>
              <strong style={{ color: '#c084fc', display: 'block', marginBottom: '0.5rem' }}>Environment:</strong> <span style={{ color: 'var(--text-dark)' }}>Everyone has the right to live in a healthy and protected environment.</span>
            </li>
            <li style={{ background: 'rgba(192,132,252,0.1)', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(192,132,252,0.3)', marginBottom: '1rem' }}>
              <strong style={{ color: '#c084fc', display: 'block', marginBottom: '0.5rem' }}>Financial self-determination:</strong> <span style={{ color: 'var(--text-dark)' }}>Everyone has the right to a minimum of sufficient financial means to live a dignified existence</span>
            </li>
            <li style={{ background: 'rgba(192,132,252,0.1)', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(192,132,252,0.3)', marginBottom: '1rem' }}>
              <strong style={{ color: '#c084fc', display: 'block', marginBottom: '0.5rem' }}>Digital self-determination:</strong> <span style={{ color: 'var(--text-dark)' }}>Everyone has the right to digital self-determination. The spying on or manipulation of people is prohibited.</span>
            </li>
            <li style={{ background: 'rgba(192,132,252,0.1)', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(192,132,252,0.3)', marginBottom: '1rem' }}>
              <strong style={{ color: '#c084fc', display: 'block', marginBottom: '0.5rem' }}>Artificial Intelligence:</strong> <span style={{ color: 'var(--text-dark)' }}>Every human being has the right to have algorithms that burden him or her be transparent, verifiable and fair. Essential decisions must be made by a human being.</span>
            </li>
            <li style={{ background: 'rgba(192,132,252,0.1)', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(192,132,252,0.3)', marginBottom: '1rem' }}>
              <strong style={{ color: '#c084fc', display: 'block', marginBottom: '0.5rem' }}>Truth:</strong> <span style={{ color: 'var(--text-dark)' }}>Everyone has the right to know that statements made by public officials are true.</span>
            </li>
            <li style={{ background: 'rgba(192,132,252,0.1)', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(192,132,252,0.3)' }}>
              <strong style={{ color: '#c084fc', display: 'block', marginBottom: '0.5rem' }}>Globalization:</strong> <span style={{ color: 'var(--text-dark)' }}>Everyone has the right to be offered only those goods and services that are produced and provided with respect for universal human rights.</span>
            </li>
          </ul>
        </div>
        )}
      </div>
    </section>
  );
};

export default Manifesto;
