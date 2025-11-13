import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../css/Portfolio.css";
import imgMe from "../img/upscalemedia-transformed-Photoroom.png";
import imgme from "../img/upscalemedia-transformed-Photoroom.png";
import quality from "../img/1quality.png";
import project from "../img/2task-management.png";
import live from "../img/3closure.png";
import { FaEye } from "react-icons/fa";
import galleryImg1 from "../img/WhatsApp Image 2025-11-10 at 3.39.25 PM.jpeg";
import galleryImg2 from "../img/WhatsApp Image 2025-11-10 at 3.47.02 PM.jpeg";
import galleryImg3 from "../img/WhatsApp Image 2025-11-10 at 3.49.48 PM.jpeg";
import galleryImg4 from "../img/WhatsApp Image 2025-11-10 at 3.52.53 PM.jpeg";
import galleryImg5 from "../img/WhatsApp Image 2025-11-10 at 4.03.29 PM.jpeg";
import galleryImg6 from "../img/WhatsApp Image 2025-11-10 at 4.41.12 PM.jpeg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import emailjs from "emailjs-com"; // ✅ import EmailJS
const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  // const [visibleCount, setVisibleCount] = useState(3);
  const form = useRef(); // ✅ form ref for EmailJS
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".experience-stats");
      let inExperience = false;

      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0;
        inExperience = inView;
      }

      // if experience section is visible OR page scrolled past top hero section
      if (inExperience || window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // section animation trigger (optional)
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = window.innerHeight / 1.3;
        setIsVisible(sectionTop < sectionVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 88 },
    { name: "Tailwind CSS", level: 90 },
    { name: "API Integration", level: 80 },
  ];

  const projects = [
    {
      id: 1,
      title: "Rentel",
      category: "Web Development",
      image: galleryImg1, // replace with your image path
      description: "Rentel is a smart rental marketplace where you can rent or lend clothes, electronics, vehicles, and more.",
      link: "https://www.rentel.in/",
    },
    {
      id: 2,
      title: "Free pexels",
      category: "Web Development",
      image: galleryImg2,
      description: "Free stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images & copyright free pictures.",
      link: "https://build-pexels.vercel.app/",
    },
    {
      id: 3,
      title: "Calcue Website",
      category: "Web Development",
      image: galleryImg3,
      description: "Offers a strong and reliable hosting platform that is safe and secure and the best way to protect your data from any attack. Easy Scalability for Every Stage of .",
      link: "https://www.calcue.com/",
    },
    {
      id: 4,
      title: "Furniture Store",
      category: "web development",
      image: galleryImg4,
      description: "Transform your space with stylish, comfortable, and affordable furniture — crafted for every home and lifestyle.",
      link: "https://furniture-store-awlyr8c0a-kunjboghras-projects.vercel.app/",
    },
    {
      id: 5,
      title: "Admin Dashboard",
      category: "web development",
      image: galleryImg5,
      description: "A smart, responsive admin dashboard designed to give you full control over your business operations with real-time insights, analytics, and easy management tools.",
      link: "https://kunjboghra.github.io/AdminSite/",
    },
    {
      id: 5,
      title: "E-commerce Store",
      category: "web development",
      image: galleryImg6,
      description: "The Storefront Seller Dashboard is your all-in-one platform to manage products, track sales, and grow your business.",
      link: "https://storefrontsaleor.vercel.app/",
    },

  ];


  // ✅ Send Email function
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "Kunj__120K05", // 🟩 Replace with your EmailJS Service ID
        "template_ez2scjv", // 🟩 Replace with your Template ID
        form.current,
        "OLWzFdJLETewBP-_G" // 🟩 Replace with your Public Key
      )
      .then((result) => {
        alert("✅ Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("❌ Failed to send message. Try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (

    <div className="portfolio">
      {isSubmitting && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(173, 173, 173, 0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#f64c72",
                  animation: `bounce 1.4s ease-in-out ${index * 0.2}s infinite both`,
                }}
              />
            ))}
          </div>
          <style>
            {`
              @keyframes bounce {
                0%, 80%, 100% {
                  transform: scale(0);
                  opacity: 0.5;
                }
                40% {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            `}
          </style>
        </div>
      )}
      {/* ==== HEADER ==== */}
      <div className="background-full">
        <header className="portfolio-header">
          <div className="logo">
            <span
              className="logo-highlight"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ cursor: 'pointer' }}
            >
              KB
            </span>

          </div>

          <nav className="navbar">
            <ul className="portfolio-nav">
              <a onClick={() => scrollToSection("home")}>HOME</a>
              <a onClick={() => scrollToSection("about")}>ABOUT</a>
              <a onClick={() => scrollToSection("skills")}>SKILLS</a>
              <a onClick={() => scrollToSection("project")}>PROJECT</a>
              <a onClick={() => scrollToSection("contact")}>CONTACT</a>
            </ul>
          </nav>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </header>

        {/* ==== HERO SECTION ==== */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <h5>Boghra Kunj</h5>
            <h1>
              I’m a <span>Frontend Developer</span>
            </h1>
            <p>
              I specialize in building responsive and high-performing websites using modern front-end tools.
              My focus is on writing clean code and creating smooth user experiences.
              I believe good websites should be simple, fast, and meaningful.
            </p>
            <a
              href="/Kunj_Boghra_CV.pdf"
              download="Kunj_Boghra_CV.pdf"
              className="hero-btn"
            >
              Go To Portfolio →
            </a>
          </div>

          <div className="hero-image">
            <div className="hero-2-img">
              <img src={imgme} alt="Kunj Boghra" />
            </div>
          </div>

        </section>
      </div>
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-image">
            <img src={imgMe} alt="Kunj Boghra" />
          </div>

          <div className="about-content">
            <h5>ABOUT ME</h5>
            <h1>
              Hi there, I’m <span>Kunj Boghra</span>
            </h1>
            <h4>Frontend Developer | Creative Technologist | India</h4>
            <p>
              I’m passionate about blending creativity with technology to build seamless, visually striking, and high-performing web experiences. With years of hands-on experience in modern frontend frameworks and design systems, I specialize in developing responsive, accessible, and engaging digital interfaces.
            </p>
            <p> My goal is simple — to transform ideas into functional, user-centered designs that leave a lasting impression. </p>

            <div className="about-buttons">
              <a
                href="/Kunj_Boghra_CV.pdf"
                download="Kunj_Boghra_CV.pdf"
                className="btn primary"
              >
                Download CV ↓
              </a>

              <button
                className="btn outline"
                onClick={() => window.print()}
              >
                Print CV 🖨️
              </button>

            </div>
          </div>
        </div>
      </section>

      <section className="Diremit" id="skills">
        <div className="diremit-container">
          <div className="diremit-left">
            <h5 className="section-subtitle">MY Skills</h5>
            <h2 className="section-title">My Design and Development Skills</h2>
            <p className="section-text">
              I specialize in creating modern, responsive, and user-friendly web interfaces with a strong focus on clean design, performance, and seamless user experience.
            </p>
          </div>

          <div className="skills-section">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ "--fill": `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="experience-stats">
        <div className="stats-container">
          <div className="stat-box">
            <img src={quality} className="img-tak" />
            <div className="stat-text">
              <h3>YEAR OF<br />EXPERIENCE</h3>
            </div>
            <span className="stat-number">1.5 +</span>
          </div>

          <div className="stat-box">
            <img src={project} className="img-tak" />
            <div className="stat-text">
              <h3>TOTAL <br />PROJECT</h3>
            </div>
            <span className="stat-number">20 +</span>
          </div>

          <div className="stat-box">
            <img src={live} className="img-tak" />
            <div className="stat-text">
              <h3>LIVE<br />PROJECT</h3>
            </div>
            <span className="stat-number">2 +</span>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="project">
        <div className="container">
          <h5 className="section-subtitle">GALLERY</h5>
          <h2 className="section-title">Our Gallery Projects</h2>

          <div className="gallery-container">
            {projects.slice(0,).map((project) => (
              <div className="gallery-card" key={project.id}>
                <img src={project.image} alt={project.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <button
                    className="eye-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <FaEye />
                  </button>
                  <div className="gallery-info">
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Popup Modal */}
          {selectedProject && (
            <div className="project-modal" onClick={() => setSelectedProject(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={selectedProject.image} alt={selectedProject.title} />
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <a href={selectedProject.link} target="_blank" rel="noreferrer">
                  Visit Project
                </a>
                <button className="close-btn" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="footer-section" id="contact">
        <div className="footer-container">
          <h5 className="footer-subtitle">CONTACT</h5>
          <h2 className="footer-title">Contact Us</h2>

          {/* Contact Info */}
          <div className="footer-info">
            <div className="info-box">
              <FaPhoneAlt className="info-icon" />
              <h4>Phone Number</h4>
              <p>91+9824584602</p>
            </div>
            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <h4>Mail Address</h4>
              <p>kunjboghra@gmail.com</p>
            </div>
            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <h4>Office Address</h4>
              <p>84,Swaminarayan-1 NR, Paramsukh Gurukul School<br />Simadagam Surat</p>
            </div>
          </div>

          {/* Message Form */}
          <div className="footer-form">
            <h3>Send Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <input type="text" name="from_name" placeholder="Your Full Name*" required />
                <input type="email" name="user_email" placeholder="Your Email Address*" required />
              </div>
              <input type="text" name="subject" placeholder="Subject..." required />
              <textarea name="message" placeholder="Your Message..." required></textarea>
              <button type="submit" className="submit-btn">Submit Message →</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
      </footer>
      <div className="footer-bottom">
        <p>Copyright @2025, Kunj Boghra All Rights Reserved</p>

        <div className="footer-icons">
          <a href="https://github.com/KunjBoghra" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/mr_developer1205?igsh=MWl2dTduOThoYXQyZw==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/kunj-boghra/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>

        <a
          href="#top"
          className="scroll-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FaArrowUp />
        </a>

      </div>

    </div>
  );
};

export default Portfolio;
