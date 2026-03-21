import React, { useState } from 'react';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="container" style={{ padding: isOpen ? '6rem 2rem' : '2rem 2rem', transition: 'padding 0.3s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: isOpen ? '4rem' : '0' }}>
        <h2
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', fontSize: '3.5rem', marginBottom: isOpen ? '1.5rem' : '0', background: 'linear-gradient(to right, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent', letterSpacing: '-1px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', transition: 'all 0.3s ease' }}>
          Current Focus
          <span style={{ fontSize: '2.5rem', color: '#60a5fa', fontWeight: 400 }}>{isOpen ? '−' : '+'}</span>
        </h2>
        {isOpen && <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>}
      </div>

      {isOpen && (
        <div className="animate-fade-in">
          {/* UBI Section */}
          <div className="glass" style={{ padding: '4rem', borderRadius: '24px', position: 'relative', overflow: 'hidden', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#60a5fa' }}>UBI</h3>
            <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#fff', fontWeight: 500, lineHeight: '1.6', borderLeft: '4px solid #c084fc', paddingLeft: '1.5rem' }}>
              The world is changing around us. Technology overturns many of the things that the last two generations could take for granted, we will see jobs disappear quickly. What can we do about it today?
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                <p style={{ lineHeight: '1.8', fontSize: '1.15rem', color: 'var(--text-dark)' }}>
                  If we ask what people think about Basic Income today we will get many answers. The reality, however, is simple: it is a program through which regular instalment payments are made to all adult citizens. These payments will cover basic needs such as food and housing. <span style={{ color: '#fff', fontWeight: 600 }}>Basic Income is realistic and in our age of automation, poverty and changing economic data, it is simply self-evident.</span>
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                <p style={{ lineHeight: '1.8', fontSize: '1.15rem', color: 'var(--text-dark)' }}>
                  In general, people who could make the decision to start a Basic Income program do not want to admit that the old systems fail. They do not want to tell their voters that in order to avoid an international humanitarian crisis or a global recession, we must accept a huge change in the way we think about society and the economy.
                </p>
              </div>
              <div style={{ background: 'linear-gradient(145deg, rgba(37,99,235,0.1), rgba(15,23,42,0))', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(37,99,235,0.2)' }}>
                <p style={{ lineHeight: '1.8', fontSize: '1.25rem', color: '#f8fafc', fontWeight: 500 }}>
                  However, nothing else would suffice. Basic Income is a tool that combines what happens to us with what is possible for us. We are experiencing the overthrow of the old economy. Nothing can stop this development and very little can slow it down. Basic Income, however, can help make this reversal safer and why not beneficial to our society.
                </p>
              </div>
            </div>
          </div>

          {/* Decentralisation Technologies */}
          <div className="glass" style={{ padding: '4rem', borderRadius: '24px', marginBottom: '4rem', borderTop: '4px solid #c084fc' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#c084fc' }}>Decentralisation Technologies</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>An increasing number of disciplines are being confronted with the phenomena of decentralised technologies. Distributed ledger technologies such as the blockchain emerged as an attempt to disrupt central institutions and authorities. It created a technology that enabled human cooperation beyond powerful institutions and ultimately challenges their existence. In essence, this is the decentralised force behind such technologies.</p>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Whilst the primary focus still remains on the fintech sector, decentralized technologies are on the verge of affecting many more industries.</p>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>In general, it can be said that the digitalisation has led to a tremendous centralisation of data, market intelligence and thus power. Decentralised technologies and decentralisation in general can be considered interesting countermovements on a technological as well as a structural level.</p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>We don’t want to be viewed as uncritical ambassadors of technological advancements. The blockchain hype is no exception to this. However, we believe that grasping decentralisation is essential in order to cultivate an enlightened yet critical debate about this issue.</p>
          </div>

          {/* Social Inclusion Initiatives */}
          <div className="glass" style={{ padding: '4rem', borderRadius: '24px', marginBottom: '4rem', borderTop: '4px solid #38bdf8' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#38bdf8' }}>Social Inclusion Initiatives</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Building an inclusive society is much more than a political responsibility. It involves the setting up of an inclusive culture that takes root in our society, determining the involvement and co-responsibility of each organisation and institution, each social stakeholder, and each citizen with respect to groups of people who could find themselves in a situation of vulnerability.</p>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 600 }}>We work to ensure vulnerable and marginalised people are included in society through:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <li style={{ background: 'rgba(56,189,248,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.2)' }}><strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.5rem' }}>Empowerment</strong> <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>having a voice in society, access to employment, and the tools to participate in social life</span></li>
              <li style={{ background: 'rgba(56,189,248,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.2)' }}><strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.5rem' }}>Consideration</strong> <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>incorporating their needs in the policy making process</span></li>
              <li style={{ background: 'rgba(56,189,248,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.2)' }}><strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.5rem' }}>Equal rights</strong> <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>access to basic services such as housing, employment, education, health care and social services</span></li>
              <li style={{ background: 'rgba(56,189,248,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.2)' }}><strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.5rem' }}>Community participation</strong> <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>access to social interactions and participation to social, cultural or political activities</span></li>
            </ul>
          </div>

          {/* Climate Emergency */}
          <div className="glass" style={{ padding: '4rem', borderRadius: '24px', borderTop: '4px solid #34d399' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#34d399' }}>Climate Emergency</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Climate impacts, already experienced by the world’s poorest, are today palpable across the planet. We’re facing extreme weather events, catastrophic loss of wildlife and a crisis over future access to freshwater and food.</p>
            <p style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 600, borderLeft: '4px solid #34d399', paddingLeft: '1.5rem' }}>We work to bring awareness, mobilise community action and petition authorities.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
