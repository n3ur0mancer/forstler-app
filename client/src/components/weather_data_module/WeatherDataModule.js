import WeatherDataGraph from './WeatherDataGraph';
import climate_icon from './assets/climate-temperature_icon.svg';
import './css/weather_data_module.css';

function WeatherDataMdule(props) { 
    return (
            <div className='weather_data_module_container'>
                <h3 className='weather_data_module_title'>Wetterdaten</h3>
                <div className="weather_info_container">
                        <img src={climate_icon} className="weather_info_icon"></img>
                        <p className="weather_info_text">Gemäßigtes Klima</p>
                    </div>
                <WeatherDataGraph location_id={props.parent_location_id}/>
                <p className='weather_data_module_description'>Durchschnittstemperatur in Grad Celsius.</p>
            </div>
    );
}

export default WeatherDataMdule;