'use client'
 import React from 'react';
 import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

 const data = [
   { name: 'Jan', uv: 7.5, pv: 100, amt: 50.00 },
   { name: 'Feb', uv: 20, pv: 100, amt: 50 },
   { name: 'Mar', uv: 3, pv: 100, amt: 50 },
   { name: 'Apr', uv: 28, pv: 100, amt: 50 },
   { name: 'May', uv: 9, pv: 100, amt: 50 },
   { name: 'Jun', uv: 41, pv: 100, amt: 50 },
   { name: 'Aug', uv: 22.6, pv: 100, amt: 50 },
   { name: 'Sept', uv: 7.6, pv: 100, amt: 50 },
   { name: 'Oct', uv: 7.6, pv: 100, amt: 50 },
   { name: 'Nov', uv: 7.6, pv: 100, amt: 50 },
   { name: 'Dec', uv: 7.6, pv: 100, amt: 50 },
 ];

  // Custom shape

// function to add border - radius to the top of each bar
 const RoundedBar = (props:any) => {
   const { x, y, width, height } = props;
   const borderRadius = 5; // Adjust the border-radius value as needed

   return (
     <g>
       <rect x={x} y={y} width={width} height={height} rx={borderRadius} ry={borderRadius} fill={props.fill} />
     </g>
   );
 };

 const BarCharts = () => {
   const renderBarChart = (
     <ResponsiveContainer width="100%" height={300}>
       <BarChart data={data} barCategoryGap={10}>
         <defs>
           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
             <stop offset="5%" stopColor="#34CAA5" stopOpacity={0.8} />
             <stop offset="95%" stopColor="#34CAA5" stopOpacity={0} />
           </linearGradient>
         </defs>
         <XAxis dataKey="name" stroke="#8884d8" />
         <YAxis />
         <Tooltip />
         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
         <Bar dataKey="uv" fill="url(#colorUv)" barSize={30} shape={<RoundedBar />} />
       </BarChart>
     </ResponsiveContainer>
   );

   return <>{renderBarChart}</>;
 };

 export default BarCharts;
