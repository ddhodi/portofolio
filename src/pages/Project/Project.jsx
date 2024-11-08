import React from "react";
import CustomTabPanel from "./Tabs/CustomTabPanel";

const Project = () => {
  return (
    <div
      id="project"
      className="bg-[#242424] flex items-center justify-center h-screen "
    >
      <h1 className="absolute text-4xl font-chakra text-white mt-[-400px] MobileM:mt-[-360px] MobileM:text-3xl">
        - Projects -
      </h1>
      <div className="border border-white mx-11 w-screen mt-24 h-96 bg-white rounded-3xl">
        <CustomTabPanel />
      </div>
    </div>
  );
};

export default Project;
