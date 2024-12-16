import React, { useState } from "react";
import "./Header.css";
import FunderProImg from "./FunderPro-Logo-removebg-preview.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive((prevState) => !prevState); // Toggle the state
  };

  return (
    <div>
      <nav>
        <img src={FunderProImg} alt="FunderProImg" className="FunderProImg" />
        <section
          id="nav-links"
          className={`navLinks ${isActive ? "active" : ""}`}
        >
          <p>Leaderboard</p>
          <p>Competitions</p>
          <button>Sign Up</button>
        </section>
        <a href="#" className="nav-toggle" id="nav-toggle" onClick={toggleNav}>
          <i className="fas  fa-bars"></i>
        </a>
      </nav>
      <h1 className="heading">FunderPro Leaderboard</h1>
    </div>
  );
};

export default Header;
