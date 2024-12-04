import React from 'react';
import Header from './component/header';
import About from './component/about';
import Projects from './component/project';
import Skills from './component/skills';
import Contact from './component/contact';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <div className="App">
         <div className="snowflakes">
        {/* Generating multiple snowflakes */}
        <div className="snowflake" style={{ '--random-x': Math.random(), '--random-rotation': Math.random() * 360 + 'deg' }}></div>
        <div className="snowflake" style={{ '--random-x': Math.random(), '--random-rotation': Math.random() * 360 + 'deg' }}></div>
        <div className="snowflake" style={{ '--random-x': Math.random(), '--random-rotation': Math.random() * 360 + 'deg' }}></div>
        <div className="snowflake" style={{ '--random-x': Math.random(), '--random-rotation': Math.random() * 360 + 'deg' }}></div>
        {/* Repeat this for more snowflakes */}
      </div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
