import React from "react";
import IconSkills from "./IconSkills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-[#242424] flex items-center justify-center h-screen"
    >
      <h1 className="absolute text-4xl font-chakra text-white mt-[-400px] MobileM:mt-[-360px] MobileM:text-3xl">
        - Skills -
      </h1>
      <div className="border border-white mx-11 w-screen mt-24 h-96 flex justify-center items-center bg-white rounded-3xl">
        <IconSkills />
      </div>
    </div>
  );
};

export default Skills;
