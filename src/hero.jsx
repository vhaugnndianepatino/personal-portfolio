import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '/style.css';


function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="hero">
      <Particles
        id="particles-js"
        init={particlesInit}
        options={{
          background: { color: { value: "#0F172A" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#7c3aed" },
            links: { color: "#EC4899", distance: 120, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
      {/* Your other hero content here */}
    </div>
  );
}

export default Hero;


