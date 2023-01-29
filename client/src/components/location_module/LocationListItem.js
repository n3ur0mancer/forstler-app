import './css/location_list_item.css';

function LocationListItem(props) {
    return (
            <div className='location_list_item_container' onClick={props.onClick}>
                <div className='location_list_item_child'>
                    <p className='location_name'>{props.location_name_text}</p>
                    <p className='location_place'>{props.location_place_text}</p>
                </div>
            </div>
    );
}

export default LocationListItem;