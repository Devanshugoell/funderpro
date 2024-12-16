import React from "react";
import "./Performance.css";

const Performance = () => {
  return (
    <div className="performance">
      <h2>Ishaq m. - Performance</h2>
      <section>
        <section className="stats">
          <section className="startingBalance box">
            <p>$10,000.00</p>
            <p>Starting Balance</p>
          </section>
          <section className="currentEquity box">
            <p>$10,366.65</p>
            <p>Current Equity</p>
          </section>
          <section className="currentBalance box">
            <p>$10,366.65</p>
            <p>Current Balance</p>
          </section>
          <section className="cumulativePNL box">
            <p>$366.65</p>
            <p>Cumulative PNL</p>
          </section>
          <section className="return box">
            <p>3.67%</p>
            <p>% Return</p>
          </section>
          <section className="activeDays box">
            <p>7</p>
            <p>Active Days</p>
          </section>
          <section className="winningTrade box">
            <p>$61.10</p>
            <p>AVG. Winning Trade</p>
          </section>
          <section className="profitFactor box">
            <p>0.86</p>
            <p>Profit Factor</p>
          </section>
          <section className="tradesPlaced box">
            <p>14</p>
            <p>NO. Trades Placed</p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Performance;
