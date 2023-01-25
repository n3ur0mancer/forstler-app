import Weather_data_graph from './weather_data_graph';
import climate_icon from './assets/climate-temperature_icon.svg';

import './css/weather_data_module.css';


function Weather_data_module() {
    return (
            <div className='weather_data_module_container'>
                <h3 className='weather_data_module_title'>Wetterdaten</h3>
                <div className="weather_info_container">
                        <img src={climate_icon} className="weather_info_icon"></img>
                        <p className="weather_info_text">Gemäßigtes Klima</p>
                    </div>
                <Weather_data_graph />
                <p className='weather_data_module_description'>Die Wetterdaten des Standorts im ausgewählten Zeitraum.</p>
            </div>
    );
}

export default Weather_data_module;