import LocationListItem from './LocationListItem';
import LocationSearch from './LocationSearch';
import './css/location_module.css';


function LocationModule() {
    return (
            <div className='location_module_layout'>
                <h3 className='location_module_title'>Standorte</h3>
                <LocationSearch />
                <LocationListItem 
                    location_name_text='Musterwald'
                    location_place_text='Berlin, Deutschland'
                />
                <LocationListItem 
                    location_name_text='Raabenwald'
                    location_place_text='Bremen, Deutschland'
                />
                <LocationListItem 
                    location_name_text='Forserlin'
                    location_place_text='Schwel, Deutschland'
                />
            </div>
    );
}

export default LocationModule;