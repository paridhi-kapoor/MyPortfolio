import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="card">
          <img src="./assets/images/project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="card">
          <img src="./assets/images/project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
      </div>
    </section>
  );
}

export default Projects;
