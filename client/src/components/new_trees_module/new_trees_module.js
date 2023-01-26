import NewTreesInputField from './new_trees_input_field';
import Button from '../basic_components/button/button';

import './css/new_trees_module.css';


function NewTreesModule() {
    return (
            <div className='new_location_module_container'>
                <h3 className='new_location_module_title'>Bäume</h3>
                <NewTreesInputField input_field_name='Baumart'/>
                <NewTreesInputField input_field_name='Anzahl'/>
                <NewTreesInputField input_field_name='Alter'/>
                <Button button_text='Hinzufügen' button_style='green_button'/>
            </div>
    );
}

export default NewTreesModule;