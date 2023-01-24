import './css/new_trees_input_field.css';


function New_trees_input_field(props) {
    return (
            <div className='new_trees_input_field_container'>
                <form >
                    <label className='input_field_container'>
                        {props.input_field_name}
                        <input type="text" name="name" className='input_field'/>
                    </label>
                </form>
            </div>
    );
}

export default New_trees_input_field;