"use client";
import { motion } from "framer-motion"; // Import Framer Motion
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to determine screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700); // Bootstrap's large breakpoint
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Shared content
  const sharedContent = (
    <>
      <h2 className="fw-bold fs-4">About Me</h2>
      <p className="lead">
        🌟 Hi there! I&apos;m Basil, a passionate Software Development student
        based in Toronto, Ontario. I&apos;m on a journey to become the best version
        of myself in the tech world, exploring every opportunity to learn and
        grow. 🚀
        <br />
        <br />
        💻 My experience ranges from front-end development with HTML, CSS, and
        JavaScript to back-end technologies like Python and Node.js. I&apos;m
        constantly pushing my limits to create stunning, user-friendly
        applications that can make a difference.
        <br />
        <br />
        🌈 I&apos;m excited about the future and eager to contribute my skills to
        innovative projects while connecting with like-minded individuals.
        Together, let&apos;s build amazing solutions that inspire and empower
        others! 💪✨
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
          style={{ width: "80%", maxWidth: "800px", margin: "auto" }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }} // Hover animation
          transition={{ type: "spring", stiffness: 200, damping: 30 }} // Slower hover animation
        >
          <div className="card-body">
            {sharedContent}
          </div>
        </motion.div>
      )}
    </div>
  );
}
