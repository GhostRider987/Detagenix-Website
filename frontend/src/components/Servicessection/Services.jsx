import "./Services.css";

const Services = ({ service, title, desc, icon, link, onLearnMore }) => {
  // ✅ If the component receives a `service` object (Services Page)
  const cardData = service
    ? {
        title: service.title,
        desc: service.subtitle || service.desc,
        icon: service.icon,
        onClick: onLearnMore,
      }
    : {
        title,
        desc,
        icon,
        onClick: null,
      };

  return (
    <div className="service-card page-card">
  <div className="service-card-content">
    <img src={cardData.icon} alt={cardData.title} className="icon" />
    <h3>{cardData.title}</h3>
    <p>{cardData.desc}</p>
  </div>

  {/* Modal button ONLY in services page */}
  {cardData.onClick && (
    <button
      className="learn-more-btn"
      onClick={cardData.onClick}
    >
      Learn More →
    </button>
  )}

  {/* Link ONLY in homepage */}
  {!cardData.onClick && link && (
    <a className="learn-more" href={link}>
      Learn More →
    </a>
  )}
</div>
  );
};

export default Services;
