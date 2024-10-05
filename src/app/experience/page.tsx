"use client"; // Ensure this is a client component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUsers } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Experience</h1>
      <p className="text-center mb-4">
        🌟 Here’s a glimpse of my professional journey! 🚀
      </p>

      {/* Professional Experience Card */}
      <motion.div
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
            <FontAwesomeIcon icon={faBriefcase} /> Frontend Engineer
          </h2>
          <h5 className="card-subtitle mb-2 text-muted">
            Tour Dubai, Dubai, UAE (Remote)
          </h5>
          <p className="card-text lead">Jan 2023 - May 2023</p>
          <ul className="text-start">
            <li>
              🚀 Enhanced user experience by developing responsive web pages
              using React, TypeScript, and Bootstrap.
            </li>
            <li>
              ⚡ Boosted web performance by optimizing speed and efficiency.
            </li>
            <li>
              🤝 Collaborated with cross-functional teams to improve the ERP
              system.
            </li>
            <li>
              📅 Participated in agile ceremonies including sprint planning and
              stand-ups.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Software Developer Intern Card */}
      <motion.div
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
            <FontAwesomeIcon icon={faBriefcase} /> Software Developer Intern
          </h2>
          <h5 className="card-subtitle mb-2 text-muted">
            MakerGram, Kochi, India
          </h5>
          <p className="card-text lead">Dec 2019 - Dec 2020</p>
          <ul className="text-start">
            <li>
              💻 Gained hands-on experience in web development (HTML, CSS,
              JavaScript).
            </li>
            <li>
              🔍 Acquired knowledge of new technologies, including React Native
              and Node.js.
            </li>
            <li>
              💡 Streamlined workflows by enhancing communication and
              collaboration.
            </li>
            <li>
              🛠️ Built knowledge in modern DevOps practices and testing
              automation.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Volunteering Work Card */}
      <motion.div
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
            <FontAwesomeIcon icon={faUsers} /> Volunteer Coordinator
          </h2>
          <h5 className="card-subtitle mb-2 text-muted">
            Maker Fest, Kochi, India
          </h5>
          <p className="card-text lead">Dec 2019 – Jan 2020</p>
          <ul className="text-start">
            <li>
              📅 Organized event logistics for a large-scale tech festival.
            </li>
            <li>🤝 Collaborated with volunteers to facilitate workshops.</li>
            <li>
              🌐 Enhanced community involvement in technology and creativity.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Students Associate Card */}
      <motion.div
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
            <FontAwesomeIcon icon={faUsers} /> Students Associate
          </h2>
          <h5 className="card-subtitle mb-2 text-muted">
            Entrepreneurship Development Club, JDT ICAS, Calicut, India
          </h5>
          <p className="card-text lead">Sep 2019 – Dec 2021</p>
          <ul className="text-start">
            <li>📚 Facilitated workshops and seminars on entrepreneurship.</li>
            <li>
              💡 Organized interactive sessions to inspire student innovation.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
