import React, { useState } from "react";
import "../Screens/css/NavBar.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import Wolf from "./imagenes/Logo.png";
import enFlag from "./imagenes/us.png";
import esFlag from "./imagenes/es.png";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/pagina3", text: "pagina3" },
  { id: 3, url: "/services", text: "Services" },
  { id: 4, url: "/Exercises", text: "Exercises" },
  { id: 5, url: "/Novedades", text: "Novedades" },
  { id: 6, url: "/pagina5", text: "pagina5" },
];

export const NavBar = () => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={Wolf} alt="Wolf" height={"50px"} />
        </Link>
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            {links.map((link) => (
              <li key={link.id} className="nav-item">
                <Link to={link.url} className="nav-link">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-actions">
          <button type="button" className="btn btn-primary">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Register
          </button>
          <div>
            <select
              className="form-select"
              aria-label="Default select example"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">
                <img src={enFlag} alt="English" className="flag-icon" />
                English
              </option>
              <option value="es">
                <img src={esFlag} alt="Spanish" className="flag-icon" />
                Español
              </option>
            </select>
          </div>
          <button
          className="hamburger"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        </div>
      </nav>
    </div>
  );
};