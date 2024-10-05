'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isMobile, setIsMobile] = useState(false); // State to track mobile screen size

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Effect to check the screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this threshold as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Event listener for resizing

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Me</h1>
      <p className="text-center mb-4">📬 I would love to hear from you! 🌟</p>

      {/* Conditional rendering for social media links */}
      {isMobile ? (
        <div className="text-center mb-4">
          {/* Render social media links for mobile */}
          <a href="https://www.linkedin.com/in/bazilnizam/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/BazilNizam" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://x.com/BazilNizam" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          {/* Render separator line for mobile screens */}
          <hr className="my-4" style={{ borderTop: '1px solid #ccc' }} />
        </div>
      ) : (
        <motion.div
          className="card text-center rounded shadow p-4 mb-4"
          style={{ width: '80%', maxWidth: '800px', margin: 'auto' }} // Adjusted width
          whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-center mb-3">
              <a href="https://www.linkedin.com/in/bazilnizam/" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faLinkedin} size="3x" /> {/* Increased size */}
              </a>
              <a href="https://github.com/BazilNizam" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faGithub} size="3x" /> {/* Increased size */}
              </a>
              <a href="https://x.com/BazilNizam" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faTwitter} size="3x" /> {/* Increased size */}
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Contact Form */}
      {isMobile ? (
        <div className="mb-4 text-center">
          <h2 className="fw-bold">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {/* Render separator line for mobile screens */}
          <hr className="my-4" style={{ borderTop: '1px solid #ccc' }} />
        </div>
      ) : (
        <motion.div
          className="card text-center rounded shadow p-4 mb-4"
          style={{ width: '80%', maxWidth: '800px', margin: 'auto' }} 
          whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          <div className="card-body">
            <h2 className="card-title fw-bold">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}
