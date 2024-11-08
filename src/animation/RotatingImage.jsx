import React, { useState } from 'react';

const FanControl = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <img
        src="https://png.pngtree.com/png-vector/20230506/ourmid/pngtree-black-3-propeller-fan-vector-png-image_7085616.png" // Ganti dengan URL gambar Anda
        alt="Baling-baling"
        className={`w-40 h-40 transition-transform duration-500 ${isSpinning ? 'animate-spin' : ''}`}
      />
      <button
        onClick={toggleSpin}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {isSpinning ? 'Trun Off' : 'Trun On'}
      </button>
    </div>
  );
};

export default FanControl;

