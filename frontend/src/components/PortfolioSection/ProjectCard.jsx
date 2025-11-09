import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioSection.css";

const ProjectCard = ({ project, onViewProject }) => {

  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x250/667eea/ffffff?text=Project+Image";
          }}
        />
        <div className="project-overlay">
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Technologies */}
        <div className="technologies-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

       <button 
  className="view-project-btn"
  onClick={() => onViewProject(project)}
>
  View Project →
</button>

      </div>
    </div>
  );
};

export default ProjectCard;
