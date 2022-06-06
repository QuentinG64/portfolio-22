/* eslint-disable */
import React from "react";
import Button from "@mui/material/Button";
import mySkills from "../data/skillsData";
import Skill from "./Skill";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";

const SkillsDesign = ({ change }) => {
  return (
    <div className="h-full w-full mt-12 flex">
      <div className="2xl:w-1/2 lg:w-2/3 md:w-3/4">
        {mySkills
          .filter(({ type }) => type === "design")
          .map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
      </div>
      <div>
        <div>
          <div className="xl:mt-32 lg:mt-24 md:mt-20 md:pl-16 xl:pl-32 lg:pl-12 text-bg-2 w-[100%]  flex items-center flex-col text-l">
            <div className="font-light animate-bounce">↓ Change me ↓</div>
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
                <div className="hover:bg-bg-2 hover:text-white transition-all ease-in duration-300">
                  <Button onClick={change}>TECH</Button>
                </div>
                <div className="bg-bg-2 text-white">
                  <Button>DESIGN</Button>
                </div>
              </ButtonGroup>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsDesign;
