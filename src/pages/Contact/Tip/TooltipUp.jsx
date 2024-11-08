import React, { useState } from "react";

const TooltipUp = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
      <div
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-sm p-2 rounded-md shadow-lg">
            {text}
          </div>
        )}
      </div>
  );
};

export default TooltipUp;