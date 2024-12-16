import React from "react";
import "./Header.css";
import FunderProImg from "./FunderPro-Logo-removebg-preview.png";

const Header = () => {
  return (
    <div>
      <nav>
        <img src={FunderProImg} alt="FunderProImg" className="FunderProImg" />
        <section className="navLinks">
          <p>Leaderboard</p>
          <p>Competitions</p>
          <button>Sign Up</button>
        </section>
      </nav>
      <h1 className="heading">FunderPro Leaderboard</h1>
    </div>
  );
};

export default Header;
