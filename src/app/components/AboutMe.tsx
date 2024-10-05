"use client";
import { motion } from "framer-motion"; // Import Framer Motion

export default function AboutMe() {
  return (
    <motion.div
      className="card text-center rounded shadow p-4 mb-4"
      style={{ width: "80%", maxWidth: "800px", margin: "auto" }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }} // Hover animation
      transition={{ type: "spring", stiffness: 200, damping: 30 }} // Slower hover animation
    >
      <div className="card-body">
        {/* About Me Section */}
        <h2 className="card-title fw-bold fs-4">About Me</h2>
        <p className="card-text lead">
          🌟 Hi there! I'm Basil, a passionate Software Development student
          based in Toronto, Ontario. I'm on a journey to become the best version
          of myself in the tech world, exploring every opportunity to learn and
          grow. 🚀
          <br />
          <br />
          💻 My experience ranges from front-end development with HTML, CSS, and
          JavaScript to back-end technologies like Python and Node.js. I'm
          constantly pushing my limits to create stunning, user-friendly
          applications that can make a difference.
          <br />
          <br />
          🌈 I'm excited about the future and eager to contribute my skills to
          innovative projects while connecting with like-minded individuals.
          Together, let’s build amazing solutions that inspire and empower
          others! 💪✨
        </p>
      </div>
    </motion.div>
  );
}
