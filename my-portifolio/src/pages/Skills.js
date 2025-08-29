import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Skills.css';

const skillsData = [
  { label: 'Frontend Web Development', value: 95 },
  { label: 'Backend Development', value: 95 },
  { label: 'Data analysis', value: 90 },
  { label: 'Product management', value: 90 },
  { label: 'Quality assurance', value: 90 },
  { label: 'Frontend Mobile Development', value: 90 },
  { label: 'UI/UX Design', value: 90 },
  { label: 'UX Research', value: 90 },
];

const SKILLS_PER_PAGE = 4;

export default function Skills() {
  const [startIndex, setStartIndex] = useState(0);
  const totalSkills = skillsData.length;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? totalSkills - SKILLS_PER_PAGE : prev - SKILLS_PER_PAGE
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + SKILLS_PER_PAGE >= totalSkills ? 0 : prev + SKILLS_PER_PAGE
    );
  };

  // Prepare visible slice with wrap-around
  const visibleSkills = [];
  for (let i = 0; i < SKILLS_PER_PAGE; i++) {
    visibleSkills.push(skillsData[(startIndex + i) % totalSkills]);
  }

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-summary">
        Summary of my strong technical skills
        <br />
        I want to use my skills to help the company grow and satisfy end users.
      </p>

      <div className="skills-cards">
        <button className="skills-arrow" onClick={handlePrev} aria-label="Previous skills">
          <FaChevronLeft />
        </button>

        <div className="skills-list">
          {visibleSkills.map((skill) => (
            <div key={skill.label} className="skills-card active">
              <div className="skills-progress">
                <svg width="100" height="100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#222"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#a259ff"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 42}
                    strokeDashoffset={2 * Math.PI * 42 * (1 - skill.value / 100)}
                    style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                  />
                  <text
                    x="50"
                    y="56"
                    textAnchor="middle"
                    fontSize="24"
                    fill="#fff"
                    fontWeight="bold"
                  >
                    {skill.value}%
                  </text>
                </svg>
              </div>
              <div className="skills-label">{skill.label}</div>
            </div>
          ))}
        </div>

        <button className="skills-arrow" onClick={handleNext} aria-label="Next skills">
          <FaChevronRight />
        </button>
      </div>

      <div className="skills-description">
        <h3>Creating Change with Code</h3>
        <p>
          Code is more than lines it's the language of connection and creativity,
          transforming ideas into impact. From brainstorming to deployment, every
          project has fueled my passion for innovation and teamwork.
          Together, we harness technology not just to solve problems, but to create
          experiences and drive change, one project at a time.
        </p>
      </div>
    </section>
  );
}
