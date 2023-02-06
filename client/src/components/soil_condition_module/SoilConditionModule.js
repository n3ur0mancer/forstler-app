import React, { useState, useEffect } from "react";
import SoilConditionGraph from './SoilConditionGraph';
import clay_sand_icon from './assets/sand-clay_icon.svg';
import './css/soil_condition_module.css';

const SERVER_URL = 'http://localhost:3001';

function SoilConditionModule(props) {

    const location_id = props.parent_location_id;
    const [soilData, setSoilData] = useState([]);

    useEffect(() => {
        fetch(`${SERVER_URL}/dashboard/soil_condition_data/${location_id}`)
            .then(res => res.json())
            .then(res => {
                const soilCompositionData = res.data[0];
                setSoilData(soilCompositionData);
            })
            .catch(error => {
                console.error(error);
        });
    }, [location_id]);
    
    
    
    return (
            <div className='soil_condition_module_container'>
                    <h3 className='soil_condition_module_title'>Bodendaten</h3>
                    <div className="soil_info_container">
                        <img src={clay_sand_icon} className="soil_info_icon"></img>
                        <p className="soil_info_text">{soilData.soil_composition}</p>
                    </div>
                    <SoilConditionGraph className="soil_condition_graph" location_id={props.parent_location_id}/>
                <p className='soil_condition_module_description'>Bodenbeschaffenheit des ausgwählten Standorts.</p>
            </div>
    );
}

export default SoilConditionModule;