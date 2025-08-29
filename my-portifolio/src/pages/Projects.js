import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Renewit",
    description: "Build a React Admin Dashboard to track requests and products",
    image: "",
    github: "",
    demo: "",
    tab: "Tab 1"
  },
  {
    title: "Trivia",
    description: "A minfd stimulating game",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCH3LX6fQRqKCDOUaodgQYZGk3fGaUp_d0Gw&s",
    github: "https://github.com/esthernkariuki/Trivia-Game",
    demo: "https://trivia-game-five-zeta.vercel.app/",
    tab: "Tab 2"
  },
  {
    title: "Ankole",
    description: "Advertising",
    image: "https://cdn.prod.website-files.com/65aa1f78e2380ad0548de50d/65e5a29a2a2b1c4a493fff75_ankolegrill_Kilimani-Nights.jpg",
    github: "https://github.com/esthernkariuki/Ankole-Grill",
    demo: "https://ankole-grill.vercel.app/",
    tab: "Tab 3"
  },
  
];

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter(p => p.tab === activeTab);

  return (
    <section className="section projects-section">
      <h2 className="projects-title">Creating Change with Code</h2>
      <p className="projects-desc">
        Code is more than lines—it's the language of connection and creativity, transforming ideas into impact. 
        From brainstorming sessions to deployment day, every project has fueled my passion for innovation and teamwork.
      </p>
      <div className="projects-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setSelectedProject(null); }}
            className={activeTab === tab ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((proj, i) => (
          <div
            key={proj.title}
            className={`projects-card ${selectedProject === i ? "selected" : ""}`}
            onClick={() => setSelectedProject(selectedProject === i ? null : i)}
          >
            <img src={proj.image} alt={proj.title} />
            {selectedProject === i && (
              <div className="projects-popup">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="projects-buttons">
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">Visit Site</a>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}