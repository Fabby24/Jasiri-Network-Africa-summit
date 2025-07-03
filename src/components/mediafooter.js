import React from 'react';
import '../styles/media.css';

const MediaAndFooter = () => {
  // Video thumbnails data
  const videos = [
    {
      id: 1,
      src: './assests/images/download (1).jpeg',
      alt: '',
      title: 'Jasiri Summit Mixer Highlights 2024',
    },
    {
      id: 2,
      src: './assests/images/download (3).jpeg',
      alt: '',
      title: '2024 Pre-Summit Highlights',
    },
    {
      id: 3,
      src: './assests/images/download (2).jpeg',
      alt: '',
      title: '2024 Jasiri Summit - Event Recap Video',
    },
  ];

  return (
    <div>
      {/* Media Section */}
      <section className="media-section">
        <h2 className="media-title">2024 Summit Highlight Videos</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-thumbnail">
              <img src={video.src} alt={video.alt} className="thumbnail-image" />
              <div className="play-icon">
                <span className="play-button">&#9654;</span>
              </div>
              <p className="video-caption">{video.title}</p>
            </div>
          ))}
        </div>
        <button className="view-all-btn">
          <span className="arrow-icon">&#8594;</span> VIEW ALL
        </button>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <h2 className="footer-title">Talk to us</h2>
        <p className="contact-info">
          For General Enquiries:<br />
          Email us: <a href="mailto:info@jasirinetwork.com">info@jasirinetwork.com</a> | Call us <a href="tel:+254000111222">+254 000 111 222</a>
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/ " target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/ " target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <img src="/images/logo.png" alt="Jasiri Network Logo" className="footer-logo" />
        <p className='text'>Terms & Privacy|2025 jasiri Network. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MediaAndFooter;