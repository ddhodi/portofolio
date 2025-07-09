import React from "react";
import BoxContact from "./box/BoxContact";
import ButtonCv from "./box/ButtonCv";
import ButtonEmail from "./box/ButtonEmail";
import ButtonIg from "./box/ButtonIg";
import ButtonLinkedin from "./box/ButtonLinkedin";
import ButtonGithub from "./box/ButtonGithub";
import ButtonWhatsapp from "./box/ButtonWhatsapp";
import TooltipUp from "./Tip/TooltipUp";
import TooltipRight from "./Tip/TooltipRight";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#242424] flex items-center justify-center h-screen font-chakra"
    >
      <h1 className="absolute mt-[-240px] text-[1.30rem] text-white tablet:mt-[-220px] tablet:text-4xl">
        Hire Me For Your Project
      </h1>
      <hr className="absolute border-t pr-[250px] mt-[-80px] border-[#494949] tablet:pr-[550px] laptop:pr-[750px]" />

      {/* Team Button */}
      <div className="absolute pt-72 tablet:pt-56 ">
        <ButtonCv
          label="Download CV"
          url="https://drive.google.com/file/d/12rsQlett04PqtqmorLWj7whnDsuJJwkv/view?usp=sharing"
        />
      </div>
      <div className="absolute pt-[140px] tablet:pt-6 tablet:ml-[240px]">
        <TooltipRight text="WhatsApp">
          <ButtonWhatsapp
            data-tooltip-target="tooltip-top"
            url="https://wa.me/6285161514085"
          />
        </TooltipRight>
      </div>
      <div className="absolute pt-[140px] ml-[-180px] tablet:pt-6 tablet:ml-[460px]">
        <TooltipRight text="Email">
          <ButtonEmail url="mailto:dhodisuryasayogo@gmail.com" />
        </TooltipRight>
      </div>
      <div className="absolute pt-4 tablet:pt-6 tablet:ml-[-220px]">
        <TooltipUp text="Linked-in">
          <ButtonLinkedin url="https://www.linkedin.com/in/dhodi-surya-sayogo-963a8a247/" />
        </TooltipUp>
      </div>
      <div className="absolute pt-4 ml-[-180px] tablet:pt-6 tablet:ml-[-450px]">
        <TooltipUp text="Instagram">
          <ButtonIg url="https://www.instagram.com/dhodisurya.s/profilecard/?igsh=ZTNhZ2VoMnBqZnhn" />
        </TooltipUp>
      </div>
      <div className="absolute pt-4 ml-[180px] tablet:pt-6 tablet:ml-[10px] ">
        <TooltipUp text="Github">
          <ButtonGithub url="https://github.com/ddhodi" />
        </TooltipUp>
      </div>
      <BoxContact />
    </div>
  );
};

export default Contact;
