import React from "react";
import profilImage from "../../assets/img/profil.png";
import { ABOUT_TEXT } from "../../constants";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#242424] flex items-center justify-center h-screen"
    >
      <h1 className="absolute text-4xl font-chakra mt-[-450px] text-white MobileM:mt-[-360px] MobileM:text-3xl xl:mt-[-420px]">- About -</h1>
      <div className="border bg-white ml-16 mt-32 rounded-l-3xl MobileM:mt-28 tablet:mt-11 laptop:mt-20">
        <div className="flex">
          {/* Bagian Foto */}
          <div className="hidden items-center justify-center w-full tablet:flex tablet:w-1/2">
            <img
              src={profilImage}
              alt="Contoh Gambar"
              className="w-auto h-auto mt-0 mr-10 tablet:ml-5 tablet:w-screen tablet: tablet:mt-3"
            />
          </div>

          {/* Bagian Kalimat */}
          <div className="w-[80%] font-chakra ml-11 mb-6 mt-4 h-full mr-10 tablet:mt-4 tablet:ml-6 tablet:w-[60%]">
            <h2 className="text-2xl font-bold mb-3 MobileM:text-2xl">
              Hello, I'am Dhodi Surya Sayogo
            </h2>
            <p className="text-gray-700 text-base text-justify MobileM:mr-2">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
