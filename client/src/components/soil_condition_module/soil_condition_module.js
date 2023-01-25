import Soil_condition_graph from './soil_condition_graph';
import clay_sand_icon from './assets/sand-clay_icon.svg';

import './css/soil_condition_module.css';


function Soil_condition_module() {
    return (
            <div className='soil_condition_module_container'>
                    <h3 className='soil_condition_module_title'>Bodendaten</h3>
                    <div className="soil_info_container">
                        <img src={clay_sand_icon} className="soil_info_icon"></img>
                        <p className="soil_info_text">Sandig-lehmiger Boden</p>
                    </div>
                    <Soil_condition_graph className="soil_condition_graph"/>
                <p className='soil_condition_module_description'>Größtenteils sandiger Boden mit mittelmäßigem Anteil an runden und eckigen Steinen.</p>
            </div>
    );
}

export default Soil_condition_module;