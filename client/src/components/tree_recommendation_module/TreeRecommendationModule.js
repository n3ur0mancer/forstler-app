import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './css/tree_recommendation_module.css';

const SERVER_URL = 'http://localhost:3001';

const columns = [
    { field: 'tree_common_name', headerName: 'Baum'},
    { field: 'tree_genus', headerName: 'Gattung'},
    { field: 'tree_species', headerName: 'Spezies'},
    { field: 'tree_preferred_soil', headerName: 'Boden'},
    { field: 'tree_preferred_light', headerName: 'Licht'},
    { field: 'tree_preferred_climate', headerName: 'Klima'},
    { field: 'tree_preferred_precipitation', headerName: 'Niederschlag'},
];

function TreeRecommendationModule(props) {
    const [rows, setRows] = React.useState([]);
    const location_id = props.parent_location_id;

    React.useEffect(() => {
        fetch(`${SERVER_URL}/guide/tree_recommendations/${location_id}`)
          .then(res => res.json())
          .then(data => {
            if (data.recommendedTrees.length === 0) {
              setRows([]);
            } else {
              setRows(data.recommendedTrees);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }, [location_id]);
      
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

