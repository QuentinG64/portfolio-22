/* eslint-disable */
import React from "react";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "./Footer";
import ButtonContact from "./ButtonContact";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const HomePage = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // const [linked, setLinked] = useState(true);

  // const handleLinked = () => {
  //   setLinked(!linked);
  // };

  return (
    <div name="Home" className="w-screen h-screen bg-bg-1">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#333", "#e8c547"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="flex pt-[15%] justify-center">
        <div className="text-main-2 text-4xl font-reg">
          <Bounce left cascade>
            <div>
              HELLO, I AM{" "}
              <span className="text-main-1 font-bold text-4xl">QUENTIN.</span>
            </div>
          </Bounce>
        </div>
      </div>

      <div className="text-main-2 text-6xl font-reg pt-4 flex justify-center flex-col text-center">
        <Fade bottom>
          <div>
            I AM A{" "}
            <span className="text-main-1 font-bold">
              FULL STACK WEB DEVELOPER,
            </span>
          </div>
        </Fade>
        <div className="text-main-2 font-xlight text-3xl">
          <Typewriter
            options={{
              strings: [
                "COOKING STUFF ON THE INTERNET.",
                "CRAFTING DIGITAL EXPERIENCES.",
                "IN LOVE WITH INTUITIVE UX/UI.",
                "MIXING ART WITH CODE.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          to="Contact"
          activeClass="active"
          spy
          smooth
          isDynamic
          duration={1000}
        >
          <ButtonContact naming="View my work" />
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
