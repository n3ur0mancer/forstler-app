import Sidebar from '../components/sidebar/Sidebar';
import LocationModule from '../components/location_module/LocationModule';
import CrownConditionModule from '../components/crown_condition_module/CrownConditionModule';
import SoilConditionModule from '../components/soil_condition_module/SoilConditionModule';
import MapModule from '../components/map_module/MapModule';
import WeatherDataMdule from '../components/weather_data_module/WeatherDataModule';
import NewLoctionModule from '../components/new_location_module/NewLocationModule';
import './css/dashboard.css';


function Dashboard() {
    const location_name = "Plänterwald, Berlin";
    const location_latitude = "52.488";
    const location_longitude = "13.47";
    const iot_latitude= "52.48775360216396";
    const iot_longitude= "13.47244510990844";
    
    const ring_black = require('../components/sidebar/assets/ring_black.svg').default
    const ring_white = require('../components/sidebar/assets/ring_white.svg').default

    return (
            <div className='dashboard_outer_double_row_container'>
                <Sidebar ring_colour_dashboard={ring_white}
                         list_item_style_dashboard='sidebar_list_item_selected'
                         ring_colour_guide={ring_black}
                         list_item_style_guide='sidebar_list_item'/>
                <div className='dashboard_inner_triple_column_container'>
                    <div className='view_title'>
                        <h2>Dashboard</h2>
                        <p>{location_name}</p>
                    </div> 
                    <div className='dashboard_inner_triple_row_container_1'>
                        <LocationModule/>
                        <CrownConditionModule/>
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
                        <WeatherDataMdule/>
                        <NewLoctionModule />
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;