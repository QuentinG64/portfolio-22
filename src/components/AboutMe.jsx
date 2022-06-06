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
      <div className="flex 2xl:pt-[5%] lg:pt-[7%] md:pt-[10%] items-center flex-col">
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
      <div className="text-main-3 font-xlight 2xl:text-2xl xl:text-xl flex flex-row mt-20">
        <img
          className="absolute z-50 xl:ml-24 lg:ml-16 md:ml-12 mt-24 2xl:h-[300px] 2xl:w-[300px] lg:h-[220px] lg:w-[220px] md:h-[170px] md:w-[170px]"
          src="./assets/images/hero1.png"
          alt="heroQuentin"
        />

        <div className="flex flex-col w-38 pl-[38.5%] pr-20 text-justify">
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
