
import React from 'react';
import './App.css';

function Projects() {
  const projects = [
    { title: 'Project One', description: 'Description of project one.', link: '#' },
    { title: 'Project Two', description: 'Description of project two.', link: '#' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
