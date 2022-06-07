/* eslint-disable */
import React from "react";
import Bounce from "react-reveal/Bounce";

const Skill = ({ name, masteryOpposite, percent }) => {
  return (
    <Bounce left cascade>
      <div className="flex justify-center gap-1 flex-col mt-2">
        <h2 className="font-light text-main-3 2xl:text-lg lg:text-sm md:text-xs sm:text-[0.7rem]">
          {name}
        </h2>
        <div
          className="h-4 w-full rounded-r-lg mb-1"
          style={{
            background: `linear-gradient(to left, #0F2027 ${masteryOpposite}, #04C2C9  0%)`,
          }}
        />
        <div className="absolute 2xl:pt-7 lg:pt-5 md:pt-4 sm:pt-4 pl-1 font-reg text-white lg:text-xs md:text-[10px] sm:text-[9px]">
          {percent}
        </div>
      </div>
    </Bounce>
  );
};

export default Skill;
