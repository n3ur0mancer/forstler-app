import Sidebar from './components/sidebar/sidebar';
import Location_module from './components/location_module/location_module';
import Tree_recommendation_module from './components/tree_recommendation_module/tree_recommendation_module';
import Soil_condition_module from './components/soil_condition_module/soil_condition_module';
import Map_module from './components/map_module/map_module';
import Weather_data_module from './components/weather_data_module/weather_data_module';
import New_trees_module from './components/new_trees_module/new_trees_module';
import './css/dashboard.css';


function Guide() {

    const location_name = "Plänterwald, Berlin";

    return (
            <div className='dashboard_outer_double_row_container'>
                <Sidebar />
                <div className='dashboard_inner_triple_column_container'>
                    <div className='view_title'>
                        <h2>Ratgeber</h2>
                        <p>{location_name}</p>
                    </div> 
                    <div className='dashboard_inner_triple_row_container_1'>
                        <Location_module/>
                        <Tree_recommendation_module location_name={location_name}/>
                        <Soil_condition_module />
                    </div>
                    <div className='dashboard_inner_triple_row_container_2'>
                        <div className='map_container'>
                            <Map_module latitude="52.488" longitude="13.4672" />
                        </div>
                        <Weather_data_module/>
                        <New_trees_module />
                    </div>
                </div>
            </div>
    );
}

export default Guide;