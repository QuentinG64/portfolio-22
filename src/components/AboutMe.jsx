/* eslint-disable */
import React, { useState } from "react";
import Navbar from "./Navbar";
import Bounce from "react-reveal/Bounce";
import Reveal from "react-reveal/Reveal";
import SkillsTech from "./SkillsTech";
import SkillsDesign from "./SkillsDesign";

const AboutMe = () => {
  const [skillTech, setSKillTech] = useState(true);

  const handleClickSkill = () => {
    setSKillTech(!skillTech);
  };

  return (
    <div name="About" className="h-screen w-screen pt-6">
      <div className="flex pt-[5%] items-center flex-col">
        <div className="text-main-3 text-4xl font-reg flex gap-1">
          <Bounce left cascade>
            <div>FEW </div>
          </Bounce>
          <Bounce right>
            <div>
              <span className="text-bg-2 font-bold text-4xl">WORDS</span>
            </div>
          </Bounce>
        </div>
        <div className="mt-2">
          <img
            src="./assets/images/Line2.png"
            height="30"
            width="150"
            alt="lineHome"
          />
        </div>
      </div>
      <div className="text-main-3 font-xlight text-2xl flex flex-row mt-20">
        <img
          className="absolute z-50 ml-24 mt-24"
          src="./assets/images/hero1.png"
          height="300"
          width="300"
          alt="heroQuentin"
        />

        <div className="flex-col w-[50%] ml-[656px] text-justify">
          <Reveal>
            <div className="">
              I'm a full-stack web developer, engineer and designer living in
              the Basque Country. Passionated about interface design, intuitive
              and dynamic user experiences, an efficient and maintainable code
              remain my highest priority.
              <div>
                <div>
                  {skillTech ? (
                    <SkillsTech change={handleClickSkill} />
                  ) : (
                    <SkillsDesign change={handleClickSkill} />
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
