import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[data])
    return (
        <div className='flex p-3'>
            <div className=''>
            <ResponsiveContainer width="100%" height="100%" >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="investment" stackId="3" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
            </div>



            <div className='px-4'>
          
          <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="revenue"  ></Line>
    <XAxis dataKey="month" />
    <YAxis  dataKey="revenue" name="weight" unit="kg" />
  
          </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;