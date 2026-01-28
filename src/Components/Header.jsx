/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const toggleMenu = (e) => {
      const btn = document.querySelector(".hamburger");
      if (btn && !btn.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", toggleMenu);
    return () => document.removeEventListener("click", toggleMenu);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.95)",
        padding: "1rem 2rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
      }}
    >
      <a href="#home" aria-label="Navigate to home section" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        Portfolio
      </a>

      <nav
        aria-label="Main navigation"
        style={{
          display: "flex",
          gap: "2rem",
        }}
        className="desktop-nav"
      >
        <a href="#home" aria-label="Navigate to home section">Home</a>
        <a href="#about" aria-label="Navigate to about section">About</a>
        <a href="#portfolio" aria-label="Navigate to portfolio section">Portfolio</a>
        <a href="#education" aria-label="Navigate to education section">Education</a>
        <a href="#footer" aria-label="Navigate to contact section">Contact</a>
      </nav>

      <button
        className="hamburger"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: "5px",
          padding: 0,
        }}
      >
        <span style={{ width: "25px", height: "3px", backgroundColor: "black", transition: "all 0.3s" }} />
        <span style={{ width: "25px", height: "3px", backgroundColor: "black", transition: "all 0.3s" }} />
        <span style={{ width: "25px", height: "3px", backgroundColor: "black", transition: "all 0.3s" }} />
      </button>

      <nav
        aria-label="Mobile navigation"
        style={{
          display: menuOpen ? "flex" : "none",
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          flexDirection: "column",
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          padding: "2rem",
          gap: "1rem",
        }}
        className="mobile-nav"
      >
        <a href="#home" onClick={handleNavClick} aria-label="Navigate to home section">Home</a>
        <a href="#about" onClick={handleNavClick} aria-label="Navigate to about section">About</a>
        <a href="#portfolio" onClick={handleNavClick} aria-label="Navigate to portfolio section">Portfolio</a>
        <a href="#education" onClick={handleNavClick} aria-label="Navigate to education section">Education</a>
        <a href="#footer" onClick={handleNavClick} aria-label="Navigate to contact section">Contact</a>
      </nav>
    </div>
  );
};

Header.propTypes = {};

export default Header;
