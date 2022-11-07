import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
function Charts(props) {
  const data = props.data;

  return (
    <>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="paid" fill="#8884d8" />
        <Bar dataKey="notPaid" fill="#82ca9d" />
      </BarChart>
    </>
  );
}

export default Charts;
