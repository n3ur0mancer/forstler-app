import WeatherDataGraph from './WeatherDataGraph';
import React, { useState, useEffect } from "react";
import climate_icon from './assets/climate-temperature_icon.svg';
import './css/weather_data_module.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function WeatherDataMdule(props) { 
    const [timeButton, setButtonTextTime] = useState('Jährlich');
    const [typeButton, setButtonTextType] = useState('Temperatur');
    const [selectedData, setSelectedData] = useState({
        regionalEndpoint: '/dashboard/regional_temperature/',
        iotEndpoint: '/dashboard/iot_temperature/',
        xaxis_datakey: 'year',
        regional_datakey: 'temperature_celsius_avg',
        iot_datakey: 'iot_temperature_avg',
        tooltip: ' °C',
        description: 'Durchschnittstemperatur in Grad Celsius.'
    });
      
    const handleTimeSelect = (event) => {
        const selectedTextTime = event.target.value;
        setButtonTextTime(selectedTextTime);
        updateSelectedData(selectedTextTime, typeButton);
    };
      
    const handleTypeSelect = (event) => {
        const selectedTextType = event.target.value;
        setButtonTextType(selectedTextType);
        updateSelectedData(timeButton, selectedTextType);
    };
      
    const updateSelectedData = (selectedTextTime, selectedTextType) => {
        let regionalEndpoint;
        let iotEndpoint;
        let xaxis_datakey;
        let regional_datakey;
        let iot_datakey;
        let tooltip;
        let description;
        if (selectedTextTime === 'Monatlich' && selectedTextType == 'Temperatur') {
            regionalEndpoint = '/dashboard/regional_temperature_monthly/';
            iotEndpoint = '/dashboard/iot_temperature_monthly/';
            xaxis_datakey = 'month';
            regional_datakey = 'temperature_celsius_avg';
            iot_datakey = 'iot_temperature_avg';
            tooltip = ' °C';
            description= 'Durchschnittstemperatur in Grad Celsius.';
        } else if (selectedTextTime === 'Jährlich' && selectedTextType == 'Temperatur'){
            regionalEndpoint = '/dashboard/regional_temperature/';
            iotEndpoint = '/dashboard/iot_temperature/';
            xaxis_datakey = 'year';
            regional_datakey = 'temperature_celsius_avg';
            iot_datakey = 'iot_temperature_avg';
            tooltip = ' °C';
            description= 'Durchschnittstemperatur in Grad Celsius.';
        } else if (selectedTextTime === 'Jährlich' && selectedTextType == 'Sonnenstunden'){
            regionalEndpoint = '/dashboard/regional_sunhours/';
            iotEndpoint = '/dashboard/iot_sunhours/';
            xaxis_datakey = 'year';
            regional_datakey = 'sunhours_avg';
            iot_datakey = 'iot_sunhours_avg';
            tooltip = ' Stunden';
            description= 'Durchschnitt an Sonnenstunden.';
        } else if (selectedTextTime === 'Monatlich' && selectedTextType == 'Sonnenstunden'){
            regionalEndpoint = '/dashboard/regional_sunhours_monthly/';
            iotEndpoint = '/dashboard/iot_sunhours_monthly/';
            xaxis_datakey = 'month';
            regional_datakey = 'sunhours_avg';
            iot_datakey = 'iot_sunhours_avg';
            tooltip = ' Stunden';
            description= 'Durchschnitt an Sonnenstunden.';
        } else if (selectedTextTime === 'Jährlich' && selectedTextType == 'Niederschlag'){
            regionalEndpoint = '/dashboard/regional_precipitation/';
            iotEndpoint = '/dashboard/iot_precipitation/';
            xaxis_datakey = 'year';
            regional_datakey = 'precipitation_mm_avg';
            iot_datakey = 'iot_precipitation_avg';
            tooltip = ' mm';
            description= 'Durchschnitt an Niederschlag in mm.';
        } else {
            regionalEndpoint = '/dashboard/regional_precipitation_monthly/';
            iotEndpoint = '/dashboard/iot_precipitation_monthly/';
            xaxis_datakey = 'month';
            regional_datakey = 'precipitation_mm_avg';
            iot_datakey = 'iot_precipitation_avg';
            tooltip = ' mm';
            description= 'Durchschnitt an Niederschlag in mm.';
        } 
        setSelectedData({ regionalEndpoint, iotEndpoint, xaxis_datakey, regional_datakey, iot_datakey, tooltip, description });
    };
  
    return (
        <div className='weather_data_module_container'>
            <div className='title_button_container'>
                <h3 className='weather_data_module_title'>Wetterdaten</h3>
                <Select 
                value={timeButton} 
                onChange={handleTimeSelect}
                size="small"
                sx={{ marginTop: 1.5, 
                    marginRight: 1, 
                    marginLeft: 1,
                    height: "4vh", 
                    width: "8vw", 
                    fontSize:"0.8rem"}}>
                    <MenuItem value='Jährlich'>Jährlich</MenuItem>
                    <MenuItem value='Monatlich'>Monatlich</MenuItem>
                </Select>
                <Select 
                value={typeButton} 
                onChange={handleTypeSelect}
                size="small"
                sx={{ marginTop: 1.5, 
                    marginRight: 2, 
                    height: "4vh", 
                    width: "8vw", 
                    fontSize:"0.8rem"}}>
                    <MenuItem value='Temperatur'>Temperatur</MenuItem>
                    <MenuItem value='Sonnenstunden'>Sonnenstunden</MenuItem>
                    <MenuItem value='Niederschlag'>Niederschlag</MenuItem>
                </Select>
            </div>
            <div className="weather_info_container">
                <img src={climate_icon} className="weather_info_icon"></img>
                <p className="weather_info_text">Gemäßigtes Klima</p>
            </div>
            <WeatherDataGraph 
                location_id={props.parent_location_id} 
                regional_endpoint={selectedData.regionalEndpoint}
                iot_endpoint={selectedData.iotEndpoint}
                xaxis_datakey={selectedData.xaxis_datakey}
                regional_datakey={selectedData.regional_datakey}
                iot_datakey={selectedData.iot_datakey}
                tooltip={selectedData.tooltip}
                />
            <p className='weather_data_module_description'>{selectedData.description}</p>
        </div>
    );
}

export default WeatherDataMdule;