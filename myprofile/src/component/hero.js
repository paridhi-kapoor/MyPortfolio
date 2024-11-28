import React from 'react';
import './App.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm [Your Name]</h1>
        <p>A passionate Web Developer creating beautiful and functional experiences.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
