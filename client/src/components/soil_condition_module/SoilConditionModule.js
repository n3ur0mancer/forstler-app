import SoilConditionGraph from './SoilConditionGraph';
import clay_sand_icon from './assets/sand-clay_icon.svg';

import './css/soil_condition_module.css';



function SoilConditionModule(props) {
    return (
            <div className='soil_condition_module_container'>
                    <h3 className='soil_condition_module_title'>Bodendaten</h3>
                    <div className="soil_info_container">
                        <img src={clay_sand_icon} className="soil_info_icon"></img>
                        <p className="soil_info_text">Sandig-lehmiger Boden</p>
                    </div>
                    <SoilConditionGraph className="soil_condition_graph" location_id={props.parent_location_id}/>
                <p className='soil_condition_module_description'>Bodenbeschaffenheit des ausgwählten Standorts.</p>
            </div>
    );
}

export default SoilConditionModule;