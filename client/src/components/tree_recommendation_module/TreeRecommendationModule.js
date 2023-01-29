import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './css/tree_recommendation_module.css';


const rows = [
    { id: 1, col1: 'Buche', col2: 'Fagus sylvatica', col3: 'sandiger Boden', col4: 'sonnig-halbschattig', col5: 'gemäßigt',col6: 'moderat' },
    { id: 2, col1: 'Esche', col2: 'Fraxinus excelsiora', col3: 'sandiger Boden', col4: 'sonnig-halbschattig', col5: 'gemäßigt',col6: 'moderat' },
    { id: 3, col1: 'Hainbuche', col2: 'Carpinus betulus', col3: 'sandiger Boden', col4: 'sonnig', col5: 'gemäßigt',col6: 'moderat' },
];
  
const columns = [
    { field: 'col1', headerName: 'Baum'},
    { field: 'col2', headerName: 'Wissenschaftlicher Name'},
    { field: 'col3', headerName: 'Boden'},
    { field: 'col4', headerName: 'Licht'},
    { field: 'col5', headerName: 'Klima'},
    { field: 'col6', headerName: 'Niederschlag'},
];

function TreeRecommendationModule(props) {
    return (
        <div className='tree_recommendation_module_container'>
            <h3 className='tree_recommendation_module_title'>Baumarten für {props.location_name}</h3>
            <DataGrid 
            rows={rows} 
            columns={columns}
            rowHeight={25} 
            headerHeight={25}
            sx={{marginLeft: 2, marginRight: 2, marginBottom: 2, marginTop: 1}}
            />
        </div>
    );
}
    
export default TreeRecommendationModule;