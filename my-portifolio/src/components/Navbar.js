import React from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ refs }) {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Esther</div>
      <ul className="nav-links">
        <li><button onClick={() => handleScroll(refs.homeRef)}>Home</button></li>
        <li><button onClick={() => handleScroll(refs.skillsRef)}>Skills</button></li>
        <li><button onClick={() => handleScroll(refs.projectsRef)}>Projects</button></li>
        <li><a href="/cv.pdf" target="_blank" rel="noopener noreferrer"><b>View CV</b></a></li>
        <li>
          <a href="/cv.pdf" download>
            <b>Download CV</b> <FaDownload />
          </a>
        </li>
        <li className="nav-icons">
          <a href="linkedin.com/in/esther-nyambura-kariuki" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/esthernkariuki" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </li>
      </ul>
      <button className="nav-btn" onClick={() => handleScroll(refs.connectRef)}>Let’s Connect</button>
    </nav>
  );
}