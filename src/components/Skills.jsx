// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git & GitHub"];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
      <div className="Certifications">
        <h2>Certifications</h2>
        <a href = "https://www.coursera.org/account/accomplishments/verify/I3ZN73EYZNQT"> Social computing </a>
        

      </div>
    </section>
  );
}

/*

// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Git", level: 85 },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
      
        ))}
      </div>
    </section>
   
  );
}*/
