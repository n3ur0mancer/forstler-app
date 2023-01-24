import Recommendation_list_item from './recommendation_list_item';

import './css/tree_recommendation_module.css';


function Tree_recommendation_module(props) {
    return (
            <div className='tree_recommendation_module_container'>
                <h3 className='tree_recommendation_module_title'>Potentielle Baumarten</h3>
                <p className="tree_recommendation_module_description">Basierend auf den Auswertungen der Lage, der Wetterdaten und der Bodendaten eignen sich folgende Baumarten für {props.location_name}:</p>
                <ul>
                    <Recommendation_list_item tree_common_name="Buche" 
                                            tree_scientific_name="Fagus sylvatica"
                                            tree_soil_preference="Sandiger Boden"
                                            tree_sun_preference="Sonnig-halbschattig"
                                            tree_climate_preference="Gemäßigte Klimazone"/>
                    <Recommendation_list_item tree_common_name="Esche" 
                                            tree_scientific_name="Fraxinus excelsior"
                                            tree_soil_preference="Sandig-lehmiger Boden"
                                            tree_sun_preference="Sonnig"
                                            tree_climate_preference="Gemäßigte Klimazone"/>
                    <Recommendation_list_item tree_common_name="Hainbuche" 
                                            tree_scientific_name="Carpinus betulus"
                                            tree_soil_preference="Sandiger Boden"
                                            tree_sun_preference="Sonnig-halbschattig"
                                            tree_climate_preference="Gemäßigte Klimazone"/>
                </ul>
            </div>
    );
}

export default Tree_recommendation_module;