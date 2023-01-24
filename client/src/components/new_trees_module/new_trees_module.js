import New_trees_input_field from './new_trees_input_field';
import Button from '../basic_components/button/button';

import './css/new_trees_module.css';


function New_trees_module() {
    return (
            <div className='new_location_module_container'>
                <h3 className='new_location_module_title'>Bäume</h3>
                <New_trees_input_field input_field_name='Baumart'/>
                <New_trees_input_field input_field_name='Anzahl'/>
                <New_trees_input_field input_field_name='Alter'/>
                <Button button_text='Hinzufügen' />
            </div>
    );
}

export default New_trees_module;