import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './css/weather_data_graph.css';

const SERVER_URL = 'http://localhost:3001';

  
function WeatherDataGraph(props) {

    const location_id = props.location_id;

    const [regionalData, setRegionalData] = useState([]);
    const [iotData, setIotData] = useState([]);

    useEffect(() => {
      fetch(`${SERVER_URL}/dashboard/temperature/${location_id}`)
          .then(res => res.json())
          .then(res => {
            setRegionalData(res.data);
          })
          .catch(error => {
              console.error(error);
      });
      fetch(`${SERVER_URL}/dashboard/iot_temperature/${location_id}`)
          .then(res => res.json())
          .then(res => {
            setIotData(res.data);
          })
          .catch(error => {
              console.error(error);
      });
    }, [location_id]);

    return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart 
            margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 0,
            }}
            className="weather_data_graph_text">
            <Legend verticalAlign="top" align="left"/>
            <Tooltip formatter={(value) => Math.round(value * 10) / 10 + " °C"} />
            <XAxis dataKey="year" stroke='#929292' strokeWidth="1.5" allowDuplicatedCategory={false}/>
            <Line name="Regional" data={regionalData} dataKey="temperature_celsius_avg" type="monotone" stroke="#14221D" strokeWidth={2} activeDot={{ r: 6 }} />
            <Line name="IoT" data={iotData} dataKey="iot_temperature_avg" type="monotone" stroke="#B2D4C8" strokeWidth={2} activeDot={{ r: 6 }}/>
        </LineChart>
    </ResponsiveContainer>
    );
  }
  
  export default WeatherDataGraph;