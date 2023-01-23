import New_location_input_field from './new_location_input_field';
import Button from '../basic_components/button/button';
import Checkbox from '../basic_components/checkbox/checkbox';

import './css/new_location_module.css';


function New_loction_module() {
    return (
            <div className='new_location_module_container'>
                <h3 className='new_location_module_title'>Neuer Standort</h3>
                <New_location_input_field input_field_name='Standort Name'/>
                <New_location_input_field input_field_name='Ort'/>
                <div className='new_location_module_coordinates_container'>
                    <New_location_input_field input_field_name='Längengrad'/>
                    <New_location_input_field input_field_name='Breitengrad'/>
                </div>
                <Checkbox />
                <Button button_text='Bestätigen' />
            </div>
    );
}

export default New_loction_module;