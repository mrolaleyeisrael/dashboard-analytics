
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 7.5, },
  { name: 'Feb', value: 20, },
  { name: 'Mar', value: 10, },
  { name: 'Apr', value: 28, },
  { name: 'May', value: 9, },
  { name: 'Jun', value: 45, },
  { name: 'Aug', value: 22.6, },
  { name: 'Sept', value: 7.6, },
  { name: 'Oct', value: 7.6, },
  { name: 'Nov', value: 7.6, },
  { name: 'Dec', value: 7.6, },
];

const RoundedBar = (props: any) => {
  const { x, y, width, height, fill, onMouseOver, onMouseOut } = props;
  const borderRadius = 15;
  const borderRadius2 = 20;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={borderRadius2}
        ry={borderRadius}
        fill={fill}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    </g>
  );
};

const BarCharts = () => {
  const customYAxisTicks = [0, 5.000, 10.000, 20.000, 30.000, 40.000, 50.000];

  const renderBarChart = (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barCategoryGap={10}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#34CAA5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#34CAA5" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          ticks={customYAxisTicks}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}.000`}
        />
        <Tooltip
          cursor={{ stroke: 'none' }}
          contentStyle={{ background: '#000000', border: 'none' }}
          label={{ fill: '#fffffff' }}
          itemStyle={{ color: '#ffffff' }}
          position={{ y: -30 }} // Adjust the y position as needed
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="value" fill="url(#colorUv)" radius={[40, 40, 0, 0]} barSize={30} shape={<RoundedBar />} />
      </BarChart>
    </ResponsiveContainer>
  );

  return <>{renderBarChart}</>;
};

export default BarCharts;
