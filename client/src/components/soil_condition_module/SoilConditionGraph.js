import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './css/soil_condition_graph.css';

const SERVER_URL = 'http://localhost:3001';
  
function SoilConditionGraph(props) {

    const location_id = props.location_id;

    const [soilData, setSoilData] = useState([]);

    useEffect(() => {
        fetch(`${SERVER_URL}/dashboard/soil_condition_data/${location_id}`)
            .then(res => res.json())
            .then(res => {
                setSoilData(res.data);
            })
            .catch(error => {
                console.error(error);
        });
      }, [location_id]);


    return (
    <ResponsiveContainer width="100%" height="100%" >
        <BarChart 
        data={soilData}
            layout="vertical"
            margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 1,
            }}
            className="soil_condition_graph_text">
            <Legend verticalAlign="top" align="left"/>
            <XAxis type="number" hide='true' />
            <YAxis type="category" hide='true' dataKey='name' />
            <Bar name="Lehm" dataKey="clay" fill="#14221D" />
            <Bar name="Sand" dataKey="sand" fill="#929292" />
            <Bar name="Schlick" dataKey="silt" fill="#B2D4C8" />
        </BarChart>
    </ResponsiveContainer>
    );
  }
  
  export default SoilConditionGraph;