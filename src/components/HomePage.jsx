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
      <div className="flex pt-[15%] justify-center">
        <div className="text-main-2 text-4xl font-light">
          <Bounce left cascade>
            <div>
              Hello, I'm{" "}
              <span className="text-main-1 font-reg text-4xl">Quentin.</span>
            </div>
          </Bounce>
        </div>
      </div>

      <div className="text-main-2 text-6xl font-reg pt-8 flex justify-center flex-col text-center">
        <Fade bottom>
          <div>
            I'm a{" "}
            <span className="text-main-1 font-reg">
              full-stack web developer,
            </span>
          </div>
        </Fade>
        <div className="text-main-2 font-xlight text-3xl mt-4">
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
      <div className="mt-12 flex justify-center">
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
