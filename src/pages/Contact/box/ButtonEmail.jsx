import React from 'react';

const Button = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank" // Membuka di tab baru
      rel="noopener noreferrer"
      className='w-14 h-11 text-[#fbbd68] hover:text-[#fd3838] rounded-lg text-base font-bold flex justify-center items-center border-4 border-[] bg-[#242424] transition-all duration-500 focus:outline-none border-none shadow-[4px_4px_10px_#000,-4px_-4px_10px_#353535] hover:shadow-[4px_4px_10px_#000,-4px_-4px_10px_#353535,inset_-2px_-2px_4px_#353535,inset_2px_2px_4px_#000] tablet:w-20 tablet:h-14'
    ><i className="fa-regular fa-envelope"></i></a>
  );
};

export default Button;
