/* eslint-disable */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import LoaderAbout from "./LoaderAbout";
import Footer from "./Footer";
import Bounce from "react-reveal/Bounce";
import Reveal from "react-reveal/Reveal";

const AboutMe = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const navigate = useNavigate();
  const techSkills = () => {
    navigate("/aboutme/tech");
  };

  const designSkills = () => {
    navigate("/aboutme/design");
  };

  return loading ? (
    <LoaderAbout />
  ) : (
    <div name="About" className="h-screen w-screen">
      <div>
        <div className="flex pt-[5%] items-center">
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
              <div>FEW </div>
            </Bounce>
            <Bounce right>
              <div>
                <span className="text-main-1 font-bold text-4xl">WORDS.</span>
              </div>
            </Bounce>
          </div>
        </div>

        <div className="text-main-2 font-xlight text-2xl flex flex-row mt-20">
          <img
            className="relative bottom-0 z-50"
            src="./assets/images/hero.png"
            height="400"
            width="400"
            alt="heroQuentin"
          />

          <div className="flex-col w-full ml-64 mr-64 text-justify">
            <Reveal>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis luctus rhoncus. Curabitur sem ante, sollicitudin quis
                enim nec, dictum consequat diam. <br /> <br /> Mauris iaculis
                sapien vitae elit fermentum, vel aliquam nisi luctus. Nam
                finibus maximus maximus. Nullam maximus massa nibh, elementum
                egestas nibh vulputate sit amet.
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis luctus rhoncus. Curabitur sem ante, sollicitudin quis
                enim nec, dictum consequat diam.
                <div className="mt-10 text-main-1 w-[100%] flex items-center flex-col text-m">
                  <div className="italic text-m font-xlight">
                    "It is possible to fly without motors, but not without
                    knowledge and skill."
                  </div>
                  <div className="text-sm mb-4 font-xlight">Wilbur Wright</div>
                  <div className="font-light animate-bounce">
                    ↓ Discover mine ↓
                  </div>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "col",
                      alignItems: "center",
                      "& > *": {
                        m: 1,
                      },
                    }}
                  >
                    <ButtonGroup
                      variant="text"
                      aria-label="text button group"
                      color="inherit"
                      size="large"
                    >
                      <div className="hover:bg-main-1 hover:text-white">
                        <Button onClick={techSkills}>TECH</Button>
                      </div>
                      <div className="hover:bg-main-1 hover:text-white">
                        <Button onClick={designSkills}>DESIGN</Button>
                      </div>
                      <div className="hover:bg-main-1 hover:text-white">
                        <Button>OTHER</Button>
                      </div>
                    </ButtonGroup>
                  </Box>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
