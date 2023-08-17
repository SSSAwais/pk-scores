import React from "react";

import "./AnnualDonutChart.css";
import { PieChart, Pie, Cell } from "recharts";

const AnnualDonutChart = ({ livExp, othExpt, othRelExp }) => {
  const data = [
    { name: "Living Expenses", value: Number(livExp) },
    { name: "Other Expenses", value: Number(othExpt) },
    { name: "Property Realted Expenses", value: Number(othRelExp) },
  ];
  const COLORS = ["#5BA8F6", "#4EEEB3", "#CCE5FF"];

  return (
    <div className="AnnualDonutChart">
      <PieChart width={260} height={180}>
        <Pie
          data={data}
          // cx={100}
          // cy={90}
          innerRadius={65}
          outerRadius={75}
          paddingAngle={15}
          dataKey="value"
          cornerRadius={30}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <h2 className="annual--title">Annual Expenses</h2>
    </div>
  );
};

export default AnnualDonutChart;
