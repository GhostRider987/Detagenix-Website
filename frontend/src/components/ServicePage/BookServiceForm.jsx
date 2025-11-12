import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./BookServicesForm.css";

const BookServiceForm = ({ serviceName, onClose }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: serviceName || "",
    technology: "", // 👈 added field
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name || !form.email || !form.service || !form.technology) {
      setStatus("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/services/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Booking failed");

      setStatus("✅ Service booked successfully!");
      setForm({ name: "", email: "", service: "", technology: "" });
    } catch (err) {
      setStatus(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Book {serviceName}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />

          {/* 👇 New Technology Dropdown */}
          <select
            name="technology"
            value={form.technology}
            required
            onChange={handleChange}
          >
            <option value="">Select Technology</option>
            <option value="ReactJS">ReactJS</option>
            <option value="NodeJS">NodeJS</option>
            <option value="MERN Stack">MERN Stack</option>
            <option value="Python/Django">Python/Django</option>
            <option value="Java Spring Boot">Java Spring Boot</option>
            <option value="AWS Cloud">AWS Cloud</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="service"
            placeholder="Your Requirements"
            value={form.service}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Booking..." : "Submit"}
          </button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </div>,
    document.body
  );
};

export default BookServiceForm;
