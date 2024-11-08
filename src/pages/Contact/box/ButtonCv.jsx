import React from 'react';

const ButtonCv = ({ label, url }) => {
  return (
    <a
      href={url}
      target="_blank" // Membuka di tab baru
      rel="noopener noreferrer" // Keamanan saat membuka tab baru
      // className="bg-yellow-500 text-black hover:text-white font-chakra font-bold md:py-3 md:px-10 py-3 px-6 text-sm rounded-2xl hover:bg-yellow-700 transition duration-300"
      className='w-52 h-14 md:w-64 md:h-14 text-[#fbbd68] hover:text-white rounded-lg text-base font-bold flex justify-center items-center border-4 border-[] bg-[#242424] transition-all duration-500 focus:outline-none border-none shadow-[4px_4px_10px_#000,-4px_-4px_10px_#353535] hover:shadow-[4px_4px_10px_#000,-4px_-4px_10px_#353535,inset_-2px_-2px_4px_#353535,inset_2px_2px_4px_#000]'
    >
      {label}
    </a>
  );
};

export default ButtonCv;
