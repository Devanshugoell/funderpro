import React, { useEffect, useState } from "react";
import { dummyData } from "../dummyData";
import "./Leaderboard.css";
import FunderProImg from "./FunderPro-Logo-removebg-preview.png";

const Leaderboard = () => {
  const [data, setData] = useState([]);

  //useEffect will gets render when component gets mounted
  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <>
      <nav>
        <img src={FunderProImg} alt="FunderProImg" className="FunderProImg" />
        <section className="navLinks">
          <p>Leaderboard</p>
          <p>Competitions</p>
          <button>Sign Up</button>
        </section>
      </nav>
      <section>
        <table className="table">
          <thead>
            <tr>
              <td>#Rank</td>
              <td>Name</td>
              <td>Return %</td>
              <td>$ Profit</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.rank}>
                  <td>{item.rank}</td>
                  <td>{item.name}</td>
                  <td>{item.return} %</td>
                  <td>${item.profit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Leaderboard;
