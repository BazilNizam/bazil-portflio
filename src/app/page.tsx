"use client";
import { useEffect } from "react";
import WelcomeCard from "./components/WelcomeCard";
import AboutMe from "./components/AboutMe";

export default function Home() {
  useEffect(() => {
    // Load Bootstrap JS
    typeof document !== "undefined" ? require("bootstrap") : null;
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
