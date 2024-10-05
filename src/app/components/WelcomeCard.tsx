"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import styles from "./WelcomeCard.module.css"; // Importing the CSS module for styling

export default function WelcomeCard() {
  return (
    <motion.div
      className="card text-center rounded shadow p-4 mb-4"
      style={{ width: "80%", maxWidth: "800px", margin: "auto" }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }} // Hover animation
      transition={{ type: "spring", stiffness: 200, damping: 30 }} // Slower hover animation
    >
      <div className="card-body">
        {/* Introduction with waving hand emoji */}
        <h2 className="card-title display-4 fw-bold fs-3">
          Hi,{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h2>

        {/* Text with Gradient Mask */}
        <h3 className={`${styles.gradientText} display-5`}>I'm Basil</h3>

        {/* Profile Image */}
        <div className="my-4">
          <Image
            src="/images/dp.png" // Ensure this path is correct
            alt="Basil's Photo"
            width={150}
            height={150}
            className="rounded-circle"
          />
        </div>

        {/* Catchy Two-line Sentence */}
        <p className="card-text lead fs-5">
          I’m a web developer who creates stunning, responsive websites.
          <br />
          <span className="fs-4 fw-bold">
            Let’s build something amazing together!
          </span>
        </p>
      </div>
    </motion.div>
  );
}
