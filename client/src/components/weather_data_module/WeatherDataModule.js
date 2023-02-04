import WeatherDataGraph from './WeatherDataGraph';
import React, { useState, useEffect } from "react";
import climate_icon from './assets/climate-temperature_icon.svg';
import './css/weather_data_module.css';

function WeatherDataMdule(props) { 
    const [buttonText, setButtonText] = useState('Monatlich');
    const [regionalEndpoint, setRegionalEndpoint] = useState('/dashboard/regional_temperature/');
    const [iotEndpoint, setIotEndpoint] = useState('/dashboard/iot_temperature/');
    const [datakey, setdatakey] = useState('year');

    const handleButtonClick = () => {
        if (buttonText === 'Monatlich') {
            setButtonText('Jährlich');
            setRegionalEndpoint('/dashboard/regional_temperature_monthly/');
            setIotEndpoint('/dashboard/iot_temperature_monthly/');
            setdatakey('month');
        } else {
            setButtonText('Monatlich');
            setRegionalEndpoint('/dashboard/regional_temperature/');
            setIotEndpoint('/dashboard/iot_temperature/');
            setdatakey('year');
        }
    };

    return (
        <div className='weather_data_module_container'>
            <div className='title_button_container'>
                <h3 className='weather_data_module_title'>Wetterdaten</h3>
                <button onClick={handleButtonClick} className='weather_graph_button'>{buttonText}</button>
            </div>
            <div className="weather_info_container">
                <img src={climate_icon} className="weather_info_icon"></img>
                <p className="weather_info_text">Gemäßigtes Klima</p>
            </div>
            <WeatherDataGraph 
                location_id={props.parent_location_id} 
                regional_endpoint={regionalEndpoint}
                iot_endpoint={iotEndpoint}
                datakey={datakey}/>
            <p className='weather_data_module_description'>Durchschnittstemperatur in Grad Celsius.</p>
        </div>
    );
}

export default WeatherDataMdule;
