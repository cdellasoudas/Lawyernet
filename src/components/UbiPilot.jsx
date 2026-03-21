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
      <div className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '2.5rem', color: '#f59e0b', marginBottom: '1rem' }}>EDBIC: The Extreme Distribution Basic Income Coin</h3>
          <h4 style={{ fontSize: '1.5rem', color: '#94a3b8', fontWeight: 400, fontStyle: 'italic' }}>The Public Blueprint & Roadmap</h4>
        </div>

        {/* 1. Introduction */}
        <div style={{ background: '#ffffff', padding: '3rem', borderRadius: '24px', marginBottom: '3rem', borderTop: '4px solid #f59e0b', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
          <h3 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '1.5rem' }}>1. Introduction: A Currency Designed to Move</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.5rem' }}>
            Welcome to the future of decentralized economies. The <strong style={{color: '#0f172a'}}>Extreme Distribution Basic Income Coin (EDBIC)</strong> is not an investment vehicle, a speculative asset, or a store of value meant to be hoarded in a digital vault.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.5rem' }}>
            EDBIC is a <strong style={{color: '#0f172a'}}>medium of exchange</strong> explicitly designed to guarantee a Universal Basic Income (UBI) and stimulate vibrant, local peer-to-peer commerce. We are solving the fundamental flaw of modern economies—the centralization and hoarding of wealth—by building a currency that inherently rewards <em style={{color: '#d97706', fontWeight: 600}}>spending</em> over <em style={{color: '#d97706', fontWeight: 600}}>saving</em>.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155' }}>
            Built on high-speed Layer-2 blockchain technology (immune to high transaction fees), EDBIC fuses the economic theory of <strong style={{color: '#0f172a'}}>demurrage</strong> (a currency holding tax) with a seamless digital marketplace.
          </p>
        </div>

        {/* 2. The Blueprint */}
        <div style={{ background: '#ffffff', padding: '3rem', borderRadius: '24px', marginBottom: '3rem', borderTop: '4px solid #f59e0b', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
          <h3 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '1.5rem' }}>2. The Blueprint: How EDBIC Works</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '2.5rem' }}>
            At the core of EDBIC are three unchangeable, mathematically guaranteed economic principles:
          </p>

          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.4rem', color: '#d97706', marginBottom: '1rem' }}>A. The Universal Basic Income (UBI) Mint</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1rem' }}>Every verified human being on the EDBIC network receives a guaranteed daily deposit of newly minted EDBIC tokens.</p>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#334155', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '0', color: '#f59e0b' }}>•</span>
                <strong style={{ color: '#0f172a' }}>Protection Against Bots:</strong> We utilize cutting-edge "Proof of Personhood" technology (such as Gitcoin Passport and Zero-Knowledge Proofs). This ensures that while your privacy and identity remain 100% protected, you can mathematically prove you are a unique human, preventing automated bots from claiming the UBI.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.4rem', color: '#d97706', marginBottom: '1rem' }}>B. The Demurrage Tax (The Melting Coin)</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1rem' }}>In legacy finance, holding money earns interest—which mathematically drains the working class to pay the wealthy. EDBIC reverses this.</p>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#334155', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '0', color: '#f59e0b' }}>•</span>
                <strong style={{ color: '#0f172a' }}>The Holding Tax:</strong> EDBIC applies a continuous, microscopic holding tax (demurrage) to unused balances. If you sit on your EDBIC, its balance slowly decreases over time.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#334155', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '0', color: '#f59e0b' }}>•</span>
                <strong style={{ color: '#0f172a' }}>The Incentive:</strong> This structural mechanic forces the currency to circulate immediately. Instead of hoarding, users are incentivized to spend their EDBIC back into the community by hiring freelancers, buying digital art, or purchasing secondhand goods.
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.4rem', color: '#d97706', marginBottom: '1rem' }}>C. The Zero-Fee Marketplace</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '1rem' }}>The EDBIC ecosystem is powered by a proprietary, decentralized web marketplace (a "Web3 Craigslist/Fiverr").</p>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#334155', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '0', color: '#f59e0b' }}>•</span>
                <strong style={{ color: '#0f172a' }}>Trustless Escrow:</strong> When you buy a good or service, your EDBIC is locked into an automated escrow smart contract. The funds are only released to the seller once you verify you have received the product.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#334155', lineHeight: '1.6' }}>
                <span style={{ position: 'absolute', left: '0', color: '#f59e0b' }}>•</span>
                <strong style={{ color: '#0f172a' }}>Sustainable Treasury:</strong> The protocol diverts the proceeds of the demurrage tax to fund a transparent, ownerless development treasury. We never charge predatory 20% platform fees like legacy gig-economy apps.
              </li>
            </ul>
          </div>
        </div>

        {/* 3. The Technical Structure */}
        <div style={{ background: '#ffffff', padding: '3rem', borderRadius: '24px', marginBottom: '3rem', borderTop: '4px solid #f59e0b', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
          <h3 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '1.5rem' }}>3. The Technical Structure</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '1.5rem' }}>
            The EDBIC project is structurally designed for maximum transparency and security, utilizing a <strong style={{color: '#0f172a'}}>Dual-Entity Architecture</strong>:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#fef3c7', padding: '2rem', borderRadius: '16px', border: '1px solid #fde68a' }}>
              <h4 style={{ color: '#b45309', fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. The Protocol (Open-Source)</h4>
              <p style={{ color: '#334155', lineHeight: '1.6' }}>The background economy (the token, the UBI minting, and the demurrage) is permanently governed by an ownerless offshore DAO. The code is 100% open-source, mathematically verifiable, and owned by no corporation.</p>
            </div>
            <div style={{ background: '#fef3c7', padding: '2rem', borderRadius: '16px', border: '1px solid #fde68a' }}>
              <h4 style={{ color: '#b45309', fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. The Interface (Protected)</h4>
              <p style={{ color: '#334155', lineHeight: '1.6' }}>The beautiful web marketplace you use to browse and buy goods is developed and maintained by our dedicated onshore software company, ensuring a high-quality, bug-free consumer experience that bridges the gap between Web3 complexity and Web2 simplicity.</p>
            </div>
          </div>
        </div>

        {/* 4. The Roadmap */}
        <div style={{ background: '#ffffff', padding: '3rem', borderRadius: '24px', marginBottom: '3rem', borderTop: '4px solid #f59e0b', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
          <h3 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '1.5rem' }}>4. The Official Rollout Roadmap</h3>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '2.5rem' }}>
            Rather than promising everything at once, EDBIC is rolling out in strategic, highly focused phases to ensure economic stability and secure community adoption.
          </p>
          
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid #fde68a' }}>
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.55rem', top: '0.3rem', width: '1rem', height: '1rem', background: '#f59e0b', borderRadius: '50%' }}></div>
              <h4 style={{ fontSize: '1.4rem', color: '#d97706', marginBottom: '0.8rem' }}>Phase 1: The Testnet MVP & Digital Freelancing</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#334155' }}>We begin on a "Testnet"—a risk-free sandbox environment where early believers can test the UBI and demurrage mechanics using simulation tokens. The initial marketplace will focus <em style={{color: '#0f172a', fontWeight: 600}}>exclusively</em> on digital, zero-marginal-cost services. By offering graphic design, copywriting, tutoring, and software sales, we ensure that early token volatility does not harm physical retailers.</p>
            </div>
            
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.55rem', top: '0.3rem', width: '1rem', height: '1rem', background: '#f59e0b', borderRadius: '50%' }}></div>
              <h4 style={{ fontSize: '1.4rem', color: '#d97706', marginBottom: '0.8rem' }}>Phase 2: Crowdfunding & The DAO Firewall</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#334155' }}>Armed with a working MVP marketplace, we will initiate public crowdfunding matching rounds (via platforms like Gitcoin). The funds acquired will instantly trigger the legal incorporation of the EDBIC DAO, establishing a permanent, unassailable global treasury to protect the protocol.</p>
            </div>

            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.55rem', top: '0.3rem', width: '1rem', height: '1rem', background: '#f59e0b', borderRadius: '50%' }}></div>
              <h4 style={{ fontSize: '1.4rem', color: '#d97706', marginBottom: '0.8rem' }}>Phase 3: Mainnet Launch & Real EDBIC</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#334155' }}>The EDBIC smart contracts deploy to a high-speed, low-cost Layer 2 network (such as World Chain or Optimism). Real value begins to flow as humans authenticate their wallets and the decentralized UBI mints its first live tokens.</p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.55rem', top: '0.3rem', width: '1rem', height: '1rem', background: '#f59e0b', borderRadius: '50%' }}></div>
              <h4 style={{ fontSize: '1.4rem', color: '#d97706', marginBottom: '0.8rem' }}>Phase 4: Local Circular Economies</h4>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#334155' }}>As the velocity and value of EDBIC stabilizes through the demurrage tax, the marketplace opens up to physical, local commerce. Geo-fenced pilot cities will use the EDBIC marketplace to trade secondhand goods, fund community agriculture (CSAs), and pay for local physical labor—creating actualized, closed-loop circular economies free from fiat inflation.</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{ textAlign: 'center', padding: '3rem 0', background: '#ffffff', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderTop: '4px solid #f59e0b' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '1rem' }}>Join the EDBIC Revolution.</h2>
          <p style={{ fontSize: '1.5rem', color: '#d97706', fontStyle: 'italic' }}>A currency that moves. A community that thrives.</p>
        </div>

      </div>
      )}
    </section>
  );
};

export default UbiPilot;
