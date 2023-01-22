import Location_list_item from './location_list_item/location_list_item';
import Location_search from './location_search/location_search';
import './css/location_module.css';


function Location_module() {
    return (
            <div className='location_module_layout'>
                <h3 className='location_module_title'>Standorte</h3>
                <Location_search />
                <Location_list_item 
                    location_name_text='Musterwald'
                    location_place_text='Berlin, Deutschland'
                />
                <Location_list_item 
                    location_name_text='Raabenwald'
                    location_place_text='Bremen, Deutschland'
                />
                <Location_list_item 
                    location_name_text='Forserlin'
                    location_place_text='Schwel, Deutschland'
                />
            </div>
    );
}

export default Location_module;