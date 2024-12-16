import React, { useEffect, useState } from "react";
import { dummyData } from "../dummyData";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [data, setData] = useState();

  //useEffect will gets render when component gets mounted
  useEffect(() => {
    setTimeout(() => {
      setData(dummyData);
    }, 1000);
  }, []);

  //Conditional rendering

  if (data) {
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
          <section className="tradersBottom">
            <p>
              This is a collection of the top 10 Funded FunderPro Traders who
              are eligible for payouts. We have chosen to only display the top
              10 for motivational purposes!
            </p>
            <p id="updatedTime">Last Update: less than a minute ago</p>
          </section>
        </section>
      </>
    );
  } else {
    return (
      <section className="tableSection">
        <div className="spinner">
          <div className="spin"></div>
        </div>
      </section>
    );
  }
};

export default Leaderboard;
