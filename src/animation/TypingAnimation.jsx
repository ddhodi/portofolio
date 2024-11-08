import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  // Create a ref for the element that will contain the typing text
  const el = useRef(null);

  useEffect(() => {
    // Initialize Typed.js on the ref element
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
    });

    // Clean up function to destroy the instance of Typed.js on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className="typing-text" />;
};

export default TypingAnimation;
