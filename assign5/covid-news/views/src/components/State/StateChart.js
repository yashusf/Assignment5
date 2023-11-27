import React from "react";
import { Tooltip } from "react-bootstrap";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

const StateChart = ({ data }) => {
  return (
    <div className="chart-container">
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="positive"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />

        <Line type="monotone" dataKey="death" stroke="#ff0000" />
      </LineChart>
    </div>
  );
};

export default StateChart;
