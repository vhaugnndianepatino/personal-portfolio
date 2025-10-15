function Showcase() {
  return (
    <>
    <section id="showcase" className="section-wrapper">
      <div className="showcase-header reveal">
        <h2 className="section-heading">Portfolio Showcase</h2>
        <p>
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
        <div className="showcase-tabs">
          <button
            className="showcase-tab"
            onClick={(event) => openShowcaseTab(event, 'showcaseProjects')}
          >
            <i className="fas fa-code" /> Projects
          </button>
          <button
            className="showcase-tab"
            onClick={(event) => openShowcaseTab(event, 'showcaseCerts')}
          >
            <i className="fas fa-certificate" /> Certificates
          </button>
          <button
            className="showcase-tab"
            onClick={(event) => openShowcaseTab(event, 'showcaseSkills')}
          >
            <i className="fas fa-layer-group" /> Tech Stack
          </button>
        </div>
      </div>
      <div id="showcaseProjects" className="showcase-content">
        <div className="project-grid-container">
          <div className="project-card reveal">
            <div className="project-image">
              <img src="./images\Ab_portfolio.jpg" alt="Car Rental Website" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Personal Portfolio</h3>
              <p className="project-description">
                This project is a personal portfolio website created as part of my midterm 
                requirement. It showcases different aspects of my life, including my school, 
                family, friends, and hobbies, through a clean and interactive layout.
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Vhaugnn/Midterm-Project.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card reveal">
            <div className="project-image">
              <img
                src="./images\Ab_lvcis.jpg"
                alt="Potato Leaf Disease Detection"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">LVCIS</h3>
              <p className="project-description">
                La Verdad Club Integrated System (LVCIS) is a digital platform developed for 
                La Verdad Christian College (LVCC) to streamline and improve the management of
                student clubs and organizations.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Figma</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://drive.google.com/file/d/1aKMONo5eMZKYeWHLAL--sweQ-KrXfzUC/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card reveal">
            <div className="project-image">
              <img src="./images\Ab_dev.png" alt="WordPress Website" />
            </div>
            <div className="project-content">
              <h3 className="project-title">The Dev's Game</h3>
              <p className="project-description">
                This game is all about enhancing your programming skills by solving programming 
                problems faced in each obstacle course. It was chosen to be presented at La Verdad
                 Christian College Colloquium, Year 2022.
              </p>
              <div className="project-tech">
                <span>Aserprite</span>
                <span>Unity</span>
                <span>C#</span>
              </div>
              <div className="project-links">
                <a
                  href="https://drive.google.com/drive/folders/1t72SVf0EPKW5LLeOaCQ457Q1tn4c90v_?fbclid=IwAR0s31ZXmq1JG3e1l5mQMVp7ozxCeLkZTZnAR8oAQJgSeYDY71S_U1Hc9FE           "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="more-projects-container">
          <a
            href="https://github.com/vhaugnndianepatino?tab=repositories"
            className="more-projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View All Projects</span>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
      <div id="showcaseCerts" className="showcase-content">
        <div className="certifications-grid">
          <div className="certificate-card reveal">
            <img
              src="./images\Cert2.jpg"
              alt="Associate in Computer Technology"
            />
            <div className="card-overlay">
              <p>Associate in Computer Technology</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images\Cert4.jpg"
              alt="Student Government Leadership"
            />
            <div className="card-overlay">
              <p>Student Government Leadership</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images\Cert1.jpg"
              alt="Dean's Lister"
            />
            <div className="card-overlay">
              <p>Dean's Lister</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images\Cert5.jpg"
              alt="Work Immersion Completion"
            />
            <div className="card-overlay">
              <p>Work Immersion Completion</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src=".\images\Cert3.jpg"
              alt="Senior High School Graduate"
            />
            <div className="card-overlay">
              <p>Senior High School Graduate</p>
            </div>
          </div>        
        </div>
      </div>
      <div id="showcaseSkills" className="showcase-content">
        <div className="skills-grid">
          <div className="skill-item reveal">
            <i className="fab fa-java" />
            <span>Java</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-js-square" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-react" />
            <span>React</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-node-js" />
            <span>Node.js</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-python" />
            <span>Python</span>
          </div>
          <div className="skill-item reveal">
            <i className="fas fa-database" />
            <span>SQL</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-html5" />
            <span>HTML5</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-css3-alt" />
            <span>CSS3</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-php" />
            <span>PHP</span>
          </div>
          <div className="skill-item reveal">
            <i className="fas fa-code" />
            <span>C Language</span>
          </div>
          <div className="skill-item reveal">
            <i className="fas fa-laptop-code" />
            <span>C#</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-bootstrap" />
            <span>Bootstrap</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-git-alt" />
            <span>Git</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-github" />
            <span>GitHub</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-gitlab" />
            <span>GitLab</span>
          </div>
          <div className="skill-item reveal">
            <i className="fas fa-database" />
            <span>MySQL</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-aws" />
            <span>AWS</span>
          </div>
          <div className="skill-item reveal">
            <i className="fas fa-palette" />
            <span>Canva</span>
          </div>
          <div className="skill-item reveal">
            <i className="fas fa-code" />
            <span>VS Code</span>
          </div>
           <div className="skill-item reveal">
            <i className="fas fa-replit" />
            <span>Replit</span>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Showcase
