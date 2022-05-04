import React, { useState } from 'react';
import "../css/Navigation.css";
import { useNavigate } from "react-router-dom";


function Navigation() {

  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  return (
    <nav>
      <div className="check" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <label className="logo" onClick={() => navigate("/")}>Henry Herrmann</label>
      <ul className={clicked ? "active" : ""}>
        <li><a href="/" onClick={() => navigate("/")}>Home</a></li>
        <li><a href="/projects" onClick={() => navigate("/projects")}>Projects</a></li>
        <li><a href="/about" onClick={() => navigate("/about")}>About</a></li>
        <li><a href="/contact" onClick={() => navigate("/contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;