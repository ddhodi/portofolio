import React from "react";

const ButtonLinkedin = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-11 text-[#fbbd68] hover:text-[#286782] rounded-lg text-base font-bold flex justify-center items-center border-4 border-[] bg-[#242424] transition-all duration-500 focus:outline-none border-none shadow-[4px_4px_10px_#000,-4px_-4px_10px_#353535] hover:shadow-[4px_4px_10px_#000,-4px_-4px_10px_#353535,inset_-2px_-2px_4px_#353535,inset_2px_2px_4px_#000] tablet:w-20 tablet:h-14"
    ><span className="fab fa-linkedin-in"></span></a>
  );
};

export default ButtonLinkedin;
