import React, { useEffect, useRef, useState } from "react";
import "./Career.css";

/*
  Careers.jsx
  - Application form posts FormData { name, email, role, resume(file), message } to /api/careers/apply
  - Testimonials and openings are local arrays — replace with API calls if needed
*/




function Careers() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef(null);

  const ROLE_PLACEHOLDER_TEXT = "e.g. Frontend Intern";
  const MESSAGE_PLACEHOLDER_TEXT = "Write a short message...";

  const [rolePlaceholder, setRolePlaceholder] = React.useState("");
  const [messagePlaceholder, setMessagePlaceholder] = React.useState("");

  function handleRoleFocus() {
  if (!form.role) setRolePlaceholder(ROLE_PLACEHOLDER_TEXT);
}
function handleRoleBlur() {
  if (!form.role) setRolePlaceholder("");
}
function handleMessageFocus() {
  if (!form.message) setMessagePlaceholder(MESSAGE_PLACEHOLDER_TEXT);
}
function handleMessageBlur() {
  if (!form.message) setMessagePlaceholder("");
}


  // Sample openings (replace with API data if you have backend)
  const openings = [
    {
      id: "intern-frontend-001",
      title: "Frontend Intern (React)",
      type: "Internship",
      duration: "6 months",
      location: "On-site (Indore)",
      stipend: "Paid",
      desc: "Work with the frontend team to build responsive React apps and UIs.",
    },
    {
      id: "se-002",
      title: "Software Engineer - Backend",
      type: "Full-time",
      duration: "N/A",
      location: "Remote / On-site",
      stipend: "Competitive",
      desc: "Design and implement APIs, microservices and DB schemas.",
    },
    {
      id: "ml-intern-003",
      title: "ML Intern",
      type: "Internship",
      duration: "3-6 months",
      location: "On-site (Indore)",
      stipend: "Paid",
      desc: "Assist on ML model experiments and data pipelines.",
    },
  ];

  // Testimonials sample
  const testimonials = [
    {
      name: "Sakshi Verma",
      role: "Ex-ML Intern",
      quote:
        "Interning at Detagenix gave me real projects, mentorship and an opportunity to ship code. Highly recommended!",
    },
    {
      name: "Rohit Sharma",
      role: "Full Stack Dev",
      quote:
        "Great culture and rapid learning. The team supported my growth and gave me responsibility early on.",
    },
    {
      name: "Meera Patel",
      role: "Product Intern",
      quote:
        "Hands-on mentorship and challenging tasks. Portfolio-level work and real product impact.",
    },
  ];

  // IntersectionObserver to reveal parts
  useEffect(() => {
    const els = document.querySelectorAll(".care-fade");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
  let current = 0;
  const slides = document.querySelectorAll(".testi-item");
  const dots = document.querySelectorAll(".carousel-dot");
  const carousel = document.querySelector(".testi-carousel");

  if (!carousel || slides.length === 0) return;

  function showSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  let intervalId;

  // Start auto-slide
  const startCarousel = () => {
    if (!intervalId) intervalId = setInterval(nextSlide, 4000);
  };

  // Stop auto-slide
  const stopCarousel = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  // Start immediately
  showSlide(current);
  startCarousel();

  // ✅ Pause on hover
  carousel.addEventListener("mouseenter", stopCarousel);
  carousel.addEventListener("mouseleave", startCarousel);

  // ✅ Dot click navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopCarousel();
      current = index;
      showSlide(current);
      startCarousel();
    });
  });

  // ✅ Cleanup
  return () => {
    stopCarousel();
    carousel.removeEventListener("mouseenter", stopCarousel);
    carousel.removeEventListener("mouseleave", startCarousel);
    dots.forEach((dot, index) =>
      dot.removeEventListener("click", () => showSlide(index))
    );
  };
}, []);


  function handleChange(e) {
  const { name, value } = e.target;
  setForm((s) => ({ ...s, [name]: value }));

  // if user types into role/message, hide placeholder
  if (name === "role") {
    if (value) setRolePlaceholder("");
    else if (document.activeElement.id === "role") setRolePlaceholder(ROLE_PLACEHOLDER_TEXT);
  }
  if (name === "message") {
    if (value) setMessagePlaceholder("");
    else if (document.activeElement.id === "message") setMessagePlaceholder(MESSAGE_PLACEHOLDER_TEXT);
  }
}


  function handleFile(e) {
    setResumeFile(e.target.files[0] ? e.target.files[0] : null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.role) {
      setError("Please fill name, email and role you're applying for.");
      return;
    }
    if (!resumeFile) {
      setError("Please upload your resume (PDF/DOC).");
      return;
    }

    setUploading(true);

    // Build FormData for backend
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("role", form.role);
    fd.append("message", form.message);
    fd.append("resume", resumeFile);

    try {
      // Example POST — replace URL with your backend endpoint
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Upload failed");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", role: "", message: "" });
      setResumeFile(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      setError(err.message || "Submission failed. Try again later.");
    } finally {
      setUploading(false);
      // auto-hide success after 4s
      setTimeout(() => setSubmitted(false), 4000);
    }
  }

  return (
    <main className="careers-page">
      <header className="care-hero care-fade">
        <div className="container">
          <h1 className="section-title">Careers & Internships</h1>
          <p className="lead">
            Join Detagenix — we hire curious problem solvers. Explore our
            openings below or apply directly with your resume.
          </p>
          <p style={{ marginTop: 16 }}>
            <a href="#openings" className="btn btn-light btn-lg text-primary">
              View Openings
            </a>{" "}
            <a href="#apply" className="btn btn-outline-light btn-lg">
              Apply Now
            </a>
          </p>
        </div>
      </header>

      <section id="openings" className="openings container care-fade">
        <h2 className="section-subtitle">Current Openings</h2>

        <div className="row g-4">
          {openings.map((job) => (
            <div className="col-md-6" key={job.id}>
              <article className="job-card">
                <div className="job-head">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <p className="job-desc">{job.desc}</p>
                <ul className="job-meta">
                  <li>📍 {job.location}</li>
                  <li>⏳ {job.duration}</li>
                  <li>💰 {job.stipend}</li>
                </ul>
                <div className="job-actions">
                  <a href={"#apply"} className="btn btn-primary btn-sm">
                    Apply
                  </a>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() =>
                      navigator.clipboard?.writeText(
                        `I am interested in ${job.title}. Please share the application link or details.`
                      )
                    }
                  >
                    Share
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="apply-section container care-fade">
        <h2 className="section-subtitle">Apply / Submit Resume</h2>

        <div className="row g-4">
          <div className="col-lg-6">
            <form className="apply-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className="form-group">
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  type="email"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-group">
  <input
    id="role"
    name="role"
    value={form.role}
    onChange={handleChange}
    onFocus={handleRoleFocus}
    onBlur={handleRoleBlur}
    className="form-control"
    placeholder={rolePlaceholder}
    required
  />
  <label htmlFor="role">Role Applying For</label>
</div>

<div className="form-group">
  <textarea
    id="message"
    name="message"
    rows="4"
    value={form.message}
    onChange={handleChange}
    onFocus={handleMessageFocus}
    onBlur={handleMessageBlur}
    className="form-control"
    placeholder={messagePlaceholder}
  />
  <label htmlFor="message">A short message (optional)</label>
</div>


              <div className="form-group file-group">
                <input
                  ref={fileRef}
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFile}
                  className="file-input"
                />
                <label htmlFor="resume" className="file-label">
                  {resumeFile ? resumeFile.name : "Upload Resume (PDF / DOC)"}
                </label>
                {/* <small className="form-text">
                  Max size 5MB. We accept PDF, DOC, DOCX.
                </small> */}
              </div>

              {error && <div className="alert alert-danger mt-2">{error}</div>}
              {submitted && (
                <div className="alert alert-success mt-2">Application sent — thank you!</div>
              )}

              <button className="btn btn-primary w-100" type="submit" disabled={uploading}>
                {uploading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

          <div className="col-lg-6">
            <div className="why-apply-card glass-card p-4">
              <h3>Why intern / work at Detagenix?</h3>
              <ul>
                <li>Real projects, mentorship, and certificates</li>
                <li>Competitive stipends for interns</li>
                <li>Collaborative learning-first culture</li>
                <li>Opportunity to convert to full-time roles</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                <strong>Tip:</strong> Attach a short note with your application describing a project you've built or a GitHub link.
              </p>
            </div>

            <div className="testimonials mt-4">
  <h4>What Our Interns Say</h4>

  <div className="testi-carousel">
    {testimonials.map((t, i) => (
      <div className="testi-item" key={i}>
        <blockquote className="testi-card">
          <p>“{t.quote}”</p>
          <footer>
            — <strong>{t.name}</strong>, <span>{t.role}</span>
          </footer>
        </blockquote>
      </div>
    ))}
  </div>
</div>
<div className="carousel-dots">
  {testimonials.map((_, i) => (
    <span key={i} className="carousel-dot"></span>
  ))}
</div>


          </div>
        </div>
      </section>

      <footer className="care-footer care-fade">
        <div className="container text-center">
          <p>© 2025 Detagenix — Building tomorrow's digital products today.</p>
        </div>
      </footer>
    </main>
  );
}

export default Careers;