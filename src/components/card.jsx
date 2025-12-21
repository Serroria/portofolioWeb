import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";

const Card = ({ imgURL, title, desc, alt }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const project = [];

  const handleViewProject = () => {
    selectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex justify-between">
      <div className="card bg-base-100 w-70 shadow-sm">
        <figure>
          <img src={imgURL} alt={alt} className="h-48 w-96 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={handleViewProject(project)}
            >
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
