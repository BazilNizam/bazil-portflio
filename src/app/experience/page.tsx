"use client"; // Ensure this is a client component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUsers } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ExperiencePage() {
  const [isMobile, setIsMobile] = useState(false); // State to track mobile screen size

  // Effect to check the screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this threshold as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Event listener for resizing

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const experiences = [
    {
      title: "Frontend Engineer",
      company: "Tour Dubai, Dubai, UAE (Remote)",
      duration: "Jan 2023 - May 2023",
      description: [
        "🚀 Enhanced user experience by developing responsive web pages using React, TypeScript, and Bootstrap.",
        "⚡ Boosted web performance by optimizing speed and efficiency.",
        "🤝 Collaborated with cross-functional teams to improve the ERP system.",
        "📅 Participated in agile ceremonies including sprint planning and stand-ups.",
      ],
      icon: faBriefcase,
    },
    {
      title: "Software Developer Intern",
      company: "MakerGram, Kochi, India",
      duration: "Dec 2019 - Dec 2020",
      description: [
        "💻 Gained hands-on experience in web development (HTML, CSS, JavaScript).",
        "🔍 Acquired knowledge of new technologies, including React Native and Node.js.",
        "💡 Streamlined workflows by enhancing communication and collaboration.",
        "🛠️ Built knowledge in modern DevOps practices and testing automation.",
      ],
      icon: faBriefcase,
    },
    {
      title: "Volunteer Coordinator",
      company: "Maker Fest, Kochi, India",
      duration: "Dec 2019 – Jan 2020",
      description: [
        "📅 Organized event logistics for a large-scale tech festival.",
        "🤝 Collaborated with volunteers to facilitate workshops.",
        "🌐 Enhanced community involvement in technology and creativity.",
      ],
      icon: faUsers,
    },
    {
      title: "Students Associate",
      company: "Entrepreneurship Development Club, JDT ICAS, Calicut, India",
      duration: "Sep 2019 – Dec 2021",
      description: [
        "📚 Facilitated workshops and seminars on entrepreneurship.",
        "💡 Organized interactive sessions to inspire student innovation.",
      ],
      icon: faUsers,
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Experience</h1>
      <p className="text-center mb-4">🌟 Here’s a glimpse of my professional journey! 🚀</p>

      {/* Conditional rendering for experience cards */}
      {experiences.map((experience, index) =>
        isMobile ? (
          <div key={index} className="text-center mb-4">
            <h2 className="fw-bold fs-4">
              <FontAwesomeIcon icon={experience.icon} /> {experience.title}
            </h2>
            <h5 className="mb-2 text-muted">{experience.company}</h5>
            <p className="lead">{experience.duration}</p>
            <ul className="text-start">
              {experience.description.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
            {/* Render separator line for mobile screens */}
            <hr className="my-4" style={{ borderTop: '1px solid #ccc' }} />
          </div>
        ) : (
          <motion.div
            key={index}
            className="card text-center rounded shadow p-4 mb-4"
            style={{ width: "80%", maxWidth: "800px", margin: "auto" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <div className="card-body">
              <h2 className="card-title fw-bold fs-4">
                <FontAwesomeIcon icon={experience.icon} /> {experience.title}
              </h2>
              <h5 className="card-subtitle mb-2 text-muted">{experience.company}</h5>
              <p className="card-text lead">{experience.duration}</p>
              <ul className="text-start">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}
