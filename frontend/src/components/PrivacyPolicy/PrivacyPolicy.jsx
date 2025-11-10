import React from "react";
import "./PrivacyPolicy.css";
import { useEffect } from "react";  

const PrivacyPolicy = () => {
       useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p className="intro">
        At <strong>DETAGenix</strong>, we value your privacy and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
        website and services.
      </p>

      <section className="privacy-section">
        <h2>1. Consent</h2>
        <p>
          By using our website, you consent to our Privacy Policy and agree to its terms. If you do not agree, please
          discontinue using our site and services.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. Information We Collect</h2>
        <p>
          We collect personal details such as your name, company name, email address, and phone number when you
          contact us or register for our services. We may also collect usage data such as IP address, browser type,
          and visited pages for analytics and service improvement.
        </p>
      </section>

      <section className="privacy-section">
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide, operate, and improve our services</li>
          <li>To personalize your user experience</li>
          <li>To communicate updates, offers, and support</li>
          <li>To enhance website security and prevent fraud</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>4. Data Protection Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your data</li>
          <li>Request correction or deletion of inaccurate data</li>
          <li>Restrict or object to our processing of your data</li>
          <li>Request data portability to another organization</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:contact@detagenix.com">contact@detagenix.com</a>.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. Cookies</h2>
        <p>
          Like most websites, we use cookies to enhance your browsing experience by remembering your preferences and
          analyzing usage. You can disable cookies in your browser settings, but some features may not work properly.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Third-Party Services</h2>
        <p>
          We may use third-party tools such as Google Analytics to monitor site performance. These services may collect
          limited data according to their own privacy policies.
        </p>
      </section>

      <section className="privacy-section">
        <h2>7. Children’s Privacy</h2>
        <p>
          We do not knowingly collect information from children under 13. If your child has shared personal data, please
          contact us immediately and we will take appropriate action.
        </p>
      </section>

      <section className="privacy-section">
        <h2>8. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision
          date.
        </p>
      </section>

      <p className="contact">
        For any questions regarding our Privacy Policy, please email us at{" "}
        <a href="mailto:contact@detagenix.com">contact@detagenix.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
