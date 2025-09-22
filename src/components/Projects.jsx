// src/components/Projects.jsx
import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

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
  <h3>To-Do List</h3>
  <p>A simple React To-Do List</p>
  <a href="https://github.com/Shashank-Thattai/todo">Github</a>
  <Link to="/todo" className="btn">Live Demo</Link>
</div>
       
        
        
        
        
       

      </div>
    </section>
  );
}
