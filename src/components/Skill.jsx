/* eslint-disable */
import React from "react";
import Bounce from "react-reveal/Bounce";

const Skill = ({ name, masteryOpposite }) => {
  return (
    <Bounce left cascade>
      <div className="flex justify-center gap-1 flex-col mt-2">
        <h2 className="font-light text-main-3 text-lg">{name}</h2>

        <div
          className="h-4 w-full rounded-r-lg mb-1"
          style={{
            background: `linear-gradient(to left, #0F2027 ${masteryOpposite}, #04C2C9  0%)`,
          }}
        />
      </div>
    </Bounce>
  );
};

export default Skill;
