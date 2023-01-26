import NewLocationInputField from './NewLocationInputField';
import Button from '../basic_components/button/Button';
import Checkbox from '../basic_components/checkbox/Checkbox';

import './css/new_location_module.css';


function NewLoctionModule() {
    return (
            <div className='new_location_module_container'>
                <h3 className='new_location_module_title'>Neuer Standort</h3>
                <NewLocationInputField input_field_name='Standort Name'/>
                <NewLocationInputField input_field_name='Ort'/>
                <div className='new_location_module_coordinates_container'>
                    <NewLocationInputField input_field_name='Längengrad'/>
                    <NewLocationInputField input_field_name='Breitengrad'/>
                </div>
                <Checkbox />
                <Button button_text='Bestätigen' button_style='green_button'/>
            </div>
    );
}

export default NewLoctionModule;