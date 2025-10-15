import React from 'react'

function Home() {
  return (
    <>
    <section id="home" className="section-wrapper hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="intro-text">Hello, my name is</p>
          <h1 className="hero-name">Vhaugnn Diane Patiño.</h1>
          <h2 className="hero-tagline">Project Manager in the making</h2>
          <p className="hero-description">
            I’m a 3rd-year Bachelor of Science in Information Systems student at La Verdad Christian College,
            passionate about technology, creativity, and design. As an aspiring Project Manager, 
            I’m motivated to combine my creativity with organization and leadership to turn ideas into engaging 
            and well-executed projects.
          </p>
          <a
            href="https://drive.google.com/file/d/1sgzSBcBOvU33s6z1tsXiBuH8OX_2X1cs/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </a>
        </div>
        <div className="hero-image-container">
          <div className="orbiting-ring ring-1" />
          <div className="orbiting-ring ring-2" />
          <div className="orbiting-ring ring-3" />
          <img
            src="./images\vhaugnn.jpg"
            alt="Vhaugnn Diane Patiño"
            className="hero-image"
          />
        </div>
      </div>
      <div className="discover-more">
        <a href="#about">
          <span>Discover More</span>
          <i className="fas fa-chevron-down" />
        </a>
      </div>
    </section>
    </>
  )
}

export default Home
