"use client";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import React from "react";
import "./AreaChart.css";

const ProductSales = [
  {
    date: "2024/01/01",
    sales: 10000,
  },
  {
    date: "2024/02/01",
    sales: 10054,
  },
  {
    date: "2024/03/01",
    sales: 10079,
  },
  {
    date: "2024/04/01",
    sales: 10016,
  },
  {
    date: "2024/05/01",
    sales: 10441,
  },
  {
    date: "2024/06/01",
    sales: 10366,
  },
];

const AreaChartComponent = () => {
  return (
    <div className="Areachart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={ProductSales}>
          {/* x axis */}
          <XAxis dataKey="date" />
          {/* Y axis  */}
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="rgb(0, 167, 225)"
            fill="rgb(0, 167, 225)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
