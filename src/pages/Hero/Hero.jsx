import React, { useState } from "react";
import ButtonLink from "./ButtonLink";
import TypingAnimation from "../../animation/TypingAnimation";

const Hero = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
  };
  return (
    <div id='home' className="bg-[#242424] h-screen overflow-hidden relative">
      {/* side left */}
      <div className="p-4 w-2/4 pt-60 leading-4 pl-6 MobileM:pl-10 tablet:pl-8 laptop:pl-32">
        <span className="font-nun text-shadow font-bold h-36 text-[80px] text-[#fcb96c] tablet:text-[110px] laptop:text-[150px]">
          HELLO.
        </span>
        <p className="font-chakra text-[16px] tablet:text-[22px] w-64 tablet:w-80 text-white leading-7 tablet:pt-6 m-0 pl-2">
          I'am Dhodi Surya Sayogo
          <br />
          <TypingAnimation />
        </p>
        <div className="pt-4 pl-2 tablet:pt-6">
          <ButtonLink
            label="Download CV"
            url="https://drive.google.com/file/d/10Q7dr2BYfmRmM9QOsLh9NqP_hmXPJ6ax/view?usp=sharing"
          />
        </div>
      </div>

      {/* side right */}
      <div className="hidden tablet:flex tablet:leading-4 tablet:float-right tablet:-mt-[332px] tablet:mr-11 laptop:mr-56">
        <div className="">
          <div className="pl-4">
            <img
              src="https://png.pngtree.com/png-vector/20230506/ourmid/pngtree-black-3-propeller-fan-vector-png-image_7085616.png" // Ganti dengan URL gambar Anda
              alt="Baling-baling"
              className={`w-60 h-60 transition-transform duration-500 ${
                isSpinning ? "animate-spin" : ""
              }`}
            />
          </div>

          <div className="tablet:pt-6 pt-4 pl-2 ">
            <button
              onClick={toggleSpin}
              className="w-80 h-14 md:w-64 md:h-14 text-[#fbbd68] rounded-lg text-base font-bold flex justify-center items-center border-4 border-[] bg-[#242424] transition-all duration-500 focus:outline-none border-none shadow-[4px_4px_10px_#000,-4px_-4px_10px_#353535] hover:shadow-[4px_4px_10px_#000,-4px_-4px_10px_#353535,inset_-2px_-2px_4px_#353535,inset_2px_2px_4px_#000]"
            >
              {isSpinning ? "Trun Off" : "Trun On"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
