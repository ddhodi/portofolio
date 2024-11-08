import React from "react";
import { SKILLS } from "../../constants";
import TooltipUp from "./Tip/TooltipUp";

const IconSkills = () => {
  return (
    <div className="w-full md:w-full rounded-2xl flex justify-center items-center">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 items-center">
        {SKILLS.map((skill, index) => (
          <div key={index} className="">
            {/* Gambar dengan efek transisi hover */}
            <TooltipUp text={`${skill.title}`}>
              <img
                src={skill.image}
                className="cursor-pointer transform w-20 transition-transform duration-300 hover:scale-105 tablet:w-28"
              />
            </TooltipUp>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSkills;
