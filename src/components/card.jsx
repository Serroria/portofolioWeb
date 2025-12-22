import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";

const Card = ({ imgURL, title, desc, alt, data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const project = [];

  const handleViewProject = () => {
    setSelectedProject(data);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-row flex-wrap ">
      <div className="card bg-base-100 w-70 shadow-sm ">
        <figure>
          <img
            src={data.imgURL}
            alt={data.alt}
            className="h-48 w-96 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleViewProject}>
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Card;
