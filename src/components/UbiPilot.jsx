import React, { useState } from 'react';

const UbiPilot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="ubi-pilot" className="container" style={{ padding: isOpen ? '6rem 2rem' : '2rem 2rem', transition: 'padding 0.3s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: isOpen ? '4rem' : '0' }}>
        <h2 
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: 'pointer', fontSize: '3.5rem', marginBottom: isOpen ? '1.5rem' : '0', color: '#ffffff', textShadow: '1px 1px 2px rgba(255,255,255,0.4), -1px -1px 2px rgba(0,0,0,0.5)', letterSpacing: '2px', fontWeight: 300, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', transition: 'all 0.3s ease' }}>
          Our UBI Pilot
          <span style={{ fontSize: '2.5rem', color: '#ffffff', fontWeight: 200 }}>{isOpen ? '−' : '+'}</span>
        </h2>
        {isOpen && <div style={{ width: '80px', height: '1px', background: 'rgba(255,255,255,0.5)', margin: '0 auto', borderRadius: '2px' }}></div>}
      </div>
      
      {isOpen && (
      <div className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 300, letterSpacing: '2px', textTransform: 'uppercase' }}>EDBIC: The Extreme Distribution Basic Income Coin</h3>
          <h4 style={{ fontSize: '1.5rem', color: '#cbd5e1', fontWeight: 300, letterSpacing: '1px' }}>The Public Blueprint & Roadmap</h4>
        </div>

        {/* 1. Introduction */}
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
          <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase' }}>1. Introduction: A Currency Designed to Move</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1.5rem', fontWeight: 300 }}>
            Welcome to the future of decentralized economies. The <strong style={{color: '#ffffff', fontWeight: 400}}>Extreme Distribution Basic Income Coin (EDBIC)</strong> is not an investment vehicle, a speculative asset, or a store of value meant to be hoarded in a digital vault.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1.5rem', fontWeight: 300 }}>
            EDBIC is a <strong style={{color: '#ffffff', fontWeight: 400}}>medium of exchange</strong> explicitly designed to guarantee a Universal Basic Income (UBI) and stimulate vibrant, local peer-to-peer commerce. We are solving the fundamental flaw of modern economies—the centralization and hoarding of wealth—by building a currency that inherently rewards <em style={{color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.5)', fontStyle: 'normal'}}>spending</em> over <em style={{color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.5)', fontStyle: 'normal'}}>saving</em>.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: 300 }}>
            Built on high-speed Layer-2 blockchain technology (immune to high transaction fees), EDBIC fuses the economic theory of <strong style={{color: '#ffffff', fontWeight: 400}}>demurrage</strong> (a currency holding tax) with a seamless digital marketplace.
          </p>
        </div>

        {/* 2. The Blueprint */}
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
          <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase' }}>2. The Blueprint: How EDBIC Works</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2.5rem', fontWeight: 300 }}>
            At the core of EDBIC are three unchangeable, mathematically guaranteed economic principles:
          </p>

          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>A. The Universal Basic Income (UBI) Mint</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1rem', fontWeight: 300 }}>Every verified human being on the EDBIC network receives a guaranteed daily deposit of newly minted EDBIC tokens.</p>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#cbd5e1', lineHeight: '1.6', fontWeight: 300 }}>
                <span style={{ position: 'absolute', left: '0', color: '#ffffff' }}>•</span>
                <strong style={{ color: '#ffffff', fontWeight: 400 }}>Protection Against Bots:</strong> We utilize cutting-edge "Proof of Personhood" technology (such as Gitcoin Passport and Zero-Knowledge Proofs). This ensures that while your privacy and identity remain 100% protected, you can mathematically prove you are a unique human, preventing automated bots from claiming the UBI.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>B. The Demurrage Tax (The Melting Coin)</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1rem', fontWeight: 300 }}>In legacy finance, holding money earns interest—which mathematically drains the working class to pay the wealthy. EDBIC reverses this.</p>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#cbd5e1', lineHeight: '1.6', fontWeight: 300 }}>
                <span style={{ position: 'absolute', left: '0', color: '#ffffff' }}>•</span>
                <strong style={{ color: '#ffffff', fontWeight: 400 }}>The Holding Tax:</strong> EDBIC applies a continuous, microscopic holding tax (demurrage) to unused balances. If you sit on your EDBIC, its balance slowly decreases over time.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#cbd5e1', lineHeight: '1.6', fontWeight: 300 }}>
                <span style={{ position: 'absolute', left: '0', color: '#ffffff' }}>•</span>
                <strong style={{ color: '#ffffff', fontWeight: 400 }}>The Incentive:</strong> This structural mechanic forces the currency to circulate immediately. Instead of hoarding, users are incentivized to spend their EDBIC back into the community by hiring freelancers, buying digital art, or purchasing secondhand goods.
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>C. The Zero-Fee Marketplace</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1rem', fontWeight: 300 }}>The EDBIC ecosystem is powered by a proprietary, decentralized web marketplace (a "Web3 Craigslist/Fiverr").</p>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#cbd5e1', lineHeight: '1.6', fontWeight: 300 }}>
                <span style={{ position: 'absolute', left: '0', color: '#ffffff' }}>•</span>
                <strong style={{ color: '#ffffff', fontWeight: 400 }}>Trustless Escrow:</strong> When you buy a good or service, your EDBIC is locked into an automated escrow smart contract. The funds are only released to the seller once you verify you have received the product.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#cbd5e1', lineHeight: '1.6', fontWeight: 300 }}>
                <span style={{ position: 'absolute', left: '0', color: '#ffffff' }}>•</span>
                <strong style={{ color: '#ffffff', fontWeight: 400 }}>Sustainable Treasury:</strong> The protocol diverts the proceeds of the demurrage tax to fund a transparent, ownerless development treasury. We never charge predatory 20% platform fees like legacy gig-economy apps.
              </li>
            </ul>
          </div>
        </div>

        {/* 3. The Technical Structure */}
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
          <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase' }}>3. The Technical Structure</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1.5rem', fontWeight: 300 }}>
            The EDBIC project is structurally designed for maximum transparency and security, utilizing a <strong style={{color: '#ffffff', fontWeight: 400}}>Dual-Entity Architecture</strong>:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>1. The Protocol (Open-Source)</h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontWeight: 300 }}>The background economy (the token, the UBI minting, and the demurrage) is permanently governed by an ownerless offshore DAO. The code is 100% open-source, mathematically verifiable, and owned by no corporation.</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>2. The Interface (Protected)</h4>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontWeight: 300 }}>The beautiful web marketplace you use to browse and buy goods is developed and maintained by our dedicated onshore software company, ensuring a high-quality, bug-free consumer experience that bridges the gap between Web3 complexity and Web2 simplicity.</p>
            </div>
          </div>
        </div>

        {/* 4. The Roadmap */}
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
          <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase' }}>4. The Official Rollout Roadmap</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2.5rem', fontWeight: 300 }}>
            Rather than promising everything at once, EDBIC is rolling out in strategic, highly focused phases to ensure economic stability and secure community adoption.
          </p>
          
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.35rem', top: '0.3rem', width: '0.7rem', height: '0.7rem', border: '1px solid #ffffff', background: '#2a3240', borderRadius: '50%' }}></div>
              <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Phase 1: The Testnet MVP & Digital Freelancing</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#cbd5e1', fontWeight: 300 }}>We begin on a "Testnet"—a risk-free sandbox environment where early believers can test the UBI and demurrage mechanics using simulation tokens. The initial marketplace will focus <em style={{color: '#ffffff', fontWeight: 400, fontStyle: 'normal'}}>exclusively</em> on digital, zero-marginal-cost services. By offering graphic design, copywriting, tutoring, and software sales, we ensure that early token volatility does not harm physical retailers.</p>
            </div>
            
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.35rem', top: '0.3rem', width: '0.7rem', height: '0.7rem', border: '1px solid #ffffff', background: '#2a3240', borderRadius: '50%' }}></div>
              <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Phase 2: Crowdfunding & The DAO Firewall</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#cbd5e1', fontWeight: 300 }}>Armed with a working MVP marketplace, we will initiate public crowdfunding matching rounds (via platforms like Gitcoin). The funds acquired will instantly trigger the legal incorporation of the EDBIC DAO, establishing a permanent, unassailable global treasury to protect the protocol.</p>
            </div>

            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.35rem', top: '0.3rem', width: '0.7rem', height: '0.7rem', border: '1px solid #ffffff', background: '#2a3240', borderRadius: '50%' }}></div>
              <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Phase 3: Mainnet Launch & Real EDBIC</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#cbd5e1', fontWeight: 300 }}>The EDBIC smart contracts deploy to a high-speed, low-cost Layer 2 network (such as World Chain or Optimism). Real value begins to flow as humans authenticate their wallets and the decentralized UBI mints its first live tokens.</p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.35rem', top: '0.3rem', width: '0.7rem', height: '0.7rem', border: '1px solid #ffffff', background: '#2a3240', borderRadius: '50%' }}></div>
              <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Phase 4: Local Circular Economies</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#cbd5e1', fontWeight: 300 }}>As the velocity and value of EDBIC stabilizes through the demurrage tax, the marketplace opens up to physical, local commerce. Geo-fenced pilot cities will use the EDBIC marketplace to trade secondhand goods, fund community agriculture (CSAs), and pay for local physical labor—creating actualized, closed-loop circular economies free from fiat inflation.</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{ textAlign: 'center', padding: '3rem 0', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 300, letterSpacing: '2px', textTransform: 'uppercase' }}>Join the EDBIC Revolution.</h2>
          <p style={{ fontSize: '1.5rem', color: '#cbd5e1', fontStyle: 'italic', fontWeight: 300, letterSpacing: '1px' }}>A currency that moves. A community that thrives.</p>
        </div>

      </div>
      )}
    </section>
  );
};

export default UbiPilot;
