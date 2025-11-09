import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projectsData";
import ProjectModal from "./ProjectModal"; // ✅ Add this import
import "./PortfolioSection.css";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null); // ✅ For modal
  const [openModal, setOpenModal] = useState(false);            // ✅ For modal

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI/ML" },
    { id: "cybersecurity", name: "Cyber Security"},
    { id: "blockchain", name: "Block Chain"},
  ];

  // ✅ Filter logic (unchanged)
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  // ✅ Open Modal
  const handleViewProject = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  // ✅ Close Modal
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

        {/* Filter Buttons */}
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

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewProject={handleViewProject}   // ✅ FIXED
            />
          ))}
        </div>
      </div>

      {/* ✅ Project Modal */}
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
