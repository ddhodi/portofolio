import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger Menu Mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-transparent backdrop-blur fixed top-0 w-full z-10 p-5 mix-blend-difference">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-chakra font-bold ml-2 ">
          MyWebsite
        </div>
        <div className="md:hidden mr-6">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="font-medium w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex md:items-center w-full md:w-auto">
          <ul className="text-white md:flex md:space-x-6 mr-6">
            <li className="py-2 md:py-0">
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="font-chakra hover:text-gray-300"
              >
                Home
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#skills"
                onClick={(e) => handleScroll(e, "skills")}
                className="hover:text-gray-300"
              >
                Skills
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#project"
                onClick={(e) => handleScroll(e, "project")}
                className="hover:text-gray-300"
              >
                Projects
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="hover:text-gray-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Dropdown menu */}
      <div
        className={`${
          isOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
        } absolute top-full left-0 w-full bg-white/70 transition-all duration-300 ease-in-out overflow-hidden md:hidden`}
      >
        <ul className="text-black p-10 space-y-2 flex flex-col items-center justify-center">
          <li className="">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="block text-3xl font-bold font hover:text-gray-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="block text-3xl font-bold font hover:text-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="block text-3xl font-bold font hover:text-gray-700"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={(e) => handleScroll(e, "project")}
              className="block text-3xl font-bold font hover:text-gray-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="block text-3xl font-bold font hover:text-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
