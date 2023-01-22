import Sidebar from './components/sidebar/sidebar';
import Location_module from './components/location_module/location_module';
import Crown_condition_module from './components/crown_condition_module/crown_condition_module';
import Map_module from './components/map_module/map_module';
import './css/dashboard.css';


function Dashboard() {
    return (
            <div className='dashboard_outer_double_row_container'>
                <Sidebar />
                <div className='dashboard_inner_triple_column_container'>
                    <div className='view_title'>
                        <h2>Dashboard</h2>
                        <p>Plänterwald, Berlin</p>
                    </div> 
                    <div className='dashboard_inner_triple_row_container_1'>
                        <Location_module/>
                        <Crown_condition_module/>
                    </div>
                    <div className='dashboard_inner_triple_row_container_2'>
                        <Map_module/>
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;