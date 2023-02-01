import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './css/crown_condition_graph.css';

  
function CrownConditionGraph(props) {
    
  const location_id = props.location_id;
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:3001/dashboard/crown_condition/${location_id}`)
          .then(res => res.json())
          .then(res => {
              setData(res.data);
          })
          .catch(error => {
              console.error(error);
          });
  }, [location_id]);

  return (
    <ResponsiveContainer width="100%" height="100%" >
        <BarChart 
            data={data} 
            margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 5,
            }}
            className="crown_condition_graph_text">
            <Legend verticalAlign="top" align="left"/>
            <Tooltip formatter={(value) => Math.round(value * 10) / 10 + " %"}/>
            <XAxis dataKey="year" stroke='#929292' strokeWidth="1.5"/>
            <Bar dataKey="defoliation_percentage_avg" name="Kronenverlichtung" fill="#355649" />
        </BarChart>

    </ResponsiveContainer>
    );
  }
  
  export default CrownConditionGraph;