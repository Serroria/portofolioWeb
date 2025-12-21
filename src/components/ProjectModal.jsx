import React, { useState } from "react";
import "./ProjectModal.css";

const ProjectModel = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>

        <div className="carouusel-container">
          <button className="nav-btn left" onClick={prevImage}>
            ❮
          </button>
          <img
            src={project.images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="carousel-image"
          />
          <button className="nav-btn right" onClick={nextImage}>
            ❯
          </button>
        </div>

        {/* Informasi Projek */}
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        {/* Indikator (Opsional: titik-titik di bawah gambar) */}
        <div className="indicators">
          {project.images.map((_, idx) => (
            <span
              key={idx}
              className={currentIndex === idx ? "dot active" : "dot"}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModel;
