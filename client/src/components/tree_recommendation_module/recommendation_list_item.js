import soil_clay_icon from './assets/clay_icon.svg';
import soil_sand_icon from './assets/sand_icon.svg';
import soil_sand_clay_icon from './assets/sand-clay_icon.svg';

import sunny_icon from './assets/sunny_icon.svg';
import sunny_shadow_icon from './assets/sunny-shadow_icon.svg';
import shadow_icon from './assets/shadow_icon.svg';

import climate_icon from './assets/climate-temperature_icon.svg';

import './css/recommendation_list_item.css';


function Recommendation_list_item(props) {
    return (
            <div className='recommendation_list_item_container'>
                <div className="tree_name_container">
                    <h4 className="tree_common_name">{props.tree_common_name}</h4>
                    <p className="tree_scientific_name">{props.tree_scientific_name}</p>
                </div>
                <div className="tree_soil_container">
                    <img src={soil_sand_clay_icon} className="soil_icon"></img>
                    <p>{props.tree_soil_preference}</p>
                </div>
                <div className="tree_sun_container">
                    <img src={sunny_shadow_icon} className="sun_icon"></img>
                    <p>{props.tree_sun_preference}</p>
                </div>
                <div className="tree_climate_container">
                    <img src={climate_icon} className="climate_icon"></img>
                    <p>{props.tree_climate_preference}</p>
                </div>
            </div>
    );
}

export default Recommendation_list_item;