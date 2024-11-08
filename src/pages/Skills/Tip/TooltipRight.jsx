import React, { useState } from 'react';

const TooltipRight = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-max bg-black text-white text-sm p-2 rounded-md shadow-lg
                     md:left-1/2 md:top-auto md:bottom-full md:transform md:-translate-x-1/2 md:translate-y-0 md:mb-2">
          {text}
        </div>
      )}
    </div>
  );
};

export default TooltipRight;
