import React from "react";
import "./ServiceModal.css";
const ServiceModal = ({ service, onClose, openForm }) => {
  if (!service) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        <button className="close-btn" onClick={onClose}>×</button>

        {/* <img src={service.icon} className="modal-icon" /> */}

        <h2>{service.title}</h2>
        <p>{service.description}</p>

        <h3>Tech Stack</h3>
        <div className="tech-stack">
          {service.techStack.map((tech, i) => (
            <span key={i} className="tech-item">{tech}</span>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default ServiceModal;
