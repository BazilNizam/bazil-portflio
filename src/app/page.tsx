"use client";
import { useEffect } from "react";
import WelcomeCard from "./components/WelcomeCard";
import AboutMe from "./components/AboutMe";

// Import Bootstrap CSS in the file where it's needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line

export default function Home() {
  useEffect(() => {
    // Load Bootstrap JS
    const loadBootstrap = async () => {
      if (typeof window !== "undefined") {
        await import("bootstrap"); // No need to assign it to a variable
      }
    };

    loadBootstrap();
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <WelcomeCard />
      </div>

      <AboutMe />
    </>
  );
}
