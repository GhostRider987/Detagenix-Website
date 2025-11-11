import { Link } from "react-router-dom";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${BASE_URL}/api/contact`, formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ✅ LEFT SIDE — FULL CONTACT FORM */}
        <div className="footer-left">
          <div className="contact-form-dark">

            {!submitted ? (
              <>
                <h3 className="form-title">Share Your Thoughts</h3>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <h4>✅ Message Sent Successfully!</h4>
                {/* <p>We will contact you soon.</p> */}
              </div>
            )}

          </div>
        </div>

        {/* ✅ RIGHT SIDE */}
        <div className="footer-right">

          {/* TOP — BRANDING */}
          <div className="footer-brand">
            <h2>Detagenix</h2>
            <p>Your trusted partner in data-driven innovation and technology.</p>
          </div>

          {/* BOTTOM — LINKS + CONTACT */}
          <div className="footer-links-contact">

            {/* Quick Links */}
            <div className="footer-section quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/policy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><FaEnvelope className="footer-icon" /> contact@detagenix.com</li>
                <li><FaPhoneAlt className="footer-icon" /> +91 8607997261</li>
                <li><FaMapMarkerAlt className="footer-icon" /> Indore, India</li>
              </ul>

              <div className="footer-social">
                <a href="https://www.linkedin.com/company/detagenix/" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/detagenix/" target="_blank">
                  <FaInstagram />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Detagenix. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
