import React, { useState } from 'react';
import './Techslider.css';
import { useEffect } from 'react';
// ✅ Import Icons
import { FaRobot, FaCloud, FaShieldAlt, FaMobileAlt, FaGlobe, FaChartLine, FaBolt, FaLink } from "react-icons/fa";


import { TbDeviceMobileCog } from "react-icons/tb";  // IoT icon

const Techslider = () => {
  const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    


  const techData = [
    {
      id: 1,
      icon: <FaRobot />,
      name: "Artificial Intelligence",
      description: "AI systems that can perform tasks requiring human intelligence."
    },
    {
      id: 2,
      icon: <FaLink />,

      name: "Blockchain",
      description: "Decentralized, distributed ledger technology for secure transactions."
    },
    {
      id: 3,
      icon: <FaCloud />,
      name: "Cloud Computing",
      description: "On-demand delivery of IT resources over the internet."
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      name: "Cybersecurity",
      description: "Protection of systems from digital attacks."
    },
    {
      id: 5,
      icon: <FaMobileAlt />,
      name: "Mobile Development",
      description: "Creating applications for mobile devices and platforms."
    },
    {
      id: 6,
      icon: <FaGlobe />,
      name: "Web Development",
      description: "Building and maintaining websites and web applications."
    },
    {
      id: 7,
      icon: <FaChartLine />,
      name: "Data Science",
      description: "Extracting insights from structured and unstructured data."
    },
    {
      id: 8,
      icon: <TbDeviceMobileCog />,
      name: "Internet of Things",
      description: "Network of physical objects embedded with sensors and software."
    }
  ];

  const duplicatedSlides = [...techData, ...techData];
  const slides = isMobile ? techData : [...techData, ...techData];

  return (
    <div className="tech-slider-container">
      <h1>Our Technology Stack</h1>

      {/* ✅ Show Swipe Hint on Mobile */}
      {isMobile && <p className="swipe-hint">← Swipe to explore more →</p>}
      <div
        className={`slider-container ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-track">
          {duplicatedSlides.map((tech, index) => (
            <div key={`${tech.id}-${index}`} className="slide">
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              <div className="tech-desc">{tech.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techslider;
