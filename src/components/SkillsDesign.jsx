/* eslint-disable */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import mySkills from "../data/skillsData";
import Skill from "./Skill";
import Fade from "react-reveal/Fade";

const SkillsDesign = () => {
  const navigate = useNavigate();
  const techSkills = () => {
    navigate("/aboutme/tech");
  };

  const designSkills = () => {
    navigate("/aboutme/design");
  };
  return (
    <div className="h-screen w-screen">
      <div>
        <Navbar />
      </div>
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
      <img
        className="absolute bottom-0 z-50"
        src="../src/assets/images/hero.png"
        height="400"
        width="400"
        alt="heroQuentin"
      />
      <Fade cascade>
        <div>
          {mySkills
            .filter(({ type }) => type === "design")
            .map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
        </div>
      </Fade>
      <div className="mt-10 text-main-1 w-[100%] flex items-center flex-col text-m">
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
            <div className="bg-main-1 text-white">
              <Button onClick={designSkills}>DESIGN</Button>
            </div>
            <div className="hover:bg-main-1 hover:text-white">
              <Button>OTHER</Button>
            </div>
          </ButtonGroup>
        </Box>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SkillsDesign;
