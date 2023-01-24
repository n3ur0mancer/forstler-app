import Weather_data_graph from './weather_data_graph';

import './css/weather_data_module.css';


function Weather_data_module() {
    return (
            <div className='weather_data_module_container'>
                <h3 className='weather_data_module_title'>Wetterdaten</h3>
                <Weather_data_graph />
                <p className='weather_data_module_description'>Die Wetterdaten des Standorts im ausgewählten Zeitraum.</p>
            </div>
    );
}

export default Weather_data_module;