import React, { useState } from "react";
import { PROJECTS } from "../../../constants";

const TabAssets = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const openModal = (index) => {
    setOpenModalIndex(index);
  };

  const closeModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="rounded-2xl MobileM:ml-3 MobileL:w-[250px] tablet:w-[600px] laptop:w-[850px]">
      <div className="grid grid-cols-2 gap-3 tablet:grid-cols-5 laptop:grid-cols-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="">
            {/* Gambar dengan efek transisi hover */}
            <img
              src={project.image}
              alt={`Gambar ${project.name}`}
              className="cursor-pointer rounded-2xl transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            />

            {/* Modal untuk setiap proyek */}
            {openModalIndex === index && (
              <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80 transform transition-transform duration-300 scale-95">
                  <h2 className="text-lg font-bold mb-4">
                    {project.title}
                  </h2>
                  <img src={project.image} className="" alt={`Gambar ${project.name}`} />
                  <hr className="absolute border-t pr-[270px] tablet:pr-[800px] mt-4 " />
                  <p className="mb-1 mt-5 text-justify">
                    {project.description}
                  </p>
                  {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
                      >
                        {tech}
                      </span>
                  ))}
                  <div className="flex mt-3 justify-end">
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Go to Website
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabAssets;
