import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projectsData";
import ProjectModal from "./ProjectModal"; // ✅ Add this import
import "./PortfolioSection.css";

const PortfolioSection = ({ limit }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI/ML" },
    { id: "cybersecurity", name: "Cyber Security"},
    { id: "blockchain", name: "Block Chain"},
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  // Apply limit if provided
  const projectsToDisplay = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Featured Projects</h2>
          <p>Check out our latest work and success stories</p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? "active" : ""}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projectsToDisplay.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewProject={handleViewProject}
            />
          ))}
        </div>
        <div className="portfolio-cta">
  {limit && (
    <Link to="/projects" className="btn-secondary">
      See All Projects → 
    </Link>
  )}
</div>

      </div>

      {openModal && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </section>
  );
};
export default PortfolioSection;
