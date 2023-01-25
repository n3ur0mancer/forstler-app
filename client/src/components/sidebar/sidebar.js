import {Link} from 'react-router-dom';

import Sidebar_List_Item from './sidebar_list_item';
import './css/sidebar.css';


function Sidebar() {
    return (
            <div className='sidebar_layout'>
                <Sidebar_List_Item 
                    className_icon='logo_icon'
                    className_text='logo_text'
                    image_src={require('./assets/logo.svg').default}
                    item_text='Forstler'/>
                <Link to={"/dashboard"} className="link">
                    <Sidebar_List_Item 
                        className_icon='simple_list_icon'
                        className_text='simple_list_item'
                        image_src={require('./assets/ring.svg').default}
                        item_text='Dashboard'/>
                </Link>
                <Link to={"/guide"} className="link">
                <Sidebar_List_Item 
                    className_icon='simple_list_icon'
                    className_text='simple_list_item'
                    image_src={require('./assets/ring.svg').default}
                    item_text='Ratgeber'/>
                </Link>
            </div>
    );
}

export default Sidebar;