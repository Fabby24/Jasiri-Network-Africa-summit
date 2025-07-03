import React from 'react';
import '../styles/Partner.css';

const PartnersSection = () => {
  // Array of partner logos
  const partnerLogos = [
    { id: 1, src: './assests/images/payd.svg', alt: 'Payd' },
    { id: 2, src: './assests/images/hatua.svg', alt: 'Hatua Network' },
    { id: 3, src: './assests/images/fintech.svg', alt: 'Fintech' },
    { id: 4, src: './assests/images/zuricode.svg', alt: 'Zuricode' },
    { id: 5, src: './assests/images/zeticiative.svg', alt: 'Zeti Creative' },
  ];

  return (
    <section className="partners-section">
      {/* Header */}
      <h2 className="partners-header"><span>Previous </span>Partners & Sponsors</h2>

      {/* Logos Grid */}
      <div className="logos-grid">
        {partnerLogos.map((logo) => (
          <div key={logo.id} className="logo-box">
            <img src={logo.src} alt={logo.alt} className="logo" />
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <p className="cta-text">I would like to <br></br> <span>Sponsor or Exhibit</span> </p>
        <button className="cta-btn">
          <span className="arrow-icon">&#8594;</span> PARTNER WITH US
        </button>
      </div>
    </section>
  );
};

export default PartnersSection;