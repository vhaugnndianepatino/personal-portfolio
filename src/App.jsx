import { useEffect } from "react";
import { useState } from "react";


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
      <div className="hamburger" onclick="toggleMenu()">
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
            <a href="#experience">Experience</a>
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
              <img src="/images\A_makeup.jpg" alt="Stat 1" className="stat-image" />
            </div>
            <div className="stat-card reveal">
              <img src="/images\A_pastry.jpg" alt="Stat 2" className="stat-image" />
            </div>
            <div className="stat-card reveal">
              <img src="/images\A_series.jpg" alt="Stat 3" className="stat-image" />
            </div>
            <div className="stat-card reveal">
              <img src="/images\A_travel.jpg" alt="Stat 4" className="stat-image" />
            </div>
          </div>
        </div>
    </section>
    {/* EDUCATION SECTION */}
<section id="education" className="section-wrapper">
  <h2 className="section-heading">Education</h2>
  <div className="education-container">
    {(() => {
      const [activeTab, setActiveTab] = useState("bachelors");

      return (
        <>
          <div className="tabs">
            <button
              className={`tab-link ${activeTab === "bachelors" ? "active" : ""}`}
              onClick={() => setActiveTab("bachelors")}
            >
              Bachelors
            </button>
            <button
              className={`tab-link ${activeTab === "intermediate" ? "active" : ""}`}
              onClick={() => setActiveTab("intermediate")}
            >
              Intermediate
            </button>
            <button
              className={`tab-link ${activeTab === "schooling" ? "active" : ""}`}
              onClick={() => setActiveTab("schooling")}
            >
              Schooling
            </button>
          </div>

          <div
            id="bachelors"
            className={`tab-content ${activeTab === "bachelors" ? "active" : ""}`}
          >
            <h3>SR University</h3>
            <p>
              <strong>Program:</strong> Computer Science and Engineering
            </p>
            <p>
              <strong>Specialization:</strong> Artificial Intelligence and Machine Learning
            </p>
            <p>
              <strong>Years:</strong> 2022 - 2026
            </p>
            <p>
              <strong>GPA:</strong> 9.0 / 10.0
            </p>
          </div>

          <div
            id="intermediate"
            className={`tab-content ${activeTab === "intermediate" ? "active" : ""}`}
          >
            <h3>Winners Junior College</h3>
            <p>
              <strong>Stream:</strong> M.P.C (Maths, Physics, Chemistry)
            </p>
            <p>
              <strong>Marks:</strong> 913 / 1000
            </p>
          </div>

          <div
            id="schooling"
            className={`tab-content ${activeTab === "schooling" ? "active" : ""}`}
          >
            <h3>Vaagdevi High School</h3>
            <p>
              <strong>Board:</strong> S.S.C (Secondary School Certificate)
            </p>
            <p>
              <strong>GPA:</strong> 10.0 / 10.0
            </p>
          </div>
        </>
      );
    })()}
  </div>
