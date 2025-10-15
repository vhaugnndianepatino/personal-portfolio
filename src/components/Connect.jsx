function Connect() {
  return (
    <>
    <section id="connect" className="section-wrapper">
      <h2 className="section-heading">Get In Touch</h2>
      <div className="connect-wrapper reveal">
        <div className="connect-left">
          <h3>Let’s Connect!</h3>
          <p>
            I’d love to hear from you, whether it’s about a new project, a fun idea, 
            or just to say hi! I’m always open to learning, collaborating, and creating 
            something awesome together. Feel free to drop me a message or reach out on 
            any of my social channels.
          </p>
          <div className="social-links-connect">
            <a href="mailto:vhaugnndianepatino@gmail.com">
              <i className="fas fa-envelope" /> vhaugnndianepatino@gmail.com
            </a>
            <a href="tel:+639610172634">
              <i className="fas fa-phone" /> +63 9610172634
            </a>
            <a href="https://github.com/vhaugnndianepatino" target="_blank">
              <i className="fab fa-github" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vhaugnn-diane-patiño-578ba8284/"
              target="_blank"
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/_vhaugnn/"
              target="_blank"
            >
              <i className="fab fa-instagram" /> Instagram
            </a>
            <a href="https://www.facebook.com/vhaugnn" target="_blank">
              <i className="fab fa-facebook" /> Facebook
            </a>
          </div>
        </div>
        <div className="connect-right">
          <form action="https://formspree.io/f/xeorvkvd" method="POST">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Connect
