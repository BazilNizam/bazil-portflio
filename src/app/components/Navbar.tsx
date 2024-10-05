"use client"; // Ensure this is a client component

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                {loaded && (
                  <FontAwesomeIcon icon={faUser} className="me-2 fa-lg" />
                )}{" "}
                {/* Render icon only when loaded */}
                Basil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="https://drive.google.com/drive/u/1/folders/1yGaMrr9niuFslkUXZesJuwi3_DHw4uaR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
