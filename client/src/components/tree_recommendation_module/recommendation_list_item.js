import './css/recommendation_list_item.css';


function Recommendation_list_item(props) {
    return (
            <div className='recommendation_list_item_container'>
                <div className="tree_name_container">
                    <h4 className="tree_common_name">{props.tree_common_name}</h4>
                    <p className="tree_scientific_name">{props.tree_scientific_name}</p>
                </div>
                <div className="tree_soil_container">
                    <img></img>
                    <p>{props.tree_soil_preference}</p>
                </div>
                <div className="tree_sun_container">
                    <img></img>
                    <p>{props.tree_sun_preference}</p>
                </div>
                <div className="tree_climate_container">
                    <img></img>
                    <p>{props.tree_climate_preference}</p>
                </div>
            </div>
    );
}

export default Recommendation_list_item;