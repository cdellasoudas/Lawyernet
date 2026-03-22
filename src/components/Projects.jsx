import React, { useState } from 'react';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="container" style={{ padding: isOpen ? '6rem 2rem' : '2rem 2rem', transition: 'padding 0.3s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: isOpen ? '4rem' : '0' }}>
        <h2
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', fontSize: '2.4rem', marginBottom: isOpen ? '1.5rem' : '0', color: '#ffffff', textShadow: '1px 1px 2px rgba(255,255,255,0.4), -1px -1px 2px rgba(0,0,0,0.5)', letterSpacing: '2px', fontWeight: 300, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', transition: 'all 0.3s ease' }}>
          Current Focus
          <span style={{ fontSize: '2.4rem', color: '#ffffff', fontWeight: 200 }}>{isOpen ? '−' : '+'}</span>
        </h2>
        {isOpen && <div style={{ width: '80px', height: '1px', background: 'rgba(255,255,255,0.5)', margin: '0 auto 2rem' }}></div>}
      </div>

      {isOpen && (
        <div className="animate-fade-in">
          {/* UBI Section */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem', borderRadius: '16px', position: 'relative', overflow: 'hidden', marginBottom: '4rem', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#ffffff', fontWeight: 300, letterSpacing: '2px' }}>UBI</h3>
            <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: '#ffffff', fontWeight: 400, lineHeight: '1.6', borderLeft: '1px solid rgba(255,255,255,0.5)', paddingLeft: '1.5rem' }}>
              The world is changing around us. Technology overturns many of the things that the last two generations could take for granted, we will see jobs disappear quickly. What can we do about it today?
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ lineHeight: '1.8', fontSize: '1.25rem', color: '#cbd5e1', fontWeight: 300 }}>
                  If we ask what people think about Basic Income today we will get many answers. The reality, however, is simple: it is a program through which regular instalment payments are made to all adult citizens. These payments will cover basic needs such as food and housing. <span style={{ color: '#ffffff', fontWeight: 400, letterSpacing: '0.5px' }}>Basic Income is realistic and in our age of automation, poverty and changing economic data, it is simply self-evident.</span>
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ lineHeight: '1.8', fontSize: '1.25rem', color: '#cbd5e1', fontWeight: 300 }}>
                  In general, people who could make the decision to start a Basic Income program do not want to admit that the old systems fail. They do not want to tell their voters that in order to avoid an international humanitarian crisis or a global recession, we must accept a huge change in the way we think about society and the economy.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <p style={{ lineHeight: '1.8', fontSize: '1.4rem', color: '#ffffff', fontWeight: 400 }}>
                  However, nothing else would suffice. Basic Income is a tool that combines what happens to us with what is possible for us. We are experiencing the overthrow of the old economy. Nothing can stop this development and very little can slow it down. Basic Income, however, can help make this reversal safer and why not beneficial to our society.
                </p>
              </div>
            </div>
          </div>

          {/* Decentralisation Technologies */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#ffffff', fontWeight: 300, letterSpacing: '2px' }}>Decentralisation Technologies</h3>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: 300 }}>An increasing number of disciplines are being confronted with the phenomena of decentralised technologies. Distributed ledger technologies such as the blockchain emerged as an attempt to disrupt central institutions and authorities. It created a technology that enabled human cooperation beyond powerful institutions and ultimately challenges their existence. In essence, this is the decentralised force behind such technologies.</p>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: 300 }}>Whilst the primary focus still remains on the fintech sector, decentralized technologies are on the verge of affecting many more industries.</p>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: 300 }}>In general, it can be said that the digitalisation has led to a tremendous centralisation of data, market intelligence and thus power. Decentralised technologies and decentralisation in general can be considered interesting countermovements on a technological as well as a structural level.</p>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: 300 }}>We don’t want to be viewed as uncritical ambassadors of technological advancements. The blockchain hype is no exception to this. However, we believe that grasping decentralisation is essential in order to cultivate an enlightened yet critical debate about this issue.</p>
          </div>

          {/* Social Inclusion Initiatives */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem', borderRadius: '16px', marginBottom: '4rem', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#ffffff', fontWeight: 300, letterSpacing: '2px' }}>Social Inclusion Initiatives</h3>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: 300 }}>Building an inclusive society is much more than a political responsibility. It involves the setting up of an inclusive culture that takes root in our society, determining the involvement and co-responsibility of each organisation and institution, each social stakeholder, and each citizen with respect to groups of people who could find themselves in a situation of vulnerability.</p>
            <p style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: 400, letterSpacing: '0.5px' }}>We work to ensure vulnerable and marginalised people are included in society through:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <li style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}><strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Empowerment</strong> <span style={{ color: '#94a3b8', fontSize: '1.25rem', fontWeight: 300 }}>having a voice in society, access to employment, and the tools to participate in social life</span></li>
              <li style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}><strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Consideration</strong> <span style={{ color: '#94a3b8', fontSize: '1.25rem', fontWeight: 300 }}>incorporating their needs in the policy making process</span></li>
              <li style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}><strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Equal rights</strong> <span style={{ color: '#94a3b8', fontSize: '1.25rem', fontWeight: 300 }}>access to basic services such as housing, employment, education, health care and social services</span></li>
              <li style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}><strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px' }}>Community participation</strong> <span style={{ color: '#94a3b8', fontSize: '1.25rem', fontWeight: 300 }}>access to social interactions and participation to social, cultural or political activities</span></li>
            </ul>
          </div>

          {/* Climate Emergency */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#ffffff', fontWeight: 300, letterSpacing: '2px' }}>Climate Emergency</h3>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: 300 }}>Climate impacts, already experienced by the world’s poorest, are today palpable across the planet. We’re facing extreme weather events, catastrophic loss of wildlife and a crisis over future access to freshwater and food.</p>
            <p style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 400, borderLeft: '1px solid rgba(255,255,255,0.5)', paddingLeft: '1.5rem' }}>We work to bring awareness, mobilise community action and petition authorities.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
