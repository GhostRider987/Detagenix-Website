import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../asset/logo.webp";
import avatar from "../../asset/Avatar.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="detagenix-navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Detagenix Logo" className="logo-image" /> 
          </Link>
        </div>

        {/* (only visible on mobile) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
  <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
  <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
  <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
  <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
  <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
  <li><Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link></li>
  <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
  <li><Link to="/policy" onClick={() => setIsOpen(false)}>Privacy Policy</Link></li>
</ul>
        {/* <div className="nav-auth"> <Link to="/login" className="user-btn"> <img src={avatar} alt="User" className="user-icon" /> </Link> </div> */}

      </div>
    </nav>
  );
};

export default Navbar;
