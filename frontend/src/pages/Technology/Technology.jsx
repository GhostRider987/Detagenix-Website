import React, { useState, useEffect } from "react";
import "./Technology.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBrain,
  FaAws,
  FaDocker,
  FaChartBar,
  FaLock,
  FaLink,
  FaRobot,
  FaJava,
  FaPython,
} from "react-icons/fa";

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("genai");
useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const techCategories = [
    { id: "genai", name: "Generative AI" },
    { id: "fullstack", name: "Full Stack Development" },
    { id: "ai", name: "AI & ML" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "data", name: "Data Modeling" },
    { id: "blockchain", name: "Blockchain" },
    { id: "cybersecurity", name: "Cybersecurity & QA" },
  ];

  const categoryInfo = {
    genai: {
      title: "Generative AI",
      desc: "At Detagenix, we harness the power of Generative AI to create intelligent systems capable of learning, adapting, and generating content autonomously. From large language models to advanced neural networks, our AI solutions transform data into innovation — driving automation, efficiency, and creativity across industries.",
    },
    fullstack: {
      title: "Full Stack Development",
      desc: "We build robust, scalable, and high-performing web applications using modern front-end and back-end technologies. From UI design to database management, our full stack solutions ensure seamless user experiences, secure APIs, and optimized server performance using frameworks like React, Node.js, Java, and Python.",
    },
    ai: {
      title: "Artificial Intelligence & Machine Learning",
      desc: "Our AI & ML services focus on automation, data-driven decision making, and predictive analytics — empowering businesses to leverage data through NLP, computer vision, and custom model training.",
    },
    cloud: {
      title: "Cloud & DevOps",
      desc: "We utilize leading cloud platforms like AWS, Azure, and GCP to build resilient, scalable architectures. Our DevOps approach ensures continuous integration, deployment, and system optimization.",
    },
    data: {
      title: "Data Modeling & Analytics",
      desc: "We specialize in creating efficient data pipelines and analytics dashboards, transforming raw data into valuable business insights using ETL, BI, and visualization tools.",
    },
    blockchain: {
      title: "Blockchain Solutions",
      desc: "We design decentralized systems, smart contracts, and Web3 integrations that bring transparency, automation, and trust to digital ecosystems.",
    },
    cybersecurity: {
      title: "Cybersecurity & Quality Assurance",
      desc: "We safeguard digital infrastructure with proactive security measures, penetration testing, and robust QA automation to ensure software reliability.",
    },
  };

  const techStacks = [
    // Generative AI
    {
      category: "genai",
      title: "Artificial Intelligence",
      desc: "Build intelligent systems that can understand, reason, and learn from data using advanced neural networks.",
      icon: <FaRobot className="tech-icon" />,
    },
    {
      category: "genai",
      title: "Machine Learning",
      desc: "Leverage predictive modeling, recommendation systems, and data analytics to drive smart automation.",
      icon: <FaBrain className="tech-icon" />,
    },
    {
      category: "genai",
      title: "Deep Learning",
      desc: "Develop complex models for vision, speech, and generative tasks using deep neural architectures.",
      icon: <FaBrain className="tech-icon" />,
    },

    // Full Stack Development
    {
      category: "fullstack",
      title: "React.js",
      desc: "A powerful front-end library for building dynamic, responsive, and reusable UI components.",
      icon: <FaReact className="tech-icon" />,
    },
    {
      category: "fullstack",
      title: "Node.js",
      desc: "A fast, event-driven runtime for building scalable and efficient server-side applications.",
      icon: <FaNodeJs className="tech-icon" />,
    },
    {
      category: "fullstack",
      title: "Express.js",
      desc: "A minimal and flexible Node.js web framework for building APIs and backend services effortlessly.",
      icon: <FaDatabase className="tech-icon" />,
    },
    {
      category: "fullstack",
      title: "MongoDB",
      desc: "A flexible NoSQL database designed for handling unstructured and semi-structured data efficiently.",
      icon: <FaDatabase className="tech-icon" />,
    },
    {
      category: "fullstack",
      title: "SQL (MySQL / PostgreSQL)",
      desc: "Structured query databases for reliable data storage, relationships, and transaction management.",
      icon: <FaDatabase className="tech-icon" />,
    },
    {
      category: "fullstack",
      title: "Java",
      desc: "Develop enterprise-grade, secure, and scalable back-end applications using Java and Spring Boot.",
      icon: <FaJava className="tech-icon" />,
    },
    {
      category: "fullstack",
      title: "Python",
      desc: "Build robust and fast APIs using frameworks like Django and Flask for data-intensive applications.",
      icon: <FaPython className="tech-icon" />,
    },

    // AI
    {
      category: "ai",
      title: "Deep Learning",
      desc: "Neural networks for pattern recognition and automation.",
      icon: <FaBrain className="tech-icon" />,
    },
    {
      category: "ai",
      title: "Data Pipelines",
      desc: "Efficient workflows for ML data preparation and processing.",
      icon: <FaChartBar className="tech-icon" />,
    },

    // Cloud
    {
      category: "cloud",
      title: "AWS & Azure",
      desc: "Reliable cloud solutions for hosting, scaling, and security.",
      icon: <FaAws className="tech-icon" />,
    },
    {
      category: "cloud",
      title: "Docker & Kubernetes",
      desc: "Containerization and orchestration for modern deployment.",
      icon: <FaDocker className="tech-icon" />,
    },

    // Data
    {
      category: "data",
      title: "ETL Pipelines",
      desc: "Extract, transform, and load data efficiently for analytics.",
      icon: <FaDatabase className="tech-icon" />,
    },
    {
      category: "data",
      title: "Analytics & BI",
      desc: "Turn data into insights with interactive dashboards.",
      icon: <FaChartBar className="tech-icon" />,
    },

    // Blockchain
    {
      category: "blockchain",
      title: "Smart Contracts",
      desc: "Automate processes with secure blockchain logic.",
      icon: <FaLink className="tech-icon" />,
    },
    {
      category: "blockchain",
      title: "Web3 Integration",
      desc: "Seamless decentralized app (dApp) and crypto integration.",
      icon: <FaLink className="tech-icon" />,
    },

    // Cybersecurity
    {
      category: "cybersecurity",
      title: "Penetration Testing",
      desc: "Identify and fix vulnerabilities proactively.",
      icon: <FaLock className="tech-icon" />,
    },
    {
      category: "cybersecurity",
      title: "QA Automation",
      desc: "Ensure product quality through continuous testing.",
      icon: <FaLock className="tech-icon" />,
    },
  ];

  const filteredTechs =
    activeCategory === "genai"
      ? techStacks.filter((tech) => tech.category === "genai")
      : techStacks.filter((tech) => tech.category === activeCategory);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tech-page">
      <div className="container text-center fade-up">
        <h1 className="section-title">Technologies We Work With</h1>
        <p className="lead">
          At <span className="highlight">Detagenix</span>, we harness
          cutting-edge tools and technologies to deliver secure, scalable,
          and intelligent digital experiences.
        </p>
      </div>

      <div className="tech-filter-section fade-up">
        {techCategories.map((category) => (
          <button
            key={category.id}
            className={`tech-filter-btn ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {categoryInfo[activeCategory] && (
        <div className="tech-category-desc fade-up container text-center">
          <h2>{categoryInfo[activeCategory].title}</h2>
          <p>{categoryInfo[activeCategory].desc}</p>
        </div>
      )}

      <div className="tech-grid fade-up">
        {filteredTechs.map((tech, index) => (
          <div className="tech-card" key={index}>
            <div className="icon-wrapper">{tech.icon}</div>
            <h4 className="tech-title">{tech.title}</h4>
            <p className="tech-desc">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;