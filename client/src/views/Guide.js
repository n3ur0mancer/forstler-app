import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import LocationModule from '../components/location_module/LocationModule';
import TreeRecommendationModule from '../components/tree_recommendation_module/TreeRecommendationModule';
import SoilConditionModule from '../components/soil_condition_module/SoilConditionModule';
import MapModule from '../components/map_module/MapModule';
import WeatherDataMdule from '../components/weather_data_module/WeatherDataModule';
import NewTreesModule from '../components/new_trees_module/NewTreesModule';
import './css/dashboard.css';

const SERVER_URL = 'http://localhost:3001';

function Guide() {
    const [locationName, setLocaitonName] = useState('Name');
    const [locationCountry, setLocaitonCountry] = useState('Name');
    const ring_black = require('../components/sidebar/assets/ring_black.svg').default
    const ring_white = require('../components/sidebar/assets/ring_white.svg').default

    useEffect(() => {
        fetch(`${SERVER_URL}/dashboard/location_name/100001`)
          .then(res => res.json())
          .then(data => {
            const locationName = (data.location_name);
            setLocaitonName(locationName);
            const locationCountry = (data.country_code);
            setLocaitonCountry(locationCountry);
          })
      }, []);

    return (
            <div className='dashboard_outer_double_row_container'>
                <Sidebar ring_colour_dashboard={ring_black}
                         list_item_style_dashboard='sidebar_list_item'
                         ring_colour_guide={ring_white}
                         list_item_style_guide='sidebar_list_item_selected'/>
                <div className='dashboard_inner_triple_column_container'>
                    <div className='view_title'>
                        <h2>Ratgeber</h2>
                        <p>{[locationName]}, {[locationCountry]}</p>
                    </div> 
                    <div className='dashboard_inner_triple_row_container_1'>
                        <LocationModule/>
                        <TreeRecommendationModule location_name={[locationName]}/>
                        <SoilConditionModule />
                    </div>
                    <div className='dashboard_inner_triple_row_container_2'>
                        <div className='map_container'>
                            <MapModule 
                            elevation="50"
                            sun_hours="5:30"
                            />
                        </div>
                        <WeatherDataMdule/>
                        <NewTreesModule />
                    </div>
                </div>
            </div>
    );
}

export default Guide;