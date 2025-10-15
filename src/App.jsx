import { useEffect } from "react";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Connect from "./components/Connect";
import Showcase from "./components/Showcase";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
  <div id="particles-js" />
  <a href="#home" id="goToTopBtn" className="go-to-top-button">
    <i className="fas fa-arrow-up" />
  </a>
  <header id="navbar">
    <div className="nav-content">
      <a href="#home" className="nav-logo">
        Vhaugnn<b></b>
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#showcase">Portfolio</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
  
  <Home />
  <About />
  <Education />
  <Showcase />  
  <Connect />
  </main>
  <footer>
    <p>Thanks be to God</p>
  </footer>
</>

  )
}

export default App


