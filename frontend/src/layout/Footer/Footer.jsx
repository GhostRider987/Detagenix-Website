 import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Detagenix</h3>
          <p>Innovating with technology & delivering impactful solutions.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/careers">Careers</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@detagenix.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Address: Indore, India</p>
        </div>

      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Detagenix. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;