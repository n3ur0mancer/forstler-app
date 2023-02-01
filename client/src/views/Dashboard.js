import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import LocationModule from '../components/location_module/LocationModule';
import CrownConditionModule from '../components/crown_condition_module/CrownConditionModule';
import SoilConditionModule from '../components/soil_condition_module/SoilConditionModule';
import MapModule from '../components/map_module/MapModule';
import WeatherDataMdule from '../components/weather_data_module/WeatherDataModule';
import NewLoctionModule from '../components/new_location_module/NewLocationModule';
import './css/dashboard.css';

function Dashboard() {
    const SERVER_URL = 'http://localhost:3001';
    const [locationName, setLocaitonName] = useState('Name');
    const [locationCountry, setLocationCountry] = useState('Name');
    const ring_black = require('../components/sidebar/assets/ring_black.svg').default
    const ring_white = require('../components/sidebar/assets/ring_white.svg').default
    const [selectedLocationId, setSelectedLocationId] = useState(100003);

    useEffect(() => {
        fetch(`${SERVER_URL}/dashboard/location_name/${selectedLocationId}`)
            .then(res => res.json())
            .then(data => {
                const locationName = (data.location_name);
                setLocaitonName(locationName);
                const locationCountry = (data.country_code);
                setLocationCountry(locationCountry);
            })
    }, [selectedLocationId]);

    const handleSelectLocation = (id) => {
        setSelectedLocationId(id);
    }

    return (
        <div className='dashboard_outer_double_row_container'>
            <Sidebar ring_colour_dashboard={ring_white}
                list_item_style_dashboard='sidebar_list_item_selected'
                ring_colour_guide={ring_black}
                list_item_style_guide='sidebar_list_item' />
            <div className='dashboard_inner_triple_column_container'>
                <div className='view_title'>
                    <h2>Dashboard</h2>
                    <p>{[locationName]}, {[locationCountry]}</p>
                </div>
                <div className='dashboard_inner_triple_row_container_1'>
                    <LocationModule onSelect={handleSelectLocation} location_id={selectedLocationId} />
                    <CrownConditionModule parent_location_id={selectedLocationId} />
                    <SoilConditionModule parent_location_id={selectedLocationId}/>
                </div>
                <div className='dashboard_inner_triple_row_container_2'>
                    <div className='map_container'>
                        <MapModule
                            location_id={selectedLocationId}
                            elevation="50"
                        />
                    </div>
                    <WeatherDataMdule parent_location_id={selectedLocationId}/>
                    <NewLoctionModule />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;