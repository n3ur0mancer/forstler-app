import Sidebar from './components/sidebar/sidebar';
import LocationModule from './components/location_module/location_module';
import TreeRecommendationModule from './components/tree_recommendation_module/tree_recommendation_module';
import SoilConditionModule from './components/soil_condition_module/soil_condition_module';
import MapModule from './components/map_module/map_module';
import Weather_data_module from './components/weather_data_module/weather_data_module';
import NewTreesModule from './components/new_trees_module/new_trees_module';
import './css/dashboard.css';


function Guide() {

    const location_name = "Plänterwald, Berlin";
    const location_latitude = "52.488";
    const location_longitude = "13.47";
    const iot_latitude= "52.48775360216396";
    const iot_longitude= "13.47244510990844";

    const ring_black = require('./components/sidebar/assets/ring_black.svg').default
    const ring_white = require('./components/sidebar/assets/ring_white.svg').default

    return (
            <div className='dashboard_outer_double_row_container'>
                <Sidebar ring_colour_dashboard={ring_black}
                         list_item_style_dashboard='sidebar_list_item'
                         ring_colour_guide={ring_white}
                         list_item_style_guide='sidebar_list_item_selected'/>
                <div className='dashboard_inner_triple_column_container'>
                    <div className='view_title'>
                        <h2>Ratgeber</h2>
                        <p>{location_name}</p>
                    </div> 
                    <div className='dashboard_inner_triple_row_container_1'>
                        <LocationModule/>
                        <TreeRecommendationModule location_name={location_name}/>
                        <SoilConditionModule />
                    </div>
                    <div className='dashboard_inner_triple_row_container_2'>
                        <div className='map_container'>
                            <MapModule 
                            latitude={location_latitude} 
                            longitude={location_longitude} 
                            marker_latitude={iot_latitude}
                            marker_longitude={iot_longitude}/>
                        </div>
                        <Weather_data_module/>
                        <NewTreesModule />
                    </div>
                </div>
            </div>
    );
}

export default Guide;