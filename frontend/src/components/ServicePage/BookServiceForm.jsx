import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./BookServicesForm.css";

const BookServiceForm = ({ serviceName, onClose }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: serviceName || "",
  });
  const [status, setStatus] = useState(""); // success/error message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    

    if (!form.name || !form.email || !form.service) {
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
      setForm({ name: "", email: "", service: "" });
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
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
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
