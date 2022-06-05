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
import Bounce from "react-reveal/Bounce";

const SkillsTech = () => {
  const navigate = useNavigate();
  const techSkills = () => {
    navigate("/aboutme/tech");
  };

  const designSkills = () => {
    navigate("/aboutme/design");
  };
  return (
    <div className="h-screen w-screen">
      <div></div>
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
              <div>TE</div>
            </Bounce>
            <Bounce right>
              <div>
                <span className="text-main-1 font-bold text-4xl">CH.</span>
              </div>
            </Bounce>
          </div>
        </div>
      </div>

      <div>
        {mySkills
          .filter(({ type }) => type === "dev")
          .map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
      </div>
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
            <div className="bg-main-1 text-white">
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SkillsTech;
