import React, { useState } from "react";
import "./Contactus.css";
import { useEffect } from "react";  

function Contactus() {
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section-dark">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-5 contact-info-dark">
            <h2>Let’s Connect</h2>
            <p className="text-light-muted">
              Have a project in mind or a question?  
              Reach out to our team — we’ll get back to you soon.
            </p>

            <ul className="list-unstyled mt-4">
              <li>
                <i className="bi bi-geo-alt-fill"></i> Indore, Madhya Pradesh, India
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <span> hr@detagenix.com</span>
              </li>

              
              <li className="social-links">
                <a
                  href="https://www.linkedin.com/company/detagenix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                >
                  <i className="bi bi-linkedin"></i>
                  <span> Detagenix</span>
                </a>
              </li>
              <li className="social-links">
                <a
                  href="https://www.instagram.com/detagenix?igsh=ajdmNGVvbG15YWE4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                >
                  <i className="bi bi-instagram"></i>
                  <span> Detagenix</span>
                </a>
              </li>

              <li>
                <i className="bi bi-telephone-fill"></i> +91 8607997261 || +91 7489834717
              </li>
            </ul>

            <div className="map-container mt-4">
              <iframe
                title="Detagenix Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.185020692897!2d75.90306007349591!3d22.72136342750494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2cc1c37e2c1%3A0x88be41cfe5eb3331!2sRupal%20Regency!5e0!3m2!1sen!2sin!4v1762178512148!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="col-lg-7">
            <div className="contact-form-dark p-4 p-md-5">
              {!submitted ? (
                <>
                  <h3 className="text-center mb-4">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        className="form-control"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center success-message">
                  <i className="bi bi-check-circle-fill text-success fs-1 mb-3"></i>
                  <h5 className="text-success fw-semibold">
                    Message Sent Successfully!
                  </h5>
                  <p className="text-light">
                    Our team will reach out to you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;