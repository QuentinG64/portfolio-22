/* eslint-disable */
import React from "react";
import Typewriter from "typewriter-effect";
import Footer from "./Footer";
import ButtonContact from "./ButtonContact";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div name="Home" className="w-screen h-screen bg-bg-1">
      <Footer />
      <div className="md:flex sm:flex sm:flex-row lg:pt-[15%] md:pt-[45%] sm:pt-[67%] justify-center">
        <div className="text-main-2 font-light text-center flex flex-row">
          <Bounce left cascade>
            <div className="lg:text-4xl md:text-3xl">Hello, I'm</div>
          </Bounce>
          <Bounce right cascade>
            <div className="text-main-1 font-reg md:text-7xl sm:text-4xl pl-2">
              Quentin.
            </div>
          </Bounce>
        </div>
      </div>

      <div className="text-main-2 font-reg md:pt-8 sm:pt-2 flex justify-center flex-col text-center">
        <Fade bottom>
          <div className="lg:text-6xl md:text-4xl sm:text-xl">
            I'm a{" "}
            <span className="text-main-1 font-reg">
              full-stack web developer,
            </span>
          </div>
        </Fade>
        <div className="text-main-2 font-xlight lg:text-3xl md:text-2xl md:mt-4 sm:mt-1">
          <Typewriter
            options={{
              strings: [
                "cooking stuff on the internet.",
                "crafting digital experiences.",
                "in love with intuitive UX/UI.",
                "mixing art with code.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="mt-12 flex justify-center z-[999]">
        <Link
          to="About"
          activeClass="active"
          spy
          smooth
          isDynamic
          duration={1000}
        >
          <ButtonContact naming="Learn more" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
