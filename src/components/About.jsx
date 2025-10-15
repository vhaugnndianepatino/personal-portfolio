function About() {
  return (
    <>
    <section id="about" className="section-wrapper">
          <div className="about-grid reveal">
            <div className="about-left">
              <h2 className="section-heading">About Me</h2>
              <p>
                Outside of school, I work as a freelance makeup artist and run a small pastry business. 
                I love expressing myself through these passions and connecting with people through my work. 
                During my free time, I love traveling with my dog to different islands in the Philippines and 
                binge-watching my favorite series. These activities allow me to relax, explore new places, 
                and enjoy life beyond academics.
              </p>
              <blockquote>
                “Let all that you do be done in love.”
                <span>– 1 Corinthians 16:14</span>
              </blockquote>
              <a href="#showcase" className="btn btn-secondary">
                See Portfolio
              </a>
            </div>
              <div className="stats-grid">
                <div className="stat-card reveal">
                  <img src="./images\A_makeup.jpg" alt="Stat 1" className="stat-image" />
                </div>
                <div className="stat-card reveal">
                  <img src="./images\A_pastry.jpg" alt="Stat 2" className="stat-image" />
                </div>
                <div className="stat-card reveal">
                  <img src="./images\A_series.jpg" alt="Stat 3" className="stat-image" />
                </div>
                <div className="stat-card reveal">
                  <img src="./images\A_travel.jpg" alt="Stat 4" className="stat-image" />
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default About
