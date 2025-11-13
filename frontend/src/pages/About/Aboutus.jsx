import React, { useEffect } from "react";
import "./Aboutus.css";

function About() {
   useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");

    els.forEach((el, i) => {
      el.dataset.index = i;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = (parseInt(el.dataset.index, 10) || 0) * 120;
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        root: null,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    els.forEach((el) => observer.observe(el));

    // Infinite auto-scroll for Why Choose Us
    const slider = document.getElementById("whySlider");

    if (slider) {
      if (!slider.dataset.duplicated) {
        slider.innerHTML += slider.innerHTML;
        slider.dataset.duplicated = "true";
      }

      let scrollAmount = 0;
      const SCROLL_SPEED = 2.5;
      let rafId;

      function autoScroll() {
        if (!slider) return;

        scrollAmount += SCROLL_SPEED;
        slider.scrollLeft = scrollAmount;

        if (scrollAmount >= slider.scrollWidth / 2) {
          slider.style.scrollBehavior = "auto";
          scrollAmount = 0;
          slider.scrollLeft = 0;
          slider.style.scrollBehavior = "smooth";
        }

        rafId = requestAnimationFrame(autoScroll);
      }

      autoScroll();

      const pause = () => cancelAnimationFrame(rafId);
      const resume = () => requestAnimationFrame(autoScroll);

      slider.addEventListener("mouseenter", pause);
      slider.addEventListener("mouseleave", resume);

      return () => {
        cancelAnimationFrame(rafId);
        slider.removeEventListener("mouseenter", pause);
        slider.removeEventListener("mouseleave", resume);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section">
     
      <section className="about-intro container text-center fade-up">
        <h1 className="section-title">Detagenix: Driving Innovation and Digital Excellence</h1>
        <p className="lead">
          {/* <span className="highlight">Detagenix</span>*/} Organization is a dynamic IT consulting and digital transformation company 
          dedicated to empowering businesses with cutting-edge, scalable technology solutions. We go beyond basic
          software development to craft tailored, enterprise-grade applications, specializing in robust technologies
          like the <strong>MERN Stack</strong> and advanced services such as <strong>AI/ML & Data Modeling</strong>.
          <br />
          <br />
          Our philosophy is centered on understanding your unique needs to deliver reliable excellence, build lasting
          partnerships, and ensure your business becomes smarter, faster, and future-ready in the connected digital
          world.
        </p>
      </section>

      <section className="core-values container fade-up">
        <h2 className="section-title text-center">Driven by Core Values</h2>
        <div className="row g-4 text-center">
          <div className="col-md-4 fade-up">
            <div className="glass-card p-4">
              <h4>Ingenuity-First Innovation</h4>
              <p>
                We challenge the status quo by constantly exploring technologies like AI/ML and Blockchain to create not
                just software, but transformative, future-ready business assets.
              </p>
            </div>
          </div>
          <div className="col-md-4 fade-up">
            <div className="glass-card p-4">
              <h4>Scalable Excellence</h4>
              <p>
                We are uncompromising in our commitment to deliver enterprise-grade quality and reliable performance,
                ensuring every solution—from a simple web application to complex data modeling—is built for long-term
                growth and durability.
              </p>
            </div>
          </div>
          <div className="col-md-4 fade-up">
            <div className="glass-card p-4">
              <h4>Empathetic Partnership</h4>
              <p>
                We prioritize truly understanding your unique needs, fostering transparency, and building long-term
                relationships that position us as a dedicated partner, not just a service provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="why-us-section container text-center">
        <h2 className="section-title fade-up">Why Choose Detagenix?</h2>
        <p className="lead fade-up">
          Choosing <span className="highlight">Detagenix</span> means securing a genuine partnership built on
          future-proof technology and predictable excellence. We integrate Ingenuity-First Innovation with unwavering
          Scalable Excellence, delivering enterprise-grade, end-to-end solutions — from robust MERN architecture to
          powerful AI/ML and Data Models — designed for your long-term growth.
        </p>

        <div className="why-slider-wrapper fade-up">
          <div className="why-slider" id="whySlider">
            {[
              {
                icon: "bi-lightbulb",
                title: "Innovation Driven",
                desc: "We explore modern technologies to create future-ready, transformative digital experiences.",
              },
              {
                icon: "bi-puzzle",
                title: "Tailored Solutions",
                desc: "Every project is uniquely designed to align perfectly with your business goals.",
              },
              {
                icon: "bi-shield-check",
                title: "Quality & Reliability",
                desc: "Built with precision, tested rigorously, and optimized for scalability.",
              },
              {
                icon: "bi-graph-up",
                title: "Enterprise-Grade Growth",
                desc: "We deliver solutions built for long-term impact and measurable business success.",
              },
              {
                icon: "bi-people",
                title: "Partnership Focused",
                desc: "We collaborate closely with clients to ensure transparency and shared success.",
              },
            ].map((item, index) => (
              <div className="why-card glass-card p-4 mx-3" key={index}>
                <i className={`bi ${item.icon} fs-1 mb-3 text-primary`}></i>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;