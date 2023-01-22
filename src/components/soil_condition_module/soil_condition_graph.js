import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './css/soil_condition_graph.css';

const data = [{
    Sand: 3,
    Lehm: 2,
    Kalk: 1
  }
];
  
function Soil_condition_graph() {
    return (
    <ResponsiveContainer width="100%" height="100%" >
        <BarChart 
            data={data} 
            layout="vertical"
            margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 5,
            }}
            className="soil_condition_graph_text">
            <Legend verticalAlign="top" align="left"/>
            <XAxis type="number" hide='true' />
            <YAxis type="category" dataKey='name' hide='true' />
            <Tooltip />
            <Bar dataKey="Sand" fill="#14221D" />
            <Bar dataKey="Lehm" fill="#B2D4C8" />
            <Bar dataKey="Kalk" fill="#929292" />
        </BarChart>

    </ResponsiveContainer>
    );
  }
  
  export default Soil_condition_graph;