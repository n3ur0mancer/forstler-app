import './checkbox.css';


function Checkbox(props) {
    return (
            <div className='new_location_input_field_container'>
                <label class="container">IoT Modul vorhanden
                    <input type="checkbox" className='checkbox'/>
                </label>
            </div>
    );
}

export default Checkbox;

