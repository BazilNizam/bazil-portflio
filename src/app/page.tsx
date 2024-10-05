"use client"; // Ensure this is a client component
import { useEffect } from "react";
import WelcomeCard from "./components/WelcomeCard";
import AboutMe from "./components/AboutMe";

// Use the import statement instead of require
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

export default function Home() {
  useEffect(() => {
    // Bootstrap JavaScript is imported above, so no need to require it here
  }, []); // No additional actions are required here

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <WelcomeCard />
      </div>

      <AboutMe />
    </>
  );
}
