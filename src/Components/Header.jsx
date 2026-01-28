/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.95)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <a href="#home" aria-label="Navigate to home section">Home</a>
      <a href="#about" aria-label="Navigate to about section">About</a>
      <a href="#portfolio" aria-label="Navigate to portfolio section">Portfolio</a>
      <a href="#education" aria-label="Navigate to education section">Education</a>
      <a href="#footer" aria-label="Navigate to contact section">Contact</a>
    </div>
  );
};

export default Header;
