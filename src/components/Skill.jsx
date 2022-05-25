/* eslint-disable */
import React from "react";

const Skill = ({ name, masteryOpposite, color }) => {
  return (
    <div className="flex justify-center items-center gap-1 flex-col mt-2">
      <h2 className="font-light text-white text-2xl">{name}</h2>

      <div
        className="h-4 w-[50%] rounded-r-lg mb-8"
        style={{
          background: `linear-gradient(to left, #0F2027 ${masteryOpposite}, ${color}  0%)`,
        }}
      />
    </div>
  );
};

export default Skill;
