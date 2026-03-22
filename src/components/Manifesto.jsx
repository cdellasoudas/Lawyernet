import React, { useState } from 'react';

const Manifesto = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="manifesto" className="container" style={{ padding: isOpen ? '6rem 2rem' : '2rem 2rem', transition: 'padding 0.3s ease' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', fontSize: '2.4rem', marginBottom: isOpen ? '1.5rem' : '0', color: '#ffffff', textShadow: '1px 1px 2px rgba(255,255,255,0.4), -1px -1px 2px rgba(0,0,0,0.5)', letterSpacing: '2px', fontWeight: 300, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', transition: 'all 0.3s ease' }}
        >
          Every Man Manifesto
          <span style={{ fontSize: '2.4rem', color: '#ffffff', fontWeight: 200 }}>{isOpen ? '−' : '+'}</span>
        </h2>
        {isOpen && <div style={{ width: '80px', height: '1px', background: 'rgba(255,255,255,0.5)', margin: '0 auto 2rem' }}></div>}

        {isOpen && (
        <div className="animate-fade-in" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '4rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'left', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '3rem', fontWeight: 300 }}>
            Ferdinand von Schirach, currently the most successful writer in the German language, has written a new book. It is called "Every Man" and is hardly bigger and more extensive than a passport. In it are written six European fundamental rights, which concern the great challenges of our time:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Article 1 - Environment</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: 300 }}>Everyone has the right to live in a healthy and protected environment.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Article 2 - Digital self-determination</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: 300 }}>Everyone has the right to digital self-determination. The spying on or manipulation of people is prohibited.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Article 3 - Artificial Intelligence</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: 300 }}>Every human being has the right to have algorithms that burden him or her be transparent, verifiable and fair. Essential decisions must be made by a human being.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Article 4 - Truth</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: 300 }}>Everyone has the right to know that statements made by public officials are true.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Article 5 - Globalization</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: 300 }}>Everyone has the right to be offered only those goods and services that are produced and provided with respect for universal human rights.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Article 6 - Action on fundamental rights</h4>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: 300 }}>Everyone may bring an action on fundamental rights before the European Courts for systematic violations of this Charter.</p>
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '3rem 0' }}></div>

          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#ffffff', fontWeight: 400, marginBottom: '2.5rem', borderLeft: '1px solid #ffffff', paddingLeft: '1.5rem', letterSpacing: '1px' }}>
            We support the above manifesto and propose the following additions:
          </p>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ background: 'transparent', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1rem' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Environment:</strong> <span style={{ color: '#cbd5e1', fontWeight: 300 }}>Everyone has the right to live in a healthy and protected environment.</span>
            </li>
            <li style={{ background: 'transparent', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1rem' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Financial self-determination:</strong> <span style={{ color: '#cbd5e1', fontWeight: 300 }}>Everyone has the right to a minimum of sufficient financial means to live a dignified existence</span>
            </li>
            <li style={{ background: 'transparent', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1rem' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Digital self-determination:</strong> <span style={{ color: '#cbd5e1', fontWeight: 300 }}>Everyone has the right to digital self-determination. The spying on or manipulation of people is prohibited.</span>
            </li>
            <li style={{ background: 'transparent', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1rem' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Artificial Intelligence:</strong> <span style={{ color: '#cbd5e1', fontWeight: 300 }}>Every human being has the right to have algorithms that burden him or her be transparent, verifiable and fair. Essential decisions must be made by a human being.</span>
            </li>
            <li style={{ background: 'transparent', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1rem' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Truth:</strong> <span style={{ color: '#cbd5e1', fontWeight: 300 }}>Everyone has the right to know that statements made by public officials are true.</span>
            </li>
            <li style={{ background: 'transparent', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Globalization:</strong> <span style={{ color: '#cbd5e1', fontWeight: 300 }}>Everyone has the right to be offered only those goods and services that are produced and provided with respect for universal human rights.</span>
            </li>
          </ul>
        </div>
        )}
      </div>
    </section>
  );
};

export default Manifesto;
