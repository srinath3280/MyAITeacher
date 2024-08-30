import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'English', Pass: 250, Fail: 30, NotAttended: 20,
  },
  {
    name: 'Telugu', Pass: 200, Fail: 70, NotAttended: 30,
  },
  {
    name: 'Hindi', Pass: 220, Fail: 80, NotAttended: 50,
  }
];

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
        barGap={8} // Adjusts the gap between bars
        barCategoryGap="20%" // Adjusts the gap between different categories
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Pass" fill="green" />
        <Bar dataKey="Fail" fill="red" />
        <Bar dataKey="NotAttended" fill="slateblue" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
