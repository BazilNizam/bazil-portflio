'use client'; // Ensure this is a client component

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">Made with 🤍 by Basil</p>
        
        {/* Social Media Icons */}
        <div className="d-flex justify-content-center mb-2">
          <a href="https://www.linkedin.com/in/bazilnizam/" target="_blank" rel="noopener noreferrer" className="mx-1">
            <FontAwesomeIcon icon={faLinkedin} size="sm" className="text-white" />
          </a>
          <a href="https://github.com/BazilNizam" target="_blank" rel="noopener noreferrer" className="mx-1">
            <FontAwesomeIcon icon={faGithub} size="sm" className="text-white" />
          </a>
          <a href="https://x.com/BazilNizam" target="_blank" rel="noopener noreferrer" className="mx-1">
            <FontAwesomeIcon icon={faTwitter} size="sm" className="text-white" />
          </a>
        </div>
        
        {/* Muted Text */}
        <p className="text-white mb-0" style={{ fontSize: '0.5rem' }}>aka Bazil Nizam</p>
      </div>
    </footer>
  );
};

export default Footer;
