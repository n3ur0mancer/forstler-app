import React from "react";
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './css/weather_data_graph.css';

const data = [{
    Month: 'Jan',
    Region: -2,
    IoT: -4
  }, {
    Month: 'Feb',
    Region: 1,
    IoT: 0
  }, {
    Month: 'Mar',
    Region: 5,
    IoT: 3
  }, {
    Month: 'Apr',
    Region: 10,
    IoT: 9
  }, {
    Month: 'May',
    Region: 13,
    IoT: 10
  }, {
    Month: 'Jun',
    Region: 17,
    IoT: 14
  }, {
    Month: 'Jul',
    Region: 21,
    IoT: 17
  }, {
    Month: 'Aug',
    Region: 20,
    IoT: 16
  }, {
    Month: 'Sep',
    Region: 18,
    IoT: 11
  }, {
    Month: 'Oct',
    Region: 13,
    IoT: 9
  }, {
    Month: 'Nov',
    Region: 8,
    IoT: 5
  }, {
    Month: 'Dec',
    Region: 4,
    IoT: 1
  }
];
  
function WeatherDataGraph() {
    return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart 
            data={data} 
            margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 0,
            }}
            className="weather_data_graph_text">
            <Legend verticalAlign="top" align="left"/>
            <Tooltip />
            <XAxis dataKey="Month" stroke='#929292' strokeWidth="1.5" />
            <Line dataKey="Region" type="monotone" stroke="#14221D" strokeWidth={2} activeDot={{ r: 6 }}/>
            <Line dataKey="IoT" type="monotone" stroke="#B3D4C8" strokeWidth={2} activeDot={{ r: 6 }}/>
        </LineChart>

    </ResponsiveContainer>
    );
  }
  
  export default WeatherDataGraph;