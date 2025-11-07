import React, { useEffect } from "react";
import "./Aboutus.css";
import teamPhoto from "../../asset/Devops.png";

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

  const team = [
    { name: "Abhishek Gupta", role: "Frontend Developer", img: teamPhoto },
    { name: "Shubham Kumar Singh", role: "React & Node Developer", img: teamPhoto },
    { name: "Ganesh Nalla", role: "Backend Developer", img: teamPhoto },
    { name: "Aditya Rajput", role: "Backend Developer", img: teamPhoto },
  ];

  return (
    <div className="about-section">

      <section className="about-intro container text-center fade-up">
        <h1 className="section-title">About Detagenix</h1>
        <p className="lead">
          At <span className="highlight">Detagenix</span>, we specialize in delivering innovative IT solutions —
          from Web and Cloud Development to AI-powered automation.
        </p>
      </section>

      <section className="vision-mission container">
        <div className="row text-center">
          <div className="col-md-6 fade-up">
            <div className="card glass-card p-4">
              <h3>Our Vision</h3>
              <p>
                To be a global leader in next-generation digital transformation.
              </p>
            </div>
          </div>

          <div className="col-md-6 fade-up">
            <div className="card glass-card p-4">
              <h3>Our Mission</h3>
              <p>
                To deliver reliable, scalable, and secure digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section container text-center">
        <h2 className="section-title fade-up">Meet Our Core Team</h2>
        <div className="row g-4 justify-content-center">
          {team.map((member, i) => (
            <div className="col-md-3 col-sm-6 fade-up" key={i}>
              <div className="team-card">
                <img src={member.img} alt={member.name} className="team-photo" />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-us-section container text-center">
        <h2 className="section-title fade-up">Why Choose Us</h2>

        <div className="why-slider-wrapper fade-up">
          <div className="why-slider" id="whySlider">
            {[
              { icon: "bi-lightbulb", title: "Innovation Driven", desc: "We explore new technologies." },
              { icon: "bi-people", title: "Client-Centric", desc: "Your goals are our priority." },
              { icon: "bi-shield-check", title: "Quality & Security", desc: "Built with precision." },
              { icon: "bi-speedometer2", title: "Performance Focused", desc: "Optimized for speed." },
              { icon: "bi-globe", title: "Global Reach", desc: "We serve clients worldwide." },
              { icon: "bi-puzzle", title: "Custom Solutions", desc: "Tailored for your needs." },
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
