'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faShoppingCart, faFilm } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false); // State to track mobile screen size

  // Effect to check the screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this threshold as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Event listener for resizing

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const projects = [
    {
      title: 'Community Rentals',
      description: 'A website for renting items within the community.',
      tech: '🌐 Used React.js for a dynamic UI!',
      features: [
        '🔄 Utilized JSON server for backend data management.',
        '🎨 Integrated DaisyUI and Tailwind CSS for stylish design.',
        '📡 Implemented Axios for seamless API calls.',
      ],
      link: '#', // Add your link here
      icon: faLaptopCode,
    },
    {
      title: 'EasyClass',
      description: 'A Python extension to simplify repetitive coding tasks.',
      tech: '🛠️ Available on PyPI!',
      features: [
        '✨ Implemented a feature for repetitive print statements.',
        '📦 Successfully uploaded for public use.',
      ],
      link: 'https://github.com/BazilNizam/easyclass',
      icon: faLaptopCode,
    },
    {
      title: 'Nutrimet',
      description: 'An eCommerce platform for seamless shopping experiences.',
      tech: '🛒 Built with React!',
      features: [
        '📦 Added cart functionalities for user convenience.',
        '🔄 Leveraged JSON data to dynamically display products.',
      ],
      link: 'https://github.com/BazilNizam/nutrimet',
      icon: faShoppingCart,
    },
    {
      title: 'Netflix Clone',
      description: 'A clone of the popular streaming service.',
      tech: '🎬 Built with React and Axios!',
      features: [
        '🎥 Used API to fetch movie data.',
        '🎨 Styled with vanilla CSS for a sleek look.',
      ],
      link: 'https://netflix-clone-bz.netlify.app/',
      icon: faFilm,
    },
    {
      title: 'Amazon Clone',
      description: 'An eCommerce platform mimicking Amazon&apos;s functionality.', // Escaped single quote here
      tech: '🛍️ Built with React and rendering routing!',
      features: [
        '🔗 Used plain CSS for responsive design.',
        '📦 Implemented rendering routing for smooth navigation.',
      ],
      link: 'https://github.com/BazilNizam/Amazon-Clone',
      icon: faShoppingCart,
    },
    {
      title: 'Uber Clone',
      description: 'An Uber clone built using Next.js.',
      tech: '🚗 Built with Next.js and Firebase!',
      features: [
        '🔑 Implemented Firebase for secure authentication.',
        '🎨 Styled with Tailwind CSS for a responsive UI.',
      ],
      link: 'https://uber-clone-bazil.vercel.app/Login',
      icon: faLaptopCode,
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Projects</h1>
      <p className="text-center mb-4">🌟 Here are some of the projects I&apos;ve worked on! 🚀</p>

      {/* Conditional rendering for project cards */}
      {projects.map((project, index) => (
        isMobile ? (
          <div key={index} className="text-center mb-4">
            <h2 className="fw-bold fs-4">
              <FontAwesomeIcon icon={project.icon} /> {project.title}
            </h2>
            <p className="lead">
              {project.description}
              <br />
              <span className="text-muted">{project.tech}</span>
            </p>
            <ul className="text-start">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <Link href={project.link} passHref>
              <button className="btn btn-primary position-relative mb-3">View Project</button>
            </Link>
            {/* Render separator line for mobile screens */}
            <hr className="my-4" style={{ borderTop: '1px solid #ccc' }} />
          </div>
        ) : (
          <motion.div
            key={index}
            className="card text-center rounded shadow p-4 mb-4"
            style={{ width: '80%', maxWidth: '800px', margin: 'auto' }}
            initial={{ opacity: 0, y: 20 }} // Start from invisible and a bit lower
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
            whileHover={{ scale: 1.05 }} // Quick hover scale effect
            transition={{
              duration: 0.5, // Slower entrance animation duration
              ease: [0.25, 0.1, 0.25, 1], // Ease in-out for smoothness
            }}
            viewport={{ once: false }}
          >
            <div className="card-body">
              <h2 className="card-title fw-bold fs-4">
                <FontAwesomeIcon icon={project.icon} /> {project.title}
              </h2>
              <p className="card-text lead">
                {project.description}
                <br />
                <span className="text-muted">{project.tech}</span>
              </p>
              <ul className="text-start">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Link href={project.link} passHref>
                <button className="btn btn-primary position-relative float-end">View Project</button>
              </Link>
            </div>
          </motion.div>
        )
      ))}
    </div>
  );
}
