import React, { useEffect, useState } from "react";
import { dummyData } from "../dummyData";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [data, setData] = useState([]);

  //useEffect will gets render when component gets mounted
  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <>
      <section className="tableSection">
        <table className="table">
          <caption className="table-caption">Top 10 Traders</caption>
          <thead>
            <tr>
              <th>#Rank</th>
              <th>Name</th>
              <th>Return %</th>
              <th>$ Profit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.rank}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.return} %</td>
                <td>${item.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Leaderboard;
