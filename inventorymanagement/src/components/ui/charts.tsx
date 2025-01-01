'use client';

import { LineChart, Line, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface ChartProps {
  data: any[];
  type: 'line' | 'bar';
  height?: number | string;
  color?: string;
  title?: string;
  subtitle?: string;
}

export function Chart({ data, type, height = "100%", color = "#3b82f6", title, subtitle }: ChartProps) {
  if (type === 'line') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <Line
            type="natural"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-200">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#94A3B8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#94A3B8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value.toString()}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '6px',
              color: '#F3F4F6'
            }}
          />
          <Bar
            dataKey="value"
            fill={color}
            radius={[4, 4, 0, 0]}
            label={{ 
              position: 'top', 
              fill: '#94A3B8',
              fontSize: 12
            }}
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-400">Trending up by 5.2% this month</p>
    </div>
  );
} 