import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '4rem', padding: '3rem 2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <img src="/logo.jpg" alt="Lawyernet Logo" style={{ height: '60px', width: 'auto', mixBlendMode: 'screen', marginBottom: '1.5rem', opacity: 0.8 }} />
        <p style={{ color: '#cbd5e1', opacity: 0.7, marginBottom: '2rem', fontWeight: 300 }}>
          Focusing on pro bono services and activism for a better tomorrow.
        </p>
        <p style={{ fontSize: '0.875rem', opacity: 0.5, color: '#cbd5e1', fontWeight: 300 }}>
          &copy; {new Date().getFullYear()} LawyerNet Organization. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
