/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Switch from "@mui/material/Switch";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ButtonContact from "./ButtonContact";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const HomePage = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const [linked, setLinked] = useState(true);

  const handleLinked = () => {
    setLinked(!linked);
  };

  console.log(linked);

  return (
    <div className="w-screen h-screen">
      <div className="absolute z-[999] bottom-0 right-0 mr-10 mb-10 text-main-1 font-bold">
        <Switch onClick={handleLinked} />
        {linked ? "BETTER WITH DOTS?" : "BETTER WITH LINKS?"}
      </div>
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
              value: ["#ffffff", "#333", "#03DAC6", "#E8C64C"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: linked,
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
              speed: 3,
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
      <div>
        <Navbar />
      </div>
      <div className="flex pt-[10%] items-center">
        <div>
          <img
            src="./assets/images/Line1.png"
            height="30"
            width="150"
            alt="lineHome"
          />
        </div>

        <div className="text-main-2 text-4xl font-reg pl-4 flex gap-1">
          <Bounce left cascade>
            <div>HELLO, I AM </div>
          </Bounce>
          <Bounce right>
            <div>
              <span className="text-main-1 font-bold text-4xl">QUENTIN.</span>
            </div>
          </Bounce>
        </div>
      </div>

      <div className="text-main-2 text-6xl font-reg pt-28 pl-40">
        <Fade bottom>
          <div>
            I AM A{" "}
            <span className="text-main-1 font-bold">CREATIVE CODER,</span>
          </div>
        </Fade>
        <div className="text-main-2 font-xlight text-3xl">
          <Typewriter
            options={{
              strings: [
                "MIXING ART WITH CODE.",
                "CRAFTING ORGANIC EXPERIENCES.",
                "EXPLORING BLOCKCHAIN TECH.",
                "SURFING WWW (world wide waves).",
                "COOKING STUFF ON THE INTERNET.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="mt-5 ml-40">
        <Link to="/contact">
          <ButtonContact naming="Contact me!" />
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
