import React from 'react';
import './App.css';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
