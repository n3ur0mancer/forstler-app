import React from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './css/crown_condition_graph.css';

const data = [{
    Month: 'Jan',
    Kronenverlichtung: 30
  }, {
    Month: 'Feb',
    Kronenverlichtung: 32
  }, {
    Month: 'Mar',
    Kronenverlichtung: 32
  }, {
    Month: 'Apr',
    Kronenverlichtung: 31
  }, {
    Month: 'May',
    Kronenverlichtung: 35
  }, {
    Month: 'Jun',
    Kronenverlichtung: 36
  }, {
    Month: 'Jul',
    Kronenverlichtung: 34
  }, {
    Month: 'Aug',
    Kronenverlichtung: 36
  }, {
    Month: 'Sep',
    Kronenverlichtung: 35
  }, {
    Month: 'Oct',
    Kronenverlichtung: 37
  }, {
    Month: 'Nov',
    Kronenverlichtung: 36
  }, {
    Month: 'Dec',
    Kronenverlichtung: 36
  }
];
  
function Crown_condition_graph() {
    return (
    <ResponsiveContainer width="100%" height="100%" >
        <BarChart 
            data={data} 
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
            }}
            className="crown_condition_graph_text">
            <Legend verticalAlign="top" align="left"/>
            <Tooltip />
            <XAxis dataKey="Month" />
            <Bar dataKey="Kronenverlichtung" fill="#355649" />
        </BarChart>

    </ResponsiveContainer>
    );
  }
  
  export default Crown_condition_graph;