</section>

    <section id="experience" className="section-wrapper">
      <h2 className="section-heading">Work Experience</h2>
      <div className="experience-grid">
        <div className="experience-card reveal">
          <img
            src="./images/monosage.jpeg"
            alt="Monosage Thought Works Logo"
            className="experience-logo"
          />
          <h3 className="experience-title">Web Developer Fellow</h3>
          <div className="company-details">
            <p className="experience-company">Monosage Thought Works</p>
            <span className="internship-type">On Site</span>
          </div>
          <p className="experience-duration">April 2024 - July 2024</p>
          <ul>
            <li>
              Engaged in hands-on exercises to solidify theoretical knowledge.
            </li>
            <li>
              Strengthened expertise in AI concepts through practical
              application.
            </li>
            <li>
              Explored various model selection techniques to identify optimal
              algorithms.
            </li>
          </ul>
        </div>
        <div className="experience-card reveal">
          <img
            src="./images/skill.jpeg"
            alt="SkillCraft Technology Logo"
            className="experience-logo"
          />
          <h3 className="experience-title">Machine Learning Intern</h3>
          <div className="company-details">
            <p className="experience-company">SkillCraft Technology</p>
            <span className="internship-type">Virtual</span>
          </div>
          <p className="experience-duration">July 2024 - Aug 2024</p>
          <ul>
            <li>
              Gained proficiency in TensorFlow, Keras, and other machine
              learning libraries.
            </li>
            <li>
              Applied deep learning algorithms to solve real-world AI problems.
            </li>
            <li>
              Developed and implemented models using Google Cloud AI tools.
            </li>
          </ul>
        </div>
        <div className="experience-card reveal">
          <img
            src="./images/aicte.png"
            alt="EduSkills Logo"
            className="experience-logo"
          />
          <h3 className="experience-title">Python Full Stack Developer</h3>
          <div className="company-details">
            <p className="experience-company">AICTE - EduSkills Internship</p>
            <span className="internship-type">Virtual</span>
          </div>
          <p className="experience-duration">Oct 2024 - Dec 2024</p>
          <ul>
            <li>
              Completed a 10-week intensive internship focused on Python Full
              Stack development.
            </li>
            <li>
              Gained hands-on experience in building and deploying web
              applications.
            </li>
            <li>
              Successfully developed projects, demonstrating proficiency in both
              frontend and backend technologies.
            </li>
          </ul>
        </div>
      </div>
    </section>
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
            onclick="openShowcaseTab(event, 'showcaseProjects')"
          >
            <i className="fas fa-code" /> Projects
          </button>
          <button
            className="showcase-tab"
            onclick="openShowcaseTab(event, 'showcaseCerts')"
          >
            <i className="fas fa-certificate" /> Certificates
          </button>
          <button
            className="showcase-tab"
            onclick="openShowcaseTab(event, 'showcaseSkills')"
          >
            <i className="fas fa-layer-group" /> Tech Stack
          </button>
        </div>
      </div>
      <div id="showcaseProjects" className="showcase-content">
        <div className="project-grid-container">
          <div className="project-card reveal">
            <div className="project-image">
              <img src="./images/car_rental.png" alt="Car Rental Website" />
            </div>
            <div className="project-content">
              <h3 className="project-title">PHP Car Rental Website</h3>
              <p className="project-description">
                A dynamic car booking platform using PHP and MySQL. Features
                user-friendly Browse, booking, and reservation management.
              </p>
              <div className="project-tech">
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Akhilanandateja/miles-smiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://miles-smiles.wuaze.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card reveal">
            <div className="project-image">
              <img
                src="./images/potato_leaf.jpg"
                alt="Potato Leaf Disease Detection"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">Potato Leaf Disease Detection</h3>
              <p className="project-description">
                A deep learning model using CNN and ResNet50 to classify potato
                leaf images as "Healthy" or "Late Blight" with high accuracy.
              </p>
              <div className="project-tech">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>CNN</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Akhilanandateja/Potato-Leaf-Disease-Detection"
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
              <img src="./images/restaurant.png" alt="WordPress Website" />
            </div>
            <div className="project-content">
              <h3 className="project-title">WordPress Restaurant Site</h3>
              <p className="project-description">
                A responsive website for a hotel, built with WordPress and
                custom HTML/CSS for a clean, intuitive user experience
                showcasing services.
              </p>
              <div className="project-tech">
                <span>WordPress</span>
                <span>HTML/CSS</span>
                <span>Canva</span>
              </div>
              <div className="project-links">
                <a
                  href="https://www.akhilsrestaurant.wuaze.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card reveal">
            <div className="project-image">
              <img
                src="./images/health_monitor.jpg"
                alt="Smart Wearable Health Monitor"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                Smart Wearable Health Monitoring System
              </h3>
              <p className="project-description">
                A system for real-time health metric tracking using Python and
                Scikit-learn, featuring a Flask web interface for data
                visualization.
              </p>
              <div className="project-tech">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>Flask</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Akhilanandateja/Smart-Wearable-Health-Monitor"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://smart-wearable-health-monitoring-system.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card reveal">
            <div className="project-image">
              <img
                src="./images/ecommerce.jpg"
                alt="Ecommerce Sentiment Analyzer"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">Ecommerce Review Analyzer</h3>
              <p className="project-description">
                Developed using Python and NLTK for accurate sentiment analysis,
                with a Flask and HTML web interface for interactive data
                visualization.
              </p>
              <div className="project-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>NLTK</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Akhilanandateja/Ecommerce-Review-Sentiment-Analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://ecommerce-r52a.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card reveal">
            <div className="project-image">
              <img
                src="./images/rock_paper.png"
                alt="Rock, Paper, Scissors Game"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">Rock, Paper, Scissors Game</h3>
              <p className="project-description">
                An interactive Rock, Paper, Scissors game built with a Python
                backend and a user-friendly web interface using the Streamlit
                library.
              </p>
              <div className="project-tech">
                <span>Python</span>
                <span>Streamlit</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Akhilanandateja/RockPaperScissorGame"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repo"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://rockpaperscissorsgame.pythonanywhere.com/"
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
            href="https://github.com/Akhilanandateja?tab=repositories"
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
              src="./images/monosage_certificate.png"
              alt="Monosage Thought Works Fellowship Certificate"
            />
            <div className="card-overlay">
              <p>Monosage Thought Works Fellowship</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/python full stack.png"
              alt="Python Full Stack Internship Certificate"
            />
            <div className="card-overlay">
              <p>Python Full Stack Developer Virtual Internship</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/cloud virtual.png"
              alt="Cloud Virtual Internship"
            />
            <div className="card-overlay">
              <p>Cloud Virtual Internship</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/skillcraft_certificate.png"
              alt="SkillCraft Technology Internship"
            />
            <div className="card-overlay">
              <p>SkillCraft Technology Internship</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/academic excellence.jpg"
              alt="Certification of Appreciation for Academic Excellence"
            />
            <div className="card-overlay">
              <p>Certification of Appreciation for Academic Excellence</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/aws academy cloud.png"
              alt="AWS Academy Cloud Architecting"
            />
            <div className="card-overlay">
              <p>AWS Academy Cloud Architecting</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/aws cloud data pipeline.png"
              alt="AWS Academy Cloud Data Pipeline Builder"
            />
            <div className="card-overlay">
              <p>AWS Academy Cloud Data Pipeline Builder</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/AWS Academy Cloud Foundations.png"
              alt="AWS Academy Cloud Foundations"
            />
            <div className="card-overlay">
              <p>AWS Academy Cloud Foundations</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/aws cloud web application.png"
              alt="AWS Academy Cloud Web Application Builder"
            />
            <div className="card-overlay">
              <p>AWS Academy Cloud Web Application Builder</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/CCNAv7 Switching, Routing, and Wireless Essentials.png"
              alt="CCNAv7 Switching, Routing, and Wireless Essentials"
            />
            <div className="card-overlay">
              <p>CCNAv7 Switching, Routing, and Wireless Essentials</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/CCNAv7 Introduction to Networks.png"
              alt="CCNAv7 Introduction to Networks"
            />
            <div className="card-overlay">
              <p>CCNAv7 Introduction to Networks</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/Problem Solving (Basic).png"
              alt="HackerRank Problem Solving (Basic)"
            />
            <div className="card-overlay">
              <p>HackerRank Problem Solving (Basic)</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/Problem Solving (Intermediate).png"
              alt="HackerRank Problem Solving (Intermediate)"
            />
            <div className="card-overlay">
              <p>HackerRank Problem Solving (Intermediate)</p>
            </div>
          </div>
          <div className="certificate-card reveal">
            <img
              src="./images/Natural Language Processing using Python.png"
              alt="Natural Language Processing using Python"
            />
            <div className="card-overlay">
              <p>Natural Language Processing using Python</p>
            </div>
          </div>
        </div>
      </div>
      <div id="showcaseSkills" className="showcase-content">
        <div className="skills-grid">
          <div className="skill-item reveal">
            <i className="fab fa-python" />
            <span>Python</span>
          </div>
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
            <i className="fas fa-server" />
            <span>Django</span>
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
            <i className="fas fa-cogs" />
            <span>CI/CD</span>
          </div>
          <div className="skill-item reveal">
            <i className="fab fa-wordpress" />
            <span>WordPress</span>
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
            <i className="fas fa-server" />
            <span>Apache</span>
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
            <i className="fas fa-book" />
            <span>Jupyter</span>
          </div>
        </div>
      </div>
    </section>
    <section id="connect" className="section-wrapper">
      <h2 className="section-heading">Get In Touch</h2>
      <div className="connect-wrapper reveal">
        <div className="connect-left">
          <h3>Let's build something great together.</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, and
            opportunities. Feel free to reach out through my social channels or
            by sending me a message.
          </p>
          <div className="social-links-connect">
            <a href="mailto:akhilanandatejasanga@gmail.com">
              <i className="fas fa-envelope" /> akhilanandatejasanga@gmail.com
            </a>
            <a href="tel:+918328632167">
              <i className="fas fa-phone" /> +91 8328632167
            </a>
            <a href="https://github.com/Akhilanandateja/" target="_blank">
              <i className="fab fa-github" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akhilanandateja/"
              target="_blank"
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a
              href="https://www.hackerrank.com/profile/Akhilanandateja"
              target="_blank"
            >
              <i className="fab fa-hackerrank" /> HackerRank
            </a>
            <a href="https://leetcode.com/u/Akhilanandateja/" target="_blank">
              <i className="fas fa-code" /> LeetCode
            </a>
          </div>
        </div>
        <div className="connect-right">
          <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required=""
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn">
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <p>Designed &amp; Built by Akhilanandateja Sanga</p>
  </footer>
</>

  )
}

export default App


