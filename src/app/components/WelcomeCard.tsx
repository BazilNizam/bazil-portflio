'use client';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useEffect, useState } from 'react';
import styles from './WelcomeCard.module.css'; // Importing the CSS module for styling

export default function WelcomeCard() {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to determine screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap's large breakpoint
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Shared content
  const sharedContent = (
    <>
      <h2 className="fw-bold fs-1">
        Hi,<span role="img" aria-label="waving hand">👋</span>
      </h2>
      <h3 className={`${styles.gradientText}`}>
        I&apos;m Basil
      </h3>
      <div className="my-4">
        <Image
          src="/images/dp.png" // Ensure this path is correct
          alt="Basil's Photo"
          width={150}
          height={150}
          className="rounded-circle"
        />
      </div>
      <p className="lead fs-5">
        I&apos;m a web developer.
        <br />
        <span className="fs-4 fw-bold">
          Let&apos;s build something amazing together!
        </span>
      </p>
    </>
  );

  return (
    <div className="container my-4">
      {isMobile ? (
        <div className="text-center">
          {/* Mobile Layout */}
          {sharedContent}
        </div>
      ) : (
        // Card for larger screens
        <motion.div
          className="card text-center rounded shadow p-4 mb-4"
          style={{ width: '80%', maxWidth: '800px', margin: 'auto' }}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }} // Hover animation
          transition={{ type: 'spring', stiffness: 200, damping: 30 }} // Slower hover animation
        >
          <div className="card-body">
            {sharedContent}
          </div>
        </motion.div>
      )}
    </div>
  );
}
