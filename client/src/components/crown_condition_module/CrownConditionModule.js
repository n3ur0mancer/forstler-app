import CrownConditionGraph from './CrownConditionGraph';

import './css/crown_condition_module.css';


function CrownConditionModule(props) {

    const parent_location_id = props.parent_location_id;

    return (
            <div className='crown_condition_module_container'>
                <div className='crown_condition_inner_container'>
                    <h3 className='crown_condition_module_title'>Kronenverlichtung</h3>
                    <div className='time_period_selection_button'></div>
                </div>
                    <CrownConditionGraph className="crown_condition_graph" location_id = {parent_location_id}/>
                <p className='crown_condition_module_description'>Die Kronenverlichtung des Standorts im ausgewählten Zeitraum.</p>
            </div>
    );
}

export default CrownConditionModule;