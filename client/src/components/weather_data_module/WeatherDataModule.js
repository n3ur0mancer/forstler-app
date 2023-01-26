import WeatherDataGraph from './WeatherDataGraph';
import climate_icon from './assets/climate-temperature_icon.svg';

import './css/weather_data_module.css';


function WeatherDataMdule() {
    return (
            <div className='weather_data_module_container'>
                <h3 className='weather_data_module_title'>Wetterdaten</h3>
                <div className="weather_info_container">
                        <img src={climate_icon} className="weather_info_icon"></img>
                        <p className="weather_info_text">Gemäßigtes Klima</p>
                    </div>
                <WeatherDataGraph />
                <p className='weather_data_module_description'>Die Wetterdaten des Standorts im ausgewählten Zeitraum.</p>
            </div>
    );
}

export default WeatherDataMdule;