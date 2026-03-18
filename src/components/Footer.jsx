import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '4rem', padding: '3rem 2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          LawyerNet
        </h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.7, marginBottom: '2rem' }}>
          Focusing on pro bono services and activism for a better tomorrow.
        </p>
        <p style={{ fontSize: '0.875rem', opacity: 0.5 }}>
          &copy; {new Date().getFullYear()} LawyerNet Organization. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
