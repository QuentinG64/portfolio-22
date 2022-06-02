/* eslint-disable */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import LoaderAbout from "./LoaderAbout";
import Footer from "./Footer";

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
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <img
          className="mt-12"
          src="../src/assets/images/wordsTitle.svg"
          height="300"
          width="300"
          alt=""
        />
        <img
          src="../src/assets/images/Line1.png"
          height="300"
          width="300"
          alt=""
        />
        <div className="text-main-2 font-xlight text-2xl flex flex-row mt-20">
          <img
            className="absolute bottom-0 -z-50"
            src="../src/assets/images/hero.png"
            height="400"
            width="400"
            alt="heroQuentin"
          />
          <div className="flex-col w-full ml-64 mr-64 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            luctus rhoncus. Curabitur sem ante, sollicitudin quis enim nec,
            dictum consequat diam. <br /> <br /> Mauris iaculis sapien vitae
            elit fermentum, vel aliquam nisi luctus. Nam finibus maximus
            maximus. Nullam maximus massa nibh, elementum egestas nibh vulputate
            sit amet.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            luctus rhoncus. Curabitur sem ante, sollicitudin quis enim nec,
            dictum consequat diam.
            <div className="mt-10 text-main-1 w-[100%] flex items-center flex-col text-m">
              <div className="italic text-m font-xlight">
                "It is possible to fly without motors, but not without knowledge
                and skill."
              </div>
              <div className="text-sm mb-4 font-xlight">Wilbur Wright</div>
              <div className="font-light animate-bounce">↓ Discover mine ↓</div>
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
                  <Button onClick={techSkills}>TECH</Button>
                  <Button onClick={designSkills}>DESIGN</Button>
                  <Button>OTHER</Button>
                </ButtonGroup>
              </Box>
            </div>
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
