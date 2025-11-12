import React, { useState, useEffect } from "react";
import "./Industries.css";
import CyberImage from "../../asset/industries/cybersecurity.jpg";
import ecommerceImage from "../../asset/industries/ecommerce.jpg";
import edtechImage from "../../asset/industries/edtech.jpg";
import energyImage from "../../asset/industries/energy.jpg";
import financeImage from "../../asset/industries/finance.jpg"; 
import governanceImage from "../../asset/industries/governance.jpg";  
import healthcareImage from "../../asset/industries/healthcare.jpg";
import legalImage from "../../asset/industries/legal.jpg";
import manufacturingImage from "../../asset/industries/manufacturing.jpg";
import realestateImage from "../../asset/industries/realestate.webp";
import telecomImage from "../../asset/industries/telecom.jpg";
import transportImage from "../../asset/industries/transport.jpg";  


import {
  FaLock,
  FaShoppingCart,
  FaBook,
  FaBolt,
  FaUniversity,
  FaLandmark,
  FaHeartbeat,
  FaBalanceScale,
  FaIndustry,
  FaBuilding,
  FaPhoneAlt,
  FaTruck,
} from "react-icons/fa";

const Industries= () => {
  const [activeIndustry, setActiveIndustry] = useState("cybersecurity");

  const industries = [
    { id: "cybersecurity", name: "Cybersecurity", icon: <FaLock /> },
    { id: "ecommerce", name: "E-Commerce & Retail", icon: <FaShoppingCart /> },
    { id: "edtech", name: "EdTech", icon: <FaBook /> },
    { id: "energy", name: "Energy & Utility", icon: <FaBolt /> },
    { id: "finance", name: "Finance & Banking", icon: <FaUniversity /> },
    { id: "governance", name: "Governance", icon: <FaLandmark /> },
    { id: "healthcare", name: "Healthcare", icon: <FaHeartbeat /> },
    { id: "legal", name: "Legal & Professional Services", icon: <FaBalanceScale /> },
    { id: "manufacturing", name: "Manufacturing", icon: <FaIndustry /> },
    { id: "realestate", name: "Real Estate", icon: <FaBuilding /> },
    { id: "telecom", name: "Telecommunication", icon: <FaPhoneAlt /> },
    { id: "transport", name: "Transportation & Logistics", icon: <FaTruck /> },
  ];

  const industryData = {
    cybersecurity: {
      title: "Cybersecurity",
      desc: "Protecting digital ecosystems through AI-driven threat detection, secure infrastructure, and end-to-end encryption. We help enterprises mitigate risk, ensure compliance, and safeguard their digital presence.",
      image: CyberImage,
      subSections: [
        { title: "Threat Intelligence", desc: "Our advanced monitoring systems identify and neutralize potential cyber threats in real-time, ensuring uninterrupted operations and robust protection for mission-critical systems." },
        { title: "Data Protection", desc: "We implement industry-leading encryption, zero-trust architectures, and identity management to ensure sensitive data remains secure across networks, devices, and cloud environments." },
        { title: "Compliance", desc: "Our cybersecurity frameworks are aligned with global standards like ISO 27001 and GDPR, enabling you to achieve full compliance while maintaining operational efficiency." },
      ],
    },
    ecommerce: {
      title: "E-Commerce & Retail",
      desc: "Empowering online retail businesses with scalable web platforms, seamless payment systems, and intelligent customer experiences. We help brands optimize conversion and retention through data-driven solutions.",
      image: ecommerceImage,
      subSections: [
        { title: "Smart Storefronts", desc: "We build responsive, intuitive, and SEO-friendly storefronts that enhance product discoverability, drive engagement, and boost customer satisfaction across all devices." },
        { title: "Payment Integration", desc: "Integrating multiple payment gateways with advanced fraud detection ensures smooth, secure transactions and builds trust with your global customers." },
        { title: "Customer Analytics", desc: "Leverage AI and machine learning to understand buyer behavior, personalize recommendations, and increase lifetime customer value through actionable insights." },
      ],
    },
    edtech: {
      title: "EdTech",
      desc: "Transforming education through technology that enhances engagement, accessibility, and learning outcomes. Our solutions support institutions, tutors, and learners globally.",
      image: edtechImage,
      subSections: [
        { title: "LMS Development", desc: "We design robust Learning Management Systems that allow seamless course delivery, student tracking, and performance analytics for schools, universities, and corporates." },
        { title: "Gamified Learning", desc: "Our interactive, game-based modules enhance engagement and motivation, ensuring learners grasp concepts faster and retain information longer." },
        { title: "AI Tutoring", desc: "We integrate AI-driven personalized tutors that adapt to each learner’s pace, offering real-time feedback and content recommendations." },
      ],
    },
    energy: {
      title: "Energy & Utility",
      desc: "Driving digital transformation in energy with IoT, predictive analytics, and automation to ensure efficiency and sustainability.",
      image: energyImage,
      subSections: [
        { title: "Smart Grid Systems", desc: "Our IoT-enabled grids enable real-time monitoring and predictive maintenance, minimizing downtime and improving power distribution efficiency." },
        { title: "Energy Analytics", desc: "We harness data analytics to track energy usage, detect inefficiencies, and optimize consumption to reduce operational costs and waste." },
        { title: "Sustainability Tracking", desc: "Monitor and manage your carbon footprint effectively through AI-driven sustainability dashboards and emission control metrics." },
      ],
    },
    finance: {
      title: "Finance & Banking",
      desc: "Revolutionizing the financial sector with AI, blockchain, and digital banking solutions that ensure transparency, compliance, and customer trust.",
      image: financeImage,
      subSections: [
        { title: "FinTech Apps", desc: "We build secure, user-friendly financial applications for payments, lending, and investment management to enhance customer accessibility." },
        { title: "Blockchain Banking", desc: "Implement blockchain-powered systems that bring transparency and traceability to financial transactions while minimizing fraud risk." },
        { title: "Risk Analytics", desc: "Leverage predictive analytics to detect anomalies, assess credit risk, and strengthen fraud prevention mechanisms across financial networks." },
      ],
    },
    governance: {
      title: "Governance",
      desc: "Building smarter governance through digital transparency, data management, and secure citizen engagement systems.",
      image: governanceImage,
      subSections: [
        { title: "E-Governance Platforms", desc: "We create scalable digital platforms that connect citizens and governments, improving access to public services and policy transparency." },
        { title: "Policy Management", desc: "AI-driven decision systems help governments analyze social and economic data to develop efficient, data-backed policy solutions." },
        { title: "Data Compliance", desc: "We ensure citizen data remains protected through advanced encryption and compliance with national and international data protection laws." },
      ],
    },
    healthcare: {
      title: "Healthcare",
      desc: "Empowering healthcare providers with secure, interoperable, and AI-driven solutions for better patient outcomes.",
      image: healthcareImage,
      subSections: [
        { title: "EHR Systems", desc: "We design interoperable Electronic Health Records that centralize patient data securely, improving care coordination and accessibility." },
        { title: "Telemedicine", desc: "Our telehealth platforms allow remote consultations, prescriptions, and diagnostics, expanding healthcare reach to underserved regions." },
        { title: "Predictive Health AI", desc: "AI models analyze patient data to predict potential diseases, optimize treatment plans, and enhance clinical decision-making." },
      ],
    },
    legal: {
      title: "Legal & Professional Services",
      desc: "Transforming law firms and consultancies with digital case management, document automation, and analytics tools.",
      image:  legalImage,
      subSections: [
        { title: "Legal Tech Apps", desc: "Digitize your legal operations with platforms that simplify document access, task tracking, and client interactions securely." },
        { title: "Document Automation", desc: "Automate complex legal documentation to eliminate manual errors, increase speed, and enhance client satisfaction." },
        { title: "Client Portals", desc: "Provide clients with 24/7 access to case updates, invoices, and documents through encrypted online dashboards." },
      ],
    },
    manufacturing: {
      title: "Manufacturing",
      desc: "Modernizing factories through Industry 4.0 solutions — IoT, robotics, and predictive maintenance for smarter production lines.",
      image: manufacturingImage,
      subSections: [
        { title: "IoT Automation", desc: "We implement intelligent automation systems with real-time sensors to enhance precision, reduce downtime, and improve productivity." },
        { title: "Supply Chain Analytics", desc: "Gain real-time insights across supply chains to forecast demand, manage inventory efficiently, and prevent bottlenecks." },
        { title: "Predictive Maintenance", desc: "AI-powered predictive analytics detect anomalies early, preventing costly equipment failures and ensuring continuous operations." },
      ],
    },
    realestate: {
      title: "Real Estate",
      desc: "Digitally transforming property management, construction, and sales through immersive and data-driven platforms.",
      image: realestateImage,
      subSections: [
        { title: "Property Portals", desc: "Our smart listing systems feature 3D tours, location-based filters, and virtual assistance for better buyer engagement." },
        { title: "CRM Solutions", desc: "Empower your real estate business with lead tracking, pipeline management, and automated communication tools." },
        { title: "Market Analytics", desc: "Use data visualization tools to track property trends, assess market risks, and make informed investment decisions." },
      ],
    },
    telecom: {
      title: "Telecommunication",
      desc: "Optimizing connectivity and communication services with 5G, IoT, and cloud integration for a connected world.",
      image: telecomImage,
      subSections: [
        { title: "Network Optimization", desc: "We enhance network efficiency through real-time monitoring, bandwidth allocation, and predictive traffic control." },
        { title: "IoT Connectivity", desc: "Connect millions of devices securely using next-gen IoT networks that enhance user experience and operational intelligence." },
        { title: "5G Enablement", desc: "Support your 5G rollout with scalable infrastructure, low-latency connectivity, and intelligent edge computing solutions." },
      ],
    },
    transport: {
      title: "Transportation & Logistics",
      desc: "Accelerating logistics and mobility with real-time tracking, automation, and route optimization for global supply chains.",
      image: transportImage,
      subSections: [
        { title: "Fleet Management", desc: "Monitor vehicle health, routes, and driver performance using GPS and IoT-powered fleet management dashboards." },
        { title: "Route Optimization", desc: "Our AI algorithms calculate the most efficient delivery routes, reducing travel time, fuel costs, and environmental impact." },
        { title: "Warehouse Automation", desc: "Automated inventory systems, robotics, and predictive analytics optimize storage, reduce errors, and improve delivery cycles." },
      ],
    },
  };

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

  const data = industryData[activeIndustry];

  return (
    <div className="industries-page">
      <div className="container text-center fade-up">
        <h1 className="section-title">Industries We Serve</h1>
        <p className="lead">
          At <span className="highlight">Detagenix</span>, we help organizations across industries embrace technology, streamline operations, and innovate for the future.
        </p>
      </div>

      {/* Industry Filters */}
      <div className="industry-filter-section fade-up">
        {industries.map((ind) => (
          <button
            key={ind.id}
            className={`industry-btn ${activeIndustry === ind.id ? "active" : ""}`}
            onClick={() => setActiveIndustry(ind.id)}
          >
            {ind.icon} {ind.name}
          </button>
        ))}
      </div>

      {/* Industry Description */}
      {data && (
        <div className="industry-detail fade-up">
          <img src={data.image} alt={data.title} className="industry-img" />
          <div className="industry-content">
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
          </div>
        </div>
      )}

      {/* Sub-sections */}
      {data && (
        <div className="industry-subgrid fade-up">
          {data.subSections.map((sub, idx) => (
            <div className="industry-card" key={idx}>
              <h4>{sub.title}</h4>
              <p>{sub.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Why Choose Detagenix Section */}
      <div className="why-detagenix-section fade-up">
        <div className="container text-center">
          <h2 className="section-title">Why Choose <span className="highlight">Detagenix?</span></h2>
          <p className="lead">
            Partner with us to leverage cutting-edge innovation, deep industry expertise, 
            and technology that delivers measurable results. Our commitment goes beyond 
            development — we empower transformation, scalability, and long-term growth.
          </p>
        </div>

        <div className="why-grid container">
          <div className="why-card">
            <h4>🚀 End-to-End Digital Solutions</h4>
            <p>From strategy to deployment — we deliver full-cycle services across design, 
            development, cloud, AI, and analytics to create impactful digital ecosystems.</p>
          </div>

          <div className="why-card">
            <h4>💡 Innovation-Driven Approach</h4>
            <p>We integrate AI, IoT, and next-gen technologies to build smarter, 
            faster, and more adaptive systems that align with evolving market trends.</p>
          </div>

          <div className="why-card">
            <h4>🔒 Security & Compliance First</h4>
            <p>Every solution we deliver is engineered with enterprise-grade encryption, 
            privacy assurance, and compliance with industry standards like ISO and GDPR.</p>
          </div>

          <div className="why-card">
            <h4>🤝 Client-Centric Philosophy</h4>
            <p>Your success defines ours. We believe in transparent communication, 
            collaborative delivery, and post-launch support that ensures your product’s longevity.</p>
          </div>

          {/* <div className="why-card">
            <h4>⚙ Scalable & Future-Ready Architecture</h4>
            <p>Our cloud-native and modular architecture ensures your systems can handle 
            increased demand and easily adapt to new technologies or integrations.</p>
          </div>

          <div className="why-card">
            <h4>🌍 Global Expertise, Local Impact</h4>
            <p>With experience across diverse industries, we understand your market 
            and build solutions tailored to regional and global business challenges.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Industries;