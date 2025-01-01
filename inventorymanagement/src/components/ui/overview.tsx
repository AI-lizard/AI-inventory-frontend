"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 1324,
  },
  {
    name: "Feb",
    total: 1765,
  },
  {
    name: "Mar",
    total: 1543,
  },
  {
    name: "Apr",
    total: 1890,
  },
  {
    name: "May",
    total: 2347,
  },
  {
    name: "Jun",
    total: 1987,
  },
  {
    name: "Jul",
    total: 2040,
  },
  {
    name: "Aug",
    total: 2350,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#94a3b8"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#94a3b8"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="#3b82f6"
          radius={[4, 4, 0, 0]}
          className="fill-blue-600"
        />
      </BarChart>
    </ResponsiveContainer>
  );
} 