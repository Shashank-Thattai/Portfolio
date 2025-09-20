// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A responsive portfolio built with React and CSS.</p>
          <a href="#" className="btn">GitHub</a>
          <a href="#" className="btn">Live Demo</a>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A responsive portfolio built with React and CSS.</p>
          <a href="#" className="btn">GitHub</a>
          <a href="#" className="btn">Live Demo</a>
        </div>
        
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A responsive portfolio built with React and CSS.</p>
          <a href="#" className="btn">GitHub</a>
          <a href="#" className="btn">Live Demo</a>
        </div>
        
        
       

      </div>
    </section>
  );
}
