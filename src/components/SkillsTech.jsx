/* eslint-disable */
import React from "react";
import Button from "@mui/material/Button";
import mySkills from "../data/skillsData";
import Skill from "./Skill";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";

const SkillsTech = ({ change }) => {
  return (
    <div className="h-full w-full mt-12 flex">
      <div className="w-1/2">
        {mySkills
          .filter(({ type }) => type === "dev")
          .map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
      </div>
      <div>
        <div>
          <div className="mt-32 pl-48 text-bg-2 w-[100%] flex items-center flex-col text-l">
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
                <div className="bg-bg-2 text-white">
                  <Button>TECH</Button>
                </div>
                <div className="hover:bg-bg-2 hover:text-white">
                  <Button onClick={change}>DESIGN</Button>
                </div>
                <div className="hover:bg-bg-2 hover:text-white">
                  <Button>OTHER</Button>
                </div>
              </ButtonGroup>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTech;
