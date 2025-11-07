import React, { useState } from "react";
import { useEffect } from "react";
import Services from "../../components/Servicessection/Services";
import { servicespageData } from "../../data/servicespageData";
import ServiceModal from "../../components/ServicePage/ServiceModal";
import BookServiceForm from "../../components/ServicePage/BookServiceForm";
import "./Service.css";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  // ✅ OPEN MODAL
  const openModal = (service) => {
    console.log("Opening modal for:", service); // ✅ Debug
    setSelectedService(service);
    setOpenDetail(true);
  };

  // ✅ CLOSE MODAL
  const closeModal = () => {
    console.log("Closing modal");
    setOpenDetail(false);
    setSelectedService(null);
  };

  // ✅ OPEN FORM (BOOK SERVICE)
  const openBookingForm = () => {
    console.log("Open booking form");
    setOpenDetail(false);
    setOpenForm(true);
  };
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="services-section service-page">
      <h1>Our Services</h1>

      <div className="services-grid">
        {servicespageData.map((service) => (
          <Services
            key={service.id}
            service={service}
            onLearnMore={() => openModal(service)}
          />
        ))}
      </div>

      {/* ✅ MODAL SHOWING WHEN CLICKED */}
      {openDetail && selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={closeModal}
          openForm={openBookingForm}
        />
      )}

      {/* OPTIONAL – FORM MODAL */}
      {openForm && (
  <BookServiceForm
    serviceName={selectedService?.title}
    onClose={() => setOpenForm(false)}
  />
)}
    </section>
  );
};

export default Service;