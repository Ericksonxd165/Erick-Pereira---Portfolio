import React, { useState } from "react";
import "./Header.css";

const Header = ({ texto, texto2, headerTranslations, language }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  // Scroll suave a secciones
  const scrollToSection = (id) => {
    setSideMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const cvPath = language === 'es' ? '/cv-es.pdf' : '/cv-en.pdf';

  return (
    <>
      <header className="header-main">
        <div className="flex items-center justify-between header-container">
          <div className="header-logo-container">
            <span className="veep-text" onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>{texto}</span>
            <span className="drivers-text">{texto2}</span>
          </div>
          {/* Botones desktop */}
         <div className="header-buttons flex items-center mt-0 justify-center space-x-12 mr-10">
            <button className="text-white" onClick={() => scrollToSection("about-me")}>{headerTranslations.about}</button>
            <button className="text-white" onClick={() => scrollToSection("projects")}>{headerTranslations.projects}</button>
            <a
              className="text-white"
              href={cvPath} 
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="text-white">{headerTranslations.curriculum}</button>
            </a>
          </div>

          {/* Botón menú hamburguesa mobile SOLO visible cuando el menú está cerrado */}
          {!sideMenuOpen && (
            <button
              className="header-menu-toggle"
              aria-label="Open menu"
              onClick={() => setSideMenuOpen(true)}
            >
              <span>&#9776;</span>
            </button>
          )}
        </div>
        {/* Menú lateral */}
        <div className={`header-side-menu${sideMenuOpen ? " open" : ""}`}>
          <button className="close-btn" onClick={() => setSideMenuOpen(false)} aria-label="Close menu">&times;</button>
          <button onClick={() => scrollToSection("about-me")}>{headerTranslations.about}</button>
          <button onClick={() => scrollToSection("projects")}>{headerTranslations.projects}</button>
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            onClick={() => setSideMenuOpen(false)}
          >
            <button>{headerTranslations.curriculum}</button>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
