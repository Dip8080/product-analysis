import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
    return (
        <div className='flex p-3'>
            <div className='mt-6'>
                <h1>month VS sell</h1>
           
            <BarChart width={350} height={300} data={data}>
            <Bar dataKey="sell" fill="#8884d8" />
            <XAxis dataKey="month" />
    <YAxis  dataKey="sell" name="weight" unit="$" />
    <Tooltip />
            </BarChart>
      
            </div>



            <div className='px-4'>
            <h1>month VS revenue</h1>
          <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="revenue"  ></Line>
    <XAxis dataKey="month" />
    <YAxis  dataKey="revenue" name="weight" unit="$" />
    <Tooltip />
  
          </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;